// ===================
// LEADERBOARD
// ===================

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('gameLeaderboard')) || [];
    const tbody = document.getElementById('leaderboardBody');

    // Sắp xếp điểm từ cao xuống thấp
    leaderboard.sort((a, b) => b.score - a.score);

    // Chỉ lấy Top 5 người cao nhất
    tbody.innerHTML = leaderboard.slice(0, 5).map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.score}</td>
        </tr>
    `).join('') || '<tr><td colspan="3">Chưa có kỷ lục nào</td></tr>';
}

function saveToLeaderboard(finalScore) {
    let playerName = localStorage.getItem('playerName');
    if (!playerName) {
        playerName = prompt("Nhập tên để ghi danh vào Bảng Xếp Hạng:", "Người chơi");
        localStorage.setItem('playerName', playerName);
    }

    let leaderboard = JSON.parse(localStorage.getItem('gameLeaderboard')) || [];

    // Kiểm tra xem tên này đã có trong bảng chưa
    let playerIndex = leaderboard.findIndex(p => p.name === playerName);

    if (playerIndex !== -1) {
        // Nếu đã có, chỉ cập nhật nếu điểm mới cao hơn điểm cũ
        if (finalScore > leaderboard[playerIndex].score) {
            leaderboard[playerIndex].score = finalScore;
        }
    } else {
        // Nếu chưa có, thêm mới
        leaderboard.push({ name: playerName, score: parseInt(finalScore) });
    }

    localStorage.setItem('gameLeaderboard', JSON.stringify(leaderboard));
    displayLeaderboard();
}