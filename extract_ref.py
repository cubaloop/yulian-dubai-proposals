import re
import urllib.request
import os

with open(r'C:\Users\Yo\.gemini\antigravity\brain\b068e1a6-fac6-45ce-82f4-2ea936abe781\.system_generated\steps\53\content.md', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

urls = re.findall(r'https://mir-s3-cdn-cf\.behance\.net/project_modules/[^"\'\s<>]+', text)
unique_urls = list(set(urls))
print(f"Total Behance images found: {len(unique_urls)}")
for i, u in enumerate(unique_urls):
    print(f"{i}: {u}")

# Download high-res module images to inspect design
out_dir = r'C:\Users\Yo\.gemini\antigravity\scratch\yulian-luxury-proposals\assets\images\behance_ref'
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
for i, url in enumerate(unique_urls[:8]):
    try:
        req = urllib.request.Request(url, headers=headers)
        filename = os.path.join(out_dir, f'ref_{i+1}.jpg')
        with urllib.request.urlopen(req) as resp, open(filename, 'wb') as out_f:
            out_f.write(resp.read())
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed {url}: {e}")
