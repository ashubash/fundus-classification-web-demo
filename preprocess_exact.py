import os
import json
import glob
import numpy as np
from PIL import Image
import torchvision.transforms as transforms

def _hist_match(src: np.ndarray, ref: np.ndarray) -> np.ndarray:
    src_hist = np.bincount(src.flatten(), minlength=256).astype(np.float32)
    ref_hist = np.bincount(ref.flatten(), minlength=256).astype(np.float32)
    src_cdf = np.cumsum(src_hist); src_cdf /= (src_cdf[-1] + 1e-12)
    ref_cdf = np.cumsum(ref_hist); ref_cdf /= (ref_cdf[-1] + 1e-12)
    lut = np.zeros(256, dtype=np.uint8)
    j = 0
    for i in range(256):
        while j < 255 and ref_cdf[j] < src_cdf[i]:
            j += 1
        lut[i] = j
    return lut[src]

def preprocess_for_student(image_path):
    """
    Exact replica of fine view + val_transform for student_model_float32.onnx.
    Input: Original full-size image path.
    Output: (1, 3, 224, 224) normalized CHW tensor.
    """
    # Load original as RGB
    img = Image.open(image_path).convert('RGB')
    
    # Step 1: Resize to 224x224 (as in _make_views)
    img_resized = img.resize((224, 224), Image.BILINEAR)
    arr = np.array(img_resized).astype(np.uint8)
    R, G, B = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    
    # Step 2: Histogram-match G to R, create fine view [R, matched_G, B]
    matched_G = _hist_match(G, R)
    fine_np = np.stack([R, matched_G, B], axis=-1)  # HWC
    fine_img = Image.fromarray(fine_np)
    
    # Step 3: Apply val_transform
    val_transform = transforms.Compose([
        transforms.Resize(256),  # Upscale
        transforms.CenterCrop(224),  # Center crop
        transforms.ToTensor(),  # CHW, [0,1] float
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])
    tensor = val_transform(fine_img)  # Shape: (3, 224, 224)
    tensor = tensor.unsqueeze(0)  # Batch: (1, 3, 224, 224)
    
    return tensor.numpy()  # For .npy save

def main():
    test_split_path = './test_split.json'
    test_images_dir = './test_images'
    output_dir = './preprocessed'
    preproc_json_path = './test_split_preproc.json'
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Load test_split.json
    with open(test_split_path, 'r') as f:
        test_split = json.load(f)
    
    preproc_entries = []
    
    for entry in test_split:
        original_rel_path = entry['full_path']  # e.g., "test_images/16641_right_eyepacs.png"
        label = entry['class_label_remapped']
        full_image_path = os.path.join(test_images_dir, os.path.basename(original_rel_path))
        
        if not os.path.exists(full_image_path):
            print(f"Warning: Image not found: {full_image_path}")
            continue
        
        try:
            # Filename for .npy (no ext)
            filename = os.path.splitext(os.path.basename(original_rel_path))[0]
            npy_path = f"{output_dir}/{filename}.npy"
            
            # Preprocess exactly
            tensor = preprocess_for_student(full_image_path)
            
            # Save .npy
            np.save(npy_path, tensor)
            
            preproc_entries.append({
                "original_path": original_rel_path,
                "preproc_path": f"./{npy_path}",
                "class_label_remapped": label
            })
            
            print(f"Preprocessed (fine+val): {npy_path} (shape: {tensor.shape}, label: {label})")
            
        except Exception as e:
            print(f"Error processing {original_rel_path}: {e}")
    
    # Save updated JSON
    with open(preproc_json_path, 'w') as f:
        json.dump(preproc_entries, f, indent=2)
    
    print(f"\nExact preprocessing complete! New file: {preproc_json_path}")
    print(f"Total: {len(preproc_entries)} entries")

if __name__ == "__main__":
    main()