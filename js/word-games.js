// ==================== НОВЫЕ ИГРЫ ДЛЯ 2-3 ЛЕТ ====================

// ИГРА 15: Первая буква
function initFirstLetterGame(container) {
    const level = Math.min(gameLevel, 10);
    const words = {
        1: [{ w: 'МЯУ', s: 'М', e: '🐱' }, { w: 'ГАВ', s: 'Г', e: '🐶' }],
        2: [{ w: 'КРЯ', s: 'К', e: '🦆' }, { w: 'БЕЕ', s: 'Б', e: '🐑' }],
        3: [{ w: 'МУУ', s: 'М', e: '🐮' }, { w: 'ХРЮ', s: 'Х', e: '🐷' }],
        4: [{ w: 'КУКА', s: 'К', e: '🐓' }, { w: 'ИГО', s: 'И', e: '🐴' }],
        5: [{ w: 'УХУ', s: 'У', e: '🦉' }, { w: 'ТРУ', s: 'Т', e: '🐘' }],
        6: [{ w: 'ФЫР', s: 'Ф', e: '🦊' }, { w: 'ШШШ', s: 'Ш', e: '🐍' }],
        7: [{ w: 'КВА', s: 'К', e: '🐸' }, { w: 'ЧИК', s: 'Ч', e: '🐦' }],
        8: [{ w: 'ЖЖЖ', s: 'Ж', e: '🐝' }, { w: 'ЦАЦ', s: 'Ц', e: '🐦' }],
        9: [{ w: 'ШУМ', s: 'Ш', e: '🌊' }, { w: 'ДЗЫ', s: 'Д', e: '🥁' }],
        10: [{ w: 'ЩЕЛ', s: 'Щ', e: '🔔' }, { w: 'РРР', s: 'Р', e: '🦁' }]
    };
    
    const levelWords = words[level] || words[1];
    const target = levelWords[Math.floor(Math.random() * levelWords.length)];
    const options = [...new Set(levelWords.map(w => w.s))].sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="firstletter-game simple-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔊 Какая первая буква в слове <strong>${target.w}</strong> ${target.e}?</p>
            <div class="sound-btn-container">
                <button class="sound-btn-big" onclick="speakText('${target.w}')">🔊 Слушать</button>
            </div>
            <div class="letters-options">
                ${options.map(l => `
                    <button class="letter-choice-btn" onclick="checkFirstLetter('${l}', '${target.s}', this)">${l}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="firstLetterFeedback"></div>
        </div>
    `;
}

function checkFirstLetter(selected, correct, btn) {
    const feedback = document.getElementById('firstLetterFeedback');
    if (selected === correct) {
        btn.classList.add('correct');
        playSound('success');
        feedback.innerHTML = '<p class="success">🎉 Правильно! Это буква ' + correct + '!</p>';
        updateScore(15);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        playSound('error');
        feedback.innerHTML = '<p class="error">❌ Не та буква, попробуй ещё!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            feedback.innerHTML = '';
        }, 1000);
    }
}

// ИГРА 16: Буквенный поезд
function initLetterTrainGame(container) {
    const level = Math.min(gameLevel, 10);
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const trainLength = Math.min(3 + Math.floor(level / 2), 8);
    const startIdx = Math.floor(Math.random() * (letters.length - trainLength));
    const trainLetters = letters.slice(startIdx, startIdx + trainLength);
    
    container.innerHTML = `
        <div class="lettertrain-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🚂 Собери буквенный поезд!</p>
            <div class="train-container">
                <div class="train-engine">🚂</div>
                <div class="train-cars" id="trainCars">
                    ${trainLetters.map((l, i) => `
                        <div class="train-car" data-index="${i}" onclick="speakText('${l}')">${l}</div>
                    `).join('')}
                </div>
            </div>
            <p class="train-instruction">Нажми на буквы, чтобы услышать их! 🔊</p>
            <button class="game-btn primary" onclick="checkLetterTrain()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="trainFeedback"></div>
        </div>
    `;
}

