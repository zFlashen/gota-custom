import {c as ls, w as gn, H as ds} from "./vendor-C43-vq2j.js";
(function() {
    const v = document.createElement("link").relList;
    if (v && v.supports && v.supports("modulepreload"))
        return;
    for (const R of document.querySelectorAll('link[rel="modulepreload"]'))
        z(R);
    new MutationObserver(R => {
        for (const Y of R)
            if (Y.type === "childList")
                for (const U of Y.addedNodes)
                    U.tagName === "LINK" && U.rel === "modulepreload" && z(U)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function E(R) {
        const Y = {};
        return R.integrity && (Y.integrity = R.integrity),
        R.referrerPolicy && (Y.referrerPolicy = R.referrerPolicy),
        R.crossOrigin === "use-credentials" ? Y.credentials = "include" : R.crossOrigin === "anonymous" ? Y.credentials = "omit" : Y.credentials = "same-origin",
        Y
    }
    function z(R) {
        if (R.ep)
            return;
        R.ep = !0;
        const Y = E(R);
        fetch(R.href, Y)
    }
}
)();
(function() {
    var fe = function() {
        var L = !0;
        return function(D, M) {
            var V = L ? function() {
                if (M) {
                    var Z = M.apply(D, arguments);
                    return M = null,
                    Z
                }
            }
            : function() {}
            ;
            return L = !1,
            V
        }
    }()
      , v = "__asjzzxbv";
    if (window[v])
        return;
    var E = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 4, 127, 127, 127, 127, 1, 127, 3, 2, 1, 0, 7, 7, 1, 3, 114, 111, 116, 0, 0, 10, 23, 1, 21, 0, 32, 3, 32, 2, 65, 7, 113, 116, 32, 3, 65, 32, 32, 2, 65, 7, 113, 107, 118, 114, 11])
      , z = [0, 1, 2, 3, 4, 5, 6]
      , R = 2654435761
      , Y = 2779096485;
    function U(L, D, M, V, Z, i, m, O) {
        var ae = 0
          , S = 0
          , G = Array.isArray(i) && i.length ? i : z;
        m == null && (m = R),
        O == null && (O = Y);
        for (var j = 0; j < G.length; j++)
            switch (G[j]) {
            case 0:
                ae = Math.imul(D >>> 0, m >>> 0) >>> 0;
                break;
            case 1:
                S = (M >>> 0 ^ ae) >>> 0;
                break;
            case 2:
                S = S + ((L & 255) << 16) >>> 0;
                break;
            case 3:
                S = S + (V & 65535) >>> 0;
                break;
            case 4:
                S = Z(S >>> 0, M >>> 0) >>> 0;
                break;
            case 5:
                S = (S ^ O >>> 0) >>> 0;
                break;
            case 6:
                S = (S ^ S >>> 7) >>> 0;
                break
            }
        for (var se = new Array(7).fill(!1), j = 0; j < G.length; j++) {
            var re = G[j];
            re >= 0 && re <= 6 && (se[re] = !0)
        }
        for (var re = 0; re <= 6; re++)
            if (!se[re])
                switch (re) {
                case 0:
                    ae = Math.imul(D >>> 0, m >>> 0) >>> 0;
                    break;
                case 1:
                    S = (M >>> 0 ^ ae) >>> 0;
                    break;
                case 2:
                    S = S + ((L & 255) << 16) >>> 0;
                    break;
                case 3:
                    S = S + (V & 65535) >>> 0;
                    break;
                case 4:
                    S = Z(S >>> 0, M >>> 0) >>> 0;
                    break;
                case 5:
                    S = (S ^ O >>> 0) >>> 0;
                    break;
                case 6:
                    S = (S ^ S >>> 7) >>> 0;
                    break
                }
        return (S >>> 0).toString(36).toUpperCase()
    }
    function be(L, D) {
        var M = D & 7;
        return (L << M | L >>> 32 - M) >>> 0
    }
    function B(L) {
        var D = fe(this, function() {
            for (var M = function() {
                var G;
                try {
                    G = Function('return (function() {}.constructor("return this")( ));')()
                } catch {
                    G = window
                }
                return G
            }, V = M(), Z = V.console = V.console || {}, i = ["log", "warn", "info", "error", "exception", "table", "trace"], m = 0; m < i.length; m++) {
                var O = fe.constructor.prototype.bind(fe)
                  , ae = i[m]
                  , S = Z[ae] || O;
                O.__proto__ = fe.bind(fe),
                O.toString = S.toString.bind(S),
                Z[ae] = O
            }
        });
        D(),
        Object.defineProperty(window, v, {
            value: function(M, V, Z, i, m, O, ae, S) {
                var G = U(M, V, Z, i, L, m, O, ae);
                if (M >= 4)
                    try {
                        var j = parseInt(G, 36);
                        if (!isNaN(j)) {
                            j = j >>> 0 ^ S >>> 0;
                            var se = S & 7;
                            j = (j << se | j >>> 32 - se) >>> 0,
                            j ^= S >>> 3,
                            G = (j >>> 0).toString(36).toUpperCase()
                        }
                    } catch {}
                return G
            },
            writable: !1
        });
        try {
            H()
        } catch {}
    }
    function X(L) {
        for (var D = 2166136261, M = 0; M < L.length; M++)
            D ^= L.charCodeAt(M),
            D = (D >>> 0) * 16777619;
        return (D >>> 0).toString(36).toUpperCase()
    }
    function H() {
        var L = window[v];
        if (!(!L || L._envSig)) {
            var D = window.navigator || {}
              , M = D.userAgent || ""
              , V = D.userAgentData && D.userAgentData.platform || D.platform || ""
              , Z = 0;
            try {
                Z = D.plugins && D.plugins.length || 0
            } catch {}
            var i = ""
              , m = ""
              , O = 0;
            try {
                var ae = document.createElement("canvas")
                  , S = ae.getContext("webgl") || ae.getContext("experimental-webgl");
                if (S) {
                    O = 1;
                    var G = S.getExtension("WEBGL_debug_renderer_info");
                    G && (i = S.getParameter(G.UNMASKED_VENDOR_WEBGL) || "",
                    m = S.getParameter(G.UNMASKED_RENDERER_WEBGL) || "")
                }
            } catch {}
            var j = 0;
            try {
                window.process && window.process.versions && window.process.versions.electron && (j |= 1)
            } catch {}
            try {
                /Electron/i.test(M) && (j |= 2)
            } catch {}
            var se = [X(M), X(V), Z, O, X(i), X(m), j].join(".");
            L._envSig = se,
            L._env = {
                uaH: X(M),
                pf: V,
                pc: Z,
                gl: O,
                gvH: X(i),
                grH: X(m),
                eb: j
            }
        }
    }
    if (B(be),
    typeof WebAssembly == "object")
        try {
            WebAssembly.instantiate(E).then(function(L) {
                try {
                    var D = L.instance.exports.rot
                      , M = window[v];
                    Object.defineProperty(window, v, {
                        value: function(V, Z, i, m, O, ae, S, G) {
                            var j = U(V, Z, i, m, function(Ue, P) {
                                return D(0, 0, P | 0, Ue | 0) >>> 0
                            }, O, ae, S);
                            if (V >= 4)
                                try {
                                    var se = parseInt(j, 36);
                                    if (!isNaN(se)) {
                                        se = se >>> 0 ^ G >>> 0;
                                        var re = G & 7;
                                        se = (se << re | se >>> 32 - re) >>> 0,
                                        se ^= G >>> 3,
                                        j = (se >>> 0).toString(36).toUpperCase()
                                    }
                                } catch {}
                            return j
                        },
                        writable: !1
                    });
                    try {
                        M && M._envSig && !window[v]._envSig && (window[v]._envSig = M._envSig,
                        window[v]._env = M._env),
                        window[v]._wasm = 1
                    } catch {}
                } catch {}
            }).catch(function() {})
        } catch {}
}
)();
( () => {
    try {
        var fe = location.hostname
          , v = /^(?:([\w-]+\.)?gota\.io|localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\]|\d{1,3}(?:\.\d{1,3}){3})$/.test(fe);
        if (!v) {
            setTimeout(function() {
                try {
                    location.replace("https://gota.io/")
                } catch {}
            }, 10);
            return
        }
        window.__AUTH_CANARY__ = "bsp946x3"
    } catch {}
}
)();
window.PIXI || (window.PIXI = ls);
const Ve = {
    mainMenuVisible: !0,
    minimapAccum: 0,
    minimapIntervalMs: 33
}
  , bt = new Map;
