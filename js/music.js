// 1. Danh sách nhạc
const playlist = [
    { title: "Nắng lung linh", url: "music/nanglunglinh.mp3" },
    { title: "Cốt truyện bi thương", url: "music/cottruyenbithuong.mp3" },
    { title: "Fireworks", url: "music/fireworksjp.mp3" }
];

let currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
const audio = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const titleDisplay = document.getElementById('songTitle');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Helper function to format time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// 2. Hàm tải bài hát
function loadSong(idx) {
    if (idx < 0 || idx >= playlist.length) idx = 0;
    currentIdx = idx;

    const song = playlist[idx];
    audio.src = song.url;
    titleDisplay.innerText = song.title;
    localStorage.setItem('musicIdx', idx);

    // Update UI
    seekBar.value = 0;
    currentTimeDisplay.innerText = '0:00';
}

// 3. Hàm Bật/Tắt
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    if (!audio || !playBtn) return;

    if (audio.paused) {
        audio.play().then(() => {
            playBtn.innerText = '⏸️';
            localStorage.setItem('musicStatus', 'playing');
        }).catch(() => {
            console.log("Cần click để tiếp tục nhạc");
            playBtn.innerText = '▶️';
            localStorage.setItem('musicStatus', 'paused');
        });
    } else {
        audio.pause();
        playBtn.innerText = '▶️';
        localStorage.setItem('musicStatus', 'paused');
    }
}

// 4. Next/Prev
function nextSong() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    if (!audio || !playBtn) return;

    let currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
    currentIdx = (currentIdx + 1) % playlist.length;
    localStorage.setItem('musicIdx', currentIdx);

    const song = playlist[currentIdx];
    audio.src = song.url;
    document.getElementById('songTitle').innerText = song.title;

    audio.play().then(() => {
        playBtn.innerText = '⏸️';
        localStorage.setItem('musicStatus', 'playing');
    }).catch(() => {
        playBtn.innerText = '▶️';
    });
}

function prevSong() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    if (!audio || !playBtn) return;

    let currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
    currentIdx = (currentIdx - 1 + playlist.length) % playlist.length;
    localStorage.setItem('musicIdx', currentIdx);

    const song = playlist[currentIdx];
    audio.src = song.url;
    document.getElementById('songTitle').innerText = song.title;

    audio.play().then(() => {
        playBtn.innerText = '⏸️';
        localStorage.setItem('musicStatus', 'playing');
    }).catch(() => {
        playBtn.innerText = '▶️';
    });
}

// 5. Seek bar handler
function seekSong() {
    const audio = document.getElementById('bgMusic');
    const seekBar = document.getElementById('seekBar');
    if (!audio || !seekBar || !audio.duration) return;

    audio.currentTime = (seekBar.value / 100) * audio.duration;
}

// 6. Update seek bar and time display as music plays (handled in initMusicPlayer)
// Event listeners are now set up dynamically in initMusicPlayer to ensure
// they're attached to the correct audio element on each page

// 7. (Removed - handled in initMusicPlayer)

// 8. Auto-next khi hết bài (handled in initMusicPlayer)

// 9. Initialize on page load
function initMusicPlayer() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    const titleDisplay = document.getElementById('songTitle');
    const seekBar = document.getElementById('seekBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');

    // Exit if audio doesn't exist
    if (!audio) return;

    // Re-assign global references if they exist
    if (playBtn) window.playBtn = playBtn;
    if (titleDisplay) window.titleDisplay = titleDisplay;
    if (seekBar) window.seekBar = seekBar;
    if (currentTimeDisplay) window.currentTimeDisplay = currentTimeDisplay;
    if (durationDisplay) window.durationDisplay = durationDisplay;

    const currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
    const savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
    const status = localStorage.getItem('musicStatus');

    // Load the song
    if (currentIdx < playlist.length) {
        loadSong(currentIdx);
    } else {
        loadSong(0);
    }

    // Set up event listeners
    audio.addEventListener('timeupdate', function () {
        if (audio.duration) {
            if (seekBar) {
                seekBar.max = 100;
                seekBar.value = (audio.currentTime / audio.duration) * 100;
            }
            if (currentTimeDisplay) currentTimeDisplay.innerText = formatTime(audio.currentTime);
            if (durationDisplay) durationDisplay.innerText = formatTime(audio.duration);

            // Lưu thời gian mỗi giây để tránh mất dữ liệu
            if (Math.floor(audio.currentTime) % 1 === 0) {
                localStorage.setItem('musicTime', audio.currentTime);
            }
        }
    });

    audio.addEventListener('loadedmetadata', function () {
        if (durationDisplay) durationDisplay.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('ended', function () {
        nextSong();
    });

    // Restore playback state
    if (status === 'playing') {
        audio.currentTime = savedTime;
        audio.play().then(() => {
            if (playBtn) playBtn.innerText = '⏸️';
        }).catch(() => {
            if (playBtn) playBtn.innerText = '▶️';
            console.log("Cần click để tiếp tục nhạc");
        });
    } else {
        if (playBtn) playBtn.innerText = '▶️';
    }
}

// Call after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPlayer);
} else {
    initMusicPlayer();
}