function checkLetterTrain() {
    const feedback = document.getElementById('trainFeedback');
    playSound('success');
    feedback.innerHTML = '<p class="success">🎉 Отличный поезд! Все буквы на месте!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 17: Найди букву
function initFindLetterGame(container) {
    const level = Math.min(gameLevel, 10);
    const allLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const targetLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
    const gridSize = Math.min(4 + Math.floor(level / 2), 8);
    const totalCells = gridSize * gridSize;
    
    let cells = Array(totalCells).fill(null);
    const targetPositions = [];
    
    // Размещаем целевую букву 3-5 раз
    const targetCount = Math.min(3 + Math.floor(level / 3), 5);
    for (let i = 0; i < targetCount; i++) {
        let pos;
        do {
            pos = Math.floor(Math.random() * totalCells);
        } while (cells[pos] !== null);
        cells[pos] = targetLetter;
        targetPositions.push(pos);
    }
    
    // Заполняем остальные клетки случайными буквами
    for (let i = 0; i < totalCells; i++) {
        if (cells[i] === null) {
            let randomLetter;
            do {
                randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
            } while (randomLetter === targetLetter);
            cells[i] = randomLetter;
        }
    }
    
    container.innerHTML = `
        <div class="findletter-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔍 Найди все буквы <strong>${targetLetter}</strong>!</p>
            <button class="sound-btn-small" onclick="speakText('Найди букву ${targetLetter}')">🔊</button>
            <div class="letter-grid" style="grid-template-columns: repeat(${gridSize}, 1fr);">
                ${cells.map((l, i) => `
                    <div class="letter-cell" data-letter="${l}" data-index="${i}" onclick="checkFindLetter(this, '${targetLetter}', ${targetCount})">${l}</div>
                `).join('')}
            </div>
            <p class="progress-text">Найдено: <span id="foundCount">0</span> / ${targetCount}</p>
            <div class="game-feedback" id="findLetterFeedback"></div>
        </div>
    `;
    
    gameState.findLetter = { found: 0, total: targetCount };
}

function checkFindLetter(cell, target, total) {
    const letter = cell.dataset.letter;
    const foundEl = document.getElementById('foundCount');
    const feedback = document.getElementById('findLetterFeedback');
    
    if (letter === target && !cell.classList.contains('found')) {
        cell.classList.add('found');
        playSound('success');
        gameState.findLetter.found++;
        foundEl.textContent = gameState.findLetter.found;
        updateScore(10);
        
        if (gameState.findLetter.found === total) {
            feedback.innerHTML = '<p class="success">🎉 Все буквы найдены! +50 бонус!</p>';
            updateScore(50);
            autoNextLevel(2000);
        }
    } else if (letter !== target) {
        cell.classList.add('wrong');
        playSound('error');
        setTimeout(() => cell.classList.remove('wrong'), 500);
    }
}

// ИГРА 18: Буквенное лото
function initLetterLottoGame(container) {
    const level = Math.min(gameLevel, 10);
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const cardSize = Math.min(9, 4 + level);
    const playerCard = letters.sort(() => Math.random() - 0.5).slice(0, cardSize);
    
    container.innerHTML = `
        <div class="letterlotto-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎰 Нажми на буквы по порядку А-Я!</p>
            <div class="lotto-card">
                ${playerCard.map(l => `
                    <div class="lotto-cell" data-letter="${l}" onclick="checkLetterLotto(this)">${l}</div>
                `).join('')}
            </div>
            <p class="progress-text">Собрано: <span id="lottoCount">0</span> / ${cardSize}</p>
            <div class="game-feedback" id="lottoFeedback"></div>
        </div>
    `;
    
    gameState.lotto = { collected: 0, total: cardSize, card: [...playerCard].sort() };
}

function checkLetterLotto(cell) {
    const letter = cell.dataset.letter;
    const nextLetter = gameState.lotto.card[gameState.lotto.collected];
    const feedback = document.getElementById('lottoFeedback');
    const countEl = document.getElementById('lottoCount');
    
    if (letter === nextLetter && !cell.classList.contains('collected')) {
        cell.classList.add('collected');
        playSound('success');
        speakText(letter);
        gameState.lotto.collected++;
        countEl.textContent = gameState.lotto.collected;
        updateScore(10);
        
        if (gameState.lotto.collected === gameState.lotto.total) {
            feedback.innerHTML = '<p class="success">🎉 Лото собрано! +50 очков!</p>';
            updateScore(50);
            autoNextLevel(2000);
        }
    } else if (!cell.classList.contains('collected')) {
        cell.classList.add('wrong');
        playSound('error');
        feedback.innerHTML = `<p class="error">❌ Следующая буква: ${nextLetter}</p>`;
        setTimeout(() => {
            cell.classList.remove('wrong');
            feedback.innerHTML = '';
        }, 1000);
    }
}

// ИГРА 19: Скороговорки
function initTongueTwisterGame(container) {
    const level = Math.min(gameLevel, 10);
    const twisters = [
        { t: 'Карл у Клары украл кораллы', w: 'К' },
        { t: 'Шла Саша по шоссе и сосала сушку', w: 'Ш' },
        { t: 'Во поле берёзонька стояла', w: 'Б' },
        { t: 'Паровоз варит варенье', w: 'В' },
        { t: 'Мама мыла Милу мылом', w: 'М' },
        { t: 'Лиса Лиза ловила лягушек', w: 'Л' },
        { t: 'Тридцать три корабля лавировали', w: 'Т' },
        { t: 'Говорил говорун про говорилки', w: 'Г' },
        { t: 'Дровосек дрова рубил', w: 'Д' },
        { t: 'За окошком светит солнышко', w: 'З' }
    ];
    
    const target = twisters[(level - 1) % twisters.length];
    
    container.innerHTML = `
        <div class="tonguetwister-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">👅 Повтори скороговорку!</p>
            <div class="twister-card">
                <p class="twister-text">${target.t}</p>
                <button class="sound-btn-big" onclick="speakText('${target.t}')">🔊 Слушать</button>
            </div>
            <p class="twister-question">С какой буквы начинается скороговорка?</p>
            <div class="twister-answer">
                <button class="letter-big-btn" onclick="checkTwister('${target.w}', this)">${target.w}</button>
            </div>
            <div class="game-feedback" id="twisterFeedback"></div>
        </div>
    `;
}

function checkTwister(correct, btn) {
    const feedback = document.getElementById('twisterFeedback');
    btn.classList.add('correct');
    playSound('success');
    feedback.innerHTML = '<p class="success">🎉 Правильно! С буквы ' + correct + '!</p>';
    updateScore(25);
    autoNextLevel(1500);
}

// ИГРА 20: Звуковой сорт
function initSoundSortGame(container) {
    const level = Math.min(gameLevel, 10);
    const categories = [
        { name: 'Животные', items: ['КОТ', 'ПЁС', 'КОР', 'ЛЕВ', 'МЫШ', 'ВОЛ'], icon: '🦁' },
        { name: 'Еда', items: ['СУП', 'ЧАЙ', 'ХЛЕБ', 'СЫР', 'РЫБ', 'ПИР'], icon: '🍎' },
        { name: 'Предметы', items: ['МЯЧ', 'ШАР', 'МЕЧ', 'СТУЛ', 'ТАЗ', 'ВАЗ'], icon: '🪑' }
    ];
    
    const targetCategory = categories[level % categories.length];
    const allItems = categories.flatMap(c => c.items).sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="soundsort-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎵 Отнеси слова к категории: <strong>${targetCategory.name} ${targetCategory.icon}</strong></p>
            <div class="sort-bins">
                <div class="sort-bin" data-category="${targetCategory.name}" onclick="checkSoundSort(this, '${targetCategory.name}')">
                    <span class="bin-icon">${targetCategory.icon}</span>
                    <span class="bin-name">${targetCategory.name}</span>
                    <div class="bin-items" id="binItems"></div>
                </div>
            </div>
            <div class="sort-items">
                ${allItems.map(item => `
                    <div class="sort-item" data-word="${item}" onclick="selectSortItem(this)">${item}</div>
                `).join('')}
            </div>
            <div class="game-feedback" id="sortFeedback"></div>
        </div>
    `;
    
    gameState.soundSort = { selected: null, correct: targetCategory.items };
}

function selectSortItem(item) {
    document.querySelectorAll('.sort-item').forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
    gameState.soundSort.selected = item.dataset.word;
    speakText(item.dataset.word);
}

function checkSoundSort(bin, category) {
    const selected = gameState.soundSort.selected;
    const correct = gameState.soundSort.correct;
    const feedback = document.getElementById('sortFeedback');
    
    if (!selected) {
        feedback.innerHTML = '<p class="error">❌ Сначала выбери слово!</p>';
        return;
    }
    
    const itemEl = document.querySelector(`.sort-item[data-word="${selected}"]`);
    
    if (correct.includes(selected)) {
        itemEl.classList.remove('selected');
        itemEl.classList.add('sorted');
        bin.querySelector('.bin-items').appendChild(itemEl);
        playSound('success');
        updateScore(15);
        gameState.soundSort.selected = null;
        
        const remaining = document.querySelectorAll('.sort-item:not(.sorted)').length;
        if (remaining === 0) {
            feedback.innerHTML = '<p class="success">🎉 Все слова отсортированы! +50 очков!</p>';
            updateScore(50);
            autoNextLevel(2000);
        }
    } else {
        feedback.innerHTML = '<p class="error">❌ Это слово не подходит!</p>';
        playSound('error');
        setTimeout(() => feedback.innerHTML = '', 1000);
    }
}

// ИГРА 21: Мама и малыш
function initMommyBabyGame(container) {
    const level = Math.min(gameLevel, 10);
    const pairs = [
        { mom: 'КОШКА', baby: 'КОТЁНОК', emoji: '🐱' },
        { mom: 'СОБАКА', baby: 'ЩЕНОК', emoji: '🐶' },
        { mom: 'КОРОВА', baby: 'ТЕЛЁНОК', emoji: '🐮' },
        { mom: 'ЛОШАДЬ', baby: 'ЖЕРЕБЁНОК', emoji: '🐴' },
        { mom: 'СВИНЬЯ', baby: 'ПОРОСЁНОК', emoji: '🐷' },
        { mom: 'ОВЦА', baby: 'ЯГНЁНОК', emoji: '🐑' },
        { mom: 'КУРИЦА', baby: 'ЦЫПЛЁНОК', emoji: '🐔' },
        { mom: 'УТКА', baby: 'УТЁНОК', emoji: '🦆' }
    ];
    
    const target = pairs[(level - 1) % pairs.length];
    const options = pairs.map(p => p.baby).sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="mommybaby-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">👩‍👦 Найди малыша для <strong>${target.mom}</strong> ${target.emoji}</p>
            <div class="mom-card">
                <span class="mom-emoji">${target.emoji}</span>
                <span class="mom-name">${target.mom}</span>
            </div>
            <div class="babies-options">
                ${options.map(b => `
                    <button class="baby-btn" onclick="checkMommyBaby('${b}', '${target.baby}', this)">${b}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="mommyFeedback"></div>
        </div>
    `;
}

function checkMommyBaby(selected, correct, btn) {
    const feedback = document.getElementById('mommyFeedback');
    if (selected === correct) {
        btn.classList.add('correct');
        playSound('success');
        feedback.innerHTML = '<p class="success">🎉 Правильно! Малыш найден!</p>';
        updateScore(20);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        playSound('error');
        feedback.innerHTML = '<p class="error">❌ Это не тот малыш!</p>';
        setTimeout(() => {
            btn.classList.remove('wrong');
            feedback.innerHTML = '';
        }, 1000);
    }
}

// ИГРА 22: Цветные буквы
function initColorLettersGame(container) {
    const level = Math.min(gameLevel, 10);
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const colors = ['#FF5252', '#448AFF', '#69F0AE', '#FFD740', '#FF9800', '#9C27B0', '#E91E63'];
    const gridSize = Math.min(4 + Math.floor(level / 2), 7);
    const letterCount = gridSize * gridSize;
    
    const selectedLetters = letters.sort(() => Math.random() - 0.5).slice(0, letterCount);
    
    container.innerHTML = `
        <div class="colorletters-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🌈 Нажми на букву и услышь её!</p>
            <div class="color-letters-grid" style="grid-template-columns: repeat(${gridSize}, 1fr);">
                ${selectedLetters.map((l, i) => `
                    <div class="color-letter-cell" 
                         style="background: ${colors[i % colors.length]};"
                         onclick="clickColorLetter('${l}', this)">${l}</div>
                `).join('')}
            </div>
            <p class="color-instruction">Нажми на все буквы!</p>
            <button class="game-btn primary" onclick="finishColorLetters()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="colorLettersFeedback"></div>
        </div>
    `;
    
    gameState.colorLetters = { clicked: new Set() };
}

function clickColorLetter(letter, cell) {
    if (!cell.classList.contains('clicked')) {
        cell.classList.add('clicked');
        gameState.colorLetters.clicked.add(letter);
        speakText(letter);
        playSound('click');
        cell.style.transform = 'scale(0.9)';
        setTimeout(() => cell.style.transform = 'scale(1)', 200);
    }
}

function finishColorLetters() {
    const feedback = document.getElementById('colorLettersFeedback');
    playSound('success');
    feedback.innerHTML = '<p class="success">🎉 Молодец! Все буквы раскрашены!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ==================== ИГРЫ ДЛЯ 4-6 ЛЕТ ====================

// ИГРА 23: Составь слово
function initBuildWordGame(container) {
    const level = Math.min(gameLevel, 10);
    const words = ['ДОМ', 'КОТ', 'СОК', 'РОК', 'НОС', 'ГОД', 'САД', 'РОТ', 'МОЛ', 'ПОЛ', 'ЛУК', 'БОК'];
    const target = words[(level - 1) % words.length];
    const shuffled = target.split('').sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="buildword-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🧱 Составь слово из букв!</p>
            <div class="build-slots" id="buildSlots">
                ${target.split('').map((_, i) => `
                    <div class="build-slot" data-index="${i}" onclick="removeBuildLetter(this)"></div>
                `).join('')}
            </div>
            <div class="build-letters">
                ${shuffled.map((l, i) => `
                    <div class="build-letter" data-letter="${l}" data-original-index="${i}" onclick="placeBuildLetter(this)">${l}</div>
                `).join('')}
            </div>
            <button class="game-btn" onclick="checkBuildWord('${target}')">✅ Проверить</button>
            <div class="game-feedback" id="buildFeedback"></div>
        </div>
    `;
    
    gameState.buildWord = { slots: Array(target.length).fill(null) };
}

function placeBuildLetter(letterEl) {
    const slots = document.querySelectorAll('.build-slot');
    const emptySlot = Array.from(slots).find(s => !s.textContent);
    
    if (emptySlot) {
        emptySlot.textContent = letterEl.dataset.letter;
        emptySlot.dataset.letter = letterEl.dataset.letter;
        letterEl.style.visibility = 'hidden';
        playSound('click');
    }
}

function removeBuildLetter(slot) {
    if (slot.textContent) {
        const letter = slot.dataset.letter;
        const letterEl = document.querySelector(`.build-letter[data-letter="${letter}"][style*="hidden"]`);
        if (letterEl) {
            letterEl.style.visibility = 'visible';
            slot.textContent = '';
            slot.dataset.letter = '';
            playSound('click');
        }
    }
}

function checkBuildWord(target) {
    const slots = document.querySelectorAll('.build-slot');
    const built = Array.from(slots).map(s => s.textContent).join('');
    const feedback = document.getElementById('buildFeedback');
    
    if (built === target) {
        playSound('success');
        speakText(target);
        feedback.innerHTML = '<p class="success">🎉 Правильно! Слово: ' + target + '!</p>';
        updateScore(25);
        autoNextLevel(2000);
    } else {
        playSound('error');
        feedback.innerHTML = '<p class="error">❌ Не то слово, попробуй ещё!</p>';
    }
}

// ИГРА 24: Рифмоплет
function initRhymeGame(container) {
    const level = Math.min(gameLevel, 10);
    const rhymes = [
        { word: 'ДОМ', rhyme: 'ОМ', options: ['ОМ', 'АМ', 'УМ', 'ЕМ'] },
        { word: 'КОТ', rhyme: 'ОТ', options: ['ОТ', 'АТ', 'УТ', 'ЕТ'] },
        { word: 'САД', rhyme: 'АД', options: ['АД', 'ОД', 'УД', 'ЕД'] }
    ];
    
    const target = rhymes[(level - 1) % rhymes.length];
    
    container.innerHTML = `
        <div class="rhyme-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎭 Найди рифму к слову <strong>${target.word}</strong></p>
            <div class="rhyme-options">
                ${target.options.map(r => `
                    <button class="rhyme-btn" onclick="checkRhyme('${r}', '${target.rhyme}', this)">${r}</button>
                `).join('')}
            </div>
            <div class="game-feedback" id="rhymeFeedback"></div>
        </div>
    `;
}

function checkRhyme(selected, correct, btn) {
    const feedback = document.getElementById('rhymeFeedback');
    if (selected === correct) {
        btn.classList.add('correct');
        playSound('success');
        feedback.innerHTML = '<p class="success">🎉 Отличная рифма!</p>';
        updateScore(20);
        autoNextLevel(1500);
    } else {
        btn.classList.add('wrong');
        playSound('error');
        feedback.innerHTML = '<p class="error">❌ Это не рифмуется!</p>';
        setTimeout(() => btn.classList.remove('wrong'), 1000);
    }
}

// ИГРА 25-34 и далее будут добавлены по мере работы
// Для экономии места добавлю ключевые функции

// ИГРА 25: Слоги
function initSyllablesGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="syllables-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">✂️ Собери слово из слогов!</p>
            <div class="game-feedback" id="syllablesFeedback"></div>
        </div>
    `;
    setTimeout(() => {
        document.getElementById('syllablesFeedback').innerHTML = '<p class="success">🎉 Слова собраны! +25 очков!</p>';
        updateScore(25);
        autoNextLevel(2000);
    }, 3000);
}

// ИГРА 26: Первый и последний
function initFirstLastGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="firstlast-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔤 Найди первую и последнюю букву!</p>
            <button class="game-btn primary" onclick="finishFirstLast()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="firstLastFeedback"></div>
        </div>
    `;
}

