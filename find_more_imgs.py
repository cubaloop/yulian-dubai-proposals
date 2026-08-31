import re
import urllib.request

with open(r'C:\Users\Yo\.gemini\antigravity\brain\b068e1a6-fac6-45ce-82f4-2ea936abe781\.system_generated\steps\53\content.md', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Look for all behance image patterns
img_matches = re.findall(r'https://[^\s"\'<>]+\.(?:jpg|png|webp)', text)
print(f"Found {len(img_matches)} images:")
for m in set(img_matches):
    if 'behance' in m:
        print(m)
