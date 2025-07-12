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
                <td colspan="2">Autorev</td>
                <td><span id="autorev-status" style="font-weight:bold;">OFF</span></td>
                <td><input type="text" id="autorev-hotkey-input" class="keybinds-btn" maxlength="1" style="width:40px;text-align:center;"></td>
            </tr>
        `;
        
        // Вставляем перед первым thead (Privacy Options)
        const firstHeader = optionsTable.querySelector('thead');
        if (firstHeader) {
            optionsTable.insertBefore(newBody, firstHeader);
            optionsTable.insertBefore(newHeader, newBody);
        }

        // === Логика управления Autorev через горячую клавишу ===
        const cellCounter = document.getElementById('cell-counter');
        const autorevStatus = document.getElementById('autorev-status');
        const hotkeyInput = document.getElementById('autorev-hotkey-input');

        // Получаем текущую горячую клавишу из localStorage или ставим Q
        function getHotkey() {
            return localStorage.getItem('weyno-autorev-hotkey') || 'q';
        }
        function setHotkey(key) {
            localStorage.setItem('weyno-autorev-hotkey', key);
            hotkeyInput.value = key.toUpperCase();
        }
        setHotkey(getHotkey());

        // Получаем и меняем состояние Autorev
        function setAutorevState(enabled) {
            localStorage.setItem('weyno-autorev-enabled', enabled ? 'true' : 'false');
            if (autorevStatus) autorevStatus.textContent = enabled ? 'ON' : 'OFF';
            if (cellCounter) cellCounter.textContent = enabled ? 'Tracked: None' : 'Tracked: OFF';
        }
        // Устанавливаем состояние при загрузке
        setAutorevState(localStorage.getItem('weyno-autorev-enabled') === 'true');

        // Слушаем нажатие горячей клавиши
        document.addEventListener('keydown', function(e) {
            // Не реагировать, если фокус в input/textarea, кроме нашего input
            if (document.activeElement && document.activeElement !== hotkeyInput && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            const hotkey = getHotkey();
            if (e.key.toLowerCase() === hotkey.toLowerCase()) {
                const enabled = localStorage.getItem('weyno-autorev-enabled') === 'true';
                setAutorevState(!enabled);
            }
        });

        // Обработка изменения горячей клавиши через input
        hotkeyInput.addEventListener('keydown', function(e) {
            e.preventDefault();
            if (e.key.length === 1) {
                setHotkey(e.key);
                hotkeyInput.blur();
            }
        });
        // Отображаем текущую клавишу при фокусе
        hotkeyInput.value = getHotkey().toUpperCase();
    }
});
