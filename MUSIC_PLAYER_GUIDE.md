# 🎵 Hướng Dẫn Sử Dụng Music Player

## ✅ Các Tính Năng Đã Cài Đặt

### 1. **Bộ Điều Khiển Nhạc (Music Controls)**
   - ⏮️ **Bài trước** - Chuyển sang bài hát trước
   - ▶️/**⏸️** **Phát/Tạm dừng** - Bật hoặc dừng phát nhạc
   - ⏭️ **Bài tiếp theo** - Chuyển sang bài hát tiếp theo
   - **Tên bài hát** - Hiển thị tên bài hiện tại
   - **Thanh tiến độ (Seek Bar)** - Tua nhanh/lùi lại bài hát
   - **Thời gian** - Hiển thị thời gian phát hiện tại và tổng thời gian

### 2. **Lưu Trữ Trạng Thái (LocalStorage)**
   - **Bài hát hiện tại** - Ghi nhớ bài hát đang phát
   - **Thời gian phát** - Lưu vị trí đang phát mỗi giây
   - **Trạng thái** - Nhớ xem bài hát đang phát hay đã tạm dừng
   - **Khi chuyển trang** - Bài hát tiếp tục từ vị trí cũ

### 3. **Danh Sách Nhạc (Playlist)**
Các bài hát sẵn có trong folder `music/`:
- 🎵 **Ghé Qua** - `music/ghe-qua.mp3`
- 🎵 **Lofi Chill** - `music/lofi-1.mp3`
- 🎵 **Kỷ Niệm** - `music/ky-niem.mp3`

## 📝 Cách Sử Dụng

### 1. **Phát Nhạc**
   - Click nút **▶️** để bắt đầu phát nhạc
   - Nút sẽ đổi thành **⏸️** khi đang phát
   - Click lại để tạm dừng

### 2. **Điều Hướng Bài Hát**
   - Click **⏮️** để quay lại bài trước
   - Click **⏭️** để chuyển sang bài kế tiếp
   - Bài hát sẽ tự động phát khi chuyển bài

### 3. **Tua Nhanh/Lùi Lại**
   - **Kéo thanh tiến độ** để tua nhanh hoặc lùi lại
   - Nhìn vào **thời gian hiện tại** để biết vị trí đang phát
   - Bài hát tự động tiếp tục khi hết

### 4. **Chuyển Trang**
   - Khi chuyển trang (về Home, About, Contact)
   - **Nhạc sẽ tiếp tục phát từ vị trí cũ** 🎵
   - Trạng thái và bài hát được lưu trong localStorage

## 🛠️ Thêm Bài Hát Mới

Để thêm bài hát mới, bạn cần:

1. **Tải tệp MP3** vào folder `music/`
   ```
   music/
   ├── ghe-qua.mp3
   ├── lofi-1.mp3
   ├── ky-niem.mp3
   └── [tệp-mới.mp3]
   ```

2. **Cập nhật danh sách nhạc** trong `js/main.js` (dòng ~65):
   ```javascript
   const playlist = [
       { title: "Ghé Qua", url: "music/ghe-qua.mp3" },
       { title: "Lofi Chill", url: "music/lofi-1.mp3" },
       { title: "Kỷ Niệm", url: "music/ky-niem.mp3" },
       { title: "Tên Bài Mới", url: "music/tên-tệp-mới.mp3" }  // ← Thêm dòng này
   ];
   ```

3. **Lưu file** và làm mới trang web

## ⚙️ Cấu Trúc Thư Mục

```
web test/
├── index.html
├── classes.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── music/                    ← Folder nhạc
│   ├── ghe-qua.mp3
│   ├── lofi-1.mp3
│   └── ky-niem.mp3
└── MUSIC_PLAYER_GUIDE.md     ← Hướng dẫn này
```

## 🔧 Khắc Phục Sự Cố

### Nhạc không phát?
1. Kiểm tra xem tệp MP3 có tồn tại trong folder `music/` không
2. Mở **Console (F12)** để xem có lỗi nào không
3. Thử **bấm nút ▶️ lại** (một số trình duyệt chặn tự động phát)

### Nhạc bị dừng khi chuyển trang?
1. Kiểm tra **localStorage** có được bật không
2. Thử **tắt Private Mode** của trình duyệt
3. Xóa **localStorage** bằng cách gõ `resetGuide()` trong Console

### Thanh tiến độ không hoạt động?
1. Thử tải lại trang (Ctrl + R)
2. Kiểm tra xem tệp MP3 có hợp lệ không
3. Mở **Console (F12)** để xem thông báo lỗi

## 🌙 Dark Mode

Music Player hỗ trợ **Dark Mode**! Nút điều khiển sẽ tự động thay đổi màu khi bật Dark Mode.

---

**Phiên bản:** 1.0  
**Cập nhật lần cuối:** 2026-01-29  
**Hỗ trợ:** Mở Console (F12) để xem chi tiết
