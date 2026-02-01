====================================================================

      WEBSITE QUẢN LÝ LỚP HỌC - HƯỚNG DẪN SỬ DỤNG
   ====================================================================

   Nhóm thực hiện website:
     - Hoàng Lê Thiên Đức
     - Dương Thị Hương Giang
     - Lục Thị Ngọc Khuyên
     - Lê Thị Hoàng My Thảo
     - Nguyễn Minh Thư
   ====================================================================

📌 MỤC ĐÍCH DỰ ÁN:
Website được xây dựng nhằm giúp quản lý thông tin lớp học tiếng Việt, bao gồm
danh sách học sinh, thông tin giáo viên, bộ sưu tập kỷ niệm, và trình phát nhạc tích hợp.

====================================================================
📁 CẤU TRÚC THƯ MỤC DỰ ÁN:
====================================================================

web-test/
│
├── index.html              ← Trang lựa chọn lớp (trang mặc định)
├── classes.html            ← Trang nội dung chính của lớp
├── about.html              ← Trang giới thiệu
├── contact.html            ← Trang liên hệ
│
├── css/
│   └── style.css           ← File CSS chính (giao diện & styling)
│
├── js/
│   ├── main.js             ← File JavaScript chính (logic chính)
│   ├── animations.js       ← Xử lý animations và hiệu ứng
│   ├── data.js             ← Quản lý dữ liệu học sinh và lớp
│   ├── games.js            ← Chức năng games và mini-games
│   ├── guide.js            ← Hướng dẫn tương tác cho người dùng
│   ├── leaderboard.js      ← Bảng xếp hạng
│   ├── modals.js           ← Quản lý modal và popup
│   ├── music.js            ← Trình phát nhạc tích hợp
│   ├── navigation.js       ← Điều hướng và sidebar
│   ├── search.js           ← Tìm kiếm với autocomplete
│   └── theme.js            ← Chuyển đổi dark/light mode
│
├── images/                 ← Thư mục chứa hình ảnh
│
├── fonts/                  ← Thư mục chứa custom fonts
│
├── music/                  ← Thư mục chứa file nhạc cho trình phát
│
└── README.txt              ← File hướng dẫn này

====================================================================
🚀 CÁCH CHẠY WEBSITE:
====================================================================

1. Mở thư mục dự án trong VS Code
2. Chuột phải vào index.html → "Open with Live Server"
   (Hoặc sử dụng PHP: php -S localhost:8000)
3. Trình duyệt sẽ tự động mở http://localhost:5500/index.html

====================================================================
✨ CÁC TÍNH NĂNG CHÍNH:
====================================================================

✓ Quản lý danh sách học sinh với hình ảnh đại diện
✓ Lưu trữ thông tin giáo viên chủ nhiệm và bộ môn
✓ Quản lý hình ảnh kỷ niệm lớp học
✓ Quản lý video kỷ niệm
✓ Tìm kiếm với autocomplete (tương tự Google)
✓ Dark Mode / Light Mode (thoải mái mắt)
✓ Hướng dẫn tương tác cho người dùng lần đầu
✓ Responsive design (hoạt động tốt trên mọi thiết bị)
✓ Trình phát nhạc tích hợp với danh sách phát
✓ Mini-games và bảng xếp hạng
✓ Animations động (cookies, stars, v.v.)

====================================================================
🎮 HƯỚNG DẪN SỬ DỤNG:
====================================================================

LẦN ĐẦU VÀO WEBSITE:
- Website tự động hiển thị hướng dẫn sử dụng
- Nhấn "Hướng dẫn" để xem chi tiết hoặc "Bỏ qua" để bỏ qua

ĐIỀU HƯỚNG:
- Từ index.html, chọn lớp để vào classes.html
- Dùng sidebar bên trái để chuyển giữa các phần: Học sinh, Giáo viên, Kỷ niệm, Nhạc, Games

TÌMKIẾM:
- Nhấn icon 🔍 ở thanh trợ năng
- Gõ từ khóa để tìm học sinh, giáo viên, hoặc kỷ niệm
- Gợi ý sẽ xuất hiện tự động (autocomplete)
- Dùng ↑↓ để chọn, Enter để xác nhận

DARK MODE:
- Nhấn icon 🌗 để bật/tắt chế độ tối
- Giao diện sẽ tự động chuyển đổi
- Cài đặt được lưu tự động (localStorage)

TRÌNH PHÁT NHẠC:
- Nhấn icon 🎵 để mở trình phát nhạc
- Chọn bài hát từ danh sách phát
- Điều khiển: Prev, Play/Pause, Next, Seek bar
- Tự động chuyển bài khi kết thúc

GAMES:
- Vào phần Games để chơi mini-games
- Xem bảng xếp hạng trong Leaderboard

XEM THÊM:
- Nhấn vào hình ảnh/video để xem chi tiết modal
- Nhấn × để đóng modal

====================================================================
🛠️ CÔNG NGHỆ SỬ DỤNG:
====================================================================

Frontend:
- HTML5: Cấu trúc ngữ nghĩa
- CSS3: Styling với CSS Variables, Flexbox, Grid
- JavaScript ES6+: Xử lý tương tác & logic

