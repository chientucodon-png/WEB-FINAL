// ===================
// HOME & CLASS NAVIGATION
// ===================

function openClass(className) {
    console.log("openClass called with:", className);
    if (className === "12A4" || className === "11A4" || className === "10A4") {
        // Ẩn home section (nếu tồn tại - index.html có, classes.html không)
        const homeSection = document.getElementById("homeSection");
        if (homeSection) {
            homeSection.classList.remove("active");
        }

        const classSection = document.getElementById("classSection");
        if (classSection) {
            classSection.classList.add("active");
            console.log("classSection shown");
        }

        // Reset tất cả sections về ban đầu
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Hiện section students (section đầu tiên)
        const studentsSection = document.getElementById("students");
        if (studentsSection) {
            studentsSection.classList.add("active");
            console.log("students section activated");
        }

        // Reset sidebar active item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        const firstMenuItem = document.querySelector('.menu-item');
        if (firstMenuItem) {
            firstMenuItem.classList.add('active');
        }

        // Set currentClass
        localStorage.setItem("currentClass", className);

        // Lần đầu vào lớp → hiện welcome screen (dùng flag hasSeenGuide)
        const hasSeenGuide = localStorage.getItem("hasSeenGuide");
        console.log("hasSeenGuide:", hasSeenGuide);
        console.log("DOM ready - welcome element:", document.getElementById("welcome") ? "found" : "not found");

        // Chỉ hiện welcome nếu chưa xem guide (hasSeenGuide không tồn tại)
        if (!hasSeenGuide) {
            console.log("First time visiting classroom - will show welcome");
            // Dùng setTimeout để đảm bảo DOM đã sẵn sàng
            setTimeout(() => {
                const welcomeEl = document.getElementById("welcome");
                console.log("In setTimeout - welcome element:", welcomeEl ? "found" : "not found");
                if (welcomeEl) {
                    welcomeEl.style.display = "flex";
                    welcomeEl.style.zIndex = "9999";
                    console.log("Welcome screen displayed with flex and z-index 9999");
                } else {
                    console.error("Welcome element not found!");
                }
            }, 200);
        } else {
            console.log("Already seen guide - not showing welcome");
            const welcomeEl = document.getElementById("welcome");
            if (welcomeEl) {
                welcomeEl.style.display = "none";
            }
        }
    }
}

function goHome() {
    // Quay về trang chọn lớp - không reset hasSeenGuide
    window.location.href = 'index.html';
}

function goToPage(page) {
    window.location.href = page;
}

function showComingSoon() {
    const modal = document.getElementById("modal");
    document.getElementById("modal-img").style.display = "none";
    document.getElementById("modal-title").innerText = "⏰ Đang Cập Nhật";
    document.getElementById("modal-desc").innerText = "Lớp này sẽ sớm được kích hoạt. Vui lòng quay lại sau!";
    modal.style.display = "flex";
}

// ===================
// SECTION MANAGEMENT
// ===================

function showSection(id, el) {
    document.querySelectorAll('.section')
        .forEach(s => s.classList.remove('active'));

    document.querySelectorAll('.menu-item')
        .forEach(m => m.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    el.classList.add('active');
}