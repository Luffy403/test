const iosSwitch = document.getElementById('iosSwitch');
const textContent = document.getElementById('textContent');
const imageContent = document.getElementById('imageContent');
const toggleTitles = document.querySelectorAll('.cases__toggle-title');

iosSwitch.addEventListener('change', () => {
  if (iosSwitch.checked) {
    // Включено - показываем картинку
    textContent.classList.remove('active');
    imageContent.classList.add('active');
    
    // Обновляем активные заголовки
    toggleTitles[0].classList.remove('active'); // "График"
    toggleTitles[1].classList.add('active');    // "Скриншот"
  } else {
    // Выключено - показываем текст/график
    textContent.classList.add('active');
    imageContent.classList.remove('active');
    
    // Обновляем активные заголовки
    toggleTitles[0].classList.add('active');    // "График"
    toggleTitles[1].classList.remove('active'); // "Скриншот"
  }
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  // По умолчанию показываем текст (переключатель выключен)
  textContent.classList.add('active');
  toggleTitles[0].classList.add('active');
});