let title = "Калькулятор стоимости сайтов";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 15000;
let rollback = 10;
let fullPrice = 90000;
let adaptive = true;

//использование методов и свойств
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} руб`);
console.log(`Стоимость разработки сайта ${fullPrice} руб`);

let screensLower = screens.toLowerCase();
let screensArray = screensLower.split(", ");
console.log("Массив типов экранов:", screensArray);

console.log("Процент отката посреднику:", fullPrice * (rollback / 100));