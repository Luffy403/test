class Calculator {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.init();
    }
    init() {
        this.bindEvents();
        this.setupCitySelection();
        this.updateUI(); // Инициализируем UI при загрузке
    }
    bindEvents() {
        // Кнопки "Далее"
        document.querySelectorAll('.calculator__btn--next').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextStep();
            });
        });
        // Клик по шагам в прогресс-баре
        document.querySelectorAll('.calculator__number').forEach(step => {
            step.addEventListener('click', () => {
                const stepNumber = parseInt(step.getAttribute('data-step'));
                this.goToStep(stepNumber);
            });
        });
    }
    setupCitySelection() {
        document.querySelectorAll('.calculator__city').forEach(city => {
            city.addEventListener('click', () => {
                document.querySelectorAll('.calculator__city input[type="radio"]').forEach(r => {
                    r.checked = false;
                    r.parentElement.classList.remove('selected');
                });
                const radio = city.querySelector('input[type="radio"]');
                radio.checked = true;
                city.classList.add('selected');
                this.updateSelectedRegion(radio.value);
            });
        });
    }
    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateUI();
        }
    }
    goToStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
            this.currentStep = stepNumber;
            this.updateUI();
        }
    }
    updateUI() {
        // Обновляем шаги в прогресс-баре
        document.querySelectorAll('.calculator__number').forEach(step => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            
            if (stepNumber === this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
            
            // Добавляем класс для пройденных шагов (опционально)
            if (stepNumber < this.currentStep) {
                step.classList.add('completed');
            } else {
                step.classList.remove('completed');
            }
        });
        // Обновляем контент шага
        document.querySelectorAll('.calculator__item').forEach(item => {
            item.classList.remove('active');
        });
        
        const currentItem = document.querySelector(`.calculator__item[data-step="${this.currentStep}"]`);
        if (currentItem) {
            currentItem.classList.add('active');
        }
    }
}
// Инициализация калькулятора
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});