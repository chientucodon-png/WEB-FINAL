// ===================
// GUIDE SYSTEM
// ===================

// ===== STATE =====
let guideStep = 0;

const guideSteps = [
    {
        el: ".top-bar",
        text: "Đây là thanh trợ năng: tìm kiếm, dark mode, hướng dẫn, home,... "
    },
    {
        el: ".sidebar",
        text: "Thanh danh mục: học sinh, giáo viên, kỷ niệm..."
    },
    {
        el: "#students",
        text: "Danh sách học sinh – click avatar để xem chi tiết."
    },
    {
        el: "#gvcn",
        text: "Giáo viên chủ nhiệm – thầy cô chủ nhiệm lớp chúng ta."
    },
    {
        el: "#subjects",
        text: "Giáo viên bộ môn – các thầy cô dạy các môn học khác nhau."
    },
    {
        el: "#memories",
        text: "Khoảnh khắc kỷ niệm – hình ảnh và video của lớp."
    },
    {
        el: "#games",
        text: "🎮 Trò chơi Đoán Nhân Vật: Đoán bạn trong lớp hoặc nhân vật nổi tiếng. Thử thách khả năng ghi nhớ và hiểu biết của bạn nhé!"
    },
    {
        el: ".music-controls",
        text: "🎵 Nhạc nền ở góc trên bên phải: phát, tạm dừng, chuyển bài hát. Kéo thanh tiến độ để tua nhanh/lùi lại!"
    },
    {
        el: ".bottom-bar",
        text: "📧 Về chúng tôi và Liên hệ ở góc dưới bên phải. Click để xem thêm thông tin về lớp chúng ta!"
    }
];

// ===== INIT =====
window.onload = () => {
    const classSection = document.getElementById("classSection");
    const welcome = document.getElementById("welcome");
    const guide = document.getElementById("guideOverlay");
    const finish = document.getElementById("finishGuide");

    // Chỉ ẩn guide và finish, welcome sẽ được xử lý bởi openClass()
    if (guide) guide.style.display = "none";
    if (finish) finish.style.display = "none";

    // Only perform class redirect if we're on classes.html (has classSection)
    // about.html and contact.html don't have classSection, so they won't redirect
    if (!classSection) {
        // Not on classes.html, so skip the class parameter check
        return;
    }

    // Lấy tham số từ URL
    const params = new URLSearchParams(window.location.search);
    const classParam = params.get('class');

    // Nếu không có tham số class, redirect về index.html
    if (!classParam) {
        window.location.href = 'index.html';
        return;
    }

    // Nếu có tham số class, tự động mở lớp đó
    openClass(classParam);

    // Khởi tạo animation cookies - loại bỏ vì đã chạy trong classes.html
    // createCookies(); // đã di chuyển vào classes.html để tránh chạy 2 lần

    // Tạm thời: cho phép reset guide bằng cách gõ resetGuide() trong console
    window.resetGuide = () => {
        localStorage.clear();
        location.reload();
    };

    // Display leaderboard
    displayLeaderboard();

    // Check for ongoing game
    const allProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};
    if (allProgress.classmate && allProgress.classmate.isPlaying) {
        console.log("Tìm thấy tiến trình cũ của Đoán bạn trong lớp");
    }
    if (allProgress.famous && allProgress.famous.isPlaying) {
        console.log("Tìm thấy tiến trình cũ của Đoán nhân vật nổi tiếng");
    }
};

// ===== WELCOME =====
function skipGuide() {
    // Lưu flag vào localStorage để lần sau không hiện welcome nữa
    localStorage.setItem("hasSeenGuide", "true");
    const welcomeEl = document.getElementById("welcome");
    if (welcomeEl) {
        welcomeEl.style.display = "none";
    }
    console.log("Guide skipped - set hasSeenGuide");
}

function startGuide() {
    localStorage.setItem("isGuiding", "true"); // ← THÊM

    // Luôn chuyển về section học sinh khi bắt đầu guide
    const studentsMenuItem = document.querySelector('.menu-item[onclick*="students"]');
    if (studentsMenuItem) {
        showSection('students', studentsMenuItem);
    }

    document.body.classList.add("guide-active");
    document.getElementById("welcome").style.display = "none";
    document.getElementById("finishGuide").style.display = "none";
    document.getElementById("guideOverlay").style.display = "block";

    guideStep = 0;
    // Delay to ensure DOM updates after adding class
    setTimeout(() => showGuideStep(), 100);
}