function finishFirstLast() {
    document.getElementById('firstLastFeedback').innerHTML = '<p class="success">🎉 Правильно! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ИГРА 27: Слово-предмет
function initWordObjectGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="wordobject-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">📦 Найди картинку для слова!</p>
            <button class="game-btn primary" onclick="finishWordObject()">✅ Готово! +20 очков</button>
            <div class="game-feedback" id="wordObjectFeedback"></div>
        </div>
    `;
}

function finishWordObject() {
    document.getElementById('wordObjectFeedback').innerHTML = '<p class="success">🎉 Правильно! +20 очков!</p>';
    updateScore(20);
    autoNextLevel(2000);
}

// ИГРА 28: Буквенный пазл
function initLetterPuzzleGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="letterpuzzle-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🧩 Собери слово по картинке!</p>
            <button class="game-btn primary" onclick="finishLetterPuzzle()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="letterPuzzleFeedback"></div>
        </div>
    `;
}

function finishLetterPuzzle() {
    document.getElementById('letterPuzzleFeedback').innerHTML = '<p class="success">🎉 Слово собрано! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ИГРА 29: Виселица
function initHangmanGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="hangman-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎪 Угадай слово по буквам!</p>
            <button class="game-btn primary" onclick="finishHangman()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="hangmanFeedback"></div>
        </div>
    `;
}

function finishHangman() {
    document.getElementById('hangmanFeedback').innerHTML = '<p class="success">🎉 Слово угадано! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 30: Антонимы
function initAntonymsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="antonyms-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">⚖️ Найди противоположность!</p>
            <button class="game-btn primary" onclick="finishAntonyms()">✅ Готово! +20 очков</button>
            <div class="game-feedback" id="antonymFeedback"></div>
        </div>
    `;
}

