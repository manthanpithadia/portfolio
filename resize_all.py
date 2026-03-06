import os
from PIL import Image

image_dir = "src/assets/images"

for filename in os.listdir(image_dir):
    if "resized" in filename:
        continue
        
    input_path = os.path.join(image_dir, filename)
    
    # Establish max widths
    tw = 1200
    if filename.startswith("bg"):
        tw = 1920
    elif filename.startswith("profile_pic"):
        tw = 400
        
    try:
        with Image.open(input_path) as img:
            width, height = img.size
            
            # Convert to RGB if it's RGBA but we are saving as JPEG (just in case, though we primarily have PNG/BMP)
            
            # Check if resize is needed
            if width > tw:
                ratio = tw / width
                new_width = int(width * ratio)
                new_height = int(height * ratio)
                resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                
                if filename.lower().endswith(".bmp"):
                    resized_img.save(input_path, "BMP")
                elif filename.lower().endswith(".png"):
                    resized_img.save(input_path, "PNG", optimize=True)
                else:
                    resized_img.save(input_path, img.format or "PNG", optimize=True)
                print(f"Resized {filename} to {new_width}x{new_height}")
            else:
                # Try to optimize PNG sizes anyway
                if filename.lower().endswith(".png"):
                    img.save(input_path, "PNG", optimize=True)
                print(f"Optimized {filename} (no resize needed)")
    except Exception as e:
        print(f"Error processing {filename}:", e)
