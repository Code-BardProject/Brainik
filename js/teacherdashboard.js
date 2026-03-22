function logout() {
    localStorage.removeItem('brainik_current_user');
    window.location.href = 'Index.html';
}

const currentUser = localStorage.getItem('brainik_current_user');
if (!currentUser) {
    window.location.href = 'Index.html';
}