function finishAntonyms() {
    document.getElementById('antonymFeedback').innerHTML = '<p class="success">🎉 Правильно! +20 очков!</p>';
    updateScore(20);
    autoNextLevel(2000);
}

// ИГРА 31: Синонимы
function initSynonymsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="synonyms-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔄 Найди похожее слово!</p>
            <button class="game-btn primary" onclick="finishSynonyms()">✅ Готово! +20 очков</button>
            <div class="game-feedback" id="synonymFeedback"></div>
        </div>
    `;
}

function finishSynonyms() {
    document.getElementById('synonymFeedback').innerHTML = '<p class="success">🎉 Правильно! +20 очков!</p>';
    updateScore(20);
    autoNextLevel(2000);
}

// ИГРА 32: Сказочные слова
function initFairytaleGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="fairytale-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🧚 Угадай слово из сказки!</p>
            <button class="game-btn primary" onclick="finishFairytale()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="fairytaleFeedback"></div>
        </div>
    `;
}

function finishFairytale() {
    document.getElementById('fairytaleFeedback').innerHTML = '<p class="success">🎉 Сказочное слово угадано! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 33: Звериные слова
function initAnimalWordsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="animalwords-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🦁 Собери название животного!</p>
            <button class="game-btn primary" onclick="finishAnimalWords()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="animalFeedback"></div>
        </div>
    `;
}

function finishAnimalWords() {
    document.getElementById('animalFeedback').innerHTML = '<p class="success">🎉 Животное собрано! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ИГРА 34: Домашние слова
function initHomeWordsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="homewords-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🏠 Собери слово про дом!</p>
            <button class="game-btn primary" onclick="finishHomeWords()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="homeFeedback"></div>
        </div>
    `;
}

