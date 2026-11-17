// ===== ตั้งค่า Launcher =====
window.LAUNCHER_CONFIG = {

  // YouTube Data API key (ฟรี) — ใส่เพื่อให้ค้นหา/ดูวิดีโอในแผงได้
  // ขอที่ https://console.cloud.google.com/ → เปิด "YouTube Data API v3" → Create API key
  youtubeApiKey: "AIzaSyDc0TUIdHHvGOVMgr9gF0uLIJWoYxWNpYM",

  // OAuth Client ID (สำหรับ "เข้าสู่ระบบ" ดึงเพลย์ลิสต์ส่วนตัว) — ไม่ใส่ = ปุ่ม login จะแจ้งให้ตั้งค่า
  // สร้างที่ Credentials → Create Credentials → OAuth client ID → Web application
  googleClientId: "",

  // Google Maps API key (ไม่จำเป็น) — เว้นว่าง = ใช้แผนที่ Esri ฟรี
  // ใส่ถ้าอยากได้แผนที่ Google แท้ + ป้ายไทย + จราจร
  googleMapsKey: ""
};
