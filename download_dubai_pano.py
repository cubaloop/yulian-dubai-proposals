import urllib.request
import os

out_dir = r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\backgrounds'

# Curate top-tier Dubai panoramic skyline photography
dubai_panoramas = {
    "dubai_skyline_hero.jpg": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2800&q=90", # Iconic Dubai skyline with Burj Khalifa sunset
    "dubai_marina_panorama.jpg": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2800&q=90", # Dubai Marina panoramic water skyline
    "dubai_downtown_twilight.jpg": "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2800&q=90" # Dubai Downtown dusk
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in dubai_panoramas.items():
    filepath = os.path.join(out_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(filepath, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded {filename}: {os.path.getsize(filepath) // 1024} KB")
    except Exception as e:
        print(f"Error {filename}: {e}")
