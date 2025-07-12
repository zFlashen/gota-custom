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
    }
});
