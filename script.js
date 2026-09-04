const title = "   КаЛьКулятор Верстки";
const screens = "Шапка, Контент, Футер";
const adaptive = true;
const rollback = 10; // процент отката посреднику


const showTypeOf = (variable) => console.log(typeof variable);
const getRollbackMessage = (price) => {
    if (price >= 30000) return "Даем скидку в 10%";
    if (price >= 15000) return "Даем скидку в 5%";
    return "Скидка не предусмотрена";
};


const getNumberInput = (message) => {
    let input;
    do {
        input = prompt(message);
        if (input === null) {
            input = "";
        }
        input = input.trim();
    } while (input === "" || isNaN(Number(input)));
    
    return Number(input);
};


// === ВЫПОЛНЕНИЕ ЗАДАНИЙ ===

// 1)
let screenPrice = getNumberInput("Сколько будет стоить верстка проекта (screenPrice)?");


// 2)
const getAllServicePrices = function() {
    let sum = 0;
    
    // Запрашиваем 2 услуги
    const servicePrice1 = getNumberInput("Первая дополнительная услуга: Сколько это будет стоить?");
    const servicePrice2 = getNumberInput("Вторая дополнительная услуга: Сколько это будет стоить?");
    
    sum = servicePrice1 + servicePrice2;
    return sum;
};
const allServicePrices = getAllServicePrices();


function getFullPrice() {
    return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice();


function getTitle() {
    const trimmedTitle = title.trim(); 
    if (!trimmedTitle) return "";
    return trimmedTitle.toUpperCase() + trimmedTitle.slice(1).toLowerCase();
}


function getServicePercentPrices() {
    const rollbackAmount = fullPrice * (rollback / 100);
    return fullPrice - rollbackAmount;
}
const servicePercentPrice = getServicePercentPrices();


// 4)
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("Экраны для разработки:", screens);
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость за вычетом процента отката посреднику:", servicePercentPrice);
