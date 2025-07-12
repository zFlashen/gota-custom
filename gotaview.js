(function addClientButtonWhenReady() {
    const tryAdd = () => {
        const container = document.querySelector('.main-bottom-left');
        // Проверяем, что контейнер есть и кнопка еще не добавлена
        if (container && !document.getElementById('btn-client')) {
            var btn = document.createElement('button');
            btn.id = 'btn-client';
            btn.className = 'gota-btn bottom-btn';
            btn.style.color = 'rgb(255, 255, 255)';
            btn.style.borderColor = 'rgb(255, 255, 255)';
            btn.style.backgroundColor = 'rgb(68, 68, 68)';
            btn.innerText = 'Client';
            container.appendChild(btn);
            return true;
        }
        return false;
    };
    // Проверяем раз в 300мс до тех пор, пока кнопка не появится
    const interval = setInterval(() => {
        if (tryAdd()) clearInterval(interval);
    }, 300);
})();