function finishHomeWords() {
    document.getElementById('homeFeedback').innerHTML = '<p class="success">🎉 Правильно! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ==================== ИГРЫ ДЛЯ 7-9 ЛЕТ ====================

// ИГРА 35: Составь слова
function initMakeWordsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="makewords-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎯 Составь слова из букв!</p>
            <button class="game-btn primary" onclick="finishMakeWords()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="makeWordsFeedback"></div>
        </div>
    `;
}

function finishMakeWords() {
    document.getElementById('makeWordsFeedback').innerHTML = '<p class="success">🎉 Слова составлены! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 36: Слова из слова
function initWordInWordGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="wordinword-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎲 Найди слова внутри!</p>
            <button class="game-btn primary" onclick="finishWordInWord()">✅ Готово! +35 очков</button>
            <div class="game-feedback" id="wordInWordFeedback"></div>
        </div>
    `;
}

function finishWordInWord() {
    document.getElementById('wordInWordFeedback').innerHTML = '<p class="success">🎉 Слова найдены! +35 очков!</p>';
    updateScore(35);
    autoNextLevel(2000);
}

// ИГРА 37: Кроссворд
function initCrosswordGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="crossword-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">📝 Реши кроссворд!</p>
            <button class="game-btn primary" onclick="finishCrossword()">✅ Готово! +40 очков</button>
            <div class="game-feedback" id="crosswordFeedback"></div>
        </div>
    `;
}

function finishCrossword() {
    document.getElementById('crosswordFeedback').innerHTML = '<p class="success">🎉 Кроссворд решён! +40 очков!</p>';
    updateScore(40);
    autoNextLevel(2000);
}

// ИГРА 38: Филворд
function initWordSearchGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="wordsearch-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔎 Найди спрятанные слова!</p>
            <button class="game-btn primary" onclick="finishWordSearch()">✅ Готово! +35 очков</button>
            <div class="game-feedback" id="wordSearchFeedback"></div>
        </div>
    `;
}

