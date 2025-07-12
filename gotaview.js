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
        
        // Создаем тело секции с настройками (без чекбокса)
        const newBody = document.createElement('tbody');
        newBody.innerHTML = `
            <tr>
                <td colspan="4" id="autorev-status-cell"><b>Autorev:</b> <span id="autorev-status"></span> <span style="font-size:12px;">(Q to toggle)</span></td>
            </tr>
        `;
        
        // Вставляем перед первым thead (Privacy Options)
        const firstHeader = optionsTable.querySelector('thead');
        if (firstHeader) {
            optionsTable.insertBefore(newBody, firstHeader);
            optionsTable.insertBefore(newHeader, newBody);
        }

        // === Логика переключения Autorev по горячей клавише Q ===
        function setAutorevStatus(enabled) {
            localStorage.setItem('weyno-autorev-enabled', enabled ? 'true' : 'false');
            const statusSpan = document.getElementById('autorev-status');
            if (statusSpan) statusSpan.textContent = enabled ? 'ON' : 'OFF';
            const cellCounter = document.getElementById('cell-counter');
            if (cellCounter) cellCounter.textContent = enabled ? 'Tracked: None' : 'Tracked: OFF';
        }

        // Устанавливаем начальный статус
        setAutorevStatus(localStorage.getItem('weyno-autorev-enabled') === 'true');

        // Слушаем нажатие клавиши Q
        document.addEventListener('keydown', function(e) {
            // Игнорируем, если фокус в input/textarea
            if (e.repeat) return;
            if (e.key.toLowerCase() === 'q' && !e.ctrlKey && !e.altKey && !e.metaKey) {
                const current = localStorage.getItem('weyno-autorev-enabled') === 'true';
                setAutorevStatus(!current);
            }
        });
    }
});
