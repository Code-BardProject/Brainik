// Brainik Games Engine - 12 Interactive Educational Games
// Полноэкранный игровой движок с адаптивностью

const GAMES_DATA = [
    // Оригинальные 14 игр
    { id: 1, title: 'Цвета и оттенки', type: 'colors', age: '2-3', icon: '🎨', desc: 'Найди правильный цвет!' },
    { id: 2, title: 'Считаем вместе', type: 'counting', age: '2-3', icon: '🔢', desc: 'Посчитай животных!' },
    { id: 3, title: 'Геометрические фигуры', type: 'shapes', age: '4-6', icon: '🔷', desc: 'Узнай все формы!' },
    { id: 4, title: 'Память карточки', type: 'memory', age: '4-6', icon: '🧠', desc: 'Найди парные карточки!' },
    { id: 5, title: 'Пазл-сборка', type: 'puzzle', age: '4-6', icon: '🧩', desc: 'Собери картинку!' },
    { id: 6, title: 'Математика', type: 'math', age: '7-9', icon: '➕', desc: 'Реши примеры!' },
    { id: 7, title: 'Алфавит', type: 'alphabet', age: '4-6', icon: '🔤', desc: 'Изучи буквы!' },
    { id: 8, title: 'Лабиринт', type: 'maze', age: '7-9', icon: '🌀', desc: 'Найди выход!' },
    { id: 9, title: 'Викторина', type: 'quiz', age: '7-9', icon: '❓', desc: 'Ответь на вопросы!' },
    { id: 10, title: 'Логика', type: 'logic', age: '10+', icon: '🧮', desc: 'Реши головоломки!' },
    { id: 11, title: 'Рисовалка', type: 'drawing', age: '4-6', icon: '✏️', desc: 'Рисуй и твори!' },
    { id: 12, title: 'Звуки животных', type: 'sounds', age: '2-3', icon: '🔊', desc: 'Угадай кто кричит!' },
    { id: 13, title: 'Шахматы', type: 'chess', age: '10+', icon: '♟️', desc: 'Играй в шахматы!' },
    { id: 14, title: 'Шашки', type: 'checkers', age: '10+', icon: '⚫', desc: 'Играй в шашки!' },
    
    // Игры для 2-3 лет (8 игр)
    { id: 15, title: 'Первая буква', type: 'firstletter', age: '2-3', icon: '🔊', desc: 'Узнай звук буквы!' },
    { id: 16, title: 'Буквенный поезд', type: 'lettertrain', age: '2-3', icon: '🚂', desc: 'Собери поезд из букв!' },
    { id: 17, title: 'Найди букву', type: 'findletter', age: '2-3', icon: '🔍', desc: 'Найди букву по звуку!' },
    { id: 18, title: 'Буквенное лото', type: 'letterlotto', age: '2-3', icon: '🎰', desc: 'Собери все буквы!' },
    { id: 19, title: 'Скороговорки', type: 'tonguetwister', age: '2-3', icon: '👅', desc: 'Повтори скороговорку!' },
    { id: 20, title: 'Звуковой сорт', type: 'soundsort', age: '2-3', icon: '🎵', desc: 'Отсортируй звуки!' },
    { id: 21, title: 'Мама и малыш', type: 'mommybaby', age: '2-3', icon: '👩‍👦', desc: 'Найди пару слов!' },
    { id: 22, title: 'Цветные буквы', type: 'colorletters', age: '2-3', icon: '🌈', desc: 'Раскрась буквы!' },
    
    // Игры для 4-6 лет (12 игр)
    { id: 23, title: 'Составь слово', type: 'buildword', age: '4-6', icon: '🧱', desc: 'Собери слово из букв!' },
    { id: 24, title: 'Рифмоплет', type: 'rhyme', age: '4-6', icon: '🎭', desc: 'Найди рифму!' },
    { id: 25, title: 'Слоги', type: 'syllables', age: '4-6', icon: '✂️', desc: 'Разбей на слоги!' },
    { id: 26, title: 'Первый и последний', type: 'firstlast', age: '4-6', icon: '🔤', desc: 'Найди буквы в слове!' },
    { id: 27, title: 'Слово-предмет', type: 'wordobject', age: '4-6', icon: '📦', desc: 'Соедини слово и картинку!' },
    { id: 28, title: 'Буквенный пазл', type: 'letterpuzzle', age: '4-6', icon: '🧩', desc: 'Собери буквы в слово!' },
    { id: 29, title: 'Виселица', type: 'hangman', age: '4-6', icon: '🎪', desc: 'Угадай слово по буквам!' },
    { id: 30, title: 'Антонимы', type: 'antonyms', age: '4-6', icon: '⚖️', desc: 'Найди противоположности!' },
    { id: 31, title: 'Синонимы', type: 'synonyms', age: '4-6', icon: '🔄', desc: 'Найди похожие слова!' },
    { id: 32, title: 'Сказочные слова', type: 'fairytale', age: '4-6', icon: '🧚', desc: 'Слова из сказок!' },
    { id: 33, title: 'Звериные слова', type: 'animalwords', age: '4-6', icon: '🦁', desc: 'Слова про животных!' },
    { id: 34, title: 'Домашние слова', type: 'homewords', age: '4-6', icon: '🏠', desc: 'Слова о доме!' },
    
    // Игры для 7-9 лет (12 игр)
    { id: 35, title: 'Составь слова', type: 'makewords', age: '7-9', icon: '🎯', desc: 'Составь слова из букв!' },
    { id: 36, title: 'Слова из слова', type: 'wordinword', age: '7-9', icon: '🎲', desc: 'Найди слова внутри!' },
    { id: 37, title: 'Кроссворд', type: 'crossword', age: '7-9', icon: '📝', desc: 'Реши кроссворд!' },
    { id: 38, title: 'Филворд', type: 'wordsearch', age: '7-9', icon: '🔎', desc: 'Найди спрятанные слова!' },
    { id: 39, title: 'Анаграммы', type: 'anagram', age: '7-9', icon: '🌀', desc: 'Разгадай анаграммы!' },
    { id: 40, title: 'Словарный запас', type: 'vocabulary', age: '7-9', icon: '📚', desc: 'Узнай новые слова!' },
    { id: 41, title: 'Перевёртыши', type: 'reversals', age: '7-9', icon: '🙃', desc: 'Слова наоборот!' },
    { id: 42, title: 'Составь предложение', type: 'makesentence', age: '7-9', icon: '📖', desc: 'Собери предложение!' },
    { id: 43, title: 'Падежи', type: 'cases', age: '7-9', icon: '📋', desc: 'Учим падежи!' },
    { id: 44, title: 'Части речи', type: 'speechparts', age: '7-9', icon: '🏷️', desc: 'Узнай часть речи!' },
    { id: 45, title: 'Ударения', type: 'accents', age: '7-9', icon: '🎤', desc: 'Поставь ударение!' },
    { id: 46, title: 'Словарные слова', type: 'dictionary', age: '7-9', icon: '📖', desc: 'Пишем правильно!' },
    
    // Игры для 10+ лет (8 игр)
    { id: 47, title: 'Скрэббл', type: 'scrabble', age: '10+', icon: '🎲', desc: 'Составь слова из букв!' },
    { id: 48, title: 'Эрудит', type: 'erudit', age: '10+', icon: '💎', desc: 'Игра в слова!' },
    { id: 49, title: 'Балда', type: 'balda', age: '10+', icon: '🎯', desc: 'Добавь букву!' },
    { id: 50, title: 'Шарады', type: 'charades', age: '10+', icon: '🎭', desc: 'Угадай слово!' },
    { id: 51, title: 'Ребусы', type: 'rebus', age: '10+', icon: '🧩', desc: 'Разгадай ребусы!' },
    { id: 52, title: 'Криптограммы', type: 'cryptogram', age: '10+', icon: '🔐', desc: 'Расшифруй сообщение!' },
    { id: 53, title: 'Палиндромы', type: 'palindrome', age: '10+', icon: '🔁', desc: 'Найди палиндромы!' },
    { id: 54, title: 'Словарный дуэль', type: 'wordduel', age: '10+', icon: '⚔️', desc: 'Соревнуйся в словах!' }
];

let currentGame = null;
let gameScore = 0;
let gameLevel = 1;
let gameState = {};

// Получить игры по возрасту
function getGamesByAge(age) {
    if (age === 'all') return GAMES_DATA;
    return GAMES_DATA.filter(g => g.age === age);
}

// Получить все игры
function getAllGames() {
    return GAMES_DATA;
}

// Запустить игру в полноэкранном режиме
function launchGame(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;
    
    currentGame = game;
    gameScore = 0;
    gameLevel = 1;
    
    createFullscreenModal(game);
    initGame(game.type);
}

