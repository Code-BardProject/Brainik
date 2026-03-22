/**
 * Admin Panel JavaScript - Исправленная версия
 */

let currentSection = 'dashboard';
let sentNotifications = JSON.parse(localStorage.getItem('sentNotifications')) || [];
let attachedFiles = []; // Хранилище для прикрепленных файлов

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initNavigation();
    initNotifications();
    initFileUpload();
    updateAdminInfo();
    showSection('dashboard');
});

// Обновление информации об администраторе
function updateAdminInfo() {
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'));
    if (currentAdmin) {
        const adminNameElement = document.getElementById('adminName');
        const adminRoleElement = document.getElementById('adminRole');
        
        if (adminNameElement) {
            adminNameElement.textContent = currentAdmin.name || 'Администратор';
        }
        
        if (adminRoleElement) {
            adminRoleElement.textContent = currentAdmin.role || 'Супер админ';
        }
    }
}

// Функция выхода
function logout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        localStorage.removeItem('currentAdmin');
        window.location.href = 'admin-login.html';
    }
}

// ==================== SIDEBAR ====================
function initSidebar() {
    const toggleBtn = document.getElementById('mobileToggleBtn');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarCloseBtn');
    
    console.log('initSidebar called', {toggleBtn: !!toggleBtn, overlay: !!overlay, closeBtn: !!closeBtn});
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('toggle button clicked');
            toggleSidebar();
        });
    } else {
        console.error('mobileToggleBtn not found!');
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('close button clicked');
            closeSidebar();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidebar();
            closeModal();
        }
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when sidebar is open on mobile
        if (window.innerWidth <= 768) {
            if (sidebar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            if (section) {
                showSection(section, e);
                closeSidebar();
            }
        });
    });
}

function showSection(sectionName, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionName) {
            item.classList.add('active');
        }
    });
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        updateHeader(sectionName);
        
        if (sectionName === 'dashboard') {
            initDashboard();
        } else if (sectionName === 'notifications') {
            loadNotificationsHistory();
        }
    }
    
    closeSidebar();
}

function updateHeader(sectionName) {
    const headerTitle = document.getElementById('pageTitle');
    const breadcrumb = document.getElementById('breadcrumb');
    
    const sectionTitles = {
        dashboard: 'Dashboard',
        games: 'Управление играми',
        herocards: 'Hero Cards',
        users: 'Пользователи',
        subscriptions: 'Подписки',
        notifications: 'Уведомления',
        settings: 'Настройки'
    };
    
    if (headerTitle) {
        headerTitle.textContent = sectionTitles[sectionName] || sectionName;
    }
    
    if (breadcrumb) {
        breadcrumb.textContent = `Admin / ${sectionTitles[sectionName] || sectionName}`;
    }
}

// ==================== DASHBOARD ====================
function initDashboard() {
    const statValues = document.querySelectorAll('.stat-info h3');
    statValues.forEach(stat => {
        const finalValue = parseInt(stat.textContent.replace(/\D/g, ''));
        if (!isNaN(finalValue)) {
            animateNumber(stat, 0, finalValue, 1000);
        }
    });
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + range * easeProgress);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ==================== NOTIFICATIONS SYSTEM ====================
function initNotifications() {
    loadNotificationsHistory();
}

function loadNotificationsHistory() {
    const historyList = document.getElementById('notificationsList');
    if (!historyList) return;
    
    historyList.innerHTML = '';
    
    if (sentNotifications.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 30px;">Нет отправленных уведомлений</p>';
        return;
    }
    
    sentNotifications.forEach(notif => {
        const item = document.createElement('div');
        item.className = 'notification-item-admin';
        
        const typeColors = {
            info: '#3498db',
            success: '#10ac84',
            warning: '#f39c12',
            error: '#e74c3c',
            new: '#9b59b6'
        };
        item.style.borderLeftColor = typeColors[notif.type] || typeColors.info;
        
        const date = new Date(notif.timestamp);
        const dateStr = date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        
        // Add file attachments display
        const filesHtml = notif.files && notif.files.length > 0 ? `
            <div class="notification-attachments">
                <h5>📎 Вложения (${notif.files.length}):</h5>
                <div class="attachment-list">
                    ${notif.files.map(f => `
                        <div class="attachment-item">
                            <span class="attach-icon">${getFileIcon(f.type, f.name)}</span>
                            <span class="attach-name">${escapeHtml(f.name)}</span>
                            <span>(${f.size})</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';
        
        item.innerHTML = `
            <div class="notification-icon">📢</div>
            <div class="notification-content" style="flex: 1;">
                <h4>${escapeHtml(notif.title)}</h4>
                <p>${escapeHtml(notif.message)}</p>
                ${filesHtml}
                <div class="notification-meta">
                    <span>${dateStr}</span>
                    <span style="color: ${typeColors[notif.type] || typeColors.info}">${(notif.type || 'info').toUpperCase()}</span>
                    <span>${getTargetLabel(notif.target)}</span>
                </div>
            </div>
            <button class="btn-icon" onclick="deleteNotification(${notif.id})" title="Удалить">
                🗑️
            </button>
        `;
        
        historyList.appendChild(item);
    });
}

