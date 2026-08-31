import fitz
from PIL import Image, ImageChops, ImageEnhance
import os

def crop_and_enhance(doc_path, out_folder, prefix):
    os.makedirs(out_folder, exist_ok=True)
    doc = fitz.open(doc_path)
    for i, page in enumerate(doc):
        # Render high-res 250 DPI
        pix = page.get_pixmap(dpi=250)
        img_path_temp = os.path.join(out_folder, f'temp_{i}.png')
        pix.save(img_path_temp)
        
        # Open with PIL and auto-crop white borders
        img = Image.open(img_path_temp).convert('RGB')
        
        # Invert to find non-white bounding box
        bg = Image.new(img.mode, img.size, (255, 255, 255))
        diff = ImageChops.difference(img, bg)
        bbox = diff.getbbox()
        
        if bbox:
            # Crop to actual photo area
            cropped = img.crop(bbox)
        else:
            cropped = img
            
        # Subtle enhancement: slight contrast & sharpness boost
        enhancer_con = ImageEnhance.Contrast(cropped)
        enhanced = enhancer_con.enhance(1.08)
        enhancer_sharp = ImageEnhance.Sharpness(enhanced)
        enhanced = enhancer_sharp.enhance(1.25)
        
        out_file = os.path.join(out_folder, f'{prefix}_page_{i+1:02d}.jpg')
        enhanced.save(out_file, 'JPEG', quality=95)
        if os.path.exists(img_path_temp):
            os.remove(img_path_temp)
        print(f'Processed {out_file}, size: {enhanced.size}')

# Re-process Reva (PDF 1)
crop_and_enhance(
    r'C:\Users\Yo\.gemini\antigravity\brain\b068e1a6-fac6-45ce-82f4-2ea936abe781\.user_uploaded\media_1788199481046.pdf',
    r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\reva',
    'reva'
)

# Re-process Aykon (PDF 2)
crop_and_enhance(
    r'C:\Users\Yo\.gemini\antigravity\brain\b068e1a6-fac6-45ce-82f4-2ea936abe781\.user_uploaded\media_1788199481440.pdf',
    r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\aykon',
    'aykon'
)
print("All images cropped & enhanced successfully!")
