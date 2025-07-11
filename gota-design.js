// Файл: gota-design.js
// === Вставка красивой кнопки Weyno Client под main-account ===
(function() {
function insertWeynoButton() {
    var mainAccount = document.getElementById('main-account');
    if (mainAccount && !document.getElementById('weynoBtn')) {
        // Подключаем Tailwind и FontAwesome, если их нет
        if (!document.querySelector('link[href*="font-awesome"]')) {
            var fa = document.createElement('link');
            fa.rel = 'stylesheet';
            fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fa);
        }
        if (!document.querySelector('script[src*="tailwindcss"]')) {
            var tw = document.createElement('script');
            tw.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(tw);
        }
        // Добавляем стили для меню
        if (!document.getElementById('weyno-menu-style')) {
            var style = document.createElement('style');
            style.id = 'weyno-menu-style';
            style.textContent = `
                .menu-transition { transition: all 0.3s ease; transform-origin: top center; }
                .menu-enter { opacity: 0; transform: scaleY(0); }
                .menu-enter-active { opacity: 1; transform: scaleY(1); }
                .menu-exit { opacity: 1; transform: scaleY(1); }
                .menu-exit-active { opacity: 0; transform: scaleY(0); }
                .tab-indicator { transition: all 0.3s ease; }
                .glow-effect { box-shadow: 0 0 15px rgba(59, 130, 246, 0.7); }
            `;
            document.head.appendChild(style);
        }
        var wrapper = document.createElement('div');
        wrapper.innerHTML = `
        <div class="relative mt-6 mb-2 flex flex-col items-center">
            <button id="weynoBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" style="box-shadow: 0 0 15px rgba(59,130,246,0.7);">
                <i class="fas fa-gamepad text-xl"></i>
                <span>Weyno Client</span>
            </button>
            <div id="dropdownMenu" class="absolute left-0 mt-2 w-[340px] bg-gray-800 rounded-lg shadow-xl overflow-hidden menu-transition origin-top hidden transform scale-y-0 opacity-0 z-50 border border-gray-700">
                <div class="bg-gray-900 px-4 py-3 flex justify-between items-center border-b border-gray-700">
                    <h3 class="text-white font-semibold">Weyno Client v1.0</h3>
                    <button id="closeMenu" class="text-gray-400 hover:text-white"><i class="fas fa-times"></i></button>
                </div>
                <div class="relative bg-gray-800 px-4 pt-2">
                    <div class="flex border-b border-gray-700">
                        <button class="tab-btn py-3 px-4 text-gray-400 hover:text-white font-medium text-sm relative" data-tab="main"><span>Main</span></button>
                        <button class="tab-btn py-3 px-4 text-gray-400 hover:text-white font-medium text-sm relative" data-tab="autorev"><span>Autorev</span></button>
                    </div>
                    <div id="tabIndicator" class="tab-indicator absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300" style="width: 56px; transform: translateX(0px);"></div>
                </div>
                <div class="p-4">
                    <div id="mainContent" class="tab-content">
                        <div class="text-white">
                            <h4 class="font-semibold mb-2">Main Settings</h4>
                            <p class="text-gray-400 text-sm">Configure your main client settings here.</p>
                            <div class="mt-4 space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-300">FPS Boost</span>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" checked>
                                        <div class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-300">Memory Optimizer</span>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer">
                                        <div class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="autorevContent" class="tab-content hidden">
                        <div class="text-white">
                            <h4 class="font-semibold mb-2">Autorev Settings</h4>
                            <p class="text-gray-400 text-sm">Automate your revival process.</p>
                            <div class="mt-4 space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-300">Enable Autorev</span>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" id="autorev-toggle">
                                        <div class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <i class="fas fa-clock text-blue-500"></i>
                                    <span class="text-gray-300">Delay (ms)</span>
                                    <input type="number" value="500" class="ml-auto bg-gray-700 text-white text-sm rounded px-2 py-1 w-20" id="autorev-delay">
                                </div>
                                <div class="flex items-center space-x-2">
                                    <i class="fas fa-keyboard text-blue-500"></i>
                                    <span class="text-gray-300">Hotkey</span>
                                    <input type="text" id="autorev-hotkey" maxlength="1" class="ml-auto bg-gray-700 text-white text-sm rounded px-2 py-1 w-12 text-center" style="text-transform:uppercase;" title="Press a key to set hotkey">
                                    <span class="text-gray-500 text-xs">(on/off)</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <i class="fas fa-bullseye text-blue-500"></i>
                                    <span class="text-gray-300">TriggerCells</span>
                                    <input type="number" id="autorev-triggercells" min="1" max="256" class="ml-auto bg-gray-700 text-white text-sm rounded px-2 py-1 w-16 text-center" style="text-align:center;" title="Cells count to trigger double space">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-900 px-4 py-3 flex justify-between items-center border-t border-gray-700">
                    <span class="text-gray-400 text-sm">Status: <span class="text-green-500">Connected</span></span>
                    <button class="text-blue-500 hover:text-blue-400 text-sm font-medium"><i class="fas fa-cog mr-1"></i> Settings</button>
                </div>
                <div id="weyno-resize-handle" style="position:absolute;right:2px;bottom:2px;width:18px;height:18px;cursor:nwse-resize;z-index:1000;"><svg width="18" height="18"><line x1="4" y1="14" x2="14" y2="14" stroke="#4b5563" stroke-width="2"/><line x1="8" y1="10" x2="14" y2="10" stroke="#4b5563" stroke-width="2"/><line x1="12" y1="6" x2="14" y2="6" stroke="#4b5563" stroke-width="2"/></svg></div>
            </div>
        </div>
        `;
        mainAccount.parentNode.insertBefore(wrapper, mainAccount.nextSibling);
        // JS для работы меню и Autorev hotkey
        (function(){
            var dropdownMenu = wrapper.querySelector('#dropdownMenu');
            var weynoBtn = wrapper.querySelector('#weynoBtn');
            var closeMenu = wrapper.querySelector('#closeMenu');
            var tabButtons = wrapper.querySelectorAll('.tab-btn');
            var tabContents = wrapper.querySelectorAll('.tab-content');
            var tabIndicator = wrapper.querySelector('#tabIndicator');
            // Autorev hotkey logic
            var hotkeyInput = wrapper.querySelector('#autorev-hotkey');
            var toggleInput = wrapper.querySelector('#autorev-toggle');
            var delayInput = wrapper.querySelector('#autorev-delay');
            var triggerCellsInput = wrapper.querySelector('#autorev-triggercells');
            // Load hotkey from localStorage
            var savedHotkey = localStorage.getItem('weyno-autorev-hotkey') || 'R';
            hotkeyInput.value = savedHotkey;
            // Load toggle state
            var savedToggle = localStorage.getItem('weyno-autorev-enabled') === 'true';
            toggleInput.checked = savedToggle;
            // Load delay from localStorage
            var savedDelay = localStorage.getItem('weyno-autorev-delay') || '50';
            delayInput.value = savedDelay;
            // Load trigger cells from localStorage
            var savedTriggerCells = localStorage.getItem('weyno-autorev-triggercells') || '8';
            triggerCellsInput.value = savedTriggerCells;
            // Save hotkey on input
            hotkeyInput.addEventListener('keydown', function(e) {
                e.preventDefault();
                var key = e.key.length === 1 ? e.key.toUpperCase() : '';
                if (key) {
                    hotkeyInput.value = key;
                    localStorage.setItem('weyno-autorev-hotkey', key);
                }
            });
            // Save toggle on change
            toggleInput.addEventListener('change', function() {
                localStorage.setItem('weyno-autorev-enabled', toggleInput.checked);
                if (!toggleInput.checked) {
                    stopTrackIfNeeded();
                }
            });
            // Save delay on input
            delayInput.addEventListener('input', function() {
                var newDelay = parseInt(delayInput.value, 10) || 50;
                localStorage.setItem('weyno-autorev-delay', newDelay);
            });
            // Save trigger cells on input
            triggerCellsInput.addEventListener('input', function() {
                var val = parseInt(triggerCellsInput.value, 10);
                if (isNaN(val) || val < 1) val = 1;
                if (val > 256) val = 256;
                triggerCellsInput.value = val;
                localStorage.setItem('weyno-autorev-triggercells', val);
            });
            // Listen for hotkey globally
            document.addEventListener('keydown', function(e) {
                var key = localStorage.getItem('weyno-autorev-hotkey') || 'R';
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
                if (e.key.toUpperCase() === key) {
                    var enabled = localStorage.getItem('weyno-autorev-enabled') === 'true';
                    enabled = !enabled;
                    localStorage.setItem('weyno-autorev-enabled', enabled);
                    if (toggleInput) toggleInput.checked = enabled;
                    if (!enabled) {
                        stopTrackIfNeeded();
                    }
                }
            });
            function toggleMenu() {
                if (dropdownMenu.classList.contains('hidden')) {
                    dropdownMenu.classList.remove('hidden');
                    setTimeout(function() {
                        dropdownMenu.classList.remove('scale-y-0', 'opacity-0');
                        dropdownMenu.classList.add('scale-y-100', 'opacity-100');
                    }, 10);
                } else {
                    dropdownMenu.classList.add('scale-y-0', 'opacity-0');
                    setTimeout(function() {
                        dropdownMenu.classList.add('hidden');
                    }, 300);
                }
            }
            function switchTab(event) {
                var tabId = event.currentTarget.getAttribute('data-tab');
                tabButtons.forEach(function(btn){
                    btn.classList.remove('text-white');
                    btn.classList.add('text-gray-400');
                });
                event.currentTarget.classList.remove('text-gray-400');
                event.currentTarget.classList.add('text-white');
                var btnRect = event.currentTarget.getBoundingClientRect();
                var containerRect = event.currentTarget.parentElement.getBoundingClientRect();
                var leftPosition = btnRect.left - containerRect.left;
                var width = btnRect.width;
                tabIndicator.style.width = width + 'px';
                tabIndicator.style.transform = 'translateX(' + leftPosition + 'px)';
                tabContents.forEach(function(content){
                    content.classList.add('hidden');
                });
                wrapper.querySelector('#' + tabId + 'Content').classList.remove('hidden');
            }
            weynoBtn.addEventListener('click', toggleMenu);
            closeMenu.addEventListener('click', toggleMenu);
            tabButtons.forEach(function(btn){
                btn.addEventListener('click', switchTab);
            });
            document.addEventListener('click', function(event) {
                if (!weynoBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    if (!dropdownMenu.classList.contains('hidden')) {
                        toggleMenu();
                    }
                }
            });
            weynoBtn.addEventListener('mouseenter', function() {
                this.classList.add('glow-effect');
            });
            weynoBtn.addEventListener('mouseleave', function() {
                this.classList.remove('glow-effect');
            });
            var resizeHandle = wrapper.querySelector('#weyno-resize-handle');
            // Восстановить размер из localStorage
            var savedWidth = localStorage.getItem('weyno-menu-width');
            var savedHeight = localStorage.getItem('weyno-menu-height');
            if(savedWidth) dropdownMenu.style.width = savedWidth + 'px';
            if(savedHeight) dropdownMenu.style.height = savedHeight + 'px';
            // Resize logic
            var resizing = false, startX, startY, startW, startH;
            resizeHandle.addEventListener('mousedown', function(e) {
                e.preventDefault();
                resizing = true;
                startX = e.clientX;
                startY = e.clientY;
                startW = parseInt(window.getComputedStyle(dropdownMenu).width, 10);
                startH = parseInt(window.getComputedStyle(dropdownMenu).height, 10);
                document.body.style.userSelect = 'none';
            });
            document.addEventListener('mousemove', function(e) {
                if(!resizing) return;
                var newW = Math.max(260, startW + (e.clientX - startX));
                var newH = Math.max(320, startH + (e.clientY - startY));
                dropdownMenu.style.width = newW + 'px';
                dropdownMenu.style.height = newH + 'px';
            });
            document.addEventListener('mouseup', function(e) {
                if(resizing) {
                    resizing = false;
                    localStorage.setItem('weyno-menu-width', parseInt(dropdownMenu.style.width,10));
                    localStorage.setItem('weyno-menu-height', parseInt(dropdownMenu.style.height,10));
                    document.body.style.userSelect = '';
                }
            });
        })();
    }
}
// Попытка вставить сразу
insertWeynoButton();
// Если main-account появляется позже — отслеживаем через MutationObserver
var mainAccountObserver = new MutationObserver(function() {
    insertWeynoButton();
});
mainAccountObserver.observe(document.body, { childList: true, subtree: true });

function stopTrackIfNeeded() {
    if (window.trackInterval) {
        clearInterval(window.trackInterval);
        window.trackInterval = null;
        var counter = document.getElementById('cell-counter');
        if (counter) {
            counter.textContent = 'Tracked: None';
        }
        console.log('Track auto-stopped by Autorev toggle');
    }
}
})();