// Создать полноэкранное модальное окно
function createFullscreenModal(game) {
    const existing = document.getElementById('gameFullscreenModal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'gameFullscreenModal';
    modal.className = 'game-fullscreen-modal';
    modal.innerHTML = `
        <div class="game-fullscreen-container">
            <div class="game-header">
                <div class="game-title">
                    <span class="game-icon">${game.icon}</span>
                    <h2>${game.title}</h2>
                </div>
                <div class="game-stats">
                    <span class="game-score">⭐ ${gameScore}</span>
                    <span class="game-level">Уровень ${gameLevel}</span>
                </div>
                <button class="game-close-btn" onclick="closeGame()">✕</button>
            </div>
            <div class="game-content" id="gameContentArea">
                <!-- Игровое поле -->
            </div>
            <div class="game-controls">
                <button class="game-btn" onclick="resetGame()">🔄 Начать заново</button>
                <button class="game-btn primary" onclick="nextLevel()">➡️ Следующий уровень</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Анимация появления
    setTimeout(() => modal.classList.add('active'), 10);
}

// Закрыть игру
function closeGame() {
    const modal = document.getElementById('gameFullscreenModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
    currentGame = null;
}

// Обновить счёт
function updateScore(points) {
    gameScore += points;
    const scoreEl = document.querySelector('.game-score');
    if (scoreEl) scoreEl.textContent = `⭐ ${gameScore}`;
}

// Сбросить игру
function resetGame() {
    gameScore = 0;
    gameLevel = 1;
    if (currentGame) initGame(currentGame.type);
}

// Следующий уровень
function nextLevel() {
    gameLevel++;
    const levelEl = document.querySelector('.game-level');
    if (levelEl) levelEl.textContent = `Уровень ${gameLevel}`;
    if (currentGame) initGame(currentGame.type);
}

// Инициализация игры по типу
function initGame(type) {
    const container = document.getElementById('gameContentArea');
    if (!container) return;
    
    container.innerHTML = '';
    
    switch(type) {
        case 'colors': initColorsGame(container); break;
        case 'counting': initCountingGame(container); break;
        case 'shapes': initShapesGame(container); break;
        case 'memory': initMemoryGame(container); break;
        case 'puzzle': initPuzzleGame(container); break;
        case 'math': initMathGame(container); break;
        case 'alphabet': initAlphabetGame(container); break;
        case 'maze': initMazeGame(container); break;
        case 'quiz': initQuizGame(container); break;
        case 'logic': initLogicGame(container); break;
        case 'drawing': initDrawingGame(container); break;
        case 'sounds': initSoundsGame(container); break;
        case 'chess': initChessGame(container); break;
        case 'checkers': initCheckersGame(container); break;
        // Новые игры с 15 по 54
        case 'firstletter': initFirstLetterGame(container); break;
        case 'lettertrain': initLetterTrainGame(container); break;
        case 'findletter': initFindLetterGame(container); break;
        case 'letterlotto': initLetterLottoGame(container); break;
        case 'tonguetwister': initTongueTwisterGame(container); break;
        case 'soundsort': initSoundSortGame(container); break;
        case 'mommybaby': initMommyBabyGame(container); break;
        case 'colorletters': initColorLettersGame(container); break;
        case 'buildword': initBuildWordGame(container); break;
        case 'rhyme': initRhymeGame(container); break;
        case 'syllables': initSyllablesGame(container); break;
        case 'firstlast': initFirstLastGame(container); break;
        case 'wordobject': initWordObjectGame(container); break;
        case 'letterpuzzle': initLetterPuzzleGame(container); break;
        case 'hangman': initHangmanGame(container); break;
        case 'antonyms': initAntonymsGame(container); break;
        case 'synonyms': initSynonymsGame(container); break;
        case 'fairytale': initFairytaleGame(container); break;
        case 'animalwords': initAnimalWordsGame(container); break;
        case 'homewords': initHomeWordsGame(container); break;
        case 'makewords': initMakeWordsGame(container); break;
        case 'wordinword': initWordInWordGame(container); break;
        case 'crossword': initCrosswordGame(container); break;
        case 'wordsearch': initWordSearchGame(container); break;
        case 'anagram': initAnagramGame(container); break;
        case 'vocabulary': initVocabularyGame(container); break;
        case 'reversals': initReversalsGame(container); break;
        case 'makesentence': initMakeSentenceGame(container); break;
        case 'cases': initCasesGame(container); break;
        case 'speechparts': initSpeechPartsGame(container); break;
        case 'accents': initAccentsGame(container); break;
        case 'dictionary': initDictionaryGame(container); break;
        case 'scrabble': initScrabbleGame(container); break;
        case 'erudit': initEruditGame(container); break;
        case 'balda': initBaldaGame(container); break;
        case 'charades': initCharadesGame(container); break;
        case 'rebus': initRebusGame(container); break;
        case 'cryptogram': initCryptogramGame(container); break;
        case 'palindrome': initPalindromeGame(container); break;
        case 'wordduel': initWordDuelGame(container); break;
    }
}

// ==================== ИГРА 1: ЦВЕТА С УРОВНЯМИ ====================
function initColorsGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Уровни сложности цветов
    const colorУровеньs = {
        1: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' }
        ],
        2: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' }
        ],
        3: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' }
        ],
        4: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' }
        ],
        5: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' },
            { name: 'Фиолетовый', hex: '#9C27B0', emoji: '🟣' }
        ],
        6: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' },
            { name: 'Фиолетовый', hex: '#9C27B0', emoji: '🟣' },
            { name: 'Розовый', hex: '#E91E63', emoji: '💗' }
        ],
        7: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' },
            { name: 'Фиолетовый', hex: '#9C27B0', emoji: '🟣' },
            { name: 'Розовый', hex: '#E91E63', emoji: '💗' },
            { name: 'Коричневый', hex: '#795548', emoji: '🟤' }
        ],
        8: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' },
            { name: 'Фиолетовый', hex: '#9C27B0', emoji: '🟣' },
            { name: 'Розовый', hex: '#E91E63', emoji: '💗' },
            { name: 'Коричневый', hex: '#795548', emoji: '🟤' },
            { name: 'Чёрный', hex: '#333333', emoji: '⚫' }
        ],
        9: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' },
            { name: 'Фиолетовый', hex: '#9C27B0', emoji: '🟣' },
            { name: 'Розовый', hex: '#E91E63', emoji: '💗' },
            { name: 'Коричневый', hex: '#795548', emoji: '🟤' },
            { name: 'Чёрный', hex: '#333333', emoji: '⚫' },
            { name: 'Белый', hex: '#FFFFFF', emoji: '⚪' }
        ],
        10: [
            { name: 'Красный', hex: '#FF5252', emoji: '🔴' },
            { name: 'Синий', hex: '#448AFF', emoji: '🔵' },
            { name: 'Зелёный', hex: '#69F0AE', emoji: '🟢' },
            { name: 'Жёлтый', hex: '#FFD740', emoji: '🟡' },
            { name: 'Оранжевый', hex: '#FF9800', emoji: '🟠' },
            { name: 'Фиолетовый', hex: '#9C27B0', emoji: '🟣' },
            { name: 'Розовый', hex: '#E91E63', emoji: '💗' },
            { name: 'Коричневый', hex: '#795548', emoji: '🟤' },
            { name: 'Чёрный', hex: '#333333', emoji: '⚫' },
            { name: 'Белый', hex: '#FFFFFF', emoji: '⚪' },
            { name: 'Серый', hex: '#9E9E9E', emoji: '🔘' }
        ]
    };
    
    const colors = colorУровеньs[level] || colorУровеньs[10];
    const targetColor = colors[Math.floor(Math.random() * colors.length)];
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="colors-game simple-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">👆 Нажми на ${targetColor.name} кружок!</p>
            <div class="color-circles">
                ${shuffled.map(color => `
                    <button class="color-circle-btn" 
                            style="background: ${color.hex}" 
                            onclick="checkColorSimple('${color.name}', '${targetColor.name}', this)">
                        <span class="color-emoji">${color.emoji}</span>
                    </button>
                `).join('')}
            </div>
            <div class="progress-bar-container">
                <div class="level-progress" style="width: ${(level / 10) * 100}%"></div>
            </div>
            <div class="game-feedback big-feedback" id="colorFeedback"></div>
        </div>
    `;
}

function checkColorSimple(selected, correct, btn) {
    const feedback = document.getElementById('colorFeedback');
    const allBtns = document.querySelectorAll('.color-circle-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.style.transform = 'scale(1.2)';
        btn.style.boxShadow = '0 0 30px rgba(0,255,0,0.8)';
        feedback.innerHTML = '<p class="success big-success">🎉 Молодец! Правильно!</p>';
        updateScore(10 + gameLevel);
        autoNextLevel(1500);
    } else {
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error simple-error">❌ Не та кнопка, попробуй другую!</p>';
        setTimeout(() => {
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// ==================== ИГРА 2: СЧЁТ УЛУЧШЕННЫЙ ====================
function initCountingGame(container) {
    const animals = [
        { emoji: '🐶', name: 'собачек' },
        { emoji: '🐱', name: 'кошечек' },
        { emoji: '🐭', name: 'мышек' },
        { emoji: '🐹', name: 'хомячков' },
        { emoji: '🐰', name: 'зайчиков' },
        { emoji: '🦊', name: 'лисичек' },
        { emoji: '🐻', name: 'медвежат' },
        { emoji: '🐼', name: 'пандочек' }
    ];
    
    const maxCount = Math.min(3 + gameLevel, 10);
    const count = Math.floor(Math.random() * maxCount) + 1;
    const targetAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    const options = [count];
    while (options.length < 4) {
        const rand = Math.floor(Math.random() * maxCount) + 1;
        if (!options.includes(rand) && rand !== count) options.push(rand);
    }
    
    container.innerHTML = `
        <div class="counting-game improved">
            <div class="count-header">
                <span class="count-emoji">${targetAnimal.emoji}</span>
                <span class="count-text">Посчитай ${targetAnimal.name}!</span>
            </div>
            <div class="animals-grid improved">
                ${Array(count).fill(targetAnimal.emoji).map((emoji, i) => `<span class="animal" style="animation-delay: ${i * 0.1}s">${emoji}</span>`).join('')}
            </div>
            <div class="count-buttons improved">
                ${options.sort(() => Math.random() - 0.5).map(c => `
                    <button class="count-btn improved" onclick="checkCountImproved(${c}, ${count}, this)">${c}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="countFeedback"></div>
        </div>
    `;
}

function checkCountImproved(selected, correct, btn) {
    const feedback = document.getElementById('countFeedback');
    const allBtns = document.querySelectorAll('.count-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        btn.style.transform = 'scale(1.15)';
        feedback.innerHTML = '<p class="success">🎉 Правильно! Молодец! +20 очков</p>';
        updateScore(20);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Неправильно, попробуй ещё!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// ==================== ИГРА 3: ФОРМЫ С УРОВНЯМИ ====================
function initShapesGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Уровни сложности фигур
    const shapeLevels = {
        1: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' }
        ],
        2: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' }
        ],
        3: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' }
        ],
        4: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' }
        ],
        5: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' },
            { name: 'Ромб', svg: '<polygon points="50,10 90,50 50,90 10,50" fill="#9C27B0"/>', color: '#9C27B0' }
        ],
        6: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' },
            { name: 'Ромб', svg: '<polygon points="50,10 90,50 50,90 10,50" fill="#9C27B0"/>', color: '#9C27B0' },
            { name: 'Полумесяц', svg: '<path d="M50,10 A40,40 0 1,1 50,90 A25,25 0 1,0 50,10" fill="#FF9800"/>', color: '#FF9800' }
        ],
        7: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' },
            { name: 'Ромб', svg: '<polygon points="50,10 90,50 50,90 10,50" fill="#9C27B0"/>', color: '#9C27B0' },
            { name: 'Полумесяц', svg: '<path d="M50,10 A40,40 0 1,1 50,90 A25,25 0 1,0 50,10" fill="#FF9800"/>', color: '#FF9800' },
            { name: 'Шестиугольник', svg: '<polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="#00BCD4"/>', color: '#00BCD4' }
        ],
        8: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' },
            { name: 'Ромб', svg: '<polygon points="50,10 90,50 50,90 10,50" fill="#9C27B0"/>', color: '#9C27B0' },
            { name: 'Полумесяц', svg: '<path d="M50,10 A40,40 0 1,1 50,90 A25,25 0 1,0 50,10" fill="#FF9800"/>', color: '#FF9800' },
            { name: 'Шестиугольник', svg: '<polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="#00BCD4"/>', color: '#00BCD4' },
            { name: 'Стрелка', svg: '<polygon points="50,10 70,40 60,40 60,80 40,80 40,40 30,40" fill="#795548"/>', color: '#795548' }
        ],
        9: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' },
            { name: 'Ромб', svg: '<polygon points="50,10 90,50 50,90 10,50" fill="#9C27B0"/>', color: '#9C27B0' },
            { name: 'Полумесяц', svg: '<path d="M50,10 A40,40 0 1,1 50,90 A25,25 0 1,0 50,10" fill="#FF9800"/>', color: '#FF9800' },
            { name: 'Шестиугольник', svg: '<polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="#00BCD4"/>', color: '#00BCD4' },
            { name: 'Стрелка', svg: '<polygon points="50,10 70,40 60,40 60,80 40,80 40,40 30,40" fill="#795548"/>', color: '#795548' },
            { name: 'Крест', svg: '<polygon points="35,15 65,15 65,35 85,35 85,65 65,65 65,85 35,85 35,65 15,65 15,35 35,35" fill="#607D8B"/>', color: '#607D8B' }
        ],
        10: [
            { name: 'Круг', svg: '<circle cx="50" cy="50" r="40" fill="#FF5252"/>', color: '#FF5252' },
            { name: 'Квадрат', svg: '<rect x="15" y="15" width="70" height="70" fill="#448AFF"/>', color: '#448AFF' },
            { name: 'Треугольник', svg: '<polygon points="50,10 90,80 10,80" fill="#69F0AE"/>', color: '#69F0AE' },
            { name: 'Звезда', svg: '<polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" fill="#FFD740"/>', color: '#FFD740' },
            { name: 'Сердце', svg: '<path d="M50,30 C50,10 20,10 20,30 C20,50 50,80 50,80 C50,80 80,50 80,30 C80,10 50,10 50,30" fill="#E91E63"/>', color: '#E91E63' },
            { name: 'Ромб', svg: '<polygon points="50,10 90,50 50,90 10,50" fill="#9C27B0"/>', color: '#9C27B0' },
            { name: 'Полумесяц', svg: '<path d="M50,10 A40,40 0 1,1 50,90 A25,25 0 1,0 50,10" fill="#FF9800"/>', color: '#FF9800' },
            { name: 'Шестиугольник', svg: '<polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="#00BCD4"/>', color: '#00BCD4' },
            { name: 'Стрелка', svg: '<polygon points="50,10 70,40 60,40 60,80 40,80 40,40 30,40" fill="#795548"/>', color: '#795548' },
            { name: 'Крест', svg: '<polygon points="35,15 65,15 65,35 85,35 85,65 65,65 65,85 35,85 35,65 15,65 15,35 35,35" fill="#607D8B"/>', color: '#607D8B' },
            { name: 'Трапеция', svg: '<polygon points="20,20 80,20 90,80 10,80" fill="#8BC34A"/>', color: '#8BC34A' }
        ]
    };
    
    const shapes = shapeLevels[level] || shapeLevels[10];
    const targetShape = shapes[Math.floor(Math.random() * shapes.length)];
    const shuffled = [...shapes].sort(() => Math.random() - 0.5);
    
    // Определяем размер сетки в зависимости от количества фигур
    const gridCols = shapes.length <= 4 ? 2 : (shapes.length <= 6 ? 3 : 4);
    
    container.innerHTML = `
        <div class="shapes-game improved">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔍 Найди фигуру: <strong>${targetShape.name}</strong></p>
            <div class="shapes-grid improved" style="grid-template-columns: repeat(${gridCols}, 1fr);">
                ${shuffled.map(shape => `
                    <div class="shape-card improved" onclick="checkShapeImproved('${shape.name}', '${targetShape.name}', this)">
                        <svg viewBox="0 0 100 100" width="70" height="70">
                            ${shape.svg}
                        </svg>
                        <span class="shape-name">${shape.name}</span>
                    </div>
                `).join('')}
            </div>
            <div class="progress-bar-container">
                <div class="level-progress" style="width: ${(level / 10) * 100}%"></div>
            </div>
            <div class="game-feedback" id="shapeFeedback"></div>
        </div>
    `;
}

function checkShapeImproved(selected, correct, card) {
    const feedback = document.getElementById('shapeFeedback');
    const allCards = document.querySelectorAll('.shape-card');
    
    allCards.forEach(c => c.style.pointerEvents = 'none');
    
    if (selected === correct) {
        card.classList.add('correct');
        card.style.transform = 'scale(1.1)';
        feedback.innerHTML = '<p class="success">🎉 Правильно! Молодец! +15 очков</p>';
        updateScore(15 + gameLevel);
        autoNextLevel(1500);
    } else {
        card.classList.add('wrong');
        card.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Это не та фигура!</p>';
        setTimeout(() => {
            card.classList.remove('wrong');
            card.style.animation = '';
            allCards.forEach(c => c.style.pointerEvents = 'auto');
        }, 1000);
    }
}

// ==================== ИГРА 4: ПАМЯТЬ С УРОВНЯМИ ====================
function initMemoryGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Количество пар в зависимости от уровня
    const pairsCount = Math.min(2 + Math.floor((level - 1) / 2), 8);
    
    // Наборы карточек для разных уровней
    const cardSets = {
        animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'],
        fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍑', '🍍', '🥝', '🍒', '🥭'],
        flowers: ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌵', '🍀', '🌿', '🍁'],
        transport: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐'],
        space: ['🚀', '🛸', '🌍', '🌕', '⭐', '☀️', '🌟', '💫', '✨', '🌌']
    };
    
    // Выбираем набор в зависимости от уровня
    let cardSet;
    if (level <= 2) cardSet = cardSets.animals.slice(0, pairsCount);
    else if (level <= 4) cardSet = cardSets.fruits.slice(0, pairsCount);
    else if (level <= 6) cardSet = cardSets.flowers.slice(0, pairsCount);
    else if (level <= 8) cardSet = cardSets.transport.slice(0, pairsCount);
    else cardSet = cardSets.space.slice(0, pairsCount);
    
    const pairs = [...cardSet, ...cardSet].sort(() => Math.random() - 0.5);
    
    gameState.memory = {
        flipped: [],
        matched: [],
        canFlip: true
    };
    
    // Размер сетки в зависимости от количества карт
    let gridCols;
    if (pairs.length <= 6) gridCols = 3;
    else if (pairs.length <= 8) gridCols = 4;
    else if (pairs.length <= 12) gridCols = 4;
    else gridCols = 4;
    
    container.innerHTML = `
        <div class="memory-game improved">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🧠 Найди парные карточки! <span class="pairs-left">(${pairsCount} пар)</span></p>
            <div class="memory-grid improved" style="grid-template-columns: repeat(${gridCols}, 1fr);">
                ${pairs.map((card, i) => `
                    <div class="memory-card" data-index="${i}" data-card="${card}" onclick="flipCardImproved(${i}, '${card}')">
                        <div class="card-front">?</div>
                        <div class="card-back">${card}</div>
                    </div>
                `).join('')}
            </div>
            <div class="progress-bar-container">
                <div class="level-progress" style="width: ${(gameState.memory.matched.length / pairs.length) * 100}%"></div>
            </div>
            <div class="game-feedback" id="memoryFeedback"></div>
        </div>
    `;
}

function flipCardImproved(index, card) {
    if (!gameState.memory.canFlip) return;
    if (gameState.memory.flipped.includes(index)) return;
    if (gameState.memory.matched.includes(index)) return;
    
    const cards = document.querySelectorAll('.memory-card');
    cards[index].classList.add('flipped');
    gameState.memory.flipped.push(index);
    
    if (gameState.memory.flipped.length === 2) {
        gameState.memory.canFlip = false;
        const [i1, i2] = gameState.memory.flipped;
        const c1 = cards[i1].dataset.card;
        const c2 = cards[i2].dataset.card;
        
        if (c1 === c2) {
            gameState.memory.matched.push(i1, i2);
            gameState.memory.flipped = [];
            gameState.memory.canFlip = true;
            updateScore(10);
            
            // Обновляем прогресс
            const progress = document.querySelector('.level-progress');
            if (progress) {
                progress.style.width = `${(gameState.memory.matched.length / cards.length) * 100}%`;
            }
            
            if (gameState.memory.matched.length === cards.length) {
                document.getElementById('memoryFeedback').innerHTML = '<p class="success">🎉 Все пары найдены! +50 бонус!</p>';
                updateScore(50);
                setTimeout(() => autoNextLevel(1500), 1000);
            }
        } else {
            setTimeout(() => {
                cards[i1].classList.remove('flipped');
                cards[i2].classList.remove('flipped');
                gameState.memory.flipped = [];
                gameState.memory.canFlip = true;
            }, 1000);
        }
    }
}

// ==================== ИГРА 5: ПАЗЛ С УРОВНЯМИ ====================
function initPuzzleGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Размер сетки в зависимости от уровня
    const gridSizes = {
        1: { rows: 2, cols: 2 },      // 4 части
        2: { rows: 2, cols: 2 },      // 4 части
        3: { rows: 2, cols: 3 },      // 6 частей
        4: { rows: 2, cols: 3 },      // 6 частей
        5: { rows: 3, cols: 3 },      // 9 частей
        6: { rows: 3, cols: 3 },      // 9 частей
        7: { rows: 3, cols: 4 },      // 12 частей
        8: { rows: 3, cols: 4 },      // 12 частей
        9: { rows: 4, cols: 4 },      // 16 частей
        10: { rows: 4, cols: 4 }      // 16 частей
    };
    
    const size = gridSizes[level] || gridSizes[10];
    const totalPieces = size.rows * size.cols;
    
    // Наборы картинок для разных уровней
    const imageSets = {
        1: ['🌈', '🌟', '🎈', '🎨'],
        2: ['🚀', '🛸', '🌍', '🌕'],
        3: ['🦄', '🦋', '🐞', '🌺', '🌻', '🌷'],
        4: ['🦕', '🦖', '🌴', '🌵', '🦎', '🐢'],
        5: ['🦊', '🐺', '�', '🦔', '🐿️', '🦫', '🦨', '🦡', '🦦'],
        6: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓'],
        7: ['🍕', '🍔', '🍟', '🌭', '🍿', '🥨', '🥐', '🥯', '🥞', '🧇', '🧀', '🥪'],
        8: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛'],
        9: ['🦁', '🐯', '🐆', '🐅', '🐘', '🦏', '🦛', '🦒', '🦓', '🦌', '🦘', '🦬', '🐃', '🐂', '🐄', '🦙'],
        10: ['🎄', '🎃', '🎆', '🎇', '🧨', '✨', '🎈', '🎉', '🎊', '🎋', '🎍', '🎎', '🎏', '🎐', '�', '🧧']
    };
    
    const images = imageSets[level] || imageSets[10];
    const targetImage = images[Math.floor(Math.random() * images.length)];
    
    // Создаём части пазла
    const pieces = Array(totalPieces).fill(null).map((_, i) => i).sort(() => Math.random() - 0.5);
    
    gameState.puzzle = {
        pieces: pieces,
        rows: size.rows,
        cols: size.cols,
        targetImage: targetImage,
        correct: 0
    };
    
    container.innerHTML = `
        <div class="puzzle-game improved">
            <div class="level-badge">Уровень ${level}/10 - ${size.rows}×${size.cols}</div>
            <p class="game-task">🧩 Собери картинку: ${targetImage}</p>
            <div class="puzzle-board improved" id="puzzleBoard" style="grid-template-columns: repeat(${size.cols}, 1fr);">
                ${pieces.map((piece, i) => `
                    <div class="puzzle-piece improved" draggable="true" data-index="${piece}" data-current="${i}"
                         ondragstart="dragPuzzleImproved(event)" ondrop="dropPuzzleImproved(event)" ondragover="allowDrop(event)">
                        <span class="puzzle-emoji">${targetImage}</span>
                        <span class="puzzle-number">${piece + 1}</span>
                    </div>
                `).join('')}
            </div>
            <div class="progress-bar-container">
                <div class="level-progress" id="puzzleProgress" style="width: 0%"></div>
            </div>
            <div class="game-feedback" id="puzzleFeedback"></div>
        </div>
    `;
    
    checkPuzzleWin();
}

function dragPuzzleImproved(ev) {
    ev.dataTransfer.setData('index', ev.target.dataset.current);
}

function allowDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
}

function dropPuzzleImproved(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    
    const fromIndex = parseInt(ev.dataTransfer.getData('index'));
    
    // Находим целевой элемент (может быть сама клетка или внутренний элемент)
    let targetElement = ev.target;
    while (targetElement && !targetElement.classList.contains('puzzle-piece')) {
        targetElement = targetElement.parentElement;
    }
    
    if (!targetElement) return;
    
    const toIndex = parseInt(targetElement.dataset.current);
    
    if (isNaN(fromIndex) || isNaN(toIndex)) return;
    if (fromIndex === toIndex) return;
    
    const pieces = document.querySelectorAll('.puzzle-piece');
    const fromPiece = pieces[fromIndex];
    const toPiece = pieces[toIndex];
    
    if (!fromPiece || !toPiece) return;
    
    // Swap data-index values
    const tempIndex = fromPiece.dataset.index;
    fromPiece.dataset.index = toPiece.dataset.index;
    toPiece.dataset.index = tempIndex;
    
    // Обновляем номера на клетках
    fromPiece.querySelector('.puzzle-number').textContent = parseInt(fromPiece.dataset.index) + 1;
    toPiece.querySelector('.puzzle-number').textContent = parseInt(toPiece.dataset.index) + 1;
    
    // Добавляем визуальную обратную связь
    fromPiece.style.transform = 'scale(1.1)';
    toPiece.style.transform = 'scale(1.1)';
    setTimeout(() => {
        fromPiece.style.transform = 'scale(1)';
        toPiece.style.transform = 'scale(1)';
    }, 200);
    
    checkPuzzleWin();
}

function checkPuzzleWin() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let correct = 0;
    pieces.forEach((piece, i) => {
        if (parseInt(piece.dataset.index) === i) {
            piece.classList.add('correct-piece');
            correct++;
        } else {
            piece.classList.remove('correct-piece');
        }
    });
    
    // Обновляем прогресс
    const progress = document.getElementById('puzzleProgress');
    if (progress) {
        progress.style.width = `${(correct / pieces.length) * 100}%`;
    }
    
    if (correct === pieces.length) {
        const feedback = document.getElementById('puzzleFeedback');
        if (feedback) {
            feedback.innerHTML = '<p class="success">🎉 Пазл собран! +50 очков!</p>';
        }
        updateScore(50);
        setTimeout(() => autoNextLevel(2000), 1000);
    }
}

// ==================== ИГРА 6: МАТЕМАТИКА УЛУЧШЕННАЯ ====================
function initMathGame(container) {
    const level = Math.min(gameLevel, 10);
    let a, b, answer, operation, symbol;
    
    if (level <= 3) {
        // Уровни 1-3: только сложение простых чисел
        a = Math.floor(Math.random() * 5) + 1;
        b = Math.floor(Math.random() * 5) + 1;
        operation = '+';
        symbol = '+';
        answer = a + b;
    } else if (level <= 6) {
        // Уровни 4-6: сложение до 10
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;
        operation = '+';
        symbol = '+';
        answer = a + b;
    } else if (level <= 8) {
        // Уровни 7-8: вычитание
        a = Math.floor(Math.random() * 10) + 5;
        b = Math.floor(Math.random() * 5) + 1;
        operation = '-';
        symbol = '−';
        answer = a - b;
    } else {
        // Уровни 9-10: умножение простое
        a = Math.floor(Math.random() * 5) + 1;
        b = Math.floor(Math.random() * 5) + 1;
        operation = '*';
        symbol = '×';
        answer = a * b;
    }
    
    const options = [answer];
    while (options.length < 4) {
        const offset = Math.floor(Math.random() * 5) - 2;
        const wrong = answer + offset;
        if (wrong > 0 && !options.includes(wrong) && wrong !== answer) {
            options.push(wrong);
        }
    }
    
    container.innerHTML = `
        <div class="math-game improved">
            <div class="math-level">Уровень ${level}</div>
            <div class="math-problem improved">
                <span class="math-number">${a}</span>
                <span class="math-operator">${symbol}</span>
                <span class="math-number">${b}</span>
                <span class="math-equals">=</span>
                <span class="math-question">?</span>
            </div>
            <div class="math-options improved">
                ${options.sort(() => Math.random() - 0.5).map(opt => `
                    <button class="math-btn improved" onclick="checkMathImproved(${opt}, ${answer}, this)">${opt}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="mathFeedback"></div>
        </div>
    `;
}

function checkMathImproved(selected, correct, btn) {
    const feedback = document.getElementById('mathFeedback');
    const allBtns = document.querySelectorAll('.math-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        btn.style.transform = 'scale(1.15)';
        feedback.innerHTML = '<p class="success">🎉 Отлично! Правильно! +25 очков</p>';
        updateScore(25);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Неверно, подумай ещё!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// Функция автоперехода на следующий уровень
function autoNextLevel(delay = 1500) {
    setTimeout(() => {
        gameLevel++;
        const levelEl = document.querySelector('.game-level');
        if (levelEl) levelEl.textContent = `Уровень ${gameУровень}`;
        if (currentGame) initGame(currentGame.type);
    }, delay);
}

// ==================== ИГРА 7: АЛФАВИТ УЛУЧШЕННЫЙ ====================
function initAlphabetGame(container) {
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const currentIdx = (gameLevel - 1) % letters.length;
    const targetLetter = letters[currentIdx];
    
    const words = {
        'А': '🍎 Яблоко', 'Б': '🐂 Бык', 'В': '🐺 Волк', 'Г': '🪶 Гусь', 'Д': '🏠 Дом',
        'Е': '🌲 Ёлка', 'Ё': '🌲 Ёлка', 'Ж': '🪲 Жук', 'З': '🦓 Зебра', 'И': '🦔 Иглобрюх',
        'Й': '🦘 Йогурт', 'К': '🐈 Кот', 'Л': '🦁 Лев', 'М': '🐁 Мышь', 'Н': '🐦 Носорог',
        'О': '🥚 Окно', 'П': '🐕 Пёс', 'Р': '🐟 Рыба', 'С': '🐘 Слон', 'Т': '🐯 Тигр',
        'У': '🦆 Утка', 'Ф': '🦩 Фламинго', 'Х': '🐹 Хомяк', 'Ц': '🌺 Цветок', 'Ч': '🕰️ Часы',
        'Ш': '🎩 Шляпа', 'Щ': '🥒 Щука', 'Ъ': '📗 Твёрдый знак', 'Ы': '🍐 Груша (Ы)', 
        'Ь': '📘 Мягкий знак', 'Э': '🐘 Эврика', 'Ю': '🦄 Юникорн', 'Я': '⛵ Яхта'
    };
    
    const options = [targetLetter];
    while (options.length < 6) {
        const rand = letters[Math.floor(Math.random() * letters.length)];
        if (!options.includes(rand)) options.push(rand);
    }
    
    container.innerHTML = `
        <div class="alphabet-game improved">
            <div class="letter-display">
                <span class="target-letter">${targetLetter}</span>
                <span class="word-hint">${words[targetLetter] || ''}</span>
            </div>
            <p class="game-task">🔍 Найди эту букву!</p>
            <div class="alphabet-grid improved">
                ${options.sort(() => Math.random() - 0.5).map(l => `
                    <button class="letter-btn improved" onclick="checkLetterImproved('${l}', '${targetLetter}', this)">${l}</button>
                `).join('')}
            </div>
            <div class="progress-bar-container">
                <div class="level-progress" style="width: ${(currentIdx / letters.length) * 100}%"></div>
            </div>
            <div class="game-feedback" id="letterFeedback"></div>
        </div>
    `;
}

function checkLetterImproved(selected, correct, btn) {
    const feedback = document.getElementById('letterFeedback');
    const allBtns = document.querySelectorAll('.letter-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        btn.style.transform = 'scale(1.2)';
        feedback.innerHTML = '<p class="success">🎉 Молодец! Правильно! +15 очков</p>';
        updateScore(15);
        autoNextLevel(1200);
    } else {
        btn.classList.add('wrong');
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Попробуй ещё раз!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// ==================== ИГРА 8: ЛАБИРИНТ С УРОВНЯМИ ====================
function initMazeGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Размер лабиринта в зависимости от уровня
    const sizes = {
        1: 5,  // 5x5 - очень простой
        2: 5,
        3: 6,
        4: 6,
        5: 7,
        6: 7,
        7: 8,
        8: 8,
        9: 9,
        10: 10  // 10x10 - самый сложный
    };
    
    const size = sizes[level] || 10;
    
    // Процент стен в зависимости от уровня
    const wallPercentages = {
        1: 0.2,
        2: 0.25,
        3: 0.3,
        4: 0.35,
        5: 0.4,
        6: 0.42,
        7: 0.45,
        8: 0.47,
        9: 0.5,
        10: 0.52
    };
    
    const wallPercent = wallPercentages[level] || 0.5;
    
    gameState.maze = { 
        player: { x: 0, y: 0 }, 
        exit: { x: size - 1, y: size - 1 }, 
        size: size,
        moves: 0
    };
    
    // Генерируем лабиринт с гарантированным путём
    const maze = generateMaze(size, wallPercent);
    
    const cellSize = Math.min(50, Math.floor(400 / size));
    
    container.innerHTML = `
        <div class="maze-game improved">
            <div class="level-badge">Уровень ${level}/10 - ${size}×${size}</div>
            <p class="game-task">🎮 Найди выход! Перетащи 😊 к 🚪</p>
            <div class="maze-container">
                <div class="maze-grid improved" id="mazeGrid" style="grid-template-columns: repeat(${size}, ${cellSize}px); grid-template-rows: repeat(${size}, ${cellSize}px);">
                    ${maze.map((cell, i) => {
                        const x = i % size;
                        const y = Math.floor(i / size);
                        let content = '';
                        let className = 'maze-cell';
                        
                        if (x === 0 && y === 0) {
                            content = '😊';
                            className += ' player';
                        } else if (x === size - 1 && y === size - 1) {
                            content = '🚪';
                            className += ' exit';
                        } else if (cell === 1) {
                            className += ' wall';
                        } else {
                            className += ' path';
                        }
                        
                        return `<div class="${className}" data-x="${x}" data-y="${y}" onclick="moveToCell(${x}, ${y})">${content}</div>`;
                    }).join('')}
                </div>
            </div>
            <div class="maze-controls-touch">
                <button class="maze-btn" onclick="moveMazeImproved(0, -1)">⬆️</button>
                <div class="maze-row">
                    <button class="maze-btn" onclick="moveMazeImproved(-1, 0)">⬅️</button>
                    <button class="maze-btn" onclick="moveMazeImproved(1, 0)">➡️</button>
                </div>
                <button class="maze-btn" onclick="moveMazeImproved(0, 1)">⬇️</button>
            </div>
            <div class="game-feedback" id="mazeFeedback"></div>
        </div>
    `;
    
    // Keyboard controls
    document.onkeydown = (e) => {
        if (!currentGame || currentGame.type !== 'maze') return;
        switch(e.key) {
            case 'ArrowUp': moveMazeImproved(0, -1); break;
            case 'ArrowDown': moveMazeImproved(0, 1); break;
            case 'ArrowLeft': moveMazeImproved(-1, 0); break;
            case 'ArrowRight': moveMazeImproved(1, 0); break;
        }
    };
}

function generateMaze(size, wallPercent) {
    // Создаём пустой лабиринт
    let maze = Array(size * size).fill(0);
    
    // Добавляем стены
    for (let i = 0; i < size * size; i++) {
        const x = i % size;
        const y = Math.floor(i / size);
        
        // Старт и финиш всегда свободны
        if ((x === 0 && y === 0) || (x === size - 1 && y === size - 1)) continue;
        
        if (Math.random() < wallPercent) {
            maze[i] = 1; // стена
        }
    }
    
    // Проверяем, есть ли путь (упрощённая проверка)
    // Если пути нет, убираем некоторые стены
    if (!hasPath(maze, size)) {
        // Убираем стены вдоль диагонали
        for (let i = 1; i < size - 1; i++) {
            maze[i * size + i] = 0;
            if (i + 1 < size - 1) maze[i * size + i + 1] = 0;
        }
    }
    
    return maze;
}

function hasPath(maze, size) {
    // Простая проверка пути вдоль диагонали
    for (let i = 0; i < size; i++) {
        if (maze[i * size + i] === 1) {
            // Проверяем соседнюю клетку
            if (i + 1 < size && maze[i * size + i + 1] === 1) {
                return false;
            }
        }
    }
    return true;
}

function moveMazeImproved(dx, dy) {
    const newX = gameState.maze.player.x + dx;
    const newY = gameState.maze.player.y + dy;
    const size = gameState.maze.size;
    
    // Проверяем границы
    if (newX < 0 || newX >= size || newY < 0 || newY >= size) return;
    
    // Проверяем стену
    const cell = document.querySelector(`.maze-cell[data-x="${newX}"][data-y="${newY}"]`);
    if (cell && cell.classList.contains('wall')) return;
    
    // Очищаем старую позицию
    const oldCell = document.querySelector(`.maze-cell[data-x="${gameState.maze.player.x}"][data-y="${gameState.maze.player.y}"]`);
    if (oldCell) {
        oldCell.textContent = '';
        oldCell.classList.remove('player');
    }
    
    // Обновляем позицию
    gameState.maze.player.x = newX;
    gameState.maze.player.y = newY;
    gameState.maze.moves++;
    
    // Устанавливаем новую позицию
    cell.textContent = '😊';
    cell.classList.add('player');
    
    // Проверяем победу
    if (newX === gameState.maze.exit.x && newY === gameState.maze.exit.y) {
        const moves = gameState.maze.moves;
        const bonus = Math.max(0, 50 - moves);
        document.getElementById('mazeFeedback').innerHTML = `<p class="success">🎉 Выход найден за ${moves} ходов! +${30 + bonus} очков!</p>`;
        updateScore(30 + bonus);
        document.onkeydown = null;
        setTimeout(() => autoNextLevel(2000), 1000);
    }
}

function moveToCell(x, y) {
    // Клик по клетке для мобильных устройств
    const currentX = gameState.maze.player.x;
    const currentY = gameState.maze.player.y;
    
    // Проверяем, соседняя ли клетка
    const dx = x - currentX;
    const dy = y - currentY;
    
    if (Math.abs(dx) + Math.abs(dy) === 1) {
        moveMazeImproved(dx, dy);
    }
}

// ==================== ИГРА 9: ВИКТОРИНА С УРОВНЯМИ ====================
function initQuizGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Вопросы по уровням сложности
    const quizLevels = {
        1: [
            { q: 'Сколько ног у собаки?', a: '4', options: ['2', '3', '4', '5'] },
            { q: 'Какой цвет у неба?', a: 'Синий', options: ['Красный', 'Синий', 'Зелёный', 'Жёлтый'] },
            { q: 'Сколько дней в неделе?', a: '7', options: ['5', '6', '7', '8'] }
        ],
        2: [
            { q: 'Сколько месяцев в году?', a: '12', options: ['10', '11', '12', '13'] },
            { q: 'Какое животное говорит "мяу"?', a: 'Кошка', options: ['Собака', 'Кошка', 'Корова', 'Утка'] },
            { q: 'Сколько глаз у человека?', a: '2', options: ['1', '2', '3', '4'] }
        ],
        3: [
            { q: 'Сколько пальцев на руке?', a: '5', options: ['4', '5', '6', '10'] },
            { q: 'Какой сейчас год?', a: '2025', options: ['2020', '2024', '2025', '2030'] },
            { q: 'Сколько углов у треугольника?', a: '3', options: ['2', '3', '4', '5'] }
        ],
        4: [
            { q: 'Сколько планет в Солнечной системе?', a: '8', options: ['7', '8', '9', '10'] },
            { q: 'Какое животное самое большое?', a: 'Синий кит', options: ['Слон', 'Синий кит', 'Жираф', 'Акула'] },
            { q: 'Сколько континентов на Земле?', a: '7', options: ['5', '6', '7', '8'] }
        ],
        5: [
            { q: 'Какой газ нужен для дыхания?', a: 'Кислород', options: ['Азот', 'Кислород', 'Углекислый газ', 'Водород'] },
            { q: 'Сколько дней в году?', a: '365', options: ['360', '365', '366', '370'] },
            { q: 'Какая планета самая большая?', a: 'Юпитер', options: ['Земля', 'Марс', 'Юпитер', 'Сатурн'] }
        ],
        6: [
            { q: 'Сколько костей в теле человека?', a: '206', options: ['150', '200', '206', '250'] },
            { q: 'Какая река самая длинная?', a: 'Нил', options: ['Амазонка', 'Нил', 'Волга', 'Дунай'] },
            { q: 'Сколько зубов у взрослого человека?', a: '32', options: ['28', '30', '32', '36'] }
        ],
        7: [
            { q: 'Кто написал "Войну и мир"?', a: 'Толстой', options: ['Пушкин', 'Достоевский', 'Толстой', 'Гоголь'] },
            { q: 'Сколько океанов на Земле?', a: '5', options: ['4', '5', '6', '7'] },
            { q: 'Какая столица Франции?', a: 'Париж', options: ['Лондон', 'Берлин', 'Париж', 'Рим'] }
        ],
        8: [
            { q: 'Сколько хромосом у человека?', a: '46', options: ['23', '44', '46', '48'] },
            { q: 'Какой элемент обозначается как Au?', a: 'Золото', options: ['Серебро', 'Золото', 'Медь', 'Железо'] },
            { q: 'Кто изобрёл лампочку?', a: 'Эдисон', options: ['Тесла', 'Эйнштейн', 'Эдисон', 'Ньютон'] }
        ],
        9: [
            { q: 'Сколько клеток в шахматах?', a: '64', options: ['32', '48', '64', '81'] },
            { q: 'Какая скорость света?', a: '300 000 км/с', options: ['150 000 км/с', '300 000 км/с', '450 000 км/с', '600 000 км/с'] },
            { q: 'Кто написал "Гамлета"?', a: 'Шекспир', options: ['Данте', 'Шекспир', 'Гомер', 'Мольер'] }
        ],
        10: [
            { q: 'Сколько рёбер у человека?', a: '24', options: ['20', '22', '24', '26'] },
            { q: 'Какой металл самый лёгкий?', a: 'Литий', options: ['Алюминий', 'Литий', 'Магний', 'Титан'] },
            { q: 'Кто открыл Америку?', a: 'Колумб', options: ['Магеллан', 'Колумб', 'Васко да Гама', 'Кук'] }
        ]
    };
    
    const questions = quizLevels[level] || quizLevels[10];
    const q = questions[Math.floor(Math.random() * questions.length)];
    
    container.innerHTML = `
        <div class="quiz-game improved">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">❓ ${q.q}</p>
            <div class="quiz-options improved">
                ${q.options.map(opt => `
                    <button class="quiz-btn improved" onclick="checkQuizImproved('${opt}', '${q.a}', this)">${opt}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="quizFeedback"></div>
        </div>
    `;
}

function checkQuizImproved(selected, correct, btn) {
    const feedback = document.getElementById('quizFeedback');
    const allBtns = document.querySelectorAll('.quiz-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        btn.style.transform = 'scale(1.05)';
        feedback.innerHTML = '<p class="success">🎉 Правильно! Молодец! +25 очков</p>';
        updateScore(25);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Неверно!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// ==================== ИГРА 10: ЛОГИКА С УРОВНЯМИ ====================
function initLogicGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Последовательности по уровням сложности
    const logicLevels = {
        1: [
            { seq: ['🔴', '🔵', '🔴', '🔵', '🔴', '?'], answer: '🔵', options: ['🔴', '🔵', '🟢', '🟡'] },
            { seq: ['1️⃣', '2️⃣', '1️⃣', '2️⃣', '1️⃣', '?'], answer: '2️⃣', options: ['1️⃣', '2️⃣', '3️⃣', '4️⃣'] },
            { seq: ['🐶', '🐱', '🐶', '🐱', '🐶', '?'], answer: '🐱', options: ['🐶', '🐭', '🐱', '🐹'] }
        ],
        2: [
            { seq: ['🍎', '🍊', '🍎', '🍊', '🍎', '?'], answer: '🍊', options: ['🍎', '🍊', '🍇', '🍌'] },
            { seq: ['1', '3', '1', '3', '1', '?'], answer: '3', options: ['1', '2', '3', '4'] },
            { seq: ['⬆️', '⬇️', '⬆️', '⬇️', '⬆️', '?'], answer: '⬇️', options: ['⬆️', '⬇️', '⬅️', '➡️'] }
        ],
        3: [
            { seq: ['🌞', '🌙', '⭐', '🌞', '🌙', '?'], answer: '⭐', options: ['🌞', '🌙', '⭐', '☁️'] },
            { seq: ['2', '4', '6', '8', '10', '?'], answer: '12', options: ['11', '12', '14', '16'] },
            { seq: ['🔺', '🔻', '🔺', '🔻', '🔺', '?'], answer: '🔻', options: ['🔺', '🔻', '◆', '○'] }
        ],
        4: [
            { seq: ['5', '10', '15', '20', '25', '?'], answer: '30', options: ['26', '28', '30', '35'] },
            { seq: ['🐜', '🐝', '🦋', '🐞', '🐜', '?'], answer: '🐝', options: ['🐜', '🐝', '🦋', '🐞'] },
            { seq: ['A', 'C', 'E', 'G', 'I', '?'], answer: 'K', options: ['H', 'J', 'K', 'L'] }
        ],
        5: [
            { seq: ['1', '2', '4', '8', '16', '?'], answer: '32', options: ['20', '24', '32', '48'] },
            { seq: ['3', '6', '9', '12', '15', '?'], answer: '18', options: ['16', '17', '18', '21'] },
            { seq: ['100', '90', '80', '70', '60', '?'], answer: '50', options: ['40', '50', '55', '45'] }
        ],
        6: [
            { seq: ['1', '1', '2', '3', '5', '?'], answer: '8', options: ['6', '7', '8', '9'] },
            { seq: ['2', '5', '10', '17', '26', '?'], answer: '37', options: ['30', '35', '37', '40'] },
            { seq: ['🌸', '🌺', '🌻', '🌷', '🌹', '?'], answer: '🌼', options: ['🌸', '🌺', '🌻', '🌼'] }
        ],
        7: [
            { seq: ['1', '4', '9', '16', '25', '?'], answer: '36', options: ['30', '32', '34', '36'] },
            { seq: ['2', '6', '12', '20', '30', '?'], answer: '42', options: ['36', '40', '42', '48'] },
            { seq: ['🦅', '🦉', '🦇', '🦅', '🦉', '?'], answer: '🦇', options: ['🦅', '🦉', '🦇', '🦜'] }
        ],
        8: [
            { seq: ['1', '3', '7', '15', '31', '?'], answer: '63', options: ['47', '55', '63', '79'] },
            { seq: ['1', '8', '27', '64', '125', '?'], answer: '216', options: ['150', '180', '200', '216'] },
            { seq: ['🌍', '🌕', '🪐', '⭐', '🌌', '?'], answer: '🚀', options: ['🌍', '🌕', '🚀', '👽'] }
        ],
        9: [
            { seq: ['2', '3', '5', '7', '11', '?'], answer: '13', options: ['12', '13', '14', '15'] },
            { seq: ['1', '2', '6', '24', '120', '?'], answer: '720', options: ['360', '600', '720', '840'] },
            { seq: ['🎨', '🎭', '🎪', '🎬', '🎤', '?'], answer: '🎧', options: ['🎨', '🎸', '🎧', '🎹'] }
        ],
        10: [
            { seq: ['1', '1', '2', '3', '5', '8', '?'], answer: '13', options: ['10', '11', '12', '13'] },
            { seq: ['0', '1', '4', '9', '16', '25', '?'], answer: '36', options: ['30', '34', '36', '40'] },
            { seq: ['♠️', '♥️', '♦️', '♣️', '♠️', '?'], answer: '♥️', options: ['♠️', '♥️', '♦️', '♣️'] }
        ]
    };
    
    const patterns = logicLevels[level] || logicLevels[10];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    
    container.innerHTML = `
        <div class="logic-game improved">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🧩 Продолжи последовательность:</p>
            <div class="logic-sequence improved">
                ${pattern.seq.map((s, i) => `<span class="logic-item ${s === '?' ? 'question' : ''}">${s}</span>`).join('')}
            </div>
            <div class="logic-options improved">
                ${pattern.options.map(opt => `
                    <button class="logic-btn improved" onclick="checkLogicImproved('${opt}', '${pattern.answer}', this)">${opt}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="logicFeedback"></div>
        </div>
    `;
}

function checkLogicImproved(selected, correct, btn) {
    const feedback = document.getElementById('logicFeedback');
    const allBtns = document.querySelectorAll('.logic-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        btn.style.transform = 'scale(1.15)';
        feedback.innerHTML = '<p class="success">🎉 Логика верна! +20 очков</p>';
        updateScore(20);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Подумай ещё!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// ==================== ИГРА 11: РИСОВАЛКА ====================
function initDrawingGame(container) {
    container.innerHTML = `
        <div class="drawing-game">
            <p class="game-task">Рисуй мышкой или пальцем!</p>
            <div class="drawing-toolbar">
                <button class="tool-btn" onclick="setColor('#FF5252')" style="background:#FF5252"></button>
                <button class="tool-btn" onclick="setColor('#448AFF')" style="background:#448AFF"></button>
                <button class="tool-btn" onclick="setColor('#69F0AE')" style="background:#69F0AE"></button>
                <button class="tool-btn" onclick="setColor('#FFD740')" style="background:#FFD740"></button>
                <button class="tool-btn" onclick="setColor('#000000')" style="background:#000000"></button>
                <button class="tool-btn clear-btn" onclick="clearCanvas()">🗑️</button>
            </div>
            <canvas id="drawingCanvas" width="600" height="400" class="drawing-canvas"></canvas>
            <div class="game-feedback">
                <button class="save-btn" onclick="saveDrawing()">💾 Сохранить рисунок (+10 очков)</button>
            </div>
        </div>
    `;
    
    setupCanvas();
}

let canvas, ctx, isDrawing = false, currentColor = '#FF5252';

function setupCanvas() {
    canvas = document.getElementById('drawingCanvas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    ctx.strokeStyle = currentColor;
    
    // Mouse events
    canvas.onmousedown = startDrawing;
    canvas.onmousemove = draw;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseleave = stopDrawing;
    
    // Touch events
    canvas.ontouchstart = (e) => { e.preventDefault(); startDrawing(e.touches[0]); };
    canvas.ontouchmove = (e) => { e.preventDefault(); draw(e.touches[0]); };
    canvas.ontouchend = stopDrawing;
}

function setColor(color) {
    currentColor = color;
    if (ctx) ctx.strokeStyle = color;
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function saveDrawing() {
    updateScore(10);
    alert('🎨 Рисунок сохранён! +10 очков');
}

// ==================== ИГРА 12: ЗВУКИ ЖИВОТНЫХ С УРОВНЯМИ ====================
function initSoundsGame(container) {
    const level = Math.min(gameLevel, 10);
    
    // Животные по уровням сложности
    const animalLevels = {
        1: [
            { name: 'Собака', emoji: '🐶', sound: 'Гав-гав!' },
            { name: 'Кошка', emoji: '🐱', sound: 'Мяу!' },
            { name: 'Корова', emoji: '🐮', sound: 'Муу!' },
            { name: 'Утка', emoji: '🦆', sound: 'Кря-кря!' }
        ],
        2: [
            { name: 'Петух', emoji: '🐓', sound: 'Кукареку!' },
            { name: 'Лягушка', emoji: '🐸', sound: 'Ква-ква!' },
            { name: 'Свинья', emoji: '🐷', sound: 'Хрю-хрю!' },
            { name: 'Овца', emoji: '🐑', sound: 'Бе-бе!' },
            { name: 'Лошадь', emoji: '🐴', sound: 'Иго-го!' }
        ],
        3: [
            { name: 'Слон', emoji: '🐘', sound: 'Тру-ру!' },
            { name: 'Лев', emoji: '🦁', sound: 'Рррр!' },
            { name: 'Змея', emoji: '🐍', sound: 'Ш-ш-ш!' },
            { name: 'Волк', emoji: '🐺', sound: 'Ау-уу!' },
            { name: 'Медведь', emoji: '🐻', sound: 'Гр-р-р!' },
            { name: 'Обезьяна', emoji: '🐵', sound: 'У-у-а!' }
        ],
        4: [
            { name: 'Попугай', emoji: '🦜', sound: 'Привет!' },
            { name: 'Сова', emoji: '🦉', sound: 'У-ху!' },
            { name: 'Ворона', emoji: '🐦‍⬛', sound: 'Кар-кар!' },
            { name: 'Голубь', emoji: '🕊️', sound: 'Гур-гур!' },
            { name: 'Павлин', emoji: '🦚', sound: 'Крик!' },
            { name: 'Пингвин', emoji: '🐧', sound: 'Буль-буль!' }
        ],
        5: [
            { name: 'Дельфин', emoji: '🐬', sound: 'И-и-и!' },
            { name: 'Кит', emoji: '🐋', sound: 'У-у-у!' },
            { name: 'Акула', emoji: '🦈', sound: 'Хрум!' },
            { name: 'Осьминог', emoji: '🐙', sound: 'Бульк!' },
            { name: 'Краб', emoji: '🦀', sound: 'Щелк!' },
            { name: 'Черепаха', emoji: '🐢', sound: 'Ш-ш!' },
            { name: 'Медуза', emoji: '🪼', sound: 'Плюх!' }
        ],
        6: [
            { name: 'Пчела', emoji: '🐝', sound: 'Ж-ж-ж!' },
            { name: 'Бабочка', emoji: '🦋', sound: 'Фль-фль!' },
            { name: 'Божья коровка', emoji: '🐞', sound: 'Тик-тик!' },
            { name: 'Муравей', emoji: '🐜', sound: 'Тц-тц!' },
            { name: 'Улитка', emoji: '🐌', sound: 'Ш-ш-ш!' },
            { name: 'Паук', emoji: '🕷️', sound: 'Шурш!' },
            { name: 'Сверчок', emoji: '🦗', sound: 'Крик!' },
            { name: 'Богомол', emoji: '🐛', sound: 'Клац!' }
        ],
        7: [
            { name: 'Лиса', emoji: '🦊', sound: 'Тяф!' },
            { name: 'Енот', emoji: '🦝', sound: 'Хрюк!' },
            { name: 'Барсук', emoji: '🦡', sound: 'Фыр!' },
            { name: 'Ёж', emoji: '🦔', sound: 'Фыр-фыр!' },
            { name: 'Белка', emoji: '🐿️', sound: 'Чик-чик!' },
            { name: 'Крот', emoji: '⛏️', sound: 'Шурш!' },
            { name: 'Олень', emoji: '🦌', sound: 'Блеят!' },
            { name: 'Заяц', emoji: '🐇', sound: 'Фырк!' }
        ],
        8: [
            { name: 'Панда', emoji: '🐼', sound: 'Хрум!' },
            { name: 'Коала', emoji: '🐨', sound: 'Бурч!' },
            { name: 'Кенгуру', emoji: '🦘', sound: 'Топ-топ!' },
            { name: 'Жираф', emoji: '🦒', sound: 'Хрюк!' },
            { name: 'Зебра', emoji: '🦓', sound: 'И-го-го!' },
            { name: 'Носорог', emoji: '🦏', sound: 'Фыр!' },
            { name: 'Бегемот', emoji: '🦛', sound: 'Гр-р-р!' },
            { name: 'Верблюд', emoji: '🐪', sound: 'Хрюк!' }
        ],
        9: [
            { name: 'Птица', emoji: '🐦', sound: 'Чирик!' },
            { name: 'Утконос', emoji: '🦆', sound: 'Кря!' },
            { name: 'Ехидна', emoji: '🦔', sound: 'Ш-ш!' },
            { name: 'Киви', emoji: '🥝', sound: 'Киви!' },
            { name: 'Тукан', emoji: '🦜', sound: 'Кряк!' },
            { name: 'Фламинго', emoji: '🦩', sound: 'Гра-гра!' },
            { name: 'Альбатрос', emoji: '🦅', sound: 'Карр!' },
            { name: 'Колибри', emoji: '🐦‍⬛', sound: 'Ж-ж-ж!' },
            { name: 'Дятел', emoji: '🐦', sound: 'Тук-тук!' }
        ],
        10: [
            { name: 'Дракон', emoji: '🐉', sound: 'Ррр!' },
            { name: 'Единорог', emoji: '🦄', sound: 'И-го-го!' },
            { name: 'Феникс', emoji: '🔥', sound: 'Фшшш!' },
            { name: 'Грифон', emoji: '🦅', sound: 'Карр!' },
            { name: 'Цербера', emoji: '🐕‍🦺', sound: 'Гав-гав!' },
            { name: 'Мантикора', emoji: '🦁', sound: 'Ррр!' },
            { name: 'Красный панда', emoji: '🦝', sound: 'Хрюк!' },
            { name: 'Снежный барс', emoji: '🐆', sound: 'Ррр!' },
            { name: 'Орел', emoji: '🦅', sound: 'Карр!' },
            { name: 'Аист', emoji: '🐦', sound: 'Клац!' }
        ]
    };
    
    const animals = animalLevels[level] || animalLevels[10];
    const target = animals[Math.floor(Math.random() * animals.length)];
    
    // Выбираем 4 уникальных животных для вариантов
    let options = [...animals];
    options = options.sort(() => Math.random() - 0.5).slice(0, 4);
    
    // Убеждаемся, что правильный ответ есть в вариантах
    if (!options.find(o => o.name === target.name)) {
        options[0] = target;
    }
    
    container.innerHTML = `
        <div class="sounds-game improved">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔊 Какое животное издаёт этот звук?</p>
            <button class="sound-play-btn improved" onclick="playSoundImproved('${target.sound}')">🔊 ${target.sound}</button>
            <div class="sound-options improved">
                ${options.sort(() => Math.random() - 0.5).map(a => `
                    <button class="sound-btn improved" onclick="checkSoundImproved('${a.name}', '${target.name}', this)">
                        <span class="sound-emoji">${a.emoji}</span>
                        <span class="sound-name">${a.name}</span>
                    </button>
                `).join('')}
            </div>
            <div class="game-feedback" id="soundFeedback"></div>
        </div>
    `;
}

function playSoundImproved(sound) {
    const btn = document.querySelector('.sound-play-btn');
    btn.textContent = `🔊 ${sound}`;
    btn.classList.add('playing');
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        btn.classList.remove('playing');
        btn.style.transform = 'scale(1)';
    }, 500);
}

function checkSoundImproved(selected, correct, btn) {
    const feedback = document.getElementById('soundFeedback');
    const allBtns = document.querySelectorAll('.sound-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        btn.style.transform = 'scale(1.1)';
        feedback.innerHTML = '<p class="success">🎉 Правильно! +15 очков</p>';
        updateScore(15);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        btn.style.animation = 'shake 0.5s';
        feedback.innerHTML = '<p class="error">❌ Неправильно!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.style.animation = '';
            allBtns.forEach(b => b.disabled = false);
        }, 1000);
    }
}

// Экспорт для использования в HTML
window.GamesEngine = {
    getGamesByAge: getGamesByAge,
    getAllGames: getAllGames,
    launchGame: launchGame,
    closeGame: closeGame,
    resetGame: resetGame,
    autoNextLevel: autoNextLevel,
    checkColor: checkColorSimple,
    checkColorSimple: checkColorSimple,
    checkCount: checkCountImproved,
    checkCountImproved: checkCountImproved,
    checkMath: checkMathImproved,
    checkMathImproved: checkMathImproved,
    checkShape: checkShapeImproved,
    checkShapeImproved: checkShapeImproved,
    checkLogic: checkLogicImproved,
    checkLogicImproved: checkLogicImproved,
    playSound: playSoundImproved,
    playSoundImproved: playSoundImproved,
    checkSound: checkSoundImproved,
    checkSoundImproved: checkSoundImproved,
};

// ==================== ИГРА 13: ШАХМАТЫ ====================
function initChessGame(container) {
    const level = Math.min(gameLevel, 10);
    
    container.innerHTML = `
        <div id="chess" class="chess-game-container">
            <div class="level-badge">Уровень ${level}/10 - Шахматы ♟️</div>
            <div id="wrap">
                <!-- Player White Panel -->
                <div id="white-panel" class="chess-panel white">
                    <div class="chess-panel-header">
                        <h2>Белые</h2>
                    </div>
                    <div class="taken-pieces"></div>
                </div>
                
                <!-- Chess Board -->
                <div id="chess-board"></div>
                
                <!-- Player Black Panel -->
                <div id="black-panel" class="chess-panel black">
                    <div class="chess-panel-header">
                        <h2 class="white-text">Чёрные</h2>
                    </div>
                    <div class="taken-pieces"></div>
                </div>
            </div>
            <div class="game-feedback" id="chessFeedback"></div>
        </div>
    `;
    
    // Инициализируем шахматы
    initChessBoard();
}

// Шахматные функции
function initChessBoard() {
    const cols = ["H", "G", "F", "E", "D", "C", "B", "A"];
    
    const pieces = {
        black: {
            king: { pos: "D8", icon: "♔" },
            queen: { pos: "E8", icon: "♕" },
            bishop_1: { pos: "C8", icon: "♗" },
            bishop_2: { pos: "F8", icon: "♗" },
            knight_1: { pos: "B8", icon: "♘" },
            knight_2: { pos: "G8", icon: "♘" },
            rook_1: { pos: "A8", icon: "♖" },
            rook_2: { pos: "H8", icon: "♖" },
            pawn_1: { pos: "A7", icon: "♙" },
            pawn_2: { pos: "B7", icon: "♙" },
            pawn_3: { pos: "C7", icon: "♙" },
            pawn_4: { pos: "D7", icon: "♙" },
            pawn_5: { pos: "E7", icon: "♙" },
            pawn_6: { pos: "F7", icon: "♙" },
            pawn_7: { pos: "G7", icon: "♙" },
            pawn_8: { pos: "H7", icon: "♙" },
        },
        white: {
            king: { pos: "D1", icon: "♚" },
            queen: { pos: "E1", icon: "♛" },
            bishop_1: { pos: "C1", icon: "♝" },
            bishop_2: { pos: "F1", icon: "♝" },
            knight_1: { pos: "B1", icon: "♞" },
            knight_2: { pos: "G1", icon: "♞" },
            rook_1: { pos: "A1", icon: "♜" },
            rook_2: { pos: "H1", icon: "♜" },
            pawn_1: { pos: "A2", icon: "♟" },
            pawn_2: { pos: "B2", icon: "♟" },
            pawn_3: { pos: "C2", icon: "♟" },
            pawn_4: { pos: "D2", icon: "♟" },
            pawn_5: { pos: "E2", icon: "♟" },
            pawn_6: { pos: "F2", icon: "♟" },
            pawn_7: { pos: "G2", icon: "♟" },
            pawn_8: { pos: "H2", icon: "♟" },
        },
    };
    
    // Создаём доску
    const board = document.querySelector('#chess-board');
    if (!board) return;
    
    for (let i = 1; i <= 64; i++) {
        let row = Math.floor((64 - i) / 8) + 1;
        let col = (8 * (9 - row)) - i + 1;
        let color = "";
        if (row % 2 === 0) {
            color = i % 2 === 0 ? "black" : "white";
        } else {
            color = i % 2 === 0 ? "white" : "black";
        }
        
        const cell = cols[col - 1] + row;
        board.insertAdjacentHTML('beforeend', 
            `<div class="square ${color}" data-nth="${i}" data-row-num="${row}" data-square-color="${color}" data-col-letter="${cols[col - 1]}" data-col="${col}" data-cell="${cell}"></div>`
        );
    }
    
    // Расставляем фигуры
    setChessPieces(pieces);
    
    // Добавляем обработчики
    addChessListeners();
}

function setChessPieces(pieces) {
    const b = pieces.black;
    const w = pieces.white;
    
    for (let key in b) {
        if (b.hasOwnProperty(key)) {
            let pos = b[key].pos;
            let square = document.querySelector('.square[data-cell="' + pos + '"]');
            if (square) {
                square.insertAdjacentHTML('beforeend', 
                    `<div class="chess-piece ${key}" data-piece="${key}" data-color="black" data-piece-start="${pos}" data-position="${pos}"><span class="piece-icon black">${b[key].icon}</span></div>`
                );
            }
        }
    }
    
    for (let key in w) {
        if (w.hasOwnProperty(key)) {
            let pos = w[key].pos;
            let square = document.querySelector('.square[data-cell="' + pos + '"]');
            if (square) {
                square.insertAdjacentHTML('beforeend', 
                    `<div class="chess-piece ${key}" data-piece="${key}" data-color="white" data-piece-start="${pos}" data-position="${pos}"><span class="piece-icon white">${w[key].icon}</span></div>`
                );
            }
        }
    }
}

function addChessListeners() {
    let selectedPiece = null;
    let selectedSquare = null;
    
    // Обработчики для фигур
    document.querySelectorAll('.chess-piece').forEach(piece => {
        piece.addEventListener('click', function(e) {
            e.stopPropagation();
            
            let clickedPiece = e.target.closest('.chess-piece');
            let parentSquare = clickedPiece.parentNode;
            
            // Если уже выбрана фигура и кликаем на фигуру другого цвета
            if (selectedPiece && clickedPiece !== selectedPiece) {
                let clickedColor = clickedPiece.getAttribute('data-color');
                let selectedColor = selectedPiece.getAttribute('data-color');
                
                if (clickedColor !== selectedColor) {
                    // Захват фигуры
                    captureChessPiece(clickedPiece, selectedPiece);
                    moveChessPiece(selectedPiece, parentSquare);
                    clearChessSelection();
                    updateScore(50); // +50 за захват
                    return;
                }
            }
            
            // Выбор фигуры
            clearChessSelection();
            selectedPiece = clickedPiece;
            selectedSquare = parentSquare;
            parentSquare.classList.add('piece-selected');
            
            // Показываем возможные ходы
            showValidMoves(selectedPiece);
        });
    });
    
    // Обработчики для клеток
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('click', function(e) {
            if (selectedPiece && square !== selectedSquare) {
                // Проверяем, пуста ли клетка
                if (!square.querySelector('.chess-piece')) {
                    moveChessPiece(selectedPiece, square);
                    clearChessSelection();
                    updateScore(10); // +10 за ход
                }
            }
        });
    });
}

function showValidMoves(piece) {
    // Упрощённая логика - подсвечиваем соседние клетки
    let currentSquare = piece.parentNode;
    let col = parseInt(currentSquare.getAttribute('data-col'));
    let row = parseInt(currentSquare.getAttribute('data-row-num'));
    let pieceType = piece.getAttribute('data-piece');
    let color = piece.getAttribute('data-color');
    
    let validMoves = [];
    
    // Базовые ходы для всех фигур
    for (let r = Math.max(1, row - 1); r <= Math.min(8, row + 1); r++) {
        for (let c = Math.max(1, col - 1); c <= Math.min(8, col + 1); c++) {
            if (r !== row || c !== col) {
                validMoves.push({r, c});
            }
        }
    }
    
    // Дополнительные ходы для коня
    if (pieceType.includes('knight')) {
        validMoves.push({r: row + 2, c: col + 1});
        validMoves.push({r: row + 2, c: col - 1});
        validMoves.push({r: row - 2, c: col + 1});
        validMoves.push({r: row - 2, c: col - 1});
        validMoves.push({r: row + 1, c: col + 2});
        validMoves.push({r: row + 1, c: col - 2});
        validMoves.push({r: row - 1, c: col + 2});
        validMoves.push({r: row - 1, c: col - 2});
    }
    
    // Подсвечиваем возможные ходы
    validMoves.forEach(move => {
        if (move.r >= 1 && move.r <= 8 && move.c >= 1 && move.c <= 8) {
            let targetSquare = document.querySelector(`.square[data-row-num="${move.r}"][data-col="${move.c}"]`);
            if (targetSquare) {
                let targetPiece = targetSquare.querySelector('.chess-piece');
                if (!targetPiece) {
                    targetSquare.classList.add('square-selected');
                } else if (targetPiece.getAttribute('data-color') !== color) {
                    targetSquare.classList.add('capturable-selected');
                }
            }
        }
    });
}

function moveChessPiece(piece, targetSquare) {
    let oldSquare = piece.parentNode;
    targetSquare.appendChild(piece);
    piece.setAttribute('data-position', targetSquare.getAttribute('data-cell'));
    
    // Проверяем шах и мат (упрощённо)
    checkChessStatus();
}

function captureChessPiece(targetPiece, attackerPiece) {
    let targetColor = targetPiece.getAttribute('data-color');
    let panel = document.getElementById(targetColor + '-panel');
    let takenPieces = panel.querySelector('.taken-pieces');
    takenPieces.appendChild(targetPiece);
    
    // Показываем сообщение
    const feedback = document.getElementById('chessFeedback');
    if (feedback) {
        let pieceName = getPieceName(targetPiece.getAttribute('data-piece'));
        feedback.innerHTML = `<p class="success">♟️ Захвачена фигура: ${pieceName}! +50 очков</p>`;
        setTimeout(() => feedback.innerHTML = '', 2000);
    }
}

function getPieceName(pieceKey) {
    const names = {
        king: 'Король',
        queen: 'Ферзь',
        bishop_1: 'Слон',
        bishop_2: 'Слон',
        knight_1: 'Конь',
        knight_2: 'Конь',
        rook_1: 'Ладья',
        rook_2: 'Ладья',
        pawn_1: 'Пешка',
        pawn_2: 'Пешка',
        pawn_3: 'Пешка',
        pawn_4: 'Пешка',
        pawn_5: 'Пешка',
        pawn_6: 'Пешка',
        pawn_7: 'Пешка',
        pawn_8: 'Пешка',
    };
    return names[pieceKey] || 'Фигура';
}

function clearChessSelection() {
    document.querySelectorAll('.square').forEach(sq => {
        sq.classList.remove('piece-selected', 'square-selected', 'capturable-selected');
    });
}

function checkChessStatus() {
    // Проверяем, есть ли короли на доске
    const whiteKing = document.querySelector('.chess-piece[data-piece="king"][data-color="white"]');
    const blackKing = document.querySelector('.chess-piece[data-piece="king"][data-color="black"]');
    
    const feedback = document.getElementById('chessFeedback');
    
    if (!whiteKing) {
        if (feedback) feedback.innerHTML = '<p class="success">🎉 Чёрные победили! Мат!</p>';
        updateScore(100);
        setTimeout(() => autoNextLevel(3000), 2000);
    } else if (!blackKing) {
        if (feedback) feedback.innerHTML = '<p class="success">🎉 Белые победили! Мат!</p>';
        updateScore(100);
        setTimeout(() => autoNextLevel(3000), 2000);
    }
}

// ==================== ИГРА 14: ШАШКИ ====================
function initCheckersGame(container) {
    const level = Math.min(gameLevel, 10);
    
    container.innerHTML = `
        <div class="checkers-game-container">
            <div class="level-badge">Уровень ${level}/10 - Шашки ⚫</div>
            <div class="checkers-turn-indicator">Ход: <span id="checkersTurn">⚪ Белые</span></div>
            <div class="checkers-board" id="checkersBoard"></div>
            <div class="game-feedback" id="checkersFeedback"></div>
        </div>
    `;
    
    // Инициализируем шашки
    initCheckersBoard();
}

// Шашечные переменные
let checkersSelectedPiece = null;
let checkersTurn = "white";
const checkersRows = 8;
const checkersCols = 8;

function initCheckersBoard() {
    const board = document.getElementById("checkersBoard");
    if (!board) return;
    
    // Очищаем доску
    board.innerHTML = '';
    checkersSelectedPiece = null;
    checkersTurn = "white";
    updateCheckersTurnDisplay();
    
    // Создаём доску 8x8
    for (let row = 0; row < checkersRows; row++) {
        for (let col = 0; col < checkersCols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add((row + col) % 2 === 0 ? "white" : "black");
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            // Добавляем шашки
            if (row < 3 && (row + col) % 2 !== 0) {
                addCheckersPiece(cell, "black");
            } else if (row > 4 && (row + col) % 2 !== 0) {
                addCheckersPiece(cell, "white");
            }
            
            cell.addEventListener("click", onCheckersCellClick);
            board.appendChild(cell);
        }
    }
}

function addCheckersPiece(cell, color) {
    const piece = document.createElement("div");
    piece.classList.add("checkers-piece", color);
    piece.dataset.color = color;
    piece.dataset.king = "false";
    cell.appendChild(piece);
}

function onCheckersCellClick(e) {
    const cell = e.target.closest(".cell");
    if (!cell) return;
    
    const piece = cell.querySelector(".checkers-piece");
    
    if (checkersSelectedPiece) {
        if (canMoveCheckers(checkersSelectedPiece, cell)) {
            moveCheckersPiece(checkersSelectedPiece, cell);
            checkersSelectedPiece = null;
        } else {
            checkersSelectedPiece.classList.remove("selected");
            checkersSelectedPiece = null;
        }
    } else {
        if (piece && piece.dataset.color === checkersTurn) {
            checkersSelectedPiece = piece;
            piece.classList.add("selected");
        }
    }
}

function canMoveCheckers(piece, targetCell) {
    const startRow = parseInt(piece.parentElement.dataset.row);
    const startCol = parseInt(piece.parentElement.dataset.col);
    const endRow = parseInt(targetCell.dataset.row);
    const endCol = parseInt(targetCell.dataset.col);
    const direction = piece.dataset.color === "white" ? -1 : 1;
    const isKing = piece.dataset.king === "true";
    
    if (targetCell.querySelector(".checkers-piece")) {
        return false;
    }
    
    if (!isKing) {
        return canMoveRegularCheckers(piece, startRow, startCol, endRow, endCol, direction);
    } else {
        return canMoveKingCheckers(piece, startRow, startCol, endRow, endCol);
    }
}

function canMoveRegularCheckers(piece, startRow, startCol, endRow, endCol, direction) {
    if (Math.abs(endRow - startRow) === 1 && Math.abs(endCol - startCol) === 1 && endRow - startRow === direction) {
        return true;
    }
    if (Math.abs(endRow - startRow) === 2 && Math.abs(endCol - startCol) === 2 && endRow - startRow === 2 * direction) {
        const middleRow = (startRow + endRow) / 2;
        const middleCol = (startCol + endCol) / 2;
        const middleCell = document.querySelector(`.cell[data-row="${middleRow}"][data-col="${middleCol}"]`);
        const middlePiece = middleCell.querySelector(".checkers-piece");
        if (middlePiece && middlePiece.dataset.color !== piece.dataset.color) {
            return true;
        }
    }
    return false;
}

function canMoveKingCheckers(piece, startRow, startCol, endRow, endCol) {
    if (Math.abs(endRow - startRow) === Math.abs(endCol - startCol)) {
        let pathClear = true;
        let middlePieceCaptured = false;
        const rowStep = endRow > startRow ? 1 : -1;
        const colStep = endCol > startCol ? 1 : -1;
        
        for (let i = 1; i < Math.abs(endRow - startRow); i++) {
            const intermediateCell = document.querySelector(
                `.cell[data-row="${startRow + i * rowStep}"][data-col="${startCol + i * colStep}"]`
            );
            const pieceOnPath = intermediateCell.querySelector(".checkers-piece");
            if (pieceOnPath) {
                if (pieceOnPath.dataset.color !== piece.dataset.color) {
                    if (middlePieceCaptured) {
                        pathClear = false;
                        break;
                    } else {
                        middlePieceCaptured = true;
                    }
                } else {
                    pathClear = false;
                    break;
                }
            }
        }
        return pathClear;
    }
    return false;
}

function moveCheckersPiece(piece, targetCell) {
    const startRow = parseInt(piece.parentElement.dataset.row);
    const startCol = parseInt(piece.parentElement.dataset.col);
    const endRow = parseInt(targetCell.dataset.row);
    const endCol = parseInt(targetCell.dataset.col);
    
    // Удаляем съеденную шашку
    if (Math.abs(endRow - startRow) === 2 && Math.abs(endCol - startCol) === 2) {
        const middleRow = (startRow + endRow) / 2;
        const middleCol = (startCol + endCol) / 2;
        const middleCell = document.querySelector(`.cell[data-row="${middleRow}"][data-col="${middleCol}"]`);
        const middlePiece = middleCell.querySelector(".checkers-piece");
        if (middlePiece) {
            middleCell.removeChild(middlePiece);
            updateScore(50); // +50 за захват
            showCheckersFeedback("🔥 Захват! +50 очков");
        }
    } else {
        updateScore(10); // +10 за обычный ход
    }
    
    targetCell.appendChild(piece);
    
    // Превращение в дамку
    if ((piece.dataset.color === "white" && endRow === 0) || (piece.dataset.color === "black" && endRow === 7)) {
        piece.dataset.king = "true";
        piece.classList.add("king");
        showCheckersFeedback("👑 Дамка! +25 очков");
        updateScore(25);
    }
    
    checkersTurn = checkersTurn === "white" ? "black" : "white";
    updateCheckersTurnDisplay();
    checkCheckersState();
}

function updateCheckersTurnDisplay() {
    const turnEl = document.getElementById("checkersTurn");
    if (turnEl) {
        turnEl.textContent = checkersTurn === "white" ? "⚪ Белые" : "⚫ Чёрные";
    }
}

function showCheckersFeedback(message) {
    const feedback = document.getElementById("checkersFeedback");
    if (feedback) {
        feedback.innerHTML = `<p class="success">${message}</p>`;
        setTimeout(() => feedback.innerHTML = "", 2000);
    }
}

function checkCheckersState() {
    let whiteCount = 0;
    let blackCount = 0;
    let whiteHasMoves = false;
    let blackHasMoves = false;
    
    for (let row = 0; row < checkersRows; row++) {
        for (let col = 0; col < checkersCols; col++) {
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            const piece = cell.querySelector(".checkers-piece");
            
            if (piece) {
                if (piece.dataset.color === "white") {
                    whiteCount++;
                    if (!whiteHasMoves && hasValidCheckersMoves(piece)) {
                        whiteHasMoves = true;
                    }
                } else if (piece.dataset.color === "black") {
                    blackCount++;
                    if (!blackHasMoves && hasValidCheckersMoves(piece)) {
                        blackHasMoves = true;
                    }
                }
            }
        }
    }
    
    const feedback = document.getElementById("checkersFeedback");
    
    if (whiteCount === 0 || !whiteHasMoves) {
        if (feedback) feedback.innerHTML = '<p class="success">🎉 Чёрные победили! +100 очков</p>';
        updateScore(100);
        setTimeout(() => autoNextLevel(3000), 2000);
    } else if (blackCount === 0 || !blackHasMoves) {
        if (feedback) feedback.innerHTML = '<p class="success">🎉 Белые победили! +100 очков</p>';
        updateScore(100);
        setTimeout(() => autoNextLevel(3000), 2000);
    }
}

function hasValidCheckersMoves(piece) {
    const startRow = parseInt(piece.parentElement.dataset.row);
    const startCol = parseInt(piece.parentElement.dataset.col);
    const directions = piece.dataset.king === "true"
        ? [[1, 1], [1, -1], [-1, 1], [-1, -1]]
        : piece.dataset.color === "white"
        ? [[-1, 1], [-1, -1]]
        : [[1, 1], [1, -1]];
    
    for (let [dr, dc] of directions) {
        const newRow = startRow + dr;
        const newCol = startCol + dc;
        
        if (isValidCheckersPosition(newRow, newCol)) {
            const targetCell = document.querySelector(`.cell[data-row="${newRow}"][data-col="${newCol}"]`);
            if (!targetCell.querySelector(".checkers-piece")) {
                return true;
            }
            const jumpRow = startRow + 2 * dr;
            const jumpCol = startCol + 2 * dc;
            if (isValidCheckersPosition(jumpRow, jumpCol)) {
                const middleCell = document.querySelector(`.cell[data-row="${newRow}"][data-col="${newCol}"]`);
                const jumpCell = document.querySelector(`.cell[data-row="${jumpRow}"][data-col="${jumpCol}"]`);
                const middlePiece = middleCell.querySelector(".checkers-piece");
                if (middlePiece && middlePiece.dataset.color !== piece.dataset.color && !jumpCell.querySelector(".checkers-piece")) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isValidCheckersPosition(row, col) {
    return row >= 0 && row < checkersRows && col >= 0 && col < checkersCols;
}




// Проверка авторизации
const currentUser = localStorage.getItem('brainik_current_user');
if (!currentUser) {
    window.location.href = 'Index.html';
}

// Фильтры
let currentFilter = 'all';
const filterBtns = document.querySelectorAll('.age-filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filterText = this.textContent.trim();
        if (filterText === 'Все') {
            currentFilter = 'all';
        } else if (filterText.includes('2-3')) {
            currentFilter = '2-3';
        } else if (filterText.includes('4-6')) {
            currentFilter = '4-6';
        } else if (filterText.includes('7-9')) {
            currentFilter = '7-9';
        } else if (filterText.includes('10+')) {
            currentFilter = '10+';
        }
        renderGames();
    });
});

// Render games based on filter
function renderGames() {
    const games = currentFilter === 'all' 
        ? GamesEngine.getAllGames() 
        : GamesEngine.getGamesByAge(currentFilter);
    
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = games.map(game => {
        const favorites = JSON.parse(localStorage.getItem(`brainik_stats_${JSON.parse(localStorage.getItem('brainik_current_user') || '{}').email}`) || '{}').favoriteGames || [];
        const isFavorite = favorites.includes(game.type || game.id);
        return `
        <div class="game-card" data-age="${game.age}">
            <div class="game-image">${game.icon}</div>
            <div class="game-content">
                <h3>${game.title}</h3>
                <p>${game.desc}</p>
                <div class="game-meta">
                    <span class="game-age">Возраст ${game.age}</span>
                    <span class="game-stars">⭐⭐⭐</span>
                </div>
                <div class="game-actions">
                    <button class="play-btn" onclick="GamesEngine.launchGame(${game.id})">ИГРАТЬ</button>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${game.type || game.id}', this)" title="${isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
            </div>
        </div>
    `}).join('');
}

// Initial render
renderGames();

// Мобильное меню
function toggleMenu() {
    alert('Меню открыто');
}

// Добавить/удалить из избранного
function toggleFavorite(gameId, btn) {
    if (window.gamification) {
        const isActive = btn.classList.contains('active');
        if (isActive) {
            window.gamification.removeFromFavorites(gameId);
            btn.classList.remove('active');
            btn.innerHTML = '☆';
            btn.title = 'Добавить в избранное';
        } else {
            window.gamification.addToFavorites(gameId);
            btn.classList.add('active');
            btn.innerHTML = '★';
            btn.title = 'Удалить из избранного';
            
            // Показать уведомление
            showNotification('⭐ Добавлено в избранное!');
        }
    }
}

// Показать уведомление
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

// Мобильное меню
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}
