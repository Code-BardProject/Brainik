

// Переключение между детьми
const childTabs = document.querySelectorAll('.child-tab');
childTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        childTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Назначить задание
function assignTask() {
    alert('Функция назначения задания будет здесь!');
}

// Выход
function logout() {
    localStorage.removeItem('brainik_current_user');
    window.location.href = 'Index.html';
}

// Мобильное меню
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Проверка авторизации
const currentUser = localStorage.getItem('brainik_current_user');
if (!currentUser) {
    window.location.href = 'Index.html';
}