Libraries:
- Font: Quicksand (Google Fonts) - phông chữ tròn, dễ đọc
- Icons: Emojis (Unicode)
- Storage: LocalStorage API (lưu trạng thái)
- Animations: requestAnimationFrame cho hiệu ứng mượt

Design:
- Responsive Design (Mobile-first approach)
- Color Palette: Pastel Light Mode & Dark Mode
- Animations: CSS Keyframes & JavaScript động

====================================================================
📝 CẬU TRÚC DỮ LIỆU:
====================================================================

Dữ liệu được lưu trong object `data` trong file js/main.js hoặc js/data.js:

const data = {
  hs1: {
    name: "Tên học sinh",
    img: "URL hình ảnh",
    desc: "Mô tả"
  },
  // ... thêm học sinh khác
};

Playlist nhạc trong js/main.js ~line 105:
const playlist = [
  {title: "Tên bài hát", url: "music/file.mp3"},
  // ...
];

Có thể dễ dàng thêm/sửa/xóa dữ liệu bằng cách chỉnh sửa các file này.

====================================================================
🔧 HƯỚNG DẪN CẤU HÌNH:
====================================================================

THÊM HỌC SINH MỚI:
1. Mở file js/data.js hoặc js/main.js
2. Tìm đến object `data`
3. Thêm entry mới:
   hs_new: {
     name: "Tên học sinh",
     img: "https://i.pravatar.cc/150?img=X",
     desc: "Mô tả"
   }
4. Cập nhật HTML trong classes.html nếu cần

THÊM BÀI HÁT MỚI:
1. Thêm file nhạc vào thư mục music/
2. Mở js/main.js, tìm playlist array
3. Thêm object: {title: "Tên bài", url: "music/new.mp3"}

THAY ĐỔI TIÊU ĐỀ:
- Sửa <title> trong thẻ <head> của các file HTML
- Sửa nội dung <h1> trong index.html và classes.html

THAY ĐỔI MÀU SẮC:
- Mở css/style.css
- Tìm phần `:root` (light mode) hoặc `body.dark` (dark mode)
- Thay đổi giá trị CSS Variables:
  --bg-color: #fee7be;        (màu nền)
  --accent-color: #f6a09f;    (màu chính)
  --text-main: #3d3a38;       (màu chữ)

====================================================================
💾 LƯU TRỮ DỮ LIỆU:
====================================================================

Một số dữ liệu được lưu tự động:
- skipGuide: Trạng thái hướng dẫn lần đầu
- currentClass: Lớp đang xem
- theme: Dark/light mode
- musicState: Trạng thái trình phát nhạc

Lưu trữ sử dụng localStorage (không yêu cầu server backend).

Để xóa tất cả dữ liệu:
- Mở Console (F12) → gõ: localStorage.clear()

====================================================================
🐛 KHẮC PHỤC SỰ CỐ PHỔ BIẾN:
====================================================================

1. WEBSITE KHÔNG HIỂN THỊ:
   → Kiểm tra lại đường dẫn file (css/style.css, js/main.js)
   → Mở Chrome DevTools (F12) để xem console errors

2. HÌNH ẢNH KHÔNG HIỂN THỊ:
   → Kiểm tra URL hình ảnh có đúng không
   → Nếu dùng ảnh local, thêm vào thư mục /images

3. TÌMKIẾM KHÔNG HOẠT ĐỘNG:
   → Kiểm tra browser console (F12) → Console
   → Nếu có lỗi JavaScript, sửa trong js/search.js

4. DARK MODE KHÔNG LƯU TRẠNG THÁI:
   → Kiểm tra localStorage bị vô hiệu hóa không
   → Mở DevTools → Application → LocalStorage

5. NHẠC KHÔNG PHÁT:
   → Kiểm tra file nhạc trong thư mục music/
   → Kiểm tra URL trong playlist array

====================================================================
📚 TÀI LIỆU THAM KHẢO:
====================================================================

- MDN Web Docs: https://developer.mozilla.org/
- CSS Tricks: https://css-tricks.com/
- JavaScript.info: https://javascript.info/
- Google Fonts: https://fonts.google.com/
- MUSIC_PLAYER_GUIDE.md: Hướng dẫn chi tiết về trình phát nhạc

====================================================================
✍️ GNOTE CHO NHÓM:
====================================================================

- Đảm bảo tất cả file đều cùng encoding UTF-8
- Thử nghiệm trên nhiều trình duyệt (Chrome, Firefox, Edge)
- Test responsive trên điện thoại
- Giữ code sạch và có comment
- Cập nhật README nếu thêm tính năng mới
- Thêm nhạc vào music/ và cập nhật playlist

====================================================================
📞 LIÊN HỆ & HỖ TRỢ:
====================================================================

Nếu có câu hỏi hoặc cần hỗ trợ:
- Vào trang contact.html để gửi tin nhắn
- Hoặc liên hệ: contact@example.com
- Điện thoại: 0123 456 789

====================================================================
🎉 VẬY, WEBSITE CỦA BẠN ĐÃ SẴN SÀNG! CHÚC VUI!

Được tạo bởi: Học sinh lớp [Your Class]
Năm: 2024 (Cập nhật: 2026)
Cảm ơn các bạn đã sử dụng! ❤️

====================================================================
