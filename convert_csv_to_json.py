import pandas as pd
import json

df = pd.read_csv("test_split.csv")

# Update paths to point to 'test_images' folder
df['full_path'] = df['full_path'].apply(lambda x: "test_images/" + x.split("/")[-1])

# Convert to list of dicts
data = df.to_dict(orient="records")

# Save as JSON
with open("test_split.json", "w") as f:
    json.dump(data, f, indent=2)
