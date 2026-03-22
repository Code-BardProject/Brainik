
// Проверка авторизации
const currentUser = localStorage.getItem('brainik_current_user');
if (currentUser) {
    const user = JSON.parse(currentUser);
    document.getElementById('userName').textContent = user.nickname;
} else {
    // Если не авторизован - отправляем на вход
    if (!window.location.href.includes('Index.html')) {
        window.location.href = 'Index.html';
    }
}

// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Аккаунт меню (клик для мобильных)
const accountBtn = document.getElementById('accountBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

accountBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-account')) {
        dropdownMenu.classList.remove('active');
    }
});

// Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

// Автопереключение слайдов
setInterval(nextSlide, 5000);

// Выход
function logout() {
    localStorage.removeItem('brainik_current_user');
    window.location.href = 'Index.html';
}
