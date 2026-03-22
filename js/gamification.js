/**
 * Brainik Gamification System
 * Система баллов, достижений и прогресса
 */

class GamificationSystem {
    constructor() {
        this.user = this.getUser();
        this.initStorage();
    }

    getUser() {
        const userData = localStorage.getItem('brainik_current_user');
        return userData ? JSON.parse(userData) : null;
    }

    initStorage() {
        if (!this.user) return;
        
        const userKey = `brainik_stats_${this.user.email}`;
        if (!localStorage.getItem(userKey)) {
            const defaultStats = {
                totalPoints: 0,
                gamesPlayed: 0,
                gamesCompleted: 0,
                tasksCompleted: 0,
                totalTasks: 12,
                achievements: [],
                certificates: [],
                favoriteGames: [],
                testResults: [],
                dailyProgress: [],
                gameStats: {
                    colors: { played: 0, completed: 0, points: 0 },
                    counting: { played: 0, completed: 0, points: 0 },
                    shapes: { played: 0, completed: 0, points: 0 },
                    memory: { played: 0, completed: 0, points: 0 },
                    puzzle: { played: 0, completed: 0, points: 0 },
                    math: { played: 0, completed: 0, points: 0 },
                    alphabet: { played: 0, completed: 0, points: 0 },
                    maze: { played: 0, completed: 0, points: 0 },
                    quiz: { played: 0, completed: 0, points: 0 },
                    logic: { played: 0, completed: 0, points: 0 },
                    drawing: { played: 0, completed: 0, points: 0 },
                    sounds: { played: 0, completed: 0, points: 0 },
                    chess: { played: 0, completed: 0, points: 0 },
                    checkers: { played: 0, completed: 0, points: 0 }
                },
                answers: {
                    correct: 0,
                    total: 0
                },
                lastUpdated: new Date().toISOString()
            };
            localStorage.setItem(userKey, JSON.stringify(defaultStats));
        }
    }

    getStats() {
        if (!this.user) return null;
        const userKey = `brainik_stats_${this.user.email}`;
        return JSON.parse(localStorage.getItem(userKey));
    }

    saveStats(stats) {
        if (!this.user) return;
        const userKey = `brainik_stats_${this.user.email}`;
        stats.lastUpdated = new Date().toISOString();
        localStorage.setItem(userKey, JSON.stringify(stats));
    }

    // Добавить баллы за игру
    addGamePoints(gameType, points, completed = false) {
        const stats = this.getStats();
        if (!stats) return;

        stats.totalPoints += points;
        stats.gameStats[gameType].points += points;
        stats.gameStats[gameType].played++;
        
        if (completed) {
            stats.gameStats[gameType].completed++;
            stats.gamesCompleted++;
            this.checkAchievements(stats);
        }
        
        stats.gamesPlayed++;
        this.saveStats(stats);
        this.updateDashboard();
    }

    // Добавить баллы за правильный ответ
    addAnswerPoints(correct, points = 10) {
        const stats = this.getStats();
        if (!stats) return;

        stats.answers.total++;
        if (correct) {
            stats.answers.correct++;
            stats.totalPoints += points;
        }
        this.saveStats(stats);
        this.updateDashboard();
    }

    // Отметить задание выполненным
    completeTask(taskId) {
        const stats = this.getStats();
        if (!stats) return;

        if (!stats.completedTasks) stats.completedTasks = [];
        if (!stats.completedTasks.includes(taskId)) {
            stats.completedTasks.push(taskId);
            stats.tasksCompleted = stats.completedTasks.length;
            stats.totalPoints += 50; // Бонус за задание
            this.saveStats(stats);
            this.updateDashboard();
        }
    }

    // Добавить в избранное
    addToFavorites(gameId) {
        const stats = this.getStats();
        if (!stats) return;

        if (!stats.favoriteGames.includes(gameId)) {
            stats.favoriteGames.push(gameId);
            this.saveStats(stats);
        }
    }

    // Удалить из избранного
    removeFromFavorites(gameId) {
        const stats = this.getStats();
        if (!stats) return;

        stats.favoriteGames = stats.favoriteGames.filter(id => id !== gameId);
        this.saveStats(stats);
    }

