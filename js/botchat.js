 // Инициализация Tailwind
function initTailwind() {
    // Уже загружен через CDN
}

let chat = null
let typingTimeout = null
let isBotChatInitialized = false
let botMenuPanel = null
let botMenuButton = null

function getEl(id) {
    return document.getElementById(id)
}

function closeBotMenu() {
    if (botMenuPanel) botMenuPanel.classList.add('hidden')
}

function toggleBotMenu() {
    if (!botMenuPanel) return
    botMenuPanel.classList.toggle('hidden')
}

function ensureInputBarClasses() {
    const modal = getEl('botChatModal')
    if (!modal) return

    const messageInput = modal.querySelector('#message-input')
    if (!messageInput) return

    const inputBar = messageInput.closest('div')
    if (inputBar && inputBar.classList) {
        inputBar.classList.add('botchat-inputbar')
    }

    const attachBtn = modal.querySelector('button[onclick="triggerFileInput()"]')
    if (attachBtn && attachBtn.classList) {
        attachBtn.classList.add('botchat-attach-btn')
    }

    const sendBtn = modal.querySelector('button[onclick="sendTextMessage()"]')
    if (sendBtn && sendBtn.classList) {
        sendBtn.classList.add('botchat-send-btn')
    }
}

function ensureMobileHeaderControls() {
    const modal = getEl('botChatModal')
    if (!modal) return

    const header = modal.querySelector('header')
    if (!header) return

    const controls = header.querySelector('div.flex.items-center.gap-3')
    if (!controls) return

    if (!controls.classList.contains('botchat-desktop-controls')) {
        controls.classList.add('botchat-desktop-controls')
    }

    if (header.querySelector('.botchat-mobile-controls')) {
        return
    }

    const mobileControls = document.createElement('div')
    mobileControls.className = 'botchat-mobile-controls'

    const menuBtn = document.createElement('button')
    menuBtn.type = 'button'
    menuBtn.className = 'botchat-menu-btn'
    menuBtn.setAttribute('aria-label', 'Меню')
    menuBtn.textContent = '⋯'

    const closeBtn = header.querySelector('#botChatClose')
    const closeClone = closeBtn ? closeBtn.cloneNode(true) : null
    if (closeClone) {
        closeClone.removeAttribute('id')
        closeClone.classList.add('botchat-close-btn')
        closeClone.addEventListener('click', closeBotChat)
    }

    if (closeBtn) {
        closeBtn.classList.add('botchat-close-btn')
    }

    const panel = document.createElement('div')
    panel.className = 'botchat-menu-panel hidden'
    panel.innerHTML = `
        <button type="button" class="botchat-menu-item" data-action="clear">
            <span style="font-size:18px;">🗑️</span>
            <span>Очистить чат</span>
        </button>
        <div class="botchat-menu-meta">v1.0 • Анимированный</div>
    `

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        toggleBotMenu()
    })

    panel.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action="clear"]')
        if (btn) {
            clearChat()
            closeBotMenu()
        }
    })

    mobileControls.appendChild(menuBtn)
    if (closeClone) mobileControls.appendChild(closeClone)
    mobileControls.appendChild(panel)

    header.appendChild(mobileControls)

    botMenuPanel = panel
    botMenuButton = menuBtn
}

function openBotChat() {
    const modal = getEl('botChatModal')
    if (!modal) return

    if (!isBotChatInitialized) {
        initBotChat()
    }

    modal.classList.remove('hidden')
    document.body.style.overflow = 'hidden'

    const input = getEl('message-input')
    if (input) {
        setTimeout(() => input.focus(), 50)
    }
}

function closeBotChat() {
    const modal = getEl('botChatModal')
    if (!modal) return
    modal.classList.add('hidden')
    document.body.style.overflow = ''
    closeBotMenu()
}

function initBotChat() {
    if (isBotChatInitialized) return

    chat = getEl('chat')
    if (!chat) return

    initTailwind()
    initWelcomeMessage()

    ensureMobileHeaderControls()
    ensureInputBarClasses()

    const fileInput = getEl('file-input')
    if (fileInput) {
        fileInput.addEventListener('change', function (e) {
            const files = e.target.files
            if (!files || !files.length) return

            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                addMessage(`📤 Отправлен файл: <span class="font-medium">${file.name}</span>`, true, file)
            }

            e.target.value = ''

            setTimeout(() => {
                showTyping()
                setTimeout(() => {
                    removeTyping()
                    addMessage('✅ Файл(ы) успешно получены! Я их проанализировал. Что дальше?', false)
                }, 1100)
            }, 400)
        })
    }

    window.addEventListener('resize', () => {
        if (chat) chat.scrollTop = chat.scrollHeight
    })

    isBotChatInitialized = true
}

