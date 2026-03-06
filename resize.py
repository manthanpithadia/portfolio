from PIL import Image
import os

input_path = "src/assets/images/profile_pic.png"
output_path = "src/assets/images/profile_pic_resized.png"

try:
    with Image.open(input_path) as img:
        # Resize using LANCZOS for high-quality downsampling
        new_size = (200, 200) # Assuming the image is roughly square
        # Let's get actual size and maintain aspect ratio just in case
        width, height = img.size
        # Make it max 400px wide or high
        ratio = min(200/width, 200/height)
        new_width = int(width * ratio)
        new_height = int(height * ratio)
        
        resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        resized_img.save(output_path, "PNG")
        print("Image resized successfully to", new_width, "x", new_height)
except Exception as e:
    print("Error:", e)
