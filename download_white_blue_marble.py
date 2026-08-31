import urllib.request
import os

out_dir = r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\backgrounds'

# Curate top-tier White Marble with Dark Blue Veins & Textures
marble_bgs = {
    "white_blue_marble.jpg": "https://images.unsplash.com/photo-1599818816949-166292518e95?auto=format&fit=crop&w=2800&q=90", # White marble with blue/navy veins
    "blue_marble_luxury.jpg": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2800&q=90", # White/blue fluid marble veining
    "calacatta_marble.jpg": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2800&q=90" # Clean luxury white marble
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in marble_bgs.items():
    filepath = os.path.join(out_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(filepath, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded {filename}: {os.path.getsize(filepath) // 1024} KB")
    except Exception as e:
        print(f"Error {filename}: {e}")
