const title = "   КаЛьКулятор Верстки";
const screens = "Шапка, Контент, Футер";
const screenPrice = 5000;
const adaptive = true;
const rollback = 10; // процент отката посреднику

const showTypeOf = (variable) => console.log(typeof variable);
const getRollbackMessage = (price) => {
    if (price >= 30000) return "Даем скидку в 10%";
    if (price >= 15000) return "Даем скидку в 5%";
    return "Скидка не предусмотрена";
};

// === ВЫПОЛНЕНИЕ ЗАДАНИЙ ===

// 1)
const getAllServicePrices = function() {
    const servicePrice1 = 1000; 
    const servicePrice2 = 1500;
    return servicePrice1 + servicePrice2; 
};
const allServicePrices = getAllServicePrices();


// 2)
function getFullPrice() {
    return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice();


// 3)
function getTitle() {
    const trimmedTitle = title.trim(); 
    if (!trimmedTitle) return "";
    return trimmedTitle[0].toUpperCase() + trimmedTitle.slice(1).toLowerCase();
}


// 4)
function getServicePercentPrices() {
    const rollbackAmount = fullPrice * (rollback / 100);
    return fullPrice - rollbackAmount;
}
const servicePercentPrice = getServicePercentPrices();


// 5)

// - вызовы функции showTypeOf
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

// - вывод строки с типами экранов для разработки screens
console.log("Экраны для разработки:", screens);

// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
console.log(getRollbackMessage(fullPrice));

// - стоимость за вычетом процента отката посреднику
console.log("Стоимость за вычетом процента отката посреднику:", servicePercentPrice);
