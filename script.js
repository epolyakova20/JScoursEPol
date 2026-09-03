
// 3)
let title = prompt("Как называется ваш проект?");

// 4)
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

// 5)
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");

// 6)
let adaptive = confirm("Нужен ли адаптив на сайте?");

// 7)
let service1 = prompt("Какой первый дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt("Какой второй дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

// Переменная отката
let rollback = 10; 

// 8)
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Расчёт суммы отката
let rollbackAmount = fullPrice * (rollback / 100);

// 9)
let servicePercentPrice = Math.ceil(fullPrice - rollbackAmount);
console.log("Итоговая стоимость за вычетом отката (округлённая):", servicePercentPrice);

// 10)
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice === 0) {
    console.log("Стоимость равна нулю, скидка не предусмотрена");
} else {
    console.log("Что-то пошло не так");
}

console.log("Тип данных title:", typeof title);
console.log("Тип данных fullPrice:", typeof fullPrice);
console.log("Тип данных adaptive:", typeof adaptive);
console.log("Длина строки screens:", screens ? screens.length : 0);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);