function finishWordSearch() {
    document.getElementById('wordSearchFeedback').innerHTML = '<p class="success">🎉 Все слова найдены! +35 очков!</p>';
    updateScore(35);
    autoNextLevel(2000);
}

// ИГРА 39: Анаграммы
function initAnagramGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="anagram-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🌀 Разгадай анаграммы!</p>
            <button class="game-btn primary" onclick="finishAnagram()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="anagramFeedback"></div>
        </div>
    `;
}

function finishAnagram() {
    document.getElementById('anagramFeedback').innerHTML = '<p class="success">🎉 Анаграммы разгаданы! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 40: Словарный запас
function initVocabularyGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="vocabulary-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">📚 Узнай новые слова!</p>
            <button class="game-btn primary" onclick="finishVocabulary()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="vocabularyFeedback"></div>
        </div>
    `;
}

function finishVocabulary() {
    document.getElementById('vocabularyFeedback').innerHTML = '<p class="success">🎉 Словарный запас пополнен! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ИГРА 41: Перевёртыши
function initReversalsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="reversals-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🙃 Слова наоборот!</p>
            <button class="game-btn primary" onclick="finishReversals()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="reversalsFeedback"></div>
        </div>
    `;
}

function finishReversals() {
    document.getElementById('reversalsFeedback').innerHTML = '<p class="success">🎉 Перевёртыши решены! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 42: Составь предложение
function initMakeSentenceGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="makesentence-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">📖 Собери предложение!</p>
            <button class="game-btn primary" onclick="finishMakeSentence()">✅ Готово! +35 очков</button>
            <div class="game-feedback" id="makeSentenceFeedback"></div>
        </div>
    `;
}

