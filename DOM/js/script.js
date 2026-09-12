// ==================== 1) ПОЛУЧЕНИЕ DOM-ЭЛЕМЕНТОВ ====================
const startBtn = document.getElementsByClassName('handler_btn')[0]; 
const resetBtn = document.getElementsByClassName('handler_btn')[1]; 
const screenSelect = document.querySelector('.screen select');       
const screenInput = document.querySelector('.screen input');         
const rollbackInput = document.querySelector('.rollback input[type="range"]'); 
const rollbackValue = document.querySelector('.rollback .range-value');       

const checkboxPercent = document.querySelectorAll('.other-items.percent input[type="checkbox"]');
const checkboxNumber = document.querySelectorAll('.other-items.number input[type="checkbox"]');

const totalInputPrice = document.getElementsByClassName('total-input')[0];
const totalInputScreensCount = document.getElementsByClassName('total-input')[1];
const totalInputCountOther = document.getElementsByClassName('total-input')[2];
const totalInputFullPrice = document.getElementsByClassName('total-input')[3];
const totalInputServicePercent = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

// ==================== 2) ГЛАВНЫЙ ОБЪЕКТ ПРИЛОЖЕНИЯ ====================
const appData = {
    screens: [],             
    screenPrice: 0,
    screensCount: 0,
    priceOther: 0, 
    rollback: 0,             
    fullPrice: 0,
    servicePercentPrice: 0,

    // Методы объекта пишем в обычном стиле (не стрелочные!), используем строго this (Пункт 1 и 2)
    start: function() {
        if (screenSelect.value === '' || screenInput.value.trim() === '') {
            alert('Пожалуйста, выберите тип экрана и введите его количество!');
            return; 
        }

        this.addScreens(); 
        this.readValues(); 
        this.addPrices();  
        this.showResult(); 
        this.blockInputs(); // Вызываем блокировку после успешного расчета (Пункт 3)
    },

    addScreens: function() {
        this.screens = []; 
        this.screens.push({
            price: +screenSelect.value,
            count: +screenInput.value
        });
    },

    readValues: function() {
        this.screenPrice = +screenSelect.value;
    },

    addPrices: function() {
        this.fullPrice = this.screenPrice * screenInput.value;
        this.priceOther = 0;
        this.screensCount = 0;

        // Внутри методов тоже используем обычные функции, чтобы не терять контекст this, либо привязываем его
        this.screens.forEach(function(screenItem) {
            this.screensCount += screenItem.count;
        }, this); // Привязали контекст через второй аргумент forEach

        checkboxNumber.forEach(function(checkbox) {
            if (checkbox.checked) {
                const priceInput = checkbox.closest('.other-items').querySelector('input[type="text"]');
                this.priceOther += +priceInput.value;
            }
        }, this);

        checkboxPercent.forEach(function(checkbox) {
            if (checkbox.checked) {
                const percentInput = checkbox.closest('.other-items').querySelector('input[type="text"]');
                const percentAmount = this.fullPrice * (+percentInput.value / 100);
                this.priceOther += percentAmount;
            }
        }, this);

        this.fullPrice += this.priceOther;

        this.rollback = +rollbackInput.value;
        const rollbackAmount = this.fullPrice * (this.rollback / 100);
        this.servicePercentPrice = Math.ceil(this.fullPrice - rollbackAmount);
    },

    // Вспомогательный метод для блокировки элементов (Пункт 3)
    blockInputs: function() {
        // Блокируем главный select и input количества
        screenSelect.disabled = true;
        screenInput.disabled = true;

        // Перебираем и блокируем текстовые инпуты и чекбоксы в дополнительных услугах
        const allLeftInputs = document.querySelectorAll('.calc-left input[type="text"], .calc-left input[type="checkbox"]');
        allLeftInputs.forEach(input => input.disabled = true);

        // Переключаем видимость кнопок Рассчитать и Сброс
        startBtn.style.display = 'none';
        resetBtn.style.display = 'block';
    },

    // 4) Метод reset() для возвращения программы в исходное состояние
    reset: function() {
        // 1. Кнопка Сброс должна замениться на кнопку Рассчитать
        resetBtn.style.display = 'none';
        startBtn.style.display = 'block';

        // 3. Все input[type=text] и select должны быть разблокированы
        screenSelect.disabled = false;
        screenInput.disabled = false;

        const allLeftInputs = document.querySelectorAll('.calc-left input[type="text"], .calc-left input[type="checkbox"]');
        allLeftInputs.forEach(input => {
            input.disabled = false;
            if (input.type === 'checkbox') input.checked = false; // Сбрасываем чекбоксы
        });

        // 2. Должны быть убраны значения полей ввода левой и правой части
        screenSelect.value = '';
        screenInput.value = '';
        rollbackInput.value = 0;
        rollbackValue.textContent = '0%';

        // Очищаем правые инпуты вывода результатов
        totalInputPrice.value = 0;
        totalInputScreensCount.value = 0;
        totalInputCountOther.value = 0;
        totalInputFullPrice.value = 0;
        totalInputServicePercent.value = 0;

        // Сбрасываем свойства самого объекта
        this.screens = [];
        this.screenPrice = 0;
        this.screensCount = 0;
        this.priceOther = 0;
        this.rollback = 0;
        this.fullPrice = 0;
        this.servicePercentPrice = 0;
    },

    showResult: function() {
        totalInputPrice.value = this.screenPrice;
        totalInputScreensCount.value = this.screensCount; 
        totalInputCountOther.value = this.priceOther;
        totalInputFullPrice.value = this.fullPrice;
        totalInputServicePercent.value = this.servicePercentPrice; 
    }
};

// ==================== 3) СЛУШАТЕЛИ СОБЫТИЙ ====================

// Переводим внешние обработчики на стрелочные функции (Пункт 1)
// Привязываем контекст appData, чтобы методы корректно работали (Пункт 2)
startBtn.addEventListener('click', () => appData.start());
resetBtn.addEventListener('click', () => appData.reset());

rollbackInput.addEventListener('input', (event) => {
    rollbackValue.textContent = event.target.value + '%';
    appData.rollback = +event.target.value;
});
