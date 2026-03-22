// Проверка авторизации
const currentUser = localStorage.getItem('brainik_current_user');
if (!currentUser) {
    window.location.href = 'Index.html';
}

// Мобильное меню
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}