function deleteNotification(id) {
    if (!confirm('Удалить это уведомление?')) return;
    
    sentNotifications = sentNotifications.filter(n => n.id !== id);
    localStorage.setItem('sentNotifications', JSON.stringify(sentNotifications));
    localStorage.setItem('adminNotifications', JSON.stringify(sentNotifications));
    
    loadNotificationsHistory();
    updateNotificationBadge();
    showToast('Уведомление удалено', 'success');
}

function sendQuickNotification(type) {
    const templates = {
        maintenance: {
            title: 'Техническое обслуживание',
            message: 'Внимание! Сегодня в 02:00 планируется техническое обслуживание системы. Сервис может быть недоступен в течение 30 минут.',
            type: 'warning'
        },
        newfeature: {
            title: 'Новая функция!',
            message: 'Мы добавили новые Hero Cards и улучшили производительность игр. Проверьте обновления!',
            type: 'new'
        },
        event: {
            title: 'Специальное событие',
            message: 'Приглашаем всех участников принять участие в специальном игровом событии с крутыми призами!',
            type: 'info'
        },
        security: {
            title: 'Обновление безопасности',
            message: 'Рекомендуем всем пользователям обновить свои пароли для повышения безопасности аккаунта.',
            type: 'error'
        },
        holiday: {
            title: 'Праздничное поздравление!',
            message: 'С праздником! Мы подготовили для вас специальные бонусы и подарки. Проверьте свою почту!',
            type: 'success'
        }
    };
    
    const template = templates[type];
    if (template) {
        const notification = {
            id: Date.now(),
            title: template.title,
            message: template.message,
            type: template.type || 'info',
            target: 'all',
            timestamp: new Date().toISOString(),
            sentBy: 'Admin',
            read: false
        };
        
        sentNotifications.unshift(notification);
        localStorage.setItem('sentNotifications', JSON.stringify(sentNotifications));
        localStorage.setItem('adminNotifications', JSON.stringify(sentNotifications));
        
        loadNotificationsHistory();
        updateNotificationBadge();
        showToast('Шаблонное уведомление отправлено!', 'success');
    }
}

function getTargetLabel(target) {
    const labels = {
        all: 'Все пользователи',
        premium: 'Premium',
        free: 'Бесплатные',
        parents: 'Родители',
        children: 'Дети'
    };
    return labels[target] || target;
}

function updateNotificationBadge() {
    const badge = document.getElementById('notifCount');
    const headerBadge = document.getElementById('headerNotifCount');
    const count = sentNotifications.length;

    if (badge) {
        badge.textContent = count > 99 ? '99+' : count;
        badge.style.display = count > 0 ? 'block' : 'none';
    }

    if (headerBadge) {
        headerBadge.textContent = count > 99 ? '99+' : count;
        headerBadge.style.display = count > 0 ? 'block' : 'none';
    }
}

// ==================== MODAL ====================
function initModal() {
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
}

