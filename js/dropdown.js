// Выпадающие списки
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    const currentMenu = drop.querySelector('.dropdown__menu');
    const currentImg = drop.querySelector('.dropdown__toggle-img')
    
    drop.addEventListener('click', () => {
        // Проверяем, было ли это меню открыто до клика
        const wasOpen = currentMenu.classList.contains('open');
        
        // Закрываем ВСЕ меню сначала
        dropdowns.forEach(otherDrop => {
            const otherMenu = otherDrop.querySelector('.dropdown__menu');
            const otherImg = otherDrop.querySelector('.dropdown__toggle-img');
            otherMenu.classList.remove('open');
            otherImg.classList.remove('img__click');
        });
        
        // Если меню было ЗАКРЫТО - открываем его
        // Если было ОТКРЫТО - оставляем закрытым (мы только что закрыли все)
        if (!wasOpen) {
            currentMenu.classList.add('open');
            currentImg.classList.add('img__click');
        }
    });
});
// Закрытие меню при клике в любом месте документа
document.addEventListener('click', (event) => {
    // Проверяем, кликнули ли мы НЕ по dropdown или его содержимому
    const isDropdownClick = event.target.closest('.dropdown');
    
    if (!isDropdownClick) {
        // Закрываем все меню
        dropdowns.forEach(drop => {
            const menu = drop.querySelector('.dropdown__menu');
            const img = drop.querySelector('.dropdown__toggle-img');
            menu.classList.remove('open');
            img.classList.remove('img__click');
        });
    }
});

// Также можно закрывать меню при нажатии клавиши Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        dropdowns.forEach(drop => {
            const menu = drop.querySelector('.dropdown__menu');
            const img = drop.querySelector('.dropdown__toggle-img');
            menu.classList.remove('open');
            img.classList.remove('img__click');
        });
    }
});


// Бургер меню