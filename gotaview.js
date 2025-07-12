// Ждем загрузки страницы
window.addEventListener('load', function() {
    // Создаем новую кнопку
    const clientBtn = document.createElement('button');
    clientBtn.id = 'btn-client';
    clientBtn.className = 'gota-btn bottom-btn';
    clientBtn.textContent = 'Client';

    // Устанавливаем стили как у других кнопок
    clientBtn.style.color = 'rgb(255, 255, 255)';
    clientBtn.style.borderColor = 'rgb(255, 255, 255)';
    clientBtn.style.backgroundColor = 'rgb(68, 68, 68)';

    // Находим контейнер с кнопками
    const buttonsContainer = document.querySelector('.main-bottom-left');

    // Добавляем новую кнопку в контейнер
    if (buttonsContainer) {
        buttonsContainer.appendChild(clientBtn);
    }

    // Добавляем обработчик события (по желанию)
    clientBtn.addEventListener('click', function() {
        console.log('Client button clicked');
        // Здесь можно добавить свою логику
    });
});
