import urllib.request
import os

out_dir = r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\backgrounds'
os.makedirs(out_dir, exist_ok=True)

# Curated high-res dark luxury architectural & stone backgrounds matching Horizon Grove
bg_urls = {
    "hero_horizon_bg.jpg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85", # Moody luxury modern glass villa at dusk
    "hero_dubai_night.jpg": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85", # Dubai luxury skyline golden dusk
    "dark_marble_texture.jpg": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85", # Minimalist luxury interior / dark stone
    "slate_stone_bg.jpg": "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2400&q=85", # Monolithic dark stone texture
    "restaurant_bg.jpg": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85", # Luxury open space restaurant
    "townhouse_bg.jpg": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85" # Luxury modern townhouse villa
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in bg_urls.items():
    filepath = os.path.join(out_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(filepath, 'wb') as f:
            f.write(resp.read())
        print(f"Successfully downloaded {filename} ({os.path.getsize(filepath) // 1024} KB)")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
