// ---------------------------
// CONFIG
// ---------------------------
const MODEL_URL = "./models/student_model_fp16.onnx";
const IMAGE_DIR = "./test_images/";
const CLASSES = ['Normal', 'Glaucoma', 'Myopia', 'Diabetes'];
const TEST_IMAGES = [
  "sample1.png",
  "sample2.png",
  "sample3.png",
  "sample4.png",
  "sample5.png"
]; // add more filenames from your dataset

let ortSession = null;
let selectedImage = null;

// ---------------------------
// LOAD MODEL ON PAGE LOAD (async)
// ---------------------------
async function loadModel() {
  ortSession = await ort.InferenceSession.create(MODEL_URL, {
    executionProviders: ['wasm'], // FP16 compatible
    graphOptimizationLevel: 'all'
  });
  console.log("FP16 ONNX model loaded!");
}

// ---------------------------
// IMAGE PICKER
// ---------------------------
document.getElementById("pick-image").addEventListener("click", () => {
  const idx = Math.floor(Math.random() * TEST_IMAGES.length);
  const filename = TEST_IMAGES[idx];
  selectedImage = filename;
  document.getElementById("selected-image").src = IMAGE_DIR + filename;
  document.getElementById("prediction-output").innerText = "Prediction: -";
  document.getElementById("inference-time").innerText = "Inference Time: -";
});

// ---------------------------
// RUN INFERENCE
// ---------------------------
document.getElementById("run-inference").addEventListener("click", async () => {
  if (!selectedImage) {
    alert("Please pick an image first.");
    return;
  }

  const imgElement = document.getElementById("selected-image");
  const tensor = await imageToTensor(imgElement);

  const startTime = performance.now();
  const feeds = {};
  feeds[ortSession.inputNames[0]] = tensor;
  const results = await ortSession.run(feeds);
  const endTime = performance.now();

  const outputTensor = results[ortSession.outputNames[0]];
  const outputData = outputTensor.data;
  const predIndex = outputData.indexOf(Math.max(...outputData));
  const confidence = outputData[predIndex];

  document.getElementById("prediction-output").innerText =
    `Prediction: ${CLASSES[predIndex]} (Confidence: ${confidence.toFixed(4)})`;
  document.getElementById("inference-time").innerText =
    `Inference Time: ${(endTime - startTime).toFixed(2)} ms`;
});

// ---------------------------
// IMAGE TO TENSOR (224x224, normalized)
// ---------------------------
async function imageToTensor(img) {
  const canvas = document.createElement("canvas");
  canvas.width = 224;
  canvas.height = 224;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, 224, 224);
  const imageData = ctx.getImageData(0, 0, 224, 224);
  const { data } = imageData;

  const floatData = new Float32Array(1 * 3 * 224 * 224);
  for (let i = 0; i < 224 * 224; i++) {
    floatData[i] = (data[i * 4] / 255 - 0.485) / 0.229;       // R
    floatData[i + 224*224] = (data[i * 4 + 1] / 255 - 0.456) / 0.224; // G
    floatData[i + 2*224*224] = (data[i * 4 + 2] / 255 - 0.406) / 0.225; // B
  }

  return new ort.Tensor("float16", floatData, [1, 3, 224, 224]); // FP16 tensor
}

// ---------------------------
// INIT
// ---------------------------
loadModel();