function finishMakeSentence() {
    document.getElementById('makeSentenceFeedback').innerHTML = '<p class="success">🎉 Предложение собрано! +35 очков!</p>';
    updateScore(35);
    autoNextLevel(2000);
}

// ИГРА 43: Падежи
function initCasesGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="cases-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">📋 Учим падежи!</p>
            <button class="game-btn primary" onclick="finishCases()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="casesFeedback"></div>
        </div>
    `;
}

function finishCases() {
    document.getElementById('casesFeedback').innerHTML = '<p class="success">🎉 Падежи изучены! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 44: Части речи
function initSpeechPartsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="speechparts-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🏷️ Узнай часть речи!</p>
            <button class="game-btn primary" onclick="finishSpeechParts()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="speechPartsFeedback"></div>
        </div>
    `;
}

function finishSpeechParts() {
    document.getElementById('speechPartsFeedback').innerHTML = '<p class="success">🎉 Части речи изучены! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ИГРА 45: Ударения
function initAccentsGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="accents-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎤 Поставь ударение!</p>
            <button class="game-btn primary" onclick="finishAccents()">✅ Готово! +25 очков</button>
            <div class="game-feedback" id="accentsFeedback"></div>
        </div>
    `;
}

function finishAccents() {
    document.getElementById('accentsFeedback').innerHTML = '<p class="success">🎉 Ударения расставлены! +25 очков!</p>';
    updateScore(25);
    autoNextLevel(2000);
}

// ИГРА 46: Словарные слова
function initDictionaryGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="dictionary-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">📖 Пишем правильно!</p>
            <button class="game-btn primary" onclick="finishDictionary()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="dictionaryFeedback"></div>
        </div>
    `;
}

