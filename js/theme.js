// ===================
// UI TOGGLES
// ===================

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    document.documentElement.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');

    // Lưu trạng thái vào localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (isDark) {
        createStars();
    } else {
        createCookies();
    }
}