    // Добавить сертификат
    addCertificate(certificate) {
        const stats = this.getStats();
        if (!stats) return;

        certificate.date = new Date().toLocaleDateString('ru-RU');
        stats.certificates.push(certificate);
        this.saveStats(stats);
    }

    // Добавить результат теста
    addTestResult(testResult) {
        const stats = this.getStats();
        if (!stats) return;

        testResult.date = new Date().toLocaleDateString('ru-RU');
        stats.testResults.push(testResult);
        stats.totalPoints += testResult.score;
        this.saveStats(stats);
        this.checkAchievements(stats);
    }

    // Обновить ежедневный прогресс
    updateDailyProgress(day, value) {
        const stats = this.getStats();
        if (!stats) return;

        stats.dailyProgress[day] = value;
        this.saveStats(stats);
    }

    // Проверить достижения
    checkAchievements(stats) {
        const achievements = [
            {
                id: 'first_game',
                name: 'Первые шаги',
                description: 'Сыграй первую игру',
                icon: '🎮',
                condition: (s) => s.gamesPlayed >= 1
            },
            {
                id: 'beginner',
                name: 'Новичок',
                description: 'Сыграй 5 игр',
                icon: '🌱',
                condition: (s) => s.gamesPlayed >= 5
            },
            {
                id: 'expert',
                name: 'Эксперт',
                description: 'Сыграй 20 игр',
                icon: '⭐',
                condition: (s) => s.gamesPlayed >= 20
            },
            {
                id: 'master',
                name: 'Мастер',
                description: 'Сыграй 50 игр',
                icon: '🏆',
                condition: (s) => s.gamesPlayed >= 50
            },
            {
                id: 'first_correct',
                name: 'Умница',
                description: 'Первый правильный ответ',
                icon: '✅',
                condition: (s) => s.answers.correct >= 1
            },
            {
                id: 'scholar',
                name: 'Знаток',
                description: '50 правильных ответов',
                icon: '📚',
                condition: (s) => s.answers.correct >= 50
            },
            {
                id: 'genius',
                name: 'Гений',
                description: '200 правильных ответов',
                icon: '🧠',
                condition: (s) => s.answers.correct >= 200
            },
            {
                id: 'collector',
                name: 'Коллекционер',
                description: 'Собери 1000 баллов',
                icon: '💎',
                condition: (s) => s.totalPoints >= 1000
            },
            {
                id: 'rich',
                name: 'Богач',
                description: 'Собери 5000 баллов',
                icon: '💰',
                condition: (s) => s.totalPoints >= 5000
            },
            {
                id: 'task_master',
                name: 'Исполнитель',
                description: 'Выполни 6 заданий',
                icon: '📋',
                condition: (s) => s.tasksCompleted >= 6
            },
            {
                id: 'all_tasks',
                name: 'Всё сделал!',
                description: 'Выполни все 12 заданий',
                icon: '🎯',
                condition: (s) => s.tasksCompleted >= 12
            },
            {
                id: 'completionist',
                name: 'Перфекционист',
                description: 'Заверши 10 игр',
                icon: '✨',
                condition: (s) => s.gamesCompleted >= 10
            }
        ];

        achievements.forEach(ach => {
            if (!stats.achievements.find(a => a.id === ach.id)) {
                if (ach.condition(stats)) {
                    stats.achievements.push({
                        id: ach.id,
                        name: ach.name,
                        description: ach.description,
                        icon: ach.icon,
                        unlockedAt: new Date().toLocaleDateString('ru-RU')
                    });
                    // Бонус за достижение
                    stats.totalPoints += 100;
                    this.showAchievementNotification(ach);
                }
            }
        });
    }

    // Показать уведомление о достижении
    showAchievementNotification(achievement) {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('🏆 Новое достижение!', {
                body: `${achievement.name}: ${achievement.description}`,
                icon: '/favicon.ico'
            });
        }
        
