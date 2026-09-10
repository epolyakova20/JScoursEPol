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

// ==================== 2) ГЛАВНЫЙ ОБЪЕКТ ПРИЛОЖЕНИЯ ====================
const appData = {
    screenPrice: 0,
    screensCount: 0,
    priceOther: 0, 
    rollback: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    start: function() {
        this.readValues(); 
        this.addPrices();  
        this.getServicePercentPrice(); 
        this.showResult(); 
    },

    readValues: function() {
        this.screenPrice = +screenSelect.value;
        this.screensCount = +screenInput.value;
    },

    addPrices: function() {
        this.fullPrice = this.screenPrice * this.screensCount;
        this.priceOther = 0;

        checkboxNumber.forEach(function(checkbox) {
            if (checkbox.checked) {
                const priceInput = checkbox.closest('.other-items').querySelector('input[type="text"]');
                appData.priceOther += +priceInput.value;
            }
        });

        checkboxPercent.forEach(function(checkbox) {
            if (checkbox.checked) {
                const percentInput = checkbox.closest('.other-items').querySelector('input[type="text"]');
                const percentAmount = appData.fullPrice * (+percentInput.value / 100);
                appData.priceOther += percentAmount;
            }
        });

        this.fullPrice += this.priceOther;
    },

    getServicePercentPrice: function() {
        this.rollback = +rollbackInput.value; 
        const rollbackAmount = this.fullPrice * (this.rollback / 100);
        this.servicePercentPrice = Math.ceil(this.fullPrice - rollbackAmount);
    },

    showResult: function() {
        totalInputPrice.value = this.screenPrice;
        totalInputScreensCount.value = this.screensCount;
        totalInputCountOther.value = this.priceOther;
        totalInputFullPrice.value = this.fullPrice;
        totalInputServicePercent.value = this.servicePercentPrice;
    }
};

startBtn.addEventListener('click', appData.start.bind(appData));

rollbackInput.addEventListener('input', function(event) {
    rollbackValue.textContent = event.target.value + '%';
});
