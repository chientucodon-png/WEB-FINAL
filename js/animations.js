// ===================
// ANIMATIONS
// ===================

const floatingContainer = document.getElementById('floating-container');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createCookies() {
    floatingContainer.innerHTML = '';
    floatingContainer.classList.remove('ready');
    const count = 12;
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.classList.add('cookie');
        const icons = ['🍪', '🍘', '🍩'];
        el.innerText = icons[Math.floor(Math.random() * icons.length)];
        el.style.left = random(0, 100) + 'vw';
        el.style.top = random(0, 100) + 'vh';
        el.style.animationDuration = random(6, 15) + 's';
        el.style.fontSize = random(20, 50) + 'px';
        floatingContainer.appendChild(el);
    }
    // Thêm class ready để fade-in mượt mà
    requestAnimationFrame(() => {
        floatingContainer.classList.add('ready');
    });
}

function createStars() {
    floatingContainer.innerHTML = '';
    floatingContainer.classList.remove('ready');
    const count = 40;
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.classList.add('star');
        el.innerText = '✦';
        el.style.left = random(0, 100) + 'vw';
        el.style.top = random(0, 100) + 'vh';
        el.style.fontSize = random(10, 25) + 'px';
        el.style.animationDelay = random(0, 3) + 's';
        floatingContainer.appendChild(el);
    }
    // Thêm class ready để fade-in mượt mà
    requestAnimationFrame(() => {
        floatingContainer.classList.add('ready');
    });
}