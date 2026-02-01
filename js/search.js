// --- BIẾN TOÀN CỤC ---
let currentFilteredItems = [];

function toggleSearch() {
    const input = document.getElementById("searchInput");
    input.classList.toggle("active");
    input.focus();
}

// 1. Quét dữ liệu
function getAllSearchableItems() {
    const items = [];
    document.querySelectorAll('.section').forEach(section => {
        section.querySelectorAll('.card:not(.add-card)').forEach(card => {
            const text = card.innerText.trim();
            if (text) {
                items.push({
                    text: text,
                    element: card,
                    sectionId: section.id
                });
            }
        });
    });
    return items;
}

// 2. Xử lý logic tìm kiếm
function handleSearchInput() {
    const input = document.getElementById("searchInput");
    const suggestionsContainer = document.getElementById("searchSuggestions");
    const keyword = input.value;

    // Reset nếu rỗng
    if (!keyword.trim()) {
        suggestionsContainer.classList.remove("active");
        suggestionsContainer.innerHTML = "";
        return;
    }

    const items = getAllSearchableItems();

    // Cập nhật biến toàn cục
    currentFilteredItems = items.filter(item =>
        item.text.toLowerCase().includes(keyword.toLowerCase())
    ).slice(0, 10);

    if (currentFilteredItems.length === 0) {
        suggestionsContainer.classList.remove("active");
        return;
    }

    // Render HTML
    suggestionsContainer.innerHTML = currentFilteredItems.map((item, index) => {
        let displayText = item.text.length > 40 ? item.text.substring(0, 40) + "..." : item.text;
        const highlight = displayText.replace(
            new RegExp(`(${keyword})`, "gi"),
            "<span class='highlight' style='font-weight:bold; color:blue'>$1</span>"
        );

        return `
        <li class="suggestion-item" data-index="${index}">
            <span class="suggestion-title">${highlight}</span>
        </li>`;
    }).join("");

    suggestionsContainer.classList.add("active");
    suggestionsContainer.style.opacity = "1";
}

// 3. KHỞI TẠO SỰ KIỆN (PHẦN QUAN TRỌNG ĐÃ FIX)
document.addEventListener("DOMContentLoaded", () => {
    // Đảm bảo CSS cho glow effect
    ensureGlowStyles();
    const searchWrapper = document.getElementById("searchWrapper");
    const suggestionsContainer = document.getElementById("searchSuggestions");
    const input = document.getElementById("searchInput");

    // A. XỬ LÝ DI CHUỘT RA NGOÀI TOP BAR (AUTO CLOSE)
    const topBar = document.querySelector('.top-bar');
    if (topBar) {
        topBar.addEventListener("mouseleave", () => {
            fadeOutSuggestions();
        });
    }

    // B. XỬ LÝ CLICK NÚT (Sửa lỗi không nhận nút)
    suggestionsContainer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const itemEl = e.target.closest(".suggestion-item");
        if (!itemEl) return;

        const idx = parseInt(itemEl.getAttribute("data-index"));
        const selectedData = currentFilteredItems[idx];

        if (!selectedData) {
            console.error("Lỗi: Không tìm thấy dữ liệu tại index", idx);
            return;
        }

        // Click vào tên: scroll tới card
        scrollToCard(selectedData);
        fadeOutSuggestions();
    });

    // C. Input Events
    input.addEventListener("input", handleSearchInput);

    input.addEventListener("focus", () => {
        if (input.value.trim() !== "") {
            handleSearchInput();
        }
    });
});

// Hiệu ứng fade out cho bảng gợi ý
function fadeOutSuggestions() {
    const suggestionsContainer = document.getElementById("searchSuggestions");
    const input = document.getElementById("searchInput");

    if (suggestionsContainer.classList.contains("active")) {
        suggestionsContainer.style.transition = "opacity 0.3s ease-out";
        suggestionsContainer.style.opacity = "0";

        setTimeout(() => {
            suggestionsContainer.classList.remove("active");
            suggestionsContainer.style.opacity = "";
            suggestionsContainer.style.transition = "";
            input.blur();
        }, 300);
    } else {
        input.blur();
    }
}

