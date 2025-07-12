window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.main-bottom-left');
    if (container) {
        var btn = document.createElement('button');
        btn.id = 'btn-client';
        btn.className = 'gota-btn bottom-btn';
        btn.style.color = 'rgb(255, 255, 255)';
        btn.style.borderColor = 'rgb(255, 255, 255)';
        btn.style.backgroundColor = 'rgb(68, 68, 68)';
        btn.innerText = 'Client';
        container.appendChild(btn);
    }
});
