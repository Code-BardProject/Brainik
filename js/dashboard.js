
    let currentUser = null;
    let userStats = null;

    // Загрузка пользователя
    function loadUser() {
        const userData = localStorage.getItem('brainik_current_user');
        if (!userData) {
            window.location.href = 'Index.html';
            return;
        }
        currentUser = JSON.parse(userData);
        document.getElementById('userName').textContent = currentUser.name || currentUser.nickname || 'Пользователь';
        
        // Заполнение настроек
        document.getElementById('settingsName').value = currentUser.name || '';
        document.getElementById('settingsNickname').value = currentUser.nickname || '';
        document.getElementById('settingsEmail').value = currentUser.email || '';
        document.getElementById('settingsBirthdate').value = currentUser.birthdate || '';
    }

    // Показать секцию
    function showSection(sectionId) {
        // Скрыть все секции
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Показать выбранную
        document.getElementById(sectionId).classList.add('active');
        
        // Обновить навигацию
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        if (event && event.target) {
            event.target.classList.add('active');
        }
        
        // Закрыть мобильное меню
        document.getElementById('sidebar').classList.remove('active');
        document.querySelector('.sidebar-overlay').classList.remove('active');
        
        // Загрузить данные для секции
        if (sectionId === 'achievements') loadAchievements();
        if (sectionId === 'certificates') loadCertificates();
        if (sectionId === 'favorite') loadFavorites();
    }

    // Переключить боковое меню
    function toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
        document.querySelector('.sidebar-overlay').classList.toggle('active');
    }

    // Выход
    function logout() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        localStorage.removeItem('brainik_current_user');
        window.location.href = 'Index.html';
    }

    // Сохранить настройки
    function saveSettings() {
        const name = document.getElementById('settingsName').value;
        const birthdate = document.getElementById('settingsBirthdate').value;
        
        if (currentUser) {
            currentUser.name = name;
            currentUser.birthdate = birthdate;
            localStorage.setItem('brainik_current_user', JSON.stringify(currentUser));
            document.getElementById('userName').textContent = name || currentUser.nickname;
            alert('Настройки сохранены!');
        }
    }

    // Загрузить достижения
    function loadAchievements() {
        const container = document.getElementById('achievementsContainer');
        const allAchievements = window.gamification.getAllAchievements();
        const unlocked = window.gamification.getAchievements();
        
        container.innerHTML = allAchievements.map(ach => {
            const isUnlocked = unlocked.find(u => u.id === ach.id);
            return `
                <div class="achievement-card ${isUnlocked ? '' : 'locked'}">
                    <div class="achievement-icon">${ach.icon}</div>
                    <div class="achievement-info">
                        <h4>${ach.name}</h4>
                        <p>${ach.description}</p>
                        ${isUnlocked ? `<div class="achievement-date">Получено: ${isUnlocked.unlockedAt}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    // Загрузить сертификаты
    function loadCertificates() {
        const container = document.getElementById('certificatesContainer');
        const certificates = window.gamification.getCertificates();
        
        if (certificates.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <div class="empty-state-icon">📜</div>
                    <p>Пока нет сертификатов</p>
                    <p style="font-size: 14px; margin-top: 10px;">Пройдите тесты и игры, чтобы получить сертификаты!</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = certificates.map(cert => `
            <div class="certificate-card">
                <div class="certificate-preview">📜</div>
                <h4>${cert.title}</h4>
                <p>Выдан: ${cert.date}</p>
                <button class="download-btn" onclick="downloadCertificate('${cert.id}')">⬇️ Скачать</button>
            </div>
        `).join('');
    }

    // Загрузить избранное
    function loadFavorites() {
        const container = document.getElementById('favoritesContainer');
        const favorites = window.gamification.getFavorites();
        
        if (favorites.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <div class="empty-state-icon">⭐</div>
                    <p>Пока нет избранных игр</p>
                    <p style="font-size: 14px; margin-top: 10px;">Добавляйте игры в избранное на странице игр!</p>
                </div>
            `;
            return;
        }
        
        const gameIcons = {
            'colors': { icon: '🎨', bg: '#dbeafe', name: 'Цвета' },
            'counting': { icon: '🔢', bg: '#f3e8ff', name: 'Счет' },
            'shapes': { icon: '🔷', bg: '#ffedd5', name: 'Формы' },
            'memory': { icon: '🧠', bg: '#dcfce7', name: 'Память' },
            'puzzle': { icon: '🧩', bg: '#dbeafe', name: 'Пазлы' },
            'math': { icon: '🔢', bg: '#f3e8ff', name: 'Математика' },
            'alphabet': { icon: '🔤', bg: '#ffedd5', name: 'Алфавит' },
            'maze': { icon: '🌀', bg: '#dcfce7', name: 'Лабиринт' },
            'quiz': { icon: '❓', bg: '#dbeafe', name: 'Викторина' },
            'logic': { icon: '🧮', bg: '#f3e8ff', name: 'Логика' },
            'drawing': { icon: '🎨', bg: '#ffedd5', name: 'Рисование' },
            'sounds': { icon: '🔊', bg: '#dcfce7', name: 'Звуки' },
            'chess': { icon: '♟️', bg: '#dbeafe', name: 'Шахматы' },
            'checkers': { icon: '⚫', bg: '#f3e8ff', name: 'Шашки' }
        };
        
        container.innerHTML = favorites.map(gameId => {
            const game = gameIcons[gameId] || { icon: '🎮', bg: '#e0e0e0', name: gameId };
            return `
                <div class="favorite-card">
                    <button class="remove-favorite" onclick="removeFavorite('${gameId}')">×</button>
                    <div class="favorite-icon" style="background: ${game.bg};">${game.icon}</div>
                    <h4>${game.name}</h4>
                    <p>Нажмите, чтобы играть</p>
                    <a href="games.html" class="play-btn">Играть</a>
                </div>
            `;
        }).join('');
    }

    // Удалить из избранного
    function removeFavorite(gameId) {
        window.gamification.removeFromFavorites(gameId);
        loadFavorites();
    }

    // Начать тест
    function startTest(testType) {
        alert('Тест "' + testType + '" начинается! Загрузка...');
        // Здесь можно добавить переход на страницу теста
    }

    // Скачать сертификат
    function downloadCertificate(certId) {
        alert('Скачивание сертификата...');
    }

    // Обновить данные на дашборде
    function updateDashboardData() {
        const stats = window.gamification.getStats();
        if (!stats) return;
        
        // Обновить основные показатели
        document.getElementById('totalPoints').textContent = stats.totalPoints.toLocaleString();
        document.getElementById('answersStats').textContent = `${stats.answers.correct}/${stats.answers.total}`;
        document.getElementById('taskProgress').textContent = `${stats.tasksCompleted} из ${stats.totalTasks}`;
        document.getElementById('totalProgress').textContent = Math.round((stats.tasksCompleted / stats.totalTasks) * 100) + '%';
        
        // Обновить прогресс по категориям
        const colorsProgress = Math.min(100, (stats.gameStats.colors.completed / 3) * 100);
        const mathProgress = Math.min(100, ((stats.gameStats.math.completed + stats.gameStats.counting.completed) / 6) * 100);
        const readingProgress = Math.min(100, ((stats.gameStats.alphabet.completed + stats.gameStats.quiz.completed) / 4) * 100);
        
        document.getElementById('progress-colors').style.width = colorsProgress + '%';
        document.getElementById('text-colors').textContent = Math.round(colorsProgress) + '% завершено';
        
        document.getElementById('progress-math').style.width = mathProgress + '%';
        document.getElementById('text-math').textContent = Math.round(mathProgress) + '% завершено';
        
        document.getElementById('progress-reading').style.width = readingProgress + '%';
        document.getElementById('text-reading').textContent = Math.round(readingProgress) + '% завершено';
        
        // Обновить уровни игр
        document.getElementById('level-puzzle').textContent = `Уровень ${Math.min(10, stats.gameStats.puzzle.completed + 1)} из 10`;
        document.getElementById('level-logic').textContent = `Уровень ${Math.min(10, stats.gameStats.logic.completed + 1)} из 10`;
        document.getElementById('level-alphabet').textContent = `Уровень ${Math.min(10, stats.gameStats.alphabet.completed + 1)} из 10`;
        
        // Обновить график
        const dailyData = stats.dailyProgress.length > 0 ? stats.dailyProgress : [20, 25, 30, 35, 40, 45];
        for (let i = 0; i < 6; i++) {
            const bar = document.getElementById('chart-' + i);
            if (bar) {
                const value = dailyData[i] || 20 + (i * 5);
                bar.style.height = Math.min(100, value) + '%';
                bar.setAttribute('data-value', Math.round(value) + '%');
            }
        }
    }

    // Показать уведомления (fullscreen modal)
    function showNotifications() {
        const modal = document.getElementById('notificationsModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрет скролла body
        const badge = document.getElementById('notifBadge');
        if (badge) badge.style.display = 'none';
    }

    // Закрыть уведомления
    function closeNotificationsModal(event) {
        if (!event || event.target.id === 'notificationsModal') {
            const modal = document.getElementById('notificationsModal');
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Возврат скролла
        }
    }

    // Отметить уведомление как прочитанное
    function markNotificationRead(element) {
        element.style.borderLeft = '5px solid transparent';
        element.style.background = 'rgba(255,255,255,0.95)';
        const badge = element.querySelector('span');
        if (badge && badge.textContent === 'Новое') {
            badge.style.display = 'none';
        }
    }

    // Настройки табы
    function showSettingsTab(tab) {
        document.querySelectorAll('.settings-tab').forEach(t => {
            t.classList.remove('active');
            t.style.background = 'none';
            t.style.color = '#666';
        });
        document.querySelectorAll('.settings-content').forEach(c => c.style.display = 'none');
        
        event.target.classList.add('active');
        event.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        event.target.style.color = 'white';
        document.getElementById(tab).style.display = 'block';
    }

    // Сохранить профиль
    function saveProfileSettings() {
        const name = document.getElementById('settingsName').value;
        const nickname = document.getElementById('settingsNickname').value;
        const email = document.getElementById('settingsEmail').value;
        const birthdate = document.getElementById('settingsBirthdate').value;
        
        if (currentUser) {
            currentUser.name = name;
            currentUser.nickname = nickname;
            currentUser.email = email;
            currentUser.birthdate = birthdate;
            localStorage.setItem('brainik_current_user', JSON.stringify(currentUser));
            
            document.getElementById('userName').textContent = name || nickname || 'Пользователь';
            document.getElementById('mobileUserName').textContent = name || nickname || 'Пользователь';
            alert('Настройки сохранены!');
        }
    }

    // Изменить пароль
    function changePassword() {
        const current = document.getElementById('currentPassword').value;
        const newPass = document.getElementById('newPassword').value;
        const confirm = document.getElementById('confirmPassword').value;
        
        if (!current || !newPass || !confirm) {
            alert('Заполните все поля!');
            return;
        }
        
        if (newPass.length < 6) {
            alert('Пароль должен быть минимум 6 символов!');
            return;
        }
        
        if (newPass !== confirm) {
            alert('Пароли не совпадают!');
            return;
        }
        
        alert('Пароль успешно изменен!');
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    }

    // Кошелек - открыть модал
    let currentExchange = { type: 'buy', amount: 0, price: 0 };
    
    function openExchangeModal(type) {
        currentExchange.type = type;
        const modal = document.getElementById('exchangeModal');
        const title = document.getElementById('modalTitle');
        
        if (type === 'buy') {
            title.textContent = 'Покупка голосов';
        } else if (type === 'exchange') {
            title.textContent = 'Обмен баллов на голоса';
        } else {
            title.textContent = 'Вывод средств';
        }
        
        modal.style.display = 'flex';
    }

    // Закрыть модал
    function closeExchangeModal(event) {
        if (!event || event.target.id === 'exchangeModal') {
            document.getElementById('exchangeModal').style.display = 'none';
        }
    }

    // Выбрать опцию обмена
    function selectExchange(element, amount, price) {
        document.querySelectorAll('#exchangeModal [onclick^="selectExchange"]').forEach(opt => {
            opt.style.border = '2px solid transparent';
        });
        element.style.border = '2px solid #667eea';
        currentExchange.amount = amount;
        currentExchange.price = price;
    }

    // Подтвердить обмен
    function confirmExchange() {
        if (currentExchange.amount === 0) {
            alert('Выберите сумму!');
            return;
        }
        
        if (currentExchange.type === 'buy') {
            alert(`Вы купили ${currentExchange.amount} голосов за ₽${currentExchange.price}!`);
        } else if (currentExchange.type === 'exchange') {
            alert(`Обменяли ${currentExchange.amount} баллов!`);
        } else {
            alert(`Вывод ₽${currentExchange.price} на карту!`);
        }
        
        closeExchangeModal();
    }

    // Обновить кошелек
    function updateWalletDisplay() {
        const stats = window.gamification?.getStats();
        if (stats) {
            document.getElementById('walletPointsBalance').textContent = stats.totalPoints.toLocaleString();
            document.getElementById('voiceBalance').textContent = stats.voiceBalance || 0;
            document.getElementById('walletVoiceBalance').textContent = stats.voiceBalance || 0;
        }
    }

    // Инициализация
    document.addEventListener('DOMContentLoaded', () => {
        loadUser();
        setTimeout(() => {
            updateDashboardData();
        }, 100);
    });
 