// Thêm CSS cho glow effect dark mode nếu chưa có
function ensureGlowStyles() {
    if (!document.getElementById('glow-styles')) {
        const style = document.createElement('style');
        style.id = 'glow-styles';
        style.textContent = `
            .glow-highlight {
                animation: flash-highlight 2s ease-out;
            }
            .glow-highlight-dark {
                animation: flash-highlight-dark 2s ease-out;
            }
            @keyframes flash-highlight {
                0%, 100% { outline: transparent; box-shadow: none; }
                50% { outline: 6px solid #2e86de; box-shadow: 0 0 30px rgba(46, 134, 222, 0.8); }
            }
            @keyframes flash-highlight-dark {
                0%, 100% { outline: transparent; box-shadow: none; }
                50% { outline: 4px solid #ffd700; box-shadow: 0 0 20px rgba(255, 215, 0, 0.6); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Scroll đến card và nháy sáng (glow)
function scrollToCard(item) {
    // 1. Chuyển đến section chứa card
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(item.sectionId);
    if (targetSection) targetSection.classList.add('active');

    // 1.5. Update sidebar menu-item active
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    const correspondingMenuItem = document.querySelector(`.menu-item[onclick*="${item.sectionId}"]`);
    if (correspondingMenuItem) {
        correspondingMenuItem.classList.add('active');
    }

    // 2. Hiện lại tất cả card trong section đó (đề phòng đang bị filter ẩn)
    targetSection.querySelectorAll('.card').forEach(c => c.style.display = '');

    // 3. Cuộn đến
    setTimeout(() => {
        item.element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // 4. Hiệu ứng nháy (phụ thuộc theme)
        const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
        if (isDark) {
            item.element.classList.add('glow-highlight-dark');
            setTimeout(() => item.element.classList.remove('glow-highlight-dark'), 2000);
        } else {
            item.element.classList.add('glow-highlight');
            setTimeout(() => item.element.classList.remove('glow-highlight'), 2000);
        }
    }, 100);
}

// Old function for backward compatibility
function searchContent() {
    handleSearchInput();
}

// --- Tìm kiếm thành viên với Preview và Scroll ---
function searchAllMembers() {
    let input = document.getElementById('memberSearch').value.toLowerCase();
    let resultsDiv = document.getElementById('searchResults');
    let cards = document.querySelectorAll('.member-card'); // Quét tất cả modal/card
    resultsDiv.innerHTML = '';
    if (input === "") return;
    cards.forEach(card => {
        let name = card.querySelector('h3').innerText.toLowerCase();
        if (name.includes(input)) {
            let id = card.id || "member-" + Math.random();
            card.id = id;
            let div = document.createElement('div');
            div.className = 'result-item';
            div.innerText = card.querySelector('h3').innerText;
            div.onclick = () => openPreview(id, name);
            resultsDiv.appendChild(div);
        }
    });
}

function openPreview(targetId, name) {
    const previewContainer = document.getElementById('previewContainer');
    const iframe = document.getElementById('previewIframe');
    const goToBtn = document.getElementById('goToLocationBtn');
    iframe.src = "about:blank";
    goToBtn.onclick = () => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardHighlight(targetId);
        closePreview();
    };
    previewContainer.style.display = 'flex';
}

function cardHighlight(id) {
    let el = document.getElementById(id);
    el.classList.add('glow-highlight');
    setTimeout(() => { el.classList.remove('glow-highlight'); }, 2000);
}

function closePreview() {
    document.getElementById('previewContainer').style.display = 'none';
}

// Hiện/ẩn box tìm kiếm thành viên khi bấm icon trên thanh trợ năng
function showMemberSearch() {
    const box = document.getElementById('memberSearchBox');
    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        document.getElementById('memberSearch').focus();
    } else {
        box.style.display = 'none';
        document.getElementById('memberSearch').value = '';
        document.getElementById('searchResults').innerHTML = '';
    }
}