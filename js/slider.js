// Логика слайдера
class SimpleSlider {
    constructor() {
        this.slides = document.querySelectorAll('.sites-slide');
        this.prevBtn = document.querySelector('.sites-slider-prev');
        this.nextBtn = document.querySelector('.sites-slider-next');
        this.currentSlide = 0;
        
        this.init();
    }
    
    init() {
        // Показываем первый слайд
        this.showSlide(this.currentSlide);
        
        // Вешаем обработчики событий
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Добавляем обработчики для hover эффектов
        this.prevBtn.addEventListener('mouseenter', () => this.handleHover(this.prevBtn, true));
        this.prevBtn.addEventListener('mouseleave', () => this.handleHover(this.prevBtn, false));
        this.nextBtn.addEventListener('mouseenter', () => this.handleHover(this.nextBtn, true));
        this.nextBtn.addEventListener('mouseleave', () => this.handleHover(this.nextBtn, false));
    }
    
    showSlide(index) {
        // Скрываем все слайды
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Показываем текущий слайд
        this.slides[index].classList.add('active');
        this.currentSlide = index;
    }
    
    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0; // Возврат к первому слайду
        }
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        let prevIndex = this.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1; // Переход к последнему слайду
        }
        this.showSlide(prevIndex);
    }
    
    handleHover(button, isHover) {
        if (button.classList.contains('sites-slider-prev')) {
            button.src = isHover ? 'assets/svg/slide-left-hover.svg' : 'assets/svg/slide-left.svg';
        } else {
            button.src = isHover ? 'assets/svg/slide-right-hover.svg' : 'assets/svg/slide-right.svg';
        }
    }
}

// Инициализация слайдера когда DOM загружен
document.addEventListener('DOMContentLoaded', function() {
    new SimpleSlider();
});

// Добавляем автоматическую прокрутку (опционально)
function startAutoSlide() {
    setInterval(() => {
        const slider = document.querySelector('.sites-slider-wrapper');
        if (slider && !slider.matches(':hover')) { // Не автопрокрутка при наведении
            const nextBtn = document.querySelector('.sites-slider-next');
            if (nextBtn) nextBtn.click();
        }
    }, 5000); // Прокрутка каждые 5 секунд
}
