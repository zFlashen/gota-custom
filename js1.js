! function () {
    function h(l) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (N) {
            return typeof N;
        } : function (N) {
            return N && "function" == typeof Symbol && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
        })(l);
    }

    function v() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function U(l) {
        if ("undefined" != typeof Symbol && null != l[Symbol.iterator] || null != l["@@iterator"]) {
            return Array.from(l);
        }
    }

    function e(l) {
        if (Array.isArray(l)) {
            return i(l);
        }
    }

    function K() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function k(l, N) {
        var I;
        if (l) {
            return "string" == typeof l ? i(l, N) : "Map" === (I = "Object" === (I = Object.prototype.toString.call(l)
                .slice(0x8, -0x1)) && l.constructor ? l.constructor.name : I) || "Set" === I ? Array.from(l) : "Arguments" === I || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I) ? i(l, N) : undefined;
        }
    }

    function i(l, N) {
        if (null == N || N > l.length) {
            N = l.length;
        }
        var I = 0x0;
        for (var R = new Array(N); I < N; I++) {
            R[I] = l[I];
        }
        return R;
    }

    function P(N, I) {
        var R = null == N ? null : "undefined" != typeof Symbol && N[Symbol.iterator] || N["@@iterator"];
        if (null != R) {
            var m;
            var T;
            var y;
            var E;
            var H = [];
            var q = true;
            var z = false;
            try {
                y = (R = R.call(N))
                    .next;
                if (0x0 === I) {
                    if (Object(R) !== R) {
                        return;
                    }
                    q = false;
                } else {
                    for (; !(q = (m = y.call(R))
                            .done) && (H.push(m.value), H.length !== I); q = true) {
                        ;
                    }
                }
            } catch (Q) {
                z = true;
                T = Q;
            } finally {
                try {
                    if (!q && null != R["return"] && (E = R["return"](), Object(E) !== E)) {
                        return;
                    }
                } finally {
                    if (z) {
                        throw T;
                    }
                }
            }
            return H;
        }
    }

    function g(l) {
        if (Array.isArray(l)) {
            return l;
        }
    }

    function J(l, N) {
        var I;
        var R = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            I = Object.getOwnPropertySymbols(l);
            if (N) {
                I = I.filter(function (m) {
                    return Object.getOwnPropertyDescriptor(l, m)
                        .enumerable;
                });
            }
            R.push.apply(R, I);
        }
        return R;
    }

    function G(l) {
        for (var N = 0x1; N < arguments.length; N++) {
            var I = null != arguments[N] ? arguments[N] : {};
            if (N % 0x2) {
                J(Object(I), true)
                    .forEach(function (R) {
                        Z(l, R, I[R]);
                    });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(l, Object.getOwnPropertyDescriptors(I));
            } else {
                J(Object(I))
                    .forEach(function (R) {
                        Object.defineProperty(l, R, Object.getOwnPropertyDescriptor(I, R));
                    });
            }
        }
        return l;
    }

    function Z(l, N, I) {
        if ((N = Y(N)) in l) {
            Object.defineProperty(l, N, {
                'value': I,
                'enumerable': true,
                'configurable': true,
                'writable': true
            });
        } else {
            l[N] = I;
        }
    }

    function Y(l) {
        l = x(l, "string");
        return "symbol" === h(l) ? l : String(l);
    }

    function x(l, N) {
        if ("object" !== h(l) || null === l) {
            return l;
        }
        var I = l[Symbol.toPrimitive];
        if (undefined === I) {
            return ("string" === N ? String : Number)(l);
        }
        I = I.call(l, N || "default");
        if ("object" !== h(I)) {
            return I;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }! function (l, N) {
        var I = l(N("d2luZG93"));
        var n = I.$;
        var R = I.document;
        var m;
        var T;
        if (null == I.fuckAdBlock) {
            I.aiptag = null != (m = I.aiptag) ? m : {};
            Object.defineProperty(I.aiptag, "settings", {
                'get': function () {
                    return T;
                },
                'set': function (y) {
                    y.iBtLoader = false;
                    T = y;
                }
            });
        }
        I.gajsn = function () {
            var h0;
            var h1 = I.Math;
            var h2 = new function () {
                this.t = false;
                this.i = "CP_0918_01";
                this.o = "https://gota.io/policies/privacy.html?v=" + this.i + "#cookies";
                this.l = n("#cc_acceptCookies");
                this.u = {
                    'p': "cookieConsent",
                    'm': "yes+" + this.i,
                    'k': 0x2da,
                    '$': "/web"
                };
                this._ = {
                    'S': n("#cookie-banner"),
                    'N': n("#declineCookies"),
                    'C': n("#acceptCookies"),
                    'O': false
                };
                this.H = function () {
                    this.M();
                    this.l.on("change", function () {
                        h2.F(n(this)
                            .prop("checked"));
                    });
                    if (this.D() === this.u.m) {
                        this.F(true);
                        this.A(false);
                    } else {
                        this.F(false);
                        this.A(true);
                    }
                };
                this.F = function (ex) {
                    this.t = ex;
                    I.aiptag.consented = ex;
                    this.l.prop("checked", ex);
                    if (ex) {
                        this.I();
                        this.A(false);
                        if (h2.t) {
                            var ex = I.localStorage.getItem("theme");
                            var el = I.localStorage.getItem("fixes_theme");
                            US(G(G({}, JSON.parse(null != ex ? ex : '{}')), JSON.parse(null != el ? el : '{}')));
                            var eN = I.localStorage.getItem("keybinds");
                            if (eN) {
                                eN = JSON.parse(eN);
                                for (var eI in sm) {
                                    var eR = eN[eI];
                                    if (Number.isInteger(eR)) {
                                        sm[eI] = eR;
                                    }
                                }
                            }
                            var em = I.localStorage.getItem("options");
                            if (em) {
                                em = JSON.parse(em);
                                for (var eT in sR)
                                    if (eT in em) {
                                        sR[eT] = em[eT];
                                    }
                            }
                            var ey;
                            var eE = I.localStorage.getItem("fixes_version");
                            var eH = '';
                            for (ey of [
                                    [0x14, "Added an option to change zoom delay.\n\nIncreased the default zoom delay to match Gota's zoom speed at 60fps.\n\nAdded an option for darker bot colors."],
                                    [0x15, "Fixed an issue where certain ad-blockers were causing a red error banner to appear.\n\nFixed an issue where Donut linesplits were not working properly after a recent Gota Fixes update."],
                                    [0x16, "Fixed a Gota bug causing a red error banner to appear whenever viewing a player's profile while logged out.\n\nUpdated to Gota version 3.6.4:\n- Nothing needed to be changed besides the version number."],
                                    [0x17, "Fixed an issue causing store advertisements to still show in chat every 30 minutes.\n\nAdded Gota's halloween theme."],
                                    [0x18, "Improved FPS while using the \"Show Coordinates\" option by about 15%.\n\nOther slight optimisations."],
                                    [0x19, "Added a linesplit keybind:\n\n- Pretty much 100% success rate, unless your mouse is too close to the center of your cell. Animation delay, camera delay or ping doesn't affect it.\n\n- Lineup time is as low as 50ms, depending on your ping.\n\n- Allows activation when you have more than 1 cell.\n\n- Allows splitting immediately after lining up.\n\n- Option for toggle or hold activation.\n\nPlease let me know if there are any issues. I can tweak it to take a little longer to lineup for more consistency."],
                                    [0x1a, "Fixed an issue causing the script to break when using Violentmonkey.\n\nFixed an issue causing no cells to appear after seeing the \"Allow Cookies\" prompt."],
                                    [0x1b, "Slightly increased linesplit line-up time for more consistency with large mass.\n\nFixed an issue causing degrading performance over long game sessions.\n\nFreezing mouse before and after linesplitting should now work as expected.\nNote: Freezing mouse quickly after pressing the linesplit key will cause your cell to freeze if it hasn't lined up yet."],
                                    [0x1c, "Hopefully fixed the Gota bug that causes auto respawn to break when dying immediately after pressing Play.\n\nFixed a Gota bug preventing the Esc key from closing social menus such as profile and friends list.\n\nFixed an issue causing the Spectate button to break if it was pressed while the player is still alive.\n\nAdded an option slider to change menu animation speed: Menu Delay.\nIt can be set to 0 if you want no animations."],
                                    [0x1d, "Slightly decreased the delay between switching tabs when multiboxing with capped FPS."],
                                    [0x1e, "Added options and keybinds to hide bot names, masses and skins.\n\nContext menu for names in the chat, leaderboard and party now take priority over cell context menus.\nIn other words, trying to right click a chat name when a cell is underneath will show the chat name context menu, as expected.\n\nThe Context Menu keybind now applies to chat, leaderboard and party, instead of just cells.\n\nAdded 5 more zoom level keybinds. Zoom difference between each level has decreased for finer control.\n\nAdded a theme option for map background image.\n\nFixed an issue preventing the Linesplit Mode option from saving after refreshing the page."],
                                    [0x1f, "Updated to Gota version 3.6.5:\n- Halloween theme.\n- Chat message history can be accessed using the up and down arrows when typing in chat.\n- Added score panel style option: Hidden, Vertical, Horizontal.\n- Added reconnect seconds option.\n- Added some (barely functional) mobile device compatibility.\n- Added Mass in score panel.\n- Moved Score next to Cells in score panel.\n\nFixed a Gota issue causing horizontal score panel to expand the party panel.\n\nFixed a minor Gota issue with the chat message history.\n\nFixed issues causing some scripts to break after the Gota update."],
                                    [0x20, "Fixed a Gota issue causing the player to not spawn in when connecting to a server using the Play button while logged in with silent login disabled."]
                                ]) {
                                var er = g(ey) || P(ey, 0x2) || k(ey, 0x2) || K();
                                var eq = er[0x0];
                                var er = er[0x1];
                                if (eE < eq) {
                                    eH += er + "\n\n";
                                }
                            }
                            if (0x0 !== eH.length) {
                                hM("Gota Fixes was updated!", eH += "\nIf you enjoy these updates, please consider donating to help me make more!");
                            }
                            I.localStorage.setItem("fixes_version", '32');
                            var ec;
                            var ez;
                            var eQ = I.localStorage.getItem("fixes_options");
                            var ea = I.localStorage.getItem("fixes_keybinds");
                            if (eQ) {
                                var eL;
                                var eF = (eQ = JSON.parse(eQ))
                                    .loadver;
                                if (null != eF && (eF & 0x1201) === 0x1201) {
                                    Uu.forEach(function (eD) {
                                        var eD = g(eD) || P(eD, 0x3) || k(eD, 0x3) || K();
                                        var eO = eD[0x0];
                                        var ej = eD[0x1];
                                        var eD = eD[0x2];
                                        sR[eD] = 0x1 === ej ? !!(eF & 0x1 << eO) : eF >> eO & (0x1 << ej) - 0x1;
                                    });
                                    delete eQ.loadver;
                                }
                                if (eQ.cHorizontalScorePanel) {
                                    sR.sScorePanel = '1';
                                }
                                for (eL in sy)
                                    if (eL in eQ) {
                                        sR[eL] = eQ[eL];
                                    }
                            }
                            if (ea) {
                                if (!("kZoom10" in (ea = JSON.parse(ea))) && "kZoom5" in ea) {
                                    Object.assign(ea, {
                                        'kZoom2': sm.kZoom2,
                                        'kZoom3': ea.kZoom2,
                                        'kZoom4': sm.kZoom4,
                                        'kZoom5': sm.kZoom5,
                                        'kZoom6': ea.kZoom3,
                                        'kZoom8': ea.kZoom4,
                                        'kZoom10': ea.kZoom5
                                    });
                                }
                                for (var eb in sE)
                                    if (eb in ea) {
                                        sm[eb] = ea[eb];
                                    }
                            }
                            for (ec in sm) {
                                var ed = n('#' + ec);
                                if (0x0 !== ed.length) {
                                    vj(ed);
                                }
                            }
                            for (ez of Object.entries(sR)) {
                                var eu = g(ez) || P(ez, 0x2) || k(ez, 0x2) || K();
                                var ef = eu[0x0];
                                var eS = eu[0x1];
                                var eB = n('#' + ef);
                                if (0x0 !== eB.length) {
                                    switch (ef.charAt(0x0)) {
                                    case 'c':
                                        if (true === eS) {
                                            eB.prop("checked", true);
                                            Ur(eB);
                                        }
                                        break;
                                    case 's':
                                        eB.val(eS);
                                        Uq(eB);
                                        break;
                                    case 'r':
                                        eB.val(eS);
                                        Uc(eB);
                                        break;
                                    case 'i':
                                        eB.val(eS);
                                        Uz(eB);
                                    }
                                }
                            }
                            sU.P.css("width", "360px");
                            sU.P.css("height", "250px");
                            UQ("cThemeEnabled");
                            if (null != (ex = I.localStorage.getItem("name"))) {
                                n("#name-box")
                                    .val(ex);
                            }
                            var eA = I.localStorage.getItem("subpanel");
                            if (eA) {
                                eA = JSON.parse(eA);
                                for (var eW in su)
                                    if (eW in eA) {
                                        su[eW] = eA[eW];
                                    }
                            }
                        }
                        U7();
                        n("#spNameColor")
                            .spectrum({
                                'color': su.nameColor,
                                'showAlpha': false,
                                'showInput': true,
                                'preferredFormat': "rgb"
                            });
                        n("#spChatColor")
                            .spectrum({
                                'showPaletteOnly': true,
                                'showPalette': true,
                                'color': e4[0x0],
                                'palette': e4
                            });
                        n("#spSkinName")
                            .val('');
                        n("#spLowerName")
                            .prop("checked", false);
                        n("#spEffect")
                            .val(0x0);
                        n("#spNameFont")
                            .val(0x0);
                        n("#btn-chg-ln")
                            .on("click", function () {
                                var eD;
                                var eO;
                                if (s3 && (eD = prompt("Enter new locked name!"))) {
                                    eO = "string" != typeof eD ? "Please enter a valid name!" : null;
                                    if (eD.length < 0x2) {
                                        eO = "Locked names must be 2 or more characters long.";
                                    }
                                    if (null != (eO = 0x14 < eD.length ? "Locked names must be 20 or less characters long." : eO)) {
                                        alert(eO);
                                    } else {
                                        eD = eD.trim();
                                        if (confirm("You are about to change your locked name to: '" + eD + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
                                            hH.T(sj.L(eD));
                                        }
                                    }
                                }
                            });
                        n("#btn-updateSP")
                            .on("click", U6);
                        n("#btn-subpanel-rules")
                            .on("click", function () {
                                su.rules = true;
                                U7();
                            });
                        n("#no_cookie_consent")
                            .hide();
                        if ("none" !== n("#account-loader")
                            .css("display")) {
                            n("#guest")
                                .hide();
                        } else {
                            n("#guest")
                                .show();
                        }
                    } else {
                        this.R();
                        if (null != hv.auth()
                            .currentUser) {
                            hv.auth()
                                .signOut()["catch"](function () {});
                        }
                        n("#authed")
                            .hide();
                        n("#account-loader")
                            .hide();
                        n("#guest")
                            .hide();
                        n("#no_cookie_consent")
                            .show();
                        this.A(true);
                    }
                };
                this.A = function (ex) {
                    if (ex) {
                        if (!this._.O) {
                            this.U();
                            this._.O = true;
                        }
                        this._.S.slideDown();
                    } else {
                        this._.S.slideUp();
                    }
                };
                this.U = function () {
                    this._.N.on("click", function () {
                        h2.F(false);
                        h2.A(false);
                    });
                    this._.C.on("click", function () {
                        h2.F(true);
                        h2.A(false);
                    });
                    n("#cookie-banner .description")
                        .append(" <a href=\"" + this.o + "\" target=\"_blank\">Our Cookie Policy!</a>");
                };
                this.I = function () {
                    (ex = new Date())
                    .setTime(ex.getTime() + 0x18 * this.u.k * 0x3c * 0x3c * 0x3e8);
                    var ex = "expires=" + ex.toUTCString();
                    R.cookie = this.u.p + '=' + this.u.m + ';' + ex + ";path=" + this.u.$ + ';';
                };
                this.R = function () {
                    R.cookie = this.u.p + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.u.$ + ';';
                };
                this.D = function () {
                    var ex = this.u.p + '=';
                    var el = decodeURIComponent(R.cookie)
                        .split(';');
                    for (var eN = 0x0; eN < el.length; eN++) {
                        for (var eI = el[eN];
                            ' ' === eI.charAt(0x0);) {
                            eI = eI.substring(0x1);
                        }
                        if (0x0 === eI.indexOf(ex)) {
                            return eI.substring(ex.length, eI.length);
                        }
                    }
                    return false;
                };
                this.M = function () {
                    var el = decodeURIComponent(R.cookie)
                        .split(';');
                    var eN = null;
                    for (var eI = 0x0; eI < el.length; eI++) {
                        for (var eR = el[eI];
                            ' ' === eR.charAt(0x0);) {
                            eR = eR.substring(0x1);
                        }
                        if (0x0 === eR.indexOf("cookieconsent_status=")) {
                            eN = eR.substring("cookieconsent_status=".length, eR.length);
                        }
                    }
                    if ("allow" === eN) {
                        this.I();
                    }
                    R.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;";
                };
            }();
            var h3 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
            var h4 = ['', "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", '', "BACK_SPACE", "TAB", '', '', "CLEAR", "ENTER", "ENTER_SPECIAL", '', "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", '', "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", 'UP', "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "OS_KEY", '', "CONTEXT_MENU", '', "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", '', '', '', '', '', '', '', '', "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", '', '', '', '', '', '', '', '', '', "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", '', '', '', '', "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", '', '', "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", '', "META", "ALTGR", '', "WIN_ICO_HELP", "WIN_ICO_00", '', "WIN_ICO_CLEAR", '', '', "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", '', "PA1", "WIN_OEM_CLEAR", ''];
            var h5 = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave"];
            for (h0 of "abcdefghijklmnopqrstuvwxyz") h5.push("letter_" + h0);
            for (var h6 = 0x0; h6 < 0xa; h6++) {
                h5.push("number_" + h6);
            }
            var h7;
            var h8 = [];
            var hh = [new UD("Random", "random", 0x0), new UD("Maximum Cells Upgrade", "extracells", 0x1), new UD("Extra Consumable Slot", "extraconsumable", 0x1), new UD("Merge", "merge", 0x2), new UD("Grow", "grow", 0x2), new UD("Speed", "speed", 0x2), new UD("Shield", "shield", 0x2), new UD("Virus", "spike", 0x3), new UD("Disrupt", "disrupt", 0x3), new UD("Teleport", "teleport", 0x3), new UD("Disrupt", "_disrupt", 0x4), new UD("Silver", "phoenix", 0x1), new UD("Consumable Shield", "_shield", 0x3), new UD("Magnet", "magnet", 0x2), new UD("Decay", "decay", 0x3), new UD("Decay", "_decay", 0x4)];
            var hs = I.PIXI;
            var hv = I.firebase;
            I.PIXI = null;
            var hw = {
                'THICK': 0x9,
                'THIN': 0x5,
                'NONE': 0x0
            };
            var hK = {
                'fontFamily': "Verdana",
                'fontWeight': "bold",
                'fontSize': 0x45,
                'fill': 0xffffff
            };
            var hk = new hs.Point(0.5, 0.5);
            var hP = new hs.Container();
            var hg = new hs.Sprite();
            hg.visible = false;
            var hJ = new hs.Graphics();
            hJ.visible = false;
            var hG = new hs.Container();
            var hZ = g(function () {
                class ex extends hs.ParticleContainer {
                    ['Y']() {
                        var el = h1.ceil(this.children.length / this._batchSize);
                        if (0x0 !== el) {
                            ++this._updateID;
                            for (var eN = 0x0; eN < el; ++eN) {
                                this._bufferUpdateIDs[eN] = this._updateID;
                            }
                        }
                    }
                }
                return [new ex(0x5dc, null, 0x4000, true), new hs.ParticleContainer(0x5dc, null, 0x4000, true)];
            }()) || P(function () {
                class ex extends hs.ParticleContainer {
                    ['Y']() {
                        var el = h1.ceil(this.children.length / this._batchSize);
                        if (0x0 !== el) {
                            ++this._updateID;
                            for (var eN = 0x0; eN < el; ++eN) {
                                this._bufferUpdateIDs[eN] = this._updateID;
                            }
                        }
                    }
                }
                return [new ex(0x5dc, null, 0x4000, true), new hs.ParticleContainer(0x5dc, null, 0x4000, true)];
            }(), 0x2) || k(function () {
                class ex extends hs.ParticleContainer {
                    ['Y']() {
                        var el = h1.ceil(this.children.length / this._batchSize);
                        if (0x0 !== el) {
                            ++this._updateID;
                            for (var eN = 0x0; eN < el; ++eN) {
                                this._bufferUpdateIDs[eN] = this._updateID;
                            }
                        }
                    }
                }
                return [new ex(0x5dc, null, 0x4000, true), new hs.ParticleContainer(0x5dc, null, 0x4000, true)];
            }(), 0x2) || K();
            var hY = hZ[0x0];
            var hx = hZ[0x1];
            var hl = new hs.Container();
            var hN = new hs.Sprite();
            var hZ = function (ex) {
                var el = R.createElement("canvas");
                var eN = el.getContext('2d');
                el.width = el.height = 0x2 * ex;
                eN.beginPath();
                eN.arc(ex, ex, ex, 0x0, hs.PI_2);
                eN.fillStyle = "#fff";
                eN.fill();
                (ex = hs.Texture.from(el))
                .defaultAnchor = hk;
                return ex;
            };
            var hI = hZ(0x100);
            var hR = hZ(0x6);
            hG.addChild(hg, hJ, hY, hx, hl);
            hP.addChild(hG, hN);
            var hT;
            var hy;
            var hE;
            var hH;
            var hr;
            var hq;
            var hc;
            var hz;
            var hQ;
            var ha;
            var hL;
            var hF;
            var hb;
            var hd;
            var hu;
            var hf;
            var hS;
            var hB;
            var hA;
            var hW;
            var hD;
            var hO;
            var hj;
            var hC;
            var hp;
            var hV;
            var hX;
            var ho;
            var hM;
            var s0;
            var s1;
            var s2 = '';
            var s3 = false;
            var s4 = null;
            var s5 = null;
            var s6 = false;
            var s7 = {
                'V': [],
                'K': [],
                'Z': [],
                'X': []
            };
            var s8 = [];
            var s9 = false;
            var sh = null;
            var ss = true;
            var sv = 0x2 * h1.PI;
            var sU = {};
            var sw = new hv.auth.GoogleAuthProvider();
            var sk = {
                'q': "halloween2023",
                'ee': [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
                'te': '',
                'ie': 0x192ea2bec00,
                'ne': {
                    'se': hk,
                    'ae': {
                        'oe': 0x1,
                        're': 0x1
                    }
                }
            };
            sk.ce = Date.now() < 0x192ea2bec00;
            hv.initializeApp({
                'apiKey': "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
                'authDomain': "accounts.gota.io",
                'databaseURL': "https://gota-io.firebaseio.com",
                'projectId': "gota-io",
                'storageBucket': "gota-io.appspot.com",
                'messagingSenderId': "570450309042",
                'appId': "1:570450309042:web:380ab6c94d44de2f"
            });
            var sP = {};
            var sg = {};
            var sJ = {
                'le': 0x0,
                'de': 0x0,
                'he': 0x0,
                'ue': 0x1
            };
            var sG = [{
                'name': "All",
                'flags': 0xff,
                'maxMessages': 0x64
            }, {
                'name': "Party",
                'flags': 0x2,
                'maxMessages': 0x64
            }];
            var sZ = 0xfa0;
            var sY = 0xfa0;
            var sx = {
                'pe': 0x1,
                'fe': 0xf,
                'me': 0xb,
                'ge': 0x1,
                'be': function (ex, el) {
                    sR[ex] = el;
                    var eN = 0x3e8 * (0xf - el) + 0x2ee;
                    switch (ex) {
                    case "rRainbowNameSpeed":
                        sZ = eN;
                        break;
                    case "rRainbowCellSpeed":
                        sY = eN;
                    }
                }
            };
            var sl = 0x0;
            var sN = [];
            var sI = -0x1;
            var sR = {
                'cDisableAA': false,
                'cAutoRespawn': false,
                'cHideId': false,
                'sRenderType': "AUTO",
                'sTextOutlines': "NONE",
                'sQuality': "ULTRA",
                'sMassType': "DEFAULT",
                'cTransCells': false,
                'cShowBorder': false,
                'cSilentLogin': false,
                'cHideChat': false,
                'cHideMinimap': false,
                'sScorePanel': '2',
                'cShowCoordinates': false,
                'cHideFood': false,
                'cColoredPing': false,
                'cColoredCellCount': false,
                'cThemeEnabled': false,
                'cDisableAutoZoom': false,
                'cAutoDecline': false,
                'cDisableEventSkins': false,
                'cResizableChat': false,
                'cDisableAutoNameHiding': false,
                'cDisableAutoFoodHiding': false,
                'cDisablePersistEjectMass': false,
                'iChatWidth': "360px",
                'iChatHeight': "250px",
                'rUiScale': 0x1,
                'rReconnectPeriod': 0x5,
                'rAnimationDelay': 0x5a,
                'rViewDistance': 0x64,
                '_ChatTabs': JSON.parse(JSON.stringify(sG))
            };
            var sm = {
                'kContextMenu': vC("mouse3"),
                'kEjectMass': vC('w'),
                'kToggleSpec': vC('q'),
                'kSplit': vC("space"),
                'kDoubleSplit': -0x1,
                'kTripleSplit': -0x1,
                'kQuadSplit': -0x1,
                'kHexaSplit': -0x1,
                'kFreezeMouse': -0x1
            };
            var sT = Object.freeze({
                'ke': vC("enter"),
                '$e': vC("escape"),
                'zoomIn': vC('up'),
                'zoomOut': vC("down"),
                'chatInputHistoryUp': vC('up'),
                'chatInputHistoryDown': vC("down"),
                'ye': vC("escape")
            });
            var sy = {
                'cHideLockedNames': false,
                'cHideOwnName': false,
                'cHideFriendNames': false,
                'cHideBotNames': false,
                'cHideEnemyNames': false,
                'cHideOwnMass': true,
                'cHideFriendMasses': true,
                'cHideBotMasses': true,
                'cHideEnemyMasses': true,
                'cHideOwnSkin': false,
                'cHideFriendSkins': false,
                'cHideBotSkins': false,
                'cHideEnemySkins': false,
                'cDarkerBotColors': true,
                'cUncapFPS': false,
                'cSmoothCells': true,
                'sLinesplitMode': "TOGGLE",
                'cHideLeaderboardHeader': false,
                'cHidePartyHeader': false,
                'cEnableSounds': true,
                'iSplitSound': '',
                'iEjectSound': '',
                'sCameraFocus': "CENTER",
                'rCameraDelay': 0x0,
                'rZoomDelay': 0xa5,
                'rMenuDelay': 0x1f4,
                'spRainbowName': false,
                'spRainbowCell': false,
                'rRainbowNameSpeed': 0xb,
                'rRainbowCellSpeed': 0xb
            };
            var sE = {
                'kLinesplit': -0x1,
                'kPentaSplit': -0x1,
                'kSeptiSplit': -0x1,
                'kOctoSplit': -0x1,
                'kCycleNames': vC('n'),
                'kCycleMasses': vC('m'),
                'kCycleSkins': vC('k'),
                'kHideOwnName': -0x1,
                'kHideFriendNames': -0x1,
                'kHideBotNames': -0x1,
                'kHideEnemyNames': -0x1,
                'kHideOwnMass': -0x1,
                'kHideFriendMasses': -0x1,
                'kHideBotMasses': -0x1,
                'kHideEnemyMasses': -0x1,
                'kHideOwnSkin': -0x1,
                'kHideFriendSkins': -0x1,
                'kHideBotSkins': -0x1,
                'kHideEnemySkins': -0x1
            };
            var sH = {
                'iMapBackground': ''
            };
            var sr = function () {
                var ex = {};
                for (var el = 0x1; el <= 0xa; el++) {
                    var eN = "kZoom" + el;
                    sE[eN] = -0x1;
                    ex[eN] = {
                        've': "Zoom level " + el,
                        'we': 0x5 * 0.6993157867655625 ** (el - 0x1)
                    };
                }
                return ex;
            }();
            var sq = new Map();
            var sc = false;
            var sz = Object.assign({}, sm);
            var sa = undefined !== I.ontouchstart;
            var sL = {
                'version': 0x2,
                'uiForegroundColor': "rgb(255, 255, 255)",
                'uiBackgroundColor': "rgba(22, 22, 22, 0.8)",
                'uiBorderColor': "rgba(255, 255, 255, .2)",
                'uiMenuBackgroundColor': "#2A2A2A",
                'uiMenuTitleBackgroundColor': "#404040",
                'uiMenuSubBackgroundColor': "#363636",
                'uiMenuSubBackground2Color': "#404040",
                'uiButtonColor': "#444444",
                'uiGameBackgroundColor': "#121212",
                'uiGameBorderColor': "#ff0000",
                'uiLeaderboardHighlightSelf': "#ffaaaa",
                'uiLeaderboardHighlightParty': "#ffff00",
                'uiPartyLeaderColor': "#00ffff",
                'uiGameColorSuccess': "#00ff00",
                'uiGameColorWarning': "#ffff00",
                'uiGameColorError': "#ff0000",
                '_FoodColors': [],
                'aCustomBackground': '',
                'aCustomSpike': '',
                'aCustomMother': '',
                'rBorderSize': 0x20,
                'rBackgroundOpacity': 0x1
            };
            var sF = G({}, sL);
            var sb = {
                '_e': null,
                'Se': null
            };
            Object.assign(sR, sy);
            Object.assign(sm, sE);
            Object.assign(sL, sH);
            var sd = [];
            var su = {
                'rules': false,
                'nameColor': {
                    'r': 0x0,
                    'g': 0xff,
                    'b': 0xff
                },
                'chatColor': 0x0,
                'lowerName': false,
                'skinName': '',
                'effect': 0x0,
                'nameFont': 0x0
            };
            var sf = null;
            var sS = 0x0;
            var sB = null;
            var sA = I.atob("YlZheHkzYVdEd2NDZ3l4YW1kQkxadFVSMWVEMg==");
            var sD = I.performance.now.bind(I.performance);
            var sO = {
                'Ne': null,
                'Ce': function () {},
                'Ee': function () {},
                'Oe': function () {},
                'xe': function () {},
                'He': function () {},
                'Me': function () {},
                'Fe': function () {},
                'De': function () {}
            };
            var sj = {
                'Ae': function () {
                    var ex = "Gota Web " + I.version;
                    var el = new vN(0x1 + ex.length + 0x1 + 0x1);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0xff);
                    eN.setUint8(0x1, 0x6);
                    vz(0x2, eN, ex);
                    return el;
                },
                'Ie': function (ex) {
                    var el = new vN(0x2 + 0x2 * (ex.length + 0x1));
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x0);
                    vQ(0x1, eN, ex);
                    return el;
                },
                'Pe': function (ex) {
                    var el = new vN(0x1);
                    new vl(el)
                        .setUint8(0x0, ex);
                    return el;
                },
                'Te': function (ex, el) {
                    var eN = new vN(0x9);
                    var eI = new vl(eN);
                    eI.setUint8(0x0, 0x10);
                    eI.setInt32(0x1, ex, true);
                    eI.setInt32(0x5, el, true);
                    return eN;
                },
                'Le': function (ex) {
                    var el = new vN(0x1);
                    new vl(el)
                        .setUint8(0x0, ex ? 0x3 : 0x4);
                    return el;
                },
                'Re': function () {
                    var ex = new vN(0x1);
                    new vl(ex)
                        .setUint8(0x0, 0x47);
                    return ex;
                },
                'Ue': function (ex) {
                    var el = new vN(0x3);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x1);
                    if (ex) {
                        eN.setUint16(0x1, ex, true);
                    }
                    return el;
                },
                'Be': function (ex, el) {
                    var eN = new vN(0x2 + 0x2 * (ex.length + 0x1));
                    var eI = new vl(eN);
                    eI.setUint8(0x0, 0x48);
                    eI.setUint8(0x1, el);
                    vQ(0x2, eI, ex);
                    return eN;
                },
                'je': function (ex) {
                    var el = new vN(0x2);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x29);
                    eN.setUint8(0x1, ex ? 0x1 : 0x0);
                    return el;
                },
                'Ge': function (ex, el) {
                    var eN = new vN(0x6);
                    var eI = new vl(eN);
                    eI.setUint8(0x0, 0x28);
                    eI.setUint8(0x1, ex);
                    eI.setUint32(0x2, el, true);
                    return eN;
                },
                'ze': function (ex) {
                    var el = new vN(0x1 + ex.length + 0x1);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x2a);
                    vz(0x1, eN, ex);
                    return el;
                },
                'We': function (ex) {
                    var el = new vN(0x3);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x67);
                    eN.setUint16(0x1, ex, true);
                    return el;
                },
                'Je': function (ex, el) {
                    var eN = new vN(0x5 + 0x2 * (el.length + 0x1));
                    var eI = new vl(eN);
                    eI.setUint8(0x0, 0x49);
                    eI.setUint32(0x1, ex, true);
                    vQ(0x5, eI, el);
                    return eN;
                },
                'Ye': function () {
                    var ex = new vN(0x8 + (''.length + 0x1));
                    var el = new vl(ex);
                    el.setUint8(0x0, 0xa);
                    el.setUint8(0x1, su.nameColor.r);
                    el.setUint8(0x2, su.nameColor.g);
                    el.setUint8(0x3, su.nameColor.b);
                    el.setUint8(0x4, 0x0);
                    el.setUint8(0x5, 0x0);
                    el.setUint8(0x6, 0x0);
                    vz(0x7, el, '');
                    el.setUint8(0x8 + ''.length, 0x0);
                    return ex;
                },
                'L': function (ex) {
                    var el = new vN(0x1 + (ex.length + 0x1));
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0xb);
                    vz(0x1, eN, ex);
                    return el;
                },
                'Ve': function () {
                    var ex = new vN(0x3);
                    var el = new vl(ex);
                    el.setUint8(0x0, 0x68);
                    el.setUint16(0x1, 0x64, true);
                    return ex;
                },
                'Ke': function (ex) {
                    var el = new vN(0x5);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x50);
                    eN.setUint8(0x1, ex);
                    eN.setUint8(0x2, 0x0);
                    eN.setUint16(0x3, 0x0);
                    return el;
                },
                'Ze': function (ex) {
                    var el = new vN(0x2);
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x5a);
                    eN.setUint8(0x1, ex);
                    return el;
                },
                'Qe': function () {
                    var ex = new vN(0x1);
                    new vl(ex)
                        .setUint8(0x0, 0x51);
                    return ex;
                },
                'Xe': function () {
                    var ex = new vN(0x2);
                    new vl(ex)
                        .setUint8(0x0, 0x5d);
                    return ex;
                },
                'qe': function (ex, el) {
                    var eN = new vN(0x5 + 0x2 * (el.length + 0x1));
                    var eI = new vl(eN);
                    eI.setUint8(0x0, 0x5e);
                    eI.setUint32(0x1, ex, true);
                    vQ(0x5, eI, el);
                    return eN;
                },
                'et': function (ex) {
                    var el = new vN(0x1 + (ex.length + 0x1));
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x64);
                    vz(0x1, eN, ex);
                    return el;
                },
                'tt': function (ex) {
                    var el = new vN(0x1 + (ex.length + 0x1));
                    var eN = new vl(el);
                    eN.setUint8(0x0, 0x65);
                    vz(0x1, eN, ex);
                    return el;
                },
                'it': function (ex, el, eN) {
                    var eI = new vN(0x4);
                    var eR = new vl(eI);
                    eR.setUint8(0x0, 0x5b);
                    eR.setUint8(0x1, ex);
                    if (ex === 0x3 || ex === 0x7) {
                        eR.setUint16(0x2, el, false);
                    } else if (ex === 0xb) {
                        eR.setInt16(0x2, el, false);
                    } else {
                        eR.setUint8(0x2, el);
                        eR.setUint8(0x3, eN);
                    }
                    return eI;
                },
                'rt': function (ex, el) {
                    var eN = new vN(0x2 + 0x2 * (el.length + 0x1));
                    var eI = new vl(eN);
                    eI.setUint8(0x0, 0x5c);
                    eI.setUint8(0x1, ex);
                    vQ(0x2, eI, el);
                    return eN;
                }
            };

            function sC(ex) {
                hT = R.getElementById("canvas");
                hy = R.getElementById("minimap-canvas");
                hE = hy.getContext('2d');
                hF = n("#main");
                hb = n("#party-panel");
                hd = n(".hud-panel");
                hX = n("#score-panel");
                hf = n("#main-scrimmage");
                hS = n("#context-menu");
                hB = n("#chat-input");
                hu = n("#leaderboard-header");
                hV = n("#scrimmage-custom");
                Object.assign(sU, {
                    'ct': n("#pMouse"),
                    'lt': n("#pScore span")[0x0],
                    'dt': n("#pMass span")[0x0],
                    'ht': n("#pPing span")[0x0],
                    'ut': n("#pCells span")[0x0],
                    'ft': n("#pFps span")[0x0],
                    'gt': n("#extra-reset-timer"),
                    'bt': n("#resetTime"),
                    'kt': n("#extra-respawn-cooldown"),
                    '$t': n("#respawnCooldown"),
                    'yt': n("#spectatorCount"),
                    'vt': 0x0,
                    'wt': n("#minimap-coordinates"),
                    '_t': hb,
                    'St': n("#social-online-friends-count"),
                    'Nt': n("#popup-profile"),
                    'Ct': n("#popup-account-username"),
                    'Et': n("#scrimmage-map"),
                    'Ot': n("#scrimmage-mapmode"),
                    'xt': n("#scrimmage-mapsize"),
                    'Ht': n("#scrimmage-startmass"),
                    'P': n("#chat-panel"),
                    'Mt': n("#touch_controls")
                });
                n("td:contains(Disable Auto Name Hiding)")
                    .text("Disable Auto Mass Hiding");
                n("#cShowMass")
                    .parents('tr')
                    .hide();
                n("#sShowNames")
                    .parents('tr')
                    .hide();
                n("#sShowSkins")
                    .parents('tr')
                    .hide();
                n("#pServer")
                    .hide();
                n("#cHideServer")
                    .parents('tr')
                    .hide();
                n("#main-options table")
                    .prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Options</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Hides all locked name features (besides cell colors) of other players.\" data-balloon-pos=\"down\" data-balloon-length=\"fit\">\n              Hide Locked Name Features\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLockedNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Name</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnName\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Mass</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnMass\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Masses</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Skin</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnSkin\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemySkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Darker Bot Colors</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cDarkerBotColors\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Uncap FPS</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cUncapFPS\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Small cells will have smoother skins and edges, but cells and names may appear to be blurry.\" data-balloon-pos=\"up\" data-balloon-length=\"fit\">\n              Smooth Cells\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cSmoothCells\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Linesplit Mode</td>\n            <td>\n              <select id=\"sLinesplitMode\">\n                <option value=\"TOGGLE\">Toggle</option>\n                <option value=\"HOLD\">Hold</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Leaderboard/Queue Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLeaderboardHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Party Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHidePartyHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Enable Sounds</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cEnableSounds\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Split Sound: </td>\n            <td><input id=\"iSplitSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Eject Sound: </td>\n            <td><input id=\"iEjectSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Camera Focus</td>\n            <td>\n              <select id=\"sCameraFocus\">\n                <option value=\"CENTER\">Center</option>\n                <option value=\"MASS\">Biggest Cells</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 0\" data-balloon-pos=\"up\">Camera Delay: <input class=\"options-input\" id=\"cameraDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rCameraDelay\" min=\"0\" max=\"250\" value=\"0\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 165\" data-balloon-pos=\"up\">Zoom Delay: <input class=\"options-input\" id=\"zoomDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rZoomDelay\" min=\"0\" max=\"400\" value=\"165\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 500\" data-balloon-pos=\"up\">Menu Delay: <input class=\"options-input\" id=\"menuDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rMenuDelay\" min=\"0\" max=\"1000\" value=\"500\" step=\"5\" /></td>\n          </tr>\n        </tbody>\n      ");
                var el;
                var eN = "\n        <thead>\n          <th colspan=\"4\">Gota Fixes Keybinds</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Linesplit</td>\n          <td><button id=\"kLinesplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Penta Split (32x)</td>\n          <td><button id=\"kPentaSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Septi Split (128x)</td>\n          <td><button id=\"kSeptiSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Octo Split (256x)</td>\n          <td><button id=\"kOctoSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Names</td>\n          <td><button id=\"kCycleNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Masses</td>\n          <td><button id=\"kCycleMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Skins</td>\n          <td><button id=\"kCycleSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Name</td>\n          <td><button id=\"kHideOwnName\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Names</td>\n          <td><button id=\"kHideFriendNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Names</td>\n          <td><button id=\"kHideBotNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Names</td>\n          <td><button id=\"kHideEnemyNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Mass</td>\n          <td><button id=\"kHideOwnMass\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Masses</td>\n          <td><button id=\"kHideFriendMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Masses</td>\n          <td><button id=\"kHideBotMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Masses (Autosplit)</td>\n          <td><button id=\"kHideEnemyMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Skin</td>\n          <td><button id=\"kHideOwnSkin\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Skins</td>\n          <td><button id=\"kHideFriendSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Skins</td>\n          <td><button id=\"kHideBotSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Skins</td>\n          <td><button id=\"kHideEnemySkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n      ";
                for (el of Object.entries(sr)) {
                    var eI = g(el) || P(el, 0x2) || k(el, 0x2) || K();
                    var eR = eI[0x0];
                    var eI = eI[0x1];
                    var em = eI.ve;
                    var eI = eI.we;
                    eN += "<tr>\n            <td colSpan=\"3\">" + em + "</td>\n            <td><button id=\"" + eR + "\" class=\"keybinds-btn\"></button></td>\n          </tr>";
                    sr[eR] = eI;
                }
                n("#main-hotkeys table")
                    .prepend(eN);
                n("#main-themes table")
                    .prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Theme</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Map Background: </td>\n          <td><input id=\"iMapBackground\" class=\"input-option\" placeholder=\"https://example.png\" /></td>\n        </tr>\n      ");
                n(".main-content, .main-right")
                    .css("height", "530px");
                n(".server-table tbody")
                    .css("height", "421px");
                n(".options-container")
                    .css("height", "480px");
                n("#server-content")
                    .css("height", "456px");
                n("#main-rb")
                    .css("height", "340px");
                n(".main-rb-title")
                    .css("padding", "10px");
                n("#main-account")
                    .css("height", "180px");
                n(".policyLinks")
                    .css({
                        'flex-wrap': "wrap"
                    })
                    .append("<span style=\"text-align: center\">If you enjoy using Gota Fixes, please consider donating to support the developer.</span>", n("<a href=\"https://ko-fi.com/camlan\" target=\"_blank\">Donate</a>")
                        .css({
                            'border-radius': "15px",
                            'background-color': "#00b9fe",
                            'padding': "0 18px",
                            'font-size': "16px",
                            'text-decoration': "none",
                            'font-weight': 0x258,
                            'height': "26px",
                            'line-height': "25px",
                            'margin-top': "3px"
                        }));
                Object.assign(n("#account-shop")[0x0].dataset, {
                    'balloon': "Use code \"camlan\" in the \"Support A Creator\" section at checkout for a 10% discount!",
                    'balloonPos': "left",
                    'balloonLength': "medium"
                });
                n("#rAnimationDelay")
                    .attr("min", 0x1);
                var eT;
                var ey;
                var eE;
                var eH;
                var er;
                var eq = R.createElement("style");

                function ec(w4, w5, w6) {
                    var w7 = w6.pe;
                    var w8 = w6.fe;
                    var w9 = w6.me;
                    var wh = w6.ge;
                    var ws = w6.be;
                    var w6 = w5;
                    var w5 = sR[w4];
                    var wv = (w6 = n("\n          <tr>\n            <td style=\"overflow-x: visible\" data-balloon=\"Default: " + w9 + "\" data-balloon-pos=\"up\">" + w6 + ": <input class=\"options-input\" style=\"float: none;\" value=\"" + w5 + "\"></td>\n            <td><input type=\"range\" min=\"" + w7 + "\" max=\"" + w8 + "\" value=\"" + w5 + "\" step=\"" + wh + "\"/></td>\n          </tr>\n        "))
                        .find(".options-input");
                    var wU = w6.find("[type=range]");
                    wv.on("change", function () {
                        var ww = parseInt(wv.val());
                        var ww = h1.min(h1.max(ww = isNaN(ww) ? w9 : ww, w7), w8);
                        wv.val(ww);
                        wU.val(ww);
                        ws(w4, ww);
                    });
                    wU.on("input", function () {
                        var ww = parseInt(wU.val());
                        wv.val(ww);
                        ws(w4, ww);
                    });
                    ws(w4, w5);
                    return w6;
                }

                function ez(w4) {
                    if (w4 && !sB) {
                        sB = n("<thead><th colspan=\"2\">Gota Fixes</th></thead>")
                            .add(n("<tbody>")
                                .append("<tr>\n                  <td>Rainbow Name</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowName\"></td>\n                </tr>", ec("rRainbowNameSpeed", "Rainbow Name Speed", sx), "<tr>\n                  <td>Rainbow Cell</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowCell\"></td>\n                </tr>", ec("rRainbowCellSpeed", "Rainbow Cell Speed", sx)));
                        eb.append(sB);
                        eb.find("[type=checkbox]")
                            .change(function () {
                                Ur(n(this));
                            })
                            .prop("checked", function () {
                                return sR[this.id];
                            });
                        eb.find("[type=range]")
                            .css("width", "110px");
                    } else if (!w4) {
                        sR.spRainbowName = sR.spRainbowCell = false;
                        if (null != (w4 = hH.Dt)) {
                            w4.Ft();
                        }
                        if (sB) {
                            sB.remove();
                            sB = null;
                        }
                    }
                    U7();
                }
                eq.innerHTML = "\n        .input-option {\n          border: none;\n          border-radius: 5px;\n        }\n      ";
                eq.innerHTML += "\n          .popup-container {\n            width: initial;\n            max-width: 640px;\n            min-width: 320px;\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            align-content: center;\n          }\n\n          #popup-party-code {\n            width: 320px;\n          }\n\n          .alert-scroller {\n            max-height: 450px;\n            margin-bottom: 5px;\n            overflow-y: auto;\n          }\n\n          .alert-scroller::-webkit-scrollbar {\n            width: 6px\n          }\n          \n          .alert-scroller::-webkit-scrollbar-thumb {\n            background-color: #a9a9a9;\n            border-radius: 4px\n          }\n        ";
                eT = n("<div class=\"popup-panel\" style=\"display: none\">");
                ey = n("<span class=\"title-text menu-title\">");
                eE = n("<div style=\"font: 12pt open sans; white-space: pre-line; margin: 5px 16px\">");
                eH = n("<button class=\"gota-btn\" style=\"margin: 5px auto; display: block\">Dismiss</button>");
                er = n("<div class=\"alert-scroller\">")
                    .append(eE, eH);
                eT.append(ey, er);
                n(".popup-container")
                    .append(eT);
                hM = function (w4, w5) {
                    var w6;
                    if (!eT.is(":visible")) {
                        if (w6 = hF.is(":visible")) {
                            UT(hF);
                        }
                        ey.text(w4);
                        eE.html(w5);
                        eH.one("click", function () {
                            UT(eT);
                            if (w6) {
                                Um(hF);
                            }
                        });
                        Um(eT);
                    }
                };
                var eQ;
                var ea;
                var eL;
                var eF;
                var eb = n("#subpanel-content > table");

                function ed() {
                    if (hH && hA) {
                        hA = false;
                        hW = Date.now();
                        hH.T(sj.Le(false));
                    }
                }
                s0 = eb.children();
                hv.auth()
                    .onAuthStateChanged(function (w4) {
                        if (w4) {
                            hv.database()
                                .ref("/friendships/" + w4.uid)
                                .on("value", function (w5) {
                                    ez(w5 = (w5 = w5.val()) && Object.entries(w5)
                                        .some(function (w6) {
                                            var w6 = g(w6) || P(w6, 0x2) || k(w6, 0x2) || K();
                                            var w7 = w6[0x0];
                                            var w6 = w6[0x1];
                                            return w7 === sA && w6;
                                        }));
                                });
                        } else {
                            ez(false);
                        }
                    });
                eq.innerHTML += "\n        #party-panel { width: max-content }\n      ";
                eq.innerHTML += "\n        #leaderboard-panel { padding: 5px 0 }\n        #leaderboard-panel > * { margin: 0 }\n      ";
                eq.innerHTML += "\n        #leaderboard-canvas { pointer-events: auto }\n      ";
                eq.innerHTML += "\n        #minimap-coordinates { color: unset }\n      ";
                R.head.appendChild(eq);
                ea = hu[0x0];
                s1 = function (w4) {
                    if (w4 !== ea.textContent) {
                        ea.textContent = w4;
                    }
                };
                hd.hide();
                hA = false;
                hW = 0x0;
                if (sa) {
                    I.FastClick.attach(R.body);
                    I.nipplejs.create({
                            'zone': n("#joystick")[0x0],
                            'mode': "static",
                            'position': {
                                'left': "10%",
                                'bottom': "20%"
                            },
                            'color': "red",
                            'size': 0x64,
                            'restOpacity': 0.5,
                            'dynamicPage': true
                        })
                        .on("move", function (w4, w5) {
                            var w6 = w5.distance;
                            var w7 = w5.force;
                            var w5 = w5.angle;
                            hH.At = w6 * w7 * h1.cos(w5.radian) + I.innerWidth / 0x2;
                            hH.It = w6 * w7 * h1.sin(-w5.radian) + I.innerHeight / 0x2;
                        });
                    sR.cHideChat = true;
                    sR.cHideLeaderboard = true;
                    eQ = function (w4) {
                        return hH.Pt(sm[w4]);
                    };
                    n(".touch_button")
                        .on("touchstart touchend", function (w4) {
                            var w5 = w4.type;
                            w4.target.style.opacity = "touchstart" === w5 ? 0x1 : 0.3;
                        });
                    n("#button_split")
                        .on("touchstart", function () {
                            return eQ("kSplit");
                        });
                    n("#button_double")
                        .on("touchstart", function () {
                            return eQ("kDoubleSplit");
                        });
                    n("#button_triple")
                        .on("touchstart", function () {
                            return eQ("kTripleSplit");
                        });
                    n("#button_eject")
                        .on("touchstart", function () {
                            return eQ("kEjectMass");
                        })
                        .on("touchend", ed);
                } else {
                    I.onmousemove = function (w4) {
                        hH.At = w4.clientX;
                        hH.It = w4.clientY;
                    };
                    I.onmousedown = function (w4) {
                        var w5 = w4.button + 0x1;
                        if (sc) {
                            vO(w5);
                            w4.preventDefault();
                        } else if (!n("input")
                            .is(":focus")) {
                            hH.Pt(w5);
                        }
                    };
                    I.onmouseup = function (w4) {
                        if ((w4 = w4.button + 0x1) === sm.kEjectMass) {
                            ed();
                        } else if (w4 === sm.kLinesplit) {
                            sO.xe();
                        }
                    };
                    I.onwheel = function (w4) {
                        if (!(hF.is(":visible") && "hide" !== UN.get(hF.selector) || "canvas" !== w4.target.id)) {
                            w4 = w4.wheelDelta || -0x1 * w4.deltaY;
                            hH.Tt *= 0x0 < w4 ? 1.1 : 0.9;
                        }
                    };
                }
                I.onkeydown = function (w4) {
                    var w5 = w4.which || w4.keyCode || w4.charCode;
                    if (!(w5 <= 0x5)) {
                        if (sc) {
                            vO(w5);
                            w4.preventDefault();
                        } else if (!n("input")
                            .is(":focus")) {
                            hH.Pt(w5);
                        }
                    }
                };
                I.onkeyup = function (w4) {
                    if ((w4 = w4.which || w4.keyCode || w4.charCode) === sm.kEjectMass) {
                        ed();
                    } else if (w4 === sm.kLinesplit) {
                        sO.xe();
                    }
                };
                I.addEventListener("blur", function () {});
                R.addEventListener("contextmenu", function (w4) {
                    return w4.preventDefault();
                });
                vV();
                U1();
                hD = {};
                hO = {};
                for (eL in e8) {
                    var eu = e8[eL];
                    n(".emote-list")
                        .append("<li><img name='" + eu + "' title='" + eu + "' src='https://gota.io/emotes/" + eu + ".png' /></li>");
                    hD[eu] = true;
                }
                for (eF in e9) {
                    var ef = e9[eF];
                    n(".gif-list")
                        .append("<li><img name='" + ef + "' title='" + ef + "' src='https://gota.io/emotes/gifs/" + ef + ".gif' /></li>");
                    hO[ef] = true;
                }
                var eS;
                var eB;
                var eA;
                var eW;
                for (var eD = 0x0; eD < h5.length; eD++) {
                    ! function (w4) {
                        eB = (eS = h5[w4])
                            .replace(/^(letter|number)_/, '');
                        n("#spEffect")
                            .append("<option value=\"" + (w4 + 0x1) + "\">" + (eB[0x0].toUpperCase() + eB.slice(0x1)) + "</option>");
                        h8[w4] = hI;
                        var w5 = new Image();
                        w5.src = "images/ejected_mass_skins/" + eS + ".png";
                        w5.onload = function () {
                            return h8[w4] = hs.Texture.from(w5);
                        };
                    }(eD);
                }
                for (eA of hh) ! function (w4) {
                    var w5 = new Image();
                    w5.src = "images/powerups/" + w4.Lt + ".png";
                    w5.addEventListener("load", function () {
                        w4.Rt = hs.Texture.from(w5);
                        w4.Rt.defaultAnchor = hk;
                    });
                    w4.Ut = w5;
                }(eA);

                function eO(w4) {
                    n.ajax({
                        'type': "GET",
                        'dataType': "json",
                        'url': "https://accounts.gota.io/api/v1/utilities/servers",
                        'success': function (w5) {
                            var w6;
                            for (w6 of w5) ! function () {
                                var w7 = w6.region;
                                var w8 = w6.servers;
                                sP[w7] = {};
                                w8.sort(function (w9, wh) {
                                        return w9.order - wh.order;
                                    })
                                    .forEach(function (w9) {
                                        w9.players = +w9.players;
                                        if (!w9.bots) {
                                            w9.bots = 0x0;
                                        }
                                        w9.playersText = w9.players + w9.bots + '/' + w9.playersMax;
                                        if (0x0 < w9.bots) {
                                            w9.playersText += '*';
                                        }
                                        w9.region = w7;
                                        sP[w7][w9.name] = w9;
                                    });
                            }();
                            U9();
                            if (null != w4) {
                                w4();
                            } else if (null != ha) {
                                Us(ha.name);
                            }
                        },
                        'error': U9
                    });
                }

                function ej(w4, w5) {
                    if (w4) {
                        n(w5)
                            .prop("disabled", false);
                        n(w5)
                            .text("Set");
                    } else {
                        n(w5)
                            .prop("disabled", true);
                        n(w5)
                            .text("...");
                    }
                }

                function eC(w4) {
                    w1.style.width = eo + w4.clientX - eV + 'px';
                    w1.style.height = eM - (w4.clientY - eX) + 'px';
                }

                function ep() {
                    R.documentElement.removeEventListener("mousemove", eC, false);
                    R.documentElement.removeEventListener("mouseup", ep, false);
                }
                UF = hs.Texture.from("images/shield.png");
                UL = hs.Texture.from("images/debuff.png");
                UF.defaultAnchor = UL.defaultAnchor = hk;
                er = g(I.location.href.split('#')
                    .slice(0x1)
                    .join('#')
                    .split('&')) || P(I.location.href.split('#')
                    .slice(0x1)
                    .join('#')
                    .split('&'), 0x2) || k(I.location.href.split('#')
                    .slice(0x1)
                    .join('#')
                    .split('&'), 0x2) || K();
                eW = er[0x0];
                hj = er[0x1];
                ho = function () {
                    if (null != (eW = Uh(eW) || Uh(I.localStorage.getItem("server")))) {
                        Us(eW.name);
                        Uv(eW.region);
                    } else if (null != ha) {
                        Us(ha.name);
                    } else {
                        Uv('eu');
                        Us("Vendetta");
                    }
                };
                hv.database()
                    .ref("/game")
                    .on("value", function (w4) {
                        var w5;
                        var w6 = w4.val();
                        if (/\d+\.\d+/.exec(I.version)[0x0] !== /\d+\.\d+/.exec(w6.version)[0x0]) {
                            hH.Bt("Gota has updated to version " + w6.version + ". Gota Fixes script may be unstable.");
                        }
                        if (!(null == (w4 = w6.motd) || w4.toLowerCase()
                                .includes("store") || s2 === w4)) {
                            s2 = w4;
                            hH.Bt(w4);
                        }
                        if (w6.listRefresh !== sS) {
                            sS = w6.listRefresh;
                            sP = {};
                            eO(ho);
                            clearInterval(sf);
                            sf = setInterval(function () {
                                eO();
                            }, w6.listRefresh);
                        }
                        for (w5 in w6.titles) e5[w5] = w6.titles[w5];
                    });
                if (true && sk.ce) {
                    n("body")
                        .toggleClass("event-halloween2023");
                }
                n(".server-tab")
                    .on("click", function () {
                        Uv(n(this)
                            .attr("region"));
                    });
                n("#btn-play")
                    .on("click", function () {
                        if (null != ha) {
                            if (hH.jt() && hH.Gt === ha.name) {
                                UT(hF);
                            } else {
                                hH.zt = false;
                                hH.Wt();
                            }
                        }
                    });
                n("#btn-spec")
                    .on("click", function () {
                        if (null != ha) {
                            if ((hH.jt() || hH.zt) && hH.Gt === ha.name) {
                                UT(hF);
                            } else {
                                hH.zt = true;
                                hH.Jt();
                            }
                        }
                    });
                n("#btn-servers")
                    .on("click", function () {
                        return UE("main-servers");
                    });
                n("#btn-options")
                    .on("click", function () {
                        return UE("main-options");
                    });
                n("#btn-hotkeys")
                    .on("click", function () {
                        return UE("main-hotkeys");
                    });
                n("#btn-themes")
                    .on("click", function () {
                        return UE("main-themes");
                    });
                n("#btn-cellpanel")
                    .on("click", function () {
                        return UE("main-subpanel");
                    });
                n("#btn-reddit")
                    .on("click", function () {
                        return I.open("https://www.reddit.com/r/PlayGotaIO/", "_blank");
                    });
                n("#btn-discord")
                    .on("click", function () {
                        return I.open("https://gota.io/discord", "_blank");
                    });
                n("#name-box")
                    .keypress(function (w4) {
                        if (w4.keyCode === sT.ke && n(this)
                            .is(":focus")) {
                            hH.Wt();
                        }
                    });
                var eV;
                var eX;
                var eo;
                var eM;
                var w0 = n("#autocomplete-panel");
                hB.keyup(function (w4) {
                    var w5;
                    var w6 = n(this)
                        .val();
                    var w7 = w6.split(' ');
                    switch (w4.keyCode) {
                    case sT.ke:
                        if (0x0 !== (w5 = w6)
                            .length) {
                            if ('/' === w5.charAt(0x0)) {
                                (function () {
                                    var wU;
                                    var ww = w5.split(' ');
                                    var wK = ww[0x0].substring(0x1);
                                    Uw('');
                                    for (wU of e7)
                                        if (wU.Yt.includes(wK)) {
                                            return wU.Vt(ww.slice(0x1));
                                        }
                                    hH.Bt("Invalid command!");
                                })();
                            } else {
                                hH.T(sj.Be(w5, 0x0));
                                Uw('');
                            }
                            if (0x14 < sN.length) {
                                sN.shift();
                            }
                            sN.push(w5);
                        }
                        break;
                    case sT.chatInputHistoryUp:
                        if (-0x1 === sI) {
                            sI = sN.length - 0x1;
                        } else if (0x0 < sI) {
                            sI--;
                        }
                        return void Uw(sN[sI = sI <= 0x0 ? 0x0 : sI]);
                    case sT.chatInputHistoryDown:
                        if (-0x1 === sI) {
                            sI = 0x0;
                        } else if (sI < sN.length - 0x1) {
                            sI++;
                        }
                        return void Uw(sN[sI = sN.length - 0x1 <= sI ? sN.length - 0x1 : sI]);
                    }
                    if (0x0 === w6.length || w6.endsWith(' ') || w4.keyCode === sT.ke) {
                        w0.html('')
                            .hide();
                    } else {
                        if (w6.startsWith('/')) {
                            if (0x1 < w7.length) {
                                return;
                            }
                            w0.html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                            var w8;
                            var w9 = w7[0x0].substring(0x1)
                                .toLowerCase();
                            var wh = n("#autocomplete-panel tbody");
                            for (w8 of e7) {
                                var ws = w8.Yt.find(function (wU) {
                                    return wU.toLowerCase()
                                        .startsWith(w9);
                                });
                                if (null != ws) {
                                    wh.append("<tr><td>" + ws + "</td><td>" + w8.Yt + "</td><td>" + w8.Kt + "</td></tr>");
                                }
                            }
                            w0.toggle(0x0 < wh.children()
                                .length);
                        } else {
                            if (w7[w7.length - 0x1].startsWith(':')) {
                                w0.html('');
                                var w4 = Object.keys(hD)
                                    .filter(function (wU) {
                                        return wU.toLowerCase()
                                            .includes(w7[w7.length - 0x1].substring(0x1)
                                                .toLowerCase());
                                    });
                                var wv = Object.keys(hO)
                                    .filter(function (wU) {
                                        return wU.toLowerCase()
                                            .includes(w7[w7.length - 0x1].substring(0x1)
                                                .toLowerCase());
                                    });
                                if (0x0 === w4.length && 0x0 === wv.length) {
                                    return void w0.html('')
                                        .hide();
                                }
                                w0.show();
                                if (0x0 < w4.length) {
                                    w0.append("<h3>Emotes</h3>");
                                    w4.forEach(function (wU) {
                                        w0.append("<img name='" + wU + "' title='" + wU + "' src='https://gota.io/emotes/" + wU + ".png' />");
                                    });
                                }
                                if (0x0 < wv.length) {
                                    w0.append("<h3>Gifs</h3>");
                                    wv.forEach(function (wU) {
                                        w0.append("<img name='" + wU + "' title='" + wU + "' src='https://gota.io/emotes/gifs/" + wU + ".gif' />");
                                    });
                                }
                            }
                        }
                    }
                    sI = -0x1;
                });
                w0.on("click", function (w4) {
                    var w5 = hB.val()
                        .split(' ');
                    if ('TD' === w4.target.nodeName) {
                        Uw('/' + w4.target.parentElement.children[0x0].innerHTML + ' ');
                        w0.html('')
                            .hide();
                        hB.focus();
                    } else if ("IMG" === w4.target.nodeName) {
                        Uw(hB.val()
                            .substring(0x0, hB.val()
                                .length - w5[w5.length - 0x1].length) + w4.target.attributes.name.nodeValue + ' ');
                        w0.html('')
                            .hide();
                        hB.focus();
                    }
                });
                n("#animationDelay")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0x5a;
                        }
                        sR.rAnimationDelay = h1.min(h1.max(w4, 0x1), 0xfa);
                        n("#animationDelay")
                            .val(0x5a);
                        n("#rAnimationDelay")
                            .val(0x5a);
                    });
                n("#cameraDelay")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0x0;
                        }
                        sR.rCameraDelay = h1.min(h1.max(w4, 0x0), 0xfa);
                        n("#cameraDelay")
                            .val(sR.rCameraDelay);
                        n("#rCameraDelay")
                            .val(sR.rCameraDelay);
                    });
                n("#zoomDelay")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0xa5;
                        }
                        sR.rZoomDelay = h1.min(h1.max(w4, 0x0), 0x190);
                        n("#zoomDelay")
                            .val(sR.rZoomDelay);
                        n("#rZoomDelay")
                            .val(sR.rZoomDelay);
                    });
                n("#menuDelay")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0x1f4;
                        }
                        sR.rMenuDelay = h1.min(h1.max(w4, 0x0), 0x3e8);
                        n("#menuDelay")
                            .val(sR.rMenuDelay);
                        n("#rMenuDelay")
                            .val(sR.rMenuDelay);
                    });
                n("#reconnectPeriod")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0x5;
                        }
                        sR.rReconnectPeriod = h1.min(h1.max(w4, 0x0), 0xa);
                        n("#reconnectPeriod")
                            .val(0x5);
                        n("#rReconnectPeriod")
                            .val(0x5);
                    });
                n("#viewDistance")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0x64;
                        }
                        sR.rViewDistance = h1.min(h1.max(w4, 0x32), 0x96);
                        n("#viewDistance")
                            .val(0x64);
                        n("#rViewDistance")
                            .val(0x64);
                        hH.Ve();
                    });
                n("#uiScale")
                    .on("change", function () {
                        var w4 = parseInt(n(this)
                            .val());
                        if (isNaN(w4)) {
                            w4 = 0x64;
                        }
                        sR.rUiScale = h1.min(h1.max(w4 *= 0.01, 0.5), 1.25);
                        n("#uiScale")
                            .val((100).toFixed(0x0));
                        n("#rUiScale")
                            .val(0x1);
                        n(".ui-scale")
                            .css("transform", "scale(1)");
                    });
                n("#chat-emote-btn")
                    .css("background-image", "url(https://gota.io/emotes/" + e8[h1.floor(h1.random() * e8.length)] + ".png)")
                    .on("click", function () {
                        return n("#emote-panel")
                            .toggle();
                    });
                n("#emote-panel ul li img")
                    .on("click", function (w4) {
                        w4 = w4.target.name + ' ';
                        hB.val(hB.val() + w4);
                        hB.focus();
                    });
                var w1 = R.getElementById("chat-panel");
                R.getElementById("chat-resize")
                    .addEventListener("mousedown", function (w4) {
                        eV = w4.clientX;
                        eX = w4.clientY;
                        eo = parseInt(R.defaultView.getComputedStyle(w1)
                            .width, 0xa);
                        eM = parseInt(R.defaultView.getComputedStyle(w1)
                            .height, 0xa);
                        R.documentElement.addEventListener("mousemove", eC, false);
                        R.documentElement.addEventListener("mouseup", ep, false);
                    }, false);
                n(".checkbox-options")
                    .on("change", function () {
                        Ur(n(this));
                    });
                n(".options-container select")
                    .on("change", function () {
                        Uq(n(this));
                    });
                n(".options-container input[type=range]")
                    .on("change", function () {
                        Uc(n(this));
                    });
                n(".input-option")
                    .on("change", function () {
                        Uz(n(this));
                    });
                n("#btn-changelog")
                    .on("click", function () {
                        UT(n("#popup-changelog"));
                        Um(hF);
                        I.open("https://discord.com/channels/166703751053312000/630428963889741854", "_blank");
                    });
                n("#btn-close-changelog")
                    .on("click", function () {
                        UT(n("#popup-changelog"));
                        Um(hF);
                    });
                n("#btn-accept")
                    .on("click", function () {
                        hH.T(sj.je(true));
                        UT(n("#popup-party"));
                    });
                n("#btn-decline")
                    .on("click", function () {
                        hH.T(sj.je(false));
                        UT(n("#popup-party"));
                    });
                n("#popup-party-code-content button")
                    .on("click", function () {
                        n("#popup-party-code-content input")
                            .select();
                        R.execCommand("Copy");
                        n("#popup-party-code")
                            .hide();
                    });
                n("#menu-invite")
                    .on("click", function () {
                        var w4 = hS.data("selected");
                        hH.T(sj.Ge(0x0, w4));
                    });
                n("#menu-whisper")
                    .on("click", function () {
                        var w4 = hS.data("selected");
                        var w5 = hB.val();
                        hB.val("/t " + w4 + ' ' + w5);
                    });
                n("#menu-profile")
                    .on("click", function () {
                        var w4 = hS.data("selected");
                        hH.T(sj.We(w4));
                    });
                n("#menu-pu_pr")
                    .on("click", function () {
                        if (null == hH.Zt) {
                            hH.T(sj.Ge(0x4, 0x0));
                            n("#menu-pu_pr span")
                                .text("Private");
                        } else {
                            hH.T(sj.Ge(0x4, 0x1));
                            n("#menu-pu_pr span")
                                .text("Public");
                        }
                    });
                n("#menu-promote")
                    .on("click", function () {
                        var w4 = hS.data("party") + 0x1;
                        if (0x0 <= w4) {
                            hH.T(sj.Ge(0x2, w4));
                        }
                    });
                n("#menu-kick")
                    .on("click", function () {
                        var w4 = hS.data("party") + 0x1;
                        if (0x0 <= w4) {
                            hH.T(sj.Ge(0x1, w4));
                        }
                    });
                n("#menu-spectate")
                    .on("click", function () {
                        var w4 = hS.data("selected");
                        if (0x0 <= w4) {
                            hH.T(sj.Ue(w4));
                        }
                    });
                n("#menu-block")
                    .on("click", function () {
                        var w4 = e6(parseInt(hS.data("selected")));
                        hH.Bt(w4);
                    });
                n(R)
                    .on("click", function (w4) {
                        hS.hide();
                        if ("chat-emote-btn" !== w4.target.id) {
                            n("#emote-panel")
                                .hide();
                        }
                        var w5 = n("#popup-party-code");
                        if ("none" !== w5.css("display") && "popup-party-code" !== w4.target.id) {
                            w5.hide();
                        }
                    });
                n("#aEditChatTabs")
                    .on("click", function () {
                        UP();
                        UT(hF);
                        Um(n("#popup-chat-tab-editor"));
                    });
                n("#cte-tab-selector")
                    .on("change", Ug);
                n("#btn-chat-tab-editor-add")
                    .on("click", UG);
                n("#btn-chat-tab-editor-remove")
                    .on("click", UZ);
                n("#btn-chat-tab-editor-update")
                    .on("click", UJ);
                n(".custom-asset-skinner")
                    .on("click", function () {
                        n("#popup-asset-skinner .title-text")
                            .text(n(this)
                                .text());
                        n("#input-asset-skinner")
                            .attr("asset", n(this)
                                .attr('id'))
                            .val('');
                        UT(hF);
                        Um(n("#popup-asset-skinner"));
                    });
                n("#btn-custom-asset-set")
                    .on("click", function () {
                        UA();
                        var w4 = n("#input-asset-skinner");
                        var w5 = w4.val();
                        if (w5 && 'a' === (w4 = w4.attr("asset"))
                            .charAt(0x0) && null != sL[w4]) {
                            Ua(w4, w5);
                        }
                        n("#popup-asset-skinner .back-button")
                            .trigger("click");
                    });
                n("#btn-custom-asset-clear")
                    .on("click", function () {
                        UA();
                        var w4 = n("#input-asset-skinner")
                            .attr("asset");
                        if ('a' === w4.charAt(0x0) && null != sL[w4]) {
                            Ua(w4, '');
                        }
                    });
                n("#popup-asset-skinner")
                    .on("dragover", false)
                    .on("drop", function (w4) {
                        UA();
                        var w5;
                        var w6 = n("#input-asset-skinner")
                            .attr("asset");
                        if ('a' === w6.charAt(0x0) && null != sL[w6] && (w4 = ev(w4.originalEvent), /\.(jpe?g|png|gif)$/i.test(w4.name))) {
                            (w5 = new FileReader())
                            .addEventListener("load", function () {
                                Ua(w6, this.result);
                            }, false);
                            w5.readAsDataURL(w4);
                        }
                        return false;
                    });
                n("#btn-food-colors")
                    .on("click", function () {
                        vW();
                        UT(hF);
                        Um(n("#popup-food-colors"));
                    });
                n("#btn-theme-export")
                    .on("click", function () {});
                n("#btn-theme-import")
                    .on("click", function () {
                        return n("#theme-import")
                            .trigger("click");
                    });
                n("#theme-import")
                    .on("change", function () {
                        var w4 = n(this)
                            .prop("files");
                        if (0x0 < w4.length) {
                            UB(w4[0x0]);
                        }
                    });
                n("#main-themes .options-container")
                    .on("dragover", false)
                    .on("drop", function (w4) {
                        UB(ev(w4.originalEvent));
                        return false;
                    });
                n("#cGlobalLeaderboard")
                    .on("change", function () {
                        var w4 = this;
                        if (s4 && !s9) {
                            s9 = true;
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w5) {
                                    I.fetch("https://accounts.gota.io/api/v1/options/setFlags", {
                                            'method': "POST",
                                            'headers': {
                                                'Content-Type': "application/json"
                                            },
                                            'body': JSON.stringify({
                                                'token': w5
                                            })
                                        })
                                        .then(function (w6) {
                                            return w6.json();
                                        })
                                        .then(function (w6) {
                                            s9 = false;
                                            n(w4)
                                                .prop("checked", w6.message);
                                        })["catch"](function (w6) {
                                            console.error(w6);
                                            s9 = false;
                                            alert(w6);
                                        });
                                })["catch"](function (w5) {
                                    vb(w5, true);
                                    s9 = false;
                                });
                        }
                    });
                hv.auth()
                    .onAuthStateChanged(function (w4) {
                        var w5;
                        if (w4) {
                            if (h2.t) {
                                n("#guest")
                                    .hide();
                                n("#account-loader")
                                    .show();
                                w5 = false;
                                hv.database()
                                    .ref("users/" + w4.uid)
                                    .on("value", function (w6) {
                                        var w7 = w6.val();
                                        if (w7) {
                                            if (!w5) {
                                                n("#account-loader")
                                                    .hide();
                                                n("#authed")
                                                    .show()
                                                    .attr("style", "display: flex;");
                                                n("#cGlobalLeaderboard")
                                                    .removeAttr("disabled")
                                                    .prop("checked", w7.flags.PUBLIC);
                                                w5 = true;
                                            }
                                            s4 = w7;
                                            n("#account-avatar")
                                                .attr("src", w7.avatar);
                                            w6 = n("#account-username")
                                                .text(w7.username);
                                            if (w7.flags.STAFF) {
                                                n("#chat-container")
                                                    .css("userSelect", "text");
                                            }
                                            vd(w6, w7);
                                            n("#account-level")
                                                .html("Level " + w7.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + es(w7.levelData.xp_current) + '/' + es(w7.levelData.xp_needed) + " XP");
                                            n(".xp-meter > span")
                                                .each(function () {
                                                    var wh = w7.levelData.xp_current / w7.levelData.xp_needed * 0x64;
                                                    n(this)
                                                        .animate({
                                                            'width': wh + '%'
                                                        }, 0x4b0);
                                                });
                                            if (!hH.Xt.Qt) {
                                                hH.Xt.Qt = hv.database()
                                                    .ref("servers/account/" + s4.uid)
                                                    .on("value", function (wh) {
                                                        if (wh = wh.val()) {
                                                            sg = {};
                                                            for (var ws of Object.values(wh))
                                                                if (ws.up) {
                                                                    ws.address = ws.ip + ':' + ws.port;
                                                                    sg[ws.name] = ws;
                                                                }
                                                            U9();
                                                            if (null != ha) {
                                                                Us(ha.name);
                                                            }
                                                        }
                                                    });
                                            }
                                            if (w7.flags.DISCORD_LINKED && !hH.Xt.qt) {
                                                hH.Xt.qt = hv.firestore()
                                                    .collection("discord")
                                                    .doc(s4.uid)
                                                    .onSnapshot(function (wh) {
                                                        if (wh.exists) {
                                                            n("#discordLinkStatus")
                                                                .text("Your account is linked with " + wh.data()
                                                                    .username + '#' + wh.data()
                                                                    .discrim)
                                                                .show();
                                                            n("#discordLink")
                                                                .hide();
                                                            n("#discordUnlink")
                                                                .show();
                                                            n(".discord-login-container")
                                                                .css("padding", "15px");
                                                        } else {
                                                            n("#discordLinkStatus")
                                                                .hide();
                                                            n("#discordUnlink")
                                                                .hide();
                                                            n("#discordLink")
                                                                .show();
                                                            n(".discord-login-container")
                                                                .css("padding", "30px");
                                                        }
                                                    });
                                            }
                                            if (null != w7.tokens) {
                                                (w6 = new Date())
                                                .setMonth(w6.getMonth() + w7.tokens);
                                                if (0x0 === w7.tokens) {
                                                    n("#redeem-tokens")
                                                        .hide();
                                                    n("#token-amount")
                                                        .text("You have 0 tokens.");
                                                } else {
                                                    n("#redeem-tokens")
                                                        .show();
                                                    n("#token-amount")
                                                        .text("You have " + w7.tokens + " tokens, maximum expiry date: " + w6.toString());
                                                    n("#redeem-spend")
                                                        .attr("max", w7.tokens);
                                                }
                                            } else {
                                                n("#token-amount")
                                                    .text("You have 0 tokens.");
                                            }
                                            if (s4.title && 0x0 < s4.title && s5 && s5.titles && 0x0 < s5.titles.length) {
                                                w6 = n("#account-titles");
                                                var w8 = 0x0;
                                                for (var w9 = 0x0; w9 < s5.titles.length; w9++) {
                                                    if (s5.titles[w9] === s4.title) {
                                                        w8 = w9 + 0x1;
                                                    }
                                                }
                                                if (0x0 < w8) {
                                                    w6.val(w8);
                                                }
                                            }
                                            if (!hH.Xt.ei) {
                                                hH.Xt.ei = hv.database()
                                                    .ref("private/" + w4.uid)
                                                    .on("value", function (wh) {
                                                        var ws = wh.val();
                                                        if (ws) {
                                                            if ((s5 = ws)
                                                                .titles && 0x0 < s5.titles.length) {
                                                                var wv = n("#account-titles");
                                                                var wU = 0x0;
                                                                wv.empty();
                                                                wv.append("<option value='0'>Default Title</option>");
                                                                for (var ww = 0x0; ww < ws.titles.length; ww++) {
                                                                    wv.append("<option value='" + (ww + 0x1) + "'>" + e5[s5.titles[ww]] + "</option>");
                                                                    if (s5.titles[ww] === s4.title) {
                                                                        wU = ww + 0x1;
                                                                    }
                                                                }
                                                                if (0x0 < wU) {
                                                                    wv.val(wU);
                                                                }
                                                                wv.css("display", "inline-block");
                                                            } else {
                                                                n("#account-titles")
                                                                    .css("display", "none");
                                                            }
                                                            if (s5.message && s5.message.title && s5.message.content && !s5.message.read) {
                                                                n("#popup-message-title")
                                                                    .text(s5.message.title);
                                                                n("#popup-message-content")
                                                                    .html(s5.message.content);
                                                                Um(n("#popup-message"));
                                                                UT(hF);
                                                            }
                                                        }
                                                    });
                                            }
                                            if (s6) {
                                                vB(s4);
                                            }
                                            U8(w4.uid);
                                        }
                                    });
                            } else {
                                hv.auth()
                                    .signOut();
                            }
                        } else {
                            n("#cGlobalLeaderboard")
                                .attr("disabled");
                            (h2.t ? (n("#authed")
                                .hide(), n("#account-loader")
                                .hide(), n("#no_cookie_consent")
                                .hide(), n("#guest")) : (n("#authed")
                                .hide(), n("#account-loader")
                                .hide(), n("#guest")
                                .hide(), n("#no_cookie_consent")))
                            .show();
                        }
                    });
                n("#account-login")
                    .on("click", function () {
                        if (h2.t) {
                            hv.auth()
                                .signInWithPopup(sw)["catch"](function (w4) {
                                    return vb(w4, true);
                                });
                        }
                    });
                n("#account-logout")
                    .on("click", function () {
                        hv.auth()
                            .signOut()
                            .then(function () {
                                n("#authed")
                                    .hide(sR.rMenuDelay);
                                n("#guest")
                                    .show();
                                n("#discordLinkStatus")
                                    .hide();
                                n(".discord-login-container")
                                    .show();
                            })["catch"](function (w4) {
                                return vb(w4, true);
                            });
                    });
                n("#account-shop")
                    .on("click", function () {
                        return I.open("https://store.gota.io/camlan", "_blank");
                    });
                n("#account-social")
                    .on("click", function () {
                        if (s4) {
                            vB(s4);
                            Um(n("#main-social"));
                            UT(n(hF));
                        }
                    });
                n("#social-back-button")
                    .on("click", function () {
                        UT(n("#main-social"));
                        Um(n(hF));
                    });
                n("#account-profile")
                    .on("click", function () {
                        return vS(s4, hF);
                    });
                n("#food-colors-close-btn")
                    .on("click", function () {
                        Uy(hF);
                        UT(n("#popup-food-colors"));
                    });
                n("#account-titles")
                    .on("change", function () {
                        var w4;
                        if (!s9) {
                            w4 = parseInt(n(this)
                                .val());
                            s9 = true;
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w5) {
                                    I.fetch("https://accounts.gota.io/api/v1/options/setTitle", {
                                            'method': "POST",
                                            'headers': {
                                                'Content-Type': "application/json"
                                            },
                                            'body': JSON.stringify({
                                                'token': w5,
                                                'title': w4
                                            })
                                        })
                                        .then(function (w6) {
                                            return w6.json();
                                        })
                                        .then(function () {
                                            return s9 = false;
                                        })["catch"](function (w6) {
                                            console.error(w6);
                                            s9 = false;
                                        });
                                })["catch"](function (w5) {
                                    vb(w5, true);
                                    s9 = false;
                                });
                        }
                    });
                n("#popup-message-read-btn")
                    .on("click", function () {
                        if (!s9) {
                            UT(n("#popup-message"));
                            Uy(hF);
                            s9 = true;
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w4) {
                                    I.fetch("https://accounts.gota.io/api/v1/options/markAsRead", {
                                            'method': "POST",
                                            'headers': {
                                                'Content-Type': "application/json"
                                            },
                                            'body': JSON.stringify({
                                                'token': w4
                                            })
                                        })
                                        .then(function (w5) {
                                            return w5.json();
                                        })
                                        .then(function () {
                                            return s9 = false;
                                        })["catch"](function (w5) {
                                            console.error(w5);
                                            s9 = false;
                                        });
                                })["catch"](function (w4) {
                                    vb(w4, true);
                                    s9 = false;
                                });
                        }
                    });
                n("#account-set-username-btn")
                    .on("click", function () {
                        var w4;
                        var w5 = this;
                        if (s4) {
                            ej(false, this);
                            if ((w4 = n("#account-username-input")
                                    .val()) && '' !== w4 && '' !== w4.trim()) {
                                hv.auth()
                                    .currentUser.getIdToken()
                                    .then(function (w6) {
                                        I.fetch("https://accounts.gota.io/api/v1/social/username", {
                                                'method': "POST",
                                                'headers': {
                                                    'Content-Type': "application/json"
                                                },
                                                'body': JSON.stringify({
                                                    'token': w6,
                                                    'username': w4
                                                })
                                            })
                                            .then(function (w7) {
                                                return w7.json();
                                            })
                                            .then(function (w7) {
                                                ej(true, w5);
                                                if (0xc8 === w7.code) {
                                                    Uy(hF);
                                                    sU.Ct.hide();
                                                } else {
                                                    alert(w7.message);
                                                }
                                            })["catch"](function (w7) {
                                                console.error(w7);
                                                alert(w7);
                                                ej(true, w5);
                                            });
                                    })["catch"](function (w6) {
                                        ej(true, w5);
                                        vb(w6, true);
                                    });
                            } else {
                                alert("Please provide a username!");
                                ej(true, this);
                            }
                        }
                    });
                n(".popup-panel .back-button")
                    .on("click", function () {
                        n(".popup-panel")
                            .each(function () {
                                UT(n(this));
                            });
                        Uy(hF);
                    });
                n("#discordLink")
                    .on("click", function () {
                        if (s4) {
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w4) {
                                    I.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + w4, "popup", "width=600,height=700");
                                });
                        }
                    });
                n("#discordUnlink")
                    .on("click", function () {
                        if (s4) {
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w4) {
                                    I.fetch("https://accounts.gota.io/api/v1/options/discord/unlink", {
                                            'method': "POST",
                                            'body': JSON.stringify({
                                                'token': w4
                                            }),
                                            'headers': {
                                                'Content-Type': "application/json"
                                            }
                                        })
                                        .then(function (w5) {
                                            return w5.json();
                                        })
                                        .then(function (w5) {
                                            alert(w5.message);
                                        });
                                })["catch"](function (w4) {
                                    return vb(w4);
                                });
                        }
                    });
                n("#redeem-tokens")
                    .submit(function (w4) {
                        var w5;
                        var w6;
                        w4.preventDefault();
                        if (s4 && confirm("By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.")) {
                            w5 = n("#redeem-name")
                                .val();
                            w6 = parseInt(n("#redeem-spend")
                                .val());
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w7) {
                                    I.fetch("https://accounts.gota.io/api/v1/options/redeem", {
                                            'method': "POST",
                                            'body': JSON.stringify({
                                                'token': w7,
                                                'name': w5,
                                                'spend': w6
                                            }),
                                            'headers': {
                                                'Content-Type': "application/json"
                                            }
                                        })
                                        .then(function (w8) {
                                            return w8.json();
                                        })
                                        .then(function (w8) {
                                            alert(w8.message);
                                            if (0xc8 === w8.code) {
                                                U8(s4.uid);
                                            }
                                        });
                                })["catch"](vb);
                        }
                    });
                n(".error-banner")
                    .on("click", function () {
                        n(this)
                            .hide();
                    });
                n("#btn-add-friend")
                    .on("click", function (w4) {
                        w4.preventDefault();
                        if (s4 && (w4 = prompt("Enter friend's UID (found above add friend button)"))) {
                            var w5 = w4.replace(/\s/g, '');
                            if ("string" != typeof w4 || 0x0 === w5.length) {
                                return alert("Please enter a valid UID");
                            }
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (w6) {
                                    I.fetch("https://accounts.gota.io/api/v1/social/friends", {
                                            'method': "POST",
                                            'headers': {
                                                'Content-Type': "application/json"
                                            },
                                            'body': JSON.stringify({
                                                'token': w6,
                                                'target': w5,
                                                'action': 0x1
                                            })
                                        })
                                        .then(function (w7) {
                                            return w7.json();
                                        })
                                        .then(function (w7) {
                                            alert(w7.message);
                                        });
                                })["catch"](function (w6) {
                                    return vb(w6, true);
                                });
                        }
                    });
                n(R)
                    .keyup(function (w4) {
                        w4 = w4.keyCode;
                        if (w4 === sT.ke) {
                            if ("INPUT" !== R.activeElement.tagName) {
                                if (w4 = hB[0x0]) {
                                    w4.setSelectionRange(w4.value.length, w4.value.length);
                                }
                                hB.focus();
                            } else if (hB.is(":focus")) {
                                hB.blur();
                            }
                        }
                    });
                n(I)
                    .bind("beforeunload", function () {
                        return "Are you sure you want to leave Gota.io?";
                    });
                U5();
                n(".keybinds-btn")
                    .on("click", function () {
                        n(".keybinds-btn-selected")
                            .removeClass("keybinds-btn-selected");
                        n(this)
                            .addClass("keybinds-btn-selected");
                        sc = true;
                    });
                n("#btn-reset-keybinds")
                    .on("click", function () {
                        for (var w4 in sz) {
                            sm[w4] = sz[w4];
                            vj(n('#' + w4));
                        }
                    });
                n("#scrimmage-mode-select")
                    .on("change", function () {
                        n("#scrimmage-mode-info")
                            .children()
                            .css("display", "none");
                        n("#scrimmage-info-" + n(this)
                                .val())
                            .css("display", "block");
                    });
                n("#btn-queue")
                    .on("click", function () {
                        var w4 = parseInt(n("#scrimmage-mode-select")
                            .val());
                        var w4 = isNaN(w4) ? 0x0 : h1.min(h1.max(w4, 0x0), 0x64);
                        hH.T(sj.Ke(w4));
                        n(this)
                            .blur();
                    });
                n("#btn-leave-match")
                    .on("click", function () {
                        return hH.T(sj.Qe());
                    });
                n("#btn-custom-create")
                    .on("click", function () {
                        hH.T(sj.Ze(0x0));
                        n(this)
                            .blur();
                    });
                n("#btn-custom-return")
                    .on("click", function () {
                        return hH.T(sj.Ze(0x1));
                    });
                n("#btn-custom-start")
                    .on("click", function () {
                        return hH.T(sj.Ze(0x2));
                    });
                n("#btn-custom-lobbies")
                    .on("click", function () {
                        return hH.T(sj.Xe());
                    });
                n("#btn-lobbies-refresh")
                    .on("click", function () {
                        return hH.T(sj.Xe());
                    });
                n("#btn-lobbies-join")
                    .on("click", function () {
                        var w4;
                        var w5;
                        if (0x0 !== hL && null != (w5 = hp[w4 = hL])) {
                            w5 = w5.ti && prompt("Enter the password to join this game", '') || '';
                            hH.T(sj.qe(w4, w5));
                        }
                    });
                n("#btn-lobbies-return")
                    .on("click", function () {
                        n(".scrimmage-full")
                            .css("display", "none");
                        n("#scrimmage-menu")
                            .css("display", "block");
                    });
                sU.Et.on("change", function () {
                    var w4 = n(this)
                        .find("option:selected")
                        .val();
                    var w5 = n(this)
                        .attr("data");
                    if (w4 !== w5) {
                        n("#scrimmage-map option[value='" + w5 + "']")
                            .prop("selected", true);
                        hH.T(sj.it(0x0, w4));
                    }
                });
                sU.Ot.on("change", function () {
                    var w4 = n(this)
                        .find("option:selected")
                        .val();
                    var w5 = n(this)
                        .attr("data");
                    if (w4 !== w5) {
                        n("#scrimmage-mapmode option[value='" + w5 + "']")
                            .prop("selected", true);
                        hH.T(sj.it(0x1, w4));
                    }
                });
                sU.xt.on("change", function () {
                    var w4 = n(this)
                        .find("option:selected")
                        .val();
                    var w5 = n(this)
                        .attr("data");
                    if (w4 !== w5) {
                        n("#scrimmage-mapsize option[value='" + w5 + "']")
                            .prop("selected", true);
                        hH.T(sj.it(0x2, w4));
                    }
                });
                sU.Ht.on("change", function () {
                    var w4 = n(this)
                        .val();
                    var w5 = n(this)
                        .attr("data");
                    if (isNaN(w4)) {
                        n(this)
                            .val(w5);
                    } else if ((w4 = h1.min(h1.max(parseInt(w4), 0x1), 0x7d00)) !== w5) {
                        n(this)
                            .val(w5);
                        hH.T(sj.it(0x3, w4));
                    }
                });
                n("#scrimmage-virusDensity")
                    .on("change", function () {
                        var w4 = n(this)
                            .val();
                        var w5 = n(this)
                            .attr("data");
                        if (isNaN(w4)) {
                            n(this)
                                .val(w5);
                        } else if ((w4 = h1.min(h1.max(parseInt(w4), 0x0), 0x3e8)) !== w5) {
                            n(this)
                                .val(w5);
                            hH.T(sj.it(0x7, w4));
                        }
                    });
                n("#scrimmage-respawnDelay")
                    .on("change", function () {
                        var w4 = n(this)
                            .val();
                        var w5 = n(this)
                            .attr("data");
                        if (isNaN(w4)) {
                            n(this)
                                .val(w5);
                        } else if ((w4 = h1.min(h1.max(parseInt(w4), -0x1), 0x258)) !== w5) {
                            n(this)
                                .val(w5);
                            hH.T(sj.it(0xb, w4));
                        }
                    });
                n("#scrimmage-lockteams")
                    .on("change", function () {
                        var w4 = n(this)
                            .prop("checked");
                        n(this)
                            .prop("checked", !w4);
                        hH.T(sj.it(0x4, w4 ? 0x1 : 0x0));
                    });
                n("#scrimmage-autoSplit")
                    .on("change", function () {
                        var w4 = n(this)
                            .prop("checked");
                        n(this)
                            .prop("checked", !w4);
                        hH.T(sj.it(0xc, w4 ? 0x1 : 0x0));
                    });
                n("#scrimmage-public")
                    .on("change", function () {
                        var w4 = n(this)
                            .prop("checked");
                        n(this)
                            .prop("checked", !w4);
                        hH.T(sj.it(0x8, w4 ? 0x1 : 0x0));
                    });
                n("#scrimmage-password")
                    .on("change", function () {
                        var w4 = n(this)
                            .prop("checked");
                        n(this)
                            .prop("checked", !w4);
                        var w4 = w4 && prompt("Enter a password to join your game (32 max characters)", '') || '';
                        hH.T(sj.rt(0x9, w4));
                    });
                n("#scrimmage-name")
                    .on("click", function () {
                        var w4;
                        if (hH.li() && null != (w4 = prompt("Enter a new name for your game (32 max characters)", n(this)
                                .text()))) {
                            hH.T(sj.rt(0xa, w4));
                        }
                    });
                n(I)
                    .unload(vK);
                hH = new vg();
                sO = new ex.Ne(hH);
                sV(function (w4) {
                    n('#' + w4)
                        .spectrum({
                            'color': sL[w4],
                            'preferredFormat': "hex",
                            'showInput': true,
                            'showAlpha': true,
                            'clickoutFiresChange': false,
                            'change': function (w5) {
                                sL[w4] = w5.toRgbString();
                                UQ(w4, sL[w4]);
                            }
                        });
                });
                n("#uiGameBackgroundColor")
                    .spectrum("option", "showAlpha", false);
                n("#uiGameBorderColor")
                    .spectrum("option", "showAlpha", false);
                n("#pFoodColors")
                    .spectrum({
                        'preferredFormat': "hex",
                        'showInput': true,
                        'chooseText': "Add",
                        'flat': true,
                        'clickoutFiresChange': false,
                        'change': function (w4) {
                            UA();
                            w4 = w4.toHexString();
                            if (!sL._FoodColors.includes(w4)) {
                                sL._FoodColors.push(w4);
                                vW();
                            }
                        }
                    });
                h2.H();
                Uk();
                ex = {
                    'view': hT,
                    'backgroundAlpha': 0x0,
                    'forceCanvas': false,
                    'antialias': true,
                    'powerPreference': "high-performance"
                };
                (h7 = {
                    'hi': hs.autoDetectRenderer(ex),
                    'ui': hP
                })
                .hi.events.destroy();
                n(I)
                    .resize(sp);
                sp();
                hr = sD();
                hH.Bt("Welcome to Gota.io!");
                I.nsjag("https://dl.dropboxusercontent.com/s/4iwpgcfwxv54nhr/store_coupon.json", "json")
                    .then(function (w4) {
                        var w5 = w4.endTime;
                        var w4 = w4.message;
                        var w5 = Date.now() < new Date(w5);
                        hH.Bt(w5 ? w4.replaceAll("STORE_LINK", "<a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>") : "Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
                    })["catch"](function () {
                        return hH.Bt("Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
                    });
                if (sk.ce && false) {
                    hH.Bt('');
                }
                if (h2.t) {
                    eq = I.localStorage.getItem("version");
                    ex = I.version.split('.');
                    if (null == eq) {
                        I.localStorage.setItem("version", I.version);
                    } else {
                        eq = eq.split('.');
                        if (!(ex[0x0] === eq[0x0] && ex[0x1] === eq[0x1])) {
                            I.localStorage.setItem("version", I.version);
                            UT(hF);
                            Um(n("#popup-changelog"));
                        }
                    }
                }
                v5();
            }

            function sp() {
                h7.hi.resolution = 0x1;
                h7.hi.resize(I.innerWidth, I.innerHeight);
                h7.ui.position.set(I.innerWidth / 0x2, I.innerHeight / 0x2);
            }

            function sV(ex) {
                for (var el in sL)
                    if ('u' === el[0x0]) {
                        ex(el);
                    }
            }

            function sX() {
                var ex = hH.fi.pi;
                if (false && ex.ce) {
                    hJ.clear()
                        .lineStyle({
                            'width': 0x20,
                            'color': "#ff0000"
                        })
                        .drawRect(ex.mi, ex.gi, ex.bi, ex.ki)
                        .visible = true;
                } else {
                    hJ.visible = false;
                }
            }
            v0 = -0x1;
            v3 = v2 = v1 = 0x0;
            (v4 = new I.MessageChannel())
            .port2.start();
            R.addEventListener("visibilitychange", function () {
                ("visible" === R.visibilityState ? ((sR.cUncapFPS ? vv : vh)(), vs) : vU)();
            });
            var so;
            var sM;
            var v0;
            var v1;
            var v2;
            var v3;
            var v4;
            var v5 = function () {
                sM = sR.cUncapFPS ? v8 : v9;
                vh();
                vU();
                if (sR.cUncapFPS && "visible" === R.visibilityState) {
                    vv();
                }
                sM();
            };
            var v6 = String.fromCharCode(0x2212);

            function v7(ex) {
                if (so < ex) {
                    var el;
                    var eN = ex - hr;
                    if (0x6 <= (ex = hr = ex) - v3 && hH.$i() && !(hF.is(":visible") && "hide" !== UN.get(hF.selector)) && !hH.yi && !sO.He()) {
                        sO.Ce();
                        v3 = ex;
                    }
                    var ex = eN;
                    var eI = h1.min(ex / 0x5a, 0x1);
                    hH.wi.vi(ex);
                    var eR = e(hH._i.values()) || U(hH._i.values()) || k(hH._i.values()) || v();
                    for (el of eR) el.Si(eI);
                    var em = 0x0;
                    var eT = 0x0;
                    var ey = 0x0;
                    switch (0x0) {
                    case 0x0:
                        var eE;
                        var eH = 0x0;
                        for (eE of hH.Ni.values()) {
                            em += eE.oe;
                            eT += eE.re;
                            ey += eE.Ci;
                            eH++;
                        }
                        if (0x0 !== eH) {
                            hH.Ei = em / eH;
                            hH.Oi = eT / eH;
                        }
                        break;
                    case 0x1:
                        var er;
                        var eq = 0x0;
                        for (er of hH.Ni.values()) {
                            var ec = er.xi();
                            em += er.oe * ec;
                            eT += er.re * ec;
                            eq += ec;
                            ey += er.Ci;
                        }
                        if (eq) {
                            hH.Ei = em / eq;
                            hH.Oi = eT / eq;
                        }
                    }
                    var ez;
                    var eQ;
                    var ea = 0x0 !== ey;
                    if (ea) {
                        hH.Hi = h1.pow(h1.min(0x20 / ey, 0x1), 0.4) * h1.max(I.innerHeight / 0x438, I.innerWidth / 0x780);
                    }
                    var ea = ea ? h1.min(ex / sR.rCameraDelay, 0x1) : eI;
                    hH.Mi += (hH.Ei - hH.Mi) * ea;
                    hH.Fi += (hH.Oi - hH.Fi) * ea;
                    var ea = hH.Hi * hH.Tt;
                    hH.ae += (ea - hH.ae) * h1.min(ex / sR.rZoomDelay, 0x1);
                    hG.scale.set(hH.ae);
                    hG.pivot.set(hH.Mi, hH.Fi);
                    var eL = true && (0.12 < hH.ae || false);
                    hY.visible = eL;
                    for (ez of hH.Di.values()) {
                        ez.Si(eI);
                        if (eL) {
                            ez.Ai();
                        }
                    }
                    for (eQ of eR) eQ.Ii();
                    ea = true;
                    if (hH.Pi) {
                        hH.Ti();
                        hH.Li();
                        if (ea && false) {
                            sU.wt[0x0].textContent = ("X: " + h1.round(hH.Mi) + " Y: " + h1.round(hH.Fi))
                                .replaceAll('-', v6);
                        }
                        hH.Pi = false;
                    }
                    if (ea) {
                        if (hH.fi.pi.ce) {
                            hE.clearRect(0x0, 0x0, hy.width, hy.height);
                            hE.font = "12px Calibri";
                            for (var eb of hH.Ri)
                                if (eb.Ui === 0x0 && eb.ji !== hH.Gi) {
                                    Ul(hE, eb.p, eb.oe, eb.re, 0x4, eb.zi, true);
                                    eb.oe += (eb.Wi - eb.oe) * eI;
                                    eb.re += (eb.Ji - eb.re) * eI;
                                }
                            Ul(hE, hH.p, hH.Mi, hH.Fi, 0x6, "#fefefe", false);
                        }
                    }
                    hH.Vi.Yi();
                    h7.hi.render(h7.ui);
                    ++v2;
                    if (0x3e8 <= (v1 += ex = eN)) {
                        sU.ft.innerHTML = v2;
                        v1 = v2 = 0x0;
                        ea = eR = Date.now();
                        if (0x0 < hH.fi.Ki && 0x0 < hH.fi.bt) {
                            sU.gt.css("display", "block");
                            ea = h1.max(0x0, h1.floor((hH.fi.bt - ea) / 0x3e8));
                            sU.bt.html(eh(ea));
                        } else {
                            sU.gt.css("display", "none");
                        }
                        ea = eR;
                        if (0x0 < hH.$t && hH.$t >= ea) {
                            sU.kt.css("display", "block");
                            eR = h1.max(0x0, h1.ceil((hH.$t - ea) / 0x3e8));
                            sU.$t.html(eh(eR));
                        } else if (hH.$t < 0x0) {
                            sU.kt.css("display", "block");
                            sU.$t.html("NEVER");
                        } else {
                            sU.kt.css("display", "none");
                        }
                    }
                }
                so = sD();
                sM();
            }

            function v8() {
                v4.port1.postMessage(null);
            }

            function v9() {
                v0 = requestAnimationFrame(v7);
            }

            function vh() {
                I.cancelAnimationFrame(v0);
            }

            function vs() {
                v7(sD());
            }

            function vv() {
                v4.port2.addEventListener("message", vs);
            }

            function vU() {
                v4.port2.removeEventListener("message", vs);
            }

            function vK() {
                if (h2.t) {
                    sR.iChatWidth = sU.P.css("width");
                    sR.iChatHeight = sU.P.css("height");
                    for (var ex in sy) {
                        sy[ex] = sR[ex];
                        delete sR[ex];
                    }
                    for (var el in sE) {
                        sE[el] = sm[el];
                        delete sm[el];
                    }
                    for (var eN in sH) {
                        sH[eN] = sL[eN];
                        delete sL[eN];
                    }
                    var eI = 0x1201;
                    Uu.forEach(function (em) {
                        var em = g(em) || P(em, 0x3) || k(em, 0x3) || K();
                        var eT = em[0x0];
                        var em = em[0x2];
                        var ey = sy[em];
                        eI |= +ey << eT;
                        delete sy[em];
                    });
                    if (sB) {
                        sy.loadver = eI;
                    }
                    var eR = I.localStorage;
                    eR.setItem("options", JSON.stringify(sR));
                    eR.setItem("keybinds", JSON.stringify(sm));
                    eR.setItem("fixes_options", JSON.stringify(sy));
                    eR.setItem("fixes_keybinds", JSON.stringify(sE));
                    eR.setItem("fixes_theme", JSON.stringify(sH));
                    eR.setItem("name", n("#name-box")
                        .val());
                    eR.setItem("theme", JSON.stringify(sL));
                    eR.setItem("subpanel", JSON.stringify(su));
                    if (ha) {
                        eR.setItem("server", ha.name);
                    }
                }
            }

            function vk() {
                R.body.classList.add("hide-captcha-badge");
            }
            I.nsjag(I.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS9uamdoOWcvcz9ybGtleT16MDhhNm8yMzNnZThxbWZqbHpnazloMGc0"))
                .then(function (ex) {
                    var el = {};
                    I.Function("exports", "module", ex)({}, el);
                    el.exports()
                        .then(sC);
                });
            var vP = function () {
                var ex = {
                    'm4a': "audio/mp4",
                    'oga': "audio/ogg",
                    'opus': "audio/ogg; codecs=\"opus\"",
                    'caf': "audio/x-caf; codecs=\"opus\""
                };
                var el = new Audio();
                var eN = new Set();
                ["mp3", "ogg", "oga", "opus", "mpeg", "wav", "m4a", "aiff", "wma", "mid", "caf"].forEach(function (eR) {
                    if (el.canPlayType(ex[eR] || "audio/" + eR)) {
                        eN.add(eR);
                    }
                });
                class eI {
                    constructor(eR) {
                            this.Zi = [];
                            this.Qi = eR;
                            this.Xi = false;
                            this.qi();
                        }
                        ['en']() {
                            for (var eR of this.Zi) {
                                eR.oncanplaythrough = null;
                                eR.onended = null;
                            }
                            this.Zi = null;
                            this.Xi = false;
                        }
                        ['qi'](eR) {
                            var em = this;
                            if (undefined === eR) {
                                eR = false;
                            }
                            var eT = new Audio(this.Qi);
                            eT.oncanplaythrough = function () {
                                em.Xi = true;
                                em.Zi.push(eT);
                                eT.oncanplaythrough = null;
                                eT.onended = function () {
                                    return eT.currentTime = 0x0;
                                };
                                if (eR) {
                                    eT.play();
                                }
                            };
                        }
                        ['Wt']() {
                            for (var eR of this.Zi)
                                if (eR.paused) {
                                    return void eR.play();
                                }
                            this.qi(true);
                        }
                }
                return new class {
                    constructor() {
                            this.tn = new Map();
                        }
                        ['nn'](eR) {
                            return !!(eR = eR.match(/\.(\w+)$/)) && eN.has(eR[0x1]);
                        }
                        ['sn'](eR, em) {
                            var eT;
                            if (this.nn(em) && (null == (eT = this.tn.get(eR)) ? undefined : eT.Qi) !== em) {
                                if (null != eT) {
                                    eT.en();
                                }
                                this.tn.set(eR, new eI(em));
                            }
                        }
                        ['an'](eR) {
                            var em;
                            if (null != (em = this.tn.get(eR))) {
                                em.en();
                            }
                            this.tn["delete"](eR);
                        }
                        ['Wt'](eR) {
                            if (sR.cEnableSounds && null != (eR = this.tn.get(eR)) && eR.Xi) {
                                eR.Wt();
                            }
                        }
                }();
            }();

            function vg() {
                this.on = null;
                this.rn = null;
                this.Gt = null;
                this.cn = null;
                this.ln = null;
                this.zt = false;
                this.Pi = false;
                this.p = '';
                this.Gi = 0x0;
                this.Dt = null;
                this._i = new Map();
                this.Di = new Map();
                this.Ni = new Map();
                this.wi = new vr();
                this.Vi = new UO();
                this.Mi = 0x0;
                this.Fi = 0x0;
                this.Ei = 0x0;
                this.Oi = 0x0;
                this.ae = 0.5;
                this.Hi = 0.5;
                this.Tt = 0x1;
                this.At = 0x0;
                this.It = 0x0;
                this.yi = false;
                this.dn = 0x0;
                this.hn = 0x0;
                this.Ri = [];
                this.un = {};
                this.pn = [];
                this.fn = false;
                this.fi = {
                    'mn': false,
                    'pi': {},
                    'gn': 0x10,
                    'bn': false
                };
                this.kn = 0x0;
                this.$n = 0x0;
                this.$t = 0x0;
                this.yn = null;
                this.Xt = {};
                setInterval(this.Re.bind(this), 0x7530);
            }

            function vJ(ex, el, eN) {
                if (undefined === eN) {
                    eN = false;
                }
                var eI = R.getElementById(ex);
                eI.checked = el;
                if (eN) {
                    Ur(n(eI));
                } else {
                    sR[ex] = el;
                }
            }

            function vG(ex, el) {
                return ex.xa.Ci - el.xa.Ci;
            }
            vg.prototype.jt = function () {
                return 0x0 !== this.Ni.size;
            };
            vg.prototype.Wt = function () {
                if (null == ha) {
                    this.Bt("No server selected!");
                } else {
                    this.p = n("#name-box")
                        .val();
                    this.zt = false;
                    vA();
                    if (this.$i() && this.rn === ha.address) {
                        this.T(sj.Ie(this.p));
                    } else {
                        this.vn(ha.address);
                    }
                    UH();
                    UT(hF);
                    if (sa) {
                        sU.Mt.show();
                    }
                }
            };
            vg.prototype.Jt = function () {
                if (null == ha) {
                    this.Bt("No server selected!");
                } else {
                    this.zt = true;
                    vA();
                    if (this.$i() && this.rn === ha.address) {
                        this.T(sj.Ue());
                    } else {
                        this.vn(ha.address);
                    }
                    UH();
                    UT(hF);
                }
            };
            vg.prototype.vn = function (ex) {
                var el;
                if (null != this.on) {
                    this.on.wn = ex;
                    this._n();
                } else {
                    this.rn = ex;
                    this.Gt = ha.name;
                    this.Bt("Connecting to " + this.Gt + "...");
                    if (ha.ssl) {
                        this.on = new I.WebSocket("wss://" + ex);
                    } else {
                        this.on = new I.WebSocket("ws://" + ex);
                    }
                    this.on.binaryType = "arraybuffer";
                    (el = this)
                    .on.onopen = this.Sn.bind(this);
                    this.on.onmessage = this.Nn.bind(this);
                    this.on.onclose = function (eN) {
                        el.Cn();
                        el.Bt("You have been disconnected from the server. Reason: " + (eN.reason || "Unknown"));
                        if (null != this.wn) {
                            el.vn(this.wn);
                        }
                    };
                    this.on.onerror = function () {
                        el.Cn();
                        this.wn = null;
                        el.Bt("Error connecting to server... Retrying every 5 second(s).");
                        setTimeout(function () {
                            if (!(el.$i() || null != el.on)) {
                                el.vn(ex);
                            }
                        }, 5000);
                    };
                    vk();
                }
            };
            vg.prototype._n = function () {
                if (null != this.on) {
                    this.on.close();
                }
            };
            vg.prototype.En = function () {
                for (var ex of this._i.values()) ex.en();
                for (var el of this.Di.values()) el.en();
                this._i.clear();
                this.Di.clear();
                this.Ni.clear();
            };
            vg.prototype.Cn = function () {
                this.En();
                this.wi.On();
                this.Gi = 0x0;
                this.kn = 0x0;
                this.$t = 0x0;
                this.yn = null;
                this.rn = null;
                this.Gt = null;
                this.xn();
                this.Vi.Hn();
                Object.assign(this.fi, {
                    'mn': false,
                    'Ki': 0x0,
                    'bn': false
                });
                if (null != this.on) {
                    this.on = null;
                }
                n("#pId span")
                    .html(this.Gi);
                if (this.fn) {
                    this.fn = false;
                    U7();
                }
            };
            var vY;
            var vx = {
                'kSplit': 0x1,
                'kDoubleSplit': 0x2,
                'kTripleSplit': 0x3,
                'kQuadSplit': 0x4,
                'kPentaSplit': 0x5,
                'kHexaSplit': 0x6,
                'kSeptiSplit': 0x7,
                'kOctoSplit': 0x8
            };
            vg.prototype.Pt = function (ex) {
                var el;
                if (ex === sT.$e) {
                    Uy(hF);
                    UT(n("#main-social"));
                    UT(sU.Nt);
                    UT(sU.Ct);
                } else {
                    if (ex = sq.get(ex)) {
                        if (ex.includes("kContextMenu")) {
                            var eN = R.elementFromPoint(this.At, this.It);
                            if ("chat-name" === eN.className) {
                                UY(eN.innerText, eN.dataset.Gi, -0x1);
                            } else {
                                var eI = this.It - n(eN)
                                    .offset()
                                    .top;
                                switch (eN.id) {
                                case "party-canvas":
                                    if (!((eE = eI) % 0x14 < 0x5)) {
                                        eE = h1.floor(eE / 0x14);
                                        if (null != (el = hH.Ri[eE])) {
                                            UY(el.p, el.ji, eE);
                                        }
                                    }
                                    break;
                                case "leaderboard-canvas":
                                    eE = h1.floor((el = eI) / 0x14);
                                    if (null != (null == (el = hH.pn[eE]) ? undefined : el.Gi)) {
                                        UY(el.p, el.Gi);
                                    }
                                    break;
                                case "canvas":
                                    var eR;
                                    var em;
                                    var eT;
                                    var ey;
                                    var eE = g(hH.Mn(true)) || P(hH.Mn(true), 0x2) || k(hH.Mn(true), 0x2) || K();
                                    var eH = eE[0x0];
                                    var er = eE[0x1];
                                    for (ey of hH._i.values())
                                        if (ey.Fn === 0x2 && (eR = (ey.oe - eH) ** 0x2, em = (ey.re - er) ** 0x2, eT = ey.Ci ** 0x2, eR + em <= eT)) {
                                            UY(hH.wi.An(ey.Gi)
                                                .p, ey.Gi);
                                        }
                                }
                            }
                        }
                        if (!(hF.is(":visible") && "hide" !== UN.get(hF.selector))) {
                            for (var eq of ex) {
                                var ec = vx[eq];
                                if (ec) {
                                    if (!sO.Me(ec)) {
                                        this.In(ec);
                                    }
                                } else {
                                    if (ec = sr[eq]) {
                                        this.Tt = ec;
                                    } else {
                                        switch (eq) {
                                        case "zoomIn":
                                            this.Tt *= 1.05;
                                            this.Tt = 0x5 < this.Tt ? 0x5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                                            break;
                                        case "zoomOut":
                                            this.Tt *= 0.95;
                                            this.Tt = 0x5 < this.Tt ? 0x5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                                            break;
                                        case "kEjectMass":
                                            if (!hA) {
                                                hA = true;
                                                this.T(sj.Le(true));
                                            }
                                            break;
                                        case "kToggleSpec":
                                            this.T(sj.Pe(0x12));
                                            break;
                                        case "kFreezeMouse":
                                            this.yi = !this.yi;
                                            sU.ct.toggle(this.yi);
                                            if (this.yi) {
                                                this.dn = this.Pn;
                                                this.hn = this.Tn;
                                            }
                                            break;
                                        case "kLinesplit":
                                            sO.Oe();
                                            break;
                                        case "kCycleNames":
                                            if (sR.cHideEnemyNames) {
                                                if (sR.cHideBotNames) {
                                                    if (sR.cHideFriendNames) {
                                                        if (sR.cHideOwnName) {
                                                            vJ("cHideOwnName", false);
                                                            vJ("cHideFriendNames", true);
                                                        } else {
                                                            vJ("cHideFriendNames", false);
                                                        }
                                                        vJ("cHideBotNames", true);
                                                    } else {
                                                        vJ("cHideOwnName", false);
                                                        vJ("cHideBotNames", false);
                                                    }
                                                    vJ("cHideEnemyNames", true);
                                                } else {
                                                    vJ("cHideOwnName", false);
                                                    vJ("cHideFriendNames", false);
                                                    vJ("cHideEnemyNames", false);
                                                }
                                            } else {
                                                vJ("cHideOwnName", true);
                                                vJ("cHideFriendNames", true);
                                                vJ("cHideBotNames", true);
                                                vJ("cHideEnemyNames", true);
                                            }
                                            this.wi.Ln();
                                            break;
                                        case "kCycleMasses":
                                            if (sR.cHideEnemyMasses) {
                                                if (sR.cHideBotMasses) {
                                                    if (sR.cHideFriendMasses) {
                                                        if (sR.cHideOwnMass) {
                                                            vJ("cHideOwnMass", false);
                                                            vJ("cHideFriendMasses", true);
                                                        } else {
                                                            vJ("cHideFriendMasses", false);
                                                        }
                                                        vJ("cHideBotMasses", true);
                                                    } else {
                                                        vJ("cHideOwnMass", false);
                                                        vJ("cHideBotMasses", false);
                                                    }
                                                    vJ("cHideEnemyMasses", true);
                                                } else {
                                                    vJ("cHideOwnMass", false);
                                                    vJ("cHideFriendMasses", false);
                                                    vJ("cHideEnemyMasses", false);
                                                }
                                            } else {
                                                vJ("cHideOwnMass", true);
                                                vJ("cHideFriendMasses", true);
                                                vJ("cHideBotMasses", true);
                                                vJ("cHideEnemyMasses", true);
                                            }
                                            this.wi.Rn();
                                            break;
                                        case "kCycleSkins":
                                            if (sR.cHideEnemySkins) {
                                                if (sR.cHideBotSkins) {
                                                    if (sR.cHideFriendSkins) {
                                                        if (sR.cHideOwnSkin) {
                                                            vJ("cHideOwnSkin", false);
                                                            vJ("cHideFriendSkins", true);
                                                        } else {
                                                            vJ("cHideFriendSkins", false);
                                                        }
                                                        vJ("cHideBotSkins", true);
                                                    } else {
                                                        vJ("cHideOwnSkin", false);
                                                        vJ("cHideBotSkins", false);
                                                    }
                                                    vJ("cHideEnemySkins", true);
                                                } else {
                                                    vJ("cHideOwnSkin", false);
                                                    vJ("cHideFriendSkins", false);
                                                    vJ("cHideEnemySkins", false);
                                                }
                                            } else {
                                                vJ("cHideOwnSkin", true);
                                                vJ("cHideFriendSkins", true);
                                                vJ("cHideBotSkins", true);
                                                vJ("cHideEnemySkins", true);
                                            }
                                            this.wi.Un();
                                            break;
                                        case "kHideOwnName":
                                            vJ("cHideOwnName", !sR.cHideOwnName, true);
                                            break;
                                        case "kHideFriendNames":
                                            vJ("cHideFriendNames", !sR.cHideFriendNames, true);
                                            break;
                                        case "kHideBotNames":
                                            vJ("cHideBotNames", !sR.cHideBotNames, true);
                                            break;
                                        case "kHideEnemyNames":
                                            vJ("cHideEnemyNames", !sR.cHideEnemyNames, true);
                                            break;
                                        case "kHideOwnMass":
                                            vJ("cHideOwnMass", !sR.cHideOwnMass, true);
                                            break;
                                        case "kHideFriendMasses":
                                            vJ("cHideFriendMasses", !sR.cHideFriendMasses, true);
                                            break;
                                        case "kHideBotMasses":
                                            vJ("cHideBotMasses", !sR.cHideBotMasses, true);
                                            break;
                                        case "kHideEnemyMasses":
                                            vJ("cHideEnemyMasses", !sR.cHideEnemyMasses, true);
                                            break;
                                        case "kHideOwnSkin":
                                            vJ("cHideOwnSkin", !sR.cHideOwnSkin, true);
                                            break;
                                        case "kHideFriendSkins":
                                            vJ("cHideFriendSkins", !sR.cHideFriendSkins, true);
                                            break;
                                        case "kHideBotSkins":
                                            vJ("cHideBotSkins", !sR.cHideBotSkins, true);
                                            break;
                                        case "kHideEnemySkins":
                                            vJ("cHideEnemySkins", !sR.cHideEnemySkins, true);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            vg.prototype.$i = function () {
                return null != this.on && 0x1 === this.on.readyState;
            };
            vg.prototype.T = function (ex) {
                if (this.$i()) {
                    this.on.send(ex);
                }
            };
            vg.prototype.Sn = function () {
                var ex = this;
                s8 = [];
                this.cn = new Promise(function (el) {
                    return ex.ln = el;
                });
                sh.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
                        'action': "login"
                    })
                    .then(function (el) {
                        hH.T(sj.et(el));
                        hH.cn.then(function (eN) {
                            return !eN && hH.Bn();
                        });
                        vk();
                    });
                this.T(sj.Ae());
                this.Re();
                this.Ve();
                if (null != hv.auth()
                    .currentUser) {
                    hv.auth()
                        .currentUser.getIdToken(true)
                        .then(function (el) {
                            return hH.T(sj.tt(el));
                        })["catch"](function (el) {
                            vb(el, true);
                            ex.ln(false);
                        });
                } else {
                    this.ln(false);
                }
            };
            vg.prototype.Bn = function () {
                this.T(this.zt ? sj.Ue() : sj.Ie(this.p));
            };
            vg.prototype.Re = function () {
                if (this.$i()) {
                    hq = Date.now();
                    this.T(sj.Re());
                }
            };
            vg.prototype.Ve = function () {
                if (this.$i()) {
                    this.T(sj.Ve());
                }
            };
            vg.prototype.Mn = function (ex) {
                return !(ex = undefined !== ex && ex) && this.yi ? [this.dn, this.hn] : (ex = h7.ui.position, [(this.At - ex.x) / this.ae + this.Mi, (this.It - ex.y) / this.ae + this.Fi]);
            };
            vg.prototype.Te = function (ex, el) {
                this.Pn = h1.round(ex);
                this.Tn = h1.round(el);
                this.T(sj.Te(this.Pn, this.Tn));
            };
            vg.prototype.In = function (ex) {
                var el = sj.Pe(0x11);
                for (var eN = 0x0; eN < ex; eN++) {
                    this.T(el);
                }
            };
            vg.prototype.Bt = function (ex, el) {
                UU(0x8, n("<td><span style=\"color: #DDDD00\">[System] " + ((el = undefined !== el && el) ? ex : ex.replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")) + "</span></td>")[0x0]);
            };
            vg.prototype.jn = function (ex, el) {
                var eN = R.createElement('td');
                var eI = R.createElement("span");
                eI.style.color = "#DDDD00";
                eI.innerHTML = "[System] " + ex.replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                eN.appendChild(eI);
                (ex = R.createElement("span"))
                .style.color = "#DDDD00";
                ex.innerHTML = el;
                ex.style.pointerEvents = "all";
                ex.style.userSelect = "all";
                eN.appendChild(ex);
                UU(0x8, eN);
            };
            vg.prototype.xn = function () {
                this.Ri = [];
                this.un = {};
                this.Gn = -0x1;
                this.zn = -0x1;
                n("#party-panel")
                    .css("display", "none");
                if ("block" === hV.css("display")) {
                    this.Wn();
                }
                if (!(null == this.Zt && null == hj)) {
                    this.Zt = hj = null;
                    I.history.pushState("page", '', ' ');
                }
            };
            vg.prototype.li = function () {
                return this.Gn === this.Gi;
            };
            vg.prototype.Jn = function () {
                return this.fi.gn + this.Vi.Yn;
            };
            vg.prototype.Vn = function () {
                vP.Wt("eject");
            };
            vg.prototype.Kn = function () {
                vP.Wt("split");
            };
            vg.prototype.Zn = function () {
                sO.De();
                if ("block" !== hf.css("display")) {
                    Um(hF);
                }
                I.aiptag.cmd.display.push(function () {
                    return I.aipDisplayTag.refresh("GOT_gota-io_336x280");
                });
            };
            var vl = I.DataView;
            var vN = I.ArrayBuffer;
            vg.prototype.Nn = function (ex) {
                var el = this;
                var ex = ex.data;
                var eN = new vl(ex);
                var ex = eN.getUint8(0x0);
                eN.Qn = 0x1;
                switch (ex) {
                case 0x2:
                    el.Xn(eN);
                    break;
                case 0xa:
                    el.qn(eN);
                    break;
                case 0x15:
                    el.es(eN);
                    break;
                case 0x16:
                    el.ts(eN);
                    break;
                case 0x17:
                    el.ns();
                    break;
                case 0x28:
                    el.ss(eN);
                    break;
                case 0x29:
                    el.os(eN);
                    break;
                case 0x2d:
                    el.rs(eN);
                    break;
                case 0x2b:
                    el.cs(eN);
                    break;
                case 0x31:
                    el.ls(eN);
                    break;
                case 0x32:
                    el.ds(eN);
                    break;
                case 0x3f:
                    el.hs(eN);
                    break;
                case 0x40:
                    el.us(eN);
                    break;
                case 0x41:
                    el.ps();
                    break;
                case 0x42:
                    el.fs(eN);
                    break;
                case 0x44:
                    el.gs(eN);
                    break;
                case 0x45:
                    el.bs(eN);
                    break;
                case 0x46:
                    el.ks(eN);
                    break;
                case 0x47:
                    el.$s();
                    break;
                case 0x48:
                    el.ys(eN);
                    break;
                case 0x49:
                    el.vs(eN);
                    break;
                case 0x4a:
                    el.ws(eN);
                    break;
                case 0x50:
                    el._s();
                    break;
                case 0x51:
                    el.Ss(eN);
                    break;
                case 0x52:
                    el.Ns(eN);
                    break;
                case 0x53:
                    el.Cs(eN);
                    break;
                case 0x5a:
                    el.Es(eN);
                    break;
                case 0x5b:
                    el.Os(eN);
                    break;
                case 0x5c:
                    el.xs(eN);
                    break;
                case 0x5d:
                    el.Wn();
                    break;
                case 0x5e:
                    el.Hs(eN);
                    break;
                case 0x64:
                    el.Ms(eN);
                    break;
                case 0x65:
                    el.Fs(eN);
                    break;
                case 0x66:
                    el.Ds(eN);
                    break;
                case 0x67:
                    el.As(eN);
                    break;
                case 0x68:
                    el.Is(eN);
                }
            };
            vg.prototype.Ps = function (ex) {
                var el = ex.getUint16(ex.Qn, true);
                for (ex.Qn += 0x2; 0x0 < el; --el) {
                    this.wi.Ts(ex.getUint16(ex.Qn, true));
                    ex.Qn += 0x2;
                }
            };
            vg.prototype.Ls = function (ex) {
                var el = ex.getUint16(ex.Qn, true);
                for (ex.Qn += 0x2; 0x0 < el; --el) {
                    var eN = ex.getUint16(ex.Qn, true);
                    ex.Qn += 0x2;
                    var eI = this._i.get(eN) || this.Di.get(eN);
                    if (null != eI) {
                        if (eI.Fn === 0x6) {
                            this.Di["delete"](eN);
                        } else {
                            this._i["delete"](eN);
                            if (eI.Gi === this.Gi) {
                                this.Ni["delete"](eN);
                            }
                        }
                        eI.en();
                    }
                }
            };
            vg.prototype.Us = function (ex) {
                return ex && !ex.endsWith(".gif") ? ex : null;
            };
            vg.prototype.Bs = function (ex) {
                for (;;) {
                    var el = ex.getUint16(ex.Qn, true);
                    ex.Qn += 0x2;
                    if (0x0 === el) {
                        break;
                    }
                    var eN = ex.getUint8(ex.Qn++) / 0xff;
                    var eI = ex.getUint8(ex.Qn++) / 0xff;
                    var eR = ex.getUint8(ex.Qn++) / 0xff;
                    var em = vL(ex);
                    var eT = this.wi.An(el);
                    if (null == eT) {
                        eT = new vc(el, em.endsWith('🤖'));
                        this.wi.sn(eT);
                    }
                    eT.p = em;
                    eT.js = [eN, eI, eR];
                    el = this.Us(va(ex));
                    eT.Gs = ex.getUint8(ex.Qn++);
                    if (0x2 == (0x2 & eT.Gs)) {
                        eT.zs = {
                            'Ws': (ex.getUint8(ex.Qn++) << 0x10) + (ex.getUint8(ex.Qn++) << 0x8) + ex.getUint8(ex.Qn++),
                            'Js': 0x40 <= ex.getUint8(ex.Qn++),
                            'Ys': ex.getUint8(ex.Qn++),
                            'Vs': el
                        };
                    } else {
                        eT.Vs = el;
                        eT.zs = null;
                    }
                    eT.Yi();
                    this.wi.Ks(eT);
                }
            };
            vg.prototype.Zs = function (ex, el) {
                for (;;) {
                    var eN = ex.getUint16(ex.Qn, true);
                    ex.Qn += 0x2;
                    if (0x0 === eN) {
                        break;
                    }
                    var eI = eN === this.Gi;
                    for (eI && el && this.Kn();;) {
                        var eR = ex.getUint16(ex.Qn, true);
                        ex.Qn += 0x2;
                        if (0x0 === eR) {
                            break;
                        }
                        (eR = new(eI ? vy : vT)(eR, this))
                        .Qs(ex.getInt16(ex.Qn, true));
                        eR.Xs(ex.getInt16(ex.Qn + 0x2, true));
                        eR.qs(ex.getUint16(ex.Qn + 0x4, true));
                        ex.Qn += 0x6;
                        eR.Gi = eN;
                    }
                }
            };
            vg.prototype.ea = function (ex, el) {
                var eN = !hA && 0x190 < Date.now() - hW;
                for (var eI = null == (eR = this.Dt) ? undefined : eR.js;;) {
                    var eR;
                    var em = ex.getUint8(ex.Qn++);
                    if (em === 0x2) {
                        this.Zs(ex, el);
                    } else {
                        if (em === 0x0) {
                            break;
                        }
                        for (;;) {
                            var eT = ex.getUint16(ex.Qn, true);
                            ex.Qn += 0x2;
                            if (0x0 === eT) {
                                break;
                            }
                            var ey = vR.ta(eT, em, this);
                            ey.Qs(ex.getInt16(ex.Qn, true));
                            ey.Xs(ex.getInt16(ex.Qn + 0x2, true));
                            ex.Qn += 0x4;
                            if (em !== 0x6) {
                                ey.qs(ex.getUint16(ex.Qn, true));
                                ex.Qn += 0x2;
                                switch (em) {
                                case 0x1:
                                    ey.na = (ex.getUint8(ex.Qn++) << 0x10) + (ex.getUint8(ex.Qn++) << 0x8) + ex.getUint8(ex.Qn++);
                                    var eE = ex.getUint8(ex.Qn++);
                                    ey.Vs = (0x7f & eE) - 0x1;
                                    if (!(eN || ey.na !== eI)) {
                                        this.Vn();
                                        eN = true;
                                    }
                                    break;
                                case 0x5:
                                    ey.aa = ex.getUint8(ex.Qn++);
                                }
                            }
                        }
                    }
                }
            };
            vg.prototype.oa = function (ex) {
                for (;;) {
                    var el = ex.getUint8(ex.Qn++);
                    if (el === 0x0) {
                        break;
                    }
                    for (;;) {
                        var eN = ex.getUint16(ex.Qn, true);
                        ex.Qn += 0x2;
                        if (0x0 === eN) {
                            break;
                        }
                        var eI = (el === 0x6 ? this.Di : this._i)
                            .get(eN);
                        (eI = null == eI ? vR.ta(eN, el, this) : eI)
                        .ra(ex.getInt16(ex.Qn, true));
                        eI.ca(ex.getInt16(ex.Qn + 0x2, true));
                        ex.Qn += 0x4;
                        if (!(el !== 0x2 && el !== 0x3 && el !== 0x4)) {
                            eI.ha(ex.getUint16(ex.Qn, true));
                            ex.Qn += 0x2;
                        }
                    }
                }
            };
            vg.prototype.Xn = function (ex) {
                var el = this.jt();
                this.Ps(ex);
                this.Ls(ex);
                this.Bs(ex);
                this.ea(ex, el);
                this.oa(ex);
                if (el && !this.jt()) {
                    this.Zn();
                }
                this.Pi = true;
                this.ua();
                sO.Ee();
            };
            vg.prototype.qn = function (ex) {
                this.Ei = ex.getFloat32(ex.Qn, true);
                ex.Qn += 0x4;
                this.Oi = ex.getFloat32(ex.Qn, true);
                ex.Qn += 0x4;
                this.Hi = ex.getFloat32(ex.Qn, true);
            };
            vg.prototype.hs = function (ex) {
                this.$t = ex.getFloat64(ex.Qn, true);
            };
            vg.prototype.us = function (ex) {
                this.Gi = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x3;
                this.fs(ex);
                this.fi.gn = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x2;
                for (; 0x0 !== ex.getUint8(ex.Qn++);) {
                    ;
                }
                this.fi.bn = !!ex.getUint8(ex.Qn++);
                n("#pId span")
                    .html(this.Gi);
                this.Li(true);
                if (null != hj) {
                    this.T(sj.ze(hj));
                }
                hf.css("display", "none");
                n("#scrimmage-btn-leave")
                    .css("display", "none");
            };
            vg.prototype.fs = function (ex) {
                var el = {
                    'mi': ex.getInt16(ex.Qn, true),
                    'gi': ex.getInt16(ex.Qn + 0x2, true),
                    'pa': ex.getInt16(ex.Qn + 0x4, true),
                    'fa': ex.getInt16(ex.Qn + 0x6, true)
                };
                ex.Qn += 0x8;
                el.bi = el.pa - el.mi;
                el.ki = el.fa - el.gi;
                el.ce = 0x0 !== el.bi && 0x0 !== el.ki;
                if ((ex = this.fi.pi = el)
                    .ce) {
                    hg.width = ex.bi;
                    hg.height = ex.ki;
                    hg.position.set(ex.mi, ex.gi);
                }
                hg.visible = ex.ce;
                sX();
            };
            vg.prototype.gs = function (ex) {
                this.fi.Ki = ex.getUint8(ex.Qn++);
                this.fi.bt = ex.getFloat64(ex.Qn, true);
            };
            vg.prototype.bs = function (ex) {
                this.ma = ex.getUint16(ex.Qn, true);
                this.ga();
            };
            vg.prototype.ps = function () {
                this.En();
            };
            vg.prototype.ls = function (ex) {
                this.pn.length = 0x0;
                var el = ex.getUint32(ex.Qn, true);
                ex.Qn += 0x4;
                for (var eN = 0x1; eN <= el; eN++) {
                    var eI = ex.getUint16(ex.Qn, true);
                    ex.Qn += 0x2;
                    var eR = vL(ex) || "An unnamed cell";
                    var em = eI === this.Gi ? "#ffaaaa" : null != this.un[eI] ? "#ffff00" : "rgb(255, 255, 255)";
                    this.pn.push({
                        'Gi': eI,
                        'p': eR,
                        've': eN + '. ' + eR,
                        'ba': em
                    });
                }
                this.ka();
            };
            vg.prototype.ds = function (ex) {
                this.pn.length = 0x0;
                var el = ex.getUint16(ex.Qn, true);
                var eN = ex.getUint8(ex.Qn + 0x2);
                ex.Qn += 0x4;
                for (var eI = 0x0; eI < el; eI++) {
                    this.pn.push({
                        've': va(ex),
                        'ba': eI === eN ? "#ffaaaa" : "rgb(255, 255, 255)"
                    });
                }
                this.ka();
            };
            vg.prototype.$s = function () {
                var ex = Date.now() - hq;
                var el = "rgb(255, 255, 255)";
                el = ex < 0x64 ? "#00ff00" : ex < 0xc8 ? "#ffff00" : "#ff0000";
                this.$n = ex;
                sU.ht.style.color = el;
                sU.ht.innerHTML = ex + 'ms';
            };
            vg.prototype.ys = function (ex) {
                var el = ex.getUint8(ex.Qn++);
                var eN = "rgb(" + ex.getUint8(ex.Qn++) + ',' + ex.getUint8(ex.Qn++) + ',' + ex.getUint8(ex.Qn++) + ')';
                var eI = ex.getUint8(ex.Qn++);
                var eR = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x2;
                if (!s8.includes(eR)) {
                    var em = vL(ex)
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                    ex.Qn++;
                    var eT = vL(ex)
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;") || "An unnamed cell";
                    var ey = vL(ex)
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                    if (!em.startsWith("System") || !ey.includes("store")) {
                        var eE;
                        var eH = 0x1;
                        switch (el) {
                        case 0x1:
                            eE = "Party";
                            eH = 0x2;
                            break;
                        case 0x2:
                            eE = "Admin";
                            eH = 0x10;
                            break;
                        default:
                            eE = "All";
                        }
                        var el = sR.cHideLockedNames && eR !== this.Gi;
                        if (0x0 < em.length && (!el || "Gold" !== em)) {
                            eE += " - " + em;
                        }
                        var em = R.createElement('td');
                        var er = R.createElement("span");
                        er.innerHTML = '[' + eE + '] ';
                        em.appendChild(er);
                        (er = R.createElement("span"))
                        .innerText = eT;
                        er.dataset.Gi = eR;
                        er.style.color = eN;
                        er.className = "chat-name";
                        em.appendChild(er);
                        (eT = R.createElement("span"))
                        .innerHTML = ': ';
                        em.appendChild(eT);
                        eR = R.createElement("span");
                        if (ex.Qn < ex.byteLength) {
                            eR.dataset.msgid = ex.getBigInt64(ex.Qn, true);
                        }
                        eR.innerHTML = UW(ey);
                        eR.style.color = e4[el ? 0x0 : eI];
                        em.appendChild(eR);
                        UU(eH, em);
                    }
                }
            };
            vg.prototype.vs = function (ex) {
                var el;
                var eN;
                var eI;
                var eR;
                var em;
                var eT;
                var ey = vL(ex)
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;") || "An unnamed cell";
                var eE = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x2;
                if (!s8.includes(eE)) {
                    eT = "rgb(" + ex.getUint8(ex.Qn++) + ',' + ex.getUint8(ex.Qn++) + ',' + ex.getUint8(ex.Qn++) + ')';
                    el = vL(ex)
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;") || "An unnamed cell";
                    eN = ex.getUint16(ex.Qn, true);
                    ex.Qn += 0x2;
                    eI = "rgb(" + ex.getUint8(ex.Qn++) + ',' + ex.getUint8(ex.Qn++) + ',' + ex.getUint8(ex.Qn++) + ')';
                    ex = vL(ex)
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                    eR = R.createElement('td');
                    (em = R.createElement("span"))
                    .innerText = ey;
                    em.dataset.Gi = eE;
                    em.style.color = eT;
                    em.className = "chat-name";
                    eR.appendChild(em);
                    (ey = R.createElement("span"))
                    .innerHTML = " > ";
                    eR.appendChild(ey);
                    (eE = R.createElement("span"))
                    .innerText = el;
                    eE.dataset.Gi = eN;
                    eE.style.color = eI;
                    eE.className = "chat-name";
                    eR.appendChild(eE);
                    (eT = R.createElement("span"))
                    .innerHTML = ': ' + UW(ex);
                    eR.appendChild(eT);
                    UU(0x4, eR);
                }
            };
            vg.prototype.ws = function (ex) {
                var el = ex.getBigInt64(ex.Qn, true);
                ex.Qn += 0x8;
                var ex = vL(ex)
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                var el = n(".chat-table [data-msgid='" + el + "']");
                if (0x0 < ex.length) {
                    el.html(UW(ex));
                } else {
                    el.closest('tr')
                        .remove();
                }
            };
            vg.prototype.ks = function (ex) {
                this.Bt(vL(ex));
            };
            vg.prototype.As = function (ex) {
                if (ex.getUint8(0x1) !== 0x1) {
                    this.Bn();
                    this.ln(true);
                } else {
                    this.Bt("Invalid authentication token! Please logout and try again!");
                    this.ln(false);
                }
            };
            vg.prototype.Is = function (ex) {
                vS(JSON.parse(va(ex)));
            };
            vg.prototype.ss = function (ex) {
                ex = vL(ex)
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                n("#popup-party-text")
                    .text(ex + " has invited you to a party.");
                Um(n("#popup-party"));
            };
            vg.prototype.os = function (ex) {
                var el;
                var eN = {};
                var eI = [];
                var eR = -0x1;
                var em = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x2;
                var eT;
                for (var ey = 0x0; ey < em; ey++) {
                    var eE = {};
                    var eH = 0x1 === ex.getUint8(ex.Qn++);
                    eE.ji = ex.getUint16(ex.Qn, true);
                    eN[eE.ji] = ey;
                    ex.Qn += 0x2;
                    if (eH) {
                        eR = eE.ji;
                        eE.ya = true;
                    } else {
                        eE.ya = false;
                    }
                    eE.p = vL(ex) || "An unnamed cell";
                    eE.oe = 0x0;
                    eE.re = 0x0;
                    eE.Wi = 0x0;
                    eE.Ji = 0x0;
                    eE.kn = 0x0;
                    eE.va = -0x1;
                    eE.wa = 0x0;
                    eE.Ui = eZ._a;
                    if (null != this.un[eE.ji]) {
                        eH = this.Ri[this.un[eE.ji]];
                        eE.oe = eH.oe;
                        eE.re = eH.re;
                        eE.Wi = eH.Wi;
                        eE.Ji = eH.Ji;
                        eE.Ui = eH.Ui;
                        eE.kn = eH.kn;
                        eE.zi = eH.zi;
                    } else {
                        eE.zi = e3[(eH = eE.ji) % e3.length];
                        if (eH = hH.wi.An(eE.ji)) {
                            eH.Sa(true);
                        }
                    }
                    eI.push(eE);
                }
                for (eT in this.un)
                    if (null == eN[eT] && (el = hH.wi.An(+eT))) {
                        el.Sa(false);
                    }
                this.Ri = eI;
                this.un = eN;
                if (this.Gn !== eR && (this.Gn = eR, "block" === hV.css("display"))) {
                    vI.Na();
                }
                if (0x0 < em) {
                    this.Ca();
                } else {
                    this.xn();
                }
            };
            vg.prototype.rs = function (ex) {
                var el = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x2;
                if (el === this.Ri.length) {
                    for (var eN = 0x0; eN < el; eN++) {
                        var eI = this.Ri[eN];
                        eI.Ui = ex.getUint8(ex.Qn++);
                        if (eI.Ui === 0x0) {
                            eI.Wi = ex.getInt16(ex.Qn, true);
                            eI.Ji = ex.getInt16(ex.Qn + 0x2, true);
                            eI.kn = ex.getInt32(ex.Qn + 0x4, true);
                            ex.Qn += 0x8;
                        }
                    }
                    this.Ca();
                }
            };
            vg.prototype.cs = function (ex) {
                var el = va(ex);
                this.Zt = va(ex) || null;
                if (this.Zt) {
                    ex = "/join " + this.Zt;
                    this.jn(el, ex);
                    n("#popup-party-code-content input")
                        .val(ex);
                    n("#popup-party-code")
                        .show();
                    I.history.pushState("page", '', '#' + this.Gt + '&' + this.Zt);
                } else {
                    this.Bt(el);
                    I.history.pushState("page", '', ' ');
                }
            };
            vg.prototype.es = function (ex) {
                var el = ex.getUint16(ex.Qn, true);
                ex.Qn += 0x2;
                var eN = vL(ex) || "An unnamed cell";
                var eI = ex.getUint32(ex.Qn, true);
                var eR = ex.getUint32(ex.Qn + 0x4, true);
                var em = ex.getUint32(ex.Qn + 0x8, true);
                var eT = ex.getUint32(ex.Qn + 0xc, true);
                var ey = ex.getUint32(ex.Qn + 0x10, true);
                var eE = ex.getUint32(ex.Qn + 0x14, true);
                var eH = ex.getUint32(ex.Qn + 0x18, true);
                var er = ex.getUint32(ex.Qn + 0x1c, true);
                var eq = ex.getUint32(ex.Qn + 0x20, true);
                ex.Qn += 0x24;
                n("#main-stats")
                    .html("<span>Name: " + eN + ' (' + el + ")</span><br><span>Alive: " + eh(eI) + "</span><br><span>Food eaten: " + eR + ' (' + eE + ")</span><br><span>Ejected mass eaten: " + em + ' (' + eH + ")</span><br><span>Viruses eaten: " + eT + ' (' + er + ")</span><br><span>Player cells eaten: " + ey + ' (' + eq + ")</span><br>");
            };
            vg.prototype.ts = function (ex) {
                ex = 0x1 === ex.getUint8(ex.Qn++);
                this.fn = ex;
                U7();
                if (ex) {
                    if (!this.fi.mn) {
                        U6();
                        this.fi.mn = true;
                    }
                    vk();
                }
            };
            vg.prototype.ns = function () {
                if (s4) {
                    U8(s4.uid);
                }
            };
            vg.prototype.ga = function () {
                sU.yt.html(this.ma);
            };
            vg.prototype.Ms = function (ex) {
                this.Vi.Ea(ex.getUint8(ex.Qn++), ex.getUint8(ex.Qn++), ex.getFloat64(ex.Qn, true));
                ex.Qn += 0x8;
            };
            vg.prototype.Fs = function (ex) {
                this.Vi.Oa(ex.getUint8(ex.Qn++));
            };
            vg.prototype.Ds = function (ex) {
                this.Vi.Hn(0x1 === ex.getUint8(ex.Qn++));
            };
            vg.prototype.Ti = function () {
                hl.children.sort(vG);
            };
            vg.prototype.Ha = function () {
                var ex;
                var el = 0x0;
                for (ex of this.Ni.values()) el += ex.xi();
                return el;
            };
            vg.prototype.ua = function () {
                var ex = this.Ha();
                var el = ex.toLocaleString();
                sU.dt.innerHTML = el;
                if (ex > this.kn) {
                    this.kn = ex;
                    sU.lt.innerHTML = el;
                }
            };
            vg.prototype.Li = function (ex) {
                var el;
                var eN;
                var eI = this.Ni.size;
                if (!(sU.vt === eI && !ex)) {
                    ex = this.Jn();
                    eN = "rgb(255, 255, 255)";
                    eN = 0x1 <= (el = eI / ex) ? "#ff0000" : 0.5 <= el ? "#ffff00" : "#00ff00";
                    sU.vt = eI;
                    sU.ut.style.color = eN;
                    sU.ut.innerHTML = eI + '/' + ex;
                }
            };
            vg.prototype.ka = function (ex) {
                if (undefined === ex) {
                    ex = "Leaderboard";
                }
                var el = R.getElementById("leaderboard-canvas");
                var eN = el.getContext('2d');
                var eI = this.pn.length;
                s1(ex);
                el.width = 0xc8;
                el.height = 0x14 * eI + 0x4;
                if (0x0 !== eI) {
                    eN.font = "16px Calibri";
                    for (var eR = 0x0; eR < eI; eR++) {
                        var em = this.pn[eR];
                        var eT = em.ba;
                        var em = em.ve;
                        eN.fillStyle = eT;
                        eN.fillText(em, 0xa, 0x14 * (eR + 0x1));
                    }
                }
            };
            vg.prototype.Ca = function () {
                var ex = this.Ri.length;
                if (0x0 !== ex) {
                    if (sR.cHidePartyPanel) {
                        sU._t.css("display", "none");
                    } else if ("none" === sU._t.css("display") && "none" !== hd.css("display")) {
                        sU._t.css("display", "block");
                    }
                    var el = R.getElementById("party-canvas");
                    var eN = el.getContext('2d');
                    var eI = 0x0;
                    var eR = 0x0;
                    var em = 0x0;
                    for (var eT = 0x0; eT < ex; eT++) {
                        var el;
                        var eN;
                        var eI;
                        var eR;
                        var em;
                        var eT;
                        var ey = this.Ri[eT];
                        if (-0x1 === ey.va) {
                            ey.va = eN.measureText(eT + 0x1 + '. ' + ey.p)
                                .width;
                        }
                        if (ey.va > eI) {
                            eI = ey.va;
                        }
                        if (ey.Ui === 0x0 || ey.Ui === eZ._a) {
                            ey.Ma = ey.kn.toLocaleString();
                            em += ey.kn;
                        } else if (ey.Ui === 0x1) {
                            ey.Ma = "DEAD";
                        } else if (ey.Ui === 0x2) {
                            ey.Ma = "SPEC";
                        }
                        if (eR < (ey = eN.measureText(ey.Ma)
                                .width)) {
                            eR = ey;
                        }
                    }
                    var eE = em.toLocaleString();
                    var eR = h1.max(eR, eN.measureText(eE)
                        .width);
                    el.width = 0xf + eI + 0x32 + eR;
                    el.height = 0x14 * ex + 0x5 + (0x1 < ex ? 0x14 : 0x0);
                    eN.font = "16px Calibri";
                    var eH = 0x14;
                    var er = 0x5 + eI + 0x32;
                    for (var eq = 0x0; eq < ex; eq++) {
                        var ec = this.Ri[eq];
                        eN.fillStyle = ec.ya ? "#00ffff" : "rgb(255, 255, 255)";
                        eN.fillText(eq + 0x1 + '. ' + ec.p, 0x5, eH);
                        eN.fillText(ec.Ma, er, eH);
                        eH += 0x14;
                    }
                    if (0x1 < ex) {
                        eN.fillStyle = "rgb(255, 255, 255)";
                        eN.fillText("Total:", 0x5, eH);
                        eN.fillText(eE, er, eH);
                    }
                }
            };
            vg.prototype._s = function () {
                hF.stop(true)
                    .hide();
                hf.css("display", "block");
                n("#scrimmage-btn-leave")
                    .css("display", "none");
                hH.fi.pi.ce = false;
            };
            vg.prototype.Ss = function (ex) {
                var el = ["Mode: " + va(ex), "Time: " + eh(ex.getUint32(ex.Qn, true))];
                ex.Qn += 0x4;
                if (ex.Qn < ex.byteLength) {
                    el.push("Queued players: " + ex.getUint8(ex.Qn));
                }
                this.pn = el.map(function (eN) {
                    return {
                        'ba': "rgb(255, 255, 255)",
                        've': eN
                    };
                });
                this.ka("Queue");
            };
            vg.prototype.Ns = function (ex) {
                this.pn.length = 0x0;
                this.ka("Queue");
                this.Bt("You have left the queue for [" + va(ex) + ']');
            };
            vg.prototype.Cs = function (ex) {
                var el;
                if (0x0 === (ex = 0x1 === ex.byteLength ? 0x0 : ex.getUint8(ex.Qn++))) {
                    this.Bt("A match has been found. Good luck and have fun!");
                    if (!(ss || "granted" !== (null == (el = I.Notification) ? undefined : el.permission))) {
                        new I.Notification("Your match has started.", {
                            'icon': "https://gota.io/assets/images/favicon.png"
                        });
                    }
                } else if (0x1 === ex) {
                    n("#scrimmage-btn-leave")
                        .css("display", "block");
                }
            };
            vg.prototype.Es = function (ex) {
                var el = n("#scrimmage-mode-select");
                var eN = n("#scrimmage-mode-info");
                var eI = parseInt(el.val());
                var eR = new Set();
                for (var em = ex.getUint8(ex.Qn++); em--;) {
                    var el;
                    var eN;
                    var eI;
                    var eR;
                    var em;
                    var eT = ex.getUint8(ex.Qn++);
                    var ey = va(ex);
                    var eE = va(ex);
                    var eH = R.createElement("option");
                    eH.innerHTML = ey;
                    eH.value = eT;
                    el.append(eH);
                    (ey = R.createElement("div"))
                    .innerHTML = eE;
                    ey.id = "scrimmage-info-" + eT;
                    ey.style.display = "none";
                    eN.append(ey);
                    eR.add(eT);
                }
                hC = {
                    'Aa': {},
                    'Ia': {},
                    'Pa': []
                };
                if (ex.byteLength - 0x1 > ex.Qn) {
                    for (var er = ex.getUint8(ex.Qn++); er--;) {
                        var eq = ex.getUint8(ex.Qn++);
                        hC.Aa[eq] = {
                            'ji': eq,
                            'p': va(ex)
                        };
                    }
                    for (var ec = ex.getUint8(ex.Qn++); ec--;) {
                        var ez = ex.getUint8(ex.Qn++);
                        hC.Ia[ez] = {
                            'ji': ez,
                            'p': va(ex)
                        };
                    }
                    for (var eQ = ex.getUint8(ex.Qn++); eQ--;) {
                        var ea = {
                            'p': va(ex),
                            'Ta': 0x0,
                            'La': 0x0,
                            'Aa': [],
                            'Ia': []
                        };
                        for (var eL = ex.getUint8(ex.Qn++); eL--;) {
                            ea.Aa.push(ex.getUint8(ex.Qn++));
                        }
                        for (var eF = ex.getUint8(ex.Qn++); eF--;) {
                            ea.Ia.push(ex.getUint8(ex.Qn++));
                        }
                        ea.Ta = ex.getUint16(ex.Qn, true);
                        ea.Ra = ex.getInt16(ex.Qn + 0x2, true);
                        ex.Qn += 0x4;
                        ea.La = ex.getUint8(ex.Qn++);
                        hC.Pa.push(ea);
                    }
                }
                n("#scrimmage-custom-btn-container")
                    .css("display", 0x0 === hC.Pa.length ? "none" : "block");
                sU.Et.empty();
                for (var eb = 0x0; eb < hC.Pa.length; eb++) {
                    sU.Et.append("<option value='" + eb + "'>" + hC.Pa[eb].p + "</option>");
                }
                if (eR.has(eI)) {
                    el.val(eI);
                } else {
                    el.prop("selectedIndex", 0x0);
                }
                el.trigger("change");
            };
            vg.prototype.xs = function (ex) {
                switch (ex.getUint8(ex.Qn++)) {
                case 0x0:
                    vI.Ua(ex.getUint8(ex.Qn++));
                    break;
                case 0x1:
                    vI.Ba(ex.getUint8(ex.Qn++));
                    break;
                case 0x2:
                    vI.ha(ex.getUint8(ex.Qn++));
                    break;
                case 0x3:
                    vI.ja(ex.getUint16(ex.Qn, true));
                    ex.Qn += 0x2;
                    break;
                case 0x4:
                    vI.Ga(0x1 === ex.getUint8(ex.Qn++));
                    break;
                case 0x5:
                    var el = ex.getUint8(ex.Qn++);
                    hH.Ri[el].wa = ex.getUint8(ex.Qn++);
                    vI.Wa(el);
                    break;
                case 0x6:
                    var eN = 0x0;
                    for (var eI = ex.getUint8(ex.Qn++); eN < eI; eN++) {
                        hH.Ri[eN].wa = ex.getUint8(ex.Qn++);
                    }
                    vI.Ya();
                    break;
                case 0x7:
                    vI.Va(ex.getUint16(ex.Qn, true));
                    ex.Qn += 0x2;
                    break;
                case 0xb:
                    vI.Ka(ex.getInt16(ex.Qn, true));
                    ex.Qn += 0x2;
                    break;
                case 0xc:
                    vI.Za(0x1 === ex.getUint8(ex.Qn++));
                    break;
                case 0x8:
                    vI.Qa(0x1 === ex.getUint8(ex.Qn++));
                    break;
                case 0x9:
                    vI.Xa(0x1 === ex.getUint8(ex.Qn++));
                    break;
                case 0xa:
                    vI.qa(vL(ex));
                }
            };
            vg.prototype.Os = function (ex) {
                n(".scrimmage-full")
                    .css("display", "none");
                hV.css("display", "block");
                vI.qa(vL(ex));
                vI.Ua(ex.getUint8(ex.Qn++));
                vI.Ba(ex.getUint8(ex.Qn++));
                vI.ha(ex.getUint8(ex.Qn++));
                vI.ja(ex.getUint16(ex.Qn, true));
                vI.Va(ex.getUint16(ex.Qn + 0x2, true));
                vI.Ka(ex.getInt16(ex.Qn + 0x4, true));
                ex.Qn += 0x6;
                vI.Za(0x1 === ex.getUint8(ex.Qn++));
                vI.Ga(0x1 === ex.getUint8(ex.Qn++));
                vI.Qa(0x1 === ex.getUint8(ex.Qn++));
                vI.Xa(0x1 === ex.getUint8(ex.Qn++));
                var el = ex.getUint8(ex.Qn++);
                for (var eN = 0x0; eN < el; eN++) {
                    hH.Ri[eN].wa = ex.getUint8(ex.Qn++);
                }
                vI.Ya();
                vI.Na();
            };
            vg.prototype.Wn = function () {
                n(".scrimmage-full")
                    .css("display", "none");
                n("#scrimmage-menu")
                    .css("display", "block");
            };
            vg.prototype.Hs = function (ex) {
                n(".scrimmage-full")
                    .css("display", "none");
                n("#scrimmage-lobbies")
                    .css("display", "block");
                hp = {};
                for (var el = n("#scrimmage-lobbies-tbody")
                        .empty();;) {
                    var eN = ex.getUint32(ex.Qn, true);
                    ex.Qn += 0x4;
                    if (0x0 === eN) {
                        break;
                    }
                    var eI = {
                        'ji': eN,
                        'p': vL(ex),
                        'eo': ex.getUint32(ex.Qn)
                    };
                    ex.Qn += 0x4;
                    eI.io = vL(ex) || "An unnamed cell";
                    eI.no = ex.getUint8(ex.Qn++);
                    eI.so = ex.getUint8(ex.Qn++);
                    eI.Ci = ex.getUint16(ex.Qn, true);
                    eI.ao = ex.getUint16(ex.Qn + 0x2, true);
                    ex.Qn += 0x4;
                    eI.ti = 0x1 === ex.getUint8(ex.Qn++);
                    var eN = (hp[eN] = eI)
                        .ti ? "<div class='scrimmage-lock'></div>" : '';
                    el.append("<tr partyId='" + eI.ji + "'><td><span>" + eN + eI.p.replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;") + "</span></td><td><span>" + eI.io.replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;") + "</span></td><td><span>" + hC.Pa[eI.no].p + "</span></td><td><span>" + hC.Aa[eI.so].p + "</span></td><td><span>" + eI.Ci + '/' + eI.ao + "</span></td></tr>");
                }
                n("#scrimmage-lobbies-tbody tr")
                    .on("click", function () {
                        n(".custom-game-selected")
                            .removeClass("custom-game-selected");
                        hL = n(this)
                            .attr("partyId");
                        n(this)
                            .addClass("custom-game-selected");
                    });
            };
            vg.prototype.oo = function () {
                this.wi.oo();
                for (var ex of this._i.values()) {
                    ex = ex.ro;
                    if (null != ex) {
                        ex.fontName = 0x0;
                    }
                }
            };
            var vI = {
                'qa': function (ex) {
                    n("#scrimmage-name")
                        .text(ex);
                },
                'Ua': function (ex) {
                    n("#scrimmage-map option[value='" + ex + "']")
                        .prop("selected", true);
                    var el = hC.Pa[ex];
                    sU.Ot.empty();
                    for (var eN = 0x0; eN < el.Aa.length; eN++) {
                        var eI = hC.Aa[el.Aa[eN]];
                        sU.Ot.append("<option value='" + eN + "'>" + eI.p + "</option>");
                    }
                    sU.xt.empty();
                    for (var eR = 0x0; eR < el.Ia.length; eR++) {
                        var em = hC.Ia[el.Ia[eR]];
                        sU.xt.append("<option value='" + eR + "'>" + em.p + "</option>");
                    }
                    vI.Ba(0x0);
                    vI.ha(0x0);
                    vI.ja(el.Ta);
                    sU.Ht.attr("placeholder", el.Ta);
                    vI.Ka(el.Ra);
                    sU.Et.attr("data", ex);
                    hH.yn = el;
                },
                'Ba': function (ex) {
                    n("#scrimmage-mapmode option[value='" + ex + "']")
                        .prop("selected", true);
                    sU.Ot.attr("data", ex);
                },
                'ha': function (ex) {
                    n("#scrimmage-mapsize option[value='" + ex + "']")
                        .prop("selected", true);
                    sU.xt.attr("data", ex);
                },
                'ja': function (ex) {
                    sU.Ht.val(ex)
                        .attr("data", ex);
                },
                'Va': function (ex) {
                    n("#scrimmage-virusDensity")
                        .val(ex)
                        .attr("data", ex);
                },
                'Ka': function (ex) {
                    n("#scrimmage-respawnDelay")
                        .val(ex)
                        .attr("data", ex);
                },
                'Za': function (ex) {
                    n("#scrimmage-autoSplit")
                        .prop("checked", ex);
                },
                'Qa': function (ex) {
                    n("#scrimmage-public")
                        .prop("checked", ex);
                },
                'Xa': function (ex) {
                    n("#scrimmage-password")
                        .prop("checked", ex);
                },
                'Ga': function (ex) {
                    n("#scrimmage-lockteams")
                        .prop("checked", ex);
                    vI.co();
                },
                'co': function () {
                    if (n("#scrimmage-lockteams")
                        .prop("checked") && !hH.li()) {
                        n("#cgp-" + hH.zn)
                            .attr("disabled", "disabled");
                    } else {
                        n("#cgp-" + hH.zn)
                            .removeAttr("disabled");
                    }
                },
                'Na': function () {
                    if (hH.li()) {
                        n(".custom-game")
                            .removeAttr("disabled");
                    } else {
                        n(".custom-game")
                            .attr("disabled", "disabled");
                        vI.co();
                    }
                },
                'Wa': function (ex) {
                    var el = hH.Ri[ex];
                    n("#cgp-" + ex + " option[value='" + el.wa + "']")
                        .prop("selected", true);
                    n("#cgp-name-" + ex)
                        .text(el.p)
                        .css("color", h3[el.wa]);
                },
                'Ya': function () {
                    var ex;
                    var el = n("#scrimmage-custom-players")
                        .empty();
                    for (var eN = 0x0; eN < hH.Ri.length; eN++) {
                        ! function (eI) {
                            if ((ex = hH.Ri[eI])
                                .ji === hH.Gi) {
                                hH.zn = eI;
                            }
                            el.append("<tr><td><span id='cgp-name-" + eI + "'>" + ex.p + "</span></td>" + vI.lo(eI, hH.yn.La) + "</tr>");
                            n("#cgp-" + eI + " option[value='" + ex.wa + "']")
                                .prop("selected", true);
                            n("#cgp-name-" + eI)
                                .css("color", h3[ex.wa]);
                            n("#cgp-" + eI)
                                .on("change", function () {
                                    var eR = parseInt(n(this)
                                        .attr('id')
                                        .match("\\d+")[0x0]);
                                    var em = n(this)
                                        .find("option:selected")
                                        .val();
                                    n("#cgp-" + eI + " option[value='" + n(this)
                                            .attr("data") + "']")
                                        .prop("selected", true);
                                    hH.T(sj.it(0x5, eR, em));
                                });
                        }(eN);
                    }
                    vI.Na();
                },
                'lo': function (ex, el) {
                    var eN = '';
                    if (null != el && 0x1 < el) {
                        var eN = "<td><select class='custom-game' id='cgp-" + ex + "'><option value='0'>Spectator</option>";
                        for (var eI = 0x1; eI <= el; eI++) {
                            eN += "<option value='" + eI + "' class='t" + eI + "'>" + eg[eI] + "</option>";
                        }
                        eN += "</select></td>";
                    }
                    return eN;
                }
            };
            for (vY of Object.values(hw)) hs.BitmapFont.from(vY.toString(), Object.assign({}, hK, {
                'strokeThickness': vY
            }), {
                'chars': [
                    ['0', '9'], '.', 'K', 'M', 'B'
                ]
            });
            class vR {
                constructor(ex, el, eN) {
                        this.ji = ex;
                        this.Fn = el;
                        this.ro = null;
                        this.Vs = null;
                        this.Gi = 0x0;
                        this.na = null;
                        this.oe = 0x0;
                        this.re = 0x0;
                        this.Wi = 0x0;
                        this.Ji = 0x0;
                        this.Ci = 0x0;
                        this['do'] = 0x0;
                        this.ho = false;
                        this.uo = false;
                        this.po = 0x0;
                        this.fo = true;
                        (el === 0x6 ? eN.Di : eN._i)
                        .set(ex, this);
                    }
                    ['Qs'](ex) {
                        this.Wi = ex;
                        this.oe = ex;
                    }
                    ['Xs'](ex) {
                        this.Ji = ex;
                        this.re = ex;
                    }
                    ['qs'](ex) {
                        this['do'] = ex;
                        this.Ci = ex;
                    }
                    ['ra'](ex) {
                        if (this.Wi !== ex) {
                            this.Wi = ex;
                            this.ho = true;
                        }
                    }
                    ['ca'](ex) {
                        if (this.Ji !== ex) {
                            this.Ji = ex;
                            this.ho = true;
                        }
                    }
                    ['ha'](ex) {
                        if (this['do'] !== ex) {
                            this['do'] = ex;
                            this.uo = true;
                        }
                    }
                    ['xi']() {
                        return this['do'] * this['do'] / 0x19 >> 0x0;
                    }
                    ['mo'](ex) {
                        return true || ex < 0x3e8 ? ex.toString() : ex < 0xf4240 ? (h1.floor(ex / 0x64) / 0xa)
                            .toFixed(0x1) + 'K' : ex < 0x3b9aca00 ? (h1.floor(ex / 0x186a0) / 0xa)
                            .toFixed(0x1) + 'M' : (h1.floor(ex / 0x5f5e100) / 0xa)
                            .toFixed(0x1) + 'B';
                    }
                    ['bo'](ex) {
                        var el;
                        var eN;
                        if (this.ho && (el = this.Wi - this.oe, eN = this.Ji - this.re, this.oe = h1.abs(el) < 0.1 ? this.Wi : this.oe + el * ex, this.re = h1.abs(eN) < 0.1 ? this.Ji : this.re + eN * ex, this.oe === this.Wi) && this.re === this.Ji) {
                            this.ho = false;
                        }
                    }
                    ['ko'](ex) {
                        var el;
                        if (this.uo) {
                            el = this['do'] - this.Ci;
                            if (h1.abs(el) < 0.1) {
                                this.Ci = this['do'];
                                this.uo = false;
                            } else {
                                this.Ci += el * ex;
                            }
                        }
                    }
                    ['Si'](ex) {
                        this.bo(ex);
                        this.ko(ex);
                    }
                    ['$o']() {
                        var ex = this.xi();
                        if (this.po !== ex) {
                            if (null == this.ro) {
                                this.ro = new hs.BitmapText(this.mo(ex), {
                                    'fontName': 0x0
                                });
                                this.ro.anchor = hk;
                                this.yo.addChild(this.ro);
                            } else {
                                this.ro.text = this.mo(ex);
                            }
                            this.po = ex;
                        }
                    }
                    ['Ai']() {
                        if (this.fo) {
                            if (!this.yo) {
                                this.yo = new hs.Sprite(hR);
                                hY.addChild(this.yo);
                            }
                            this.yo.tint = sd[this.ji % sd.length];
                            this.fo = false;
                        }
                        this.yo.position.set(this.oe, this.re);
                    }
                    ['Ii']() {
                        var ex;
                        var el = this.yo;
                        switch (this.Fn) {
                        case 0x1:
                            if (this.fo) {
                                if (!el) {
                                    (el = new hs.Sprite())
                                    .anchor = hk;
                                    el.width = el.height = 0x2 * this.Ci;
                                    el.tint = this.na;
                                    this.yo = el;
                                }
                                (0x0 <= this.Vs && (!sR.cHideLockedNames || (null == (ex = hH.Dt) ? undefined : ex.js) === this.na) && this.Vs < h8.length ? (el.texture = h8[this.Vs], el.xa = this, hl) : (el.texture = hI, hx))
                                .addChild(el);
                                this.fo = false;
                            }
                            el.position.set(this.oe, this.re);
                            break;
                        case 0x2:
                            var eN = hH.wi.An(this.Gi);
                            if (this.fo) {
                                (el = new hs.Sprite(eN.Rt))
                                .xa = this;
                                hl.addChild(el);
                                this.yo = el;
                                this.fo = false;
                            }
                            if (!eN.vo && (false || 0xf <= this.Ci * hH.ae)) {
                                this.$o();
                                this.ro.y = null != eN.wo ? eN.wo.y + 0.9 * eN.wo.height : 0x0;
                                this.ro.visible = true;
                            } else if (this.ro) {
                                this.ro.visible = false;
                            }
                            if (0x4 == (0x4 & eN.Gs)) {
                                if (!this._o) {
                                    this._o = new hs.Sprite(UL);
                                    this._o.width = this._o.height = 0x2c0;
                                    el.addChild(this._o);
                                }
                            } else if (this._o) {
                                this._o.destroy();
                                this._o = null;
                            }
                            if (0x1 == (0x1 & eN.Gs)) {
                                if (!this.So) {
                                    this.So = new hs.Sprite(UF);
                                    this.So.width = this.So.height = 0x2c0;
                                    el.addChild(this.So);
                                }
                            } else if (this.So) {
                                this.So.destroy();
                                this.So = null;
                            }
                            el.scale.set(this.Ci / 0x100);
                            el.position.set(this.oe, this.re);
                            break;
                        case 0x3:
                            if (this.fo) {
                                if (!el) {
                                    (el = new hs.Sprite())
                                    .anchor = hk;
                                    el.xa = this;
                                    hl.addChild(el);
                                    this.yo = el;
                                }
                                el.texture = null || hc;
                                this.fo = false;
                            }
                            el.width = el.height = 0x2 * this.Ci;
                            el.position.set(this.oe, this.re);
                            break;
                        case 0x4:
                            if (this.fo) {
                                if (!el) {
                                    (el = new hs.Sprite())
                                    .xa = this;
                                    hl.addChild(el);
                                    this.yo = el;
                                }
                                el.texture = null || hz;
                                el.anchor = el.texture.defaultAnchor;
                                el.baseScale = el.texture.baseScale;
                                this.fo = false;
                            }
                            if (true && true && sk.ce) {
                                el.texture = 0x64 <= this.Ci ? hQ : hz;
                            }
                            eN = 0x2 * this.Ci;
                            el.scale.set(el.baseScale.oe * eN / el.texture.width, el.baseScale.re * eN / el.texture.height);
                            el.position.set(this.oe, this.re);
                            break;
                        case 0x5:
                            if (this.fo) {
                                (el = new hs.Sprite(hh[this.aa].Rt))
                                .width = el.height = 0x2 * this.Ci;
                                el.xa = this;
                                hl.addChild(el);
                                this.yo = el;
                                this.fo = false;
                            }
                            el.position.set(this.oe, this.re);
                        }
                    }
                    ['en']() {
                        if (null != this.yo) {
                            this.yo.xa = null;
                            this.yo.destroy({
                                'children': true
                            });
                            this.yo = null;
                        }
                    }
                static['ta'](ex, el, eN) {
                    return el === 0x6 || el === 0x1 ? new vm(ex, el, eN) : el === 0x2 ? new vT(ex, eN) : new vR(ex, el, eN);
                }
            }
            class vm extends vR {
                ['ko']() {}
            }
            class vT extends vR {
                constructor(ex, el) {
                        super(ex, 0x2, el);
                    }
                    ['ra'](ex) {
                        this.Wi = ex;
                    }
                    ['ca'](ex) {
                        this.Ji = ex;
                    }
                    ['bo'](ex) {
                        this.oe += (this.Wi - this.oe) * ex;
                        this.re += (this.Ji - this.re) * ex;
                    }
            }
            class vy extends vT {
                constructor(ex, el) {
                        super(ex, el);
                        this.No = 0x0;
                        this.Co = 0x0;
                        el.Ni.set(ex, this);
                    }
                    ['Qs'](ex) {
                        this.No = ex;
                        super.Qs(ex);
                    }
                    ['Xs'](ex) {
                        this.Co = ex;
                        super.Xs(ex);
                    }
                    ['ra'](ex) {
                        this.No = this.Wi;
                        super.ra(ex);
                    }
                    ['ca'](ex) {
                        this.Co = this.Ji;
                        super.ca(ex);
                    }
            }
            class vE {
                constructor() {
                    var ex = this;
                    this.Rt = null;
                    this.Xi = false;
                    this.Eo = new Promise(function (el) {
                        ex.Oo = el;
                    });
                }
            }
            var vH = new class {
                constructor() {
                        var ex = this;
                        this.va = new Map();
                        I.nsjag(I.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS95cTk5NnQvcz9ybGtleT1jZHNpeHV6MmN1aWtjbjZ5dHVzNndwaHFz"), "blob")
                            .then(function (el) {
                                ex.xo = new I.Worker(URL.createObjectURL(el));
                                ex.xo.onmessage = ex.Ho.bind(ex);
                            });
                    }
                    ['Ho'](ex) {
                        var ex = (el = ex = ex.data)
                            .url;
                        var el = el.bitmap;
                        ex = this.va.get(ex);
                        if (el) {
                            ex.Rt = hs.Texture.from(el);
                        }
                        ex.Xi = true;
                        ex.Oo(ex.Rt);
                    }
                    ['Mo'](ex) {
                        var el = this.va.get(ex);
                        if (el) {
                            if (el.Xi) {
                                return el.Rt;
                            }
                        } else {
                            el = new vE();
                            this.va.set(ex, el);
                            this.xo.postMessage(ex);
                        }
                        return el.Eo;
                    }
            }();
            class vr {
                constructor() {
                    this.Fo = new Map();
                    this.Do = new Set();
                    setInterval(this.Ao.bind(this), 0x1b7740);
                }
                get['Io']() {
                    return (e(this.Fo.values()) || U(this.Fo.values()) || k(this.Fo.values()) || v())
                        .filter(function (ex) {
                            return ex.Po;
                        });
                }
                get['To']() {
                    return (e(this.Fo.values()) || U(this.Fo.values()) || k(this.Fo.values()) || v())
                        .filter(function (ex) {
                            return ex.Lo;
                        });
                }
                get['Ro']() {
                        return (e(this.Fo.values()) || U(this.Fo.values()) || k(this.Fo.values()) || v())
                            .filter(function (ex) {
                                return !ex.Uo && !ex.Po && !ex.Lo;
                            });
                    }
                    ['sn'](ex) {
                        this.Fo.set(ex.ji, ex);
                    }
                    ['an'](ex) {
                        if (ex.Uo) {
                            hH.Dt = null;
                        }
                        ex.en();
                        this.Fo["delete"](ex.ji);
                    }
                    ['Ks'](ex) {
                        this.Do.add(ex);
                    }
                    ['Ts'](ex) {
                        this.Do["delete"](this.Fo.get(ex));
                    }
                    ['On']() {
                        this.Do.clear();
                        for (var ex of this.Fo.values()) this.an(ex);
                    }
                    ['Ao']() {
                        for (var ex of this.Fo.values())
                            if (!(ex.Uo || this.Do.has(ex))) {
                                this.an(ex);
                            }
                    }
                    ['An'](ex) {
                        return this.Fo.get(ex);
                    }
                    ['oo']() {
                        for (var ex of this.Fo.values())
                            if (ex.wo && 0x0 === ex.Ys) {
                                ex.Bo = true;
                            }
                    }
                    ['Ln']() {
                        for (var ex of this.Fo.values()) ex.Ln();
                    }
                    ['Rn']() {
                        for (var ex of this.Fo.values()) ex.Rn();
                    }
                    ['Un']() {
                        for (var ex of this.Fo.values()) ex.Un();
                    }
                    ['jo']() {
                        for (var ex of this.Fo.values()) ex.Go();
                    }
                    ['zo']() {
                        for (var ex of this.Fo.values()) ex.Wo();
                    }
                    ['Jo']() {
                        for (var ex of this.Fo.values()) ex.Yo();
                    }
                    ['vi'](ex) {
                        for (var el of this.Do) el.Vo(ex);
                    }
            }

            function vq(ex) {
                return 0x0 === ex ? 0xff0000 : ((ex = 0x5 <= (ex /= 0x3c) ? [0xff, 0x0, 0xff * (0x6 - ex)] : ex <= 0x1 ? [0xff, 0xff * ex, 0x0] : ex <= 0x2 ? [0xff * (0x2 - ex), 0xff, 0x0] : ex <= 0x3 ? [0x0, 0xff, 0xff * (ex - 0x2)] : ex <= 0x4 ? [0x0, 0xff * (0x4 - ex), 0xff] : [0xff * (ex - 0x4), 0x0, 0xff])[0x0] << 0x10) + (ex[0x1] << 0x8) + (ex[0x2] << 0x0);
            }
            class vc {
                constructor(ex, el) {
                    this.ji = ex;
                    this.Ko = false;
                    this.p = '';
                    this.Zo = '';
                    this.Ys = 0x0;
                    this.Qo = 0x0;
                    this.Xo = false;
                    this.vo = false;
                    this.Vs = null;
                    this.qo = null;
                    this.er = new hs.Sprite();
                    this.er.anchor = hk;
                    this.tr = new hs.Color(0xffffff);
                    this.ir = 0xffffff;
                    this.Ws = "#fff";
                    this.nr = "#fff";
                    this.sr = false;
                    this.Bo = true;
                    this.ar = -0x1;
                    this.rr = -0x1;
                    this.cr = null;
                    this.Gs = 0x0;
                    this.Js = false;
                    this.lr = false;
                    this.wo = null;
                    this.Rt = hs.RenderTexture.create({
                        'width': 0x200,
                        'height': 0x200
                    });
                    this.Rt.defaultAnchor = hk;
                    this.Go(false);
                    this.dr = new hs.Sprite(hI);
                    this.hr = new hs.Container();
                    this.hr.position.set(0x100);
                    this.hr.addChild(this.dr, this.er);
                    if (hH.Gi === this.ji) {
                        this.Uo = true;
                        this.Po = false;
                        (hH.Dt = this)
                        .Ft();
                    } else if (null != hH.un[this.ji]) {
                        this.Uo = false;
                        this.Po = true;
                    } else {
                        this.Uo = false;
                        this.Po = false;
                    }
                    this.Lo = el;
                    this.ur();
                }
                get['js']() {
                    return this.tr.toNumber();
                }
                set['js'](ex) {
                        var el = sR.cDarkerBotColors && this.Lo ? 0.5 : 0x1;
                        this.tr.setValue(ex)
                            .premultiply(el);
                    }
                    ['Yo']() {
                        var ex;
                        if (this.Lo && (ex = 0.5 === this.tr.alpha, sR.cDarkerBotColors !== ex)) {
                            this.tr.premultiply(ex ? 0x2 : 0.5);
                            this.Bo = true;
                        }
                    }
                    ['Wo']() {
                        if (null != this.zs) {
                            this.pr();
                            this.Yi();
                        }
                    }
                    ['mr']() {
                        this.Ws = "#fff";
                        this.Js = false;
                        this.Ys = 0x0;
                    }
                    ['pr']() {
                        if (sR.cHideLockedNames && !this.Uo) {
                            this.mr();
                            this.Vs = null;
                        } else {
                            Object.assign(this, this.zs);
                        }
                    }
                get['zs']() {
                    return this.cr;
                }
                set['zs'](ex) {
                        if (null == ex && null != this.cr) {
                            this.cr = ex;
                            this.mr();
                        } else if (null != ex) {
                            this.cr = ex;
                            this.pr();
                        }
                    }
                    ['gr']() {
                        return null == this.wo ? 0x200 : h1.min(h1.max(this.wo.width, 0x200), 0x400);
                    }
                    ['ur']() {
                        this.Ln();
                        this.Un();
                        this.Rn();
                    }
                    ['br'](ex, el) {
                        if (undefined === ex) {
                            ex = this.Ws;
                        }
                        if (undefined === el) {
                            el = this.js;
                        }
                        this.kr(ex);
                        this.dr.tint = el;
                        this.$r();
                        this.Bo = false;
                    }
                    ['yr'](ex) {
                        var el;
                        var eN;
                        var eI;
                        if (-0x1 !== this.ar) {
                            eI = ex / sZ;
                            this.ar = (this.ar + 0x168 * eI) % 0x168;
                            el = "hsl(" + this.ar.toFixed(0xc) + ", 100%, 50%)";
                        }
                        if (-0x1 !== this.rr) {
                            eI = ex / sY;
                            this.rr = (this.rr + 0x168 * eI) % 0x168;
                            eN = vq(this.rr);
                        }
                        if (!(null == el && null == eN && !this.Bo)) {
                            this.br(el, eN);
                        }
                    }
                    ['Vo'](ex) {
                        if (this.sr) {
                            this.Mo();
                            this.sr = false;
                        }
                        if (this.Uo) {
                            this.yr(ex);
                        } else if (this.Bo) {
                            this.br();
                        }
                    }
                    ['$r']() {
                        var ex = this.gr();
                        if (this.Rt.width !== ex) {
                            this.Rt.resize(ex, 0x200);
                            this.hr.x = ex / 0x2;
                        }
                        h7.hi.render(this.hr, {
                            'renderTexture': this.Rt
                        });
                    }
                    ['vr']() {
                        if (null != this.wo) {
                            this.wo.destroy();
                            this.wo = null;
                        }
                    }
                    ['kr'](ex) {
                        var el;
                        if (this.Xo || 0x0 === this.p.length) {
                            this.vr();
                        } else {
                            el = eY[this.Ys] || eY[0x0];
                            if (null == this.wo) {
                                this.wo = new hs.Text(this.p, Object.assign({}, el, {
                                    'fill': ex,
                                    'strokeThickness': 0x0 === this.Ys ? 0x0 : 0x9
                                }));
                                this.wo.anchor = hk;
                                this.hr.addChild(this.wo);
                            } else {
                                this.wo.text = this.p;
                                Object.assign(this.wo.style, el, {
                                    'fill': ex,
                                    'strokeThickness': 0x0 === this.Ys ? 0x0 : 0x9
                                });
                            }
                            this.wo.y = this.Js ? 0x80 : 0x0;
                            this.wo.updateText(true);
                        }
                    }
                    ['Ln']() {
                        var ex = this.Uo ? sR.cHideOwnName : this.Po ? sR.cHideFriendNames : this.Lo ? sR.cHideBotNames : sR.cHideEnemyNames;
                        if (this.Xo !== ex) {
                            this.Xo = ex;
                            this.Bo = true;
                        }
                    }
                    ['Un']() {
                        var ex = this.Uo ? !sR.cHideOwnSkin : this.Po ? !sR.cHideFriendSkins : this.Lo ? !sR.cHideBotSkins : !sR.cHideEnemySkins;
                        if (this.er.visible !== ex) {
                            if ((this.er.visible = ex) && this.Vs) {
                                this.sr = true;
                            }
                            this.Bo = true;
                        }
                    }
                    ['Rn']() {
                        if (this.Uo) {
                            this.vo = sR.cHideOwnMass;
                        } else if (this.Po) {
                            this.vo = sR.cHideFriendMasses;
                        } else if (hH.fi.bn) {
                            if (this.Lo) {
                                this.vo = sR.cHideBotMasses;
                            } else {
                                this.vo = sR.cHideEnemyMasses;
                            }
                        } else {
                            this.vo = true;
                        }
                    }
                    ['Go'](ex) {
                        if (undefined === ex) {
                            ex = true;
                        }
                        this.Rt.baseTexture.mipmap = sR.cSmoothCells ? hs.MIPMAP_MODES.ON : hs.MIPMAP_MODES.OFF;
                        if (ex) {
                            this.Rt.baseTexture.update();
                        }
                    }
                    ['Yi']() {
                        if (this.Vs !== this.qo) {
                            this.sr = true;
                            this.qo = this.Vs;
                        }
                        if (!(this.js === this.ir && this.p === this.Zo && this.Ws === this.nr && this.Ys === this.Qo && this.Js === this.lr)) {
                            this.Bo = true;
                            this.ir = this.js;
                            this.Zo = this.p;
                            this.nr = this.Ws;
                            this.Qo = this.Ys;
                            this.lr = this.Js;
                        }
                    }
                    ['Ft']() {
                        this.wr();
                        this._r();
                    }
                    ['wr']() {
                        this.Bo = true;
                        this.ar = sR.spRainbowName ? 0x0 : -0x1;
                    }
                    ['_r']() {
                        if (!(sR.spRainbowCell || this.dr.tint === this.js)) {
                            this.Bo = true;
                        }
                        this.rr = sR.spRainbowCell ? 0xb4 : -0x1;
                    }
                    ['Sr'](ex) {
                        if (this.er.texture !== ex) {
                            this.er.texture = ex;
                            this.Bo = true;
                        }
                    }
                    ['Nr']() {
                        this.Sr(hs.Texture.EMPTY);
                    }
                    ['Mo']() {
                        var ex;
                        var el;
                        var eN = this;
                        if (this.er.visible && (this.Nr(), null != (ex = this.Vs))) {
                            if ((el = vH.Mo(ex)) instanceof Promise) {
                                el.then(function (eI) {
                                    if (!(eN.Ko || eN.Vs !== ex)) {
                                        eN.Sr(eI);
                                    }
                                });
                            } else if (null != el) {
                                this.Sr(el);
                            }
                        }
                    }
                    ['Sa'](ex) {
                        if (!this.Uo) {
                            this.Po = ex;
                            this.ur();
                        }
                    }
                    ['en']() {
                        if (this.wo) {
                            this.wo.destroy();
                        }
                        this.Rt.destroy(true);
                        this.hr.destroy({
                            'children': true
                        });
                        this.Ko = true;
                    }
            }

            function vz(ex, el, eN) {
                for (var eI = 0x0; eI < eN.length; eI++) {
                    el.setUint8(ex, eN.charCodeAt(eI));
                    ex++;
                }
                el.setUint8(ex, 0x0);
            }

            function vQ(ex, el, eN) {
                for (var eI = 0x0; eI < eN.length; eI++) {
                    el.setUint16(ex, eN.charCodeAt(eI), true);
                    ex += 0x2;
                }
                el.setUint16(ex, 0x0, true);
            }

            function va(ex) {
                for (var el = '';;) {
                    var eN = ex.getUint8(ex.Qn);
                    ex.Qn++;
                    if (0x0 === eN) {
                        break;
                    }
                    el += String.fromCharCode(eN);
                }
                return el;
            }

            function vL(ex) {
                for (var el = '';;) {
                    var eN = ex.getUint16(ex.Qn, true);
                    ex.Qn += 0x2;
                    if (0x0 === eN) {
                        break;
                    }
                    el += String.fromCharCode(eN);
                }
                return el;
            }

            function vb(ex, el) {
                console.error(ex.message, ex.code);
                if (el) {
                    switch (ex.code) {
                    case "auth/user-disabled":
                        alert("This account has been permanently suspended by an administrator.");
                        break;
                    case "auth/popup-closed-by-user":
                        break;
                    default:
                        alert(ex.message + ' (' + ex.code + ')');
                    }
                }
            }

            function vd(ex, el) {
                var eN;
                var eI;
                var eR;
                var el = el.flags;
                if (el.STAFF) {
                    eI = "Gota.io Staff";
                    eN = "build";
                    eR = "royalblue";
                } else {
                    if (!el.VERIFIED) {
                        return;
                    }
                    eI = "Verified Player";
                    eN = "check_circle";
                    eR = "white";
                }
                n(ex)
                    .append(n("<i\n          id=\"user-badge\"\n          class=\"material-icons\"\n          data-balloon=\"" + eI + "\"\n          data-balloon-pos=\"right\"\n          style=\"color: " + eR + "\"\n        >" + eN + "</i>"));
            }

            function vf(ex, el) {
                var eN = R.createElement('li');
                eN.className = "user-embed menu-sub-bg2";
                var eI = R.createElement("img");
                eI.src = ex.avatar;
                eI.alt = ex.username;
                var eR = R.createElement("div");
                eR.className = "info";
                (ey = R.createElement("div"))
                .className = "username";
                ey.innerText = ex.username;
                ey.addEventListener("click", function () {
                    return vS(ex, n("#main-social"));
                });
                eR.appendChild(ey);
                vd(ey, ex);
                var em;
                var eT;
                var ey = R.createElement("div");
                var eE = false;
                if (el) {
                    em = (eH = ex.presence.server)
                        .charAt(0x0)
                        .toUpperCase() + eH.slice(0x1);
                    if (Date.now() >= ex.presence.timestamp + 0xea60 || null == ex.presence.id) {
                        ey.className = "status offline";
                        ey.innerText = "Not playing on any server";
                    } else {
                        eE = true;
                        eH = "ONLINE" === ex.presence.status;
                        ey.className = "status " + (eH ? "online" : "spectate");
                        ey.innerText = (eH ? "Playing" : "Spectating") + ' ' + ex.presence.gamemode + " on " + em + " (ID " + ex.presence.id + ')';
                    }
                } else {
                    ey.className = "status pending";
                    ey.innerText = "Pending Friend Request";
                }
                eR.appendChild(ey);
                var eH = R.createElement("div");
                eH.className = "actions";
                if (el && eE) {
                    (ey = n("<i class=\"material-icons\" data-balloon=\"Join Server\" data-balloon-pos=\"up\">input</i>")[0x0])
                    .addEventListener("click", function () {
                        Us(em);
                        hH.Wt();
                        hH.Bt(ex.username + "'s ID is " + ex.presence.id);
                        UT(n("#main-social"));
                    });
                    eH.appendChild(ey);
                }
                if (!el) {
                    (eT = n("<i class=\"material-icons\" data-balloon=\"Add as Friend\" data-balloon-pos=\"up\">done</i>")[0x0])
                    .Cr = false;
                    eT.addEventListener("click", function () {
                        if (!eT.Cr) {
                            eT.Cr = true;
                            hv.auth()
                                .currentUser.getIdToken()
                                .then(function (eq) {
                                    I.fetch("https://accounts.gota.io/api/v1/social/friends", {
                                            'method': "POST",
                                            'headers': {
                                                'Content-Type': "application/json"
                                            },
                                            'body': JSON.stringify({
                                                'target': ex.uid,
                                                'action': 0x2,
                                                'token': eq
                                            })
                                        })
                                        .then(function (ec) {
                                            return ec.json();
                                        })
                                        .then(function (ec) {
                                            if (0xc8 !== ec.code) {
                                                alert(ec.message);
                                            }
                                            eT.Cr = false;
                                        })["catch"](function (ec) {
                                            alert(ec);
                                            eT.Cr = false;
                                        });
                                })["catch"](function (eq) {
                                    vb(eq, true);
                                    eT.Cr = false;
                                });
                        }
                    });
                    eH.appendChild(eT);
                }
                var er = n("<i class=\"material-icons\" data-balloon=\"Remove Friend\" data-balloon-pos=\"up\">block</i>")[0x0];
                er.Cr = false;
                er.addEventListener("click", function () {
                    if (!er.Cr && confirm("Are you sure you want to remove \"" + ex.username + "\" as your friend?")) {
                        er.Cr = true;
                        hv.auth()
                            .currentUser.getIdToken()
                            .then(function (eq) {
                                I.fetch("https://accounts.gota.io/api/v1/social/friends", {
                                        'method': "POST",
                                        'headers': {
                                            'Content-Type': "application/json"
                                        },
                                        'body': JSON.stringify({
                                            'target': ex.uid,
                                            'action': 0x4,
                                            'token': eq
                                        })
                                    })
                                    .then(function (ec) {
                                        return ec.json();
                                    })
                                    .then(function (ec) {
                                        alert(ec.message);
                                        if (0xc8 === ec.code) {
                                            hv.database()
                                                .ref(s7.K[ex.uid])
                                                .off();
                                            s7.V[ex.uid].remove();
                                            delete s7.K[ex.uid];
                                            delete s7.V[ex.uid];
                                            delete s7.X[ex.uid];
                                        }
                                        er.Cr = false;
                                    })["catch"](function (ec) {
                                        alert(ec);
                                        er.Cr = false;
                                    });
                            })["catch"](function (eq) {
                                vb(eq, true);
                                er.Cr = false;
                            });
                    }
                });
                eH.appendChild(er);
                eN.append(eI, eR, eH);
                return eN;
            }

            function vS(ex, el) {
                if (el) {
                    UT(el);
                }
                var eN = n("#profile-username")
                    .text(ex.username);
                var eI = n("#profile-avatar")
                    .attr({
                        'src': ex.avatar,
                        'alt': ex.username
                    });
                n("#profile-level")
                    .html("Level " + ex.levelData.level + "&nbsp;&nbsp;&nbsp;[" + es(ex.levelData.xp_current) + '/' + es(ex.levelData.xp_needed) + ']');
                if (ex.title && 0x0 < ex.title && e5[ex.title]) {
                    n("#profile-title")
                        .text(e5[ex.title]);
                } else {
                    n("#profile-title")
                        .text('');
                }
                var eR = n("#profile-name")
                    .off("click");
                if (null != s4 && ex.uid === s4.uid) {
                    eR.on("click", function () {
                            sU.Nt.hide();
                            Uy(sU.Ct);
                        })
                        .css("cursor", "pointer");
                } else {
                    eR.css("cursor", "default");
                }
                if (ex.flags.STAFF) {
                    eI.addClass("spin");
                } else {
                    eI.removeClass("spin");
                }
                vd(eN, ex);
                n("#profile-close-btn")
                    .off("click")
                    .on("click", function () {
                        if (el) {
                            Um(el);
                        }
                        UT(sU.Nt);
                    });
                Um(sU.Nt);
            }

            function vB(ex) {
                var el;
                var eN;
                var eI;
                if (!s6) {
                    el = g(n("#social-friends .user-list")) || P(n("#social-friends .user-list"), 0x2) || k(n("#social-friends .user-list"), 0x2) || K();
                    eN = el[0x0];
                    eI = el[0x1];
                    n("#social-uid")
                        .text(ex.uid);
                    hv.database()
                        .ref("/friendships/" + ex.uid)
                        .on("value", function (eR) {
                            var em;
                            var eT;
                            var ey;
                            var eE;
                            if (null == (eR = eR.val())) {
                                em = R.createElement("div");
                                eT = R.createElement("span");
                                em.className = "title-text center";
                                eT.innerText = "You have no friends 😥";
                                em.appendChild(eT);
                                eN.appendChild(em);
                            } else {
                                ey = 0x0;
                                eE = false;
                                Object.entries(eR)
                                    .forEach(function (eH) {
                                        var er;
                                        var eH = g(eH) || P(eH, 0x2) || k(eH, 0x2) || K();
                                        var eq = eH[0x0];
                                        var eH = eH[0x1];
                                        if (eH || eE) {
                                            if (!s7.K[eq]) {
                                                s7.K[eq] = er = "/users/" + eq;
                                                hv.database()
                                                    .ref(er)
                                                    .on("value", function (ec) {
                                                        var ez;
                                                        var eQ;
                                                        if (null != (ec = ec.val())) {
                                                            if (ec.uid === sA) {
                                                                ec.presence = {
                                                                    'gamemode': '',
                                                                    'name': '',
                                                                    'server': '',
                                                                    'status': ''
                                                                };
                                                            }
                                                            s7.X[ec.uid] = ec.presence.timestamp;
                                                            if (s7.Z.includes(eq)) {
                                                                s7.Z.slice(s7.Z.indexOf(eq), 0x1);
                                                                s7.V[eq].remove();
                                                                s7.V[eq] = eN.appendChild(vf(ec, true));
                                                            } else {
                                                                if (null != (ez = s7.V[eq])) {
                                                                    eQ = vf(ec, true);
                                                                    eN.replaceChild(eQ, ez);
                                                                    s7.V[eq] = eQ;
                                                                } else {
                                                                    s7.V[eq] = eN.appendChild(vf(ec, true));
                                                                }
                                                                sU.St.text(function () {
                                                                    var ea;
                                                                    var eL = 0x0;
                                                                    var eF = Date.now();
                                                                    for (ea of Object.values(s7.X))
                                                                        if (null != ea && eF <= ea + 0xea60) {
                                                                            eL++;
                                                                        }
                                                                    return eL;
                                                                }() + " online");
                                                            }
                                                        }
                                                    });
                                            }
                                            if (eH) {
                                                ey++;
                                            }
                                        } else {
                                            hv.auth()
                                                .currentUser.getIdToken()
                                                .then(function (ec) {
                                                    I.fetch("https://accounts.gota.io/api/v1/social/friends/pending", {
                                                            'method': "POST",
                                                            'headers': {
                                                                'Content-Type': "application/json"
                                                            },
                                                            'body': JSON.stringify({
                                                                'token': ec
                                                            })
                                                        })
                                                        .then(function (ez) {
                                                            return ez.json();
                                                        })
                                                        .then(function (ez) {
                                                            if (0xc8 === ez.code) {
                                                                ez.profiles.forEach(function (eQ) {
                                                                    if (!s7.Z.includes(eQ)) {
                                                                        s7.Z.push(eQ.uid);
                                                                    }
                                                                    var ea;
                                                                    var eL = s7.V[eQ.uid];
                                                                    if (null != eL) {
                                                                        ea = vf(eQ, false);
                                                                        eI.replaceChild(ea, eL);
                                                                        s7.V[eq] = ea;
                                                                    } else {
                                                                        s7.V[eQ.uid] = eI.appendChild(vf(eQ, false));
                                                                    }
                                                                });
                                                            }
                                                        });
                                                })["catch"](function (ec) {
                                                    return vb(ec, false);
                                                });
                                            eE = true;
                                        }
                                    });
                                n("#social-friends-count")
                                    .text(ey);
                            }
                        });
                    setInterval(function () {
                        for (var eR in s7.X) {
                            if (!s7.X.hasOwnProperty(eR)) {
                                return;
                            }
                            var em = s7.X[eR];
                            if ((em + 0xea60 < new Date()
                                    .getTime() || null == em) && ((em = s7.V[eR].children[0x1].children[0x1])
                                    .innerText = "Not playing on any server", em.className = "status offline", "Join Server" === (em = s7.V[eR].children[0x2].children[0x0])
                                    .dataset.balloon)) {
                                em.remove();
                            }
                        }
                    }, 0xea60);
                    s6 = true;
                }
            }

            function vA() {
                if (null != I.grecaptcha) {
                    sh = I.grecaptcha;
                    I.grecaptcha = undefined;
                    sh.ready(function () {});
                }
            }

            function vW() {
                var ex = n("#food-color-list");
                ex.empty();
                if (0x0 !== sL._FoodColors.length) {
                    try {
                        for (var el in sL._FoodColors) {
                            var eN = sL._FoodColors[el];
                            ex.append("<div c='" + eN + "' style='background:" + eN + ";color:" + function (eI) {
                                if (0x6 !== (eI = 0x3 === (eI = 0x0 === eI.indexOf('#') ? eI.slice(0x1) : eI)
                                        .length ? eI[0x0] + eI[0x0] + eI[0x1] + eI[0x1] + eI[0x2] + eI[0x2] : eI)
                                    .length) {
                                    throw new Error("Invalid HEX color.");
                                }
                                return 0xba < 0.299 * parseInt(eI.slice(0x0, 0x2), 0x10) + 0.587 * parseInt(eI.slice(0x2, 0x4), 0x10) + 0.114 * parseInt(eI.slice(0x4, 0x6), 0x10) ? "#000000" : "#FFFFFF";
                            }(eN) + ";'><span>" + eN + "</span><div><button class='btn-food-color'>X</button></div></div>");
                        }
                        n(".btn-food-color")
                            .on("click", function () {
                                var eI;
                                var eR;
                                for (var em = n(this)
                                        .parents()
                                        .eq(0x1)
                                        .attr('c'); - 0x1 !== (eI = sL._FoodColors.indexOf(em));) {
                                    sL._FoodColors.splice(eI, 0x1);
                                    eR = true;
                                }
                                if (eR) {
                                    vW();
                                }
                            });
                    } catch (eI) {
                        sL._FoodColors = [];
                        ex.empty();
                    }
                }
                vD();
            }

            function vD() {
                var ex;
                var el;
                sd = false && 0x0 !== sL._FoodColors.length ? sL._FoodColors.map(function (eN) {
                    return hs.utils.string2hex(eN);
                }) : true && sk.ce && 0x0 !== (null == (ex = sk.ee) ? undefined : ex.length) ? sk.ee : e2;
                for (el of hH.Di.values()) el.fo = true;
                hY.Y();
            }

            function vO(ex) {
                var el;
                var eN = n(".keybinds-btn-selected");
                sc = false;
                if (0x0 !== eN.size()) {
                    el = eN.first();
                    eN.removeClass("keybinds-btn-selected");
                    sm[el.attr('id')] = ex !== sT.ye ? ex : -0x1;
                    vj(el);
                }
            }

            function vj(ex) {
                var el;
                var eN = sm[ex.attr('id')];
                ex.html(0x0 < (ex = eN) ? h4[ex].toUpperCase() : "&nbsp;");
                sq.clear();
                for (el of Object.entries(G(G({}, sm), sT))) {
                    var eI = g(el) || P(el, 0x2) || k(el, 0x2) || K();
                    var eR = eI[0x0];
                    if (-0x1 !== (eI = eI[0x1]) && eI !== sT.$e) {
                        if (sq.has(eI)) {
                            sq.get(eI)
                                .push(eR);
                        } else {
                            sq.set(eI, [eR]);
                        }
                    }
                }
            }

            function vC(ex) {
                var el = h4.indexOf(ex.toUpperCase());
                if (-0x1 === el) {
                    throw new Error("Invalid key name \"" + ex + "\"");
                }
                return el;
            }

            function vV() {
                R.getElementById("logo")
                    .style.backgroundImage = true && sk.ce ? "url('images/events/halloween2023/logo.png')" : "url('images/logo.png')";
            }

            function vX(ex) {
                if (hH) {
                    for (var el of hH._i.values())
                        if (el.Fn === ex) {
                            el.fo = true;
                        }
                }
            }

            function vo(ex, el) {
                return hs.Texture.fromURL(ex)["catch"](function () {
                    if (el && null != hH) {
                        hH.Bt(el);
                    }
                    return null;
                });
            }

            function vM(ex) {
                return vo(ex, "Unable to load virus image.")
                    .then(function (el) {
                        if (null != el) {
                            vX(0x3);
                        }
                        return el;
                    });
            }

            function U0(ex, el) {
                if (undefined === el) {
                    el = true && sk.ce;
                }
                return vo(ex, "Unable to load mother cell image.")
                    .then(function (eN) {
                        if (null != eN) {
                            eN.defaultAnchor = el ? sk.ne.se : hk;
                            eN.baseScale = el ? sk.ne.ae : {
                                'oe': 0x1,
                                're': 0x1
                            };
                            vX(0x4);
                        }
                        return eN;
                    });
            }

            function U1() {
                var ex;
                var el = true && sk.ce ? (ex = "images/events/halloween2023", "/spike_mother_happy.png") : (ex = "images", "/spike_mother.png");
                vM(ex + "/spike.png")
                    .then(function (eN) {
                        return hc = eN;
                    });
                U0(ex + "/spike_mother.png")
                    .then(function (eN) {
                        return hz = eN;
                    });
                U0(ex + el)
                    .then(function (eN) {
                        return hQ = eN;
                    });
            }

            function U2(ex, el) {
                ex.css("display", el ? "none" : '');
            }

            function U3(ex, el, eN) {
                if (0x0 === eN.length) {
                    vP.an(ex);
                } else {
                    vP.sn(ex, eN);
                }
                sR[el] = eN;
            }
            var U4 = {
                'cDisableAA': hZ = function () {
                    return h7 && n("#performance-refresh")
                        .css("display", "table-row");
                },
                'sRenderType': hZ,
                'cHideId': function () {
                    n("#pId")
                        .toggle(true);
                },
                'cTransCells': function () {
                    hG.alpha = 0x1;
                },
                'cColoredCellCount': function () {
                    hH.Li(true);
                },
                'cHideChat': function () {
                    sU.P.css("visibility", "visible");
                },
                'cHideMinimap': function () {
                    n("#minimap-panel")
                        .css("display", "block");
                },
                'sScorePanel': function () {
                    hX.css("display", ["none", "flex", "inline-block"]['2']);
                },
                'cHideLeaderboard': function () {
                    var ex = sR.cHideLeaderboard ? "none" : "block";
                    n("#leaderboard-panel")
                        .css("display", ex);
                },
                'cHideExtraPanel': function () {
                    var ex = sR.cHideExtraPanel ? "none" : "block";
                    n("#extra-panel")
                        .css("display", ex);
                },
                'cShowCoordinates': function () {
                    n("#minimap-coordinates")
                        .css("display", "none");
                    U5();
                },
                'cThemeEnabled': function () {
                    Uf();
                    sV(function (ex) {
                        if (!(ex in sH)) {
                            n('#' + ex)
                                .spectrum("disable");
                        }
                    });
                    vD();
                },
                'cShowBorder': sX,
                'cDisableEventSkins': function () {
                    if (sk.ce) {
                        n("body")
                            .toggleClass("event-halloween2023");
                    }
                    U1();
                    vV();
                    vD();
                },
                'cResizableChat': function () {
                    n("#chat-resize")
                        .css("display", "none");
                },
                'cHideLockedNames': function () {
                    hH.wi.zo();
                    for (var ex of hH._i.values())
                        if (ex.Fn === 0x1) {
                            ex.fo = true;
                        }
                },
                'cHideOwnName': function () {
                    var ex;
                    if (null != (ex = hH.Dt)) {
                        ex.Ln();
                    }
                },
                'cHideFriendNames': function () {
                    hH.wi.Io.forEach(function (ex) {
                        return ex.Ln();
                    });
                },
                'cHideBotNames': function () {
                    hH.wi.To.forEach(function (ex) {
                        return ex.Ln();
                    });
                },
                'cHideEnemyNames': function () {
                    hH.wi.Ro.forEach(function (ex) {
                        return ex.Ln();
                    });
                },
                'cHideOwnSkin': function () {
                    var ex;
                    if (null != (ex = hH.Dt)) {
                        ex.Un();
                    }
                },
                'cHideFriendSkins': function () {
                    hH.wi.Io.forEach(function (ex) {
                        return ex.Un();
                    });
                },
                'cHideBotSkins': function () {
                    hH.wi.To.forEach(function (ex) {
                        return ex.Un();
                    });
                },
                'cHideEnemySkins': function () {
                    hH.wi.Ro.forEach(function (ex) {
                        return ex.Un();
                    });
                },
                'cHideOwnMass': function () {
                    var ex;
                    if (null != (ex = hH.Dt)) {
                        ex.Rn();
                    }
                },
                'cHideFriendMasses': function () {
                    hH.wi.Io.forEach(function (ex) {
                        return ex.Rn();
                    });
                },
                'cHideBotMasses': function () {
                    hH.wi.To.forEach(function (ex) {
                        return ex.Rn();
                    });
                },
                'cHideEnemyMasses': function () {
                    hH.wi.Ro.forEach(function (ex) {
                        return ex.Rn();
                    });
                },
                'cDarkerBotColors': function () {
                    hH.wi.Jo();
                },
                'cUncapFPS': v5,
                'cSmoothCells': function () {
                    hH.wi.jo();
                },
                'sLinesplitMode': function () {
                    sO.Fe(sR.sLinesplitMode);
                },
                'cHideLeaderboardHeader': function () {
                    U2(hu, sR.cHideLeaderboardHeader);
                },
                'cHidePartyHeader': function () {
                    U2(n("#party-header"), sR.cHidePartyHeader);
                },
                'iSplitSound': function (ex) {
                    U3("split", "iSplitSound", ex);
                },
                'iEjectSound': function (ex) {
                    U3("eject", "iEjectSound", ex);
                },
                'sMassType': function () {
                    sJ.de = 0x0;
                },
                'sCameraFocus': function () {
                    sJ.le = eK[sR.sCameraFocus];
                },
                'sTextOutlines': function () {
                    sJ.he = 0x0;
                    hH.oo();
                },
                'spRainbowName': function () {
                    var ex;
                    if (null != (ex = hH.Dt)) {
                        ex.wr();
                    }
                },
                'spRainbowCell': function () {
                    var ex;
                    if (null != (ex = hH.Dt)) {
                        ex._r();
                    }
                },
                'sQuality': function () {},
                'uiForegroundColor': function (ex) {
                    if (hH) {
                        hH.Ca();
                    }
                    n(".fg-interface-color")
                        .css("color", ex);
                    n(".interface-color")
                        .css("color", ex);
                    n(".gota-btn")
                        .css("color", ex)
                        .css("border-color", ex);
                    n(".popup-panel")
                        .css("color", ex);
                    n(".main")
                        .css("color", ex);
                    n(".main-bottom-stats")
                        .css("border-color", ex);
                },
                'uiBackgroundColor': function (ex) {
                    n(".hud-panel .interface-color")
                        .css("background-color", ex);
                },
                'uiButtonColor': function (ex) {
                    n(".gota-btn")
                        .css("background-color", ex);
                },
                'uiBorderColor': function (ex) {
                    n(".ui-pane")
                        .css("border-color", ex);
                    n("#chat-tab-container")
                        .css("border-color", ex);
                    n(".chat-tab")
                        .css("border-color", ex);
                },
                'uiMenuBackgroundColor': function (ex) {
                    n(".main-panel")
                        .css("background-color", ex);
                    n(".popup-panel")
                        .css("background-color", ex);
                    n(".options-container")
                        .css("background-color", ex);
                },
                'uiMenuTitleBackgroundColor': function (ex) {
                    n(".menu-title")
                        .css("background-color", ex);
                },
                'uiMenuSubBackgroundColor': function (ex) {
                    n(".menu-sub-bg")
                        .css("background-color", ex);
                    n(".server-active")
                        .css("background-color", ex);
                    n("#server-content")
                        .css("background-color", ex);
                },
                'uiMenuSubBackground2Color': function (ex) {
                    n(".menu-sub-bg2")
                        .css("background-color", ex);
                    n(".server-table tbody")
                        .css("background-color", ex);
                },
                'uiPartyLeaderColor': function () {
                    if (hH) {
                        hH.Ca();
                    }
                },
                'uiGameColorSuccess': function (ex) {
                    n("#social-friends-online-count")
                        .css("color", ex);
                },
                'uiGameBackgroundColor': function (ex) {
                    R.body.style.background = ex;
                },
                'uiGameBorderColor': sX,
                'rUiScale': function (ex) {
                    sR.rUiScale = h1.min(h1.max(ex, 0.5), 1.25);
                    n("#uiScale")
                        .val((100).toFixed(0x0));
                    n(".ui-scale")
                        .css("transform", "scale(1)");
                },
                'rReconnectPeriod': function (ex) {
                    sR.rReconnectPeriod = h1.min(h1.max(ex, 0x0), 0xa);
                    n("#reconnectPeriod")
                        .val(0x5);
                },
                'rAnimationDelay': function (ex) {
                    sR.rAnimationDelay = h1.min(h1.max(ex, 0x1), 0xfa);
                    n("#animationDelay")
                        .val(0x5a);
                },
                'rCameraDelay': function (ex) {
                    sR.rCameraDelay = h1.min(h1.max(ex, 0x0), 0xfa);
                    n("#cameraDelay")
                        .val(sR.rCameraDelay);
                },
                'rZoomDelay': function (ex) {
                    sR.rZoomDelay = h1.min(h1.max(ex, 0x0), 0x190);
                    n("#zoomDelay")
                        .val(sR.rZoomDelay);
                },
                'rMenuDelay': function (ex) {
                    sR.rMenuDelay = h1.min(h1.max(ex, 0x0), 0x3e8);
                    n("#menuDelay")
                        .val(sR.rMenuDelay);
                },
                'rViewDistance': function (ex) {
                    sR.rViewDistance = h1.min(h1.max(ex, 0x32), 0x96);
                    n("#viewDistance")
                        .val(0x64);
                    hH.Ve();
                },
                'rBorderSize': function (ex) {
                    sL.rBorderSize = h1.min(h1.max(ex, 0x1), 0x100);
                    n("#borderSize")
                        .text(0x20);
                    sX();
                },
                'rBackgroundOpacity': function (ex) {
                    sL.rBackgroundOpacity = h1.min(h1.max(ex, 0x0), 0x1);
                    n("#backgroundOpacity")
                        .text((100).toFixed(0x0));
                    R.getElementById("canvas-background")
                        .style.opacity = 0x1;
                },
                'aCustomBackground': function (ex) {
                    R.getElementById("canvas-background")
                        .style.backgroundImage = "url('" + ex + "')";
                    R.getElementById("canvas-background")
                        .style.backgroundSize = "100% 100%";
                },
                'aCustomSpike': function (ex) {
                    sb._e = null;
                    vX(0x3);
                    if (0x0 !== ex.length) {
                        vM(ex)
                            .then(function (eN) {
                                return sb._e = eN;
                            });
                    }
                },
                'aCustomMother': function (ex) {
                    sb.Se = null;
                    vX(0x4);
                    if (0x0 !== ex.length) {
                        U0(ex, false)
                            .then(function (eN) {
                                return sb.Se = eN;
                            });
                    }
                },
                'iMapBackground': function (ex) {
                    sL.iMapBackground = ex;
                    hg.texture = null;
                    if (0x0 !== ex.length) {
                        vo(ex, "Unable to load map background image.")
                            .then(function (el) {
                                return hg.texture = el;
                            });
                    }
                }
            };

            function U5() {
                n("#minimap-canvas")
                    .css({
                        'border-top': '0'
                    });
                n("#minimap-panel")
                    .css({
                        'height': "250px"
                    });
            }

            function U6(ex) {
                su.skinName = n("#spSkinName")
                    .val()
                    .toLowerCase();
                su.lowerName = n("#spLowerName")
                    .prop("checked");
                su.nameColor = n("#spNameColor")
                    .spectrum("get")
                    .toRgb();
                var el = n("#spChatColor")
                    .spectrum("get")
                    .toHexString()
                    .toUpperCase();
                var eN = e4.findIndex(function (eI) {
                    return eI === el;
                });
                su.chatColor = -0x1 === eN ? 0x0 : eN;
                su.effect = parseInt(n("#spEffect")
                    .val());
                su.nameFont = parseInt(n("#spNameFont")
                    .val());
                hH.T(sj.Ye(ex));
            }

            function U7() {
                var ex = s3 || hH.fn;
                var el = n("#btn-cellpanel");
                if (ex || sB) {
                    if (ex) {
                        s0.show();
                        n(".subpanel-name-dashboard")
                            .css("display", s3 ? '' : "none");
                    } else {
                        s0.hide();
                    }
                    ex = ex && true;
                    n("#subpanel-rules")
                        .css("display", ex ? "block" : "none");
                    n("#subpanel-content")
                        .css("display", ex ? "none" : "block");
                    el.prop("disabled", false);
                } else {
                    el.prop("disabled", true);
                }
            }

            function U8(ex) {
                if (!hH.Xt.Er) {
                    hH.Xt.Er = hv.firestore()
                        .collection("accounts")
                        .doc(ex)
                        .onSnapshot(function (el) {
                            if (null != (el = el.data()) && el.locked) {
                                s3 = true;
                                n("#spLockedName")
                                    .html(el.name);
                                if (null != el.lastChange) {
                                    n("#btn-chg-ln")
                                        .attr("title", "Last Changed: " + new Date(el.lastChange)
                                            .toLocaleString());
                                }
                                n("#spExpiry")
                                    .html(null != el.expiry ? new Date(0x3e8 * el.expiry.seconds)
                                        .toLocaleString() : "Never");
                            } else {
                                s3 = false;
                                if ("none" !== n("#main-subpanel")
                                    .css("display")) {
                                    UE("main-servers");
                                }
                            }
                            U7();
                            hH.Xt.Er();
                            hH.Xt.Er = null;
                        }, function () {
                            hH.Xt.Er();
                            hH.Xt.Er = null;
                        });
                }
            }

            function U9() {
                n("[id^=servers-body-]")
                    .empty();
                for (var ex in sP)
                    for (var el of Object.values(sP[ex])) {
                        var eN = el.name;
                        var eI = el.players;
                        var eR = el.bots;
                        var em = el.playersText;
                        var el = el.gamemode;
                        var eI = 0x0 < eR ? " title=\"Players: " + eI + "&#10;Bots: " + eR + "\"" : '';
                        n("#servers-body-" + ex)
                            .append("<tr id=\"s_" + eN + "\" class=\"server-row\" server=\"" + eN + "\"><td class=\"server-table-name\">" + eN + "</td><td class=\"server-table-players\"" + eI + '>' + em + "</td><td class=\"server-table-mode\">" + el + "</td></tr>");
                    }
                for (var eT of Object.values(sg)) {
                    var ey = eT.region;
                    var eE = eT.name;
                    var eH = eT.playersText;
                    var eT = eT.gamemode;
                    n("#servers-body-" + ey)
                        .prepend("<tr id=\"s_" + eE + "\" class=\"account-server server-row\" server=\"" + eE + "\"><td class=\"server-table-name\">" + eE + "</td><td class=\"server-table-players\">" + eH + "</td><td class=\"server-table-mode\">" + eT + "</td></tr>");
                }
                n(".server-row")
                    .on("click", function () {
                        Us(n(this)
                            .attr("server"));
                    });
            }

            function Uh(ex) {
                if (ex) {
                    ex = ex.toLowerCase();
                    for (var el in sP)
                        for (var eN in sP[el])
                            if (eN.toLowerCase() === ex) {
                                return sP[el][eN];
                            }
                    for (var eI in sg)
                        if (eI.toLowerCase() === ex) {
                            return sg[eI];
                        }
                }
                return null;
            }

            function Us(ex) {
                if (null != ha) {
                    n("#s_" + ha.name)
                        .removeClass("server-selected");
                }
                if (null != (ha = Uh(ex))) {
                    n("#s_" + ha.name)
                        .addClass("server-selected");
                }
            }

            function Uv(ex) {
                ex = ex.toLowerCase();
                var el = n("#server-tab-" + ex);
                n(".server-active")
                    .css("background-color", "inherit");
                n("#server-tab-container")
                    .children()
                    .removeClass("server-active");
                el.addClass("server-active");
                n(".server-active")
                    .css("background-color", "#363636");
                n("#server-content")
                    .children()
                    .css("display", "none");
                n("#servers-" + ex)
                    .css("display", "block");
            }

            function UU(ex, el) {
                sR._ChatTabs.forEach(function (eN, eI) {
                    var eR;
                    var em = eN.flags;
                    var eN = eN.maxMessages;
                    if ((ex & em) === ex && ((em = n("#chat-body-" + eI + " tr"))
                            .length >= eN && em.first()
                            .remove(), em = (eN = n("#chat-container-" + eI)[0x0])
                            .scrollHeight - eN.scrollTop <= eN.clientHeight + 0xa, eR = el.cloneNode(true), n("#chat-body-" + eI)
                            .append(n("<tr>")
                                .append(eR)), em)) {
                        eN.scrollTop = eN.scrollHeight;
                    }
                });
            }

            function Uw(ex) {
                hB.val(ex);
            }

            function Uk() {
                var ex;
                var el = n("#chat-tab-container");
                var eN = n("#chat-container");
                el.empty();
                eN.empty();
                for (ex in sR._ChatTabs) {
                    var eI = sR._ChatTabs[ex];
                    if (0x0 === eI.name.length) {
                        eI.name = "Unnamed";
                    }
                    el.append("<li class='chat-tab' id='chat-tab-" + ex + "' name='" + ex + "'><span>" + eI.name + "</span></li>");
                    eN.append("<div class='chat-inner-container' id='chat-container-" + ex + "'><table class='chat-table'><tbody id='chat-body-" + ex + "'></tbody></table></div>");
                }
                n(".chat-tab")
                    .on("click", function () {
                        Ui(n(this)
                            .attr("name"));
                    })
                    .css("border-color", "rgba(255, 255, 255, .2)");
                if (0x0 <= sl && sl < sR._ChatTabs.length) {
                    Ui(sl);
                } else {
                    Ui(0x0);
                }
            }

            function Ui(ex) {
                n(".chat-tab")
                    .removeClass("chat-active-tab");
                n(".chat-inner-container")
                    .removeClass("chat-active-container")
                    .css("display", "none");
                sl = ex;
                if (sR._ChatTabs[ex]) {
                    n("#chat-tab-" + ex)
                        .addClass("chat-active-tab");
                    n("#chat-container-" + ex)
                        .addClass("chat-active-container")
                        .css("display", "block");
                }
            }

            function UP(ex) {
                if (undefined === ex) {
                    ex = 0x0;
                }
                var el;
                var eN = n("#cte-tab-selector");
                eN.empty();
                for (el in sR._ChatTabs) eN.append("<option value='" + el + "'>" + sR._ChatTabs[el].name + "</option>");
                eN.prop("selectedIndex", ex);
                eN.trigger("change");
            }

            function Ug() {
                var ex;
                var el = n("#cte-tab-selector")
                    .val();
                var eN = {
                    'name': '',
                    'flags': 0x0,
                    'maxMessages': 0x0
                };
                var eI = sR._ChatTabs[el];
                if (eI) {
                    for (var eR in eN) eN[eR] = eI[eR];
                }
                n("#cte-tab-name")
                    .val('');
                for (ex in eG) n("#cte-type-" + ex.toLowerCase())
                    .prop("checked", (eG[ex] & 0x0) === eG[ex]);
                n("#cte-max-messages")
                    .val(0x0);
            }

            function UJ() {
                var ex = n("#cte-tab-selector")
                    .val();
                var el = sR._ChatTabs[ex];
                if (el) {
                    var eN = el.name;
                    var eI = n("#cte-tab-name")
                        .val();
                    if (0x0 !== eI.length) {
                        var eR;
                        var eN = eI !== eN;
                        var em = 0x0;
                        var eT = parseInt(n("#cte-max-messages")
                            .val());
                        for (eR in eG)
                            if (n("#cte-type-" + eR.toLowerCase())
                                .prop("checked")) {
                                em += eG[eR];
                            }
                        el.name = eI;
                        el.flags = em;
                        el.maxMessages = eT;
                        if (eN) {
                            UP(ex);
                            for (var ey in sR._ChatTabs) {
                                var eE = sR._ChatTabs[ey];
                                if (eE && (0x0 === eE.name.length && (eE.name = "Unnamed"), ey = n("#chat-tab-" + ey))) {
                                    ey.html("<span>" + eE.name + "</span>");
                                }
                            }
                        }
                    }
                }
            }

            function UG() {
                sR._ChatTabs.push({
                    'name': "New",
                    'flags': 0x0,
                    'maxMessages': 0x64
                });
                UP(sR._ChatTabs.length - 0x1);
                Uk();
            }

            function UZ() {
                var ex = n("#cte-tab-selector")
                    .val();
                if (sR._ChatTabs[ex]) {
                    sR._ChatTabs.splice(ex, 0x1);
                    UP();
                    Uk();
                }
            }

            function UY(ex, el, eN) {
                if (undefined === eN) {
                    eN = -0x1;
                }
                n("#context-name")
                    .text(ex || "An unnamed cell");
                hS.data({
                    'selected': el,
                    'party': eN
                });
                n(".context-action")
                    .css("display", "none");
                if (-0x1 === eN) {
                    n("#menu-invite")
                        .css("display", "block");
                    n("#menu-whisper")
                        .css("display", "block");
                    n("#menu-block")
                        .css("display", "block");
                    n("#menu-profile")
                        .css("display", "block");
                } else {
                    n("#menu-whisper")
                        .css("display", "block");
                    n("#menu-profile")
                        .css("display", "block");
                    if (hH.li()) {
                        n("#menu-pu_pr")
                            .css("display", "block");
                        n("#menu-promote")
                            .css("display", "block");
                        n("#menu-kick")
                            .css("display", "block");
                    }
                }
                if (hH.zt) {
                    n("#menu-spectate")
                        .css("display", "block");
                }
                hS.css({
                    'display': "block",
                    'left': h1.min(hH.At, I.innerWidth - hS.width()),
                    'top': h1.min(hH.It, I.innerHeight - hS.height())
                });
            }

            function Ul(ex, el, eN, eI, eR, em, eT) {
                var ey = hH.fi.pi;
                var eE = ey.mi;
                var eH = ey.gi;
                var er = ey.bi;
                var ey = ey.ki;
                var eE = (eN - eE) / er * hy.width;
                var er = (eI - eH) / ey * hy.height;
                ex.beginPath();
                ex.arc(eE, er, eR, 0x0, sv, false);
                ex.fillStyle = em;
                ex.fill();
                if (eT) {
                    eN = eE - ex.measureText(el)
                        .width / 0x2;
                    ex.fillText(el, eN, er - 0x5);
                }
            }
            var UN = new Map();

            function UR(ex, el) {
                var eN;
                if (el !== (ex.is(":visible") && "hide" !== UN.get(ex.selector)) && (eN = {
                        'duration': sR.rMenuDelay,
                        'always': function () {
                            return UN["delete"](ex.selector);
                        }
                    }, UN.set(ex.selector, el ? "show" : "hide"), el ? ex.fadeIn(eN) : ex.fadeOut(eN), "main" === ex.attr('id')) && sa) {
                    sU.Mt.toggle(!el);
                }
            }

            function Um(ex) {
                UR(ex, true);
            }

            function UT(ex) {
                UR(ex, false);
            }

            function Uy(ex) {
                UR(ex, !(ex.is(":visible") && "hide" !== UN.get(ex.selector)));
            }

            function UE(ex) {
                if ("none" === (ex = n('#' + ex))
                    .css("display")) {
                    n(".main-right-panel")
                        .slideUp(sR.rMenuDelay);
                    ex.slideDown(sR.rMenuDelay);
                }
            }

            function UH() {
                hd.show();
                if (!(0x0 !== hH.Ri.length && !sR.cHidePartyPanel)) {
                    sU._t.css("display", "none");
                }
            }

            function Ur(ex) {
                var el = ex.attr('id');
                sR[el] = ex.prop("checked");
                UQ(el);
            }

            function Uq(ex) {
                var el = ex.attr('id');
                sR[el] = ex.val();
                UQ(el, ex.val());
            }

            function Uc(ex) {
                UQ(ex.attr('id'), ex.val());
            }

            function Uz(ex) {
                UQ(ex.attr('id'), ex.val());
            }

            function UQ(ex, el) {
                if (null != (ex = U4[ex])) {
                    ex(el);
                }
            }

            function Ua(ex, el) {
                if (null != el) {
                    UQ(ex, sL[ex] = el);
                }
            }
            var UL;
            var UF;
            var Uu = [
                [0x1, 0x4, "rRainbowNameSpeed"],
                [0x5, 0x4, "rRainbowCellSpeed"],
                [0xa, 0x1, "spRainbowName"],
                [0xb, 0x1, "spRainbowCell"]
            ];

            function Uf() {
                for (var ex in sF) {
                    var el = ex.charAt(0x0);
                    if ('r' === el) {
                        Uc(n('#' + ex)
                            .val(sF[ex]));
                    } else if ('u' === el) {
                        sL[ex] = sF[ex];
                        n('#' + ex)
                            .spectrum("set", sL[ex]);
                        UQ(ex, sL[ex]);
                    } else if ('a' === el) {
                        Ua(ex, '');
                    } else {
                        sL[ex] = sF[ex];
                    }
                }
                sL._FoodColors = [];
            }

            function US(ex) {
                try {
                    var el = "string" == typeof ex ? JSON.parse(ex) : ex;
                    if (el.version !== 0x2) {
                        Uf();
                    } else {
                        for (var eN of Object.entries(el)) {
                            var eI = g(eN) || P(eN, 0x2) || k(eN, 0x2) || K();
                            var eR = eI[0x0];
                            var em = eI[0x1];
                            if (eR in sL && 0x0 !== em.length) {
                                sL[eR] = em;
                                var eT = undefined;
                                var ey = eR;
                                var eE = em;
                                var eT = n('#' + ey);
                                switch (ey[0x0]) {
                                case 'u':
                                    eT.spectrum("set", eE);
                                    UQ(ey, eE);
                                    break;
                                case 'r':
                                    eT.val(eE);
                                    Uc(eT);
                                    break;
                                case 'a':
                                    Ua(ey, eE);
                                    break;
                                case 'i':
                                    eT.val(eE);
                                    Uz(eT);
                                }
                            }
                        }
                    }
                } catch (eH) {
                    Uf();
                } finally {
                    vD();
                }
            }

            function UB(ex) {
                var el;
                if (/\.(json)$/i.test(ex.name)) {
                    (el = new FileReader())
                    .addEventListener("load", function () {
                        UA();
                        Uf();
                        US(this.result);
                    }, false);
                    el.readAsText(ex);
                }
            }

            function UA() {
                n("#cThemeEnabled")
                    .prop("checked", true)
                    .trigger("change");
            }

            function UW(ex) {
                var el = ex.split(' ');
                var eN = '';
                var eI = null;
                for (var eR = 0x0; eR < el.length; eR++) {
                    if (0x0 !== eR) {
                        eN += ' ';
                    }
                    eI = el[eR];
                    if (null != hD[eI]) {
                        eN += "<img src=\"https://gota.io/emotes/" + (eI = eI.startsWith(':') && eI.endsWith(':') ? eI.substring(0x1, eI.length - 0x1) : eI) + ".png\" height=\"17\" width=\"17\" alt=\"" + eI + "\">";
                    } else if (null != hO[eI]) {
                        eN += "<img src=\"https://gota.io/emotes/gifs/" + (eI = eI.startsWith(':') && eI.endsWith(':') ? eI.substring(0x1, eI.length - 0x1) : eI) + ".gif\" height=\"17\" width=\"17\" alt=\"" + eI + "\">";
                    } else {
                        eN += eI;
                    }
                }
                return eN;
            }

            function UD(ex, el, eN) {
                this.p = ex;
                this.Lt = el;
                this.Fn = eN;
                this.Ut = null;
                this.Rt = null;
            }

            function UO() {
                this.Or = {};
                this.Hr = [];
                this.Mr = [];
                this.va = null;
                this.Fr = 0x0;
                this.Rt = null;
                this.Yn = 0x0;
                this.Ea = function (ex, el, eN) {
                    var eI;
                    if (hh[ex].Fn !== 0x3) {
                        if (eI = this.Or[ex]) {
                            eI.Yi(el, eN);
                        } else {
                            eI = new UC(ex, el, eN);
                            this.Or[ex] = eI;
                            this.Dr();
                        }
                        this.Ar();
                    } else {
                        eI = new UC(ex, el, eN);
                        this.Mr.push(eI);
                    }
                    this.Ir();
                    if (eI) {
                        hH.Bt("Recieved buff: " + eI.Pr.p);
                    }
                };
                this.Oa = function (ex) {
                    var el = null;
                    if (hh[ex].Fn !== 0x3) {
                        if (el = this.Or[ex]) {
                            delete this.Or[ex];
                            this.Dr();
                            this.Ir();
                            this.Ar();
                        }
                    } else {
                        for (var eN = 0x0; eN < this.Mr.length; eN++) {
                            if ((el = this.Mr[eN])
                                .ji === ex) {
                                this.Mr.splice(eN, 0x1);
                                this.Ir();
                                break;
                            }
                        }
                    }
                    if (el) {
                        hH.Bt("Lost buff: " + el.Pr.p);
                    }
                };
                this.Hn = function (ex) {
                    if (0x0 !== this.Hr.length || 0x0 !== this.Mr.length) {
                        for (var el in this.Or) {
                            var eN = this.Or[el];
                            if (!(ex && eN.Pr.Fn === 0x1)) {
                                delete this.Or[el];
                            }
                        }
                        this.Dr();
                        this.Ar();
                        this.Mr = [];
                        this.Ir();
                    }
                };
                this.Dr = function () {
                    this.Hr = [];
                    if (0x0 !== this.Or.length) {
                        for (var ex in this.Or)
                            if (this.Or[ex].Pr.Fn === 0x1) {
                                this.Hr.splice(0x0, 0x0, ex);
                            } else {
                                this.Hr.push(ex);
                            }
                    }
                };
                this.Ar = function () {
                    var ex;
                    this.Yn = 0x0;
                    if (null != this.Or[0x1]) {
                        ex = this.Or[0x1];
                        this.Yn = 0x10 * ex.Tr;
                    }
                };
                this.Yi = function () {
                    if (0x0 === this.Hr.length && 0x0 === this.Mr.length) {
                        hN.visible = false;
                    } else {
                        if (Date.now() >= this.Fr) {
                            this.Lr();
                            this.Fr = Date.now() + 0x3e8;
                        }
                        if (!this.Rt) {
                            this.Rt = hs.Texture.from(this.va.canvas);
                            hN.texture = this.Rt;
                            hN.anchor.set(0x0);
                        }
                        hN.position.set(hX.width() + 0x14 - h7.ui.position.x, 0xf - h7.ui.position.y);
                        hN.visible = true;
                    }
                };
                this.Lr = function () {
                    var ex = (null == (ex = this.va) ? undefined : ex.canvas) || R.createElement("canvas");
                    var el = h1.max(this.Hr.length, this.Mr.length);
                    var eN = 0x0;
                    var eI = 0x0;
                    for (var eR = 0x0; eR < this.Hr.length; eR++) {
                        var ex;
                        var el;
                        var eN;
                        var eI;
                        var eR;
                        this.Or[this.Hr[eR]].Rr(this.va, eN, eI);
                        eN += 0x37;
                    }
                    var eN = 0x0;
                    var eI = 0x37;
                    for (var em = 0x0; em < this.Mr.length; em++) {
                        this.Mr[em].Rr(this.va, eN, eI);
                        eN += 0x37;
                    }
                    if (this.Rt) {
                        this.Rt.update();
                    }
                    this.Fr = Date.now() + 0x3e8;
                };
                this.Ir = function () {
                    this.Fr = 0x0;
                };
            }
            var Uj = 1.5 * h1.PI;

            function UC(ex, el, eN) {
                this.ji = ex;
                this.Pr = hh[ex];
                this.Ur = Date.now();
                this.Br = eN;
                this.Tr = el;
                this.Yi = function (eI, eR) {
                    this.Ur = Date.now();
                    this.Br = eR;
                    this.Tr = eI;
                };
                this.jr = function () {
                    var eI;
                    var eR;
                    return Date.now() >= this.Br ? 0x2 * h1.PI : (eI = this.Br - Date.now(), eR = this.Br - this.Ur, 0x2 * h1.min(eI / eR, 0x1) * h1.PI);
                };
                this.Rr = function (eI, eR, em) {
                    eI.drawImage(this.Pr.Ut, eR, em, 0x32, 0x32);
                    if (0x1 < this.Tr) {
                        eI.fillStyle = "#000";
                        eI.fillText(this.Tr, eR + 0x23, em + 0x11);
                    }
                    if (0x0 < this.Br) {
                        eI.beginPath();
                        eI.moveTo(eR + 0x19, em + 0x19);
                        eI.arc(eR + 0x19, em + 0x19, 0x19, Uj, Uj - this.jr(), false);
                        eI.closePath();
                        eI.globalAlpha = 0.75;
                        eI.fillStyle = "#222";
                        eI.fill();
                        eI.globalAlpha = 0x1;
                    }
                };
            }

            function UV(ex) {
                for (var el = ex.length - 0x1; 0x0 < el; el--) {
                    var eN = h1.floor(h1.random() * (el + 0x1));
                    var eI = [ex[eN], ex[el]];
                    ex[el] = eI[0x0];
                    ex[eN] = eI[0x1];
                }
                return ex;
            }
            var UX = [];
            var Uo = [];
            for (var UM = 0x0; UM < 0xb4; UM++) {
                var e0 = I.tinycolor({
                    'h': 0x2 * UM,
                    's': 97.25,
                    'v': 0x64
                });
                var e1 = e0.toRgb();
                UX[UM] = (e1.r << 0x10) + (e1.g << 0x8) + e1.b;
                Uo[UM] = e0.toHexString();
            }
            var e2 = UV(UX.slice(0x0));
            var e3 = UV(Uo.slice(0x0));
            var e4 = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
            var e5 = {};

            function e6(ex) {
                return 0x0 === ex || ex === hH.Gi ? "You cannot block that player." : s8.includes(ex) ? (delete s8[ex], "Unblocked player with ID: " + ex) : (s8.push(ex), "Blocked player with ID: " + ex);
            }
            var e7 = [{
                'Kt': "Whisper a player by ID",
                'Yt': ["whisper", 't', 'w'],
                'Vt': function (ex) {
                    var el = parseInt(ex[0x0]);
                    if (isNaN(el)) {
                        hH.Bt("Invalid player id.");
                    } else {
                        if (0x0 !== (ex = ex.slice(0x1)
                                .join(' '))
                            .length) {
                            hH.T(sj.Je(el, ex));
                        }
                        Uw("/t " + el + ' ');
                    }
                }
            }, {
                'Kt': "Reply to previous whisper",
                'Yt': ["reply", 'r'],
                'Vt': function (ex) {
                    if (0x0 !== (ex = ex.join(' '))
                        .length) {
                        hH.T(sj.Je(0x0, ex));
                    }
                    Uw("/r ");
                }
            }, {
                'Kt': "Send a message to other party members",
                'Yt': ["party", 'p'],
                'Vt': function (ex) {
                    if (0x0 !== (ex = ex.join(' '))
                        .length) {
                        hH.T(sj.Be(ex, 0x1));
                    }
                    Uw("/p ");
                }
            }, {
                'Kt': "Invite a player to the party",
                'Yt': ["invite", 'i'],
                'Vt': function (ex) {
                    ex = parseInt(ex[0x0]);
                    if (isNaN(ex)) {
                        hH.Bt("Invalid ID.");
                    } else {
                        hH.T(sj.Ge(0x0, ex));
                    }
                }
            }, {
                'Kt': "Leave your current party",
                'Yt': ["leave", 'l'],
                'Vt': function () {
                    hH.T(sj.Ge(0x3, 0x0));
                }
            }, {
                'Kt': "Promote a party member to leader",
                'Yt': ["promote"],
                'Vt': function (ex) {
                    ex = parseInt(ex[0x0]);
                    if (isNaN(ex)) {
                        hH.Bt("Invalid ID.");
                    } else {
                        hH.T(sj.Ge(0x2, ex));
                    }
                }
            }, {
                'Kt': "Kick a player from the party",
                'Yt': ["kick"],
                'Vt': function (ex) {
                    ex = parseInt(ex[0x0]);
                    if (isNaN(ex)) {
                        hH.Bt("Invalid ID.");
                    } else {
                        hH.T(sj.Ge(0x1, ex));
                    }
                }
            }, {
                'Kt': "Clear the chat tab",
                'Yt': ["clear"],
                'Vt': function () {
                    return n("#chat-body-" + sl)
                        .empty();
                }
            }, {
                'Kt': "Get your current ID",
                'Yt': ["info"],
                'Vt': function () {
                    if (0x0 < hH.Gi) {
                        hH.Bt("Your id is " + hH.Gi);
                    } else {
                        hH.Bt("You need to be connected to a server to use this command.");
                    }
                }
            }, {
                'Kt': "Show the scrimmage menu",
                'Yt': ["scrimmenu"],
                'Vt': function () {
                    hf.toggle();
                }
            }, {
                'Kt': "Join a party with a code",
                'Yt': ["join", 'j'],
                'Vt': function (ex) {
                    if (null != (ex = ex[0x0]) && 0x0 !== ex.length) {
                        hH.T(sj.ze(ex));
                    }
                }
            }, {
                'Kt': "Set the party to private",
                'Yt': ["private"],
                'Vt': function () {
                    hH.T(sj.Ge(0x4, 0x1));
                }
            }, {
                'Kt': "Allow players to join the party without an invite",
                'Yt': ["public"],
                'Vt': function () {
                    hH.T(sj.Ge(0x4, 0x0));
                }
            }, {
                'Kt': "Reset chat size",
                'Yt': ["resetchat"],
                'Vt': function () {
                    sU.P.css("width", "360px");
                    sU.P.css("height", "250px");
                }
            }, {
                'Kt': "Reset chat tab settings",
                'Yt': ["resetchattabs"],
                'Vt': function () {
                    sR._ChatTabs = JSON.parse(JSON.stringify(sG));
                    UP();
                    Uk();
                }
            }, {
                'Kt': "Spectate a player",
                'Yt': ["spectate", 's'],
                'Vt': function (ex) {
                    ex = parseInt(ex[0x0]);
                    if (isNaN(ex)) {
                        hH.Bt("Invalid ID.");
                    } else {
                        hH.T(sj.Ue(ex));
                    }
                }
            }, {
                'Kt': "Disconnect from the server",
                'Yt': ["disconnect"],
                'Vt': function () {
                    hH._n();
                }
            }, {
                'Kt': "Get Account UID",
                'Yt': ["account"],
                'Vt': function () {
                    if (null == s4) {
                        hH.Bt("You are not logged in.");
                    } else {
                        hH.Bt("UID: " + s4.uid);
                    }
                }
            }, {
                'Kt': "Block or unblock a player by ID",
                'Yt': ["block", 'b'],
                'Vt': function (ex) {
                    ex = parseInt(ex[0x0]);
                    if (!isNaN(ex)) {
                        ex = e6(ex);
                        hH.Bt(ex);
                    }
                }
            }, {
                'Kt': "Get current renderer",
                'Yt': ["renderer"],
                'Vt': function () {
                    hH.Bt("Current renderer is " + (h7.hi.gl ? "WebGL" : "Canvas"));
                }
            }];
            var e8 = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
            var e9 = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];

            function eh(ex) {
                var el;
                var eN;
                return ex <= 0x0 ? "0:00" : (eN = ex - 0xe10 * (el = h1.floor(ex / 0xe10)) - 0x3c * (ex = h1.floor((ex - 0xe10 * el) / 0x3c)), (0x0 < el ? el + ':' : '') + (ex < 0xa && 0x0 < el ? '0' + ex : ex) + ':' + (eN < 0xa ? '0' + eN : eN));
            }

            function es(ex) {
                (ex = ex.toString()
                    .split('.'))[0x0] = ex[0x0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                return ex.join('.');
            }

            function ev(ex) {
                if (ex.dataTransfer.items) {
                    for (var el = 0x0; el < ex.dataTransfer.items.length; el++) {
                        if ("file" === ex.dataTransfer.items[el].kind) {
                            return ex.dataTransfer.items[el].getAsFile();
                        }
                    }
                } else {
                    if (0x0 !== ex.dataTransfer.files.length) {
                        return ex.dataTransfer.files[0x0];
                    }
                }
            }
            var eK = {
                'CENTER': 0x0,
                'MASS': 0x1
            };
            var eg = {
                0x0: "Spectator",
                0x1: "Blue",
                0x2: "Red",
                0x3: "Green",
                0x4: "Yellow",
                0x5: "Purple",
                0x6: "Orange",
                0x7: "Pink",
                0x8: "Brown"
            };
            var eG = {
                'ALL': 0x1,
                'PARTY': 0x2,
                'WHISPER': 0x4,
                'SYSTEM': 0x8,
                'ADMIN': 0x10
            };
            var eZ = {
                '_a': -0x1,
                'Bi': 0x0,
                'Fa': 0x1,
                'Da': 0x2
            };
            var eY = [
                [0x0, "Verdana", 0x36],
                [0x1, "ampad", 0x4b],
                [0x2, "burnstown", 0x51],
                [0x3, "chlorinar", 0x4b],
                [0x4, "Facon", 0x4b],
                [0x5, "archistico", 0x4b],
                [0x6, "breakaway", 0x51],
                [0x7, "conformity", 0x51],
                [0x8, "electroharmonix", 0x46],
                [0x9, "PWJoyeuxNoel", 0x46],
                [0xa, "leckerli-one", 0x4b],
                [0x65, "IceCaps", 0x51, 0xc9ff],
                [0x66, "BrazierFlame", 0x51, 0xe25822]
            ].reduce(function (ex, el) {
                var el = g(el) || P(el, 0x4) || k(el, 0x4) || K();
                var eN = el[0x0];
                var eI = el[0x1];
                var eR = el[0x2];
                var el = el[0x3];
                new I.FontFaceObserver(eI)
                    .load(null, 0x2710)["catch"](function () {});
                if (0x0 < eN && eN < 0x40) {
                    n("#spNameFont")
                        .append("<option value=\"" + eN + "\" style=\"font-family:" + eI + "\">" + (eI.charAt(0x0)
                            .toUpperCase() + eI.slice(0x1)) + "</option>");
                }
                ex[eN] = {
                    'fontSize': h1.round(eR / 0x36 * 0x45),
                    'fontWeight': 0x0 === eN ? "bold" : "normal",
                    'stroke': el || 0x0,
                    'fontFamily': eI
                };
                return ex;
            }, {});
            n(I)
                .focus(function () {
                    ss = true;
                });
            n(I)
                .blur(function () {
                    ss = false;
                });
        };
        I.version = "3.6.5";
    }(eval, atob);
}();
