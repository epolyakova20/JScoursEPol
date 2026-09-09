// ==================== 1) ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ ====================

// 1. Заголовок "Калькулятор верстки" (берём первый [0] элемент из найденной коллекции)
const mainTitle = document.getElementsByTagName('h1')[0];

// 2. Кнопки "Рассчитать" и "Сброс" (берём по отдельности из коллекции по индексам)
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

// 3. Кнопка "+" под выпадающим списком типов экранов
const screenBtn = document.querySelector('.screen-btn');

// 4. Элементы other-items, разделенные по классам percent и number
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

// 5. Input type=range через его родителя .rollback
const rollbackInput = document.querySelector('.rollback input[type="range"]');

// 6. Span с классом range-value через его родителя .rollback
const rollbackValue = document.querySelector('.rollback .range-value');

// 7. Все правые инпуты итоговых значений по отдельности из коллекции (всего их 5)
const totalInputPrice = document.getElementsByClassName('total-input')[0];
const totalInputScreensCount = document.getElementsByClassName('total-input')[1];
const totalInputCountOther = document.getElementsByClassName('total-input')[2];
const totalInputFullPrice = document.getElementsByClassName('total-input')[3];
const totalInputServicePercent = document.getElementsByClassName('total-input')[4];

// 8. Все блоки с классом screen в изменяемую переменную (let)
let screenBlocks = document.querySelectorAll('.screen');


// ==================== ВЫВОД В КОНСОЛЬ ДЛЯ ПРОВЕРКИ ====================

console.log("Заголовок h1:", mainTitle);
console.log("Кнопка Рассчитать:", startBtn);
console.log("Кнопка Сброс:", resetBtn);
console.log("Кнопка плюс:", screenBtn);
console.log("Элементы с процентами:", otherItemsPercent);
console.log("Элементы с числами:", otherItemsNumber);
console.log("Ползунок range:", rollbackInput);
console.log("Текст значения range:", rollbackValue);
console.log("Итоговые поля (пример одного):", totalInputFullPrice);
console.log("Блоки экранов (let):", screenBlocks);