function openModal(type) {
    const modal = document.getElementById('adminModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (!modal || !overlay) return;
    
    const titles = {
        addGame: 'Добавить новую игру',
        editGame: 'Редактировать игру',
        addHero: 'Добавить Hero Card',
        editHero: 'Редактировать Hero Card',
        viewUser: 'Информация о пользователе',
        editUser: 'Редактировать пользователя'
    };
    
    if (title) title.textContent = titles[type] || 'Modal';
    if (body) body.innerHTML = generateModalContent(type);
    
    modal.classList.add('active');
    overlay.classList.add('active');
}

function generateModalContent(type) {
    const forms = {
        addGame: `
            <form onsubmit="handleGameSubmit(event)">
                <div class="form-group">
                    <label>Название игры</label>
                    <input type="text" required placeholder="Введите название">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Категория</label>
                        <select required>
                            <option>Обучающая</option>
                            <option>Развлекательная</option>
                            <option>Головоломка</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Возраст</label>
                        <select required>
                            <option>3-5 лет</option>
                            <option>6-8 лет</option>
                            <option>9-12 лет</option>
                            <option>13+ лет</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Описание</label>
                    <textarea rows="3" placeholder="Описание игры..."></textarea>
                </div>
                <div class="modal-footer" style="padding: 20px 0 0;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Отмена</button>
                    <button type="submit" class="btn-primary">Создать игру</button>
                </div>
            </form>
        `,
        addHero: `
            <form onsubmit="handleHeroSubmit(event)">
                <div class="form-group">
                    <label>Имя персонажа</label>
                    <input type="text" required placeholder="Введите имя">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Редкость</label>
                        <select required>
                            <option value="common">Обычная</option>
                            <option value="rare">Редкая</option>
                            <option value="epic">Эпическая</option>
                            <option value="legendary">Легендарная</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Уровень</label>
                        <input type="number" min="1" max="100" value="1" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Способности</label>
                    <textarea rows="3" placeholder="Описание способностей..."></textarea>
                </div>
                <div class="modal-footer" style="padding: 20px 0 0;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Отмена</button>
                    <button type="submit" class="btn-primary">Создать карту</button>
                </div>
            </form>
        `
    };
    
    return forms[type] || '<p>Content not found</p>';
}

function closeModal() {
    const modal = document.getElementById('adminModal');
    const overlay = document.getElementById('modalOverlay');
    
    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function handleGameSubmit(e) {
    e.preventDefault();
    closeModal();
    showToast('Игра успешно создана!', 'success');
}

function handleHeroSubmit(e) {
    e.preventDefault();
    closeModal();
    showToast('Hero Card создана!', 'success');
}

// ==================== QUICK ACTIONS ====================
function initQuickActions() {
    document.addEventListener('click', (e) => {
        const btn = e.target.matches('.btn-icon') ? e.target : e.target.closest('.btn-icon');
        if (btn) {
            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');
            
            if (action && id) {
                handleAction(action, id, btn);
            }
        }
    });
}

function handleAction(action, id, btn) {
    switch(action) {
        case 'edit':
            openModal('editGame');
            break;
        case 'delete':
            if (confirm('Удалить этот элемент?')) {
                const row = btn.closest('tr') || btn.closest('.game-card-admin') || btn.closest('.hero-card-admin');
                if (row) {
                    row.style.opacity = '0';
                    setTimeout(() => row.remove(), 300);
                }
                showToast('Элемент удален', 'success');
            }
            break;
        case 'view':
            openModal('viewUser');
            break;
        case 'toggle':
            const status = btn.getAttribute('data-status');
            const newStatus = status === 'active' ? 'inactive' : 'active';
            btn.setAttribute('data-status', newStatus);
            btn.textContent = newStatus === 'active' ? '🌙' : '☀️';
            showToast(`Статус изменен на ${newStatus === 'active' ? 'активный' : 'неактивный'}`, 'success');
            break;
    }
}

// ==================== TOAST ====================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    toast.innerHTML = `
        <span style="font-size: 24px;">${icons[type] || icons.info}</span>
        <span>${escapeHtml(message)}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== SETTINGS ====================
function saveSettings(e) {
    if (e) e.preventDefault();
    showToast('Настройки сохранены!', 'success');
}

function resetSettings() {
    if (confirm('Сбросить все настройки к значениям по умолчанию?')) {
        showToast('Настройки сброшены', 'success');
    }
}

function clearCache() {
    if (confirm('Очистить кеш системы?')) {
        showToast('Кеш очищен!', 'success');
    }
}

function exportData() {
    showToast('Данные экспортированы!', 'success');
}

function restartSystem() {
    if (confirm('Перезапустить систему?')) {
        showToast('Система перезапускается...', 'warning');
    }
}

function logout() {
    if (confirm('Выйти из системы?')) {
        localStorage.removeItem('brainik_current_user');
        window.location.href = 'Index.html';
    }
}

// ==================== SEARCH ====================
function searchUsers() {
    const searchTerm = document.getElementById('userSearch')?.value.toLowerCase();
    const rows = document.querySelectorAll('#usersSection tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function searchGames() {
    const searchTerm = document.getElementById('gameSearch')?.value.toLowerCase();
    const cards = document.querySelectorAll('.game-card-admin');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function searchHeroes() {
    const searchTerm = document.getElementById('heroSearch')?.value.toLowerCase();
    const cards = document.querySelectorAll('.hero-card-admin');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

// ==================== UTILITIES ====================
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== FILE UPLOAD ====================
function initFileUpload() {
    const fileInput = document.getElementById('notifFiles');
    const fileUploadArea = document.getElementById('fileUploadArea');
    
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }
    
    // Drag and drop support
    if (fileUploadArea) {
        fileUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUploadArea.classList.add('dragover');
        });
        
        fileUploadArea.addEventListener('dragleave', () => {
            fileUploadArea.classList.remove('dragover');
        });
        
        fileUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUploadArea.classList.remove('dragover');
            handleFiles(e.dataTransfer.files);
        });
    }
}

