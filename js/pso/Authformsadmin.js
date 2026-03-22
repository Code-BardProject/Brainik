particlesJS("particles-js", {
"particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.25, "width": 1 },
    "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
},
"interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.7 } }, "push": { "particles_nb": 4 } }
},
"retina_detect": true
});

const toggleBtns = document.querySelectorAll('.toggle-btn');
const forms = document.querySelectorAll('.form');
const switchLinks = document.querySelectorAll('.switch-link');
const wrapper = document.querySelector('.form-wrapper');
const container = document.querySelector('.container');

function adjustHeight() {
const activeForm = document.querySelector('.form.active');
if (!activeForm) return;

// измеряем реальную высоту содержимого
const contentHeight = activeForm.scrollHeight;

// устанавливаем высоту wrapper'а
wrapper.style.height = contentHeight + 'px';

// даём контейнеру подстроиться (height: auto уже есть)
// дополнительный запас ~40px на отступы/анимацию
container.style.minHeight = (contentHeight + 120) + 'px';
}

function showForm(target) {
forms.forEach(f => {
    f.classList.remove('active');
    f.classList.add('hidden');
});
toggleBtns.forEach(b => b.classList.remove('active'));

const form = document.getElementById(target);
form.classList.remove('hidden');
form.classList.add('active');

document.querySelector(`[data-form="${target}"]`).classList.add('active');

// ждём завершения анимации и пересчитываем высоту
setTimeout(adjustHeight, 100);
}

toggleBtns.forEach(btn => {
btn.addEventListener('click', () => showForm(btn.dataset.form));
});

switchLinks.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();
    showForm(link.dataset.target);
});
});

// инициализация + реакция на resize (поворот экрана и т.д.)
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);
