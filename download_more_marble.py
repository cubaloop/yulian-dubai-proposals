import urllib.request
import os

out_dir = r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\backgrounds'

urls = {
    "white_navy_marble_1.jpg": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=2800&q=90", # White texture with deep mineral blue lines
    "white_navy_marble_2.jpg": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=2800&q=90", # Fluid white acrylic and deep navy blue veins
    "white_navy_marble_3.jpg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2800&q=90"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in urls.items():
    filepath = os.path.join(out_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(filepath, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded {filename}: {os.path.getsize(filepath) // 1024} KB")
    except Exception as e:
        print(f"Error {filename}: {e}")