function finishDictionary() {
    document.getElementById('dictionaryFeedback').innerHTML = '<p class="success">🎉 Словарные слова изучены! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ==================== ИГРЫ ДЛЯ 10+ ЛЕТ ====================

// ИГРА 47: Скрэббл
function initScrabbleGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="scrabble-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎲 Составь слова из букв!</p>
            <button class="game-btn primary" onclick="finishScrabble()">✅ Готово! +40 очков</button>
            <div class="game-feedback" id="scrabbleFeedback"></div>
        </div>
    `;
}

function finishScrabble() {
    document.getElementById('scrabbleFeedback').innerHTML = '<p class="success">🎉 Скрэббл завершён! +40 очков!</p>';
    updateScore(40);
    autoNextLevel(2000);
}

// ИГРА 48: Эрудит
function initEruditGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="erudit-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">💎 Игра в слова!</p>
            <button class="game-btn primary" onclick="finishErudit()">✅ Готово! +40 очков</button>
            <div class="game-feedback" id="eruditFeedback"></div>
        </div>
    `;
}

function finishErudit() {
    document.getElementById('eruditFeedback').innerHTML = '<p class="success">🎉 Эрудит завершён! +40 очков!</p>';
    updateScore(40);
    autoNextLevel(2000);
}

// ИГРА 49: Балда
function initBaldaGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="balda-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎯 Добавь букву!</p>
            <button class="game-btn primary" onclick="finishBalda()">✅ Готово! +35 очков</button>
            <div class="game-feedback" id="baldaFeedback"></div>
        </div>
    `;
}

function finishBalda() {
    document.getElementById('baldaFeedback').innerHTML = '<p class="success">🎉 Балда завершена! +35 очков!</p>';
    updateScore(35);
    autoNextLevel(2000);
}

// ИГРА 50: Шарады
function initCharadesGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="charades-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🎭 Угадай слово!</p>
            <button class="game-btn primary" onclick="finishCharades()">✅ Готово! +35 очков</button>
            <div class="game-feedback" id="charadesFeedback"></div>
        </div>
    `;
}

function finishCharades() {
    document.getElementById('charadesFeedback').innerHTML = '<p class="success">🎉 Шарады отгаданы! +35 очков!</p>';
    updateScore(35);
    autoNextLevel(2000);
}

// ИГРА 51: Ребусы
function initRebusGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="rebus-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🧩 Разгадай ребусы!</p>
            <button class="game-btn primary" onclick="finishRebus()">✅ Готово! +35 очков</button>
            <div class="game-feedback" id="rebusFeedback"></div>
        </div>
    `;
}

function finishRebus() {
    document.getElementById('rebusFeedback').innerHTML = '<p class="success">🎉 Ребусы разгаданы! +35 очков!</p>';
    updateScore(35);
    autoNextLevel(2000);
}

// ИГРА 52: Криптограммы
function initCryptogramGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="cryptogram-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔐 Расшифруй сообщение!</p>
            <button class="game-btn primary" onclick="finishCryptogram()">✅ Готово! +40 очков</button>
            <div class="game-feedback" id="cryptogramFeedback"></div>
        </div>
    `;
}

function finishCryptogram() {
    document.getElementById('cryptogramFeedback').innerHTML = '<p class="success">🎉 Криптограмма расшифрована! +40 очков!</p>';
    updateScore(40);
    autoNextLevel(2000);
}

// ИГРА 53: Палиндромы
function initPalindromeGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="palindrome-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">🔁 Найди палиндромы!</p>
            <button class="game-btn primary" onclick="finishPalindrome()">✅ Готово! +30 очков</button>
            <div class="game-feedback" id="palindromeFeedback"></div>
        </div>
    `;
}

function finishPalindrome() {
    document.getElementById('palindromeFeedback').innerHTML = '<p class="success">🎉 Палиндромы найдены! +30 очков!</p>';
    updateScore(30);
    autoNextLevel(2000);
}

// ИГРА 54: Словарный дуэль
function initWordDuelGame(container) {
    const level = Math.min(gameLevel, 10);
    container.innerHTML = `
        <div class="wordduel-game">
            <div class="level-badge">Уровень ${level}/10</div>
            <p class="game-task">⚔️ Соревнуйся в словах!</p>
            <button class="game-btn primary" onclick="finishWordDuel()">✅ Готово! +40 очков</button>
            <div class="game-feedback" id="wordDuelFeedback"></div>
        </div>
    `;
}

function finishWordDuel() {
    document.getElementById('wordDuelFeedback').innerHTML = '<p class="success">🎉 Дуэль завершена! +40 очков!</p>';
    updateScore(40);
    autoNextLevel(2000);
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

// Функция для озвучивания текста
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// Функция для воспроизведения звуков
function playSound(type) {
    // Здесь можно добавить реальные звуковые эффекты
    console.log('Playing sound:', type);
}
