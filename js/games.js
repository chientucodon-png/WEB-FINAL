// ===================
// GAME LOGIC
// ===================

let currentType = '';
let currentLevel = 0;
let score = 0;
let lives = 3;
let hintsOpened = 1;

function startGame(type) {
    console.log("Khởi động trò chơi:", type);

    // Kiểm tra xem dữ liệu game có tồn tại không
    if (!gameData || !gameData[type]) {
        console.error("Dữ liệu gameData không tồn tại cho loại:", type);
        alert("Lỗi dữ liệu! Vui lòng kiểm tra lại mảng gameData.");
        return;
    }

    currentType = type; // Gán loại trò chơi hiện tại

    // Lấy dữ liệu từ máy
    let allProgress = {};
    try {
        allProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};
    } catch (e) {
        allProgress = {};
    }

    const savedData = allProgress[type];

    // Kiểm tra nếu có ván đấu dở dang hợp lệ
    if (savedData && savedData.isPlaying && savedData.currentLevel < 5) {
        let confirmAction = confirm(`Bạn có ván đấu dở ở Level ${savedData.currentLevel + 1}. Tiếp tục chơi chứ?`);
        if (confirmAction) {
            currentLevel = savedData.currentLevel;
            score = savedData.score || 0;
            lives = savedData.lives || 3;
            hintsOpened = savedData.hintsOpened || 1;
        } else {
            resetCurrentTypeProgress(); // Xóa cũ chơi mới
        }
    } else {
        resetCurrentTypeProgress(); // Khởi tạo ván mới hoàn toàn
    }

    // Cập nhật giao diện
    updateGameUI();

    // Hiển thị khung game
    document.getElementById('game-menu').style.display = 'none';
    document.getElementById('game-play').style.display = 'block';

    if (typeof toggleSidebar === "function") toggleSidebar(true);
}

function resetCurrentTypeProgress() {
    // Thiết lập lại các biến Global
    currentLevel = 0;
    score = 0;
    lives = 3;
    hintsOpened = 1;

    // Cập nhật vào LocalStorage ngay lập tức để đồng bộ
    let allProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};
    allProgress[currentType] = {
        currentLevel: 0,
        score: 0,
        lives: 3,
        hintsOpened: 1,
        isPlaying: true
    };
    localStorage.setItem('gameProgress', JSON.stringify(allProgress));
}

function updateGameUI() {
    document.getElementById('lvl').innerText = currentLevel + 1;
    document.getElementById('score').innerText = score;
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('answer-area').style.display = 'none';
    updateLives();
    resetUI(); // Ẩn các ô gợi ý
}

function startLevel() {
    // 1. Ẩn nút bắt đầu, hiện khung nhập
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('answer-area').style.display = 'block';

    // 2. Mở số lượng gợi ý tương ứng với dữ liệu đã lưu
    // Ví dụ: Nếu lưu là đã mở 2 gợi ý, thì giờ mở lại đúng 2 cái.
    // Nếu là ván mới (hintsOpened = 1), nó sẽ mở gợi ý 1.
    for (let i = 1; i < hintsOpened; i++) {
        // Hàm này sẽ mở lần lượt từ 1 đến (hintsOpened - 1)
        forceOpenHint(i);
    }

    // Nếu là ván mới hoàn toàn, phải mở ít nhất gợi ý 1
    if (hintsOpened === 1) {
        openNextHint();
    }
}

// Hàm phụ để mở gợi ý mà không làm tăng biến hintsOpened
function forceOpenHint(num) {
    let hintEl = document.getElementById('hint' + num);
    hintEl.innerText = gameData[currentType][currentLevel].hints[num - 1];
    hintEl.classList.remove('locked');
    hintEl.classList.add('unlocked');
}

function openNextHint() {
    if (hintsOpened <= 3) {
        let hintEl = document.getElementById('hint' + hintsOpened);
        hintEl.innerText = gameData[currentType][currentLevel].hints[hintsOpened - 1];
        hintEl.classList.remove('locked');
        hintEl.classList.add('unlocked');

        hintsOpened++;
        document.getElementById('hint-count').innerText = 4 - hintsOpened;
        if (hintsOpened > 3) document.getElementById('next-hint-btn').style.display = 'none';
    }
}

function checkAnswer() {
    // 1. Lấy câu trả lời, xóa khoảng trắng thừa và chuyển về chữ thường
    let userVal = document.getElementById('userAnswer').value.trim().toLowerCase();

    // 2. Loại bỏ dấu tiếng Việt để so sánh thoáng hơn
    const cleanUserVal = userVal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const currentQuestion = gameData[currentType][currentLevel];

    // 3. Kiểm tra xem userVal có khớp với bất kỳ từ khóa nào trong mảng accept không
    const isCorrect = currentQuestion.accept.some(keyword => {
        let cleanKeyword = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Trả về true nếu người dùng nhập đúng y hệt hoặc chứa từ khóa quan trọng
        return cleanUserVal === cleanKeyword || cleanUserVal.includes(cleanKeyword);
    });

    if (isCorrect) {
        let pointsWon = [0, 5, 3, 1][hintsOpened - 1] || 1;

        // CHỈ CỘNG VÀO BIẾN TẠM (score), CHƯA LƯU VÀO userTotalScore
        score += pointsWon;

        currentLevel++;
        saveGameState(); // Lưu lại: "Trò này đang ở Level X và có số điểm tạm thời là Y"

        alert(`🎉 CHÍNH XÁC! +${pointsWon} điểm.`);

        if (currentLevel >= 5) {
            alert("🏆 BẠN ĐÃ HOÀN THÀNH 5 LEVEL!");
            finishGame(); // Gọi hàm này để đóng isPlaying và chốt điểm
        } else {
            saveGameState(); // Lưu tiến trình để chơi tiếp level sau
            nextLevel();
        }
    } else {
        // Logic khi sai (trừ mạng) giữ nguyên
        lives--;
        saveGameState();
        updateLives();
        if (lives <= 0) {
            alert("❌ Bạn đã hết mạng!");
            finishGame();
        }
    }
}

