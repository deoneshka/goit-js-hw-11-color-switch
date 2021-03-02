// Напиши скрипт, который после нажатия кнопки Start,
// раз в секунду меняет цвет фона body на случайное значение
// из массива используя инлайн - стиль.При нажатии на кнопку Stop,
// изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
let isActive = false;

function changeBodyBackground() {
    if (isActive) {
        return;
    };

    isActive = true;
    intervalId = setInterval(() => {
        refs.body.style = `background: ${colors[randomIntegerFromInterval(0, colors.length - 1)]}`
    }, 1000);
};

function StopChangeBodyBackground() {
    clearInterval(intervalId);
    isActive = false;
    intervalId = null;
};

refs.buttonStart.addEventListener('click', () => changeBodyBackground());
refs.buttonStop.addEventListener('click', () => StopChangeBodyBackground());