        // DOM notification
        const notif = document.createElement('div');
        notif.className = 'achievement-notification';
        notif.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <h4>Новое достижение!</h4>
                <p>${achievement.name}</p>
            </div>
        `;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 4000);
    }

    // Обновить данные на dashboard
    updateDashboard() {
        const stats = this.getStats();
        if (!stats) return;

        // Обновить прогресс заданий
        const taskProgress = document.getElementById('taskProgress');
        if (taskProgress) {
            taskProgress.textContent = `${stats.tasksCompleted} из ${stats.totalTasks}`;
        }

        // Обновить общий прогресс
        const totalProgress = document.getElementById('totalProgress');
        if (totalProgress) {
            const percent = Math.round((stats.tasksCompleted / stats.totalTasks) * 100);
            totalProgress.textContent = `${percent}%`;
        }

        // Обновить прогресс-бар
        const progressBar = document.getElementById('mainProgressBar');
        if (progressBar) {
            const percent = (stats.tasksCompleted / stats.totalTasks) * 100;
            progressBar.style.width = `${percent}%`;
        }

        // Обновить баллы
        const pointsDisplay = document.getElementById('totalPoints');
        if (pointsDisplay) {
            pointsDisplay.textContent = stats.totalPoints.toLocaleString();
        }

        // Обновить статистику ответов
        const answersDisplay = document.getElementById('answersStats');
        if (answersDisplay) {
            answersDisplay.textContent = `${stats.answers.correct}/${stats.answers.total}`;
        }
    }

    // Получить достижения для отображения
    getAchievements() {
        const stats = this.getStats();
        if (!stats) return [];
        return stats.achievements;
    }

    // Получить все возможные достижения
    getAllAchievements() {
        return [
            { id: 'first_game', name: 'Первые шаги', description: 'Сыграй первую игру', icon: '🎮' },
            { id: 'beginner', name: 'Новичок', description: 'Сыграй 5 игр', icon: '🌱' },
            { id: 'expert', name: 'Эксперт', description: 'Сыграй 20 игр', icon: '⭐' },
            { id: 'master', name: 'Мастер', description: 'Сыграй 50 игр', icon: '🏆' },
            { id: 'first_correct', name: 'Умница', description: 'Первый правильный ответ', icon: '✅' },
            { id: 'scholar', name: 'Знаток', description: '50 правильных ответов', icon: '📚' },
            { id: 'genius', name: 'Гений', description: '200 правильных ответов', icon: '🧠' },
            { id: 'collector', name: 'Коллекционер', description: 'Собери 1000 баллов', icon: '💎' },
            { id: 'rich', name: 'Богач', description: 'Собери 5000 баллов', icon: '💰' },
            { id: 'task_master', name: 'Исполнитель', description: 'Выполни 6 заданий', icon: '📋' },
            { id: 'all_tasks', name: 'Всё сделал!', description: 'Выполни все 12 заданий', icon: '🎯' },
            { id: 'completionist', name: 'Перфекционист', description: 'Заверши 10 игр', icon: '✨' }
        ];
    }

    // Получить статистику по играм
    getGameStats() {
        const stats = this.getStats();
        if (!stats) return {};
        return stats.gameStats;
    }

    // Получить избранное
    getFavorites() {
        const stats = this.getStats();
        if (!stats) return [];
        return stats.favoriteGames;
    }

    // Получить сертификаты
    getCertificates() {
        const stats = this.getStats();
        if (!stats) return [];
        return stats.certificates;
    }

    // Получить результаты тестов
    getTestResults() {
        const stats = this.getStats();
        if (!stats) return [];
        return stats.testResults;
    }

    // Сбросить прогресс (для тестирования)
    resetProgress() {
        if (!this.user) return;
        const userKey = `brainik_stats_${this.user.email}`;
        localStorage.removeItem(userKey);
        this.initStorage();
    }
}

// Глобальный экземпляр
window.gamification = new GamificationSystem();

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    if (window.gamification.user) {
        window.gamification.updateDashboard();
    }
});

// API для интеграции с играми
window.GameAPI = {
    // Добавить баллы за игру
    addPoints: (gameType, points, completed) => {
        window.gamification.addGamePoints(gameType, points, completed);
    },
    
    // Добавить ответ
    addAnswer: (correct, points) => {
        window.gamification.addAnswerPoints(correct, points);
    },
    
    // Завершить задание
    completeTask: (taskId) => {
        window.gamification.completeTask(taskId);
    },
    
    // Добавить в избранное
    addFavorite: (gameId) => {
        window.gamification.addToFavorites(gameId);
    },
    
    // Удалить из избранного
    removeFavorite: (gameId) => {
        window.gamification.removeFromFavorites(gameId);
    },
    
    // Получить статистику
    getStats: () => {
        return window.gamification.getStats();
    }
};