function wt(fe) {
    var v = $("#" + fe)
      , E = v[0];
    if (E) {
        E.classList.contains("side-menu-transition") || E.classList.add("side-menu-transition");
        var z = document.getElementById("main-right");
        if (z)
            for (var R = z.children, Y = 0; Y < R.length; Y++) {
                var U = R[Y];
                U !== E && (U.classList && U.classList.contains("side-menu-transition") && U.classList.remove("menu-open"),
                getComputedStyle(U).display !== "none" && (U.style.display = "none"))
            }
        E.classList.contains("menu-open") && getComputedStyle(E).display !== "none" || (E.style.display = "block",
        E.offsetWidth,
        E.classList.add("menu-open"))
    }
}
$(function() {
    var fe = window.PIXI;
    const v = fe;
    window.PIXI = null;
    var E;
    const z = new v.Container
      , R = new v.Container
      , Y = new v.Container
      , U = new v.Container
      , be = new v.Container
      , B = new v.Container
      , X = new v.Container
      , H = new v.Sprite(v.Texture.EMPTY);
    var L, D = null;
    U.addChild(Y),
    U.addChild(be),
    U.addChild(B),
    U.addChild(X),
    z.addChild(R),
    z.addChild(U),
    z.addChild(H);
    var M, V, Z, i, m, O, ae, S, G, j, se, re, Ue, P, yn, q, Qn, Ct, ze, we, kt, vn, Ke, Rt, Ht, St, Ae, bn, wn, Be, ea, Je = !1, Cn = 0, kn = 0, le = null, Ce = null, Sn = !1, K = {
        elements: [],
        callbacks: [],
        pendingFriends: [],
        timestamps: []
    }, Ze = [], Se = !1, En = null, xn = !0, Vt, $n = !0, Ne = null, $e = null, Le = {
        serverRefresh: null,
        friendsStatus: null,
        statsUpdate: null,
        emoteButton: null
    }, de = {
        touchControls: [],
        windowEvents: [],
        uiElements: [],
        chatElements: [],
        firebaseListeners: [],
        customElements: []
    };
    const je = {
        canvasMaxRatio: 1,
        buffAccum: 0,
        buffIntervalMs: 50,
        registryAccum: 0,
        registryIntervalMs: 100
    }
      , In = Math.PI * 2
      , Qa = Math.PI / 2
      , Et = 128
      , jt = Et * 2
      , Wt = (Et + 6) * 2
      , ei = Et / 2
      , ta = {
        SCALE: 1e-4,
        PIVOT_SQ: .01
    };
    var xt, ct, $t;
    const p = {}
      , ti = "https://discord.com/channels/166703751053312000/630428963889741854"
      , ni = new firebase.auth.GoogleAuthProvider
      , Re = "https://accounts.gota.io"
      , ai = v.Color.shared.setValue("#ffffff").toHex();
    var F = {
        key: "",
        foodColors: [],
        customEjectedMass: !1,
        motd: "",
        enabled: !1,
        motherCustomEnabled: !1,
        motherCustom: function(e) {},
        happyMotherCells: []
    }
      , _n = {
        halloween: {
            key: "halloween",
            foodColors: [15633692, 11224098, 9453167, 6301513],
            customEjectedMass: !1,
            motd: "🎃 Happy Halloween! Spooky season is here! 👻",
            motherCustomEnabled: !0
        },
        xmas: {
            key: "xmas",
            foodColors: [16711680, 65280, 16777215, 16766720],
            customEjectedMass: !0,
            motd: "🎄 Merry Christmas! Ho ho ho! 🎅",
            motherCustomEnabled: !0
        },
        new_years: {
            key: "new_years",
            foodColors: [16766720, 16777215, 16738740, 49151],
            customEjectedMass: !1,
            motd: "🎉 Happy New Year! Here's to new beginnings! ✨",
            motherCustomEnabled: !0
        },
        valentines: {
            key: "valentines",
            foodColors: [16738740, 16716947, 14423100, 16761035],
            customEjectedMass: !1,
            motd: "💝 Happy Valentine's Day! Spread the love! 💕",
            motherCustomEnabled: !0
        },
        spring: {
            key: "spring",
            foodColors: [10025880, 16761035, 16758465, 9498256],
            customEjectedMass: !1,
            motd: "🌸 Spring has arrived! Everything is blooming! 🌺",
            motherCustomEnabled: !0
        },
        summer: {
            key: "summer",
            foodColors: [16766720, 16747520, 49151, 3329330],
            customEjectedMass: !1,
            motd: "☀️ Summer vibes! Time for some fun in the sun! 🏖️",
            motherCustomEnabled: !0
        }
    };
    function ii() {
        var e = new Date
          , t = e.getMonth() + 1
          , n = e.getDate()
          , a = {
            halloween: {
                start: {
                    month: 10,
                    day: 1
                },
                end: {
                    month: 11,
                    day: 7
                },
                themes: ["halloween", "halloween2020", "halloween2023"]
            },
            xmas: {
                start: {
                    month: 12,
                    day: 1
                },
                end: {
                    month: 1,
                    day: 7
                },
                themes: ["xmas"]
            },
            valentines: {
                start: {
                    month: 2,
                    day: 1
                },
                end: {
                    month: 2,
                    day: 21
                },
                themes: ["valentines"]
            },
            spring: {
                start: {
                    month: 3,
                    day: 15
                },
                end: {
                    month: 5,
                    day: 31
                },
                themes: ["spring"]
            },
            summer: {
                start: {
                    month: 6,
                    day: 15
                },
                end: {
                    month: 8,
                    day: 31
                },
                themes: ["summer"]
            },
            new_years: {
                start: {
                    month: 12,
                    day: 30
                },
                end: {
                    month: 1,
                    day: 5
                },
                themes: ["new_years"]
            },
            birthday: {
                start: {
                    month: 0,
                    day: 0
                },
                end: {
                    month: 0,
                    day: 0
                },
                themes: ["birthday_2018"]
            }
        };
        function s(_) {
            var b = _.start
              , x = _.end;
            return b.month > x.month ? t >= b.month && n >= b.day || t <= x.month && n <= x.day : (t > b.month || t === b.month && n >= b.day) && (t < x.month || t === x.month && n <= x.day)
        }
        function c(_) {
            return _n[_] !== void 0
        }
        var d = null;
        for (var r in a) {
            var o = a[r];
            if (s(o)) {
                for (var l = 0; l < o.themes.length; l++) {
                    var g = o.themes[l];
                    if (c(g)) {
                        d = g;
                        break
                    }
                }
                if (d)
                    break
            }
        }
        if (d && _n[d]) {
            var h = _n[d];
            F.key = h.key,
            F.foodColors = h.foodColors.slice(),
            F.customEjectedMass = h.customEjectedMass,
            F.motd = h.motd,
            F.motherCustomEnabled = h.motherCustomEnabled,
            F.enabled = !0
        } else
            F.enabled = !1,
            F.key = "",
            F.foodColors = [],
            F.motd = "";
        if (F.enabled && !u.cDisableEventSkins && $("body").addClass("event-" + F.key),
        F.enabled && F.foodColors && F.foodColors.length > 0 && !u.cDisableEventSkins) {
            if (Nt = function(_) {
                return F.foodColors[_ % F.foodColors.length]
            }
            ,
            typeof i < "u" && i && i.foodObjects) {
                var C = 0;
                for (var y in i.foodObjects) {
                    var k = i.foodObjects[y];
                    k && (k.color = Nt(k.id),
                    k.needsPixiUpdate = !0,
                    C++)
                }
            }
        } else if (Nt = function(_) {
            return rn[_ % rn.length]
        }
        ,
        typeof i < "u" && i && i.foodObjects) {
            var C = 0;
            for (var y in i.foodObjects) {
                var k = i.foodObjects[y];
                k && (k.color = Nt(k.id),
                k.needsPixiUpdate = !0,
                C++)
            }
        }
        typeof Jt == "function" && Jt(),
        typeof Zt == "function" && Zt()
    }
    var zt = !1
      , na = !1;
    firebase.initializeApp({
        apiKey: "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
        authDomain: "accounts.gota.io",
        databaseURL: "https://gota-io.firebaseio.com",
        projectId: "gota-io",
        storageBucket: "gota-io.appspot.com",
        messagingSenderId: "570450309042",
        appId: "1:570450309042:web:380ab6c94d44de2f"
    }),
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(function() {}),
    zt = !0;
    var Ye = {}
      , Qe = {}
      , oe = {
        levelNames: 3,
        levelSkins: 3,
        levelMass: 1,
        textOutlineSize: 0,
        resolution: 1
    }
      , aa = [{
        name: "All",
        flags: 255,
        maxMessages: 100
    }, {
        name: "Party",
        flags: 2,
        maxMessages: 100
    }]
      , Yt = 0
      , Ge = []
      , Ee = -1
      , u = {
        cDisableAA: !1,
        cAutoRespawn: !1,
        cHideId: !1,
        cHideServer: !1,
        cHidePartyPanel: !1,
        cHideLeaderboard: !1,
        cHideExtraPanel: !1,
        sShowNames: "ALL",
        sShowSkins: "ALL",
        sShowMass: "SELF",
        sRenderType: "AUTO",
        sTextOutlines: "NONE",
        sQuality: "ULTRA",
        sMassType: "SHORT",
        cTransCells: !1,
        cShowMass: "NONE",
        cShowBorder: !1,
        cSilentLogin: !1,
        cShowChatIds: !1,
        cColoredChatIds: !1,
        cHideChat: !1,
        cHideMinimap: !1,
        sScorePanel: "1",
        cShowCoordinates: !1,
        cDarkerBots: !1,
        cHideFood: !1,
        cColoredPing: !1,
        cColoredCellCount: !1,
        cThemeEnabled: !1,
        cDisableAutoZoom: !1,
        cAutoDecline: !1,
        cDisableEventSkins: !1,
        cResizableChat: !1,
        cDisableAutoNameHiding: !1,
        cDisableAutoFoodHiding: !1,
        cDisablePersistEjectMass: !1,
        cShowTracer: !1,
        iChatWidth: "360px",
        iChatHeight: "250px",
        rUiScale: 1,
        rReconnectPeriod: 5,
        rAnimationDelay: 90,
        rViewDistance: 100,
        rTracerOpacity: 50,
        rTracerColor: "#ffffff",
        _ChatTabs: JSON.parse(JSON.stringify(aa))
    }
      , Q = {
        kContextMenu: 3,
        kEjectMass: 87,
        kSplit: 32,
        kToggleSpec: 81,
        kToggleMassShow: -1,
        kToggleSkinsShow: -1,
        kToggleNamesShow: -1,
        kDoubleSplit: -1,
        kTripleSplit: -1,
        kQuadSplit: -1,
        kHexaSplit: -1,
        kFreezeMouse: -1,
        kLineSplit: -1
    }
      , Gt = !1;
    const ia = Object.assign({}, Q)
      , sa = 2;
    window.is_touch_device = "ontouchstart"in document.documentElement;
    const f = {
        version: sa,
        uiForegroundColor: "rgb(255, 255, 255)",
        uiBackgroundColor: "rgba(22, 22, 22, 0.8)",
        uiBorderColor: "rgba(255, 255, 255, .2)",
        uiMenuBackgroundColor: "#2A2A2A",
        uiMenuTitleBackgroundColor: "#404040",
        uiMenuSubBackgroundColor: "#363636",
        uiMenuSubBackground2Color: "#404040",
        uiButtonColor: "#444444",
        uiGameBackgroundColor: "#121212",
        uiGameBorderColor: "#ff0000",
        uiLeaderboardHighlightSelf: "#ffaaaa",
        uiLeaderboardHighlightParty: "#ffff00",
        uiPartyLeaderColor: "#00ffff",
        uiGameColorSuccess: "#00ff00",
        uiGameColorWarning: "#ffff00",
        uiGameColorError: "#ff0000",
        _FoodColors: [],
        aCustomBackground: "",
        aCustomSpike: "",
        aCustomMother: "",
        rBorderSize: 32,
        rBackgroundOpacity: 1,
        rLeaderboardOpacity: 1,
        rChatOpacity: 1,
        rMinimapOpacity: 1,
        rLeaderboardBlur: 14,
        rChatBlur: 18,
        rMinimapBlur: 14
    }
      , It = {};
    for (var ra in f)
        It[ra] = f[ra];
    const me = {
        aCustomSpike: null,
        aCustomMother: null
    };
    var _t = []
      , J = {
        rules: !1,
        nameColor: {
            r: 0,
            g: 255,
            b: 255
        },
        chatColor: 0,
        lowerName: !1,
        skinName: "",
        effect: 0,
        nameFont: 0
    }
      , Mn = null
      , oa = 0;
    function si() {
        if (M = document.getElementById("canvas"),
        V = document.getElementById("minimap-canvas"),
        Z = V.getContext("2d"),
        q = $("#main"),
        Qn = $("#party-panel"),
        Ct = $(".hud-panel"),
        Be = document.getElementById("score-panel"),
        ze = $("#main-scrimmage"),
        we = $("#context-menu"),
        kt = document.getElementById("chat-container"),
        vn = document.getElementById("chat-input"),
        $("#leaderboard-header"),
        wn = $("#scrimmage-custom"),
        p.mouseFrozenDiv = document.getElementById("pMouse"),
        p.playerScore = document.getElementById("pScore").querySelector("span"),
        p.playerMass = document.getElementById("pMass").querySelector("span"),
        p.playerCells = document.getElementById("pCells").querySelector("span"),
        p.playerFps = document.getElementById("pFps").querySelector("span"),
        p.serverSpan = document.querySelector("#pServer span"),
        p.idSpan = document.querySelector("#pId span"),
        p.pingSpan = document.querySelector("#pPing span"),
        p.pLineSpan = document.querySelector("#pLine span"),
        p.resetInfo = $("#extra-reset-timer"),
        p.resetTime = $("#resetTime"),
        p.respawnInfo = $("#extra-respawn-cooldown"),
        p.respawnCooldown = $("#respawnCooldown"),
        p.spectatorCount = $("#spectatorCount"),
        p.playerCellCount = 0,
        p.minimapCoords = $("#minimap-coordinates"),
        p.partyPanel = Qn,
        p.friendOnlineCount = $("#social-online-friends-count"),
        p.leaderCanvas = document.getElementById("leaderboard-canvas"),
        p.leaderCanvas && (p.leaderCtx = p.leaderCanvas.getContext("2d")),
        p.partyCanvas = document.getElementById("party-canvas"),
        p.partyCanvas && (p.partyCtx = p.partyCanvas.getContext("2d")),
        p.minimapCoordsEl = document.getElementById("minimap-coordinates"),
        p.statsMenuEl = document.getElementById("main-stats"),
        p.tracerColorInput = document.getElementById("rTracerColor"),
        p.tracerColorInput && window.PIXI) {
            u._tracerColorCached = v.Color.shared.setValue(u.rTracerColor || p.tracerColorInput.value || "#ffffff");
            const I = function(T) {
                u.rTracerColor = T.target.value,
                u._tracerColorCached = v.Color.shared.setValue(u.rTracerColor).toHex()
            };
            p.tracerColorInput.addEventListener("input", I),
            de.uiElements.push({
                element: p.tracerColorInput,
                event: "input",
                handler: I
            })
        }
        if (kt) {
            const I = function(T) {
                const ye = T.target.closest && T.target.closest(".chat-name");
                ye && ye.dataset && ye.dataset.playerId && (T.preventDefault(),
                typeof nn == "function" && nn.call(ye, T))
            };
            kt.addEventListener("contextmenu", I),
            de.chatElements.push({
                element: kt,
                event: "contextmenu",
                handler: I
            })
        }
        if (zn(),
        Ke = !1,
        FastClick.attach(document.body),
        window.is_touch_device) {
            window.joystick_manager = nipplejs.create({
                zone: document.getElementById("joystick"),
                mode: "static",
                position: {
                    left: "10%",
                    bottom: "20%"
                },
                color: "red",
                size: 100,
                restOpacity: .5,
                dynamicPage: !0
            }),
            u.cHideChat = !0,
            u.cHideLeaderboard = !0;
            var e = function(I) {
                I.target.style.opacity = 1,
                i.handleKey(Q.kSplit)
            }
              , t = function(I) {
                I.target.style.opacity = .3
            }
              , n = function(I) {
                I.target.style.opacity = 1,
                Ke = !0,
                i && i.sendPacket(new m.sendEjectMass(!0))
            }
              , a = function(I) {
                I.target.style.opacity = .3,
                Ke = !1,
                i && i.sendPacket(new m.sendEjectMass(!1))
            }
              , s = function(I) {
                I.target.style.opacity = 1,
                i.handleKey(Q.kDoubleSplit)
            }
              , c = function(I) {
                I.target.style.opacity = .3
            }
              , d = function(I) {
                I.target.style.opacity = 1,
                i.handleKey(Q.kTripleSplit)
            }
              , r = function(I) {
                I.target.style.opacity = .3
            };
            document.getElementById("button_split").addEventListener("touchstart", e, {
                passive: !0
            }),
            document.getElementById("button_split").addEventListener("touchend", t, {
                passive: !0
            }),
            document.getElementById("button_eject").addEventListener("touchstart", n, {
                passive: !0
            }),
            document.getElementById("button_eject").addEventListener("touchend", a, {
                passive: !0
            }),
            document.getElementById("button_double").addEventListener("touchstart", s, {
                passive: !0
            }),
            document.getElementById("button_double").addEventListener("touchend", c, {
                passive: !0
            }),
            document.getElementById("button_triple").addEventListener("touchstart", d, {
                passive: !0
            }),
            document.getElementById("button_triple").addEventListener("touchend", r, {
                passive: !0
            }),
            de.touchControls.push({
                element: document.getElementById("button_split"),
                event: "touchstart",
                handler: e
            }, {
                element: document.getElementById("button_split"),
                event: "touchend",
                handler: t
            }, {
                element: document.getElementById("button_eject"),
                event: "touchstart",
                handler: n
            }, {
                element: document.getElementById("button_eject"),
                event: "touchend",
                handler: a
            }, {
                element: document.getElementById("button_double"),
                event: "touchstart",
                handler: s
            }, {
                element: document.getElementById("button_double"),
                event: "touchend",
                handler: c
            }, {
                element: document.getElementById("button_triple"),
                event: "touchstart",
                handler: d
            }, {
                element: document.getElementById("button_triple"),
                event: "touchend",
                handler: r
            }),
            window.joystick_manager.on("move", function(I, T) {
                i.mouseRawX = T.distance * T.force * Math.cos(T.angle.radian) + window.innerWidth / 2,
                i.mouseRawY = T.distance * T.force * Math.sin(-T.angle.radian) + window.innerHeight / 2
            })
        } else {
            var o = function(I) {
                i.mouseRawX = I.clientX,
                i.mouseRawY = I.clientY
            }
              , l = function(I) {
                var T = I.button + 1;
                if (Gt) {
                    pa(T),
                    I.preventDefault();
                    return
                }
                document.activeElement && document.activeElement.tagName === "INPUT" || q && q.css && q.css("display") != "none" || i.handleKey(T)
            }
              , g = function(I) {
                var T = I.button + 1;
                T == Q.kEjectMass && (Ke = !1,
                i && i.sendPacket(new m.sendEjectMass(!1)))
            }
              , h = function(I) {
                var T = q && (q[0] || q) || document.getElementById("main")
                  , ye = !1;
                if (T) {
                    var Pe = getComputedStyle(T);
                    ye = Pe.display !== "none" && Pe.pointerEvents !== "none"
                }
                if (!Ve.mainMenuVisible && !ye && I.target.id == "canvas") {
                    var ne = I.wheelDelta || I.deltaY * -1;
                    I.preventDefault(),
                    ne > 0 ? i.mouseZoom *= 1.1 : i.mouseZoom *= .9,
                    i.mouseZoom = i.mouseZoom > 5 ? 5 : i.mouseZoom < .1 ? .1 : i.mouseZoom
                }
            };
            window.onmousemove = o,
            window.onmousedown = l,
            window.onmouseup = g;
            var C = document.getElementById("canvas");
            C && C.addEventListener && C.addEventListener("wheel", h, {
                passive: !1
            }),
            de.windowEvents.push({
                element: window,
                event: "mousemove",
                handler: o,
                isProperty: !0
            }, {
                element: window,
                event: "mousedown",
                handler: l,
                isProperty: !0
            }, {
                element: window,
                event: "mouseup",
                handler: g,
                isProperty: !0
            }),
            C && de.windowEvents.push({
                element: C,
                event: "wheel",
                handler: h
            })
        }
        var y = function(I) {
            var T = I.which || I.keyCode || I.charCode;
            if (!(T <= 5)) {
                if (Gt) {
                    pa(T),
                    I.preventDefault();
                    return
                }
                if (!(document.activeElement && document.activeElement.tagName === "INPUT")) {
                    if (Q.kToggleMassShow > 0 && T == Q.kToggleMassShow) {
                        Ni(),
                        I.preventDefault();
                        return
                    }
                    if (Q.kToggleSkinsShow > 0 && T == Q.kToggleSkinsShow) {
                        Oi(),
                        I.preventDefault();
                        return
                    }
                    if (Q.kToggleNamesShow > 0 && T == Q.kToggleNamesShow) {
                        Fi(),
                        I.preventDefault();
                        return
                    }
                    T == 27 && (ft(q),
                    (Sa($("#popup-profile")) || Sa($("#popup-account-username"))) && (te($("#popup-profile")),
                    te($("#popup-account-username")))),
                    !Ve.mainMenuVisible && i.handleKey(T)
                }
            }
        }
          , k = function(I) {
            var T = I.which || I.keyCode || I.charCode;
            T == Q.kEjectMass && (Ke = !1,
            i && i.sendPacket(new m.sendEjectMass(!1)))
        }
          , _ = function(I) {
            Ke && u.cDisablePersistEjectMass && (Ke = !1,
            i && i.sendPacket(new m.sendEjectMass(!1)))
        };
        window.onkeydown = y,
        window.onkeyup = k,
        window.onblur = _,
        de.windowEvents.push({
            element: window,
            event: "keydown",
            handler: y,
            isProperty: !0
        }, {
            element: window,
            event: "keyup",
            handler: k,
            isProperty: !0
        }, {
            element: window,
            event: "blur",
            handler: _,
            isProperty: !0
        });
        var b = function(I) {
            I.preventDefault()
        };
        document.addEventListener("contextmenu", b),
        de.windowEvents.push({
            element: document,
            event: "contextmenu",
            handler: b
        }),
        Jt(),
        bi();
        var x = window.location.href.split("#").slice(1).join("#").split("&")
          , N = "";
        x[0] && (N = x[0].toLowerCase()),
        x[1] && (St = x[1]),
        N != null && N != "" ? (N = N[0].toUpperCase() + N.slice(1),
        Mn = function() {
            var I = null;
            (I = wa(N)) != null ? (tt(I.name),
            Vn(I.region)) : he()
        }
        ) : Mn = he;
        var A = function(I) {
            var T = I.val();
            T.version !== version && i.selfMsg("Woah! Version " + T.version + " is now available. Press Ctrl+F5 to update!"),
            ea != T.motd && T.motd !== "" && (ea = T.motd,
            i.selfMsg(T.motd)),
            T.listRefresh != oa && (oa = T.listRefresh,
            Ye = {},
            ce(Mn),
            Le.serverRefresh && clearInterval(Le.serverRefresh),
            Le.serverRefresh = setInterval( () => {
                document.hidden || ce()
            }
            , T.listRefresh));
            for (var ye in T.titles)
                yt[ye] = T.titles[ye]
        };
        firebase.database().ref("/game").on("value", A),
        de.firebaseListeners.push({
            element: firebase.database().ref("/game"),
            event: "value",
            handler: A,
            isFirebase: !0
        });
        function ce(I) {
            jQuery.ajax({
                type: "GET",
                dataType: "json",
                url: Re + "/api/v1/utilities/servers",
                success: function(T) {
                    for (var ye of T) {
                        var Pe = [];
                        for (var ne of ye.servers) {
                            ne.players = parseInt(ne.players),
                            ne.bots = ne.bots || 0;
                            var rt = ne.players + ne.bots + "/" + ne.playersMax;
                            ne.bots > 0 && (rt += "*");
                            var Te = new ba(ne.name,ne.address,ne.players,ne.bots,rt,ne.gamemode,ye.region,ne.ssl,ne.order);
                            Pe.push(Te)
                        }
                        Pe.sort( (mn, We) => mn.order - We.order),
                        Ye[ye.region] = {};
                        for (var ot = 0; ot < Pe.length; ot++) {
                            var Te = Pe[ot];
                            Ye[ye.region][Te.name] = Te
                        }
                    }
                    Hn(),
                    I != null ? I() : P != null && tt(P.name)
                },
                error: function(T) {
                    Hn()
                }
            })
        }
        function he() {
            if (P != null) {
                tt(P.name);
                return
            }
            Vn("eu"),
            tt("Vendetta")
        }
        ae = {},
        S = {},
        mi();
        var pe = li;
        window.addEventListener("unload", pe),
        de.windowEvents.push({
            element: window,
            event: "unload",
            handler: pe
        }),
        i = new w,
        m = new ie,
        ii(),
        yi(),
        Fe.init(),
        tn();
        var fn = {
            view: M,
            backgroundAlpha: 0,
            antialias: !u.cDisableAA,
            powerPreference: "high-performance",
            resolution: oe && oe.resolution || 1
        };
        E = {
            renderer: new v.Renderer(fn),
            stage: z
        },
        $("#performance-refresh").hide(),
        xt = Pn(Et),
        ct = Pn(32),
        $t = Pn(8),
        window.addEventListener("resize", Xt),
        de.windowEvents.push({
            element: window,
            event: "resize",
            handler: Xt
        }),
        Xt(),
        O = typeof performance < "u" && performance.now ? performance.now() : Date.now(),
        i.selfMsg("Welcome to Gota.io!"),
        F.enabled && F.motd !== "" && i.selfMsg(F.motd),
        ts(),
        Mt.start()
    }
    function ca() {
        $n && ($e = requestAnimationFrame(ca),
        la())
    }
    const Mt = function() {
        function e() {
            $n = !document.hidden,
            $n ? (Ne && (clearInterval(Ne),
            Ne = null),
            $e && (cancelAnimationFrame($e),
            $e = null),
            ca()) : ($e && (cancelAnimationFrame($e),
            $e = null),
            Ne || (Ne = setInterval(la, 1e3)))
        }
        return {
            start() {
                e(),
                document.addEventListener("visibilitychange", e)
            },
            stop() {
                document.removeEventListener("visibilitychange", e),
                Ne && (clearInterval(Ne),
                Ne = null),
                $e && (cancelAnimationFrame($e),
                $e = null)
            }
        }
    }();
    function Xt() {
        var e = window.innerWidth
          , t = window.innerHeight
          , n = oe.resolution || 1;
        M.style.width = e + "px",
        M.style.height = t + "px",
        M.width = Math.round(e * n),
        M.height = Math.round(t * n),
        je.canvasMaxRatio = Math.max(M.height / 1080, M.width / 1920),
        E && E.renderer && (E.renderer.resolution !== n && (E.renderer.resolution = n),
        E.renderer.resize(M.width, M.height)),
        E && E.stage && (E.stage.position.x = e * n / 2,
        E.stage.position.y = t * n / 2)
    }
    function Pn(e) {
        const t = new v.Graphics;
        t.beginFill(16777215),
        t.drawCircle(e, e, e),
        t.endFill();
        const n = E.renderer.generateTexture(t, v.SCALE_MODES.LINEAR, window.devicePixelRatio);
        return t.destroy(),
        n
    }
    function Tn(e) {
        for (var t in f)
            t.charAt(0) == "u" && e(t)
    }
    function la() {
        const e = typeof performance < "u" && performance.now ? performance.now() : Date.now()
          , t = e - O;
        O = e;
        const n = Math.min(t / u.rAnimationDelay, 1);
        Cn += t;
        let a = !1;
        je.buffAccum += t,
        je.registryAccum += t;
        const s = (i.scale > .12 || u.cDisableAutoFoodHiding) && !u.cHideFood;
        if (be.visible = s,
        s) {
            (!i._foodValues || i._foodValuesVersion !== i._foodVersionCounter) && (i._foodValues = Object.values(i.foodObjects),
            i._foodValuesVersion = i._foodVersionCounter);
            const b = i._foodValues;
            for (let x = 0, N = b.length; x < N; x++) {
                const A = b[x];
                A.steps > 0 && (A.animate(n),
                a = !0),
                A.handleFood()
            }
        }
        (!i._bucketValues || i._bucketValuesVersion !== i._bucketVersionCounter) && (i._bucketValues = Object.values(i.bucket),
        i._bucketValuesVersion = i._bucketVersionCounter);
        const c = i._bucketValues;
        for (let b = 0, x = c.length; b < x; b++) {
            const N = c[b];
            N.steps > 0 && (N.animate(n),
            a = !0),
            N.handle()
        }
        let d = 0
          , r = 0
          , o = 0
          , l = 0;
        (!i._myCellValues || i._myCellValuesVersion !== i._myCellVersionCounter) && (i._myCellValues = Object.values(i.myCells),
        i._myCellValuesVersion = i._myCellVersionCounter);
        const g = i._myCellValues;
        for (let b = 0, x = g.length; b < x; b++) {
            const N = g[b];
            d += N.x,
            r += N.y,
            l += N.size,
            o++
        }
        if (o > 0) {
            i.centerX = d / o,
            i.centerY = r / o,
            i.centerSteps = 0;
            const b = je.canvasMaxRatio || Math.max(M.height / 1080, M.width / 1920);
            if (u.cDisableAutoZoom)
                i.scale_base = .2 * b;
            else {
                const x = Math.min(32 / l, 1);
                i.scale_base = Math.pow(x, .4) * b
            }
        }
        i.centerSteps > 0 && (i.centerX += (i.centerX_ - i.centerX) * n,
        i.centerY += (i.centerY_ - i.centerY) * n);
        const h = i.scale_base * i.mouseZoom
          , C = i.scale
          , y = C * .9 + h * .1;
        i.scale = y,
        Math.abs(y - C) > ta.SCALE && (U.scale.set(y),
        a = !0);
        const k = i.centerX - U.pivot.x
          , _ = i.centerY - U.pivot.y;
        if (k * k + _ * _ > ta.PIVOT_SQ && (U.pivot.set(i.centerX, i.centerY),
        a = !0),
        i.isConnected() && !Ve.mainMenuVisible && !i.mouseFrozen) {
            let b = i._cachedWorldMouseX
              , x = i._cachedWorldMouseY;
            if ((b === void 0 || i._cachedWorldMouseScale !== i.scale || i._cachedMouseRawX !== i.mouseRawX || i._cachedMouseRawY !== i.mouseRawY || i._cachedPivotX !== U.pivot.x || i._cachedPivotY !== U.pivot.y) && (b = U.pivot.x - E.stage.position.x / i.scale + i.mouseRawX * oe.resolution / i.scale,
            x = U.pivot.y - E.stage.position.y / i.scale + i.mouseRawY * oe.resolution / i.scale,
            i._cachedWorldMouseX = b,
            i._cachedWorldMouseY = x,
            i._cachedWorldMouseScale = i.scale,
            i._cachedMouseRawX = i.mouseRawX,
            i._cachedMouseRawY = i.mouseRawY,
            i._cachedPivotX = U.pivot.x,
            i._cachedPivotY = U.pivot.y),
            i.lineSplitEnabled && i.lineSplitLocked) {
                const A = i.calculateOptimalLineSplitMouse();
                b = A.x,
                x = A.y
            }
            const N = i.lastMousePacket;
            (!N || Math.abs(b - N.x) > .01 || Math.abs(x - N.y) > .01 || e - N.time >= i.MOUSE_PACKET_RATE) && i.sendMousePacket(b, x)
        }
        if (Ve.minimapAccum += t,
        !u.cHideMinimap && Ve.minimapAccum >= Ve.minimapIntervalMs && (ci(n),
        Ve.minimapAccum = 0,
        a = !0),
        u.cShowCoordinates && (ri(),
        a = !0),
        oi() && (a = !0),
        je.buffAccum >= je.buffIntervalMs && (i.buffHolder.update(),
        je.buffAccum = 0),
        (a || i._forceNextRender || e - (i._lastForcedRenderTs || 0) > 500) && (E.renderer.render(E.stage),
        i._lastForcedRenderTs = e,
        i._forceNextRender = !1),
        kn++,
        Cn >= 1e3) {
            p.playerFps.textContent = kn;
            const b = Date.now();
            i.serverData.resetType > 0 && i.serverData.resetTime > 0 ? (p.resetInfo.show(),
            p.resetTime.html(dn(Math.max(0, Math.floor((i.serverData.resetTime - b) / 1e3))))) : p.resetInfo.hide(),
            i.respawnCooldown > 0 && i.respawnCooldown >= b ? (p.respawnInfo.show(),
            p.respawnCooldown.html(dn(Math.max(0, Math.ceil((i.respawnCooldown - b) / 1e3))))) : i.respawnCooldown < 0 ? (p.respawnInfo.show(),
            p.respawnCooldown.html("NEVER")) : p.respawnInfo.hide(),
            Cn = 0,
            kn = 0
        }
        je.registryAccum >= je.registryIntervalMs && (i.playerRegistry.handleUpdatedPlayers(),
        je.registryAccum = 0)
    }
    function qt() {
        u.cShowBorder && i.serverData.border.enabled ? (!L && (L = new v.Graphics,
        Y.addChild(L)),
        L.clear(),
        L.lineStyle(f.rBorderSize, v.Color.shared.setValue(gn(f.uiGameBorderColor).toHex()).toHex()),
        L.drawRect(i.serverData.border.left, i.serverData.border.top, i.serverData.border.width, i.serverData.border.height),
        L.visible = !0) : L && (L.visible = !1)
    }
    function ri() {
        var e = p.minimapCoordsEl || p.minimapCoords || document.getElementById("minimap-coordinates");
        if (e) {
            var t = Math.round(i.centerX)
              , n = Math.round(i.centerY);
            (e._lastCoordX !== t || e._lastCoordY !== n) && (e.style.color !== f.uiForegroundColor && (e.style.color = f.uiForegroundColor),
            e.textContent = "X: " + t + " Y: " + n,
            e._lastCoordX = t,
            e._lastCoordY = n)
        }
    }
    function oi() {
        if (!u.cShowTracer || Ve.mainMenuVisible || !i.isConnected() || !i._myCellValues || i._myCellValues.length === 0)
            return D && D.clear(),
            X.visible = !1,
            !1;
        const e = O;
        if (X.visible && i._lastTracerDraw && e - i._lastTracerDraw < 33 && i._cachedWorldMouseX === i._lastTracerMouseX && i._cachedWorldMouseY === i._lastTracerMouseY)
            return !1;
        D ? D.clear() : (D = new v.Graphics,
        X.addChild(D));
        const n = i._cachedWorldMouseX !== void 0 ? i._cachedWorldMouseX : 0
          , a = i._cachedWorldMouseY !== void 0 ? i._cachedWorldMouseY : 0
          , s = u._tracerColorCached || ai
          , c = u.rTracerOpacity / 100;
        D.lineStyle(2, s, c),
        D._lastLineStyle = {
            color: s,
            alpha: c
        };
        const d = i._myCellValues;
        for (let r = 0, o = d.length; r < o; r++) {
            const l = d[r];
            D.moveTo(l.x, l.y),
            D.lineTo(n, a)
        }
        return X.visible = !0,
        i._lastTracerDraw = e,
        i._lastTracerMouseX = n,
        i._lastTracerMouseY = a,
        !0
    }
    function ci(e) {
        if (i.serverData.border.enabled) {
            Z.clearRect(0, 0, V.width, V.height),
            Z.font = "12px Calibri";
            for (var t = 0; t < i.party.length; t++) {
                var n = i.party[t];
                n.state === st.ALIVE && n.id != i.playerId && (Ca(Z, n.name, n.x, n.y, 4, n.mmColor, !0),
                n.x += (n.x_ - n.x) * e,
                n.y += (n.y_ - n.y) * e)
            }
            Ca(Z, i.name, i.centerX, i.centerY, 6, "#fefefe", !1)
        }
    }
    function li() {
        if (typeof Mt < "u" && Mt && Mt.stop)
            try {
                Mt.stop()
            } catch {}
        if (E && E.renderer)
            try {
                E.renderer.destroy(!0)
            } catch {}
        if (z && z.destroy)
            try {
                z.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (U && U.destroy)
            try {
                U.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (be && be.destroy)
            try {
                be.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (B && B.destroy)
            try {
                B.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (X && X.destroy)
            try {
                X.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (R && R.destroy)
            try {
                R.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (H && H.destroy)
            try {
                H.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        try {
            xt && xt.destroy && xt.destroy(!0),
            ct && ct.destroy && ct.destroy(!0),
            $t && $t.destroy && $t.destroy(!0)
        } catch {}
        if (L && L.destroy)
            try {
                L.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        if (D && D.destroy)
            try {
                D.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                })
            } catch {}
        try {
            if (i && i.stopPingInterval && i.stopPingInterval(),
            i && i.socket) {
                i._manualDisconnect = !0;
                try {
                    i.socket.close()
                } catch {}
            }
        } catch {}
        for (var e in Le)
            Le[e] && (clearInterval(Le[e]),
            Le[e] = null);
        if (typeof Ne < "u" && Ne && (clearInterval(Ne),
        Ne = null),
        typeof $e < "u" && $e && (cancelAnimationFrame($e),
        $e = null),
        di(),
        window.joystick_manager && window.joystick_manager.destroy) {
            try {
                window.joystick_manager.destroy()
            } catch {}
            window.joystick_manager = null
        }
        i && i.mousePacketInterval && (clearTimeout(i.mousePacketInterval),
        i.mousePacketInterval = null);
        try {
            bt.clear()
        } catch {}
        qe()
    }
    function di() {
        for (var e in de) {
            for (var t = de[e], n = 0; n < t.length; n++) {
                var a = t[n];
                try {
                    a.isProperty ? a.element["on" + a.event] = null : a.isFirebase ? a.element.off(a.event, a.handler) : a.element && a.element.removeEventListener && a.element.removeEventListener(a.event, a.handler)
                } catch {}
            }
            de[e] = []
        }
        typeof $ < "u" && ($(window).off(),
        $(document).off())
    }
    function w() {
        this.socket = null,
        this.currentServer = null,
        this.currentServerName = null,
        this.spectate = !1,
        this.name = "",
        this.playerId = 0,
        this.bucket = {},
        this.foodObjects = {},
        this.myCells = {},
        this.myCellCount = 0,
        this.playerRegistry = new hi,
        this.buffHolder = new Hi,
        this.centerX = 0,
        this.centerY = 0,
        this.centerX_ = 0,
        this.centerY_ = 0,
        this.centerSteps = 0,
        this.scale = .5,
        this.scale_ = .5,
        this.scale_base = .5,
        this.mouseZoom = 1,
        this.offsetX = 0,
        this.offsetY = 0,
        this.mouseRawX = 0,
        this.mouseRawY = 0,
        this.mouseX = 0,
        this.mouseY = 0,
        this.mouseFrozen = !1,
        this.lineSplitEnabled = !1,
        this.lineSplitDirection = {
            x: 0,
            y: 0
        },
        this.lineSplitLocked = !1,
        this.lineSplitMouseX = 0,
        this.lineSplitMouseY = 0,
        this.lineSplitPhaseStart = 0,
        this.lineSplitPhaseDelayMs = 100,
        this.party = [],
        this.partyIds = {},
        this.subPanelOverride = !1,
        this.serverData = {
            hasSentSubPanel: !1,
            border: {},
            maxCells: 16
        },
        this.score = 0,
        this.respawnCooldown = 0,
        this.customGameMap = null,
        this.accountListeners = {},
        this.pingInterval = null,
        this.lastMousePacket = {
            x: 0,
            y: 0,
            time: 0
        },
        this.mousePacketInterval = null,
        this.pendingMousePacket = null,
        this.MOUSE_PACKET_RATE = 25,
        this.clearStats(),
        this.visibilityPingTimer = null,
        this.lastVisibilityChange = 0
    }
    w.prototype.clearStats = function() {
        this.stats = {
            name: "An unnamed cell",
            alive: 0,
            eatenFood: 0,
            eatenEject: 0,
            eatenVirus: 0,
            eatenPlayer: 0,
            gainFood: 0,
            gainEject: 0,
            gainVirus: 0,
            gainPlayer: 0
        }
    }
    ,
    w.prototype.play = function() {
        if (P == null) {
            this.selfMsg("No server selected!");
            return
        }
        this.name = $("#name-box").val(),
        typeof ht == "function" && ht(),
        this.spectate = !1,
        this.currentServerName = P.name,
        p.serverSpan ? p.serverSpan.textContent = this.currentServerName : Be.querySelector("#pServer span").textContent = this.currentServerName,
        ha(),
        this.isConnected() && this.currentServer == P.ip ? this.sendPacket(new m.setName(this.name)) : this.connect(P.ip),
        Ea(),
        te(q),
        window.is_touch_device && (touch_controls.style.display = "block")
    }
    ,
    w.prototype.spec = function() {
        if (P == null) {
            this.selfMsg("No server selected!");
            return
        }
        this.spectate = !0,
        ha(),
        this.isConnected() && this.currentServer == P.ip ? this.sendPacket(new m.sendSpectate) : this.connect(P.ip),
        Ea(),
        te(q)
    }
    ,
    w.prototype._resetReconnectDelay = function() {
        this._reconnectDelay = u.rReconnectPeriod || 5,
        this._pendingReconnectTimer && (clearTimeout(this._pendingReconnectTimer),
        this._pendingReconnectTimer = null)
    }
    ,
    w.prototype._increaseReconnectDelay = function() {
        this._reconnectDelay || (this._reconnectDelay = u.rReconnectPeriod || 5),
        this._reconnectDelay = Math.min(this._reconnectDelay * 2, 60)
    }
    ,
    w.prototype._scheduleReconnect = function(e, t) {
        if (!(u.rReconnectPeriod <= 0) && !this._manualDisconnect && !this._pendingReconnectTimer) {
            this._increaseReconnectDelay();
            var n = this._reconnectDelay;
            this.selfMsg((t === "close" ? "Disconnected from server." : "Error connecting to server...") + " Retrying in " + n + " second(s).");
            var a = this;
            this._pendingReconnectTimer = setTimeout(function() {
                a._pendingReconnectTimer = null,
                a.isConnected() == !1 && a.socket == null && !a._manualDisconnect && a.connect(e)
            }, n * 1e3)
        }
    }
    ,
    w.prototype.connect = function(e) {
        if (this.socket != null) {
            this.socket.nextUrl = e,
            this.disconnect(e);
            return
        }
        this.currentServer = e,
        this.currentServerName = P.name,
        this.selfMsg("Connecting to " + (u.cHideServer ? "***Hidden***" : this.currentServerName)),
        P.ssl == 1 ? this.socket = new WebSocket("wss://" + e) : this.socket = new WebSocket("ws://" + e),
        this.socket.binaryType = "arraybuffer";
        var t = this;
        this.socket.onopen = function() {
            t._resetReconnectDelay(),
            t.onConnect.apply(t, arguments)
        }
        ,
        this.socket.onmessage = this.onMessage.bind(this),
        this.socket.onclose = function(n) {
            if (t.reset(),
            t.selfMsg("You have been disconnected from the server. Reason: " + (n.reason === "" ? "Unknown" : n.reason)),
            this.nextUrl != null)
                t.connect(this.nextUrl);
            else if (!t._manualDisconnect) {
                var a = P && P.ip ? P.ip : e;
                a && t._scheduleReconnect(a, "close")
            }
            t._manualDisconnect = !1
        }
        ,
        this.socket.onerror = function(n) {
            t.reset(),
            this.nextUrl = null,
            t._scheduleReconnect(e, "error")
        }
        ,
        document.body.classList.add("hide-captcha-badge")
    }
    ,
    w.prototype.disconnect = function(e) {
        this.socket != null && (this._manualDisconnect = !0,
        this._pendingReconnectTimer && (clearTimeout(this._pendingReconnectTimer),
        this._pendingReconnectTimer = null),
        this.socket.close())
    }
    ,
    w.prototype.clearBuckets = function() {
        for (var e in this.bucket)
            this.bucket[e].onDelete(),
            delete this.bucket[e];
        for (var e in this.foodObjects)
            this.foodObjects[e].onDelete(),
            delete this.foodObjects[e];
        this._bucketVersionCounter = (this._bucketVersionCounter || 0) + 1,
        this._foodVersionCounter = (this._foodVersionCounter || 0) + 1,
        this.myCellCount = 0
    }
    ,
    w.prototype.reset = function() {
        L && (L.destroy({
            children: !0,
            texture: !0,
            baseTexture: !0
        }),
        L = null,
        Y.cacheAsBitmap = !1),
        this.stopPingInterval(),
        this.mousePacketInterval && (clearTimeout(this.mousePacketInterval),
        this.mousePacketInterval = null),
        this.clearBuckets(),
        this.myCells = {},
        this.myCellCount = 0,
        this._myCellVersionCounter = (this._myCellVersionCounter || 0) + 1,
        this._forceNextRender = !0,
        this.playerRegistry.clear(),
        this.playerId = 0,
        this.score = 0,
        this.respawnCooldown = 0,
        this.customGameMap = null,
        this.currentServer = null,
        this.clearStats(),
        this.clearParty(),
        this.buffHolder.clearBuffs();
        try {
            bt.clear()
        } catch {}
        O = typeof performance < "u" && performance.now ? performance.now() : Date.now(),
        this.serverData.hasSentSubPanel = !1,
        this.serverData.resetType = 0,
        this.serverData.autosplits = !1,
        this.socket != null && (this.socket = null),
        p.idSpan ? p.idSpan.textContent = this.playerId : Be.querySelector("#pId span").textContent = this.playerId,
        this.subPanelOverride && (this.subPanelOverride = !1,
        pt()),
        ka("post-reset")
    }
    ,
    w.prototype.handleKey = function(e) {
        if (e == Q.kEjectMass)
            Ke = !0,
            this.sendPacket(new m.sendEjectMass(!0));
        else if (e == Q.kSplit)
            this.sendPacket(new m.sendKey(17));
        else if (e == Q.kToggleSpec)
            this.sendPacket(new m.sendKey(18));
        else if (e == Q.kDoubleSplit)
            this.sendPacket(new m.sendKey(17)),
            this.sendPacket(new m.sendKey(17));
        else if (e == Q.kTripleSplit)
            for (var t = 0; t < 3; t++)
                this.sendPacket(new m.sendKey(17));
        else if (e == Q.kQuadSplit)
            for (var t = 0; t < 4; t++)
                this.sendPacket(new m.sendKey(17));
        else if (e == Q.kHexaSplit)
            for (var t = 0; t < 6; t++)
                this.sendPacket(new m.sendKey(17));
        else
            e == 38 ? (this.mouseZoom *= 1.05,
            this.mouseZoom = i.mouseZoom > 5 ? 5 : this.mouseZoom < .1 ? .1 : this.mouseZoom) : e == 40 ? (this.mouseZoom *= .95,
            this.mouseZoom = i.mouseZoom > 5 ? 5 : this.mouseZoom < .1 ? .1 : this.mouseZoom) : e == Q.kFreezeMouse ? (this.mouseFrozen = !this.mouseFrozen,
            this.mouseFrozen ? p.mouseFrozenDiv.style.display = "block" : p.mouseFrozenDiv.style.display = "none") : e == Q.kLineSplit ? this.toggleLineSplit() : e == Q.kContextMenu && Di()
    }
    ,
    w.prototype.isConnected = function() {
        return this.socket == null ? !1 : this.socket.readyState == 1
    }
    ,
    w.prototype.sendPacket = function(e) {
        this.isConnected() && this.socket.send(e)
    }
    ,
    w.prototype.sendMousePacket = function(e, t) {
        var n = Date.now();
        this.pendingMousePacket = {
            x: e,
            y: t
        },
        n - this.lastMousePacket.time >= this.MOUSE_PACKET_RATE ? (this.sendPacket(new m.sendMouse(e,t)),
        this.lastMousePacket.x = e,
        this.lastMousePacket.y = t,
        this.lastMousePacket.time = n,
        this.pendingMousePacket = null) : !this.mousePacketInterval && (this.mousePacketInterval = setTimeout( () => {
            this.pendingMousePacket && this.isConnected() && (this.sendPacket(new m.sendMouse(this.pendingMousePacket.x,this.pendingMousePacket.y)),
            this.lastMousePacket.x = this.pendingMousePacket.x,
            this.lastMousePacket.y = this.pendingMousePacket.y,
            this.lastMousePacket.time = Date.now()),
            this.pendingMousePacket = null,
            this.mousePacketInterval = null
        }
        , this.MOUSE_PACKET_RATE - (n - this.lastMousePacket.time)))
    }
    ,
    w.prototype.onConnect = function() {
        if (Ze = [],
        gi(),
        this.sendPacket(new m.connectionStart),
        this.sendPing(),
        this.sendOptions(),
        O = typeof performance < "u" && performance.now ? performance.now() : Date.now(),
        this.startPingInterval(),
        firebase.auth().currentUser !== null) {
            firebase.auth().currentUser.getIdToken(!0).then(e => {
                i.sendPacket(new m.sendAuthToken(e))
            }
            ).catch(e => Ie(e, !0));
            return
        } else
            this.spectate ? this.sendPacket(new m.sendSpectate) : this.sendPacket(new m.setName(this.name))
    }
    ,
    w.prototype.sendPing = function() {
        this.isConnected() && (G = +new Date,
        this.sendPacket(new m.sendPing))
    }
    ,
    w.prototype.sendOptions = function() {
        this.isConnected() && this.sendPacket(new m.sendOptions)
    }
    ,
    w.prototype.startPingInterval = function() {
        this.stopPingInterval();
        const e = this;
        function t() {
            const n = document.hidden ? 15e3 : 5e3;
            e.pingInterval = setTimeout(function() {
                e.isConnected() && e.sendPing(),
                t()
            }, n)
        }
        t(),
        !this._pingVisibilityHandler && (this._pingVisibilityHandler = function() {
            !document.hidden && e.isConnected() && e.sendPing(),
            e.pingInterval && (clearTimeout(e.pingInterval),
            e.pingInterval = null,
            t())
        }
        ,
        document.addEventListener("visibilitychange", this._pingVisibilityHandler))
    }
    ,
    w.prototype.stopPingInterval = function() {
        this.pingInterval && (clearTimeout(this.pingInterval),
        this.pingInterval = null),
        this._pingVisibilityHandler && (document.removeEventListener("visibilitychange", this._pingVisibilityHandler),
        this._pingVisibilityHandler = null)
    }
    ,
    w.prototype.selfMsg = function(e) {
        var t = document.createElement("td")
          , n = document.createElement("span");
        n.style.color = "#DDDD00",
        n.innerHTML = "[System] " + _e(e),
        t.appendChild(n),
        Ut(Oe.SYSTEM, t)
    }
    ,
    w.prototype.selfMsgWithJoinCode = function(e, t) {
        var n = document.createElement("td")
          , a = document.createElement("span");
        a.style.color = "#DDDD00",
        a.innerHTML = "[System] " + _e(e),
        n.appendChild(a);
        var s = document.createElement("span");
        s.style.color = "#DDDD00",
        s.innerHTML = t,
        s.style.pointerEvents = "all",
        s.style.userSelect = "all",
        n.appendChild(s),
        Ut(Oe.SYSTEM, n)
    }
    ,
    w.prototype.setupVisibilityPing = function() {}
    ,
    w.prototype.cleanupVisibilityPing = function() {}
    ,
    w.prototype.selfMsgCopyable = function(e, t) {
        var n = document.createElement("td")
          , a = document.createElement("span");
        a.style.color = "#DDDD00",
        a.innerHTML = "[System] " + _e(e),
        n.appendChild(a);
        var s = document.createElement("span");
        s.style.color = "#428df5",
        s.innerHTML = _e(t),
        s.style.pointerEvents = "all",
        s.style.userSelect = "all",
        n.appendChild(s),
        Ut(Oe.SYSTEM, n)
    }
    ,
    w.prototype.clearParty = function(e) {
        this.party = [],
        this.partyIds = {},
        this.partyLeader = -1,
        this.partyIndex = -1,
        $("#party-panel").css("display", "none"),
        wn.css("display") == "block" && this.handleCustomGameLeave(),
        (this.partyCode != null || St != null) && (this.partyCode = St = null,
        window.history.pushState("page", "", " "))
    }
    ,
    w.prototype.isPartyLeader = function() {
        return this.partyLeader == this.playerId
    }
    ,
    w.prototype.getServerMaxCells = function() {
        return this.serverData.maxCells + this.buffHolder.bonusMaxCells
    }
    ,
    w.prototype.onMessage = function(e) {
        var t = new DataView(e.data)
          , n = t.getUint8(0);
        switch (t.offset = 1,
        n) {
        case 122:
            let N = function() {
                try {
                    var A = "__asjzzxbv";
                    if (typeof window[A] != "function")
                        return console.debug("[AUTH] auth mix fn not loaded"),
                        !1;
                    var ce = window[A]
                      , he = ce(a, s, c, d, r, h, C, y);
                    if (a >= 4 && ce.length < 8)
                        try {
                            var pe = parseInt(he, 36);
                            if (!isNaN(pe)) {
                                pe = pe >>> 0 ^ y >>> 0;
                                var fn = y & 7;
                                pe = (pe << fn | pe >>> 32 - fn) >>> 0,
                                pe ^= y >>> 3,
                                he = (pe >>> 0).toString(36).toUpperCase()
                            }
                        } catch {}
                    if (he && he.charAt(0) === "-")
                        try {
                            var I = parseInt(he, 36);
                            isNaN(I) || (he = (I >>> 0).toString(36).toUpperCase())
                        } catch {}
                    console.debug("[AUTH] Sending token:", he);
                    var T = new TextEncoder().encode(he)
                      , ye = new ArrayBuffer(12 + T.length)
                      , Pe = new DataView(ye)
                      , ne = 0;
                    Pe.setUint8(ne++, 123),
                    Pe.setUint8(ne++, a),
                    Pe.setUint32(ne, s, !0),
                    ne += 4,
                    Pe.setUint32(ne, c, !0),
                    ne += 4,
                    Pe.setUint16(ne, T.length, !0),
                    ne += 2;
                    for (var rt = 0; rt < T.length; rt++)
                        Pe.setUint8(ne + rt, T[rt]);
                    k.socket.send(ye);
                    try {
                        sendEnvTelemetry(k.socket, s, c, A, h, C, d)
                    } catch {}
                    if (a >= 4)
                        try {
                            setTimeout(function() {
                                if (!(!k.socket || k.socket.readyState !== 1)) {
                                    var Te = window[A]
                                      , ot = 0;
                                    try {
                                        for (var mn = Te.toString(), We = 0; We < mn.length; We++)
                                            ot = (ot ^ mn.charCodeAt(We)) * 16777619 >>> 0
                                    } catch {}
                                    var Ka = 0;
                                    Te && Te._wasm && (Ka |= 1);
                                    var os = "v:" + a + "|h:" + ot.toString(36) + "|f:" + Ka
                                      , cs = new TextEncoder
                                      , Ft = cs.encode(os);
                                    if (!(Ft.length > 64)) {
                                        var Ja = new ArrayBuffer(2 + Ft.length)
                                          , Zn = new DataView(Ja);
                                        Zn.setUint8(0, 126),
                                        Zn.setUint8(1, Ft.length);
                                        for (var We = 0; We < Ft.length; We++)
                                            Zn.setUint8(2 + We, Ft[We]);
                                        k.socket.send(Ja)
                                    }
                                }
                            }, 150)
                        } catch {}
                    return !0
                } catch (Te) {
                    return console.error("[AUTH] Error sending formula token", Te),
                    !1
                }
            };
            var a = t.getUint8(1)
              , s = t.getUint32(2, !0)
              , c = t.getUint32(6, !0)
              , d = t.getUint32(10, !0)
              , r = null
              , o = 14;
            if (a >= 2) {
                var l = t.getUint8(14);
                if (l > 0) {
                    r = [];
                    for (var g = 0; g < l; g++)
                        r.push(t.getUint8(15 + g))
                }
                o = 15 + l
            }
            var h = 2654435769
              , C = 2779096485
              , y = 0;
            a >= 3 && (h = t.getUint32(o, !0),
            o += 4,
            C = t.getUint32(o, !0),
            o += 4,
            a >= 4 && (y = t.getUint32(o, !0) >>> 0,
            o += 4));
            var k = this;
            if (console.debug("[AUTH] Received challenge:", {
                version: a,
                sessionId: s,
                nonce: c,
                timeLow: d,
                ops: r,
                constA: h,
                constB: C
            }),
            !N())
                if (window.__authScriptLoading)
                    console.debug("[AUTH] Script load already in progress");
                else {
                    window.__authScriptLoading = !0;
                    var _ = "auth.js";
                    console.debug("[AUTH] Loading " + _ + " dynamically");
                    var b = document.createElement("script");
                    b.src = _ + "?_=" + Date.now(),
                    b.async = !0,
                    b.onload = function() {
                        if (console.debug("[AUTH] " + _ + " loaded"),
                        !N()) {
                            console.debug("[AUTH] Token send failed immediately after load (likely async WASM init). Starting retry attempts.");
                            var A = 0
                              , ce = 40
                              , he = 100;
                            (function pe() {
                                if (N()) {
                                    console.debug("[AUTH] Token sent successfully after " + A + " retry(s).");
                                    return
                                }
                                if (A++,
                                A >= ce) {
                                    console.error("[AUTH] Token send still failing after " + ce + " retries.");
                                    return
                                }
                                setTimeout(pe, he)
                            }
                            )()
                        }
                    }
                    ,
                    b.onerror = function() {
                        console.error("[AUTH] Failed to load " + _),
                        window.__authScriptLoading = !1
                    }
                    ,
                    document.head.appendChild(b)
                }
            break;
        case 124:
            var x = t.getUint8(1);
            x === 0 || this.selfMsg("Client validation warning (code " + x + ").");
            break;
        case 2:
            this.handleUpdate(t);
            break;
        case 10:
            this.handlePosition(t);
            break;
        case 21:
            this.handleStats(t);
            break;
        case 22:
            this.showSubPanel(t);
            break;
        case 23:
            this.updateSubPanel(t);
            break;
        case 40:
            this.handleInvite(t);
            break;
        case 41:
            this.handlePartyInfo(t);
            break;
        case 45:
            this.handlePartyData(t);
            break;
        case 43:
            this.handlePartyJoinCode(t);
            break;
        case 49:
            this.handleLeaderboard(t);
            break;
        case 50:
            this.handleLeaderboardCustom(t);
            break;
        case 63:
            this.handleRespawnCooldown(t);
            break;
        case 64:
            this.handleMapData(t);
            break;
        case 65:
            this.handleClearNodes();
            break;
        case 66:
            this.handleUpdateBorder(t);
            break;
        case 68:
            this.handleResetTime(t);
            break;
        case 69:
            this.handleSpectators(t);
            break;
        case 70:
            this.handleSystemMsg(t);
            break;
        case 71:
            this.handlePing();
            break;
        case 72:
            this.handleChat(t);
            break;
        case 73:
            this.handleWhisper(t);
            break;
        case 74:
            this.handleEditMessage(t);
            break;
        case 75:
            this.handleCopyableMessage(t);
            break;
        case 80:
            this.handleShowScrimmageMenu();
            break;
        case 81:
            this.handleQueueData(t);
            break;
        case 82:
            this.handleQueueLeave(t);
            break;
        case 83:
            this.handleMatchState(t);
            break;
        case 90:
            this.handleScrimmageData(t);
            break;
        case 91:
            this.handleCustomGameShow(t);
            break;
        case 92:
            this.handleCustomGameUpdate(t);
            break;
        case 93:
            this.handleCustomGameLeave();
            break;
        case 94:
            this.handleShowCustomGameLobbies(t);
            break;
        case 100:
            this.handleAddBuff(t);
            break;
        case 101:
            this.handleRemoveBuff(t);
            break;
        case 102:
            this.handleClearBuffs(t);
            break;
        case 103:
            this.handleAuthenticated(t);
            break;
        case 104:
            this.handleProfile(t);
            break
        }
    }
    ,
    w.prototype.handleUpdate = function(e) {
        var t = e.getUint16(e.offset, !0);
        for (e.offset += 2; t > 0; ) {
            var n = e.getUint16(e.offset, !0);
            e.offset += 2,
            i.playerRegistry.remove(n),
            t--
        }
        for (t = e.getUint16(e.offset, !0),
        e.offset += 2; t > 0; ) {
            var n = e.getUint16(e.offset, !0);
            e.offset += 2;
            var a = this.bucket[n] || this.foodObjects[n];
            if (a != null) {
                if (a.type == 6 ? (delete this.foodObjects[n],
                this._foodVersionCounter = (this._foodVersionCounter || 0) + 1) : (delete this.bucket[n],
                this._bucketVersionCounter = (this._bucketVersionCounter || 0) + 1),
                a.playerId == this.playerId) {
                    delete this.myCells[n],
                    this._myCellVersionCounter = (this._myCellVersionCounter || 0) + 1,
                    typeof this.myCellCount == "number" && this.myCellCount > 0 && this.myCellCount--;
                    var s = this.myCellCount === 0;
                    s || (s = Object.keys(this.myCells).length === 0,
                    s && (this.myCellCount = 0)),
                    s && (u.cAutoRespawn ? $("#main").css("display") == "none" && i.play() : (ze.css("display") != "block" && ka("death"),
                    is()))
                }
                a.onDelete()
            }
            t--
        }
        for (; ; ) {
            var n = e.getUint16(e.offset, !0);
            if (e.offset += 2,
            n == 0)
                break;
            var c = this.playerRegistry.getPlayer(n)
              , d = !1;
            c == null ? c = new da(n) : d = !0,
            c.cellColor = (e.getUint8(e.offset++) << 16) + (e.getUint8(e.offset++) << 8) + e.getUint8(e.offset++),
            c.name = ve(e),
            c.isServerBot = c.name && c.name.indexOf("🤖") !== -1,
            c.setSkin(xe(e)),
            c.setFlags(e.getUint8(e.offset++)),
            (c.flags & 2) == 2 && (c.nameColor = "#" + Jn(e.getUint8(e.offset++)) + Jn(e.getUint8(e.offset++)) + Jn(e.getUint8(e.offset++)),
            c.parseEffect(e.getUint8(e.offset++)),
            c.nameFont = e.getUint8(e.offset++)),
            d ? i.playerRegistry.updatePlayer(c) : i.playerRegistry.add(c)
        }
        for (; ; ) {
            var r = e.getUint8(e.offset++)
              , o = 0;
            if (r == 0)
                break;
            for (; !(r == 2 && o == 0 && (o = e.getUint16(e.offset, !0),
            e.offset += 2,
            o == 0)); ) {
                var n = e.getUint16(e.offset, !0);
                if (e.offset += 2,
                n == 0)
                    if (r == 2) {
                        o = 0;
                        continue
                    } else
                        break;
                var a = (r === 6 || r === 1) && lt ? lt.acquire(r, n) : null;
                switch (a || (a = new ge(n)),
                a.setType(r),
                a.setX(e.getInt16(e.offset, !0)),
                a.setY(e.getInt16(e.offset + 2, !0)),
                e.offset += 4,
                r) {
                case 6:
                    a.color = Nt(a.id);
                    break;
                case 1:
                    a.setSize(e.getUint16(e.offset, !0)),
                    e.offset += 2,
                    a.color = (e.getUint8(e.offset++) << 16) + (e.getUint8(e.offset++) << 8) + e.getUint8(e.offset++);
                    var l = e.getUint8(e.offset++);
                    if (a.skin = (l & 127) - 1,
                    a.rainbow = (l & 128) == 128,
                    u.cDarkerBots)
                        for (var g in i.playerRegistry.bucket) {
                            var h = i.playerRegistry.bucket[g];
                            if (h && h.isServerBot && h.cellColor === a.color) {
                                a.color = Wa(a.color, .4);
                                break
                            }
                        }
                    break;
                case 2:
                    a.setSize(e.getUint16(e.offset, !0)),
                    e.offset += 2,
                    a.playerId = o;
                    break;
                case 3:
                    a.setSize(e.getUint16(e.offset, !0)),
                    e.offset += 2;
                    break;
                case 4:
                    a.setSize(e.getUint16(e.offset, !0)),
                    e.offset += 2;
                    break;
                case 5:
                    a.setSize(e.getUint16(e.offset, !0)),
                    e.offset += 2,
                    a.buff = e.getUint8(e.offset++);
                    break
                }
                a.onCreate(this)
            }
        }
        for (; ; ) {
            var r = e.getUint8(e.offset++);
            if (r == 0)
                break;
            for (; ; ) {
                var n = e.getUint16(e.offset, !0);
                if (e.offset += 2,
                n == 0)
                    break;
                var C = e.getInt16(e.offset, !0)
                  , y = e.getInt16(e.offset + 2, !0);
                e.offset += 4;
                var a;
                switch (r == 6 ? a = this.foodObjects[n] : a = this.bucket[n],
                a == null ? (a = (r === 6 || r === 1) && lt ? lt.acquire(r, n) : null,
                a || (a = new ge(n)),
                a.setType(r),
                a.setSize(10),
                a.setX(C),
                a.setY(y),
                a.onCreate(this)) : (a.updateX(C),
                a.updateY(y)),
                r) {
                case 2:
                    a.size_ = e.getUint16(e.offset, !0),
                    e.offset += 2;
                    break;
                case 3:
                    a.size_ = e.getUint16(e.offset, !0),
                    e.offset += 2;
                    break;
                case 4:
                    a.size_ = e.getUint16(e.offset, !0),
                    e.offset += 2;
                    break
                }
                a.steps = 30
            }
        }
        this.sortCells()
    }
    ,
    w.prototype.handlePosition = function(e) {
        this.centerX_ = e.getFloat32(e.offset, !0),
        e.offset += 4,
        this.centerY_ = e.getFloat32(e.offset, !0),
        e.offset += 4,
        this.centerSteps = 30,
        !u.cDisableAutoZoom && (this.scale_base = e.getFloat32(e.offset, !0))
    }
    ,
    w.prototype.handleRespawnCooldown = function(e) {
        var t = e.getFloat64(e.offset, !0);
        this.respawnCooldown = t
    }
    ,
    w.prototype.handleMapData = function(e) {
        this.playerId = e.getUint16(e.offset, !0),
        e.offset += 3,
        this.handleUpdateBorder(e),
        this.serverData.maxCells = e.getUint16(e.offset, !0),
        e.offset += 2,
        xe(e),
        this.serverData.autosplits = e.getUint8(e.offset++),
        p.idSpan ? p.idSpan.textContent = this.playerId : Be.querySelector("#pId span").textContent = this.playerId,
        this.updateCellCounter(0, !0),
        St != null && i.sendPacket(new m.sendPartyJoin(St)),
        ze.css("display", "none"),
        $("#scrimmage-btn-leave").css("display", "none")
    }
    ,
    w.prototype.handleUpdateBorder = function(e) {
        this.serverData.border = {},
        this.serverData.border.left = e.getInt16(e.offset, !0),
        this.serverData.border.top = e.getInt16(e.offset + 2, !0),
        this.serverData.border.right = e.getInt16(e.offset + 4, !0),
        this.serverData.border.bottom = e.getInt16(e.offset + 6, !0),
        e.offset += 8,
        this.serverData.border.width = this.serverData.border.right - this.serverData.border.left,
        this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top,
        this.serverData.border.enabled = this.serverData.border.width != 0 && this.serverData.border.height != 0,
        qt()
    }
    ,
    w.prototype.handleResetTime = function(e) {
        var t = e.getUint8(e.offset++)
          , n = e.getFloat64(e.offset, !0);
        this.serverData.resetType = t,
        this.serverData.resetTime = n
    }
    ,
    w.prototype.handleSpectators = function(e) {
        this.spectators = e.getUint16(e.offset, !0),
        this.updateSpectators()
    }
    ,
    w.prototype.handleClearNodes = function(e) {
        this.clearBuckets()
    }
    ,
    w.prototype.handleLeaderboard = function(e) {
        var t = p.leaderCanvas
          , n = p.leaderCtx || t && t.getContext("2d");
        if (!(!t || !n)) {
            p.leaderHeaderEl || (p.leaderHeaderEl = document.getElementById("leaderboard-header")),
            p.leaderHeaderEl && p.leaderHeaderEl.textContent !== "Leaderboard" && (p.leaderHeaderEl.textContent = "Leaderboard");
            var a = e.getUint32(e.offset, !0);
            e.offset += 4;
            var s = 200
              , c = 20 * a + 5;
            t.width !== s && (t.width = s),
            t.height !== c && (t.height = c),
            n.clearRect(0, 0, t.width, t.height),
            n.font = "16px Calibri";
            for (var d = 20, r = 0; r < a; r++) {
                var o = e.getUint16(e.offset, !0);
                e.offset += 2;
                var l = ve(e) || "An unnamed cell";
                o == this.playerId ? n.fillStyle = f.uiLeaderboardHighlightSelf : this.partyIds[o] != null ? n.fillStyle = f.uiLeaderboardHighlightParty : n.fillStyle = f.uiForegroundColor,
                n.fillText(r + 1 + ". " + l, 10, d),
                d += 20
            }
        }
    }
    ,
    w.prototype.handleLeaderboardCustom = function(e) {
        var t = p.leaderCanvas
          , n = p.leaderCtx || t && t.getContext("2d");
        if (!(!t || !n)) {
            p.leaderHeaderEl || (p.leaderHeaderEl = document.getElementById("leaderboard-header")),
            p.leaderHeaderEl && p.leaderHeaderEl.textContent !== "Leaderboard" && (p.leaderHeaderEl.textContent = "Leaderboard");
            var a = e.getUint16(e.offset, !0)
              , s = e.getUint8(e.offset + 2, !0);
            e.getUint8(e.offset + 3, !0),
            e.offset += 4;
            var c = 200
              , d = 20 * a + 5;
            t.width !== c && (t.width = c),
            t.height !== d && (t.height = d),
            n.clearRect(0, 0, t.width, t.height),
            n.font = "16px Calibri";
            for (var r = 20, o = 0; o < a; o++) {
                var l = xe(e);
                o == s ? n.fillStyle = f.uiLeaderboardHighlightSelf : n.fillStyle = f.uiForegroundColor,
                n.fillText(l, 5, r),
                r += 20
            }
        }
    }
    ,
    w.prototype.handlePing = function() {
        var e = +new Date
          , t = typeof G == "number" ? G : j;
        typeof t != "number" && (t = e);
        var n = e - t;
        u.cColoredPing ? (p.pingSpan || Be.querySelector("#pPing span")).style.color = f.uiForegroundColor : n < 100 ? (p.pingSpan || Be.querySelector("#pPing span")).style.color = f.uiGameColorSuccess : n < 200 ? (p.pingSpan || Be.querySelector("#pPing span")).style.color = f.uiGameColorWarning : (p.pingSpan || Be.querySelector("#pPing span")).style.color = f.uiGameColorError,
        (p.pingSpan || Be.querySelector("#pPing span")).textContent = n + "ms"
    }
    ,
    w.prototype.handleChat = function(e) {
        var t = e.getUint8(e.offset++)
          , n = "rgb(" + e.getUint8(e.offset++) + "," + e.getUint8(e.offset++) + "," + e.getUint8(e.offset++) + ")"
          , a = e.getUint8(e.offset++)
          , s = e.getUint16(e.offset, !0);
        if (e.offset += 2,
        !Ze.includes(s)) {
            var c = ve(e);
            e.getUint8(e.offset++);
            var d = _e(ve(e)) || "An unnamed cell", r = _e(ve(e)), o = Oe.ALL, l = e.offset < e.byteLength ? e.getBigInt64(e.offset, !0) : 0, g;
            switch (t) {
            case 1:
                g = "Party",
                o = Oe.PARTY;
                break;
            case 2:
                g = "Admin",
                o = Oe.ADMIN;
                break;
            default:
                g = "All";
                break
            }
            var h = null
              , C = c;
            if (c.length > 0) {
                var y = null;
                for (var k in yt)
                    if (yt[k] === c) {
                        y = parseInt(k);
                        break
                    }
                y && Na[y] && (h = Na[y]),
                _e(g += " - " + c)
            }
            var _ = document.createElement("td");
            l != 0 && (_.dataset.msgid = l);
            var b = document.createElement("span");
            if (h && h.style && C.length > 0) {
                var x = document.createElement("span");
                x.innerText = C,
                x.className = "chat-title";
                for (var N in h.style)
                    x.style[N] = h.style[N];
                b.textContent = "[" + (t === 1 ? "Party" : t === 2 ? "Admin" : "All") + " - ",
                b.appendChild(x),
                b.appendChild(document.createTextNode("] "))
            } else
                b.textContent = "[" + g + "] ";
            _.appendChild(b);
            var A = null;
            u.cShowChatIds && (A = document.createElement("span"),
            A.innerText = " (" + s + ")",
            !u.cColoredChatIds && (A.style.color = "gray"),
            A.style.fontWeight = "bolder",
            A.style.pointerEvents = "all",
            A.style.userSelect = "all");
            var ce = document.createElement("span");
            ce.innerText = d,
            ce.dataset.playerId = s,
            ce.style.color = n,
            ce.className = "chat-name",
            A !== null && ce.appendChild(A),
            _.appendChild(ce);
            var he = document.createElement("span");
            he.innerHTML = ": ",
            _.appendChild(he);
            var pe = document.createElement("span");
            pe.className = "chat-content",
            pe.style.color = at[a],
            pe.innerHTML = sn(r),
            _.appendChild(pe),
            Ut(o, _),
            l != 0 && bt.set(String(l), _)
        }
    }
    ,
    w.prototype.handleWhisper = function(e) {
        var t = _e(ve(e)) || "An unnamed cell"
          , n = e.getUint16(e.offset, !0);
        if (e.offset += 2,
        !Ze.includes(n)) {
            var a = "rgb(" + e.getUint8(e.offset++) + "," + e.getUint8(e.offset++) + "," + e.getUint8(e.offset++) + ")"
              , s = _e(ve(e)) || "An unnamed cell"
              , c = e.getUint16(e.offset, !0);
            e.offset += 2;
            var d = "rgb(" + e.getUint8(e.offset++) + "," + e.getUint8(e.offset++) + "," + e.getUint8(e.offset++) + ")"
              , r = _e(ve(e))
              , o = document.createElement("td")
              , l = document.createElement("span");
            l.innerText = t,
            l.dataset.playerId = n,
            l.style.color = a,
            l.className = "chat-name",
            l.oncontextmenu = nn,
            o.appendChild(l);
            var g = document.createElement("span");
            g.innerHTML = " > ",
            o.appendChild(g);
            var h = document.createElement("span");
            h.innerText = s,
            h.dataset.playerId = c,
            h.style.color = d,
            h.className = "chat-name",
            h.oncontextmenu = nn,
            o.appendChild(h);
            var C = document.createElement("span");
            C.innerHTML = ": " + sn(r),
            o.appendChild(C),
            Ut(Oe.WHISPER, o)
        }
    }
    ,
    w.prototype.handleEditMessage = function(e) {
        var t = e.getBigInt64(e.offset, !0);
        e.offset += 8;
        var n = _e(ve(e));
        const a = String(t)
          , s = bt.get(a);
        if (s) {
            if (n.length > 0) {
                const c = s.querySelector(".chat-content");
                c && (c.innerHTML = sn(n))
            } else {
                const c = s.closest("tr");
                c && c.parentNode && c.parentNode.removeChild(c),
                bt.delete(a)
            }
            return
        }
        n.length > 0 ? $(".chat-table td[data-msgid='" + t + "'] .chat-content").html(sn(n)) : $(".chat-table td[data-msgid='" + t + "']").closest("tr").remove()
    }
    ,
    w.prototype.handleCopyableMessage = function(e) {
        var t = xe(e)
          , n = xe(e);
        this.selfMsgCopyable(t, n)
    }
    ,
    w.prototype.handleSystemMsg = function(e) {
        var t = ve(e);
        this.selfMsg(t)
    }
    ,
    w.prototype.handleAuthenticated = function(e) {
        var t = e.getUint8(1);
        switch (t) {
        case Ya.SUCCESS:
            break;
        case Ya.FAILURE:
            this.selfMsg("Invalid authentication token! Please logout and try again!");
            break
        }
        this.spectate ? this.sendPacket(new m.sendSpectate) : this.sendPacket(new m.setName(this.name))
    }
    ,
    w.prototype.handleProfile = function(e) {
        var t = xe(e)
          , n = JSON.parse(t);
        Dn(n)
    }
    ,
    w.prototype.handleInvite = function(e) {
        if (u.cAutoDecline)
            i.sendPacket(new m.sendInviteResponse(!1));
        else {
            var t = _e(ve(e))
              , n = document.getElementById("popup-party-text");
            n.innerText = t + " has invited you to a party.",
            Me($("#popup-party"))
        }
    }
    ,
    w.prototype.handlePartyInfo = function(e) {
        var t = {}
          , n = []
          , a = -1
          , s = e.getUint16(e.offset, !0);
        e.offset += 2;
        for (var c = 0; c < s; c++) {
            var d = {}
              , r = e.getUint8(e.offset++);
            if (d.id = e.getUint16(e.offset, !0),
            t[d.id] = c,
            e.offset += 2,
            r == 1 ? (a = d.id,
            d.isLeader = !0) : d.isLeader = !1,
            d.name = ve(e) || "An unnamed cell",
            d.x = 0,
            d.y = 0,
            d.x_ = 0,
            d.y_ = 0,
            d.score = 0,
            d.cache = -1,
            d.team = 0,
            d.state = st.UNKNOWN,
            this.partyIds[d.id] != null) {
                var o = this.party[this.partyIds[d.id]];
                d.x = o.x,
                d.y = o.y,
                d.x_ = o.x_,
                d.y_ = o.y_,
                d.state = o.state,
                d.score = o.score,
                d.cache = o.cache,
                d.mmColor = o.mmColor
            } else
                d.mmColor = Vi(d.id);
            n.push(d)
        }
        this.party = n,
        this.partyIds = t,
        this.partyLeader != a && (this.partyLeader = a,
        wn.css("display") == "block" && W.checkLeader()),
        s > 0 ? this.drawParty() : this.clearParty()
    }
    ,
    w.prototype.handlePartyData = function(e) {
        var t = e.getUint16(e.offset, !0);
        if (e.offset += 2,
        t == this.party.length) {
            for (var n = 0; n < t; n++) {
                var a = this.party[n];
                a.state = e.getUint8(e.offset++),
                a.state === st.ALIVE && (a.x_ = e.getInt16(e.offset, !0),
                a.y_ = e.getInt16(e.offset + 2, !0),
                a.score = e.getInt32(e.offset + 4, !0),
                e.offset += 8)
            }
            this.drawParty()
        }
    }
    ,
    w.prototype.handlePartyJoinCode = function(e) {
        var t = xe(e);
        if (this.partyCode = xe(e),
        this.partyCode.length != 0) {
            this.selfMsgCopyable("🎉 Party is now public! Share this command with friends: ", "/join " + this.partyCode),
            $("#popup-party-code-content input").val("/join " + this.partyCode),
            $("#popup-party-code").show();
            var n = "#" + this.currentServerName + "&" + this.partyCode;
            window.history.pushState("page", "", n)
        } else
            this.selfMsg(t),
            this.partyCode = null,
            window.history.pushState("page", "", " ")
    }
    ,
    w.prototype.handleStats = function(e) {
        var t = e.getUint16(e.offset, !0);
        e.offset += 2,
        this.stats.name = ve(e) || "An unnamed cell",
        this.stats.alive += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.eatenFood += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.eatenEject += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.eatenVirus += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.eatenPlayer += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.gainFood += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.gainEject += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.gainVirus += e.getUint32(e.offset, !0),
        e.offset += 4,
        this.stats.gainPlayer += e.getUint32(e.offset, !0),
        e.offset += 4;
        var n = p.statsMenuEl || document.getElementById("main-stats");
        if (n) {
            const a = this.stats
              , s = "<span>Name: " + a.name + " (" + t + ")</span><br><span>Alive: " + dn(a.alive) + "</span><br><span>Food eaten: " + a.eatenFood + " (" + a.gainFood + ")</span><br><span>Ejected mass eaten: " + a.eatenEject + " (" + a.gainEject + ")</span><br><span>Viruses eaten: " + a.eatenVirus + " (" + a.gainVirus + ")</span><br><span>Player cells eaten: " + a.eatenPlayer + " (" + a.gainPlayer + ")</span><br>";
            n._lastHtml !== s && (n.innerHTML = s,
            n._lastHtml = s)
        }
    }
    ,
    w.prototype.showSubPanel = function(e) {
        var t = e.getUint8(e.offset++) == 1;
        this.subPanelOverride = t,
        pt(),
        t && (!this.serverData.hasSentSubPanel && (va(),
        this.serverData.hasSentSubPanel = !0),
        document.body.classList.add("hide-captcha-badge"))
    }
    ,
    w.prototype.updateSubPanel = function(e) {
        le && Rn(le.uid)
    }
    ,
    w.prototype.updateSpectators = function() {
        p.spectatorCount.html(this.spectators)
    }
    ,
    w.prototype.handleAddBuff = function(e) {
        var t = e.getUint8(e.offset++)
          , n = e.getUint8(e.offset++)
          , a = e.getFloat64(e.offset, !0);
        e.offset += 8,
        this.buffHolder.onAddBuff(t, n, a)
    }
    ,
    w.prototype.handleRemoveBuff = function(e) {
        var t = e.getUint8(e.offset++);
        this.buffHolder.onRemoveBuff(t)
    }
    ,
    w.prototype.handleClearBuffs = function(e) {
        var t = e.getUint8(e.offset++) == 1;
        this.buffHolder.clearBuffs(t)
    }
    ,
    w.prototype.sortCells = function() {
        B.children.sort(function(e, t) {
            return e.parentCell.size - t.parentCell.size
        }),
        this.updateScorePanel()
    }
    ,
    w.prototype.updateScorePanel = function() {
        var e = 0
          , t = 0;
        for (var n in this.myCells) {
            var a = this.myCells[n];
            e += a.getRealMass(),
            t++
        }
        p.playerMass.textContent = e.toLocaleString(),
        e > this.score && (this.score = e,
        p.playerScore.textContent = this.score.toLocaleString()),
        this.updateCellCounter(t)
    }
    ,
    w.prototype.updateCellCounter = function(e, t) {
        if (p.playerCellCount != e || t)
            if (p.playerCellCount = e,
            p.playerCells.textContent = e + "/" + this.getServerMaxCells(),
            u.cColoredCellCount)
                p.playerCells.style.color = f.uiForegroundColor;
            else {
                var n = e / this.getServerMaxCells();
                n >= 1 ? p.playerCells.style.color = f.uiGameColorError : n >= .5 ? p.playerCells.style.color = f.uiGameColorWarning : p.playerCells.style.color = f.uiGameColorSuccess
            }
    }
    ,
    w.prototype.toggleLineSplit = function() {
        if (this.lineSplitEnabled = !this.lineSplitEnabled,
        this.lineSplitEnabled) {
            var e = 0
              , t = 0
              , n = 0
              , a = 0;
            for (var s in this.myCells) {
                var c = this.myCells[s];
                e += c.x * c.size,
                t += c.y * c.size,
                n += c.size,
                a++
            }
            if (a === 0)
                return;
            var d = e / n
              , r = t / n
              , o = U.pivot.x - E.stage.position.x / this.scale + this.mouseRawX * oe.resolution / this.scale
              , l = U.pivot.y - E.stage.position.y / this.scale + this.mouseRawY * oe.resolution / this.scale
              , g = o - d
              , h = l - r
              , C = Math.atan2(h, g)
              , y = (C * 180 / Math.PI + 360) % 360
              , k = Math.round(y / 45);
            switch (k) {
            case 0:
            case 8:
                this.lineSplitDirection = {
                    x: 1,
                    y: 0
                };
                break;
            case 1:
                this.lineSplitDirection = {
                    x: 1,
                    y: 1
                };
                break;
            case 2:
                this.lineSplitDirection = {
                    x: 0,
                    y: 1
                };
                break;
            case 3:
                this.lineSplitDirection = {
                    x: -1,
                    y: 1
                };
                break;
            case 4:
                this.lineSplitDirection = {
                    x: -1,
                    y: 0
                };
                break;
            case 5:
                this.lineSplitDirection = {
                    x: -1,
                    y: -1
                };
                break;
            case 6:
                this.lineSplitDirection = {
                    x: 0,
                    y: -1
                };
                break;
            case 7:
                this.lineSplitDirection = {
                    x: 1,
                    y: -1
                };
                break
            }
            this.lineSplitLocked = !0,
            this.lineSplitPhaseStart = typeof performance < "u" && performance.now ? performance.now() : Date.now(),
            this.calculateAndLockMousePosition();
            var _ = "";
            if (this.lineSplitDirection.y < 0 && this.lineSplitDirection.x === 0 ? _ = "↑" : this.lineSplitDirection.y > 0 && this.lineSplitDirection.x === 0 ? _ = "↓" : this.lineSplitDirection.x < 0 && this.lineSplitDirection.y === 0 ? _ = "←" : this.lineSplitDirection.x > 0 && this.lineSplitDirection.y === 0 ? _ = "→" : this.lineSplitDirection.y < 0 && this.lineSplitDirection.x > 0 ? _ = "↗" : this.lineSplitDirection.y < 0 && this.lineSplitDirection.x < 0 ? _ = "↖" : this.lineSplitDirection.y > 0 && this.lineSplitDirection.x > 0 ? _ = "↘" : this.lineSplitDirection.y > 0 && this.lineSplitDirection.x < 0 && (_ = "↙"),
            p.pLineSpan)
                p.pLineSpan.parentElement.style.display = "block",
                p.pLineSpan.textContent = _;
            else {
                var b = document.getElementById("pLine");
                if (b) {
                    b.style.display = "block";
                    var x = b.querySelector("span");
                    x && (x.textContent = _)
                }
            }
        } else if (this.lineSplitLocked = !1,
        p.pLineSpan)
            p.pLineSpan.parentElement.style.display = "none";
        else {
            var b = document.getElementById("pLine");
            b && (b.style.display = "none")
        }
    }
    ,
    w.prototype._screenFractionToWorld = function(e, t) {
        var n = E.stage.position.x
          , a = E.stage.position.y
          , s = U.pivot.x - n / this.scale + M.width * e / this.scale
          , c = U.pivot.y - a / this.scale + M.height * t / this.scale;
        return {
            x: s,
            y: c
        }
    }
    ,
    w.prototype._directionToScreenEdge = function() {
        var e = this.lineSplitDirection.x
          , t = this.lineSplitDirection.y
          , n = .015
          , a = .5
          , s = .5;
        return e === 1 && t === 0 ? (a = 1 - n,
        s = .5) : e === -1 && t === 0 ? (a = 0 + n,
        s = .5) : e === 0 && t === 1 ? (a = .5,
        s = 1 - n) : e === 0 && t === -1 ? (a = .5,
        s = 0 + n) : e === 1 && t === -1 ? (a = 1 - n,
        s = 0 + n) : e === -1 && t === -1 ? (a = 0 + n,
        s = 0 + n) : e === 1 && t === 1 ? (a = 1 - n,
        s = 1 - n) : e === -1 && t === 1 && (a = 0 + n,
        s = 1 - n),
        this._screenFractionToWorld(a, s)
    }
    ,
    w.prototype.calculateOptimalLineSplitMouse = function() {
        var e = typeof performance < "u" && performance.now ? performance.now() : Date.now()
          , t = e - this.lineSplitPhaseStart < this.lineSplitPhaseDelayMs;
        return t ? this._screenFractionToWorld(.5, .5) : this._directionToScreenEdge()
    }
    ,
    w.prototype.calculateAndLockMousePosition = function() {
        var e = this.calculateOptimalLineSplitMouse();
        this.lineSplitMouseX = e.x,
        this.lineSplitMouseY = e.y
    }
    ,
    w.prototype.drawParty = function() {
        if (this.party.length != 0) {
            if (u.cHidePartyPanel)
                p.partyPanel[0] && (p.partyPanel[0].style.display = "none");
            else {
                var e = p.partyPanel[0]
                  , t = Ct && Ct[0];
                e && t && e.style.display === "none" && t.style.display !== "none" && (e.style.display = "block")
            }
            var n = p.partyCanvas
              , a = p.partyCtx || n && n.getContext("2d");
            if (!(!n || !a)) {
                a.font = "16px Calibri";
                for (var s = 0, c = 0, d = 0, r = 0; r < this.party.length; r++) {
                    var o = this.party[r];
                    o.cache == -1 && (o.cache = a.measureText(r + 1 + ". " + o.name).width),
                    o.cache > s && (s = o.cache),
                    o.state === st.ALIVE || o.state === st.UNKNOWN ? (o.scoreText = o.score.toLocaleString(),
                    d += o.score) : o.state === st.DEAD ? o.scoreText = "DEAD" : o.state === st.SPECTATE && (o.scoreText = "SPEC");
                    var l = a.measureText(o.scoreText).width;
                    l > c && (c = l)
                }
                var g = d.toLocaleString();
                c = Math.max(c, a.measureText(g).width),
                n.width = 15 + s + 50 + c,
                n.height = 20 * this.party.length + 5 + (this.party.length > 1 ? 20 : 0),
                a.font = "16px Calibri";
                for (var h = 20, C = 5 + s + 50, r = 0; r < this.party.length; r++) {
                    var o = this.party[r];
                    a.fillStyle = o.isLeader ? f.uiPartyLeaderColor : f.uiForegroundColor,
                    a.fillText(r + 1 + ". " + o.name, 5, h),
                    a.fillText(o.scoreText, C, h),
                    h += 20
                }
                this.party.length > 1 && (a.fillStyle = f.uiForegroundColor,
                a.fillText("Total:", 5, h),
                a.fillText(g, C, h))
            }
        }
    }
    ,
    w.prototype.handleShowScrimmageMenu = function() {
        te(q),
        ze.css("display", "block"),
        $("#scrimmage-btn-leave").css("display", "none"),
        i.serverData.border.enabled = !1
    }
    ,
    w.prototype.handleQueueData = function(e) {
        var t = xe(e)
          , n = e.getUint32(e.offset, !0);
        e.offset += 4;
        var a = e.offset < e.byteLength ? e.getUint8(e.offset) : -1
          , s = p.leaderCanvas;
        if (s) {
            !p.leaderCtx && (p.leaderCtx = s.getContext("2d"));
            var c = p.leaderCtx;
            p.leaderHeaderEl || (p.leaderHeaderEl = document.getElementById("leaderboard-header")),
            p.leaderHeaderEl && p.leaderHeaderEl.textContent !== "Queue" && (p.leaderHeaderEl.textContent = "Queue");
            var d = 200
              , r = 20 * (2 + (a != -1 ? 1 : 0)) + 5;
            s.width !== d || s.height !== r ? (s.width = d,
            s.height = r,
            c.font = "16px Calibri") : (c.clearRect(0, 0, s.width, s.height),
            c.font = "16px Calibri");
            var o = 20;
            c.fillStyle = f.uiForegroundColor,
            c.fillText("Mode: " + t, 5, o),
            o += 20,
            c.fillText("Time: " + dn(n), 5, o),
            a != -1 && (o += 20,
            c.fillText("Queued players: " + a, 5, o))
        }
    }
    ,
    w.prototype.handleQueueLeave = function(e) {
        var t = xe(e)
          , n = p.leaderCanvas;
        n && (n.width !== 0 || n.height !== 0) && (n.width = 0,
        n.height = 0),
        this.selfMsg("You have left the queue for [" + t + "]")
    }
    ,
    w.prototype.handleMatchState = function(e) {
        var t = e.byteLength == 1 ? 0 : e.getUint8(e.offset++);
        t == 0 ? (this.selfMsg("A match has been found. Good luck and have fun!"),
        ns()) : t == 1 && (!p.scrimmageLeaveBtn && (p.scrimmageLeaveBtn = $("#scrimmage-btn-leave")),
        p.scrimmageLeaveBtn.css("display", "block"))
    }
    ,
    w.prototype.handleScrimmageData = function(e) {
        var t = e.getUint8(e.offset++)
          , n = $("#scrimmage-mode-select")
          , a = $("#scrimmage-mode-info")
          , s = parseInt(n.val());
        n.empty(),
        a.empty();
        for (var c = {}; t > 0; ) {
            var d = e.getUint8(e.offset++)
              , r = xe(e)
              , o = xe(e)
              , l = document.createElement("option");
            l.innerHTML = r,
            l.value = d,
            n.append(l),
            l = document.createElement("div"),
            l.innerHTML = o,
            l.id = "scrimmage-info-" + d,
            l.style.display = "none",
            a.append(l),
            c[d] = !0,
            t--
        }
        if (Ae = {
            modes: {},
            sizes: {},
            maps: []
        },
        e.byteLength - 1 > e.offset) {
            for (t = e.getUint8(e.offset++); t > 0; ) {
                var d = e.getUint8(e.offset++)
                  , r = xe(e);
                Ae.modes[d] = {
                    id: d,
                    name: r
                },
                t--
            }
            for (t = e.getUint8(e.offset++); t > 0; ) {
                var d = e.getUint8(e.offset++)
                  , r = xe(e);
                Ae.sizes[d] = {
                    id: d,
                    name: r
                },
                t--
            }
            for (t = e.getUint8(e.offset++); t > 0; ) {
                for (var r = xe(e), g = {
                    name: r,
                    startmass: 0,
                    teams: 0,
                    modes: [],
                    sizes: []
                }, h = e.getUint8(e.offset++); h > 0; )
                    g.modes.push(e.getUint8(e.offset++)),
                    h--;
                for (var h = e.getUint8(e.offset++); h > 0; )
                    g.sizes.push(e.getUint8(e.offset++)),
                    h--;
                g.startmass = e.getUint16(e.offset, !0),
                e.offset += 2,
                g.respawnDelay = e.getInt16(e.offset, !0),
                e.offset += 2,
                g.teams = e.getUint8(e.offset++),
                Ae.maps.push(g),
                t--
            }
        }
        $("#scrimmage-custom-btn-container").css("display", Ae.maps.length == 0 ? "none" : "block"),
        $("#scrimmage-map").empty();
        for (var h = 0; h < Ae.maps.length; h++)
            $("#scrimmage-map").append("<option value='" + h + "'>" + Ae.maps[h].name + "</option>");
        c[s] != null ? (n.val(s),
        n.trigger("change")) : (n.prop("selectedIndex", 0),
        n.trigger("change"))
    }
    ,
    w.prototype.handleCustomGameUpdate = function(e) {
        var t = e.getUint8(e.offset++);
        switch (t) {
        case ee.MAP:
            W.updateMap(e.getUint8(e.offset++));
            break;
        case ee.MODE:
            W.updateMode(e.getUint8(e.offset++));
            break;
        case ee.SIZE:
            W.updateSize(e.getUint8(e.offset++));
            break;
        case ee.STARTMASS:
            W.updateStartMass(e.getUint16(e.offset, !0)),
            e.offset += 2;
            break;
        case ee.LOCK:
            W.updateLock(e.getUint8(e.offset++) === 1);
            break;
        case ee.PLAYER_UPDATE:
            var s = e.getUint8(e.offset++)
              , n = e.getUint8(e.offset++);
            i.party[s].team = n,
            W.updatePlayerById(s);
            break;
        case ee.PLAYER_LIST:
            for (var a = e.getUint8(e.offset++), s = 0; a > 0; )
                i.party[s].team = e.getUint8(e.offset++),
                a--,
                s++;
            W.updatePlayers();
            break;
        case ee.VIRUS_DENSITY:
            W.updateVirusDensity(e.getUint16(e.offset, !0)),
            e.offset += 2;
            break;
        case ee.RESPAWN_DELAY:
            W.updateRespawnDelay(e.getInt16(e.offset, !0)),
            e.offset += 2;
            break;
        case ee.AUTOSPLIT:
            W.updateAutoSplit(e.getUint8(e.offset++) === 1);
            break;
        case ee.PUBLIC:
            W.updatePublic(e.getUint8(e.offset++) === 1);
            break;
        case ee.PASSWORD:
            W.updatePassword(e.getUint8(e.offset++) === 1);
            break;
        case ee.NAME:
            W.updateName(ve(e));
            break
        }
    }
    ,
    w.prototype.handleCustomGameShow = function(e) {
        $(".scrimmage-full").css("display", "none"),
        $("#scrimmage-custom").css("display", "block");
        var t = ve(e)
          , n = e.getUint8(e.offset++)
          , a = e.getUint8(e.offset++)
          , s = e.getUint8(e.offset++)
          , c = e.getUint16(e.offset, !0);
        e.offset += 2;
        var d = e.getUint16(e.offset, !0);
        e.offset += 2;
        var r = e.getInt16(e.offset, !0);
        e.offset += 2;
        for (var o = e.getUint8(e.offset++) === 1, l = e.getUint8(e.offset++) === 1, g = e.getUint8(e.offset++) === 1, h = e.getUint8(e.offset++) === 1, C = e.getUint8(e.offset++), y = 0; C > 0; )
            i.party[y].team = e.getUint8(e.offset++),
            C--,
            y++;
        W.updateName(t),
        W.updateMap(n),
        W.updateMode(a),
        W.updateSize(s),
        W.updateStartMass(c),
        W.updateVirusDensity(d),
        W.updateLock(l),
        W.updateRespawnDelay(r),
        W.updateAutoSplit(o),
        W.updatePublic(g),
        W.updatePassword(h),
        W.updatePlayers(),
        W.checkLeader()
    }
    ,
    w.prototype.handleCustomGameLeave = function() {
        $(".scrimmage-full").css("display", "none"),
        $("#scrimmage-menu").css("display", "block")
    }
    ,
    w.prototype.handleShowCustomGameLobbies = function(e) {
        $(".scrimmage-full").css("display", "none"),
        $("#scrimmage-lobbies").css("display", "block"),
        bn = {};
        var t = $("#scrimmage-lobbies-tbody");
        for (t.empty(); ; ) {
            var n = e.getUint32(e.offset, !0);
            if (e.offset += 4,
            n == 0)
                break;
            var a = {};
            a.id = n,
            a.name = ve(e),
            a.leaderId = e.getUint32(e.offset),
            e.offset += 4,
            a.leaderName = ve(e) || "An unnamed cell",
            a.map = e.getUint8(e.offset++),
            a.mode = e.getUint8(e.offset++),
            a.size = e.getUint16(e.offset, !0),
            e.offset += 2,
            a.maxSize = e.getUint16(e.offset, !0),
            e.offset += 2,
            a.hasPasscode = e.getUint8(e.offset++) == 1,
            bn[a.id] = a;
            var s = a.hasPasscode ? "<div class='scrimmage-lock'></div>" : "";
            t.append("<tr partyId='" + a.id + "'><td><span>" + s + _e(a.name) + "</span></td><td><span>" + _e(a.leaderName) + "</span></td><td><span>" + Ae.maps[a.map].name + "</span></td><td><span>" + Ae.modes[a.mode].name + "</span></td><td><span>" + a.size + "/" + a.maxSize + "</span></td></tr>")
        }
        $("#scrimmage-lobbies-tbody tr").on("click", function() {
            $(".custom-game-selected").removeClass("custom-game-selected"),
            yn = $(this).attr("partyId"),
            $(this).addClass("custom-game-selected")
        })
    }
    ;
    var W = {
        updateName: function(e) {
            $("#scrimmage-name").text(e)
        },
        updateMap: function(e) {
            $("#scrimmage-map option[value='" + e + "']").prop("selected", !0);
            var t = Ae.maps[e];
            $("#scrimmage-mapmode").empty();
            for (var n = 0; n < t.modes.length; n++) {
                var a = Ae.modes[t.modes[n]];
                $("#scrimmage-mapmode").append("<option value='" + n + "'>" + a.name + "</option>")
            }
            $("#scrimmage-mapsize").empty();
            for (var n = 0; n < t.sizes.length; n++) {
                var s = Ae.sizes[t.sizes[n]];
                $("#scrimmage-mapsize").append("<option value='" + n + "'>" + s.name + "</option>")
            }
            W.updateMode(0),
            W.updateSize(0),
            W.updateStartMass(t.startmass),
            $("#scrimmage-startmass").attr("placeholder", t.startmass),
            W.updateRespawnDelay(t.respawnDelay),
            $("#scrimmage-map").attr("data", e),
            i.customGameMap = t
        },
        updateMode: function(e) {
            $("#scrimmage-mapmode option[value='" + e + "']").prop("selected", !0),
            $("#scrimmage-mapmode").attr("data", e)
        },
        updateSize: function(e) {
            $("#scrimmage-mapsize option[value='" + e + "']").prop("selected", !0),
            $("#scrimmage-mapsize").attr("data", e)
        },
        updateStartMass: function(e) {
            $("#scrimmage-startmass").val(e),
            $("#scrimmage-startmass").attr("data", e)
        },
        updateVirusDensity: function(e) {
            $("#scrimmage-virusDensity").val(e),
            $("#scrimmage-virusDensity").attr("data", e)
        },
        updateRespawnDelay: function(e) {
            $("#scrimmage-respawnDelay").val(e),
            $("#scrimmage-respawnDelay").attr("data", e)
        },
        updateAutoSplit: function(e) {
            $("#scrimmage-autoSplit").prop("checked", e)
        },
        updatePublic: function(e) {
            $("#scrimmage-public").prop("checked", e)
        },
        updatePassword: function(e) {
            $("#scrimmage-password").prop("checked", e)
        },
        updateLock: function(e) {
            $("#scrimmage-lockteams").prop("checked", e),
            W.checkLock()
        },
        checkLock: function() {
            $("#scrimmage-lockteams").prop("checked") && !i.isPartyLeader() ? $("#cgp-" + i.partyIndex).attr("disabled", "disabled") : $("#cgp-" + i.partyIndex).removeAttr("disabled")
        },
        checkLeader: function() {
            i.isPartyLeader() ? $(".custom-game").removeAttr("disabled") : ($(".custom-game").attr("disabled", "disabled"),
            W.checkLock())
        },
        updatePlayerById: function(e) {
            var t = i.party[e];
            $("#cgp-" + e + " option[value='" + t.team + "']").prop("selected", !0),
            $("#cgp-name-" + e).text(t.name),
            $("#cgp-name-" + e).css("color", Ga[t.team])
        },
        updatePlayers: function() {
            $("#scrimmage-custom-players").empty();
            for (var e = 0; e < i.party.length; e++) {
                var t = i.party[e];
                t.id == i.playerId && (i.partyIndex = e),
                $("#scrimmage-custom-players").append("<tr><td><span id='cgp-name-" + e + "'>" + t.name + "</span></td>" + W.getTeamOptions(e, i.customGameMap.teams) + "</tr>"),
                $("#cgp-" + e + " option[value='" + t.team + "']").prop("selected", !0),
                $("#cgp-name-" + e).css("color", Ga[t.team]),
                $("#cgp-" + e).on("change", function(n) {
                    var a = parseInt($(this).attr("id").match("\\d+")[0])
                      , s = $(this).find("option:selected").val();
                    $("#cgp-" + e + " option[value='" + $(this).attr("data") + "']").prop("selected", !0),
                    i.sendPacket(new m.sendCustomGameUpdate(ee.PLAYER_UPDATE,a,s))
                })
            }
            W.checkLeader()
        },
        getTeamOptions: function(e, t) {
            var n = "";
            if (t != null && t > 1) {
                n = "<td><select class='custom-game' id='cgp-" + e + "'><option value='0'>Spectator</option>";
                for (var a = 1; a <= t; a++)
                    n += "<option value='" + a + "' class='t" + a + "'>" + Zi[a] + "</option>";
                n += "</select></td>"
            }
            return n
        }
    };
    function ge(e) {
        this.id = e,
        this.type = 0,
        this.nameCache = null,
        this.skin = null,
        this.playerId = 0,
        this.color = null,
        this.x = 0,
        this.y = 0,
        this.x_ = 0,
        this.y_ = 0,
        this.size = 0,
        this.size_ = 0,
        this.steps = 0,
        this.massLastAmount = -1,
        this.cache = null,
        this._massCacheLastRedraw = 0,
        this._massChangeThreshold = 5,
        this._massRegenIntervalMs = 250
    }
    var lt = function() {
        var e = {
            1: [],
            6: []
        };
        function t(n, a, s) {
            n.id = a,
            n.type = s,
            n.playerId = 0,
            n.color = null,
            n.x = n.y = n.x_ = n.y_ = 0,
            n.size = n.size_ = 0,
            n.steps = 0,
            n.massLastAmount = -1,
            n._massCacheLastRedraw = 0,
            n.cache && (n.cache.destroy(),
            n.cache = null),
            n.sprite = null,
            n.container = null,
            n.skin = null,
            n.buff = 0,
            n.needsPixiUpdate = !0
        }
        return {
            acquire: function(n, a) {
                var s = e[n];
                if (!s || s.length === 0)
                    return null;
                var c = s.pop();
                return t(c, a, n),
                c
            },
            release: function(n) {
                var a = n.type;
                if (a !== 1 && a !== 6)
                    return !1;
                var s = e[a];
                if (s.length > 2048)
                    return !1;
                if (n.container) {
                    try {
                        n.container.parent && n.container.parent.removeChild(n.container),
                        n.container.destroy({
                            children: !0
                        })
                    } catch {}
                    n.container = null
                }
                if (n.sprite) {
                    try {
                        n.sprite.parent && n.sprite.parent.removeChild(n.sprite),
                        n.sprite.destroy({
                            children: !0
                        })
                    } catch {}
                    n.sprite = null
                }
                if (n.cache) {
                    try {
                        n.cache.destroy()
                    } catch {}
                    n.cache = null
                }
                return n.playerId = 0,
                n.needsPixiUpdate = !0,
                s.push(n),
                !0
            }
        }
    }()
      , Kt = function() {
        var e = {
            1: [],
            6: []
        };
        function t(n) {
            n.alpha = 1,
            n.visible = !0,
            n.rotation = 0,
            n.tint = 16777215,
            n.scale.set(1),
            n.anchor.set(.5)
        }
        return {
            acquire: function(n) {
                var a = e[n];
                if (!a || a.length === 0)
                    return new v.Sprite(v.Texture.EMPTY);
                var s = a.pop();
                return t(s),
                s
            },
            release: function(n, a) {
                if (n !== 1 && n !== 6)
                    return !1;
                var s = e[n];
                if (s.length > 4096)
                    return !1;
                try {
                    a.parent && a.parent.removeChild(a)
                } catch {}
                return a.parentCell = null,
                s.push(a),
                !0
            }
        }
    }();
    ge.prototype.setType = function(e) {
        this.type = e
    }
    ,
    ge.prototype.setX = function(e) {
        this.x_ = e,
        this.x = e
    }
    ,
    ge.prototype.setY = function(e) {
        this.y_ = e,
        this.y = e
    }
    ,
    ge.prototype.updateX = function(e) {
        this.x_ = e
    }
    ,
    ge.prototype.updateY = function(e) {
        this.y_ = e
    }
    ,
    ge.prototype.setSize = function(e) {
        this.size_ = e,
        this.size = e
    }
    ,
    ge.prototype.getMass = function() {
        return this.size * this.size / 25 >> 0
    }
    ,
    ge.prototype.getRealMass = function() {
        return this.size_ * this.size_ / 25 >> 0
    }
    ,
    ge.prototype.animate = function(e) {
        this.x += (this.x_ - this.x) * e,
        this.y += (this.y_ - this.y) * e,
        this.size += (this.size_ - this.size) * e,
        this.steps--
    }
    ,
    ge.prototype.getSizeCache = function() {
        var e = this.getMass()
          , t = !1;
        if (this.massLastAmount < 0)
            t = !0;
        else if (e !== this.massLastAmount) {
            var n = Math.abs(e - this.massLastAmount);
            (n >= this._massChangeThreshold || O - this._massCacheLastRedraw >= this._massRegenIntervalMs) && (t = !0)
        } else
            O - this._massCacheLastRedraw >= 1e3 && this.cache == null && (t = !0);
        if (t) {
            var a;
            oe.massType == 1 ? a = this.toShortString(e) : a = e.toString();
            for (var s = 0, c = 0, d = 0; d < a.length; d++) {
                var r = a.charAt(d)
                  , o = dt.getNumber(r);
                s += o.width - 2,
                c = Math.max(o.height, c)
            }
            this.cache == null ? this.cache = v.RenderTexture.create(s, c) : (s != this.cache.width || c != this.cache.height) && (this.cache.destroy({
                children: !0,
                texture: !0,
                baseTexture: !0
            }),
            this.cache = v.RenderTexture.create(s, c));
            for (var l = dt.cacheContainer, g = 0, d = 0; d < a.length; d++) {
                var r = a.charAt(d)
                  , o = dt.getSizeCacheSprite();
                o.texture = dt.getNumber(r).texture,
                o.position.x = g,
                l.addChild(o),
                g += o.width - 2
            }
            E.renderer.render(l, {
                renderTexture: this.cache,
                clear: !0
            }),
            dt.clearCacheContainer(),
            this.massLastAmount = e,
            this._massCacheLastRedraw = O
        }
        return this.cache
    }
    ,
    ge.prototype.toShortString = function(e) {
        if (e < 1e3)
            return e.toString();
        if (e < 1e6) {
            var t = Math.floor(e / 100) / 10;
            return t.toFixed(1) + "K"
        } else if (e < 1e9) {
            var t = Math.floor(e / 1e5) / 10;
            return t.toFixed(1) + "M"
        } else if (e >= 1e9) {
            var t = Math.floor(e / 1e8) / 10;
            return t.toFixed(1) + "B"
        }
        return e.toString()
    }
    ;
    function ui() {
        this.cache = {},
        this.cacheContainer = new v.Container,
        this.sprites = [],
        this.spritesIndex = 0,
        this.getNumber = function(e) {
            return this.cache[e]
        }
        ,
        this.clearCacheContainer = function() {
            for (; this.cacheContainer.children[0]; )
                this.cacheContainer.removeChild(this.cacheContainer.children[0]);
            this.spritesIndex = 0
        }
        ,
        this.getSizeCacheSprite = function() {
            for (; this.spritesIndex >= this.sprites.length; )
                this.sprites.push(new v.Sprite);
            return this.sprites[this.spritesIndex++]
        }
        ,
        this.buildSizeCache = function() {
            var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "K", "M", "B", "T"];
            for (var t of e) {
                var n = new v.Text(t,{
                    fontFamily: "Verdana",
                    fontWeight: "bold",
                    fontSize: 54,
                    fill: "#fff",
                    stroke: "black",
                    strokeThickness: oe.textOutlineSize
                });
                this.cache[t] = n
            }
        }
    }
    const dt = new ui;
    ge.prototype.handleFood = function() {
        this.needsPixiUpdate && this.sprite.visible && (this.sprite.texture = $t,
        this.sprite.anchor.set(.5),
        this.sprite.width = 12,
        this.sprite.height = 12,
        u.cThemeEnabled && _t.length > 0 ? this.sprite.tint = ji(this.id) : F.enabled && F.foodColors && F.foodColors.length > 0 && !u.cDisableEventSkins ? this.sprite.tint = F.foodColors[this.id % F.foodColors.length] : this.sprite.tint = this.color,
        this.needsPixiUpdate = !1),
        this.sprite.position.set(this.x, this.y)
    }
    ,
    ge.prototype.handle = function() {
        switch (this.type) {
        case 0:
            break;
        case 1:
            this.needsPixiUpdate && (this.skin >= 0 && this.skin < ln.length ? this.sprite.texture = ln[this.skin] : this.sprite.texture = ct,
            this.sprite.tint = this.color,
            this.sprite.width = this.size * 2,
            this.sprite.height = this.size * 2,
            this.needsPixiUpdate = !1),
            this.rainbow && (this.sprite.tint = ja[Math.floor(O % zi / 100)]),
            this.sprite.position.set(this.x, this.y);
            break;
        case 2:
            var e = i.playerRegistry.getPlayerById(this.playerId)
              , t = it.ALL;
            i.playerId == this.playerId ? t = it.SELF : i.partyIds[this.playerId] != null && (t = it.PARTY);
            let l = this.needsPixiUpdate;
            if (this.needsPixiUpdate && (this.cellSprite = new v.Sprite(v.Texture.EMPTY),
            this.cellSprite.anchor.set(.5),
            this.cellSprite.width = jt,
            this.cellSprite.height = jt,
            this.container.addChild(this.cellSprite),
            this.skinSprite = new v.Sprite(v.Texture.EMPTY),
            this.skinSprite.anchor.set(.5),
            this.skinSprite.width = jt,
            this.skinSprite.height = jt,
            this.container.addChild(this.skinSprite),
            this.massSprite = new v.Sprite(v.Texture.EMPTY),
            this.container.addChild(this.massSprite),
            e.name.length > 0 && (this.nameSprite = new v.Sprite(v.Texture.EMPTY),
            this.container.addChild(this.nameSprite)),
            this.needsPixiUpdate = !1),
            e.cacheUpdate || l)
                if (this.nameSprite && (this.nameSprite.texture = e.getNameCache(e.cacheUpdate).texture,
                this.nameSprite.texture.update()),
                e.spiked == 1)
                    me.aCustomSpike ? this.cellSprite.texture = me.aCustomSpike : this.cellSprite.texture = se,
                    this.cellSprite.tint = 16777215;
                else if (e.spiked == 2)
                    me.aCustomMother ? this.cellSprite.texture = me.aCustomMother : this.cellSprite.texture = re,
                    this.cellSprite.tint = 16777215;
                else {
                    this.cellSprite.texture = xt;
                    var n = e.cellColor;
                    e.isServerBot && u.cDarkerBots && (n = Wa(n, .4)),
                    this.cellSprite.tint = n
                }
            if (this.skinSprite.visible = oe.levelSkins >= t && e.spiked == 0,
            this.skinSprite.visible) {
                var a = e.getSkin();
                a != null ? a.isGif ? this.skinSprite.texture = a.getTexture() : a !== this.skinSprite.texture && (this.skinSprite.texture = a) : this.skinSprite.visible = !1
            }
            var s = 4 / this.size
              , c = Math.max(s, .16) * 4
              , d = i.scale >= s * 4 || u.cDisableAutoNameHiding;
            if (this.nameSprite && (this.nameSprite.visible = oe.levelNames >= t && d,
            this.nameSprite.visible && (this.nameSprite.scale.set(c),
            this.nameSprite.x = -(this.nameSprite.width / 2),
            e.lowerName ? this.nameSprite.y = ei - this.nameSprite.height / 2 : this.nameSprite.y = -(this.nameSprite.height / 2),
            e.effect == 1 && Gn[0] != null))) {
                !this.nameEffectSprite && (this.nameEffectSprite = new v.Sprite(v.Texture.EMPTY),
                this.nameSprite.addChild(this.nameEffectSprite));
                var r = Gn[0].getTexture();
                this.nameEffectSprite.scale.set(this.nameSprite.texture.width / r.width, this.nameSprite.texture.height / r.height),
                this.nameEffectSprite.texture = r
            }
            if (u.cShowMass && (t <= oe.levelMass || i.serverData.autosplits) && (d || t === it.SELF)) {
                var o = this.getSizeCache();
                this.massSprite.texture = o,
                this.massSprite.scale.set(c),
                this.massSprite.x = -(this.massSprite.width / 2),
                this.nameSprite != null && this.nameSprite.visible ? this.massSprite.y = this.nameSprite.y + this.nameSprite.height : this.massSprite.y = -(this.massSprite.height / 2),
                this.massSprite.visible = !0
            } else
                this.massSprite.visible = !1;
            (e.flags & 4) == 4 ? !this.debuffSprite && (this.debuffSprite = new v.Sprite(Ma),
            this.debuffSprite.anchor.set(.5),
            this.debuffSprite.width = Wt,
            this.debuffSprite.height = Wt,
            this.container.addChild(this.debuffSprite)) : this.debuffSprite && (this.debuffSprite.parent.removeChild(this.debuffSprite),
            this.debuffSprite.destroy(),
            this.debuffSprite = null),
            (e.flags & 1) == 1 ? !this.shieldSprite && (this.shieldSprite = new v.Sprite(Pa),
            this.shieldSprite.anchor.set(.5),
            this.shieldSprite.width = Wt,
            this.shieldSprite.height = Wt,
            this.container.addChild(this.shieldSprite)) : this.shieldSprite && (this.shieldSprite.parent.removeChild(this.shieldSprite),
            this.shieldSprite.destroy(),
            this.shieldSprite = null),
            this.container.scale.set(this.size / Et),
            this.container.position.set(this.x, this.y);
            break;
        case 3:
            this.needsPixiUpdate && (this.sprite.anchor.set(.5),
            this.sprite.width = 128,
            this.sprite.height = 128,
            me.aCustomSpike ? this.sprite.texture = me.aCustomSpike : this.sprite.texture = se,
            this.needsPixiUpdate = !1),
            this.sprite.scale.set(this.size / 256),
            this.sprite.position.set(this.x, this.y);
            break;
        case 4:
            this.needsPixiUpdate && (me.aCustomMother ? this.sprite.texture = me.aCustomMother : this.sprite.texture = re,
            F.enabled && F.motherCustomEnabled && !u.cDisableEventSkins && !me.aCustomMother ? F.motherCustom(this) : this.setDefaultSpriteAnchor(),
            this.needsPixiUpdate = !1),
            !me.aCustomMother && F.enabled && (this.size >= 100 && !u.cDisableEventSkins ? this.sprite.texture = Ue : this.sprite.texture = re),
            this.sprite.scale.set(this.size / 256),
            this.sprite.position.set(this.x, this.y);
            break;
        case 5:
            this.needsPixiUpdate && (this.sprite.texture = mt[this.buff].texture,
            this.sprite.width = this.size * 2,
            this.sprite.height = this.size * 2,
            this.needsPixiUpdate = !1),
            this.sprite.position.set(this.x, this.y);
            break
        }
    }
    ,
    ge.prototype.setDefaultSpriteAnchor = function() {
        this.sprite.anchor.set(.5),
        this.sprite.width = 128,
        this.sprite.height = 128
    }
    ,
    ge.prototype.onCreate = function(e) {
        if (this.type == 2) {
            if (this.container)
                return;
            this.container = new v.Container,
            this.container.parentCell = this,
            this.needsPixiUpdate = !0,
            B.addChild(this.container)
        } else {
            if (this.sprite)
                return;
            (this.type === 1 || this.type === 6) && typeof Kt < "u" ? this.sprite = Kt.acquire(this.type) : this.sprite = new v.Sprite(v.Texture.EMPTY),
            this.sprite.parentCell = this,
            this.sprite.anchor.set(.5),
            this.needsPixiUpdate = !0,
            this.type === 6 ? be.addChild(this.sprite) : B.addChild(this.sprite)
        }
        this.type == 6 ? (e.foodObjects[this.id] = this,
        e._foodVersionCounter = (e._foodVersionCounter || 0) + 1) : (e.bucket[this.id] = this,
        e._bucketVersionCounter = (e._bucketVersionCounter || 0) + 1),
        this.playerId == e.playerId && (e.myCells[this.id] = this,
        e._myCellVersionCounter = (e._myCellVersionCounter || 0) + 1,
        typeof e.myCellCount == "number" && e.myCellCount++,
        e._forceNextRender = !0)
    }
    ,
    ge.prototype.onDelete = function() {
        if (this.type === 1 || this.type === 6) {
            if (this.container) {
                this.container.parent && this.container.parent.removeChild(this.container),
                this.container.parentCell = null;
                try {
                    this.container.destroy({
                        children: !0
                    })
                } catch {}
                this.container = null
            }
            if (this.sprite) {
                if (typeof Kt < "u")
                    Kt.release(this.type, this.sprite);
                else {
                    this.sprite.parent && this.sprite.parent.removeChild(this.sprite),
                    this.sprite.parentCell = null;
                    try {
                        this.sprite.destroy({
                            children: !0
                        })
                    } catch {}
                }
                this.sprite = null
            }
            if (this.cache) {
                try {
                    this.cache.destroy()
                } catch {}
                this.cache = null
            }
            typeof lt < "u" && lt.release(this)
        } else
            this.container ? (this.container.parent.removeChild(this.container),
            this.container.parentCell = null,
            this.container.destroy({
                children: !0
            }),
            this.container = null) : this.sprite && (this.sprite.parent.removeChild(this.sprite),
            this.sprite.parentCell = null,
            this.sprite.destroy({
                children: !0
            }),
            this.sprite = null),
            this.cache && (this.cache.destroy(),
            this.cache = null);
        typeof i < "u" && (this.type == 6 ? i._foodVersionCounter = (i._foodVersionCounter || 0) + 1 : i._bucketVersionCounter = (i._bucketVersionCounter || 0) + 1,
        this.playerId == (i && i.playerId) && (i._myCellVersionCounter = (i._myCellVersionCounter || 0) + 1))
    }
    ;
    function hi() {
        this.bucket = {},
        this.defaultData,
        this.updatedPlayers = [],
        this.init = function() {
            this.defaultData = new da(0),
            this.defaultData.name = "",
            this.defaultData.cellColor = 11184810
        }
        ,
        this.add = function(e) {
            this.bucket[e.id] = e
        }
        ,
        this.remove = function(e) {
            var t = this.bucket[e];
            t && (t.onDelete(),
            delete this.bucket[e])
        }
        ,
        this.clear = function() {
            for (var e in this.bucket)
                this.remove(e)
        }
        ,
        this.getPlayer = function(e) {
            return this.bucket[e]
        }
        ,
        this.getPlayerById = function(e) {
            var t = this.bucket[e];
            return t ?? this.defaultData
        }
        ,
        this.updatePlayer = function(e) {
            e.cacheUpdate = !0,
            this.updatedPlayers.push(e)
        }
        ,
        this.handleUpdatedPlayers = function() {
            for (var e = this.updatedPlayers, t = 0; t < e.length; t++)
                e[t].cacheUpdate = !1;
            e.length = 0
        }
        ,
        this.init()
    }
    function da(e) {
        this.id = e,
        this.name,
        this.skin,
        this.skinCache,
        this.cellColor,
        this.nameColor = "#fff",
        this.flags = 0,
        this.effect = 0,
        this.nameFont = 0,
        this.lowerName = !1,
        this.isServerBot = !1,
        this.nameCache = null,
        this.cacheUpdate = !1,
        this.spiked = 0,
        this.setFlags = function(t) {
            this.flags = t,
            (this.flags & 8) == 8 ? this.spiked = 1 : (this.flags & 16) == 16 ? this.spiked = 2 : this.spiked = 0
        }
        ,
        this.parseEffect = function(t) {
            t >= 64 ? (t -= 64,
            this.lowerName = !0) : this.lowerName = !1,
            this.effect = t
        }
        ,
        this.getNameCache = function(t) {
            if (t || this.nameCache == null) {
                var n = Qi(this.nameFont), a, s;
                n == Xa ? (a = "bold",
                s = oe.textOutlineSize) : (a = "normal",
                s = 9),
                this.nameCache ? (this.nameCache.text = this.name,
                this.nameCache.style.fontFamily = n.font,
                this.nameCache.style.stroke = n.outlineColor,
                this.nameCache.style.fontWeight = a,
                this.nameCache.style.fontSize = n.size,
                this.nameCache.style.fill = this.nameColor,
                this.nameCache.updateText()) : this.nameCache = new v.Text(this.name,{
                    fontFamily: n.font,
                    fontWeight: a,
                    fontSize: n.size,
                    fill: this.nameColor,
                    stroke: n.outlineColor,
                    strokeThickness: s
                }),
                this.nameCache.width
            }
            return this.nameCache
        }
        ,
        this.setSkin = function(t) {
            t.length == 0 ? (this.skin = null,
            this.skinCache = null) : t !== this.skin && (this.skin = t,
            this.skinCache = null)
        }
        ,
        this.getSkin = function() {
            if (this.skinCache != null)
                return this.skinCache;
            if (this.skin != null)
                if (S[this.skin]) {
                    if (S[this.skin] == vt.LOADED)
                        return this.skinCache = ae[this.skin],
                        this.skinCache;
                    S[this.skin] == vt.ERROR && (this.skin = null)
                } else if (S[this.skin] = vt.LOADING,
                this.skin.endsWith(".gif")) {
                    var t = this.skin
                      , n = this;
                    gifFrames({
                        url: t,
                        frames: "all",
                        cumulative: !1,
                        outputType: "canvas"
                    }).then(function(s) {
                        var c = new Da;
                        c.loadFromFrameData(s),
                        S[t] = vt.LOADED,
                        ae[t] = c
                    }).catch(function(s) {
                        n.skin = null
                    })
                } else {
                    var a = new Image;
                    a.crossOrigin = "";
                    var t = this.skin;
                    a.addEventListener("load", function() {
                        var c = document.createElement("canvas");
                        c.width = 512,
                        c.height = 512;
                        var d = c.getContext("2d");
                        d.beginPath(),
                        d.arc(256, 256, 256, 0, In, !1),
                        d.closePath(),
                        d.clip(),
                        d.drawImage(a, 0, 0, 512, 512);
                        var r = v.Texture.from(c);
                        S[t] = vt.LOADED,
                        ae[t] = r
                    }),
                    a.addEventListener("error", function() {
                        S[t] = vt.ERROR
                    }),
                    a.src = t
                }
            return null
        }
        ,
        this.onDelete = function() {
            this.nameCache && this.nameCache.destroy()
        }
    }
    function ie() {}
    ie.prototype.connectionStart = function() {
        var e = "Gota Web " + version
          , t = new ArrayBuffer(1 + e.length + 1 + 1)
          , n = new DataView(t);
        return n.setUint8(0, 255),
        n.setUint8(1, 6),
        ut(2, n, e),
        t
    }
    ,
    ie.prototype.setName = function(e) {
        var t = new ArrayBuffer(2 + (e.length + 1) * 2)
          , n = new DataView(t);
        return n.setUint8(0, 0),
        Pt(1, n, e),
        u.cSilentLogin && n.setUint8(2 + e.length * 2 + 1, 1),
        t
    }
    ,
    ie.prototype.sendKey = function(e) {
        var t = new ArrayBuffer(1)
          , n = new DataView(t);
        return n.setUint8(0, e),
        t
    }
    ,
    ie.prototype.sendMouse = function(e, t) {
        var n = new ArrayBuffer(9)
          , a = new DataView(n);
        return a.setUint8(0, 16),
        a.setInt32(1, e, !0),
        a.setInt32(5, t, !0),
        n
    }
    ,
    ie.prototype.sendEjectMass = function(e) {
        var t = new ArrayBuffer(1)
          , n = new DataView(t);
        return n.setUint8(0, e ? 3 : 4),
        t
    }
    ,
    ie.prototype.sendPing = function() {
        var e = new ArrayBuffer(1)
          , t = new DataView(e);
        return t.setUint8(0, 71),
        j = Date.now(),
        e
    }
    ,
    ie.prototype.sendSpectate = function(e) {
        var t = new ArrayBuffer(3)
          , n = new DataView(t);
        return n.setUint8(0, 1),
        e && n.setUint16(1, e, !0),
        t
    }
    ,
    ie.prototype.sendChat = function(e, t) {
        var n = new ArrayBuffer(2 + (e.length + 1) * 2)
          , a = new DataView(n);
        return a.setUint8(0, 72),
        a.setUint8(1, t),
        Pt(2, a, e),
        n
    }
    ,
    ie.prototype.sendInviteResponse = function(e) {
        var t = new ArrayBuffer(2)
          , n = new DataView(t);
        return n.setUint8(0, 41),
        n.setUint8(1, e ? 1 : 0),
        t
    }
    ,
    ie.prototype.sendPartyAction = function(e, t) {
        var n = new ArrayBuffer(6)
          , a = new DataView(n);
        return a.setUint8(0, 40),
        a.setUint8(1, e),
        a.setUint32(2, t, !0),
        n
    }
    ,
    ie.prototype.sendPartyJoin = function(e) {
        var t = new ArrayBuffer(1 + e.length + 1)
          , n = new DataView(t);
        return n.setUint8(0, 42),
        ut(1, n, e),
        t
    }
    ,
    ie.prototype.sendShowProfile = function(e) {
        var t = new ArrayBuffer(3)
          , n = new DataView(t);
        return n.setUint8(0, 103),
        n.setUint16(1, e, !0),
        t
    }
    ,
    ie.prototype.sendWhisper = function(e, t) {
        var n = new ArrayBuffer(5 + (t.length + 1) * 2)
          , a = new DataView(n);
        return a.setUint8(0, 73),
        a.setUint32(1, e, !0),
        Pt(5, a, t),
        n
    }
    ,
    ie.prototype.sendSubPanel = function() {
        var e = new ArrayBuffer(8 + (J.skinName.length + 1))
          , t = new DataView(e);
        return t.setUint8(0, 10),
        t.setUint8(1, J.nameColor.r),
        t.setUint8(2, J.nameColor.g),
        t.setUint8(3, J.nameColor.b),
        t.setUint8(4, J.chatColor),
        t.setUint8(5, J.effect),
        t.setUint8(6, J.lowerName ? 1 : 0),
        ut(7, t, J.skinName),
        t.setUint8(8 + J.skinName.length, J.nameFont),
        e
    }
    ,
    ie.prototype.sendLockedNameChange = function(e) {
        var t = new ArrayBuffer(1 + (e.length + 1))
          , n = new DataView(t);
        return n.setUint8(0, 11),
        ut(1, n, e),
        t
    }
    ,
    ie.prototype.sendOptions = function() {
        var e = new ArrayBuffer(3)
          , t = new DataView(e);
        return t.setUint8(0, 104),
        t.setUint16(1, u.rViewDistance, !0),
        e
    }
    ,
    ie.prototype.sendQueue = function(e) {
        var t = new ArrayBuffer(5)
          , n = new DataView(t);
        return n.setUint8(0, 80),
        n.setUint8(1, e),
        n.setUint8(2, 0),
        n.setUint16(3, 0),
        t
    }
    ,
    ie.prototype.sendCustomGame = function(e) {
        var t = new ArrayBuffer(2)
          , n = new DataView(t);
        return n.setUint8(0, 90),
        n.setUint8(1, e),
        t
    }
    ,
    ie.prototype.sendLeaveMatch = function() {
        var e = new ArrayBuffer(1)
          , t = new DataView(e);
        return t.setUint8(0, 81),
        e
    }
    ,
    ie.prototype.sendShowLobbies = function() {
        var e = new ArrayBuffer(2)
          , t = new DataView(e);
        return t.setUint8(0, 93),
        e
    }
    ,
    ie.prototype.sendJoinLobby = function(e, t) {
        var n = new ArrayBuffer(5 + t.length * 2 + 2)
          , a = new DataView(n);
        return a.setUint8(0, 94),
        a.setUint32(1, e, !0),
        Pt(5, a, t),
        n
    }
    ,
    ie.prototype.sendCaptcha = function(e) {
        var t = new ArrayBuffer(1 + (e.length + 1))
          , n = new DataView(t);
        return n.setUint8(0, 100),
        ut(1, n, e),
        t
    }
    ,
    ie.prototype.sendAuthToken = function(e) {
        var t = new ArrayBuffer(1 + (e.length + 1))
          , n = new DataView(t);
        return n.setUint8(0, 101),
        ut(1, n, e),
        t
    }
    ,
    ie.prototype.sendCustomGameUpdate = function(e, t, n) {
        var a = new ArrayBuffer(4)
          , s = new DataView(a);
        return s.setUint8(0, 91),
        s.setUint8(1, e),
        e == ee.STARTMASS || e == ee.VIRUS_DENSITY ? s.setUint16(2, t, !1) : e == ee.RESPAWN_DELAY ? s.setInt16(2, t, !1) : (s.setUint8(2, t),
        s.setUint8(3, n)),
        a
    }
    ,
    ie.prototype.sendCustomGameUpdateString = function(e, t) {
        var n = new ArrayBuffer(4 + t.length * 2)
          , a = new DataView(n);
        return a.setUint8(0, 92),
        a.setUint8(1, e),
        Pt(2, a, t),
        n
    }
    ;
    function ut(e, t, n) {
        for (var a = 0; a < n.length; a++)
            t.setUint8(e, n.charCodeAt(a)),
            e++;
        t.setUint8(e, 0)
    }
    function us(e) {
        return e
    }
    function Pt(e, t, n) {
        for (var a = 0; a < n.length; a++)
            t.setUint16(e, n.charCodeAt(a), !0),
            e += 2;
        t.setUint16(e, 0, !0)
    }
    function xe(e) {
        for (var t = ""; ; ) {
            var n = e.getUint8(e.offset);
            if (e.offset++,
            n == 0)
                break;
            t += String.fromCharCode(n)
        }
        return t
    }
    function ve(e) {
        for (var t = ""; ; ) {
            var n = e.getUint16(e.offset, !0);
            if (e.offset += 2,
            n == 0)
                break;
            t += String.fromCharCode(n)
        }
        return t
    }
    function Ie(e, t) {
        if (t)
            switch (e.code) {
            case "auth/user-disabled":
                alert("This account has been permanently suspended by an administrator.");
                break;
            case "auth/popup-closed-by-user":
                break;
            default:
                alert(e.message + " (" + e.code + ")");
                break
            }
    }
    function pi(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function Un(e, t) {
        var n = ""
          , a = ""
          , s = "white";
        if (t.flags.STAFF)
            a = "Gota.io Staff",
            n = "build",
            s = "royalblue";
        else if (t.flags.VERIFIED)
            a = "Verified Player",
            n = "check_circle";
        else
            return;
        var c = document.createElement("i");
        c.className = "material-icons",
        c.id = "user-badge",
        c.innerText = n,
        c.style.color = s,
        $(c).attr("data-balloon", a),
        $(c).attr("data-balloon-pos", "right"),
        $(e).append(c)
    }
    function Ln(e, t) {
        var n = document.createElement("i");
        return n.className = "material-icons",
        n.innerText = e,
        n.setAttribute("data-balloon", t),
        n.setAttribute("data-balloon-pos", "up"),
        n
    }
    function Tt(e, t, n, a) {
        var s = document.createElement("li");
        s.className = "user-embed menu-sub-bg2",
        s.style.backgroundColor = f.uiMenuHeaderBackgroundColor;
        var c = document.createElement("img");
        c.src = e.avatar,
        c.alt = e.username,
        s.appendChild(c);
        var d = document.createElement("div");
        d.className = "info";
        var r = document.createElement("div");
        r.className = "username",
        r.innerText = e.username,
        d.appendChild(r),
        Un(r, e);
        var o = document.createElement("div")
          , l = !1
          , g = null;
        n ? (g = pi(e.presence.server),
        e.presence.timestamp + 1e3 * 60 < new Date().getTime() || e.presence.id === void 0 ? (o.className = "status offline",
        o.innerText = "Not playing on any server") : (l = !0,
        o.className = "status " + (e.presence.status === "ONLINE" ? "online" : "spectate"),
        o.innerText = (e.presence.status === "ONLINE" ? "Playing " : "Spectating ") + e.presence.gamemode + " on " + g + " (ID " + e.presence.id + ")")) : (o.className = "status pending",
        o.innerText = "Pending Friend Request"),
        d.appendChild(o);
        var h = document.createElement("div");
        if (h.className = "actions",
        r.addEventListener("click", function(_) {
            Dn(e, $("#main-social"))
        }),
        n && l) {
            var C = Ln("input", "Join Server");
            C.addEventListener("click", function(_) {
                tt(g),
                i.play(),
                i.selfMsg(e.username + "'s ID is " + e.presence.id),
                te($("#main-social"))
            }),
            h.appendChild(C)
        }
        if (!n) {
            var y = Ln("done", "Add as Friend");
            y.isHandlingRequest = !1,
            y.addEventListener("click", function(_) {
                y.isHandlingRequest || (y.isHandlingRequest = !0,
                firebase.auth().currentUser.getIdToken().then(b => {
                    fetch(Re + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: b,
                            target: e.uid,
                            action: 2
                        })
                    }).then(x => x.json()).then(x => {
                        x.code !== 200 && alert(x.message),
                        y.isHandlingRequest = !1
                    }
                    ).catch(x => {
                        alert(x),
                        y.isHandlingRequest = !1
                    }
                    )
                }
                ).catch(b => {
                    Ie(b, !0),
                    y.isHandlingRequest = !1
                }
                ))
            }),
            h.appendChild(y)
        }
        var k = Ln("block", "Remove Friend");
        return k.isHandlingRequest = !1,
        k.addEventListener("click", function(_) {
            k.isHandlingRequest || !confirm('Are you sure you want to remove "' + e.username + '" as your friend?') || (k.isHandlingRequest = !0,
            firebase.auth().currentUser.getIdToken().then(b => {
                fetch(Re + "/api/v1/social/friends", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: b,
                        target: e.uid,
                        action: 4
                    })
                }).then(x => x.json()).then(x => {
                    alert(x.message),
                    x.code === 200 && (firebase.database().ref(K.callbacks[e.uid]).off(),
                    K.elements[e.uid].remove(),
                    delete K.callbacks[e.uid],
                    delete K.elements[e.uid]),
                    k.isHandlingRequest = !1
                }
                ).catch(x => {
                    alert(x),
                    k.isHandlingRequest = !1
                }
                )
            }
            ).catch(b => {
                Ie(b, !0),
                k.isHandlingRequest = !1
            }
            ))
        }),
        h.appendChild(k),
        s.appendChild(d),
        s.appendChild(h),
        a ? t.appendChild(s) : s
    }
    function Dn(e, t, n) {
        t && te(t),
        $("#profile-username").text(e.username),
        $("#profile-avatar").attr("src", e.avatar),
        $("#profile-avatar").attr("alt", e.username),
        $("#profile-level").html("Level " + e.levelData.level + "&nbsp;&nbsp;&nbsp;[" + un(e.levelData.xp_current) + "/" + un(e.levelData.xp_needed) + "]"),
        e.title && e.title > 0 && yt[e.title] ? $("#profile-title").text(yt[e.title]) : $("#profile-title").text(""),
        $("#profile-name").off("click"),
        e.uid == le.uid ? ($("#profile-name").on("click", function() {
            $("#popup-profile").hide(),
            ft($("#popup-account-username"))
        }),
        $("#profile-name").css("cursor", "pointer")) : $("#profile-name").css("cursor", "default"),
        e.flags.STAFF ? $("#profile-avatar").addClass("spin") : $("#profile-avatar").removeClass("spin"),
        Un($("#profile-username"), e),
        $("#profile-close-btn").off("click"),
        $("#profile-close-btn").on("click", function() {
            t && Me(t),
            te($("#popup-profile"))
        }),
        Me($("#popup-profile"))
    }
    function ua(e) {
        if (!Sn) {
            var t = $("#social-friends .user-list")[0]
              , n = $("#social-friends .user-list")[1];
            $("#social-uid").text(e.uid),
            firebase.database().ref("/friendships/" + e.uid).on("value", function(a) {
                if (a.val() === null) {
                    var s = document.createElement("div")
                      , c = document.createElement("span");
                    s.className = "title-text center",
                    c.innerText = "You have no friends 😥",
                    s.appendChild(c),
                    t.appendChild(s);
                    return
                }
                var d = 0
                  , r = a.val()
                  , o = !1;
                Object.keys(r).map(l => {
                    var g = r[l];
                    if (!g && !o) {
                        o = !0,
                        firebase.auth().currentUser.getIdToken().then(C => {
                            fetch(Re + "/api/v1/social/friends/pending", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    token: C
                                })
                            }).then(y => y.json()).then(y => {
                                y.code === 200 && y.profiles.forEach(k => {
                                    if (!K.pendingFriends.includes(k) && K.pendingFriends.push(k.uid),
                                    K.elements[k.uid]) {
                                        var _ = Tt(k, K.elements[k.uid], !1, !1);
                                        n.replaceChild(_, K.elements[k.uid]),
                                        K.elements[l] = _;
                                        return
                                    }
                                    K.elements[k.uid] = Tt(k, n, !1, !0)
                                }
                                )
                            }
                            )
                        }
                        ).catch(C => Ie(C, !1));
                        return
                    }
                    if (!K.callbacks[l]) {
                        var h = "/users/" + l;
                        K.callbacks[l] = h,
                        firebase.database().ref(h).on("value", function(C) {
                            if (C.val() !== null) {
                                var y = C.val();
                                if (K.timestamps[y.uid] = y.presence.timestamp,
                                K.pendingFriends.includes(l)) {
                                    K.elements[l].remove();
                                    var k = Tt(y, K.elements[l], !0, !1);
                                    t.appendChild(k),
                                    K.elements[l] = k;
                                    return
                                }
                                if (K.elements[l]) {
                                    var k = Tt(y, K.elements[l], !0, !1);
                                    t.replaceChild(k, K.elements[l]),
                                    K.elements[l] = k;
                                    return
                                }
                                K.elements[l] = Tt(y, t, !0, !0),
                                p.friendOnlineCount.text(fi() + " online")
                            }
                        })
                    }
                    g && d++
                }
                ),
                $("#social-friends-count").text(d)
            }),
            Le.friendsStatus && clearInterval(Le.friendsStatus),
            Le.friendsStatus = setInterval(function() {
                if (!document.hidden)
                    for (var a in K.timestamps) {
                        if (!K.timestamps.hasOwnProperty(a))
                            return;
                        var s = K.timestamps[a];
                        if (s + 1e3 * 60 < new Date().getTime() || s === void 0) {
                            var c = K.elements[a].children[1].children[1];
                            c.innerText = "Not playing on any server",
                            c.className = "status offline";
                            var d = K.elements[a].children[2].children[0];
                            d.dataset.balloon === "Join Server" && d.remove()
                        }
                    }
            }, 1e3 * 60),
            Sn = !0
        }
    }
    function fi() {
        var e = 0
          , t = new Date().getTime();
        for (var n in K.timestamps) {
            var a = K.timestamps[n];
            a + 1e3 * 60 < t || a === void 0 || e++
        }
        return e
    }
    function mi() {
        F.enabled && !u.cDisableEventSkins && $("body").toggleClass("event-" + F.key),
        $(".server-tab").on("click", function() {
            var r = $(this).attr("region");
            Vn(r)
        });
        function e(r, o) {
            try {
                typeof window < "u" && typeof window.gtag == "function" && window.gtag("event", r, o || {})
            } catch {}
        }
        $("#btn-play").on("click", function() {
            if (!(P == null || Date.now() < Vt)) {
                if (Object.keys(i.myCells).length != 0 && this.currentServerName == P.name) {
                    te(q);
                    return
                }
                i.spectate = !1,
                qa.incrementPlay() && typeof adplayer < "u" ? (aiptag.cmd.player.push(function() {
                    adplayer.startPreRoll()
                }),
                te(q),
                zn(),
                Vt = Date.now() + 2e3) : (i.play(),
                e("play_click", {
                    server_name: P ? P.name : void 0,
                    region: P ? P.region : void 0,
                    mode: P ? P.gamemode : void 0
                }))
            }
        }),
        $("#btn-servers").on("click", function() {
            wt("main-servers"),
            e("menu_open", {
                menu: "servers"
            })
        }),
        $("#btn-options").on("click", function() {
            wt("main-options"),
            e("menu_open", {
                menu: "options"
            })
        }),
        $("#btn-hotkeys").on("click", function() {
            wt("main-hotkeys"),
            e("menu_open", {
                menu: "hotkeys"
            })
        }),
        $("#btn-themes").on("click", function() {
            wt("main-themes"),
            e("menu_open", {
                menu: "themes"
            })
        }),
        $("#btn-cellpanel").on("click", function() {
            firebase.auth().currentUser ? wt("main-subpanel") : window.open("https://store.gota.io/package/5108987", "_blank")
        }),
        $("#btn-reddit").on("click", function() {
            window.open("https://www.reddit.com/r/PlayGotaIO/", "_blank"),
            typeof window < "u" && typeof window.gtag == "function" && window.gtag("event", "social_click", {
                network: "reddit"
            })
        }),
        $("#btn-discord").on("click", function() {
            window.open("https://gota.io/discord", "_blank"),
            typeof window < "u" && typeof window.gtag == "function" && window.gtag("event", "social_click", {
                network: "discord"
            })
        }),
        $("#name-box").keypress(function(r) {
            r.keyCode == 13 && $(this).is(":focus") && (i.play(),
            e("play_click", {
                server_name: P ? P.name : void 0,
                region: P ? P.region : void 0,
                mode: P ? P.gamemode : void 0
            }))
        }),
        $("#btn-spec").on("click", function() {
            if (!(P == null || Date.now() < Vt)) {
                if (i.spectate && this.currentServerName == P.name) {
                    te(q);
                    return
                }
                i.spectate = !0,
                qa.incrementPlay() && typeof adplayer < "u" ? (aiptag.cmd.player.push(function() {
                    adplayer.startPreRoll()
                }),
                te(q),
                zn(),
                Vt = Date.now() + 2e3) : (i.spec(),
                e("spectate_click", {
                    server_name: P ? P.name : void 0,
                    region: P ? P.region : void 0,
                    mode: P ? P.gamemode : void 0
                }))
            }
        });
        var t = function(r) {
            var o = r.target.value
              , l = o.split(" ");
            if (r.keyCode == 38 && $(this).is(":focus")) {
                Ee == -1 ? Ee = Ge.length - 1 : Ee > 1 && Ee--,
                Ee <= 0 && (Ee = 0),
                Xe(Ge[Ee]);
                return
            } else if (r.keyCode == 40 && $(this).is(":focus")) {
                Ee == -1 ? Ee = 0 : Ee < Ge.length - 1 && Ee++,
                Ee >= Ge.length - 1 && (Ee = Ge.length - 1),
                Xe(Ge[Ee]);
                return
            }
            if (r.keyCode == 13 && $(this).is(":focus") && xi($(this).val()),
            o.length == 0 || o.endsWith(" ") || r.keyCode == 13)
                $("#autocomplete-panel").html(""),
                $("#autocomplete-panel").hide();
            else if (o.startsWith("/")) {
                if (l.length > 1)
                    return;
                $("#autocomplete-panel").html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                var g = -1;
                Object.values(on).map(y => {
                    (g = y.triggers.findIndex(k => k.toLowerCase().startsWith(l[0].substring(1).toLowerCase()))) > -1 && $("#autocomplete-panel tbody").append("<tr><td>" + y.triggers[g] + "</td><td>" + y.triggers + "</td><td>" + y.description + "</td></tr>")
                }
                ),
                $("#autocomplete-panel tbody").children().length == 0 ? $("#autocomplete-panel").hide() : $("#autocomplete-panel").show()
            } else if (l[l.length - 1].startsWith(":")) {
                $("#autocomplete-panel").html("");
                var h = Object.keys(Rt).filter(y => y.toLowerCase().includes(l[l.length - 1].substring(1).toLowerCase()))
                  , C = Object.keys(Ht).filter(y => y.toLowerCase().includes(l[l.length - 1].substring(1).toLowerCase()));
                if (h.length === 0 && C.length === 0) {
                    $("#autocomplete-panel").html(""),
                    $("#autocomplete-panel").hide();
                    return
                } else
                    $("#autocomplete-panel").show();
                h.length > 0 && ($("#autocomplete-panel").append("<h3>Emotes</h3>"),
                h.forEach(y => {
                    $("#autocomplete-panel").append("<img name='" + y + "' title='" + y + "' src='images/emotes/" + y + ".png' />")
                }
                )),
                C.length > 0 && ($("#autocomplete-panel").append("<h3>Gifs</h3>"),
                C.forEach(y => {
                    $("#autocomplete-panel").append("<img name='" + y + "' title='" + y + "' src='images/emotes/gifs/" + y + ".gif' />")
                }
                ))
            }
            Ee = -1
        };
        vn.addEventListener("keyup", t),
        de.chatElements.push({
            element: vn,
            event: "keyup",
            handler: t
        }),
        $("#autocomplete-panel").on("click", function(r) {
            var o = en().split(" ");
            r.target.nodeName === "TD" ? (Xe("/" + r.target.parentElement.children[0].innerHTML + " "),
            $("#autocomplete-panel").html(""),
            $("#autocomplete-panel").hide(),
            $("#chat-input").focus()) : r.target.nodeName === "IMG" && (Xe(en().substring(0, en().length - o[o.length - 1].length) + r.target.attributes.name.nodeValue + " "),
            $("#autocomplete-panel").html(""),
            $("#autocomplete-panel").hide(),
            $("#chat-input").focus())
        }),
        $("#animationDelay").on("change", function() {
            var r = parseInt($(this).val());
            isNaN(r) && (r = 90),
            u.rAnimationDelay = Math.min(Math.max(r, 1), 250),
            $("#animationDelay").val(u.rAnimationDelay),
            $("#rAnimationDelay").val(u.rAnimationDelay)
        }),
        $("#reconnectPeriod").on("change", function() {
            var r = parseInt($(this).val());
            isNaN(r) && (r = 5),
            u.rReconnectPeriod = Math.min(Math.max(r, 0), 10),
            $("#reconnectPeriod").val(u.rReconnectPeriod),
            $("#rReconnectPeriod").val(u.rReconnectPeriod)
        }),
        $("#viewDistance").on("change", function() {
            var r = parseInt($(this).val());
            isNaN(r) && (r = 100),
            u.rViewDistance = Math.min(Math.max(r, 50), 150),
            $("#viewDistance").val(u.rViewDistance),
            $("#rViewDistance").val(u.rViewDistance),
            i.sendOptions()
        }),
        $("#uiScale").on("change", function() {
            var r = parseInt($(this).val());
            isNaN(r) && (r = 100),
            r *= .01,
            u.rUiScale = Math.min(Math.max(r, .5), 1.25),
            $("#uiScale").val(Number.parseFloat(u.rUiScale * 100).toFixed(0)),
            $("#rUiScale").val(u.rUiScale),
            $(".ui-scale").css("transform", "scale(" + u.rUiScale + ")")
        });
        var n = $("#chat-emote-btn")
          , a = function() {
            var r = cn[Math.floor(Math.random() * cn.length)];
            n.css("background-image", "url(images/emotes/" + r + ".png)")
        };
        a(),
        Le.emoteButton && clearInterval(Le.emoteButton),
        Le.emoteButton = setInterval(function() {
            document.hidden || a()
        }, 3e4);
        var s = $("#emote-panel")
          , c = $("#chat-input");
        n.on("click", function() {
            s.toggle()
        }),
        $("#emote-panel ul li img").on("click", function(r) {
            $i(r.target.name + " "),
            c.focus()
        }),
        function() {
            var r = document.getElementById("chat-panel")
              , o = document.getElementById("chat-resize");
            o && (o.addEventListener("mousedown", y, !1),
            de.chatElements.push({
                element: o,
                event: "mousedown",
                handler: y
            }));
            var l, g, h, C;
            function y(N) {
                l = N.clientX,
                g = N.clientY,
                h = parseInt(document.defaultView.getComputedStyle(r).width, 10),
                C = parseInt(document.defaultView.getComputedStyle(r).height, 10),
                document.documentElement.addEventListener("mousemove", b, !1),
                document.documentElement.addEventListener("mouseup", x, !1),
                de.chatElements.push({
                    element: document.documentElement,
                    event: "mousemove",
                    handler: b
                }),
                de.chatElements.push({
                    element: document.documentElement,
                    event: "mouseup",
                    handler: x
                })
            }
            var k = !1
              , _ = null;
            function b(N) {
                _ = N,
                !k && (k = !0,
                requestAnimationFrame(function() {
                    var A = _;
                    r.style.width = h + A.clientX - l + "px",
                    r.style.height = C - (A.clientY - g) + "px",
                    k = !1
                }))
            }
            function x(N) {
                document.documentElement.removeEventListener("mousemove", b, !1),
                document.documentElement.removeEventListener("mouseup", x, !1);
                try {
                    var A = document.defaultView.getComputedStyle(r);
                    A && (u.iChatWidth = A.width,
                    u.iChatHeight = A.height),
                    typeof qe == "function" ? qe() : typeof ht == "function" && ht();
                    try {
                        var ce = window.localStorage.getItem("options")
                          , he = ce ? JSON.parse(ce) : {};
                        he.iChatWidth = u.iChatWidth,
                        he.iChatHeight = u.iChatHeight,
                        window.localStorage.setItem("options", JSON.stringify(he))
                    } catch {}
                } catch {}
            }
        }(),
        $(".checkbox-options").on("change", function(r) {
            xa($(this))
        }),
        $(".options-container select").on("change", function(r) {
            $a($(this))
        }),
        $(".options-container input[type=range]").on("change", function(r) {
            Dt($(this))
        }),
        $("#rLeaderboardOpacity, #rChatOpacity, #rMinimapOpacity, #rLeaderboardBlur, #rChatBlur, #rMinimapBlur").on("input", function() {
            Dt($(this))
        }),
        $("#btn-changelog").on("click", function() {
            te($("#popup-changelog")),
            Me(q),
            window.open(ti, "_blank"),
            e("changelog_open")
        }),
        $("#btn-close-changelog").on("click", function() {
            te($("#popup-changelog")),
            Me(q),
            e("changelog_close")
        }),
        $("#btn-accept").on("click", function() {
            i.sendPacket(new m.sendInviteResponse(!0)),
            te($("#popup-party"))
        }),
        $("#btn-decline").on("click", function() {
            i.sendPacket(new m.sendInviteResponse(!1)),
            te($("#popup-party"))
        }),
        $("#popup-party-code-content button").on("click", function() {
            $("#popup-party-code-content input").select(),
            document.execCommand("Copy"),
            $("#popup-party-code").hide()
        }),
        $("#menu-invite").on("click", function() {
            var r = we.data("selected");
            i.sendPacket(new m.sendPartyAction(0,r))
        }),
        $("#menu-whisper").on("click", function() {
            var r = we.data("selected")
              , o = $("#chat-input").val();
            $("#chat-input").val("/t " + r + " " + o)
        }),
        $("#menu-profile").on("click", function() {
            var r = we.data("selected");
            i.sendPacket(new m.sendShowProfile(r))
        }),
        $("#menu-pu_pr").on("click", function() {
            i.partyCode == null ? (i.sendPacket(new m.sendPartyAction(4,0)),
            $("#menu-pu_pr span").text("Private")) : (i.sendPacket(new m.sendPartyAction(4,1)),
            $("#menu-pu_pr span").text("Public"))
        }),
        $("#menu-promote").on("click", function() {
            var r = we.data("party") + 1;
            r >= 0 && i.sendPacket(new m.sendPartyAction(2,r))
        }),
        $("#menu-kick").on("click", function() {
            var r = we.data("party") + 1;
            r >= 0 && i.sendPacket(new m.sendPartyAction(1,r))
        }),
        $("#menu-spectate").on("click", function() {
            var r = we.data("selected");
            r >= 0 && i.sendPacket(new m.sendSpectate(r))
        }),
        $("#menu-block").on("click", function() {
            var r = parseInt(we.data("selected"))
              , o = Oa(r);
            i.selfMsg(o)
        }),
        $(document).on("click", function(r) {
            we.hide(),
            r.target.id !== "chat-emote-btn" && $("#emote-panel").hide(),
            $("#popup-party-code").css("display") !== "none" && r.target.id !== "popup-party-code" && $("#popup-party-code").hide()
        }),
        $("#aEditChatTabs").on("click", function(r) {
            Lt(),
            te(q),
            Me($("#popup-chat-tab-editor"))
        }),
        $("#cte-tab-selector").on("change", Mi),
        $("#btn-chat-tab-editor-add").on("click", Ti),
        $("#btn-chat-tab-editor-remove").on("click", Ui),
        $("#btn-chat-tab-editor-update").on("click", Pi),
        $(".custom-asset-skinner").on("click", function() {
            $("#popup-asset-skinner .title-text").text($(this).text()),
            $("#input-asset-skinner").attr("asset", $(this).attr("id")).val(""),
            te(q),
            Me($("#popup-asset-skinner"))
        }),
        $("#btn-custom-asset-set").on("click", function() {
            !u.cThemeEnabled && Bt();
            var r = $("#input-asset-skinner").val();
            if (r) {
                var o = $("#input-asset-skinner").attr("asset");
                o.charAt(0) == "a" && f[o] != null && At(o, r)
            }
            $("#popup-asset-skinner .back-button").trigger("click")
        }),
        $("#btn-custom-asset-clear").on("click", function() {
            !u.cThemeEnabled && Bt();
            var r = $("#input-asset-skinner").attr("asset");
            r.charAt(0) == "a" && f[r] != null && At(r, "")
        }),
        $("#popup-asset-skinner").on("dragover", !1).on("drop", function(r) {
            !u.cThemeEnabled && Bt();
            var o = $("#input-asset-skinner").attr("asset");
            if (o.charAt(0) == "a" && f[o] != null) {
                var l = za(r.originalEvent);
                if (/\.(jpe?g|png|gif)$/i.test(l.name)) {
                    var g = new FileReader;
                    g.addEventListener("load", function() {
                        At(o, this.result)
                    }, {
                        once: !0
                    }),
                    g.readAsDataURL(l)
                }
            }
            return !1
        }),
        $("#btn-food-colors").on("click", function() {
            An(),
            te(q),
            Me($("#popup-food-colors"))
        }),
        $("#btn-theme-export").on("click", function() {
            if (u.cThemeEnabled) {
                var r = "theme.json"
                  , o = JSON.stringify(f, null, 2);
                Xi(r, o, "text/plain")
            }
        }),
        $("#btn-theme-import").on("click", function() {
            $("#theme-import").trigger("click")
        }),
        $("#theme-import").on("change", function() {
            var r = $(this).prop("files");
            if (r.length > 0) {
                var o = r[0];
                _a(o)
            }
        }),
        $("#main-themes .options-container").on("dragover", !1).on("drop", function(r) {
            var o = za(r.originalEvent);
            return _a(o),
            !1
        }),
        $("#cGlobalLeaderboard").on("change", function() {
            !le || Se || (Se = !0,
            firebase.auth().currentUser.getIdToken().then(r => {
                fetch(Re + "/api/v1/options/setFlags", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: r
                    })
                }).then(o => o.json()).then(o => {
                    Se = !1,
                    $(this).prop("checked", o.message)
                }
                ).catch(o => {
                    Se = !1,
                    alert(o)
                }
                )
            }
            ).catch(r => {
                Ie(r, !0),
                Se = !1
            }
            ))
        }),
        firebase.auth().onAuthStateChanged(function(r) {
            if (r) {
                if (!Fe.consented || !zt) {
                    firebase.auth().signOut().then(function() {});
                    return
                }
                !na && setTimeout(function() {
                    na = !0
                }, 100),
                Yn(),
                i.isConnected() && firebase.auth().currentUser !== null && firebase.auth().currentUser.getIdToken(!0).then(g => {
                    i.sendPacket(new m.sendAuthToken(g))
                }
                ).catch(g => Ie(g, !0));
                var o = firebase.database().ref("users/" + r.uid)
                  , l = !1;
                o.on("value", function(g) {
                    var h = g.val();
                    if (h) {
                        if (!l && ($("#account-loader").hide(),
                        $("#authed").show(),
                        $("#authed").attr("style", "display: flex;"),
                        $("#cGlobalLeaderboard").removeAttr("disabled"),
                        $("#cGlobalLeaderboard").prop("checked", h.flags.PUBLIC),
                        l = !0),
                        le = h,
                        $("#account-avatar").attr("src", h.avatar),
                        $("#account-username").text(h.username),
                        h.flags.STAFF && (kt.style.userSelect = "text"),
                        Un($("#account-username"), h),
                        $("#account-level").html("Level " + h.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + un(h.levelData.xp_current) + "/" + un(h.levelData.xp_needed) + " XP"),
                        $(".xp-meter > span").each(function() {
                            var b = h.levelData.xp_current / h.levelData.xp_needed * 100;
                            $(this).animate({
                                width: b + "%"
                            }, 1200)
                        }),
                        !i.accountListeners.loadServers && (i.accountListeners.loadServers = firebase.database().ref("servers/account/" + le.uid).on("value", function(b) {
                            var x = b.val();
                            if (x) {
                                Qe = {};
                                for (var N in x) {
                                    var A = x[N];
                                    A.up && (Qe[A.name] = new ba(A.name,A.ip + ":" + A.port,0,0,"?",A.gamemode,A.region,A.ssl,0))
                                }
                                Hn(),
                                P != null && tt(P.name)
                            }
                        })),
                        h.flags.DISCORD_LINKED && !i.accountListeners.loadDiscord && (i.accountListeners.loadDiscord = firebase.firestore().collection("discord").doc(le.uid).onSnapshot(b => {
                            b.exists ? ($("#discordLinkStatus").text("Your account is linked with " + b.data().username + "#" + b.data().discrim),
                            $("#discordLinkStatus").show(),
                            $("#discordLink").hide(),
                            $("#discordUnlink").show(),
                            $(".discord-login-container").css("padding", "15px")) : ($("#discordLinkStatus").hide(),
                            $("#discordUnlink").hide(),
                            $("#discordLink").show(),
                            $(".discord-login-container").css("padding", "30px"))
                        }
                        )),
                        h.tokens !== void 0) {
                            var C = new Date;
                            C.setMonth(C.getMonth() + h.tokens),
                            h.tokens == 0 ? ($("#redeem-tokens").hide(),
                            $("#token-amount").text("You have 0 tokens.")) : ($("#redeem-tokens").show(),
                            $("#token-amount").text("You have " + h.tokens + " tokens, maximum expiry date: " + C.toString()),
                            $("#redeem-spend").attr("max", h.tokens))
                        } else
                            $("#token-amount").text("You have 0 tokens.");
                        if (le.title && le.title > 0 && Ce && Ce.titles && Ce.titles.length > 0) {
                            for (var y = $("#account-titles"), k = 0, _ = 0; _ < Ce.titles.length; _++)
                                Ce.titles[_] == le.title && (k = _ + 1);
                            k > 0 && y.val(k)
                        }
                        !i.accountListeners.loadPrivateData && (i.accountListeners.loadPrivateData = firebase.database().ref("private/" + r.uid).on("value", function(b) {
                            var x = b.val();
                            if (x) {
                                if (Ce = x,
                                Ce.titles && Ce.titles.length > 0) {
                                    var N = $("#account-titles")
                                      , A = 0;
                                    N.empty(),
                                    N.append("<option value='0'>Default Title</option>");
                                    for (var ce = 0; ce < x.titles.length; ce++)
                                        N.append("<option value='" + (ce + 1) + "'>" + yt[Ce.titles[ce]] + "</option>"),
                                        Ce.titles[ce] == le.title && (A = ce + 1);
                                    A > 0 && N.val(A),
                                    N.css("display", "inline-block")
                                } else
                                    $("#account-titles").css("display", "none");
                                Ce.message && Ce.message.title && Ce.message.content && !Ce.message.read && ($("#popup-message-title").text(Ce.message.title),
                                $("#popup-message-content").html(Ce.message.content),
                                Me($("#popup-message")),
                                te(q))
                            }
                        })),
                        Sn && ua(le),
                        Rn(r.uid)
                    }
                })
            } else
                $("#cGlobalLeaderboard").attr("disabled"),
                Fe.consented ? ($("#authed").hide(),
                $("#account-loader").hide(),
                $("#no_cookie_consent").hide(),
                $("#guest").show()) : ($("#authed").hide(),
                $("#account-loader").hide(),
                $("#guest").hide(),
                $("#no_cookie_consent").show())
        }),
        $("#account-login").on("click", function() {
            Fe.consented && firebase.auth().signInWithPopup(ni).then(function(r) {}).catch(r => Ie(r, !0))
        }),
        $("#account-logout").on("click", function() {
            firebase.auth().signOut().then(function() {
                $("#authed").hide(500),
                $("#guest").show(),
                $("#discordLinkStatus").hide(),
                $(".discord-login-container").show()
            }).catch(r => Ie(r, !0))
        }),
        $("#account-shop").on("click", function() {
            window.open("https://store.gota.io/", "_blank")
        }),
        $("#account-social").on("click", function() {
            le && (ua(le),
            Me($("#main-social")),
            te($(q)))
        }),
        $("#social-back-button").on("click", function() {
            te($("#main-social")),
            Me($(q))
        }),
        $("#account-profile").on("click", function() {
            Dn(le, q)
        }),
        $("#food-colors-close-btn").on("click", function() {
            ft(q),
            te($("#popup-food-colors"))
        });
        function d(r, o) {
            if (r) {
                $(o).prop("disabled", !1),
                $(o).text("Set");
                return
            }
            $(o).prop("disabled", !0),
            $(o).text("...")
        }
        $("#account-titles").on("change", function() {
            if (!Se) {
                var r = parseInt($(this).val());
                Se = !0,
                firebase.auth().currentUser.getIdToken().then(o => {
                    fetch(Re + "/api/v1/options/setTitle", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: o,
                            title: r
                        })
                    }).then(l => l.json()).then(l => {
                        Se = !1
                    }
                    ).catch(l => {
                        Se = !1
                    }
                    )
                }
                ).catch(o => {
                    Ie(o, !0),
                    Se = !1
                }
                )
            }
        }),
        $("#popup-message-read-btn").on("click", function() {
            Se || (te($("#popup-message")),
            ft(q),
            Se = !0,
            firebase.auth().currentUser.getIdToken().then(r => {
                fetch(Re + "/api/v1/options/markAsRead", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: r
                    })
                }).then(o => o.json()).then(o => {
                    Se = !1
                }
                ).catch(o => {
                    Se = !1
                }
                )
            }
            ).catch(r => {
                Ie(r, !0),
                Se = !1
            }
            ))
        }),
        $("#account-set-username-btn").on("click", function() {
            if (le) {
                d(!1, this);
                var r = $("#account-username-input").val();
                if (!r || r == "" || r.trim() == "") {
                    alert("Please provide a username!"),
                    d(!0, this);
                    return
                }
                firebase.auth().currentUser.getIdToken().then(o => {
                    fetch(Re + "/api/v1/social/username", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: o,
                            username: r
                        })
                    }).then(l => l.json()).then(l => {
                        if (d(!0, this),
                        l.code == 200) {
                            ft(q),
                            $("#popup-account-username").hide();
                            return
                        }
                        alert(l.message)
                    }
                    ).catch(l => {
                        alert(l),
                        d(!0, this)
                    }
                    )
                }
                ).catch(o => {
                    d(!0, this),
                    Ie(o, !0)
                }
                )
            }
        }),
        $(".popup-panel .back-button").on("click", function() {
            Ai(),
            ft(q)
        }),
        $("#discordLink").on("click", function() {
            le && firebase.auth().currentUser.getIdToken().then(r => {
                window.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + r, "popup", "width=600,height=700")
            }
            )
        }),
        $("#discordUnlink").on("click", function() {
            le && firebase.auth().currentUser.getIdToken().then(r => {
                fetch(Re + "/api/v1/options/discord/unlink", {
                    method: "POST",
                    body: JSON.stringify({
                        token: r
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(o => o.json()).then(o => {
                    alert(o.message)
                }
                )
            }
            ).catch(r => Ie(r))
        }),
        $("#redeem-tokens").submit(function(r) {
            if (r.preventDefault(),
            !!le && confirm(`By redeeming, you are agreeing the locked name rules linked below the form.

ABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.

Press OK to redeem.`)) {
                var o = $("#redeem-name").val()
                  , l = $("#redeem-spend").val();
                firebase.auth().currentUser.getIdToken().then(g => {
                    fetch(Re + "/api/v1/options/redeem", {
                        method: "POST",
                        body: JSON.stringify({
                            token: g,
                            name: o,
                            spend: parseInt(l)
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(h => h.json()).then(h => {
                        alert(h.message),
                        h.code === 200 && Rn(le.uid)
                    }
                    )
                }
                ).catch(g => Ie(g))
            }
        }),
        $(".error-banner").on("click", function() {
            $(this).hide()
        }),
        $("#btn-add-friend").on("click", function(r) {
            if (r.preventDefault(),
            !!le) {
                var o = prompt("Enter friend's UID (found above add friend button)");
                if (o) {
                    var l = o.replace(/\s/g, "");
                    if (typeof o != "string" || l.length === 0)
                        return alert("Please enter a valid UID");
                    firebase.auth().currentUser.getIdToken().then(g => {
                        fetch(Re + "/api/v1/social/friends", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                token: g,
                                target: l,
                                action: 1
                            })
                        }).then(h => h.json()).then(h => {
                            alert(h.message)
                        }
                        )
                    }
                    ).catch(g => Ie(g, !0))
                }
            }
        }),
        p.partyCanvas && (p.partyCanvas.oncontextmenu = Li),
        $(document).keyup(function(r) {
            if (r.keyCode == 13) {
                var o = $("#chat-input");
                if (document.activeElement.tagName != "INPUT") {
                    var l = o[0];
                    l && l.setSelectionRange(l.value.length, l.value.length),
                    o.focus()
                } else
                    o.is(":focus") && o.blur()
            }
        }),
        $(window).bind("beforeunload", function() {
            return "Are you sure you want to leave Gota.io?"
        }),
        ga(),
        $(".keybinds-btn").on("click", function() {
            $(".keybinds-btn").removeClass("keybinds-btn-selected"),
            $(this).addClass("keybinds-btn-selected"),
            Gt = !0
        }),
        $("#btn-reset-keybinds").on("click", function() {
            $(".keybinds-btn").each(function() {
                var r = $(this)
                  , o = r.attr("id");
                ia[o] != null && (Q[o] = ia[o],
                Nn(r))
            }),
            ht()
        }),
        $("#scrimmage-mode-select").on("change", function() {
            $("#scrimmage-mode-info").children().css("display", "none"),
            $("#scrimmage-info-" + $(this).val()).css("display", "block")
        }),
        $("#btn-queue").on("click", function() {
            var r = parseInt($("#scrimmage-mode-select").val())
              , o = isNaN(r) ? 0 : Math.min(Math.max(r, 0), 100);
            i.sendPacket(new m.sendQueue(o)),
            $(this).blur()
        }),
        $("#btn-leave-match").on("click", function() {
            i.sendPacket(new m.sendLeaveMatch),
            typeof window < "u" && typeof window.gtag == "function" && window.gtag("event", "leave_match", {
                server_name: i.currentServerName || (P ? P.name : void 0)
            })
        }),
        $("#btn-custom-create").on("click", function() {
            i.sendPacket(new m.sendCustomGame(0)),
            $(this).blur()
        }),
        $("#btn-custom-return").on("click", function() {
            i.sendPacket(new m.sendCustomGame(1))
        }),
        $("#btn-custom-start").on("click", function() {
            i.sendPacket(new m.sendCustomGame(2))
        }),
        $("#btn-custom-lobbies").on("click", function() {
            i.sendPacket(new m.sendShowLobbies)
        }),
        $("#btn-lobbies-refresh").on("click", function() {
            i.sendPacket(new m.sendShowLobbies)
        }),
        $("#btn-lobbies-join").on("click", function() {
            if (yn !== 0) {
                var r = yn
                  , o = ""
                  , l = bn[r];
                l != null && (l.hasPasscode && (o = prompt("Enter the password to join this game", "")),
                o == null && (o = ""),
                i.sendPacket(new m.sendJoinLobby(r,o)))
            }
        }),
        $("#btn-lobbies-return").on("click", function() {
            $(".scrimmage-full").css("display", "none"),
            $("#scrimmage-menu").css("display", "block")
        }),
        $("#scrimmage-map").on("change", function(r) {
            var o = $(this).find("option:selected").val()
              , l = $(this).attr("data");
            o != l && ($("#scrimmage-map option[value='" + l + "']").prop("selected", !0),
            i.sendPacket(new m.sendCustomGameUpdate(ee.MAP,o)))
        }),
        $("#scrimmage-mapmode").on("change", function(r) {
            var o = $(this).find("option:selected").val()
              , l = $(this).attr("data");
            o != l && ($("#scrimmage-mapmode option[value='" + l + "']").prop("selected", !0),
            i.sendPacket(new m.sendCustomGameUpdate(ee.MODE,o)))
        }),
        $("#scrimmage-mapsize").on("change", function(r) {
            var o = $(this).find("option:selected").val()
              , l = $(this).attr("data");
            o != l && ($("#scrimmage-mapsize option[value='" + l + "']").prop("selected", !0),
            i.sendPacket(new m.sendCustomGameUpdate(ee.SIZE,o)))
        }),
        $("#scrimmage-startmass").on("change", function(r) {
            var o = $(this).val()
              , l = $(this).attr("data");
            if (isNaN(o)) {
                $(this).val(l);
                return
            }
            o = Math.max(1, Math.min(parseInt(o), 32e3)),
            o != l && ($(this).val(l),
            i.sendPacket(new m.sendCustomGameUpdate(ee.STARTMASS,o)))
        }),
        $("#scrimmage-virusDensity").on("change", function(r) {
            var o = $(this).val()
              , l = $(this).attr("data");
            if (isNaN(o)) {
                $(this).val(l);
                return
            }
            o = Math.max(0, Math.min(parseInt(o), 1e3)),
            o != l && ($(this).val(l),
            i.sendPacket(new m.sendCustomGameUpdate(ee.VIRUS_DENSITY,o)))
        }),
        $("#scrimmage-respawnDelay").on("change", function(r) {
            var o = $(this).val()
              , l = $(this).attr("data");
            if (isNaN(o)) {
                $(this).val(l);
                return
            }
            o = Math.max(-1, Math.min(parseInt(o), 600)),
            o != l && ($(this).val(l),
            i.sendPacket(new m.sendCustomGameUpdate(ee.RESPAWN_DELAY,o)))
        }),
        $("#scrimmage-lockteams").on("change", function(r) {
            var o = $(this).prop("checked");
            $(this).prop("checked", !o),
            i.sendPacket(new m.sendCustomGameUpdate(ee.LOCK,o == !0 ? 1 : 0))
        }),
        $("#scrimmage-autoSplit").on("change", function(r) {
            var o = $(this).prop("checked");
            $(this).prop("checked", !o),
            i.sendPacket(new m.sendCustomGameUpdate(ee.AUTOSPLIT,o == !0 ? 1 : 0))
        }),
        $("#scrimmage-public").on("change", function(r) {
            var o = $(this).prop("checked");
            $(this).prop("checked", !o),
            i.sendPacket(new m.sendCustomGameUpdate(ee.PUBLIC,o == !0 ? 1 : 0))
        }),
        $("#scrimmage-password").on("change", function(r) {
            var o = $(this).prop("checked");
            $(this).prop("checked", !o);
            var l = "";
            o && (l = prompt("Enter a password to join your game (32 max characters)", "")),
            l == null && (l = ""),
            i.sendPacket(new m.sendCustomGameUpdateString(ee.PASSWORD,l))
        }),
        $("#scrimmage-name").on("click", function(r) {
            if (i.isPartyLeader()) {
                var o = prompt("Enter a new name for your game (32 max characters)", $(this).text());
                o != null && i.sendPacket(new m.sendCustomGameUpdateString(ee.NAME,o))
            }
        })
    }
    function ha() {
        window.grecaptcha !== void 0 && (En = window.grecaptcha,
        window.grecaptcha = void 0,
        En.ready(function() {}))
    }
    function gi() {
        En.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
            action: "login"
        }).then(function(e) {
            i.sendPacket(new m.sendCaptcha(e)),
            document.body.classList.add("hide-captcha-badge"),
            i.spectate ? i.spec() : i.play()
        })
    }
    function yi() {
        if (Coloris({
            theme: "pill",
            themeMode: "dark",
            el: "[data-coloris]"
        }),
        window.Coloris && typeof Coloris.setInstance == "function") {
            Coloris.setInstance("#spChatColor", {
                swatches: at,
                swatchesOnly: !0,
                theme: "pill",
                themeMode: "dark",
                alpha: !1
            }),
            Coloris.setInstance("#spNameColor", {
                swatches: [],
                swatchesOnly: !1,
                theme: "pill",
                themeMode: "dark",
                alpha: !1
            });
            const a = document.getElementById("spNameColor")
              , s = document.getElementById("spChatColor");
            a && a.addEventListener("focus", function() {
                Coloris.setInstance("#spNameColor", {
                    swatches: [],
                    swatchesOnly: !1,
                    theme: "pill",
                    themeMode: "dark",
                    alpha: !1
                })
            }),
            s && s.addEventListener("focus", function() {
                Coloris.setInstance("#spChatColor", {
                    swatches: at,
                    swatchesOnly: !0,
                    theme: "pill",
                    themeMode: "dark",
                    alpha: !1
                })
            }),
            document.querySelectorAll("[data-coloris]").forEach(function(r) {
                r.id && r.id !== "spChatColor" && r.id !== "spNameColor" && r.addEventListener("focus", function() {
                    Coloris.setInstance("#" + r.id, {
                        swatches: [],
                        swatchesOnly: !1,
                        theme: "pill",
                        themeMode: "dark",
                        alpha: !1
                    })
                })
            });
            const d = document.getElementById("spCellColor");
            if (d) {
                Coloris.setInstance("#spCellColor", {
                    swatches: [],
                    swatchesOnly: !1,
                    theme: "pill",
                    themeMode: "dark",
                    alpha: !1
                });
                const r = localStorage.getItem("gota.spCellColor");
                r ? d.value = r : d.value = "#ffffff",
                d.style.backgroundColor = d.value;
                let o;
                d.addEventListener("input", function(l) {
                    const g = l.target
                      , h = (g.value || "").trim();
                    h && (clearTimeout(o),
                    o = setTimeout(function() {
                        try {
                            const C = Fn(h);
                            localStorage.setItem("gota.spCellColor", "#" + h.replace("#", "")),
                            g.style.backgroundColor = "#" + h.replace("#", "");
                            const y = "!color " + C.r + " " + C.g + " " + C.b;
                            i.sendPacket(new m.sendChat(y,0))
                        } catch {}
                    }, 300))
                })
            }
        }
        Tn(function(a) {
            const s = document.getElementById(a);
            s && (s.value = f[a],
            s.addEventListener("input", function(c) {
                f[a] = c.target.value,
                He(a, f[a])
            }))
        });
        const e = document.getElementById("pFoodColors");
        let t = document.getElementById("btnAddFoodColor");
        e && !t && (t = document.createElement("button"),
        t.id = "btnAddFoodColor",
        t.textContent = "Add",
        t.type = "button",
        e.insertAdjacentElement("afterend", t)),
        e && t && t.addEventListener("click", function() {
            !u.cThemeEnabled && Bt();
            var a = e.value;
            a && !f._FoodColors.includes(a) && (f._FoodColors.push(a),
            An())
        });
        const n = p.tracerColorInput || document.getElementById("rTracerColor");
        n && (n.value = u.rTracerColor || "#ffffff",
        !n._listenersAdded && (n.addEventListener("input", function(a) {
            u.rTracerColor = a.target.value,
            u._tracerColorCached = v.Color.shared.setValue(u.rTracerColor).toHex(),
            qe()
        }),
        n._listenersAdded = !0))
    }
    function An() {
        var e = $("#food-color-list");
        if (e.empty(),
        f._FoodColors.length == 0) {
            Bn();
            return
        }
        try {
            for (var t in f._FoodColors) {
                var n = f._FoodColors[t];
                e.append("<div c='" + n + "' style='background:" + n + ";color:" + Gi(n) + ";'><span>" + n + "</span><div><button class='btn-food-color'>X</button></div></div>")
            }
            $(".btn-food-color").on("click", function() {
                for (var a = $(this).parents().eq(1).attr("c"), s, c; (s = f._FoodColors.indexOf(a)) !== -1; )
                    f._FoodColors.splice(s, 1),
                    c = !0;
                c && An()
            })
        } catch {
            f._FoodColors = [],
            e.empty()
        }
        Bn()
    }
    function Bn() {
        _t = [];
        for (var e of f._FoodColors)
            _t.push(v.Color.shared.setValue(e).toHex());
        if (i && i.foodObjects)
            for (var t in i.foodObjects)
                i.foodObjects[t] && (i.foodObjects[t].needsPixiUpdate = !0)
    }
    function pa(e) {
        var t = $(".keybinds-btn-selected");
        if (Gt = !1,
        t.length != 0) {
            var n = t.first();
            t.removeClass("keybinds-btn-selected"),
            e != 27 ? Q[n.attr("id")] = e : Q[n.attr("id")] = -1,
            Nn(n),
            ht()
        }
    }
    function Nn(e) {
        var t = Q[e.attr("id")];
        e.html(vi(t))
    }
    function vi(e) {
        return e > 0 ? Wi[e].toUpperCase() : "&nbsp;"
    }
    var On = null;
    function ht() {
        typeof qe == "function" && (On && clearTimeout(On),
        On = setTimeout(function() {
            try {
                qe()
            } catch {}
        }, 150))
    }
    function Jt() {
        var e = document.getElementById("logo");
        u.cDisableEventSkins || !F.enabled ? e.style.backgroundImage = "url('./images/logo.png')" : F.enabled && (e.style.backgroundImage = "url('./images/events/" + F.key + "/logo.png')")
    }
    function bi() {
        Zt(),
        Rt = {},
        Ht = {};
        for (var e in cn) {
            var t = cn[e];
            $(".emote-list").append("<li><img name='" + t + "' title='" + t + "' src='images/emotes/" + t + ".png' /></li>"),
            Rt[t] = !0
        }
        for (var e in Fa) {
            var t = Fa[e];
            $(".gif-list").append("<li><img name='" + t + "' title='" + t + "' src='images/emotes/gifs/" + t + ".gif' /></li>"),
            Ht[t] = !0
        }
        for (var e = 0; e < Ha.length; e++) {
            var n = Ha[e];
            $("#spEffect").append('<option value="' + (e + 1) + '">' + Yi(n) + "</option>"),
            ln[e] = ct,
            function(d, r) {
                a(d, r).then(function(o) {
                    ln[d] = o
                }).catch(function(o) {})
            }(e, n)
        }
        function a(c, d) {
            return new Promise(function(r, o) {
                var l = new Image;
                l.onload = function() {
                    try {
                        var g = v.Texture.from(l);
                        r(g)
                    } catch (h) {
                        o(h)
                    }
                }
                ,
                l.onerror = function(g) {
                    o(g)
                }
                ,
                l.src = "images/ejected_mass_skins/" + d + ".png"
            }
            )
        }
        F.enabled && F.customEjectedMass && (Va = new Image,
        Va.src = "images/events/" + F.key + "/ejected_mass.png"),
        Ri();
        for (var e = 0; e < La.length; e++) {
            var s = e;
            gifFrames({
                url: "images/effects/" + La[s] + ".gif",
                frames: "all",
                cumulative: !1,
                outputType: "canvas"
            }).then(function(d) {
                var r = new Da;
                r.loadFromFrameData(d),
                Gn[s] = r
            })
        }
    }
    function Zt() {
        var e, t;
        !u.cDisableEventSkins && F.enabled ? (e = "images/events/" + F.key,
        t = "/spike_mother_happy.png") : (e = "images",
        t = "/spike_mother.png");
        var n = new Image;
        n.addEventListener("load", function() {
            if (se = v.Texture.from(n),
            i)
                for (var c in i.bucket) {
                    var d = i.bucket[c];
                    d.type == 3 && (d.needsPixiUpdate = !0)
                }
        }, {
            once: !0
        });
        var a = new Image;
        a.addEventListener("load", function() {
            if (re = v.Texture.from(a),
            i)
                for (var c in i.bucket) {
                    var d = i.bucket[c];
                    d.type == 4 && (d.needsPixiUpdate = !0)
                }
        }, {
            once: !0
        });
        var s = new Image;
        s.addEventListener("load", function() {
            if (Ue = v.Texture.from(s),
            i)
                for (var c in i.bucket) {
                    var d = i.bucket[c];
                    d.type == 4 && (d.needsPixiUpdate = !0)
                }
        }, {
            once: !0
        }),
        n.src = e + "/spike.png",
        a.src = e + "/spike_mother.png",
        s.src = e + t
    }
    var Qt = null;
    function fa() {
        Qt && clearTimeout(Qt),
        Qt = setTimeout(function() {
            Qt = null;
            var e = ma && ma();
            e ? $("#performance-refresh").hide() : $("#performance-refresh").css("display", "table-row")
        }, 200)
    }
    function ma() {
        try {
            if (!E)
                return !1;
            var e = M;
            if (!e)
                return !1;
            var t = !u.cDisableAA
              , n = u.sRenderType
              , a = E.renderer;
            if (!a)
                return !1;
            var s = !!(a.options && a.options.antialias === t);
            if (s)
                return !0;
            var c = e.width
              , d = e.height;
            try {
                a.destroy(!1)
            } catch {}
            var r = {
                view: e,
                width: c,
                height: d,
                antialias: t,
                backgroundAlpha: 0,
                resolution: oe.resolution || 1
            }
              , o = new v.Renderer(r);
            return E.renderer = o,
            o.resize(c, d),
            i && (i._forceNextRender = !0),
            !0
        } catch (l) {
            return console.warn("applyRendererSettings error", l),
            !1
        }
    }
    const wi = {
        cDisableAA: function() {
            E && fa()
        },
        sRenderType: function() {
            E && fa()
        },
        cHideId: function() {
            var e = u.cHideId ? "none" : "block";
            document.getElementById("pId").style.display = e
        },
        cHideServer: function() {
            var e = u.cHideServer ? "none" : "block";
            document.getElementById("pServer").style.display = e
        },
        cTransCells: function() {
            B.alpha = u.cTransCells ? .5 : 1
        },
        cColoredCellCount: function() {
            i.updateCellCounter(p.playerCellCount, !0)
        },
        cShowChatIds: function() {
            var e = u.cShowChatIds ? "table-row" : "none";
            document.getElementById("opt_colored_ids").style.display = e
        },
        cHideChat: function() {
            var e = u.cHideChat ? "none" : "block";
            $("#chat-panel").css("display", e)
        },
        cHideMinimap: function() {
            var e = u.cHideMinimap ? "none" : "block";
            $("#minimap-panel").css("display", e)
        },
        cHidePartyPanel: function() {
            u.cHidePartyPanel ? $("#party-panel").css("display", "none") : i && i.party && i.party.length > 0 && $("#party-panel").css("display", "block")
        },
        cDarkerBots: function() {
            if (i)
                for (var e in i.bucket) {
                    var t = i.bucket[e];
                    t && (t.needsPixiUpdate = !0)
                }
        },
        sScorePanel: function() {
            switch (u.sScorePanel) {
            case "0":
                Be.style.display = "none";
                break;
            case "1":
                Be.style.display = "flex";
                break;
            case "2":
                Be.style.display = "block";
                break
            }
        },
        cHideLeaderboard: function() {
            var e = u.cHideLeaderboard ? "none" : "block";
            $("#leaderboard-panel").css("display", e)
        },
        cHideExtraPanel: function() {
            var e = u.cHideExtraPanel ? "none" : "block";
            $("#extra-panel").css("display", e)
        },
        cShowCoordinates: function() {
            var e = u.cShowCoordinates ? "block" : "none";
            $("#minimap-coordinates").css("display", e),
            ga()
        },
        cDisableAutoZoom: function() {
            u.cDisableAutoZoom && (i.scale_base = .2 * Math.max(M.height / 1080, M.width / 1920))
        },
        cThemeEnabled: function() {
            u.cThemeEnabled ? Tn(function(e) {
                const t = document.getElementById(e);
                t && (t.disabled = !1)
            }) : (an(),
            Tn(function(e) {
                const t = document.getElementById(e);
                t && (t.disabled = !0)
            }))
        },
        cShowBorder: function() {
            qt()
        },
        cDisableEventSkins: function() {
            F.enabled && $("body").toggleClass("event-" + F.key),
            Zt(),
            Jt()
        },
        cResizableChat: function() {
            $("#chat-resize").css("display", u.cResizableChat ? "block" : "none")
        },
        sShowNames: function() {
            oe.levelNames = it[u.sShowNames]
        },
        sShowSkins: function() {
            oe.levelSkins = it[u.sShowSkins]
        },
        sShowMass: function() {
            oe.levelMass = it[u.sShowMass],
            u.cShowMass = u.sShowMass !== "NONE";
            var e = document.getElementById("cShowMass");
            e && (e.checked = !!u.cShowMass)
        },
        sMassType: function() {
            oe.massType = qi[u.sMassType]
        },
        sTextOutlines: function() {
            oe.textOutlineSize = Ki[u.sTextOutlines];
            for (var e in i.playerRegistry.bucket) {
                var t = i.playerRegistry.bucket[e];
                t.nameCache && (t.nameCache.style.strokeThickness = oe.textOutlineSize),
                i.playerRegistry.updatePlayer(t)
            }
            dt.buildSizeCache()
        },
        sQuality: function() {
            var e = oe.resolution;
            if (oe.resolution = Ji[u.sQuality],
            e !== oe.resolution)
                try {
                    Xt()
                } catch {}
        },
        uiForegroundColor: function(e) {
            i && i.drawParty(),
            $(".fg-interface-color").css("color", e),
            $(".interface-color").css("color", e),
            $(".gota-btn").css("color", e).css("border-color", e),
            $(".popup-panel").css("color", e),
            $(".main").css("color", e),
            $(".main-bottom-stats").css("border-color", e),
            $("#authed").css("color", e),
            $("#guest").css("color", e)
        },
        uiBackgroundColor: function(e) {
            $(".hud-panel .interface-color").css("background-color", e);
            var t = document.getElementById("leaderboard-panel");
            t && (t.style.backgroundColor = et(e, f.rLeaderboardOpacity || 1)),
            t && (t.style.backdropFilter = "saturate(140%) blur(" + (f.rLeaderboardBlur || 0) + "px)"),
            t && (t.style.webkitBackdropFilter = "saturate(140%) blur(" + (f.rLeaderboardBlur || 0) + "px)"),
            ya(f.rChatOpacity || 1, e);
            try {
                var n = document.getElementById("chat-panel")
                  , a = document.getElementById("chat-tab-container")
                  , s = document.getElementById("chat-container")
                  , c = "saturate(160%) blur(" + (f.rChatBlur || 0) + "px)";
                n && (n.style.backdropFilter = c,
                n.style.webkitBackdropFilter = c),
                a && (a.style.backdropFilter = c,
                a.style.webkitBackdropFilter = c),
                s && (s.style.backdropFilter = c,
                s.style.webkitBackdropFilter = c)
            } catch {}
            var d = document.getElementById("minimap-panel");
            d && (d.style.backgroundColor = et(e, f.rMinimapOpacity || 1)),
            d && (d.style.backdropFilter = "saturate(140%) blur(" + (f.rMinimapBlur || 0) + "px)"),
            d && (d.style.webkitBackdropFilter = "saturate(140%) blur(" + (f.rMinimapBlur || 0) + "px)")
        },
        uiButtonColor: function(e) {
            $(".gota-btn").css("background-color", e)
        },
        uiBorderColor: function(e) {
            $(".ui-pane").css("border-color", e),
            $("#chat-tab-container").css("border-color", e),
            $(".chat-tab").css("border-color", e)
        },
        uiMenuBackgroundColor: function(e) {
            $(".main-panel").css("background-color", e),
            $(".popup-panel").css("background-color", e),
            $(".options-container").css("background-color", e)
        },
        uiMenuTitleBackgroundColor: function(e) {
            $(".menu-title").css("background-color", e)
        },
        uiMenuSubBackgroundColor: function(e) {
            $(".menu-sub-bg").css("background-color", e),
            $(".server-active").css("background-color", e),
            $("#server-content").css("background-color", e)
        },
        uiMenuSubBackground2Color: function(e) {
            $(".menu-sub-bg2").css("background-color", e),
            $(".server-table tbody").css("background-color", e)
        },
        uiPartyLeaderColor: function(e) {
            i && i.drawParty()
        },
        uiGameColorSuccess: function(e) {
            $("#social-friends-online-count").css("color", e)
        },
        uiGameBackgroundColor: function(e) {
            document.body.style.background = e
        },
        uiGameBorderColor: function() {
            qt()
        },
        rUiScale: function(e) {
            u.rUiScale = Math.min(Math.max(e, .5), 1.25),
            $("#uiScale").val(Number.parseFloat(u.rUiScale * 100).toFixed(0)),
            $(".ui-scale").css("transform", "scale(" + u.rUiScale + ")")
        },
        rReconnectPeriod: function(e) {
            u.rReconnectPeriod = Math.min(Math.max(e, 0), 10),
            $("#reconnectPeriod").val(u.rReconnectPeriod)
        },
        rAnimationDelay: function(e) {
            u.rAnimationDelay = Math.min(Math.max(e, 1), 250),
            $("#animationDelay").val(u.rAnimationDelay)
        },
        rViewDistance: function(e) {
            u.rViewDistance = Math.min(Math.max(e, 50), 150),
            $("#viewDistance").val(u.rViewDistance),
            i.sendOptions()
        },
        rBorderSize: function(e) {
            f.rBorderSize = Math.min(Math.max(e, 1), 256),
            $("#borderSize").text(f.rBorderSize),
            qt()
        },
        rBackgroundOpacity: function(e) {
            f.rBackgroundOpacity = Math.min(Math.max(e, 0), 1),
            $("#backgroundOpacity").text(Number.parseFloat(f.rBackgroundOpacity * 100).toFixed(0)),
            document.getElementById("canvas-background").style.opacity = f.rBackgroundOpacity
        },
        rLeaderboardOpacity: function(e) {
            f.rLeaderboardOpacity = Math.min(Math.max(e, 0), 1),
            $("#leaderboardOpacity").text(Number.parseFloat(f.rLeaderboardOpacity * 100).toFixed(0));
            var t = document.getElementById("leaderboard-panel");
            t && (t.style.backgroundColor = et(f.uiBackgroundColor, f.rLeaderboardOpacity))
        },
        rLeaderboardBlur: function(e) {
            var t = parseInt(e, 10);
            f.rLeaderboardBlur = isNaN(t) ? 0 : Math.min(Math.max(t, 0), 50),
            $("#leaderboardBlur").text(f.rLeaderboardBlur);
            var n = document.getElementById("leaderboard-panel")
              , a = "saturate(140%) blur(" + f.rLeaderboardBlur + "px)";
            n && (n.style.backdropFilter = a,
            n.style.webkitBackdropFilter = a)
        },
        rChatOpacity: function(e) {
            f.rChatOpacity = Math.min(Math.max(e, 0), 1),
            $("#chatOpacity").text(Number.parseFloat(f.rChatOpacity * 100).toFixed(0)),
            ya(f.rChatOpacity, f.uiBackgroundColor)
        },
        rChatBlur: function(e) {
            var t = parseInt(e, 10);
            f.rChatBlur = isNaN(t) ? 0 : Math.min(Math.max(t, 0), 50),
            $("#chatBlur").text(f.rChatBlur);
            try {
                var n = document.getElementById("chat-panel")
                  , a = document.getElementById("chat-tab-container")
                  , s = document.getElementById("chat-container")
                  , c = "saturate(160%) blur(" + f.rChatBlur + "px)";
                n && (n.style.backdropFilter = c,
                n.style.webkitBackdropFilter = c),
                a && (a.style.backdropFilter = c,
                a.style.webkitBackdropFilter = c),
                s && (s.style.backdropFilter = c,
                s.style.webkitBackdropFilter = c)
            } catch {}
        },
        rMinimapOpacity: function(e) {
            f.rMinimapOpacity = Math.min(Math.max(e, 0), 1),
            $("#minimapOpacity").text(Number.parseFloat(f.rMinimapOpacity * 100).toFixed(0));
            var t = document.getElementById("minimap-panel");
            t && (t.style.backgroundColor = et(f.uiBackgroundColor, f.rMinimapOpacity))
        },
        rMinimapBlur: function(e) {
            var t = parseInt(e, 10);
            f.rMinimapBlur = isNaN(t) ? 0 : Math.min(Math.max(t, 0), 50),
            $("#minimapBlur").text(f.rMinimapBlur);
            var n = document.getElementById("minimap-panel")
              , a = "saturate(140%) blur(" + f.rMinimapBlur + "px)";
            n && (n.style.backdropFilter = a,
            n.style.webkitBackdropFilter = a)
        },
        rTracerOpacity: function(e) {
            u.rTracerOpacity = Math.min(Math.max(e, 10), 100),
            $("#tracerOpacity").val(u.rTracerOpacity),
            $("#rTracerOpacity").val(u.rTracerOpacity)
        },
        rTracerColor: function(e) {
            u.rTracerColor = e,
            $("#rTracerColor").val(u.rTracerColor)
        },
        aCustomBackground: function(e) {
            document.getElementById("canvas-background").style.backgroundImage = "url('" + e + "')",
            document.getElementById("canvas-background").style.backgroundSize = "100% 100%"
        },
        aCustomSpike: function(e) {
            me.aCustomSpike && me.aCustomSpike.destroy(),
            me.aCustomSpike = null;
            for (var t in i.bucket) {
                var n = i.bucket[t];
                n.type == 3 && (n.needsPixiUpdate = !0)
            }
            if (e.length != 0) {
                var a = new Image;
                a.crossOrigin = "";
                var s = function() {
                    me.aCustomSpike = v.Texture.from(a)
                }
                  , c = function() {
                    i.selfMsg("Unable to load custom theme virus.")
                };
                a.addEventListener("load", s),
                a.addEventListener("error", c),
                de.customElements.push({
                    element: a,
                    event: "load",
                    handler: s
                }, {
                    element: a,
                    event: "error",
                    handler: c
                }),
                a.src = e
            }
        },
        aCustomMother: function(e) {
            me.aCustomMother && me.aCustomMother.destroy(),
            me.aCustomMother = null;
            for (var t in i.bucket) {
                var n = i.bucket[t];
                n.type == 4 && (n.needsPixiUpdate = !0)
            }
            if (e.length != 0) {
                var a = new Image;
                a.crossOrigin = "";
                var s = function() {
                    me.aCustomMother = v.Texture.from(a)
                }
                  , c = function() {
                    i.selfMsg("Unable to load custom theme mother cell.")
                };
                a.addEventListener("load", s),
                a.addEventListener("error", c),
                de.customElements.push({
                    element: a,
                    event: "load",
                    handler: s
                }, {
                    element: a,
                    event: "error",
                    handler: c
                }),
                a.src = e
            }
        }
    };
    function ga() {
        u.cShowCoordinates ? ($("#minimap-canvas").css({
            "border-top": "2px solid rgba(255, 255, 255, .2)"
        }),
        $("#minimap-panel").css({
            height: "270px"
        })) : ($("#minimap-canvas").css({
            "border-top": "0"
        }),
        $("#minimap-panel").css({
            height: "250px"
        }))
    }
    function Ci() {
        Si(),
        $("#btn-chg-ln").on("click", function() {
            if (Je) {
                var e = prompt("Enter new locked name!");
                if (e) {
                    var t = null;
                    if (typeof e != "string" && (t = "Please enter a valid name!"),
                    e.length < 2 && (t = "Locked names must be 2 or more characters long."),
                    e.length > 20 && (t = "Locked names must be 20 or less characters long."),
                    t !== null) {
                        alert(t);
                        return
                    }
                    e = e.trim(),
                    confirm("You are about to change your locked name to: '" + e + `'.
Locked names can only be changed once per week.

Are you sure you wish to continue?`) && i.sendPacket(new m.sendLockedNameChange(e))
                }
            }
        }),
        $("#btn-updateSP").on("click", function() {
            va()
        }),
        $("#btn-subpanel-rules").on("click", function() {
            J.rules = !0;
            try {
                Je || typeof i == "object" && i && (i.subPanelOverride = !0)
            } catch {}
            pt()
        })
    }
    function ki(e) {
        if (typeof e == "string" && e.startsWith("#"))
            return e;
        if (typeof e == "object" && e !== null) {
            let t = e.r.toString(16).padStart(2, "0")
              , n = e.g.toString(16).padStart(2, "0")
              , a = e.b.toString(16).padStart(2, "0");
            return "#" + t + n + a
        }
        return "#ffffff"
    }
    function Fn(e) {
        e = e.replace("#", ""),
        e.length === 3 && (e = e.split("").map(n => n + n).join(""));
        var t = parseInt(e, 16);
        return {
            r: t >> 16 & 255,
            g: t >> 8 & 255,
            b: t & 255
        }
    }
    function Si() {
        pt();
        const e = document.getElementById("spNameColor");
        e && (e.value = ki(J.nameColor),
        e.dispatchEvent(new Event("input",{
            bubbles: !0
        })),
        e.addEventListener("input", function(a) {
            J.nameColor = Fn(a.target.value)
        }));
        const t = document.getElementById("spChatColor");
        t && (t.value = at[J.chatColor],
        t.dispatchEvent(new Event("input",{
            bubbles: !0
        })),
        t.addEventListener("input", function(a) {
            J.chatColor = at.indexOf(a.target.value)
        }));
        const n = document.getElementById("spCellColor");
        if (n) {
            const a = localStorage.getItem("gota.spCellColor");
            a && (n.value = a,
            n.dispatchEvent(new Event("input",{
                bubbles: !0
            })))
        }
        $("#spSkinName").val(J.skinName),
        $("#spLowerName").prop("checked", J.lowerName),
        $("#spEffect select").val(J.effect),
        $("#spNameFont select").val(J.nameFont)
    }
    function et(e, t) {
        try {
            return gn(e).alpha(typeof t == "number" ? t : 1).toRgbString()
        } catch {
            return e
        }
    }
    function ya(e, t) {
        try {
            var n = t || f.uiBackgroundColor
              , a = document.getElementById("chat-panel");
            a && (a.style.backgroundColor = et(n, e));
            var s = document.getElementById("chat-tab-container");
            s && (s.style.backgroundColor = et(n, e));
            var c = document.getElementById("chat-container");
            c && (c.style.backgroundColor = et(n, e))
        } catch {}
    }
    function va(e) {
        J.skinName = $("#spSkinName").val().toLowerCase(),
        J.lowerName = $("#spLowerName").prop("checked");
        const t = document.getElementById("spNameColor");
        t && (J.nameColor = Fn(t.value));
        const n = document.getElementById("spChatColor");
        var a = 0;
        if (n) {
            for (var s = n.value.toUpperCase(), c = 0; c < at.length; c++)
                if (at[c].toUpperCase() == s) {
                    a = c;
                    break
                }
        }
        J.chatColor = a,
        J.effect = parseInt($("#spEffect").val()),
        J.nameFont = parseInt($("#spNameFont").val()),
        i.sendPacket(new m.sendSubPanel(e))
    }
    function pt() {
        Je || i.subPanelOverride ? ($("#btn-cellpanel").prop("disabled", !1),
        Je ? $(".subpanel-name-dashboard").css("display", "") : $(".subpanel-name-dashboard").css("display", "none"),
        J.rules ? ($("#subpanel-rules").css("display", "none"),
        $("#subpanel-content").css("display", "block")) : ($("#subpanel-content").css("display", "none"),
        $("#subpanel-rules").css("display", "block"))) : $("#btn-cellpanel").prop("disabled", !1)
    }
    function Rn(e) {
        !i.accountListeners.loadSubPanel && (i.accountListeners.loadSubPanel = firebase.firestore().collection("accounts").doc(e).onSnapshot(t => {
            !t.exists || !t.data().locked ? (Je = !1,
            $("#main-subpanel").css("display") !== "none" && wt("main-servers")) : (Je = !0,
            $("#spLockedName").html(t.data().name),
            t.data().lastChange !== void 0 && $("#btn-chg-ln").attr("title", "Last Changed: " + new Date(t.data().lastChange).toLocaleString()),
            t.data().expiry !== null ? $("#spExpiry").html(new Date(t.data().expiry.seconds * 1e3).toLocaleString()) : $("#spExpiry").html("Never")),
            pt(),
            i.accountListeners.loadSubPanel(),
            i.accountListeners.loadSubPanel = null
        }
        , t => {
            i.accountListeners.loadSubPanel(),
            i.accountListeners.loadSubPanel = null
        }
        ))
    }
    function ba(e, t, n, a, s, c, d, r, o) {
        this.name = e,
        this.ip = t,
        this.players = n,
        this.bots = a,
        this.playerText = s,
        this.mode = c,
        this.region = d,
        this.ssl = r,
        this.order = o
    }
    function Hn() {
        $("#servers-body-eu").html(""),
        $("#servers-body-na").html(""),
        $("#servers-body-ap").html("");
        for (var e in Ye)
            for (var t in Ye[e]) {
                var n = Ye[e][t]
                  , a = n.bots > 0 ? ' title="Players: ' + n.players + "&#10;Bots: " + n.bots + '"' : "";
                $("#servers-body-" + n.region).append('<tr id="s_' + n.name + '" class="server-row" server="' + n.name + '"><td class="server-table-name">' + n.name + '</td><td class="server-table-players"' + a + ">" + n.playerText + '</td><td class="server-table-mode">' + n.mode + "</td></tr>")
            }
        for (var t in Qe) {
            var n = Qe[t];
            $("#servers-body-" + n.region).prepend('<tr id="s_' + n.name + '" class="account-server server-row" server="' + n.name + '"><td class="server-table-name">' + n.name + '</td><td class="server-table-players">' + n.playerText + '</td><td class="server-table-mode">' + n.mode + "</td></tr>")
        }
        $(".server-row").on("click", function() {
            tt($(this).attr("server"))
        })
    }
    function Ei(e) {
        for (var t in Qe)
            if (e.toLowerCase() === t.toLowerCase())
                return Qe[t];
        return null
    }
    function wa(e) {
        for (var t in Ye)
            for (var n in Ye[t])
                if (n.toLowerCase() === e.toLowerCase())
                    return Ye[t][n];
        return null
    }
    function tt(e) {
        P != null && $("#s_" + P.name).removeClass("server-selected"),
        P = wa(e) || (Object.keys(Qe).length > 0 ? Ei(e) : null),
        P != null && ($("#s_" + P.name).addClass("server-selected"),
        typeof window < "u" && typeof window.gtag == "function" && window.gtag("event", "select_server", {
            server_name: P.name,
            region: P.region,
            mode: P.gamemode,
            players: P.players
        }))
    }
    function Vn(e) {
        e = e.toLowerCase();
        var t = $("#server-tab-" + e);
        $(".server-active").css("background-color", "inherit"),
        $("#server-tab-container").children().removeClass("server-active"),
        t.addClass("server-active"),
        $(".server-active").css("background-color", f.uiMenuSubBackgroundColor),
        $("#server-content").children().css("display", "none"),
        $("#servers-" + e).css("display", "block")
    }
    var nt = [];
    function Ut(e, t) {
        for (var n = t, a = !1, s = 0, c = u._ChatTabs, d = c.length; s < d; s++) {
            var r = c[s];
            if (r && (e & r.flags) === e) {
                var o = nt[s];
                if (!o) {
                    var l = document.getElementById("chat-body-" + s);
                    if (!l)
                        continue;
                    var g = document.getElementById("chat-container-" + s);
                    nt[s] = o = {
                        bodyEl: l,
                        containerEl: g
                    }
                }
                var h = o.bodyEl
                  , C = o.containerEl;
                if (!(!h || !C)) {
                    if (h.children.length >= r.maxMessages && h.firstElementChild) {
                        var y = h.firstElementChild
                          , k = y && y.querySelector && y.querySelector("td[data-msgid]");
                        k && k.dataset && k.dataset.msgid && bt.delete(String(k.dataset.msgid)),
                        h.removeChild(y)
                    }
                    var _;
                    a ? _ = n.cloneNode(!0) : (_ = n,
                    a = !0);
                    var b = document.createElement("tr");
                    b.appendChild(_),
                    h.appendChild(b);
                    var x = C.scrollHeight - C.scrollTop - C.clientHeight;
                    x < 150 && (C.scrollTop = C.scrollHeight)
                }
            }
        }
    }
    function xi(e) {
        e.length != 0 && (e.charAt(0) == "/" ? Ii(e) : (i.sendPacket(new m.sendChat(e,0)),
        Xe("")),
        Ge.length > 20 && Ge.shift(),
        Ge.push(e))
    }
    function Xe(e) {
        $("#chat-input").val(e)
    }
    function $i(e) {
        $("#chat-input").val(en() + e)
    }
    function en() {
        return $("#chat-input").val()
    }
    function Ii(e) {
        var t = e.split(" ")
          , n = t[0]
          , a = n.substring(1);
        Xe("");
        var s = !1;
        Object.keys(on).findIndex(c => {
            if (on[c].triggers.findIndex(d => d.toUpperCase() === a.toUpperCase()) > -1 && s == !1) {
                on[c].action(t.slice(1)),
                s = !0;
                return
            }
        }
        ),
        s == !1 && i.selfMsg("Invalid command!")
    }
    function tn() {
        nt.length = 0;
        var e = document.getElementById("chat-tab-container")
          , t = document.getElementById("chat-container");
        if (!(!e || !t)) {
            e.innerHTML = "",
            t.innerHTML = "";
            for (var n = document.createDocumentFragment(), a = document.createDocumentFragment(), s = 0, c = u._ChatTabs, d = c.length; s < d; s++) {
                var r = c[s];
                if (r) {
                    r.name.length === 0 && (r.name = "Unnamed");
                    var o = document.createElement("li");
                    o.className = "chat-tab",
                    o.id = "chat-tab-" + s,
                    o.setAttribute("name", s),
                    o.innerHTML = "<span>" + r.name + "</span>",
                    n.appendChild(o);
                    var l = document.createElement("div");
                    l.className = "chat-inner-container",
                    l.id = "chat-container-" + s,
                    l.innerHTML = "<table class='chat-table'><tbody id='chat-body-" + s + "'></tbody></table>",
                    a.appendChild(l),
                    nt[s] = {
                        bodyEl: null,
                        containerEl: l
                    }
                }
            }
            e.appendChild(n),
            t.appendChild(a);
            for (var g = 0; g < nt.length; g++)
                nt[g] && (nt[g].bodyEl = document.getElementById("chat-body-" + g));
            for (var h = e.getElementsByClassName("chat-tab"), C = 0; C < h.length; C++) {
                var y = h[C];
                const k = function() {
                    var _ = this.getAttribute("name");
                    jn(_)
                };
                y.addEventListener("click", k),
                de.chatElements.push({
                    element: y,
                    event: "click",
                    handler: k
                }),
                y.style.borderColor = f.uiBorderColor
            }
            Yt >= 0 && Yt < u._ChatTabs.length ? jn(Yt) : jn(0)
        }
    }
    function _i() {
        for (var e in u._ChatTabs) {
            var t = u._ChatTabs[e];
            if (t) {
                t.name.length == 0 && (t.name = "Unnamed");
                var n = document.getElementById("chat-tab-" + e);
                if (n) {
                    var a = n.firstElementChild
                      , s = t.name;
                    a ? a.textContent !== s && (a.textContent = s) : (a = document.createElement("span"),
                    a.textContent = s,
                    n.appendChild(a))
                }
            }
        }
    }
    function jn(e) {
        Yt = e;
        var t = document.getElementById("chat-tab-container")
          , n = document.getElementById("chat-container");
        if (!(!t || !n)) {
            for (var a = t.getElementsByClassName("chat-tab"), s = 0; s < a.length; s++)
                a[s].classList.remove("chat-active-tab");
            for (var c = n.getElementsByClassName("chat-inner-container"), d = 0; d < c.length; d++)
                c[d].classList.remove("chat-active-container"),
                c[d].style.display = "none";
            var r = document.getElementById("chat-tab-" + e)
              , o = document.getElementById("chat-container-" + e);
            r && r.classList.add("chat-active-tab"),
            o && (o.classList.add("chat-active-container"),
            o.style.display = "block")
        }
    }
    function Lt(e=0) {
        var t = $("#cte-tab-selector");
        t.empty();
        for (var n in u._ChatTabs)
            t.append("<option value='" + n + "'>" + u._ChatTabs[n].name + "</option>");
        t.prop("selectedIndex", e),
        t.trigger("change")
    }
    function Mi(e) {
        var t = $("#cte-tab-selector").val()
          , n = {
            name: "",
            flags: 0,
            maxMessages: 0
        }
          , a = u._ChatTabs[t];
        if (a)
            for (var s in n)
                n[s] = a[s];
        $("#cte-tab-name").val(n.name);
        for (var c in Oe) {
            var d = (Oe[c] & n.flags) == Oe[c];
            $("#cte-type-" + c.toLowerCase()).prop("checked", d)
        }
        $("#cte-max-messages").val(n.maxMessages)
    }
    function Pi(e) {
        var t = $("#cte-tab-selector").val()
          , n = u._ChatTabs[t];
        if (n) {
            var a = n.name
              , s = $("#cte-tab-name").val();
            if (s.length != 0) {
                var c = s != a
                  , d = 0
                  , r = parseInt($("#cte-max-messages").val());
                for (var o in Oe)
                    $("#cte-type-" + o.toLowerCase()).prop("checked") && (d += Oe[o]);
                n.name = s,
                n.flags = d,
                n.maxMessages = r,
                c && (Lt(t),
                _i())
            }
        }
    }
    function Ti() {
        var e = {
            name: "New",
            flags: 0,
            maxMessages: 100
        };
        u._ChatTabs.push(e),
        Lt(u._ChatTabs.length - 1),
        tn()
    }
    function Ui() {
        var e = $("#cte-tab-selector").val()
          , t = u._ChatTabs[e];
        t && (u._ChatTabs.splice(e, 1),
        Lt(),
        tn())
    }
    var nn = function(e) {
        Wn(e, this.innerText, this.dataset.playerId, -1)
    }
      , Li = function(e) {
        var t = e.offsetY
          , n = Math.floor(t / 20);
        if (!(t % 20 < 5)) {
            var a = i.party[n];
            a != null && Wn(e, a.name, a.id, n)
        }
    };
    function Wn(e, t, n, a) {
        var s = document.getElementById("context-name");
        s.innerText = t || "An unnamed cell",
        we.data("selected", n),
        we.data("party", a),
        $(".context-action").css("display", "none"),
        a == -1 ? ($("#menu-invite").css("display", "block"),
        $("#menu-whisper").css("display", "block"),
        $("#menu-block").css("display", "block"),
        $("#menu-profile").css("display", "block")) : ($("#menu-whisper").css("display", "block"),
        $("#menu-profile").css("display", "block"),
        i.isPartyLeader() && ($("#menu-pu_pr").css("display", "block"),
        $("#menu-promote").css("display", "block"),
        $("#menu-kick").css("display", "block"))),
        i.spectate && $("#menu-spectate").css("display", "block"),
        we.css("display", "block"),
        we.css("left", Math.min(i.mouseRawX, window.innerWidth - we.width())),
        we.css("top", Math.min(i.mouseRawY, window.innerHeight - we.height()))
    }
    function _e(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function Ca(e, t, n, a, s, c, d) {
        var r = (n - i.serverData.border.left) / i.serverData.border.width * V.width
          , o = (a - i.serverData.border.top) / i.serverData.border.height * V.height;
        if (e.beginPath(),
        e.arc(r, o, s, 0, In, !1),
        e.fillStyle = c,
        e.fill(),
        d) {
            var l = e.measureText(t).width / 2
              , g = r - l
              , h = o - 5;
            e.fillText(t, g, h)
        }
    }
    function Di(e) {
        var t = U.pivot.x - E.stage.position.x / i.scale + i.mouseRawX * oe.resolution / i.scale, n = U.pivot.y - E.stage.position.y / i.scale + i.mouseRawY * oe.resolution / i.scale, a = null, s;
        for (var c in i.bucket)
            if (s = i.bucket[c],
            !(s.size < 25)) {
                var d = s.y - s.size
                  , r = s.y + s.size
                  , o = s.x - s.size
                  , l = s.x + s.size;
                if (!(n > r) && !(n < d) && !(t > l) && !(t < o)) {
                    a = s;
                    break
                }
            }
        if (a != null && a.playerId != 0 && !e) {
            var g = i.playerRegistry.getPlayer(a.playerId);
            g != null && Wn(e, g.name, a.playerId, -1)
        }
    }
    function Me(e) {
        var t = e[0] || e;
        t && (t.id === "main" && window.is_touch_device && typeof touch_controls < "u" && (touch_controls.style.display = "none"),
        t.style.display === "none" || getComputedStyle(t).display === "none" ? (t.classList.contains("menu-transition") || t.classList.add("menu-transition"),
        t.style.display = "block",
        t.style.pointerEvents = "auto",
        t.offsetWidth,
        t.classList.add("menu-open")) : !t.classList.contains("menu-open") && (t.classList.add("menu-open"),
        t.style.pointerEvents = "auto"),
        t.id === "main" && (Ve.mainMenuVisible = !0))
    }
    function ka(e) {
        try {
            if (!Ve.mainMenuVisible) {
                if (typeof ze < "u" && ze.css && ze.css("display") === "block")
                    return;
                Me(q)
            }
        } catch (t) {
            console.warn("ensureMainMenuVisible failed (" + e + "):", t)
        }
    }
    function te(e) {
        var t = e[0] || e;
        if (t) {
            t.id === "main" && window.is_touch_device && typeof touch_controls < "u" && (touch_controls.style.display = "block");
            var n = getComputedStyle(t)
              , a = n.display !== "none";
            if (a) {
                t.classList.contains("menu-transition") || t.classList.add("menu-transition"),
                t.classList.remove("menu-open"),
                t.style.pointerEvents = "none";
                for (var s = n.transitionDuration.split(",").map(function(g) {
                    return parseFloat(g) || 0
                }), c = n.transitionDelay.split(",").map(function(g) {
                    return parseFloat(g) || 0
                }), d = !1, r = 0; r < s.length; r++)
                    if (s[r] + (c[r] || 0) > 0) {
                        d = !0;
                        break
                    }
                if (d) {
                    var o = !1
                      , l = function(g) {
                        g.target === t && (o = !0,
                        t.style.display = "none",
                        t.removeEventListener("transitionend", l))
                    };
                    t.addEventListener("transitionend", l),
                    setTimeout(function() {
                        !o && (t.style.display = "none",
                        t.removeEventListener("transitionend", l))
                    }, 400)
                } else
                    t.style.display = "none"
            }
            t.id === "main" && (Ve.mainMenuVisible = !1)
        }
    }
    function ft(e) {
        var t = e[0] || e;
        t && (t.style.display === "none" || getComputedStyle(t).display === "none" ? Me(t) : te(t))
    }
    function Ai() {
        $(".popup-panel").each(function() {
            te($(this))
        })
    }
    function Sa(e) {
        var t = e[0] || e;
        return t ? getComputedStyle(t).display !== "none" : !1
    }
    function Ea() {
        Ct.show(),
        (i.party.length == 0 || u.cHidePartyPanel) && p.partyPanel.css("display", "none"),
        u.cHideChat && $("#chat-panel").css("display", "none"),
        u.cHideMinimap && $("#minimap-panel").css("display", "none")
    }
    function zn() {
        Ct.hide()
    }
    function Yn() {
        $("#guest").hide(),
        $("#account-loader").show()
    }
    function xa(e) {
        var t = e.attr("id");
        u[t] = e.prop("checked"),
        He(t)
    }
    function $a(e) {
        var t = e.attr("id");
        u[t] = e.val(),
        He(t, e.val())
    }
    function Dt(e) {
        var t = e.attr("id");
        He(t, e.val())
    }
    function He(e, t) {
        var n = wi[e];
        n?.(t)
    }
    function At(e, t) {
        t != null && (f[e] = t,
        He(e, t))
    }
    function qe() {
        Fe.consented && (u.iChatWidth = $("#chat-panel").css("width"),
        u.iChatHeight = $("#chat-panel").css("height"),
        window.localStorage.setItem("options", JSON.stringify(u)),
        window.localStorage.setItem("keybinds", JSON.stringify(Q)),
        window.localStorage.setItem("name", $("#name-box").val()),
        window.localStorage.setItem("theme", JSON.stringify(f)),
        window.localStorage.setItem("subpanel", JSON.stringify(J)))
    }
    function Bi() {
        if (Fe.consented) {
            var e = window.localStorage.getItem("theme");
            e && Ia(e);
            var t = window.localStorage.getItem("keybinds");
            if (t) {
                t = JSON.parse(t);
                for (var n in t)
                    t[n] != null && Number.isInteger(t[n]) && (Q[n] = t[n],
                    Nn($("#" + n)))
            }
            var a = window.localStorage.getItem("options");
            if (a) {
                a = JSON.parse(a);
                for (var s in u)
                    !(s in a) && (a[s] = u[s])
            } else
                a = u;
            for (var s in a) {
                var c = s.charAt(0);
                if (c == "c") {
                    if (a[s] == !0) {
                        var d = $("#" + s);
                        d.prop("checked", a[s]),
                        xa(d)
                    }
                } else if (c == "s") {
                    var r = $("#" + s);
                    r.val(a[s]),
                    $a(r)
                } else
                    c == "i" ? u[s] = a[s] : c == "r" ? (u[s] = a[s],
                    $("#" + s).val(u[s]),
                    Dt($("#" + s)),
                    s === "rTracerColor" && p.tracerColorInput && (p.tracerColorInput.value = u.rTracerColor || "#ffffff",
                    p.tracerColorInput.dispatchEvent(new Event("input",{
                        bubbles: !0
                    })))) : u[s] = a[s]
            }
            $("#chat-panel").css("width", u.iChatWidth),
            $("#chat-panel").css("height", u.iChatHeight),
            !u.cThemeEnabled && He("cThemeEnabled"),
            typeof f.rLeaderboardOpacity == "number" && ($("#leaderboardOpacity").text(Number.parseFloat(f.rLeaderboardOpacity * 100).toFixed(0)),
            $("#rLeaderboardOpacity").val(f.rLeaderboardOpacity)),
            typeof f.rChatOpacity == "number" && ($("#chatOpacity").text(Number.parseFloat(f.rChatOpacity * 100).toFixed(0)),
            $("#rChatOpacity").val(f.rChatOpacity)),
            typeof f.rMinimapOpacity == "number" && ($("#minimapOpacity").text(Number.parseFloat(f.rMinimapOpacity * 100).toFixed(0)),
            $("#rMinimapOpacity").val(f.rMinimapOpacity)),
            typeof f.rLeaderboardBlur == "number" && ($("#leaderboardBlur").text(f.rLeaderboardBlur),
            $("#rLeaderboardBlur").val(f.rLeaderboardBlur)),
            typeof f.rChatBlur == "number" && ($("#chatBlur").text(f.rChatBlur),
            $("#rChatBlur").val(f.rChatBlur)),
            typeof f.rMinimapBlur == "number" && ($("#minimapBlur").text(f.rMinimapBlur),
            $("#rMinimapBlur").val(f.rMinimapBlur));
            var o = window.localStorage.getItem("name");
            o != null && $("#name-box").val(o);
            var l = window.localStorage.getItem("subpanel");
            if (l) {
                l = JSON.parse(l);
                for (var s in l)
                    l[s] && l[s].length != 0 && (J[s] = l[s])
            }
            typeof J.lockedName > "u" && (J.lockedName = ""),
            pt()
        }
    }
    function an() {
        for (var e in It) {
            var t = e.charAt(0);
            if (t == "r")
                $("#" + e).val(It[e]),
                Dt($("#" + e));
            else if (t == "u") {
                f[e] = It[e];
                const n = document.getElementById(e);
                n && (n.value = f[e]),
                He(e, f[e])
            } else
                t == "a" ? At(e, "") : f[e] = It[e]
        }
        f._FoodColors = []
    }
    function Ia(e) {
        try {
            var t = JSON.parse(e);
            if (t.version == null || t.version != sa) {
                an();
                return
            }
            for (var n in t)
                if (f[n] != null && t[n].length != 0) {
                    f[n] = t[n];
                    var a = n.charAt(0);
                    if (a == "u") {
                        const s = document.getElementById(n);
                        s && (s.value = f[n],
                        s.dispatchEvent(new Event("input",{
                            bubbles: !0
                        }))),
                        He(n, f[n])
                    } else
                        a == "r" ? ($("#" + n).val(f[n]),
                        Dt($("#" + n))) : a == "a" && At(n, f[n])
                }
        } catch {
            an()
        } finally {
            Bn()
        }
    }
    function Ni() {
        u.sShowMass = u.sShowMass || "SELF";
        const e = ["SELF", "PARTY", "ALL", "NONE"];
        var t = e.indexOf(u.sShowMass);
        t = (t + 1) % e.length,
        u.sShowMass = e[t];
        var n = document.getElementById("sShowMass");
        n && (n.value = u.sShowMass),
        He("sShowMass", u.sShowMass),
        qe(),
        console.log("Mass display: " + u.sShowMass)
    }
    function Oi() {
        u.sShowSkins = u.sShowSkins || "ALL";
        const e = ["SELF", "PARTY", "ALL", "NONE"];
        var t = e.indexOf(u.sShowSkins);
        t = (t + 1) % e.length,
        u.sShowSkins = e[t];
        var n = document.getElementById("sShowSkins");
        n && (n.value = u.sShowSkins),
        He("sShowSkins", u.sShowSkins),
        qe(),
        console.log("Skins display: " + u.sShowSkins)
    }
    function Fi() {
        u.sShowNames = u.sShowNames || "ALL";
        const e = ["SELF", "PARTY", "ALL", "NONE"];
        var t = e.indexOf(u.sShowNames);
        t = (t + 1) % e.length,
        u.sShowNames = e[t];
        var n = document.getElementById("sShowNames");
        n && (n.value = u.sShowNames),
        He("sShowNames", u.sShowNames),
        qe(),
        console.log("Names display: " + u.sShowNames)
    }
    function _a(e) {
        if (/\.(json)$/i.test(e.name)) {
            var t = new FileReader;
            t.addEventListener("load", function() {
                !u.cThemeEnabled && Bt(),
                an(),
                Ia(this.result)
            }, {
                once: !0
            }),
            t.readAsText(e)
        }
    }
    function Bt() {
        $("#cThemeEnabled").prop("checked", !0).trigger("change")
    }
    function sn(e) {
        for (var t = e.split(" "), n = "", a = null, s = 0; s < t.length; s++)
            s != 0 && (n += " "),
            a = t[s],
            Rt[a] != null ? (a.startsWith(":") && a.endsWith(":") && (a = a.substring(1, a.length - 1)),
            n += '<img src="images/emotes/' + a + '.png" height="17" width="17" alt="' + a + '">') : Ht[a] != null ? (a.startsWith(":") && a.endsWith(":") && (a = a.substring(1, a.length - 1)),
            n += '<img src="images/emotes/gifs/' + a + '.gif" height="17" width="17" alt="' + a + '">') : n += a;
        return n
    }
    const ue = {
        MODIFIER: 1,
        PASSIVE: 2,
        CONSUMABLE: 3,
        DEBUFF: 4,
        NONE: 0
    };
    var Ma, Pa, mt = {
        0: new ke("Random","random",ue.NONE),
        1: new ke("Maximum Cells Upgrade","extracells",ue.MODIFIER),
        2: new ke("Extra Consumable Slot","extraconsumable",ue.MODIFIER),
        3: new ke("Merge","merge",ue.PASSIVE),
        4: new ke("Grow","grow",ue.PASSIVE),
        5: new ke("Speed","speed",ue.PASSIVE),
        6: new ke("Shield","shield",ue.PASSIVE),
        7: new ke("Virus","spike",ue.CONSUMABLE),
        8: new ke("Disrupt","disrupt",ue.CONSUMABLE),
        9: new ke("Teleport","teleport",ue.CONSUMABLE),
        10: new ke("Disrupt","_disrupt",ue.DEBUFF),
        11: new ke("Silver","phoenix",ue.MODIFIER),
        12: new ke("Consumable Shield","_shield",ue.CONSUMABLE),
        13: new ke("Magnet","magnet",ue.PASSIVE),
        14: new ke("Decay","decay",ue.CONSUMABLE),
        15: new ke("Decay","_decay",ue.DEBUFF)
    };
    function ke(e, t, n) {
        this.name = e,
        this.img = t,
        this.type = n,
        this.image = null,
        this.texture = null
    }
    function Ri() {
        for (var e in mt) {
            var t = mt[e]
              , n = "images/powerups/" + t.img + ".png"
              , a = new Image;
            a.addEventListener("load", function(s, c) {
                s.texture = v.Texture.from(c)
            }
            .bind(null, t, a)),
            a.src = n,
            t.image = a
        }
        Pa = v.Texture.from("images/shield.png"),
        Ma = v.Texture.from("images/debuff.png")
    }
    function Hi() {
        this.passiveBuffs = {},
        this.passiveSortedBuffs = [],
        this.consumableBuffs = [],
        this.cache = null,
        this.nextCacheUpdate = 0,
        this.texture = null,
        this.bonusMaxCells = 0,
        this.onAddBuff = function(e, t, n) {
            var a = null
              , s = mt[e].type;
            s != ue.CONSUMABLE ? (a = this.passiveBuffs[e],
            a ? a.update(t, n) : (a = new Ua(e,t,n),
            this.passiveBuffs[e] = a,
            this.sortPassiveBuffs()),
            this.onPassiveBuffsUpdate(),
            this.markCacheForUpdate()) : (a = new Ua(e,t,n),
            this.consumableBuffs.push(a),
            this.markCacheForUpdate()),
            a && i.selfMsg("Recieved buff: " + a.powerup.name)
        }
        ,
        this.onRemoveBuff = function(e) {
            var t = null
              , n = mt[e].type;
            if (n != ue.CONSUMABLE)
                t = this.passiveBuffs[e],
                t && (delete this.passiveBuffs[e],
                this.sortPassiveBuffs(),
                this.markCacheForUpdate(),
                this.onPassiveBuffsUpdate());
            else
                for (var a = 0; a < this.consumableBuffs.length; a++)
                    if (t = this.consumableBuffs[a],
                    t.id == e) {
                        this.consumableBuffs.splice(a, 1),
                        this.markCacheForUpdate();
                        break
                    }
            t && i.selfMsg("Lost buff: " + t.powerup.name)
        }
        ,
        this.clearBuffs = function(e) {
            if (!(this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0)) {
                var t = e || !1;
                for (var n in this.passiveBuffs) {
                    var a = this.passiveBuffs[n];
                    t && a.powerup.type == ue.MODIFIER || delete this.passiveBuffs[n]
                }
                this.sortPassiveBuffs(),
                this.onPassiveBuffsUpdate(),
                this.consumableBuffs = [],
                this.markCacheForUpdate()
            }
        }
        ,
        this.sortPassiveBuffs = function() {
            if (this.passiveSortedBuffs = [],
            this.passiveBuffs.length != 0)
                for (var e in this.passiveBuffs) {
                    var t = this.passiveBuffs[e];
                    t.powerup.type == ue.MODIFIER ? this.passiveSortedBuffs.splice(0, 0, e) : this.passiveSortedBuffs.push(e)
                }
        }
        ,
        this.onPassiveBuffsUpdate = function() {
            if (this.bonusMaxCells = 0,
            this.passiveBuffs[1] != null) {
                var e = this.passiveBuffs[1];
                this.bonusMaxCells = e.stack * 16
            }
        }
        ,
        this.update = function() {
            if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                H.visible = !1;
                return
            }
            Date.now() >= this.nextCacheUpdate && (this.updateCache(),
            this.nextCacheUpdate = Date.now() + 1e3),
            !this.texture && (this.texture = v.Texture.from(this.cache.canvas),
            H.texture = this.texture,
            H.anchor.set(0)),
            H.position.x = M.width / 2 - H.width / 2 - E.stage.position.x,
            H.position.y = M.height - H.height - 15 - E.stage.position.y,
            H.visible = !0
        }
        ,
        this.updateCache = function() {
            var e = this.cache == null || this.cache.canvas == null ? document.createElement("canvas") : this.cache.canvas
              , t = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
            e.width = 55 * t,
            e.height = 105,
            this.cache = e.getContext("2d"),
            this.cache.fillStyle = "#222",
            this.cache.font = "bold 16pt Calibri";
            for (var n = 0, a = 0, s = 0; s < this.passiveSortedBuffs.length; s++) {
                var c = this.passiveBuffs[this.passiveSortedBuffs[s]];
                c.draw(this.cache, n, a),
                n += 55
            }
            n = 0,
            a = 55;
            for (var s = 0; s < this.consumableBuffs.length; s++) {
                var c = this.consumableBuffs[s];
                c.draw(this.cache, n, a),
                n += 55
            }
            this.texture && this.texture.update(),
            this.nextCacheUpdate = Date.now() + 1e3
        }
        ,
        this.markCacheForUpdate = function() {
            this.nextCacheUpdate = 0
        }
    }
    const Ta = Qa * 3;
    function Ua(e, t, n) {
        this.id = e,
        this.powerup = mt[e],
        this.startTime = Date.now(),
        this.expireTime = n,
        this.stack = t,
        this.update = function(a, s) {
            this.startTime = Date.now(),
            this.expireTime = s,
            this.stack = a
        }
        ,
        this.getCooldown = function() {
            if (Date.now() >= this.expireTime)
                return In;
            var a = this.expireTime - Date.now()
              , s = this.expireTime - this.startTime
              , c = Math.min(a / s, 1) * 2;
            return c * Math.PI
        }
        ,
        this.draw = function(a, s, c) {
            a.drawImage(this.powerup.image, s, c, 50, 50),
            this.stack > 1 && (a.fillStyle = "#000",
            a.fillText(this.stack, s + 35, c + 17)),
            this.expireTime > 0 && (a.beginPath(),
            a.moveTo(s + 25, c + 25),
            a.arc(s + 25, c + 25, 25, Ta, Ta - this.getCooldown(), !1),
            a.closePath(),
            a.globalAlpha = .75,
            a.fillStyle = "#222",
            a.fill(),
            a.globalAlpha = 1)
        }
    }
    const La = ["hearts"];
    var Gn = [];
    function Da() {
        this.delay = 0,
        this.frames = [],
        this.isGif = !0,
        this.push = function(e) {
            this.frames.push(e)
        }
        ,
        this.getFrame = function(e) {
            return this.frames[e]
        }
        ,
        this.getLength = function() {
            return this.frames.length
        }
        ,
        this.getTexture = function() {
            return this.getFrame(Math.floor(O / this.delay) % this.getLength())
        }
        ,
        this.loadFromFrameData = function(e) {
            if (e.length === 0)
                return;
            const t = document.createElement("canvas")
              , n = t.getContext("2d")
              , a = document.createElement("canvas")
              , s = a.getContext("2d")
              , c = e[0].getImage();
            this.delay = e[0].frameInfo.delay * 10,
            t.width = c.width,
            t.height = c.height,
            a.width = c.width,
            a.height = c.height;
            for (const d of e) {
                n.clearRect(0, 0, t.width, t.height),
                n.drawImage(a, 0, 0);
                const r = d.getImage()
                  , o = r.getContext("2d");
                s.drawImage(r, 0, 0),
                o.clearRect(0, 0, r.width, r.height),
                o.drawImage(a, 0, 0);
                const {frameInfo: l} = d
                  , {disposal: g} = l;
                g === 2 ? s.clearRect(l.x, l.y, l.width, l.height) : g === 3 && (s.clearRect(0, 0, a.width, a.height),
                s.drawImage(t, 0, 0)),
                this.push(v.Texture.from(r))
            }
        }
    }
    function Nt(e) {
        return rn[e % rn.length]
    }
    function Vi(e) {
        return Ba[e % Ba.length]
    }
    function ji(e) {
        return _t[e % _t.length]
    }
    function Aa(e) {
        for (var t = e.length - 1; t > 0; t--) {
            var n = Math.floor(Math.random() * (t + 1))
              , a = e[t];
            e[t] = e[n],
            e[n] = a
        }
        return e
    }
    for (var Xn = [], qn = [], gt = 0; gt < 180; gt++) {
        var Kn = gn({
            h: gt * 2,
            s: 97.25,
            v: 100,
            a: 1
        }).toRgb();
        Xn[gt] = (Kn.r << 16) + (Kn.g << 8) + Kn.b,
        qn[gt] = gn({
            h: gt * 2,
            s: 97.25,
            v: 100,
            a: 1
        }).toHex()
    }
    const rn = Aa(Xn.slice(0))
      , Ba = Aa(qn.slice(0));
    Xn = null,
    qn = null;
    const at = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"]
      , yt = {}
      , Na = {
        500: {
            style: {
                color: "#FFD700",
                textShadow: "0 0 8px #FFD700, 0 0 12px #FF8C00",
                fontWeight: "bold"
            }
        },
        501: {
            style: {
                color: "#00FF00",
                textShadow: "0 0 8px #00FF00, 0 0 12px #00AA00",
                fontWeight: "bold"
            }
        },
        600: {
            style: {
                background: "linear-gradient(90deg, #2b2042, #5a3ea6, #8b6be6, #c8a6ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                textShadow: "0 0 12px rgba(150,120,220,0.65)",
                fontWeight: "700",
                animation: "twilightGradient 4s ease-in-out infinite"
            }
        },
        601: {
            style: {
                background: "linear-gradient(90deg, #FFEB99, #FFD54F, #FFB300, #FF8F00)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                textShadow: "0 0 10px rgba(255,170,0,0.6)",
                fontWeight: "700",
                animation: "sunflowerGradient 4s ease-in-out infinite"
            }
        }
    };
    (function() {
        if (!(typeof document > "u") && !document.getElementById("title-effect-twilight-style")) {
            var t = document.createElement("style");
            t.id = "title-effect-twilight-style",
            t.type = "text/css",
            t.appendChild(document.createTextNode(`@keyframes twilightGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`)),
            document.head.appendChild(t)
        }
    }
    )(),
    function() {
        if (!(typeof document > "u") && !document.getElementById("title-effect-sunflower-style")) {
            var t = document.createElement("style");
            t.id = "title-effect-sunflower-style",
            t.type = "text/css",
            t.appendChild(document.createTextNode(`@keyframes sunflowerGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`)),
            document.head.appendChild(t)
        }
    }();
    function Oa(e) {
        if (e === 0 || e === i.playerId)
            return "You cannot block that player.";
        if (Ze.includes(e)) {
            const t = Ze.indexOf(e);
            return t > -1 && Ze.splice(t, 1),
            "Unblocked player with ID: " + e
        }
        return Ze.push(e),
        "Blocked player with ID: " + e
    }
    const on = {
        whisper: {
            description: "Whisper a player by ID",
            triggers: ["whisper", "t", "w"],
            action: function(e) {
                var t = parseInt(e[0]);
                if (isNaN(t)) {
                    i.selfMsg("Invalid player id.");
                    return
                }
                var n = e.slice(1).join(" ");
                n.length != 0 && i.sendPacket(new m.sendWhisper(t,n)),
                Xe("/t " + t + " ")
            }
        },
        reply_whisper: {
            description: "Reply to previous whisper",
            triggers: ["reply", "r"],
            action: function(e) {
                var t = e.join(" ");
                t.length != 0 && i.sendPacket(new m.sendWhisper(0,t)),
                Xe("/r ")
            }
        },
        party_chat: {
            description: "Send a message to other party members",
            triggers: ["party", "p"],
            action: function(e) {
                var t = e.join(" ");
                t.length != 0 && i.sendPacket(new m.sendChat(t,1)),
                Xe("/p ")
            }
        },
        invite: {
            description: "Invite a player to the party",
            triggers: ["invite", "i"],
            action: function(e) {
                var t = parseInt(e[0]);
                isNaN(t) ? i.selfMsg("Invalid ID.") : i.sendPacket(new m.sendPartyAction(0,t))
            }
        },
        leave: {
            description: "Leave your current party",
            triggers: ["leave", "l"],
            action: function(e) {
                i.sendPacket(new m.sendPartyAction(3,0))
            }
        },
        promote: {
            description: "Promote a party member to leader",
            triggers: ["promote"],
            action: function(e) {
                var t = parseInt(e[0]);
                isNaN(t) ? i.selfMsg("Invalid ID.") : i.sendPacket(new m.sendPartyAction(2,t))
            }
        },
        kick: {
            description: "Kick a player from the party",
            triggers: ["kick"],
            action: function(e) {
                var t = parseInt(e[0]);
                isNaN(t) ? i.selfMsg("Invalid ID.") : i.sendPacket(new m.sendPartyAction(1,t))
            }
        },
        clear: {
            description: "Clear the chat",
            triggers: ["clear"],
            action: function(e) {
                for (var t = document.getElementsByClassName("chat-active-tab")[0].getAttribute("name"), n = document.getElementById("chat-body-" + t); n.firstChild != null; )
                    n.removeChild(n.firstChild)
            }
        },
        info: {
            description: "Get your current ID",
            triggers: ["info"],
            action: function(e) {
                i.playerId > 0 ? i.selfMsg("Your id is " + i.playerId) : i.selfMsg("You need to be connected to a server to use this command.")
            }
        },
        scrimmenu: {
            description: "Show the scrimmage menu",
            triggers: ["scrimmenu"],
            action: function(e) {
                ze.css("display", ze.css("display") == "none" ? "block" : "none")
            }
        },
        join: {
            description: "Join a party with a code",
            triggers: ["join", "j"],
            action: function(e) {
                var t = e[0];
                t != null && t.length != 0 && i.sendPacket(new m.sendPartyJoin(t))
            }
        },
        private: {
            description: "Set the party to private",
            triggers: ["private"],
            action: function(e) {
                i.sendPacket(new m.sendPartyAction(4,1))
            }
        },
        public: {
            description: "Allow players to join the party without an invite",
            triggers: ["public"],
            action: function(e) {
                i.sendPacket(new m.sendPartyAction(4,0))
            }
        },
        reset_chat: {
            description: "Reset chat size",
            triggers: ["resetchat"],
            action: function(e) {
                $("#chat-panel").css("width", "360px"),
                $("#chat-panel").css("height", "250px")
            }
        },
        reset_chat_tabs: {
            description: "Reset chat tab settings",
            triggers: ["resetchattabs"],
            action: function(e) {
                u._ChatTabs = JSON.parse(JSON.stringify(aa)),
                Lt(),
                tn()
            }
        },
        spectate: {
            description: "Spectate a player",
            triggers: ["spectate", "s"],
            action: function(e) {
                var t = parseInt(e[0]);
                isNaN(t) ? i.selfMsg("Invalid ID.") : i.sendPacket(new m.sendSpectate(t))
            }
        },
        disconnect: {
            description: "Disconnect from the server",
            triggers: ["disconnect"],
            action: function(e) {
                i.disconnect()
            }
        },
        account: {
            description: "Get Account UID",
            triggers: ["account"],
            action: function(e) {
                if (le === null) {
                    i.selfMsg("You are not logged in.");
                    return
                }
                i.selfMsg("UID: " + le.uid)
            }
        },
        block: {
            description: "Block or unblock a player by ID",
            triggers: ["block", "b"],
            action: function(e) {
                var t = parseInt(e[0]);
                if (!isNaN(t)) {
                    var n = Oa(t);
                    i.selfMsg(n)
                }
            }
        }
    }
      , cn = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"]
      , Fa = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"]
      , Ra = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
      , Wi = ["", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
    var Ha = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave", "letter_a", "letter_b", "letter_c", "letter_d", "letter_e", "letter_f", "letter_g", "letter_h", "letter_i", "letter_j", "letter_k", "letter_l", "letter_m", "letter_n", "letter_o", "letter_p", "letter_q", "letter_r", "letter_s", "letter_t", "letter_u", "letter_v", "letter_w", "letter_x", "letter_y", "letter_z", "number_0", "number_1", "number_2", "number_3", "number_4", "number_5", "number_6", "number_7", "number_8", "number_9"]
      , ln = []
      , Va = null;
    const ja = [16708096, 13294378, 9356863, 3847498, 42578, 42612, 108702, 43973, 44527, 36821, 29371, 21669, 3027346, 6696593, 9578383, 12393101, 15532172, 15468916, 15537243, 15538497, 15538980, 15951139, 16225309, 16761359]
      , zi = ja.length * 100 - 1;
    function Jn(e) {
        return Ra[e >> 4 & 15] + Ra[e & 15]
    }
    function Wa(e, t) {
        var n = e >> 16 & 255
          , a = e >> 8 & 255
          , s = e & 255;
        return n = Math.max(0, Math.min(255, Math.floor(n * t))),
        a = Math.max(0, Math.min(255, Math.floor(a * t))),
        s = Math.max(0, Math.min(255, Math.floor(s * t))),
        n << 16 | a << 8 | s
    }
    function dn(e) {
        if (e <= 0)
            return "0:00";
        var t = Math.floor(e / 3600)
          , n = Math.floor((e - t * 3600) / 60)
          , a = e - t * 3600 - n * 60;
        return n < 10 && t > 0 && (n = "0" + n),
        a < 10 && (a = "0" + a),
        (t > 0 ? t + ":" : "") + n + ":" + a
    }
    function un(e) {
        var t = e.toString().split(".");
        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        t.join(".")
    }
    function Yi(e) {
        for (var t = e.split(""), n = 0; n < t.length; n++) {
            var a = t[n];
            a == "_" && (n + 1 < t.length && (t[n + 1] = t[n + 1].toUpperCase()),
            t[n] = " "),
            n == 0 && (t[n] = t[n].toUpperCase())
        }
        return t.join("")
    }
    function Gi(e) {
        if (e.indexOf("#") === 0 && (e = e.slice(1)),
        e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
        e.length !== 6)
            throw new Error("Invalid HEX color.");
        var t = parseInt(e.slice(0, 2), 16)
          , n = parseInt(e.slice(2, 4), 16)
          , a = parseInt(e.slice(4, 6), 16);
        return t * .299 + n * .587 + a * .114 > 186 ? "#000000" : "#FFFFFF"
    }
    function za(e) {
        if (e.dataTransfer.items) {
            for (var t = 0; t < e.dataTransfer.items.length; t++)
                if (e.dataTransfer.items[t].kind === "file") {
                    var n = e.dataTransfer.items[t].getAsFile();
                    return n
                }
        } else
            for (var t = 0; t < e.dataTransfer.files.length; t++)
                return e.dataTransfer.files[t]
    }
    function Xi(e, t, n) {
        var a = new Blob([t],{
            type: n
        });
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(a, e);
        else {
            var s = document.createElement("a")
              , c = URL.createObjectURL(a);
            s.href = c,
            s.download = e,
            document.body.appendChild(s),
            s.click(),
            setTimeout(function() {
                document.body.removeChild(s),
                window.URL.revokeObjectURL(c)
            }, 0)
        }
    }
    const it = {
        ALL: 3,
        PARTY: 2,
        SELF: 1,
        NONE: 0
    }
      , qi = {
        DEFAULT: 0,
        SHORT: 1
    }
      , Ki = {
        THICK: 9,
        THIN: 2,
        NONE: 0
    }
      , Ji = {
        ULTRA: 1,
        HIGH: .8,
        MEDIUM: .7,
        LOW: .5,
        VERYLOW: .25
    }
      , ee = {
        MAP: 0,
        MODE: 1,
        SIZE: 2,
        STARTMASS: 3,
        LOCK: 4,
        PLAYER_UPDATE: 5,
        PLAYER_LIST: 6,
        VIRUS_DENSITY: 7,
        PUBLIC: 8,
        PASSWORD: 9,
        NAME: 10,
        RESPAWN_DELAY: 11,
        AUTOSPLIT: 12
    }
      , Zi = {
        0: "Spectator",
        1: "Blue",
        2: "Red",
        3: "Green",
        4: "Yellow",
        5: "Purple",
        6: "Orange",
        7: "Pink",
        8: "Brown"
    }
      , Ya = {
        FAILURE: 1,
        SUCCESS: 0
    }
      , vt = {
        ERROR: -1,
        LOADING: 1,
        LOADED: 2
    }
      , Oe = {
        ALL: 1,
        PARTY: 2,
        WHISPER: 4,
        SYSTEM: 8,
        ADMIN: 16
    }
      , st = {
        UNKNOWN: -1,
        ALIVE: 0,
        DEAD: 1,
        SPECTATE: 2
    };
    var Ga = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
    function De(e, t, n) {
        this.font = e,
        this.size = t,
        this.outlineColor = n || "#000"
    }
    const Ot = {
        0: new De("Verdana",54),
        1: new De("ampad",75),
        2: new De("burnstown",81),
        3: new De("chlorinar",75),
        4: new De("Facon",75),
        5: new De("archistico",75),
        6: new De("breakaway",81),
        7: new De("conformity",81),
        8: new De("electroharmonix",70),
        9: new De("pwjoyeuxnoel",70),
        10: new De("leckerli-one",75),
        101: new De("IceCaps",81,"#00c9ff"),
        102: new De("BrazierFlame",81,"#e25822")
    }
      , Xa = Ot[0];
    function Qi(e) {
        return e > 0 && Ot[e] ? Ot[e] : Xa
    }
    for (var hn in Ot) {
        var pn = Ot[hn]
          , es = new FontFaceObserver(pn.font);
        es.load(null, 1e4).then( () => {}
        , () => {}
        ),
        hn > 0 && hn < 64 && $("#spNameFont").append('<option value="' + hn + '" style="font-family:' + pn.font + '">' + pn.font.charAt(0).toUpperCase() + pn.font.slice(1) + "</option>")
    }
    function ts() {
        if (Fe.consented) {
            var e = localStorage.getItem("version")
              , t = version.split(".");
            if (e === null) {
                localStorage.setItem("version", version);
                return
            }
            e = e.split("."),
            (t[0] != e[0] || t[1] != e[1]) && (localStorage.setItem("version", version),
            te(q),
            Me($("#popup-changelog")))
        }
    }
    $(window).focus(function() {
        xn = !0
    }),
    $(window).blur(function() {
        xn = !1
    });
    function ns() {
        if (!xn && "Notification"in window && Notification.permission === "granted")
            var e = new Notification("Your match has started.",{
                icon: "https://gota.io/assets/images/favicon.png"
            })
    }
    var Fe = new as;
    function as() {
        this.consented = !1,
        this.policyID = "CP_0918_01",
        this.policyLink = "https://gota.io/policies/privacy.html?v=" + this.policyID + "#cookies",
        this.consentOption = $("#cc_acceptCookies"),
        this.consentCookie = {
            name: "cookieConsent",
            value: "yes+" + this.policyID,
            exdays: 365 * 2,
            path: "/web"
        },
        this.cookieBanner = {
            banner: $("#cookie-banner"),
            decline: $("#declineCookies"),
            accept: $("#acceptCookies"),
            handlersBound: !1
        },
        this.init = function() {
            this.backwardsCompatable(),
            this.consentOption.on("change", function(t) {
                Fe.consentHandler($(this).prop("checked"))
            });
            var e = this.getConsentCookie();
            e === this.consentCookie.value ? (this.consentHandler(!0),
            this.showCookieBanner(!1),
            Yn()) : (this.consentHandler(!1),
            this.showCookieBanner(!0))
        }
        ,
        this.consentHandler = function(e) {
            this.consented = e,
            aiptag.consented = e,
            this.consentOption.prop("checked", e),
            e ? (this.createConsentCookie(),
            this.showCookieBanner(!1),
            Bi(),
            Ci(),
            $("#no_cookie_consent").hide(),
            zt && firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(function() {}),
            $("#no_cookie_consent").hide(),
            Yn(),
            setTimeout(function() {
                !firebase.auth().currentUser && $("#account-loader").is(":visible") && ($("#account-loader").hide(),
                $("#guest").show())
            }, 1e3),
            typeof window < "u" && typeof window.gtag == "function" && window.gtag("consent", "update", {
                ad_storage: "granted",
                analytics_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted"
            })) : (this.deleteConsentCookie(),
            firebase.auth().currentUser !== null && firebase.auth().signOut().then(function() {}).catch(t => {}
            ),
            zt && firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).catch(function() {}),
            $("#authed").hide(),
            $("#account-loader").hide(),
            $("#guest").hide(),
            $("#no_cookie_consent").show(),
            this.showCookieBanner(!0),
            typeof window < "u" && typeof window.gtag == "function" && window.gtag("consent", "update", {
                ad_storage: "denied",
                analytics_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied"
            }))
        }
        ,
        this.showCookieBanner = function(e) {
            e ? (!this.cookieBanner.handlersBound && (this.bindBannerHandlers(),
            this.cookieBanner.handlersBound = !0),
            this.cookieBanner.banner.slideDown()) : this.cookieBanner.banner.slideUp()
        }
        ,
        this.bindBannerHandlers = function() {
            this.cookieBanner.decline.on("click", function(e) {
                Fe.consentHandler(!1),
                Fe.showCookieBanner(!1)
            }),
            this.cookieBanner.accept.on("click", function(e) {
                Fe.consentHandler(!0),
                Fe.showCookieBanner(!1)
            }),
            $("#cookie-banner .description").append(' <a href="' + this.policyLink + '" target="_blank">Our Cookie Policy!</a>')
        }
        ,
        this.createConsentCookie = function() {
            var e = new Date;
            e.setTime(e.getTime() + this.consentCookie.exdays * 24 * 60 * 60 * 1e3);
            var t = "expires=" + e.toUTCString();
            document.cookie = this.consentCookie.name + "=" + this.consentCookie.value + ";" + t + ";path=" + this.consentCookie.path + ";"
        }
        ,
        this.deleteConsentCookie = function() {
            document.cookie = this.consentCookie.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.consentCookie.path + ";"
        }
        ,
        this.getConsentCookie = function() {
            for (var e = this.consentCookie.name + "=", t = decodeURIComponent(document.cookie), n = t.split(";"), a = 0; a < n.length; a++) {
                for (var s = n[a]; s.charAt(0) == " "; )
                    s = s.substring(1);
                if (s.indexOf(e) == 0)
                    return s.substring(e.length, s.length)
            }
            return !1
        }
        ,
        this.backwardsCompatable = function() {
            for (var e = "cookieconsent_status=", t = decodeURIComponent(document.cookie), n = t.split(";"), a = null, s = 0; s < n.length; s++) {
                for (var c = n[s]; c.charAt(0) == " "; )
                    c = c.substring(1);
                c.indexOf(e) == 0 && (a = c.substring(e.length, c.length))
            }
            a === "allow" && this.createConsentCookie(),
            document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
        }
    }
    function is() {
        try {
            typeof aiptag < "u" && aiptag.cmd && aiptag.cmd.display ? aiptag.cmd.display.push(function() {
                try {
                    if (typeof aipDisplayTag < "u") {
                        console.log("[AD] Refreshing ad slot via game function"),
                        aipDisplayTag.refresh("GOT_gota-io_336x280"),
                        window.adDisplayAttempts && (window.adDisplayAttempts = 0);
                        var e = document.getElementById("GOT_gota-io_336x280")
                          , t = document.getElementById("adblock-fallback");
                        if (e) {
                            if (e.style.display = "block",
                            e.style.visibility = "visible",
                            e.style.opacity = "1",
                            !e.hasVisibilityWatcher) {
                                var n = new MutationObserver(function(a) {
                                    a.forEach(function(s) {
                                        if (s.type === "attributes" && (s.attributeName === "style" || s.attributeName === "class")) {
                                            var c = s.target;
                                            if (c.style.display === "none" || c.style.visibility === "hidden" || c.style.opacity === "0") {
                                                var d = c.children.length > 0 || c.innerHTML.trim().length > 0 || c.querySelector("iframe") !== null;
                                                d ? (console.log("[AD] Restoring hidden ad visibility"),
                                                c.style.display = "block",
                                                c.style.visibility = "visible",
                                                c.style.opacity = "1",
                                                t && (t.style.display = "none")) : t && (t.style.display = "block")
                                            }
                                        }
                                    })
                                }
                                );
                                n.observe(e, {
                                    attributes: !0,
                                    attributeFilter: ["style", "class"]
                                }),
                                e.hasVisibilityWatcher = !0,
                                console.log("[AD] Enhanced visibility observer attached")
                            }
                            setTimeout(function() {
                                var a = e.children.length > 0 || e.innerHTML.trim().length > 0 || e.querySelector("iframe") !== null;
                                a && t ? (t.style.display = "none",
                                console.log("[AD] Ad content found after refresh, hiding fallback")) : !a && t && (t.style.display = "block",
                                console.log("[AD] No ad content after refresh, showing fallback"))
                            }, 2e3)
                        }
                    } else
                        console.log("[AD] aipDisplayTag not available for refresh")
                } catch (a) {
                    console.error("[AD] Error in ad refresh callback:", a)
                }
            }) : console.log("[AD] aiptag not available for ad refresh")
        } catch (e) {
            console.error("[AD] Error setting up ad refresh:", e)
        }
    }
    var qa = new ss;
    function ss() {
        this.playCounter = 0,
        this.incrementPlay = function() {
            return Je ? !1 : (this.playCounter++,
            this.playCounter % 5 == 1)
        }
    }
    function rs() {
        typeof aipPlayer < "u" && aiptag.cmd.player.push(function() {
            adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_CENTERPLAYER: !1,
                LOADING_TEXT: "Advertisement Loading...",
                PREROLL_ELEM: document.getElementById("preroll"),
                AIP_COMPLETE: function() {
                    i.spectate ? i.spec() : i.play()
                }
            })
        })
    }
    rs(),
    si()
}),
function() {
    var fe = function() {
        var B = !0;
        return function(X, H) {
            var L = B ? function() {
                if (H) {
                    var D = H.apply(X, arguments);
                    return H = null,
                    D
                }
            }
            : function() {}
            ;
            return B = !1,
            L
        }
    }()
      , v = fe(this, function() {
        var B;
        try {
            var X = Function('return (function() {}.constructor("return this")( ));');
            B = X()
        } catch {
            B = window
        }
        for (var H = B.console = B.console || {}, L = ["log", "warn", "info", "error", "exception", "table", "trace"], D = 0; D < L.length; D++) {
            var M = fe.constructor.prototype.bind(fe)
              , V = L[D]
              , Z = H[V] || M;
            M.__proto__ = fe.bind(fe),
            M.toString = Z.toString.bind(Z),
            H[V] = M
        }
    });
    if (v(),
    window.__GOTA_TELEM_INIT__)
        return;
    window.__GOTA_TELEM_INIT__ = !0;
    var E = typeof WeakSet < "u" ? new WeakSet : [];
    function z(B) {
        return B ? E instanceof Array ? E.indexOf(B) !== -1 : E.has(B) : !0
    }
    function R(B) {
        B && (E instanceof Array ? E.indexOf(B) === -1 && E.push(B) : E.add(B))
    }
    function Y(B) {
        for (var X = 2166136261, H = 0; H < B.length; H++)
            X ^= B.charCodeAt(H),
            X = (X >>> 0) * 16777619;
        return (X >>> 0).toString(36).toUpperCase()
    }
    function U(B, X, H, L, D, M) {
        var V = navigator || {}
          , Z = V.userAgent || ""
          , i = {
            tv: 2
        };
        try {
            var m = window[B];
            m && m._envSig && (i.mx = m._envSig)
        } catch {}
        var O = 0
          , ae = 0;
        try {
            window.process && process.versions && process.versions.electron && (O |= 1)
        } catch {}
        try {
            /Electron/i.test(Z) && (O |= 2)
        } catch {}
        try {
            typeof window.require == "function" && (O |= 4)
        } catch {}
        try {
            window.process && window.process.type === "renderer" && (O |= 8)
        } catch {}
        try {
            V.webdriver && (ae |= 1)
        } catch {}
        i.el = O,
        i.hv = ae,
        i.ua = Y(Z),
        i.pf = V.userAgentData && V.userAgentData.platform || V.platform || "";
        var S = [];
        O & 1 && S.push("EP"),
        O & 2 && S.push("EU"),
        O & 4 && S.push("RF"),
        O & 8 && S.push("PR"),
        ae & 1 && S.push("WD"),
        S.length && (i.mk = S.join(","));
        try {
            for (var G = U.toString(), j = G.length, se = 0, re = 0; re < G.length; re++)
                se = se + G.charCodeAt(re) & 65535;
            i.ti = {
                l: j,
                c: se
            },
            (j < 150 || j > 1200) && (S.push ? S : []).push("TM"),
            S.length && !i.mk ? i.mk = S.join(",") : S.length && (i.mk = i.mk + "," + S[S.length - 1]);
            try {
                i.dq = (((j ^ se ^ 24375) & 65535) >>> 0).toString(36).toUpperCase()
            } catch {}
        } catch {}
        return JSON.stringify(i)
    }
    function be(B, X) {
        for (var H = X >>> 0, L = 0; L < B.length; L++)
            H ^= H << 13,
            H ^= H >>> 17,
            H ^= H << 5,
            H >>>= 0,
            B[L] ^= H & 255
    }
    window.sendEnvTelemetry = function(B, X, H, L, D, M, V) {
        if (!(!B || B.readyState !== 1) && !z(B)) {
            R(B);
            var Z = U(L || "");
            try {
                var i = new TextEncoder
                  , m = i.encode(Z);
                if (m.length > 1200)
                    return;
                var O = (X ^ H ^ D ^ M ^ V) >>> 0;
                be(m, O);
                var ae = new ArrayBuffer(3 + m.length)
                  , S = new DataView(ae);
                S.setUint8(0, 125),
                S.setUint16(1, m.length, !0);
                for (var G = 0; G < m.length; G++)
                    S.setUint8(3 + G, m[G]);
                B.send(ae)
            } catch {}
        }
    }
}();
const Za = [/^https?:\/\/(?:www\.)?gota\.io(\/|$)/i, /^https?:\/\/(?:www\.)?skin-data\.gota\.io(\/|$)/i, /^https?:\/\/(?:www\.)?account-data\.gota\.io(\/|$)/i];
ds.init({
    apiKey: "96791eff-5bf9-4434-b5a6-6b1474961521",
    service: "gota",
    tracePropagationTargets: Za,
    consoleCapture: !1,
    disableReplay: !0,
    advancedNetworkCapture: !1
});
(function() {
    try {
        const v = E => {
            try {
                const z = new URL(typeof E == "string" ? E : E.toString(),window.location.href);
                return z.origin === window.location.origin ? !1 : Za.some(R => R.test(z.href))
            } catch {
                return !1
            }
        }
        ;
        if (typeof window.fetch == "function") {
            const E = window.fetch.bind(window);
            window.fetch = (z, R={}) => {
                try {
                    const Y = z && typeof z == "object" && "url"in z ? z.url : z;
                    if (Y && v(Y))
                        if (z instanceof Request) {
                            const U = new Headers(z.headers || {});
                            U.set("Timing-Allow-Origin", window.location.origin);
                            const be = new Request(z,{
                                headers: U
                            });
                            return E(be)
                        } else {
                            const U = new Headers(R && R.headers || {});
                            U.set("Timing-Allow-Origin", window.location.origin);
                            const be = {
                                ...R,
                                headers: U
                            };
                            return E(z, be)
                        }
                } catch {}
                return E(z, R)
            }
        }
        if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
            const {open: E, send: z} = window.XMLHttpRequest.prototype;
            window.XMLHttpRequest.prototype.open = function(R, Y, U, be, B) {
                try {
                    this.__hdx_tao_url = Y
                } catch {}
                return E.call(this, R, Y, U, be, B)
            }
            ,
            window.XMLHttpRequest.prototype.send = function(R) {
                try {
                    const Y = this.__hdx_tao_url;
                    if (Y && v(Y))
                        try {
                            this.setRequestHeader("Timing-Allow-Origin", window.location.origin)
                        } catch {}
                } catch {}
                return z.call(this, R)
            }
        }
    } catch {}
}
)();
//# sourceMappingURL=index-DlqVcU7C.js.map