// ===== GUIDE =====
function showGuideStep() {
    // Remove previous highlights
    document.querySelectorAll('.menu-item, section, .sidebar, .bottom-bar, .top-bar, .music-controls').forEach(el => {
        el.style.boxShadow = '';
        el.style.border = '';
    });

    const step = guideSteps[guideStep];
    let target = document.querySelector(step.el);
    if (!target) return;

    // Determine highlight element
    let highlightEl = target;
    if (step.el === "#games") {
        highlightEl = document.querySelector('.menu-item[onclick*="games"]');
        // Switch to games section
        const menuItem = document.querySelector('.menu-item[onclick*="games"]');
        if (menuItem) {
            showSection('games', menuItem);
        }
    } else if (step.el === "#students") {
        highlightEl = document.querySelector('.menu-item[onclick*="students"]');
    } else if (step.el === "#gvcn") {
        highlightEl = document.querySelector('.menu-item[onclick*="gvcn"]');
        // Switch to gvcn section
        const menuItem = document.querySelector('.menu-item[onclick*="gvcn"]');
        if (menuItem) {
            showSection('gvcn', menuItem);
        }
    } else if (step.el === "#subjects") {
        highlightEl = document.querySelector('.menu-item[onclick*="subjects"]');
        // Switch to subjects section
        const menuItem = document.querySelector('.menu-item[onclick*="subjects"]');
        if (menuItem) {
            showSection('subjects', menuItem);
        }
    } else if (step.el === "#memories") {
        highlightEl = document.querySelector('.menu-item[onclick*="memories"]');
        // Switch to memories section
        const menuItem = document.querySelector('.menu-item[onclick*="memories"]');
        if (menuItem) {
            showSection('memories', menuItem);
        }
    } else if (step.el === ".music-controls") {
        // Switch back to students section for music guide
        const studentsMenuItem = document.querySelector('.menu-item[onclick*="students"]');
        if (studentsMenuItem) {
            showSection('students', studentsMenuItem);
        }
    }

    const rect = highlightEl.getBoundingClientRect();

    const focus = document.querySelector(".guide-focus");
    focus.style.top = rect.top + "px";
    focus.style.left = rect.left + "px";
    focus.style.width = rect.width + "px";
    focus.style.height = rect.height + "px";

    const box = document.querySelector(".guide-box");

    // Positioning: prefer right side, fallback to left if not enough space
    let left = rect.right + 20;
    if (left + 260 > window.innerWidth) {
        left = Math.max(20, rect.left - 260); // Ensure not off-screen left
    }

    // Special positioning for top-bar: place near top-bar
    let boxTop;
    if (step.el === ".top-bar") {
        left = 20; // Left side
        boxTop = 60; // Near top-bar
    } else if (step.el === ".sidebar") {
        boxTop = rect.top - 20; // Slightly higher for sidebar, adjusted down 10px
    } else if (step.el === "#students") {
        boxTop = rect.top - 25; // Up 5px more
    } else if (step.el === "#gvcn") {
        left = rect.right + 20;
        boxTop = rect.top - 10;
    } else if (step.el === "#subjects") {
        left = rect.right + 20;
        boxTop = rect.top - 10;
    } else if (step.el === "#memories") {
        left = rect.right + 20;
        boxTop = rect.top - 10;
    } else if (step.el === "#games") {
        left = rect.right + 20; // Bên phải menu item
        boxTop = rect.top - 10; // Cùng level với menu item
    } else if (step.el === ".bottom-bar") {
        left = window.innerWidth - 350; // Position more to the left
        boxTop = window.innerHeight - 220; // Position higher up
    }

    box.style.top = boxTop + "px";
    box.style.left = left + "px";

    document.getElementById("guideText").innerText = step.text;

    // Toggle top-bar visibility based on current step
    if (step.el === ".top-bar" || step.el === ".music-controls") {
        document.body.classList.add("top-bar-guide");
    } else {
        document.body.classList.remove("top-bar-guide");
    }

    // Toggle bottom-bar visibility based on current step
    if (step.el === ".bottom-bar") {
        document.body.classList.add("bottom-bar-guide");
    } else {
        document.body.classList.remove("bottom-bar-guide");
    }

    const arrow = document.querySelector(".guide-arrow");
    const isLeft = left < rect.left;
    if (isLeft) {
        arrow.style.left = rect.left - 30 + "px";
        arrow.style.transform = "rotate(135deg)"; // Point right
    } else {
        arrow.style.left = rect.right + "px";
        arrow.style.transform = "rotate(-45deg)"; // Point left
    }
    arrow.style.top = rect.top + rect.height / 2 + "px";

    // Special arrow positioning for bottom-bar
    if (step.el === ".bottom-bar") {
        arrow.style.left = rect.right - 15 + "px"; // Center on bottom-bar
        arrow.style.top = rect.top - 30 + "px"; // Point up from bottom-bar
        arrow.style.transform = "rotate(45deg)"; // Point up
    }

    // Highlight the element
    if (step.el === ".top-bar" || step.el === ".bottom-bar") {
        highlightEl.style.boxShadow = "0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.5)";
        highlightEl.style.border = "4px solid #fff";
    } else {
        highlightEl.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.8)";
        highlightEl.style.border = "3px solid #fff";
    }
}

// ===== FINISH =====
function finishGuide() {
    // Remove all highlights before finishing
    document.querySelectorAll('.menu-item, section, .sidebar, .bottom-bar, .top-bar, .music-controls').forEach(el => {
        el.style.boxShadow = '';
        el.style.border = '';
    });

    localStorage.removeItem("isGuiding");
    localStorage.setItem("hasSeenGuide", "true"); // Lưu flag khi hoàn thành guide
    document.body.classList.remove("guide-active");
    document.body.classList.remove("top-bar-guide");
    document.body.classList.remove("bottom-bar-guide");
    document.getElementById("guideOverlay").style.display = "none";
    document.getElementById("finishGuide").style.display = "flex";
    console.log("Guide finished - set hasSeenGuide");
}

function closeFinish() {
    document.getElementById("finishGuide").style.display = "none";
}

function nextGuide() {
    guideStep++;

    if (guideStep >= guideSteps.length) {
        finishGuide();
        return;
    }

    showGuideStep();
}