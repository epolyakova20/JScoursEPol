const appData = {
    title: "КаЛьКулятор Верстки",
    screens: "Шапка, Контент, Футер",
    adaptive: true,
    rollback: 10,
    screenPrice: 0,        
    allServicePrices: 0,   
    fullPrice: 0,          
    servicePercentPrice: 0,

    getNumberInput: function(message) {
        let input;
        do {
            input = prompt(message);
            if (input === null) {
                input = "";
            }
            input = input.trim();
        } while (input === "" || isNaN(Number(input)));
        
        return Number(input);
    },

    getTitle: function() {
    const trimmedTitle = this.title.trim(); 
    if (!trimmedTitle) return "";
    this.title = trimmedTitle[0].toUpperCase() + trimmedTitle.slice(1).toLowerCase();
},

    asking: function() {
        this.screenPrice = this.getNumberInput("Сколько будет стоить верстка проекта?");
    },

    getAllServicePrices: function() {
        const servicePrice1 = this.getNumberInput("Первая дополнительная услуга: Сколько это будет стоить?");
        const servicePrice2 = this.getNumberInput("Вторая дополнительная услуга: Сколько это будет стоить?");
        
        this.allServicePrices = servicePrice1 + servicePrice2;
    },

    getFullPrice: function() {
        this.fullPrice = this.screenPrice + this.allServicePrices;
    },

    getServicePercentPrices: function() {
        const rollbackAmount = this.fullPrice * (this.rollback / 100);
        this.servicePercentPrice = this.fullPrice - rollbackAmount;
    },

    getRollbackMessage: function() {
        if (this.fullPrice >= 30000) return "Даем скидку в 10%";
        if (this.fullPrice >= 15000) return "Даем скидку в 5%";
        return "Скидка не предусмотрена";
    },

    logger: function() {
        console.log("--- НЕОБХОДИМАЯ ИНФОРМАЦИЯ ---");
        console.log("Тип данных title:", typeof this.title);
        console.log("Тип данных fullPrice:", typeof this.fullPrice);
        console.log("Тип данных adaptive:", typeof this.adaptive);
        console.log("Экраны для разработки:", this.screens);
        console.log(this.getRollbackMessage());
        console.log("Стоимость за вычетом процента отката посреднику:", this.servicePercentPrice);

        console.log("--- ВСЕ СВОЙСТВА И МЕТОДЫ ОБЪЕКТА APPDATA ---");
        for (let key in this) {
            console.log(`Ключ: ${key}, Значение: ${this[key]}`);
        }
    },

    start: function() {
        this.getTitle();
        this.asking();                      
        this.getAllServicePrices();         
        this.getFullPrice();                
        this.getServicePercentPrices();     
        
        this.logger();                      
    }
};


appData.start();

