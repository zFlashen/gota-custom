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
                <td colspan="2">
                    <span id="autorev-status" style="font-weight:bold;">OFF</span>
                    <button id="change-autorev-hotkey" style="margin-left:10px;">Change Hotkey</button>
                    <span id="autorev-hotkey-label" style="margin-left:5px; color:#aaa;"></span>
                </td>
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
        const hotkeyLabel = document.getElementById('autorev-hotkey-label');
        const changeHotkeyBtn = document.getElementById('change-autorev-hotkey');

        // Получаем текущую горячую клавишу из localStorage или ставим Q
        function getHotkey() {
            return localStorage.getItem('weyno-autorev-hotkey') || 'q';
        }
        function setHotkey(key) {
            localStorage.setItem('weyno-autorev-hotkey', key);
            hotkeyLabel.textContent = `[Hotkey: ${key.toUpperCase()}]`;
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
            // Не реагировать, если фокус в input/textarea
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            const hotkey = getHotkey();
            if (e.key.toLowerCase() === hotkey.toLowerCase()) {
                const enabled = localStorage.getItem('weyno-autorev-enabled') === 'true';
                setAutorevState(!enabled);
            }
        });

        // Смена горячей клавиши
        changeHotkeyBtn.addEventListener('click', function() {
            hotkeyLabel.textContent = '[Press new key...]';
            function onKey(e) {
                if (e.key.length === 1) { // Только одиночные клавиши
                    setHotkey(e.key);
                    document.removeEventListener('keydown', onKey, true);
                }
            }
            document.addEventListener('keydown', onKey, true);
        });
    }
});
