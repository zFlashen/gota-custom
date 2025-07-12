window.addEventListener('load', function() {
    // Находим таблицу с опциями
    const optionsTable = document.querySelector('.options-table');
    
    if (optionsTable) {
        // Создаем новый заголовок
        const newHeader = document.createElement('thead');
        newHeader.innerHTML = `
            <tr>
                <th colspan="4">Client Features</th>
            </tr>
        `;
        
        // Создаем тело секции с настройками
        const newBody = document.createElement('tbody');
        newBody.innerHTML = `
            <tr>
                <td colspan="3">Autorev</td>
                <td><input type="checkbox" class="checkbox-options" id="cAutorev"></td>
            </tr>
        `;
        
        // Вставляем перед первым thead (Privacy Options)
        const firstHeader = optionsTable.querySelector('thead');
        if (firstHeader) {
            optionsTable.insertBefore(newBody, firstHeader);
            optionsTable.insertBefore(newHeader, newBody);
        }

        // === Синхронизация чекбокса Autorev с localStorage ===
        const cAutorev = document.getElementById('cAutorev');
        if (cAutorev) {
            // Восстанавливаем состояние из localStorage
            cAutorev.checked = localStorage.getItem('weyno-autorev-enabled') === 'true';
            // Устанавливаем правильный текст при загрузке
            const cellCounter = document.getElementById('cell-counter');
            if (cellCounter) {
                cellCounter.textContent = cAutorev.checked ? 'Tracked: None' : 'Tracked: OFF';
            }
            cAutorev.addEventListener('change', function() {
                localStorage.setItem('weyno-autorev-enabled', cAutorev.checked ? 'true' : 'false');
                const cellCounter = document.getElementById('cell-counter');
                if (cellCounter) {
                    cellCounter.textContent = cAutorev.checked ? 'Tracked: None' : 'Tracked: OFF';
                }
            });
        }
    }
});
