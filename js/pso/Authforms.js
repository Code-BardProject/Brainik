 // Регистрация и вход без базы данных (localStorage)

// Хранилище пользователей (в памяти + localStorage)
const STORAGE_KEY = 'brainik_users';
const SESSION_KEY = 'brainik_current_user';

// Получить всех пользователей
function getUsers() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Сохранить пользователя
function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// Найти пользователя по email
function findUserByEmail(email) {
  const users = getUsers();
  return users.find(u => u.email === email);
}

// Хеширование пароля
function hashPassword(password) {
  return btoa(password + 'salt');
}

// Проверка пароля
function verifyPassword(password, hashedPassword) {
  return hashPassword(password) === hashedPassword;
}

// Сохранить сессию
function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    email: user.email,
    nickname: user.nickname,
    loggedIn: true
  }));
}

// Переключение между формами входа и регистрации
document.querySelectorAll('.toggle-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('data-target');
    const targetForm = document.getElementById(targetId);
    
    document.querySelectorAll('.form').forEach(form => {
      form.classList.remove('active');
    });
    
    targetForm.classList.add('active');
  });
});

// Обработка формы регистрации
document.getElementById('signUpForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const inputs = this.querySelectorAll('.input');
  const nickname = inputs[0].value;
  const email = inputs[1].value;
  const password = inputs[2].value;
  const confirmPassword = inputs[3].value;
  
  // Валидация
  if (password !== confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  }
  
  if (password.length < 8) {
    alert('Пароль должен быть минимум 8 символов!');
    return;
  }
  
  const termsAgree = document.getElementById('terms-agree');
  if (!termsAgree.checked) {
    alert('Необходимо согласиться с условиями использования!');
    return;
  }
  
  // Проверяем, существует ли пользователь
  const existingUser = findUserByEmail(email);
  if (existingUser) {
    alert('Пользователь с таким email уже существует!');
    return;
  }
  
  // Создаем нового пользователя
  const newUser = {
    nickname: nickname,
    email: email,
    password: hashPassword(password),
    createdAt: new Date().toISOString()
  };
  
  saveUser(newUser);
  
  alert('Регистрация успешна! Теперь войдите в аккаунт.');
  // Переключаемся на форму входа
  document.querySelector('.toggle-link[data-target="signInForm"]').click();
});

// Обработка формы входа
document.getElementById('signInForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const inputs = this.querySelectorAll('.input');
  const email = inputs[0].value;
  const password = inputs[1].value;
  
  // Ищем пользователя
  const user = findUserByEmail(email);
  
  if (!user) {
    alert('Пользователь с таким email не найден!');
    return;
  }
  
  // Проверяем пароль
  if (!verifyPassword(password, user.password)) {
    alert('Неверный пароль!');
    return;
  }
  
  // Сохраняем сессию
  setSession(user);
  
  alert(`Добро пожаловать, ${user.nickname}!`);
  
  // Перенаправление в личный кабинет с задержкой
  setTimeout(() => {
    window.location.href = './dashboard.html';
  }, 100);
});

// Проверка сессии при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  const currentUser = localStorage.getItem(SESSION_KEY);
  if (currentUser) {
    const user = JSON.parse(currentUser);
    if (user.loggedIn) {
      console.log('Пользователь авторизован:', user.nickname);
    }
  }
});