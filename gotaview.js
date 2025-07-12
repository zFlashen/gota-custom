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

    // === Удаляем лишние элементы ===
    function removeElements() {
        // Удаляем элемент с классом main-bottom-links
        const mainBottomLinks = document.querySelector('.main-bottom-links');
        if (mainBottomLinks) {
            mainBottomLinks.remove();
            console.log('Element with class main-bottom-links removed');
        }

        // Удаляем элемент с классами policyLinks и interface-color
        const policyLinks = document.querySelector('.policyLinks.interface-color');
        if (policyLinks) {
            policyLinks.remove();
            console.log('Element with classes policyLinks interface-color removed');
        }
    }

    // Запускаем сразу и через небольшой таймаут на случай динамической загрузки
    removeElements();
    setTimeout(removeElements, 1000);
});
