const numbers = document.querySelectorAll('.facts__item_numbers');
const time = 1000;
const step = 1;
let wasPlayed = false;

function runNumbers(elem, num) {
    wasPlayed = true;
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        }
        elem.innerHTML = n;
    }, t);
}

// Получаем нужный элемент
const element = document.querySelector('.facts__item_numbers');

const searchVisibility = function (target) {
    // Все позиции элемента
    const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        if (!wasPlayed) {
            numbers.forEach(number => runNumbers(number, +number.textContent));
        }

    } else {
        wasPlayed = false;
        // Если элемент не видно, то запускаем этот код
    };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    searchVisibility(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
searchVisibility(element);