function nextLevel() {
    hintsOpened = 1;
    resetUI();
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('answer-area').style.display = 'none';
}

function resetUI() {
    document.getElementById('lvl').innerText = currentLevel + 1;
    document.getElementById('score').innerText = score;
    document.getElementById('userAnswer').value = '';
    for (let i = 1; i <= 3; i++) {
        let h = document.getElementById('hint' + i);
        h.innerText = "Gợi ý " + i;
        h.className = 'hint-box locked';
    }
    document.getElementById('next-hint-btn').style.display = 'inline-block';
    updateLives();
}

function updateLives() {
    document.getElementById('lives').innerText = "❤️".repeat(lives);
}

// ===================
// SIDEBAR LOCK
// ===================

function toggleSidebar(isLocked) {
    const sidebar = document.querySelector('.sidebar');
    if (isLocked) {
        sidebar.classList.add('sidebar-locked');
    } else {
        sidebar.classList.remove('sidebar-locked');
    }
}

// ===================
// GAME STATE MANAGEMENT
// ===================

// Hàm Lưu Tiến Trình (Sửa lại để lưu cả điểm tạm thời)
function saveGameState() {
    try {
        let allProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};

        allProgress[currentType] = {
            currentLevel: currentLevel,
            score: score, // Lưu điểm tạm thời của ván này
            lives: lives,
            hintsOpened: hintsOpened,
            isPlaying: true
        };

        localStorage.setItem('gameProgress', JSON.stringify(allProgress));
        console.log("Đã lưu tiến trình trò chơi:", currentType);
    } catch (e) {
        console.error("Lỗi khi lưu game:", e);
    }
}

// Hàm Thoát Thủ Công (Gắn vào nút bấm)
function exitGameManual() {
    console.log("Nút thoát đã được bấm!");

    // 1. Lưu lại trạng thái hiện tại ngay lập tức
    saveGameState();

    // 2. Mở khóa Sidebar
    if (typeof toggleSidebar === "function") {
        toggleSidebar(false);
    }

    // 3. Chuyển đổi giao diện
    const playArea = document.getElementById('game-play');
    const menuArea = document.getElementById('game-menu');

    if (playArea && menuArea) {
        playArea.style.display = 'none';
        menuArea.style.display = 'block';
        alert("Tiến trình của bạn đã được đóng băng. Bạn có thể quay lại sau!");
    } else {
        // Nếu không tìm thấy ID, reload trang là cách an toàn nhất
        location.reload();
    }
}

// Hàm cộng điểm vào tổng điểm tích lũy
function addPointsToTotal(points) {
    // 1. Lấy tổng điểm hiện tại từ máy
    let currentTotal = parseInt(localStorage.getItem('userTotalScore')) || 0;

    // 2. Cộng thêm điểm vừa ghi được
    currentTotal += points;

    // 3. Lưu lại vào máy
    localStorage.setItem('userTotalScore', currentTotal);

    // 4. Cập nhật hiển thị trên giao diện game
    document.getElementById('score').innerText = currentTotal;
}


function updateLeaderboardWithTotal() {
    let allProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};

    // Lấy điểm của từng trò (nếu chưa chơi thì mặc định là 0)
    let score1 = (allProgress['classmate'] && allProgress['classmate'].finalScore) ? allProgress['classmate'].finalScore : 0;
    let score2 = (allProgress['famous'] && allProgress['famous'].finalScore) ? allProgress['famous'].finalScore : 0;

    // TỔNG ĐIỂM = Trò 1 + Trò 2
    let totalScore = score1 + score2;

    // Lưu vào localStorage để hiển thị
    localStorage.setItem('userTotalScore', totalScore);

    // Gửi lên bảng xếp hạng
    saveToLeaderboard(totalScore);
}

function finishGame() {
    let allProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};

    // Đánh dấu trò chơi hiện tại đã kết thúc
    if (allProgress[currentType]) {
        allProgress[currentType].isPlaying = false;
        // Lưu lại điểm số của trò này vào bộ nhớ để tính tổng điểm sau
        allProgress[currentType].finalScore = score;
    }

    localStorage.setItem('gameProgress', JSON.stringify(allProgress));

    // Mở khóa Sidebar và quay về menu
    if (typeof toggleSidebar === "function") toggleSidebar(false);
    document.getElementById('game-play').style.display = 'none';
    document.getElementById('game-menu').style.display = 'block';

    // Cập nhật lại bảng xếp hạng tổng
    updateLeaderboardWithTotal();
}

function updateUIForContinuedGame() {
    document.getElementById('lvl').innerText = currentLevel + 1;
    document.getElementById('score').innerText = score;
    updateLives();

    // Hiển thị gợi ý đã mở
    for (let i = 1; i < hintsOpened; i++) {
        let hintEl = document.getElementById('hint' + i);
        hintEl.innerText = gameData[currentType][currentLevel].hints[i - 1];
        hintEl.classList.remove('locked');
        hintEl.classList.add('unlocked');
    }

    // Nếu đã bắt đầu level, hiển thị answer area
    if (hintsOpened > 1) {
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('answer-area').style.display = 'block';
    }
}

function clearLeaderboard() {
    if (confirm("Bạn có chắc muốn xóa hết kỷ lục không?")) {
        localStorage.removeItem('gameLeaderboard');
        displayLeaderboard();
    }
}