function handleFileSelect(e) {
    handleFiles(e.target.files);
}

function handleFiles(files) {
    if (!files) return;
    
    Array.from(files).forEach(file => {
        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            showToast(`Файл ${file.name} слишком большой (макс 10MB)`, 'error');
            return;
        }
        
        const fileObj = {
            id: Date.now() + Math.random(),
            file: file,
            name: file.name,
            size: formatFileSize(file.size),
            type: file.type,
            preview: null
        };
        
        // Create preview for images
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                fileObj.preview = e.target.result;
                updateFileList();
            };
            reader.readAsDataURL(file);
        }
        
        attachedFiles.push(fileObj);
    });
    
    updateFileList();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function updateFileList() {
    const previewArea = document.getElementById('filePreviewArea');
    const fileList = document.getElementById('fileList');
    
    if (!previewArea || !fileList) return;
    
    if (attachedFiles.length === 0) {
        previewArea.style.display = 'none';
        return;
    }
    
    previewArea.style.display = 'block';
    
    fileList.innerHTML = attachedFiles.map(file => {
        const icon = getFileIcon(file.type, file.name);
        const preview = file.preview ? `<img src="${file.preview}" alt="">` : `<div class="file-icon">${icon}</div>`;
        
        return `
            <div class="file-item" data-id="${file.id}">
                ${preview}
                <div class="file-info">
                    <span class="file-name">${escapeHtml(file.name)}</span>
                    <span class="file-size">${file.size}</span>
                </div>
                <button type="button" class="file-remove" onclick="removeFile(${file.id})" title="Удалить">×</button>
            </div>
        `;
    }).join('');
}

function getFileIcon(type, name) {
    if (type.startsWith('image/')) return '📷';
    if (type.startsWith('video/')) return '🎬';
    if (type.startsWith('audio/')) return '🎵';
    if (type.includes('pdf')) return '📄';
    if (type.includes('word') || name.endsWith('.doc') || name.endsWith('.docx')) return '📝';
    if (type.includes('excel') || name.endsWith('.xls') || name.endsWith('.xlsx')) return '📊';
    if (type.includes('powerpoint') || name.endsWith('.ppt') || name.endsWith('.pptx')) return '📊';
    if (name.endsWith('.zip') || name.endsWith('.rar')) return '📦';
    return '📎';
}

function removeFile(id) {
    attachedFiles = attachedFiles.filter(f => f.id !== id);
    updateFileList();
}

function clearAllFiles() {
    attachedFiles = [];
    updateFileList();
    const fileInput = document.getElementById('notifFiles');
    if (fileInput) fileInput.value = '';
}

// Update sendNotification to include files
function sendNotificationWithFiles(e) {
    e.preventDefault();
    
    const title = document.getElementById('notifTitle')?.value.trim();
    const message = document.getElementById('notifMessage')?.value.trim();
    const type = document.getElementById('notifType')?.value || 'info';
    const target = document.getElementById('notifTarget')?.value || 'all';
    
    if (!title || !message) {
        showToast('Заполните заголовок и сообщение!', 'error');
        return;
    }
    
    // Prepare file data for storage
    const filesData = attachedFiles.map(f => ({
        name: f.name,
        size: f.size,
        type: f.type,
        preview: f.preview // For images only
    }));
    
    const notif = {
        id: Date.now(),
        title,
        message,
        type,
        target,
        timestamp: new Date().toISOString(),
        sentBy: 'Admin',
        files: filesData
    };
    
    sentNotifications.unshift(notif);
    localStorage.setItem('sentNotifications', JSON.stringify(sentNotifications));
    localStorage.setItem('adminNotifications', JSON.stringify(sentNotifications));
    
    // Clear form
    document.getElementById('notifTitle').value = '';
    document.getElementById('notifMessage').value = '';
    clearAllFiles();
    
    loadNotificationsList();
    updateNotificationBadge();
    showToast('Уведомление с файлами отправлено! 📤', 'success');
}

// ==================== GLOBAL EXPORTS ====================
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
window.showSection = showSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.handleGameSubmit = handleGameSubmit;
window.handleHeroSubmit = handleHeroSubmit;
window.sendQuickNotification = sendQuickNotification;
window.deleteNotification = deleteNotification;
window.saveSettings = saveSettings;
window.resetSettings = resetSettings;
window.clearCache = clearCache;
window.exportData = exportData;
window.restartSystem = restartSystem;
window.logout = logout;
window.searchUsers = searchUsers;
window.searchGames = searchGames;
window.searchHeroes = searchHeroes;
window.removeFile = removeFile;
window.clearAllFiles = clearAllFiles;
window.handleFileSelect = handleFileSelect;
window.initFileUpload = initFileUpload;