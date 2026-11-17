# S07 Launcher

Launcher 2 แผงสไตล์ Tesla สำหรับเปิดบน webview ของจอ Deepal S07
**ซ้าย = แผนที่/นำทาง · ขวา = desktop ที่มีแอป (YouTube / YouTube Music)**

## ต้องใส่ key ไหม?

**1) YouTube Data API key (ฟรี) — ควรใส่**
ใช้ให้มินิแอป YouTube / YouTube Music **ค้นหา + เล่นวิดีโอในแผงได้** (ทั้งคู่ใช้ key เดียวกัน)
- ขอที่ https://console.cloud.google.com/ → เปิด **YouTube Data API v3** → Create API key
- วางใน `config.js` ช่อง `youtubeApiKey`
- ถ้าไม่ใส่: เปิดแอปได้แต่ค้นหา/เล่นในแผงไม่ได้ (จะขึ้นข้อความให้ใส่ key)

**2) Google Maps API key — ไม่จำเป็น**
เว้นว่าง = ใช้แผนที่ **Esri (เทา-ดำ)** ฟรี + ค้นหาแบบ **Photon/Nominatim** ฟรี
ใส่เฉพาะถ้าอยากได้แผนที่ Google แท้ + ป้ายไทย + จราจร → ช่อง `googleMapsKey`

## ฟีเจอร์
- **แผนที่:** ธีมมืด, **ช่องค้นหามี suggest แบบ Google Maps** (พิมพ์แล้วขึ้นรายการ)
- **นำทางในแอป:** กด "นำทาง" → ตามตำแหน่งบนเส้นทาง + ลิสต์การเลี้ยวภาษาไทย (ปุ่มไอคอน Google Maps ข้างๆ ไว้นำทางเสียง)
- **desktop แอป:** กด YouTube / YouTube Music → ค้นหา+เล่นในแผง (ดูแผนที่ไปด้วยได้), ปุ่มเต็มจอ
- ปรับแผนที่ซ้าย/ขวา, สัดส่วน, สีมืด/สว่าง ที่ปุ่ม ⚙

## วิธีเอาขึ้นจอรถ
1. host โฟลเดอร์ `launcher/` ที่ได้ URL เช่น **GitHub Pages** (ฟรี)
2. เปิด URL นั้นในเบราว์เซอร์/webview ของจอ S07
3. ใส่ `youtubeApiKey` ใน `config.js` ก่อน host เพื่อให้แอปเล่นวิดีโอได้

## ข้อจำกัดที่เว็บทำไม่ได้ (ไม่ว่าทำยังไง)
- **หน้า youtube.com / music.youtube.com เต็มๆ ฝังในแผงไม่ได้** (YouTube บล็อก iframe) จึงใช้มินิแอป ค้นหา+เล่น ผ่าน Data API แทน
- **นำทางเสียง turn-by-turn / re-route อัตโนมัติ** ทำไม่ได้ (ใช้ปุ่ม Google Maps เปิดเต็มจอแทน)
- **Netflix / Disney+ / HBO** เล่นไม่ได้ (ติด DRM Widevine)
- อ่าน **GPS ตัวจริงของรถ / ข้อมูลรถ (ความเร็ว, เลน)** ไม่ได้ — ตำแหน่งใช้ geolocation ของ webview เอง

## ไฟล์
- `index.html` — ตัว launcher
- `config.js` — ใส่ key (YouTube / Google Maps)
