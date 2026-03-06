from PIL import Image
import os

images_to_resize = [
    "src/assets/images/img_mtd.png",
    "src/assets/images/img_vision.png",
    "src/assets/images/img_growmore.png",
    "src/assets/images/img_transact.png",
    "src/assets/images/img_kanhalo.png"
]

target_width = 800

for input_path in images_to_resize:
    output_path = input_path.replace(".png", "_resized.png")
    try:
        with Image.open(input_path) as img:
            # Let's get actual size and maintain aspect ratio
            width, height = img.size
            if width > target_width:
                ratio = target_width / width
                new_width = int(width * ratio)
                new_height = int(height * ratio)
                
                resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                resized_img.save(output_path, "PNG")
                print(f"Resized {input_path} to {new_width}x{new_height} and saved as {output_path}")
            else:
                print(f"Skipped {input_path} as it's already smaller than {target_width}px wide")
    except Exception as e:
        print(f"Error processing {input_path}:", e)
