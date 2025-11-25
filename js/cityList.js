// Базовый функционал переключения шагов
class Calculator {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupCitySelection();
    }
    
    bindEvents() {
        // Кнопки "Далее"
        document.querySelectorAll('.calculator__btn--next').forEach(btn => {
            btn.addEventListener('click', () => {
                this.nextStep();
            });
        });
        
        // Клик по шагам в прогресс-баре
        document.querySelectorAll('.calculator__number').forEach(step => {
            step.addEventListener('click', () => {
                const stepNumber = parseInt(step.getAttribute('data-step'));
                if (stepNumber <= this.currentStep) {
                    this.goToStep(stepNumber);
                }
            });
        });
    }
    
    setupCitySelection() {
        document.querySelectorAll('.calculator__city').forEach(city => {
            city.addEventListener('click', () => {
                document.querySelectorAll('.calculator__city input[type="radio"]').forEach(r => r.checked = false);
                city.querySelector('input[type="radio"]').checked = true;
                this.updateSelectedRegion(city.querySelector('input[type="radio"]').value);
            });
        });
    }
    
    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateUI();
        }
    }
    
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateUI();
        }
    }
    
    goToStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= this.totalSteps && stepNumber <= this.currentStep) {
            this.currentStep = stepNumber;
            this.updateUI();
        }
    }
    
    updateUI() {
        // Обновляем шаги в прогресс-баре
        document.querySelectorAll('.calculator__number').forEach(step => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            if (stepNumber <= this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Обновляем контент шага
        document.querySelectorAll('.calculator__item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.calculator__item[data-step="${this.currentStep}"]`).classList.add('active');
    }
    
    updateSelectedRegion(region) {
        console.log('Выбран регион:', region);
        // Здесь можно добавить логику расчета цены
    }
}

// Инициализация калькулятора
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});