// Добавление сообщения
function addMessage(content, isUser, file = null) {
    const messageDiv = document.createElement('div')
    messageDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} group message-bubble`

    let html = ''

    if (!isUser) {
        // Аватар бота
        html += `
            <div class="w-9 h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-md mr-3 mt-1">
                🤖
            </div>
        `
    }

    html += `
        <div class="max-w-[75%] ${isUser ? 'user-bubble' : 'bot-bubble'} rounded-3xl px-6 py-5 text-white relative">
    `

    // Текст
    if (content) {
        html += `<p class="text-base leading-relaxed">${content}</p>`
    }

    // Файл
    if (file) {
        const fileUrl = URL.createObjectURL(file)
        const isImage = file.type.startsWith('image/')
        const isVideo = file.type.startsWith('video/')
        const isAudio = file.type.startsWith('audio/')

        html += `<div class="mt-4 file-preview rounded-2xl overflow-hidden border border-white/10">`

        if (isImage) {
            html += `<img src="${fileUrl}" class="max-h-96 w-full object-contain rounded-2xl" alt="${file.name}">`
        } else if (isVideo) {
            html += `
                <video src="${fileUrl}" controls class="max-h-96 w-full rounded-2xl" preload="metadata"></video>
            `
        } else if (isAudio) {
            html += `
                <div class="bg-zinc-950/70 p-4 rounded-2xl">
                    <div class="flex items-center gap-3">
                        <span class="text-4xl">🎵</span>
                        <div class="flex-1">
                            <p class="font-medium text-sm">${file.name}</p>
                            <audio src="${fileUrl}" controls class="w-full mt-2"></audio>
                        </div>
                    </div>
                </div>
            `
        } else {
            html += `
                <a href="${fileUrl}" download="${file.name}" 
                    class="flex items-center gap-4 bg-zinc-950/70 p-5 rounded-2xl hover:bg-zinc-900 transition-colors">
                    <span class="text-5xl">📄</span>
                    <div>
                        <p class="font-medium">${file.name}</p>
                        <p class="text-xs text-zinc-400">${(file.size / 1024 / 1024).toFixed(1)} MB</p>
                    </div>
                </a>
            `
        }
        html += `</div>`
    }

    html += `</div>`

    if (isUser) {
        html += `
            <div class="w-9 h-9 bg-zinc-700 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl ml-3 mt-1 shadow-md">
                👤
            </div>
        `
    }

    messageDiv.innerHTML = html
    if (chat) {
        chat.appendChild(messageDiv)
        chat.scrollTop = chat.scrollHeight
    }
}

// Показ индикатора печати
function showTyping() {
    if (!chat) return
    const typingDiv = document.createElement('div')
    typingDiv.id = 'typing-indicator'
    typingDiv.className = `flex justify-start message-bubble`

    typingDiv.innerHTML = `
        <div class="w-9 h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-md mr-3 mt-1">
            🤖
        </div>
        <div class="bot-bubble rounded-3xl px-6 py-5 flex items-center">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
            <span class="ml-3 text-xs text-zinc-400">AI думает...</span>
        </div>
    `
    chat.appendChild(typingDiv)
    chat.scrollTop = chat.scrollHeight
}

function removeTyping() {
    const typing = document.getElementById('typing-indicator')
    if (typing) typing.remove()
}

// Отправка текстового сообщения
function sendTextMessage() {
    const input = document.getElementById('message-input')
    if (!input) return
    const text = input.value.trim()

    if (!text) return

    // Добавляем сообщение пользователя
    addMessage(text, true)
    input.value = ''

    // Симуляция ответа AI
    setTimeout(() => {
        showTyping()

        setTimeout(() => {
            removeTyping()

            const responses = [
                "Спасибо! Я обработал ваш запрос. Чем ещё могу помочь?",
                "Отличный вопрос! Вот что я нашёл по вашей теме...",
                "Всё понял. Готов помочь с файлом или дальнейшим уточнением.",
                "✅ Запрос принят. Ответ от AI-поддержки уже готов!",
                "Вы можете отправить фото, видео или музыку — я всё приму."
            ]

            const randomResponse = responses[Math.floor(Math.random() * responses.length)]
            addMessage(randomResponse, false)
        }, 1400)
    }, 300)
}

// Открытие выбора файла
function triggerFileInput() {
    const input = document.getElementById('file-input')
    if (input) input.click()
}

// Очистка чата
function clearChat() {
    if (!chat) return
    if (confirm('Очистить весь чат?')) {
        chat.innerHTML = ''
        initWelcomeMessage()
    }
}

// Приветственное сообщение
function initWelcomeMessage() {

    const welcomeHTML = `
        <div class="flex justify-start">
            <div class="w-9 h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl shadow-md mr-3 mt-1">
                🤖
            </div>
            <div class="bot-bubble rounded-3xl px-7 py-6 max-w-[320px]">
                <p class="text-lg font-medium">Привет! 👋</p>
                <p class="mt-2 text-base leading-relaxed">
                    Я — ваш персональный AI-бот поддержки.<br>
                    Пишите текст, отправляйте фото, музыку, видео или любые файлы.
                </p>
                <div class="mt-5 flex gap-3 text-xs">
                    <span class="bg-white/10 px-4 py-1 rounded-2xl">📸 Фото</span>
                    <span class="bg-white/10 px-4 py-1 rounded-2xl">🎵 Музыка</span>
                    <span class="bg-white/10 px-4 py-1 rounded-2xl">🎥 Видео</span>
                </div>
            </div>
        </div>
    `
    if (chat) chat.innerHTML = welcomeHTML
}

document.addEventListener('DOMContentLoaded', () => {

    const fab = getEl('botFab')
    if (fab) {
        fab.addEventListener('click', openBotChat)
    }

    const backdrop = getEl('botChatBackdrop')
    if (backdrop) {
        backdrop.addEventListener('click', closeBotChat)
    }

    const closeBtn = getEl('botChatClose')
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBotChat)
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBotMenu()
            closeBotChat()
        }
    })

    document.addEventListener('click', (e) => {
        if (!botMenuPanel || botMenuPanel.classList.contains('hidden')) return
        if (botMenuPanel.contains(e.target)) return
        if (botMenuButton && botMenuButton.contains(e.target)) return
        closeBotMenu()
    })
})

window.openBotChat = openBotChat
window.closeBotChat = closeBotChat