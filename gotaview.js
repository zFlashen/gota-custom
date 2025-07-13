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
                <td><span id="autorev-status" style="font-weight:bold; color:#e57373;">OFF</span></td>
                <td><input type="text" id="autorev-hotkey-input" class="keybinds-btn" maxlength="1" style="width:40px;text-align:center;"></td>
            </tr>
            <tr>
                <td colspan="3">Rainbow Food</td>
                <td><input type="checkbox" id="cRainbowFood"></td>
            </tr>
            <tr>
                <td colspan="3">Rainbow Smoothness <span id="rainbow-intensity-value"></span></td>
                <td><input type="range" id="rainbow-intensity-slider" min="0" max="15" step="1"></td>
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
        const rainbowCheckbox = document.getElementById('cRainbowFood');

        // Цвета для статусов
        const COLOR_OFF = '#e57373'; // мягкий красный
        const COLOR_NONE = '#81c784'; // мягкий зелёный

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
            if (autorevStatus) {
                autorevStatus.textContent = enabled ? 'ON' : 'OFF';
                autorevStatus.style.color = enabled ? COLOR_NONE : COLOR_OFF;
            }
            if (cellCounter) {
                cellCounter.textContent = enabled ? 'Tracked: None' : 'Tracked: OFF';
                cellCounter.style.color = enabled ? COLOR_NONE : COLOR_OFF;
            }
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

        // === Rainbow Food ===
        // Восстанавливаем состояние из localStorage
        rainbowCheckbox.checked = localStorage.getItem('weyno-rainbow-food') === 'true';
        rainbowCheckbox.addEventListener('change', function() {
            localStorage.setItem('weyno-rainbow-food', rainbowCheckbox.checked ? 'true' : 'false');
            window.dispatchEvent(new Event('rainbow-food-changed'));
        });

        const rainbowSlider = document.getElementById('rainbow-intensity-slider');
        const rainbowValue = document.getElementById('rainbow-intensity-value');
        function updateRainbowValue(val) {
            rainbowValue.textContent = val;
        }
        // Восстанавливаем значение из localStorage или ставим 5 по умолчанию
        let rainbowIntensity = parseInt(localStorage.getItem('weyno-rainbow-intensity'), 10);
        if (isNaN(rainbowIntensity)) rainbowIntensity = 5;
        rainbowSlider.value = rainbowIntensity;
        updateRainbowValue(rainbowIntensity);
        rainbowSlider.addEventListener('input', function() {
            localStorage.setItem('weyno-rainbow-intensity', rainbowSlider.value);
            updateRainbowValue(rainbowSlider.value);
            window.dispatchEvent(new Event('rainbow-intensity-changed'));
        });
    }
});
