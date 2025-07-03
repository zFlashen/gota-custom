(function() {
    'use strict';

    // Пример кастомных стилей (можно расширять)
    const style = document.createElement('style');
    style.innerHTML = `
        .main-content.main-divider.main-panel button,
        .gota-btn,
        .keybinds-btn {
            background: linear-gradient(90deg, #6dd5fa 0%, #2980b9 100%);
            color: #f8fafd;
            border: none;
            border-radius: 8px;
            padding: 10px 22px;
            font-size: 1.08em;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(41, 128, 185, 0.15);
            transition: background 0.2s, color 0.2s, transform 0.1s;
            cursor: pointer;
            outline: none;
            margin: 4px 0;
        }
        .main-content.main-divider.main-panel button:hover,
        .gota-btn:hover,
        .keybinds-btn:hover {
            background: linear-gradient(90deg, #2980b9 0%, #6dd5fa 100%);
            color: #e3f6fd;
            transform: translateY(-2px) scale(1.04);
            box-shadow: 0 4px 16px rgba(41, 128, 185, 0.25);
        }
        .main-content.main-divider.main-panel button:active,
        .gota-btn:active,
        .keybinds-btn:active {
            background: #b2ebf2;
            color: #1565c0;
            transform: scale(0.98);
        }
        .options-container {
            background: rgba(255,255,255,0.13);
            border-radius: 22px;
            box-shadow: 0 8px 32px 0 rgba(41,128,185,0.22), 0 1.5px 8px 0 rgba(109,213,250,0.13);
            padding: 38px 28px 28px 28px;
            margin: 28px 0;
            max-width: 560px;
            backdrop-filter: blur(8px) saturate(1.2);
            border: 1.5px solid rgba(109,213,250,0.25);
            position: relative;
            overflow: hidden;
            animation: optionsFadeIn 0.7s cubic-bezier(.4,1.4,.6,1) 1;
        }
        @keyframes optionsFadeIn {
            from { opacity: 0; transform: translateY(30px) scale(0.98); }
            to   { opacity: 1; transform: none; }
        }
        .options-container::before {
            content: '';
            position: absolute;
            top: -60px; left: -60px; right: -60px; bottom: -60px;
            background: radial-gradient(circle at 30% 20%, rgba(109,213,250,0.22) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
        }
        .options-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 0;
            position: relative;
            z-index: 1;
        }
        .options-table th {
            background: linear-gradient(90deg, #6dd5fa 0%, #2980b9 100%);
            color: #fff;
            font-size: 1.22em;
            font-weight: 900;
            border-radius: 14px 14px 0 0;
            padding: 18px 0 14px 0;
            letter-spacing: 2px;
            text-shadow: 0 2px 12px rgba(41,128,185,0.22);
            box-shadow: 0 2px 12px rgba(109,213,250,0.13);
            border-bottom: 2px solid rgba(109,213,250,0.18);
        }
        .options-table td {
            background: rgba(255,255,255,0.16);
            color: #e3f6fd;
            font-size: 1.07em;
            border-radius: 12px;
            padding: 14px 12px;
            vertical-align: middle;
            font-weight: 500;
            box-shadow: 0 1px 8px rgba(109,213,250,0.09);
            transition: background 0.22s, color 0.18s, box-shadow 0.18s;
            position: relative;
        }
        .options-table tr {
            transition: box-shadow 0.18s, transform 0.18s;
        }
        .options-table tr:not(:last-child) td {
            border-bottom: 1.5px solid rgba(109,213,250,0.13);
        }
        .options-table tr:hover td {
            background: rgba(109,213,250,0.28);
            color: #fff;
            box-shadow: 0 6px 18px rgba(109,213,250,0.22);
            transform: scale(1.014);
        }
        .checkbox-options {
            appearance: none;
            width: 26px;
            height: 26px;
            border: 2.5px solid #6dd5fa;
            border-radius: 8px;
            background: #f8fafd;
            transition: border 0.22s, box-shadow 0.22s, background 0.22s;
            cursor: pointer;
            position: relative;
            vertical-align: middle;
            margin: 0 8px;
            box-shadow: 0 1px 6px rgba(109,213,250,0.13);
            outline: none;
            overflow: hidden;
        }
        .checkbox-options:focus {
            box-shadow: 0 0 0 3px #b2ebf2, 0 1px 6px rgba(109,213,250,0.13);
            border-color: #2980b9;
        }
        .checkbox-options:hover {
            border-color: #2980b9;
            background: #e3f6fd;
            box-shadow: 0 0 0 4px #b2ebf2;
        }
        .checkbox-options:active::after {
            animation: checkboxSplash 0.3s cubic-bezier(.4,1.4,.6,1);
        }
        @keyframes checkboxSplash {
            0% { opacity: 0; transform: scale(0.7); }
            60% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
        }
        .checkbox-options:checked {
            background: linear-gradient(90deg, #6dd5fa 0%, #2980b9 100%);
            border-color: #2980b9;
            box-shadow: 0 0 0 4px #b2ebf2;
        }
        .checkbox-options:checked::after {
            content: '\u2714';
            color: #fff;
            font-size: 1.3em;
            position: absolute;
            left: 3px;
            top: 0px;
            text-shadow: 0 2px 12px rgba(41,128,185,0.22);
            pointer-events: none;
        }
        .options-table td[colspan="3"] {
            font-weight: 700;
            letter-spacing: 1px;
            color: #b2ebf2;
            text-shadow: 0 1px 8px rgba(109,213,250,0.13);
            font-size: 1.09em;
        }
    `;
    document.head.appendChild(style);
})(); 
