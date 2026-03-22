// Проверка авторизации
const currentUser = localStorage.getItem('brainik_current_user');
if (!currentUser) {
    window.location.href = 'Index.html';
}

// Табы
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Мобильное меню
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}