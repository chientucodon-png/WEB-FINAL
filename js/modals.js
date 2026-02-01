// ===================
// MODAL FUNCTIONS
// ===================

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    // Dừng video nếu đang phát
    const modalVideo = document.getElementById('modal-video');
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }
}

// ===== DETAILED INFO MODAL =====
function showDetailedInfo(type) {
    const currentKey = getCurrentModalKey();
    if (!currentKey || !detailedInfo[currentKey]) return;

    const info = detailedInfo[currentKey];
    const titles = {
        intro: "📋 Giới thiệu chung",
        style: "🎨 Phong cách",
        feature: "✨ Đặc trưng",
        impact: "⭐ Dấu ấn"
    };

    document.getElementById('detail-title').innerText = titles[type] || "Thông tin";
    document.getElementById('detail-content').innerText = info[type] || "Không có thông tin chi tiết.";
    document.getElementById('detailModal').style.display = 'flex';
}

function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Store current modal key to know which person is being viewed
let currentModalKey = null;

function getCurrentModalKey() {
    return currentModalKey;
}

// Modify openModal to track current key
function openModal(key) {
    currentModalKey = key; // Set the current modal key for detailed info
    const data = modalData[key];
    if (!data) return;

    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');

    // Reset hiển thị
    modalImg.style.display = 'none';
    modalVideo.style.display = 'none';
    modalVideo.pause(); // Dừng video cũ nếu có

    // Kiểm tra là Video hay Ảnh
    if (data.video) {
        modalVideo.src = data.video;
        modalVideo.style.display = 'block';
    } else {
        modalImg.src = data.img;
        modalImg.style.display = 'block';
    }

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;

    // Ẩn/hiện nút chức năng dựa trên loại modal
    const buttonsVertical = document.querySelector('.modal-buttons-vertical');
    if (key.startsWith('img') || key.startsWith('vid')) {
        // Ẩn nút cho kỷ niệm
        buttonsVertical.style.display = 'none';
    } else {
        // Hiện nút cho học sinh và giáo viên
        buttonsVertical.style.display = 'flex';
    }

    document.getElementById('modal').style.display = 'flex';
}

function openMemoryType(type) {
    // Ẩn section memories
    document.getElementById('memories').classList.remove('active');

    if (type === 'images') {
        document.getElementById('memoryImages').classList.add('active');
        document.getElementById('memoryVideos').classList.remove('active');
    } else if (type === 'videos') {
        document.getElementById('memoryVideos').classList.add('active');
        document.getElementById('memoryImages').classList.remove('active');
    }
}

function backToMemories() {
    document.getElementById('memories').classList.add('active');
    document.getElementById('memoryImages').classList.remove('active');
    document.getElementById('memoryVideos').classList.remove('active');
}