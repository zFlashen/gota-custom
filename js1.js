!function () {
    function j(a5) {
        var a6 = $('#' + a5)[0];
        if (a6) {
            a6.classList.contains('side-menu-transition') || a6.classList.add('side-menu-transition');
            var a7 = document.getElementById('main-right');
            if (a7) {
                for (var a8 = a7.children, a9 = 0; a9 < a8.length; a9++) {
                    var aa = a8[a9];
                    aa !== a6 && (aa.classList && aa.classList.contains('side-menu-transition') && aa.classList.remove('menu-open'), 'none' !== getComputedStyle(aa).display && (aa.style.display = 'none'));
                }
            }
            a6.classList.contains('menu-open') && 'none' !== getComputedStyle(a6).display || (a6.style.display = 'block', a6.offsetWidth, a6.classList.add('menu-open'));
        }
    }
    var q = {
            'grad': 0.9,
            'turn': 360,
            'rad': 360 / (2 * Math.PI)
        }, z = function (a5) {
            return 'string' == typeof a5 ? a5.length > 0 : 'number' == typeof a5;
        }, A = function (a5, a6, a7) {
            return void 0 === a6 && (a6 = 0), void 0 === a7 && (a7 = Math.pow(10, a6)), Math.round(a7 * a5) / a7 + 0;
        }, B = function (a5, a6, a7) {
            return void 0 === a6 && (a6 = 0), void 0 === a7 && (a7 = 1), a5 > a7 ? a7 : a5 > a6 ? a5 : a6;
        }, D = function (a5) {
            return (a5 = isFinite(a5) ? a5 % 360 : 0) > 0 ? a5 : a5 + 360;
        }, F = function (a5) {
            return {
                'r': B(a5.r, 0, 255),
                'g': B(a5.g, 0, 255),
                'b': B(a5.b, 0, 255),
                'a': B(a5.a)
            };
        }, G = function (a5) {
            return {
                'r': A(a5.r),
                'g': A(a5.g),
                'b': A(a5.b),
                'a': A(a5.a, 3)
            };
        }, J = function (a5) {
            var a6 = a5.toString(16);
            return a6.length < 2 ? '0' + a6 : a6;
        }, K = function (a5) {
            var a6 = a5.r, a7 = a5.g, a8 = a5.b, a9 = a5.a, aa = Math.max(a6, a7, a8), ab = aa - Math.min(a6, a7, a8), ac = ab ? aa === a6 ? (a7 - a8) / ab : aa === a7 ? 2 + (a8 - a6) / ab : 4 + (a6 - a7) / ab : 0;
            return {
                'h': 60 * (ac < 0 ? ac + 6 : ac),
                's': aa ? ab / aa * 100 : 0,
                'v': aa / 255 * 100,
                'a': a9
            };
        }, L = function (a5) {
            var a6 = a5.h, a7 = a5.s, a8 = a5.v, a9 = a5.a;
            a6 = a6 / 360 * 6;
            a7 /= 100;
            a8 /= 100;
            var aa = Math.floor(a6), ab = a8 * (1 - a7), ac = a8 * (1 - (a6 - aa) * a7), ad = a8 * (1 - (1 - a6 + aa) * a7), ae = aa % 6;
            return {
                'r': 255 * [
                    a8,
                    ac,
                    ab,
                    ab,
                    ad,
                    a8
                ][ae],
                'g': 255 * [
                    ad,
                    a8,
                    a8,
                    ac,
                    ab,
                    ab
                ][ae],
                'b': 255 * [
                    ab,
                    ab,
                    ad,
                    a8,
                    a8,
                    ac
                ][ae],
                'a': a9
            };
        }, M = function (a5) {
            return {
                'h': D(a5.h),
                's': B(a5.s, 0, 100),
                'l': B(a5.l, 0, 100),
                'a': B(a5.a)
            };
        }, N = function (a5) {
            return {
                'h': A(a5.h),
                's': A(a5.s),
                'l': A(a5.l),
                'a': A(a5.a, 3)
            };
        }, O = function (a5) {
            return L((a7 = (a6 = a5).s, {
                'h': a6.h,
                's': (a7 *= ((a8 = a6.l) < 50 ? a8 : 100 - a8) / 100) > 0 ? 2 * a7 / (a8 + a7) * 100 : 0,
                'v': a8 + a7,
                'a': a6.a
            }));
            var a6, a7, a8;
        }, Q = function (a5) {
            return {
                'h': (a6 = K(a5)).h,
                's': (a9 = (200 - (a7 = a6.s)) * (a8 = a6.v) / 100) > 0 && a9 < 200 ? a7 * a8 / 100 / (a9 <= 100 ? a9 : 200 - a9) * 100 : 0,
                'l': a9 / 2,
                'a': a6.a
            };
            var a6, a7, a8, a9;
        }, W = {
            'string': [
                [
                    function (a5) {
                        var a6 = /^#([0-9a-f]{3,8})$/i.exec(a5);
                        return a6 ? (a5 = a6[1]).length <= 4 ? {
                            'r': parseInt(a5[0] + a5[0], 16),
                            'g': parseInt(a5[1] + a5[1], 16),
                            'b': parseInt(a5[2] + a5[2], 16),
                            'a': 4 === a5.length ? A(parseInt(a5[3] + a5[3], 16) / 255, 2) : 1
                        } : 6 === a5.length || 8 === a5.length ? {
                            'r': parseInt(a5.substr(0, 2), 16),
                            'g': parseInt(a5.substr(2, 2), 16),
                            'b': parseInt(a5.substr(4, 2), 16),
                            'a': 8 === a5.length ? A(parseInt(a5.substr(6, 2), 16) / 255, 2) : 1
                        } : null : null;
                    },
                    'hex'
                ],
                [
                    function (a5) {
                        var a6 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i.exec(a5) || /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i.exec(a5);
                        return a6 ? a6[2] !== a6[4] || a6[4] !== a6[6] ? null : F({
                            'r': Number(a6[1]) / (a6[2] ? 0.39215686274509803 : 1),
                            'g': Number(a6[3]) / (a6[4] ? 0.39215686274509803 : 1),
                            'b': Number(a6[5]) / (a6[6] ? 0.39215686274509803 : 1),
                            'a': void 0 === a6[7] ? 1 : Number(a6[7]) / (a6[8] ? 100 : 1)
                        }) : null;
                    },
                    'rgb'
                ],
                [
                    function (a5) {
                        var a6 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i.exec(a5) || /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i.exec(a5);
                        if (!a6) {
                            return null;
                        }
                        var a7, a8, a9 = M({
                                'h': (a7 = a6[1], a8 = a6[2], void 0 === a8 && (a8 = 'deg'), Number(a7) * (q[a8] || 1)),
                                's': Number(a6[3]),
                                'l': Number(a6[4]),
                                'a': void 0 === a6[5] ? 1 : Number(a6[5]) / (a6[6] ? 100 : 1)
                            });
                        return O(a9);
                    },
                    'hsl'
                ]
            ],
            'object': [
                [
                    function (a5) {
                        var a6 = a5.r, a7 = a5.g, a8 = a5.b, a9 = a5.a, aa = void 0 === a9 ? 1 : a9;
                        return z(a6) && z(a7) && z(a8) ? F({
                            'r': Number(a6),
                            'g': Number(a7),
                            'b': Number(a8),
                            'a': Number(aa)
                        }) : null;
                    },
                    'rgb'
                ],
                [
                    function (a5) {
                        var a6 = a5.h, a7 = a5.s, a8 = a5.l, a9 = a5.a, aa = void 0 === a9 ? 1 : a9;
                        if (!z(a6) || !z(a7) || !z(a8)) {
                            return null;
                        }
                        var ab = M({
                            'h': Number(a6),
                            's': Number(a7),
                            'l': Number(a8),
                            'a': Number(aa)
                        });
                        return O(ab);
                    },
                    'hsl'
                ],
                [
                    function (a5) {
                        var a6 = a5.h, a7 = a5.s, a8 = a5.v, a9 = a5.a, aa = void 0 === a9 ? 1 : a9;
                        if (!z(a6) || !z(a7) || !z(a8)) {
                            return null;
                        }
                        var ab, ac = (ab = {
                                'h': Number(a6),
                                's': Number(a7),
                                'v': Number(a8),
                                'a': Number(aa)
                            }, {
                                'h': D(ab.h),
                                's': B(ab.s, 0, 100),
                                'v': B(ab.v, 0, 100),
                                'a': B(ab.a)
                            });
                        return L(ac);
                    },
                    'hsv'
                ]
            ]
        }, X = function (a5, a6) {
            for (var a7 = 0; a7 < a6.length; a7++) {
                var a8 = a6[a7][0](a5);
                if (a8) {
                    return [
                        a8,
                        a6[a7][1]
                    ];
                }
            }
            return [
                null,
                void 0
            ];
        }, Y = function (a5, a6) {
            var a7 = Q(a5);
            return {
                'h': a7.h,
                's': B(a7.s + 100 * a6, 0, 100),
                'l': a7.l,
                'a': a7.a
            };
        }, Z = function (a5) {
            return (299 * a5.r + 587 * a5.g + 114 * a5.b) / 1000 / 255;
        }, a0 = function (a5, a6) {
            var a7 = Q(a5);
            return {
                'h': a7.h,
                's': a7.s,
                'l': B(a7.l + 100 * a6, 0, 100),
                'a': a7.a
            };
        }, a1 = function () {
            function a5(a6) {
                this.parsed = function (a7) {
                    return 'string' == typeof a7 ? X(a7.trim(), W.string) : 'object' == typeof a7 && null !== a7 ? X(a7, W.object) : [
                        null,
                        void 0
                    ];
                }(a6)[0];
                this.rgba = this.parsed || {
                    'r': 0,
                    'g': 0,
                    'b': 0,
                    'a': 1
                };
            }
            return a5.prototype.isValid = function () {
                return null !== this.parsed;
            }, a5.prototype.brightness = function () {
                return A(Z(this.rgba), 2);
            }, a5.prototype.isDark = function () {
                return Z(this.rgba) < 0.5;
            }, a5.prototype.isLight = function () {
                return Z(this.rgba) >= 0.5;
            }, a5.prototype.toHex = function () {
                return a7 = (a6 = G(this.rgba)).r, a8 = a6.g, a9 = a6.b, ab = (aa = a6.a) < 1 ? J(A(255 * aa)) : '', '#' + J(a7) + J(a8) + J(a9) + ab;
                var a6, a7, a8, a9, aa, ab;
            }, a5.prototype.toRgb = function () {
                return G(this.rgba);
            }, a5.prototype.toRgbString = function () {
                return a7 = (a6 = G(this.rgba)).r, a8 = a6.g, a9 = a6.b, (aa = a6.a) < 1 ? 'rgba(' + a7 + ', ' + a8 + ', ' + a9 + ', ' + aa + ')' : 'rgb(' + a7 + ', ' + a8 + ', ' + a9 + ')';
                var a6, a7, a8, a9, aa;
            }, a5.prototype.toHsl = function () {
                return N(Q(this.rgba));
            }, a5.prototype.toHslString = function () {
                return a7 = (a6 = N(Q(this.rgba))).h, a8 = a6.s, a9 = a6.l, (aa = a6.a) < 1 ? 'hsla(' + a7 + ', ' + a8 + '%, ' + a9 + '%, ' + aa + ')' : 'hsl(' + a7 + ', ' + a8 + '%, ' + a9 + '%)';
                var a6, a7, a8, a9, aa;
            }, a5.prototype.toHsv = function () {
                return a6 = K(this.rgba), {
                    'h': A(a6.h),
                    's': A(a6.s),
                    'v': A(a6.v),
                    'a': A(a6.a, 3)
                };
                var a6;
            }, a5.prototype.invert = function () {
                return a2({
                    'r': 255 - (a6 = this.rgba).r,
                    'g': 255 - a6.g,
                    'b': 255 - a6.b,
                    'a': a6.a
                });
                var a6;
            }, a5.prototype.saturate = function (a6) {
                return void 0 === a6 && (a6 = 0.1), a2(Y(this.rgba, a6));
            }, a5.prototype.desaturate = function (a6) {
                return void 0 === a6 && (a6 = 0.1), a2(Y(this.rgba, -a6));
            }, a5.prototype.grayscale = function () {
                return a2(Y(this.rgba, -1));
            }, a5.prototype.lighten = function (a6) {
                return void 0 === a6 && (a6 = 0.1), a2(a0(this.rgba, a6));
            }, a5.prototype.darken = function (a6) {
                return void 0 === a6 && (a6 = 0.1), a2(a0(this.rgba, -a6));
            }, a5.prototype.rotate = function (a6) {
                return void 0 === a6 && (a6 = 15), this.hue(this.hue() + a6);
            }, a5.prototype.alpha = function (a6) {
                return 'number' == typeof a6 ? a2({
                    'r': (a7 = this.rgba).r,
                    'g': a7.g,
                    'b': a7.b,
                    'a': a6
                }) : A(this.rgba.a, 3);
                var a7;
            }, a5.prototype.hue = function (a6) {
                var a7 = Q(this.rgba);
                return 'number' == typeof a6 ? a2({
                    'h': a6,
                    's': a7.s,
                    'l': a7.l,
                    'a': a7.a
                }) : A(a7.h);
            }, a5.prototype.isEqual = function (a6) {
                return this.toHex() === a2(a6).toHex();
            }, a5;
        }(), a2 = function (a5) {
            return a5 instanceof a1 ? a5 : new a1(a5);
        };
    !function () {
        function a5(aa, ab, ac, ad, ae, af, ag, ah) {
            var ai = 0, aj = 0, ak = Array.isArray(af) && af.length ? af : a9;
            null == ag && (ag = 2654435761);
            null == ah && (ah = 2779096485);
            for (var al = 0; al < ak.length; al++) {
                switch (ak[al]) {
                case 0:
                    ai = Math.imul(ab >>> 0, ag >>> 0) >>> 0;
                    break;
                case 1:
                    aj = (ac >>> 0 ^ ai) >>> 0;
                    break;
                case 2:
                    aj = aj + ((255 & aa) << 16) >>> 0;
                    break;
                case 3:
                    aj = aj + (65535 & ad) >>> 0;
                    break;
                case 4:
                    aj = ae(aj >>> 0, ac >>> 0) >>> 0;
                    break;
                case 5:
                    aj = (aj ^ ah >>> 0) >>> 0;
                    break;
                case 6:
                    aj = (aj ^ aj >>> 7) >>> 0;
                }
            }
            var am = new Array(7).fill(false);
            for (al = 0; al < ak.length; al++) {
                (an = ak[al]) >= 0 && an <= 6 && (am[an] = true);
            }
            for (var an = 0; an <= 6; an++) {
                if (!am[an]) {
                    switch (an) {
                    case 0:
                        ai = Math.imul(ab >>> 0, ag >>> 0) >>> 0;
                        break;
                    case 1:
                        aj = (ac >>> 0 ^ ai) >>> 0;
                        break;
                    case 2:
                        aj = aj + ((255 & aa) << 16) >>> 0;
                        break;
                    case 3:
                        aj = aj + (65535 & ad) >>> 0;
                        break;
                    case 4:
                        aj = ae(aj >>> 0, ac >>> 0) >>> 0;
                        break;
                    case 5:
                        aj = (aj ^ ah >>> 0) >>> 0;
                        break;
                    case 6:
                        aj = (aj ^ aj >>> 7) >>> 0;
                    }
                }
            }
            return (aj >>> 0).toString(36).toUpperCase();
        }
        function a6(aa) {
            for (var ab = 2166136261, ac = 0; ac < aa.length; ac++) {
                ab = 16777619 * ((ab ^= aa.charCodeAt(ac)) >>> 0);
            }
            return (ab >>> 0).toString(36).toUpperCase();
        }
        ;
        if (!window['__ak8saulr']) {
            var a8 = new Uint8Array([
                    0,
                    97,
                    115,
                    109,
                    1,
                    0,
                    0,
                    0,
                    1,
                    7,
                    1,
                    96,
                    4,
                    127,
                    127,
                    127,
                    127,
                    1,
                    127,
                    3,
                    2,
                    1,
                    0,
                    7,
                    7,
                    1,
                    3,
                    114,
                    111,
                    116,
                    0,
                    0,
                    10,
                    23,
                    1,
                    21,
                    0,
                    32,
                    3,
                    32,
                    2,
                    65,
                    7,
                    113,
                    116,
                    32,
                    3,
                    65,
                    32,
                    32,
                    2,
                    65,
                    7,
                    113,
                    107,
                    118,
                    114,
                    11
                ]), a9 = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ];
            if (function (aa) {
                    Object.defineProperty(window, '__ak8saulr', {
                        'value': function (ab, ac, ad, ae, af, ag, ah, ai) {
                            var aj = a5(ab, ac, ad, ae, aa, af, ag, ah);
                            if (ab >= 4) {
                                try {
                                    var ak = parseInt(aj, 36);
                                    if (!isNaN(ak)) {
                                        var al = 7 & ai;
                                        ak = ((ak = ak >>> 0 ^ ai >>> 0) << al | ak >>> 32 - al) >>> 0;
                                        aj = ((ak ^= ai >>> 3) >>> 0).toString(36).toUpperCase();
                                    }
                                } catch (am) {
                                }
                            }
                            return aj;
                        },
                        'writable': false
                    });
                    try {
                        !function () {
                            var ab = window['__ak8saulr'];
                            if (ab && !ab['_envSig']) {
                                var ac = window.navigator || {}, ad = ac.userAgent || '', ae = ac.userAgentData && ac.userAgentData.platform || ac.platform || '', af = 0;
                                try {
                                    af = ac.plugins && ac.plugins.length || 0;
                                } catch (ao) {
                                }
                                var ag = '', ah = '', ai = 0;
                                try {
                                    var aj = document.createElement('canvas'), ak = aj.getContext('webgl') || aj.getContext('experimental-webgl');
                                    if (ak) {
                                        ai = 1;
                                        var al = ak.getExtension('WEBGL_debug_renderer_info');
                                        al && (ag = ak.getParameter(al.UNMASKED_VENDOR_WEBGL) || '', ah = ak.getParameter(al.UNMASKED_RENDERER_WEBGL) || '');
                                    }
                                } catch (ap) {
                                }
                                var am = 0;
                                try {
                                    window.process && window.process.versions && window.process.versions.electron && (am |= 1);
                                } catch (aq) {
                                }
                                try {
                                    /Electron/i.test(ad) && (am |= 2);
                                } catch (ar) {
                                }
                                var an = [
                                    a6(ad),
                                    a6(ae),
                                    af,
                                    ai,
                                    a6(ag),
                                    a6(ah),
                                    am
                                ].join('.');
                                ab['_envSig'] = an;
                                ab['_env'] = {
                                    'uaH': a6(ad),
                                    'pf': ae,
                                    'pc': af,
                                    'gl': ai,
                                    'gvH': a6(ag),
                                    'grH': a6(ah),
                                    'eb': am
                                };
                            }
                        }();
                    } catch (ab) {
                    }
                }(function (aa, ab) {
                    var ac = 7 & ab;
                    return (aa << ac | aa >>> 32 - ac) >>> 0;
                }), 'object' == typeof WebAssembly) {
                try {
                    WebAssembly.instantiate(a8).then(function (aa) {
                        try {
                            var ab = aa.instance.exports.rot, ac = window['__ak8saulr'];
                            Object.defineProperty(window, '__ak8saulr', {
                                'value': function (ad, ae, af, ag, ah, ai, aj, ak) {
                                    var al = a5(ad, ae, af, ag, function (ao, ap) {
                                        return ab(0, 0, 0 | ap, 0 | ao) >>> 0;
                                    }, ah, ai, aj);
                                    if (ad >= 4) {
                                        try {
                                            var am = parseInt(al, 36);
                                            if (!isNaN(am)) {
                                                var an = 7 & ak;
                                                am = ((am = am >>> 0 ^ ak >>> 0) << an | am >>> 32 - an) >>> 0;
                                                al = ((am ^= ak >>> 3) >>> 0).toString(36).toUpperCase();
                                            }
                                        } catch (ao) {
                                        }
                                    }
                                    return al;
                                },
                                'writable': false
                            });
                            try {
                                ac && ac['_envSig'] && !window['__ak8saulr']['_envSig'] && (window['__ak8saulr']['_envSig'] = ac['_envSig'], window['__ak8saulr']['_env'] = ac['_env']);
                                window['__ak8saulr']['_wasm'] = 1;
                            } catch (ad) {
                            }
                        } catch (ae) {
                        }
                    }).catch(function () {
                    });
                } catch (aa) {
                }
            }
        }
    }();
    const a4 = new Map();
    $(function () {
        function a5() {
            cC && (cE = requestAnimationFrame(a5), a9());
        }
        function a6() {
            var e7 = window.innerWidth, e8 = window.innerHeight, e9 = 1 || 1;
            bR.style.width = e7 + 'px';
            bR.style.height = e8 + 'px';
            bR.width = Math.round(e7 * e9);
            bR.height = Math.round(e8 * e9);
            bG && bG.renderer && (bG.renderer.resolution !== e9 && (bG.renderer.resolution = e9), bG.renderer.resize(bR.width, bR.height));
            bG && bG.stage && (bG.stage.position.x = e7 * e9 / 2, bG.stage.position.y = e8 * e9 / 2);
        }
        function a7(e7) {
            const e8 = new bF.Graphics();
            e8.beginFill(16777215);
            e8.drawCircle(e7, e7, e7);
            e8.endFill();
            const e9 = bG.renderer.generateTexture(e8, bF.SCALE_MODES.LINEAR, window.devicePixelRatio);
            return e8.destroy(), e9;
        }
        function a8(e7) {
            for (var e8 in d5)
                'u' == e8.charAt(0) && e7(e8);
        }
        function a9() {
            const e7 = 'undefined' != typeof performance && performance.now ? performance.now() : Date.now(), e8 = e7 - bW;
            bW = e7;
            const e9 = Math.min(e8 / d1.rAnimationDelay, 1);
            cr += e8;
            let eb = false;
            const ec = (bU.scale > 0.12 || d1.cDisableAutoFoodHiding) && !d1.cHideFood;
            if (bL.visible = ec, ec) {
                bU['_foodValues'] && bU['_foodValuesVersion'] === bU['_foodVersionCounter'] || (bU['_foodValues'] = Object.values(bU.foodObjects), bU['_foodValuesVersion'] = bU['_foodVersionCounter']);
                const em = bU['_foodValues'];
                for (let eo = 0, ep = em.length; eo < ep; eo++) {
                    const eq = em[eo];
                    eq.steps > 0 && (eq.animate(e9), eb = true);
                    eq.handleFood();
                }
            }
            bU['_bucketValues'] && bU['_bucketValuesVersion'] === bU['_bucketVersionCounter'] || (bU['_bucketValues'] = Object.values(bU.bucket), bU['_bucketValuesVersion'] = bU['_bucketVersionCounter']);
            const ed = bU['_bucketValues'];
            for (let er = 0, es = ed.length; er < es; er++) {
                const eu = ed[er];
                eu.steps > 0 && (eu.animate(e9), eb = true);
                eu.handle();
            }
            let ef = 0, eg = 0, eh = 0, ei = 0;
            bU['_myCellValues'] && bU['_myCellValuesVersion'] === bU['_myCellVersionCounter'] || (bU['_myCellValues'] = Object.values(bU.myCells), bU['_myCellValuesVersion'] = bU['_myCellVersionCounter']);
            const ej = bU['_myCellValues'];
            for (let ev = 0, ew = ej.length; ev < ew; ev++) {
                const ex = ej[ev];
                ef += ex.x;
                eg += ex.y;
                ei += ex.size;
                eh++;
            }
            if (eh > 0) {
                bU.centerX = ef / eh;
                bU.centerY = eg / eh;
                bU.centerSteps = 0;
                const ey = Math.max(bR.height / 1080, bR.width / 1920);
                if (d1.cDisableAutoZoom) {
                    bU.scale_base = 0.2 * ey;
                } else {
                    const ez = Math.min(32 / ei, 1);
                    bU.scale_base = Math.pow(ez, 0.4) * ey;
                }
            }
            bU.centerSteps > 0 && (bU.centerX += (bU.centerX_ - bU.centerX) * e9, bU.centerY += (bU.centerY_ - bU.centerY) * e9);
            const ek = bU.scale_base * bU.mouseZoom, el = bU.scale;
            if (bU.scale = 0.9 * bU.scale + 0.1 * ek, bU.scale !== el && (bK.scale.set(bU.scale), eb = true), bK.pivot.x === bU.centerX && bK.pivot.y === bU.centerY || (bK.pivot.set(bU.centerX, bU.centerY), eb = true), bU.isConnected() && false && !bU.mouseFrozen) {
                let eA = bU['_cachedWorldMouseX'], eB = bU['_cachedWorldMouseY'];
                if (void 0 !== eA && bU['_cachedWorldMouseScale'] === bU.scale && bU['_cachedMouseRawX'] === bU.mouseRawX && bU['_cachedMouseRawY'] === bU.mouseRawY && bU['_cachedPivotX'] === bK.pivot.x && bU['_cachedPivotY'] === bK.pivot.y || (eA = bK.pivot.x - bG.stage.position.x / bU.scale + bU.mouseRawX * 1 / bU.scale, eB = bK.pivot.y - bG.stage.position.y / bU.scale + bU.mouseRawY * 1 / bU.scale, bU['_cachedWorldMouseX'] = eA, bU['_cachedWorldMouseY'] = eB, bU['_cachedWorldMouseScale'] = bU.scale, bU['_cachedMouseRawX'] = bU.mouseRawX, bU['_cachedMouseRawY'] = bU.mouseRawY, bU['_cachedPivotX'] = bK.pivot.x, bU['_cachedPivotY'] = bK.pivot.y), bU.lineSplitEnabled && bU.lineSplitLocked) {
                    const eC = bU.calculateOptimalLineSplitMouse();
                    eA = eC.x;
                    eB = eC.y;
                }
                bU.sendMousePacket(eA, eB);
            }
            if (0 += e8, !d1.cHideMinimap && false && (function (eD) {
                    if (bU.serverData.border.enabled) {
                        bT.clearRect(0, 0, bS.width, bS.height);
                        bT.font = '12px Calibri';
                        for (var eE = 0; eE < bU.party.length; eE++) {
                            var eF = bU.party[eE];
                            eF.state === dZ.ALIVE && eF.id != bU.playerId && (b1(bT, eF.name, eF.x, eF.y, 4, eF.mmColor, true), eF.x += (eF.x_ - eF.x) * eD, eF.y += (eF.y_ - eF.y) * eD);
                        }
                        b1(bT, bU.name, bU.centerX, bU.centerY, 6, '#fefefe', false);
                    }
                }(e9), 0 = 0, eb = true), d1.cShowCoordinates && (function () {
                    var eD = cO.minimapCoordsEl || cO.minimapCoords || document.getElementById('minimap-coordinates');
                    if (eD) {
                        var eE = 'X: ' + bU.centerX.toFixed(0) + ' Y: ' + bU.centerY.toFixed(0);
                        eD['_lastCoordText'] !== eE && (eD.style.color !== d5.uiForegroundColor && (eD.style.color = d5.uiForegroundColor), eD.textContent = eE, eD['_lastCoordText'] = eE);
                    }
                }(), eb = true), function () {
                    if (!d1.cShowTracer || true || !bU.isConnected()) {
                        return bN.visible && (bN.visible = false), false;
                    }
                    if (!bU['_myCellValues'] || 0 === bU['_myCellValues'].length) {
                        return bN.visible && (bN.visible = false), false;
                    }
                    const eD = bW;
                    if (bN.visible && bU['_lastTracerDraw'] && eD - bU['_lastTracerDraw'] < 33 && bU['_cachedWorldMouseX'] === bU['_lastTracerMouseX'] && bU['_cachedWorldMouseY'] === bU['_lastTracerMouseY']) {
                        return false;
                    }
                    bQ ? bQ.clear() : (bQ = new bF.Graphics(), bN.addChild(bQ));
                    const eE = void 0 !== bU['_cachedWorldMouseX'] ? bU['_cachedWorldMouseX'] : 0, eF = void 0 !== bU['_cachedWorldMouseY'] ? bU['_cachedWorldMouseY'] : 0, eG = d1['_tracerColorCached'] || bF.utils.string2hex('#ffffff');
                    bQ.lineStyle(2, eG, d1.rTracerOpacity / 100);
                    const eH = bU['_myCellValues'];
                    for (let eI = 0, eJ = eH.length; eI < eJ; eI++) {
                        const eK = eH[eI];
                        bQ.moveTo(eK.x, eK.y);
                        bQ.lineTo(eE, eF);
                    }
                    return bN.visible = true, bU['_lastTracerDraw'] = eD, bU['_lastTracerMouseX'] = eE, bU['_lastTracerMouseY'] = eF, true;
                }() && (eb = true), bU.buffHolder.update(), (eb || bU['_forceNextRender'] || e7 - (bU['_lastForcedRenderTs'] || 0) > 500) && (bG.renderer.render(bG.stage), bU['_lastForcedRenderTs'] = e7, bU['_forceNextRender'] = false), cs++, cr >= 1000) {
                cO.playerFps.textContent = cs;
                const eD = Date.now();
                bU.serverData.resetType > 0 && bU.serverData.resetTime > 0 ? (cO.resetInfo.show(), cO.resetTime.html(by(Math.max(0, Math.floor((bU.serverData.resetTime - eD) / 1000))))) : cO.resetInfo.hide();
                bU.respawnCooldown > 0 && bU.respawnCooldown >= eD ? (cO.respawnInfo.show(), cO.respawnCooldown.html(by(Math.max(0, Math.ceil((bU.respawnCooldown - eD) / 1000))))) : bU.respawnCooldown < 0 ? (cO.respawnInfo.show(), cO.respawnCooldown.html('NEVER')) : cO.respawnInfo.hide();
                cr = 0;
                cs = 0;
            }
            bU.playerRegistry.handleUpdatedPlayers();
        }
        function ab() {
            d1.cShowBorder && bU.serverData.border.enabled ? (bP || (bP = new bF.Graphics(), bJ.addChild(bP)), bP.clear(), bP.lineStyle(d5.rBorderSize, bF.utils.string2hex(a2(d5.uiGameBorderColor).toHex())), bP.drawRect(bU.serverData.border.left, bU.serverData.border.top, bU.serverData.border.width, bU.serverData.border.height), bP.visible = true) : bP && (bP.visible = false);
        }
        function ac() {
            if (bG && bG.renderer) {
                try {
                    bG.renderer.destroy(true);
                } catch (e8) {
                }
            }
            if (bH && bH.destroy) {
                try {
                    bH.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (e9) {
                }
            }
            if (bK && bK.destroy) {
                try {
                    bK.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (eb) {
                }
            }
            if (bL && bL.destroy) {
                try {
                    bL.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (ec) {
                }
            }
            if (bM && bM.destroy) {
                try {
                    bM.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (ed) {
                }
            }
            if (bN && bN.destroy) {
                try {
                    bN.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (ef) {
                }
            }
            if (bI && bI.destroy) {
                try {
                    bI.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (eg) {
                }
            }
            if (bO && bO.destroy) {
                try {
                    bO.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (eh) {
                }
            }
            if (bP && bP.destroy) {
                try {
                    bP.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (ei) {
                }
            }
            if (bQ && bQ.destroy) {
                try {
                    bQ.destroy({
                        'children': true,
                        'texture': true,
                        'baseTexture': true
                    });
                } catch (ej) {
                }
            }
            for (var e7 in cF)
                cF[e7] && (clearInterval(cF[e7]), cF[e7] = null);
            void 0 !== cD && cD && (clearInterval(cD), cD = null);
            void 0 !== cE && cE && (cancelAnimationFrame(cE), cE = null);
            (function () {
                for (var ek in cG) {
                    for (var el = cG[ek], em = 0; em < el.length; em++) {
                        var eo = el[em];
                        try {
                            eo.isProperty ? eo.element['on' + eo.event] = null : eo.isFirebase ? eo.element.off(eo.event, eo.handler) : eo.element && eo.element.removeEventListener && eo.element.removeEventListener(eo.event, eo.handler);
                        } catch (ep) {
                        }
                    }
                    cG[ek] = [];
                }
                'undefined' != typeof $ && ($(window).off(), $(document).off());
            }());
            bU && bU.mousePacketInterval && (clearTimeout(bU.mousePacketInterval), bU.mousePacketInterval = null);
            bg();
        }
        function ad() {
            this.socket = null;
            this.currentServer = null;
            this.currentServerName = null;
            this.spectate = false;
            this.name = '';
            this.playerId = 0;
            this.bucket = {};
            this.foodObjects = {};
            this.myCells = {};
            this.playerRegistry = new ag();
            this.buffHolder = new bo();
            this.centerX = 0;
            this.centerY = 0;
            this.centerX_ = 0;
            this.centerY_ = 0;
            this.centerSteps = 0;
            this.scale = 0.5;
            this.scale_ = 0.5;
            this.scale_base = 0.5;
            this.mouseZoom = 1;
            this.offsetX = 0;
            this.offsetY = 0;
            this.mouseRawX = 0;
            this.mouseRawY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.mouseFrozen = false;
            this.lineSplitEnabled = false;
            this.lineSplitDirection = {
                'x': 0,
                'y': 0
            };
            this.lineSplitLocked = false;
            this.lineSplitMouseX = 0;
            this.lineSplitMouseY = 0;
            this.lineSplitPhaseStart = 0;
            this.lineSplitPhaseDelayMs = 100;
            this.party = [];
            this.partyIds = {};
            this.subPanelOverride = false;
            this.serverData = {
                'hasSentSubPanel': false,
                'border': {},
                'maxCells': 16
            };
            this.score = 0;
            this.respawnCooldown = 0;
            this.customGameMap = null;
            this.accountListeners = {};
            this.pingInterval = null;
            this.lastMousePacket = {
                'x': 0,
                'y': 0,
                'time': 0
            };
            this.mousePacketInterval = null;
            this.pendingMousePacket = null;
            this.MOUSE_PACKET_RATE = 25;
            this.clearStats();
            this.visibilityPingTimer = null;
            this.lastVisibilityChange = 0;
        }
        function af(e7) {
            this.id = e7;
            this.type = 0;
            this.nameCache = null;
            this.skin = null;
            this.playerId = 0;
            this.color = null;
            this.x = 0;
            this.y = 0;
            this.x_ = 0;
            this.y_ = 0;
            this.size = 0;
            this.size_ = 0;
            this.steps = 0;
            this.massLastAmount = -1;
            this.cache = null;
            this['_massCacheLastRedraw'] = 0;
            this['_massChangeThreshold'] = 5;
            this['_massRegenIntervalMs'] = 250;
        }
        function ag() {
            this.bucket = {};
            this.defaultData;
            this.updatedPlayers = [];
            this.init = function () {
                this.defaultData = new ah(0);
                this.defaultData.name = '';
                this.defaultData.cellColor = 11184810;
            };
            this.add = function (e7) {
                this.bucket[e7.id] = e7;
            };
            this.remove = function (e7) {
                this.bucket[e7].onDelete();
                delete this.bucket[e7];
            };
            this.clear = function () {
                for (var e7 in this.bucket)
                    this.remove(e7);
            };
            this.getPlayer = function (e7) {
                return this.bucket[e7];
            };
            this.getPlayerById = function (e7) {
                var e8 = this.bucket[e7];
                return null != e8 ? e8 : this.defaultData;
            };
            this.updatePlayer = function (e7) {
                e7.cacheUpdate = true;
                this.updatedPlayers.push(e7);
            };
            this.handleUpdatedPlayers = function () {
                for (; this.updatedPlayers.length > 0;) {
                    this.updatedPlayers.shift().cacheUpdate = false;
                }
            };
            this.init();
        }
        function ah(e7) {
            this.id = e7;
            this.name;
            this.skin;
            this.skinCache;
            this.cellColor;
            this.nameColor = '#fff';
            this.flags = 0;
            this.effect = 0;
            this.nameFont = 0;
            this.lowerName = false;
            this.isServerBot = false;
            this.nameCache = null;
            this.cacheUpdate = false;
            this.spiked = 0;
            this.setFlags = function (e8) {
                this.flags = e8;
                8 & ~this.flags ? 16 & ~this.flags ? this.spiked = 0 : this.spiked = 2 : this.spiked = 1;
            };
            this.parseEffect = function (e8) {
                e8 >= 64 ? (e8 -= 64, this.lowerName = true) : this.lowerName = false;
                this.effect = e8;
            };
            this.getNameCache = function (e8) {
                if (e8 || null == this.nameCache) {
                    var e9, eb, ec = function (ed) {
                            return ed > 0 && e1[ed] ? e1[ed] : e2;
                        }(this.nameFont);
                    ec == e2 ? (e9 = 'bold', eb = 0) : (e9 = 'normal', eb = 9);
                    this.nameCache ? (this.nameCache.text = this.name, this.nameCache.style.fontFamily = ec.font, this.nameCache.style.stroke = ec.outlineColor, this.nameCache.style.fontWeight = e9, this.nameCache.style.fontSize = ec.size, this.nameCache.style.fill = this.nameColor, this.nameCache.updateText()) : this.nameCache = new bF.Text(this.name, {
                        'fontFamily': ec.font,
                        'fontWeight': e9,
                        'fontSize': ec.size,
                        'fill': this.nameColor,
                        'stroke': ec.outlineColor,
                        'strokeThickness': eb
                    });
                    this.nameCache.width;
                }
                return this.nameCache;
            };
            this.setSkin = function (e8) {
                0 == e8.length ? (this.skin = null, this.skinCache = null) : e8 !== this.skin && (this.skin = e8, this.skinCache = null);
            };
            this.getSkin = function () {
                if (null != this.skinCache) {
                    return this.skinCache;
                }
                if (null != this.skin) {
                    if (bY[this.skin]) {
                        if (bY[this.skin] == dX.LOADED) {
                            return this.skinCache = bX[this.skin], this.skinCache;
                        }
                        bY[this.skin] == dX.ERROR && (this.skin = null);
                    } else {
                        if (bY[this.skin] = dX.LOADING, this.skin.endsWith('.gif')) {
                            var e8 = this.skin, e9 = this;
                            gifFrames({
                                'url': e8,
                                'frames': 'all',
                                'cumulative': false,
                                'outputType': 'canvas'
                            }).then(function (ec) {
                                var ed = new bq();
                                ed.loadFromFrameData(ec);
                                bY[e8] = dX.LOADED;
                                bX[e8] = ed;
                            }).catch(function (ec) {
                                e9.skin = null;
                            });
                        } else {
                            var eb = new Image();
                            eb.crossOrigin = '';
                            e8 = this.skin;
                            eb.addEventListener('load', function () {
                                var ec = document.createElement('canvas');
                                ec.width = 512;
                                ec.height = 512;
                                var ed = ec.getContext('2d');
                                ed.beginPath();
                                ed.arc(256, 256, 256, 0, cH, false);
                                ed.closePath();
                                ed.clip();
                                ed.drawImage(eb, 0, 0, 512, 512);
                                var ef = bF.Texture.from(ec);
                                bY[e8] = dX.LOADED;
                                bX[e8] = ef;
                            });
                            eb.addEventListener('error', function () {
                                bY[e8] = dX.ERROR;
                            });
                            eb.src = e8;
                        }
                    }
                }
                return null;
            };
            this.onDelete = function () {
                this.nameCache && this.nameCache.destroy();
            };
        }
        function ai() {
        }
        function aj(e7, e8, e9) {
            for (var eb = 0; eb < e9.length; eb++) {
                e8.setUint8(e7, e9.charCodeAt(eb));
                e7++;
            }
            e8.setUint8(e7, 0);
        }
        function ak(e7, e8, e9) {
            for (var eb = 0; eb < e9.length; eb++) {
                e8.setUint16(e7, e9.charCodeAt(eb), true);
                e7 += 2;
            }
            e8.setUint16(e7, 0, true);
        }
        function al(e7) {
            for (var e8 = '';;) {
                var e9 = e7.getUint8(e7.offset);
                if (e7.offset++, 0 == e9) {
                    break;
                }
                e8 += String.fromCharCode(e9);
            }
            return e8;
        }
        function am(e7) {
            for (var e8 = '';;) {
                var e9 = e7.getUint16(e7.offset, true);
                if (e7.offset += 2, 0 == e9) {
                    break;
                }
                e8 += String.fromCharCode(e9);
            }
            return e8;
        }
        function ao(e7, e8) {
            if (e8) {
                switch (e7.code) {
                case 'auth/user-disabled':
                    alert('This account has been permanently suspended by an administrator.');
                    break;
                case 'auth/popup-closed-by-user':
                    break;
                default:
                    alert(e7.message + ' (' + e7.code + ')');
                }
            }
        }
        function ap(e7, e8) {
            var e9 = '', eb = '', ec = 'white';
            if (e8.flags.STAFF) {
                eb = 'Gota.io Staff';
                e9 = 'build';
                ec = 'royalblue';
            } else {
                if (!e8.flags.VERIFIED) {
                    return;
                }
                eb = 'Verified Player';
                e9 = 'check_circle';
            }
            var ed = document.createElement('i');
            ed.className = 'material-icons';
            ed.id = 'user-badge';
            ed.innerText = e9;
            ed.style.color = ec;
            $(ed).attr('data-balloon', eb);
            $(ed).attr('data-balloon-pos', 'right');
            $(e7).append(ed);
        }
        function aq(e7, e8) {
            var e9 = document.createElement('i');
            return e9.className = 'material-icons', e9.innerText = e7, e9.setAttribute('data-balloon', e8), e9.setAttribute('data-balloon-pos', 'up'), e9;
        }
        function ar(e7, e8, e9, eb) {
            var ec = document.createElement('li');
            ec.className = 'user-embed menu-sub-bg2';
            ec.style.backgroundColor = d5.uiMenuHeaderBackgroundColor;
            var ed = document.createElement('img');
            ed.src = e7.avatar;
            ed.alt = e7.username;
            ec.appendChild(ed);
            var ef = document.createElement('div');
            ef.className = 'info';
            var eg = document.createElement('div');
            eg.className = 'username';
            eg.innerText = e7.username;
            ef.appendChild(eg);
            ap(eg, e7);
            var eh, ei = document.createElement('div'), ej = false, ek = null;
            e9 ? (eh = e7.presence.server, ek = eh.charAt(0).toUpperCase() + eh.slice(1), e7.presence.timestamp + 60000 < new Date().getTime() || void 0 === e7.presence.id ? (ei.className = 'status offline', ei.innerText = 'Not playing on any server') : (ej = true, ei.className = 'status ' + ('ONLINE' === e7.presence.status ? 'online' : 'spectate'), ei.innerText = ('ONLINE' === e7.presence.status ? 'Playing ' : 'Spectating ') + e7.presence.gamemode + ' on ' + ek + ' (ID ' + e7.presence.id + ')')) : (ei.className = 'status pending', ei.innerText = 'Pending Friend Request');
            ef.appendChild(ei);
            var el = document.createElement('div');
            if (el.className = 'actions', eg.addEventListener('click', function (eq) {
                    as(e7, $('#main-social'));
                }), e9 && ej) {
                var em = aq('input', 'Join Server');
                em.addEventListener('click', function (eq) {
                    aN(ek);
                    bU.play();
                    bU.selfMsg(e7.username + '\'s ID is ' + e7.presence.id);
                    b4($('#main-social'));
                });
                el.appendChild(em);
            }
            if (!e9) {
                var eo = aq('done', 'Add as Friend');
                eo.isHandlingRequest = false;
                eo.addEventListener('click', function (eq) {
                    eo.isHandlingRequest || (eo.isHandlingRequest = true, firebase.auth().currentUser.getIdToken().then(er => {
                        fetch('https://accounts.gota.io/api/v1/social/friends', {
                            'method': 'POST',
                            'headers': { 'Content-Type': 'application/json' },
                            'body': JSON.stringify({
                                'token': er,
                                'target': e7.uid,
                                'action': 2
                            })
                        }).then(es => es.json()).then(es => {
                            200 !== es.code && alert(es.message);
                            eo.isHandlingRequest = false;
                        }).catch(es => {
                            alert(es);
                            eo.isHandlingRequest = false;
                        });
                    }).catch(er => {
                        ao(er, true);
                        eo.isHandlingRequest = false;
                    }));
                });
                el.appendChild(eo);
            }
            var ep = aq('block', 'Remove Friend');
            return ep.isHandlingRequest = false, ep.addEventListener('click', function (eq) {
                !ep.isHandlingRequest && confirm('Are you sure you want to remove "' + e7.username + '" as your friend?') && (ep.isHandlingRequest = true, firebase.auth().currentUser.getIdToken().then(er => {
                    fetch('https://accounts.gota.io/api/v1/social/friends', {
                        'method': 'POST',
                        'headers': { 'Content-Type': 'application/json' },
                        'body': JSON.stringify({
                            'token': er,
                            'target': e7.uid,
                            'action': 4
                        })
                    }).then(es => es.json()).then(es => {
                        alert(es.message);
                        200 === es.code && (firebase.database().ref(cx.callbacks[e7.uid]).off(), cx.elements[e7.uid].remove(), delete cx.callbacks[e7.uid], delete cx.elements[e7.uid]);
                        ep.isHandlingRequest = false;
                    }).catch(es => {
                        alert(es);
                        ep.isHandlingRequest = false;
                    });
                }).catch(er => {
                    ao(er, true);
                    ep.isHandlingRequest = false;
                }));
            }), el.appendChild(ep), ec.appendChild(ef), ec.appendChild(el), eb ? e8.appendChild(ec) : ec;
        }
        function as(e7, e8, e9) {
            e8 && b4(e8);
            $('#profile-username').text(e7.username);
            $('#profile-avatar').attr('src', e7.avatar);
            $('#profile-avatar').attr('alt', e7.username);
            $('#profile-level').html('Level ' + e7.levelData.level + '&nbsp;&nbsp;&nbsp;[' + bz(e7.levelData.xp_current) + '/' + bz(e7.levelData.xp_needed) + ']');
            e7.title && e7.title > 0 && dF[e7.title] ? $('#profile-title').text(dF[e7.title]) : $('#profile-title').text('');
            $('#profile-name').off('click');
            e7.uid == cu.uid ? ($('#profile-name').on('click', function () {
                $('#popup-profile').hide();
                b5($('#popup-account-username'));
            }), $('#profile-name').css('cursor', 'pointer')) : $('#profile-name').css('cursor', 'default');
            e7.flags.STAFF ? $('#profile-avatar').addClass('spin') : $('#profile-avatar').removeClass('spin');
            ap($('#profile-username'), e7);
            $('#profile-close-btn').off('click');
            $('#profile-close-btn').on('click', function () {
                e8 && b2(e8);
                b4($('#popup-profile'));
            });
            b2($('#popup-profile'));
        }
        function au(e7) {
            if (!cw) {
                var e8 = $('#social-friends .user-list')[0], e9 = $('#social-friends .user-list')[1];
                $('#social-uid').text(e7.uid);
                firebase.database().ref('/friendships/' + e7.uid).on('value', function (eb) {
                    if (null === eb.val()) {
                        var ec = document.createElement('div'), ed = document.createElement('span');
                        return ec.className = 'title-text center', ed.innerText = 'You have no friends \uD83D\uDE25', ec.appendChild(ed), void e8.appendChild(ec);
                    }
                    var ef = 0, eg = eb.val(), eh = false;
                    Object.keys(eg).map(ei => {
                        var ej = eg[ei];
                        if (!ej && !eh) {
                            return eh = true, void firebase.auth().currentUser.getIdToken().then(el => {
                                fetch('https://accounts.gota.io/api/v1/social/friends/pending', {
                                    'method': 'POST',
                                    'headers': { 'Content-Type': 'application/json' },
                                    'body': JSON.stringify({ 'token': el })
                                }).then(em => em.json()).then(em => {
                                    200 === em.code && em.profiles.forEach(eo => {
                                        if (cx.pendingFriends.includes(eo) || cx.pendingFriends.push(eo.uid), cx.elements[eo.uid]) {
                                            var ep = ar(eo, cx.elements[eo.uid], false, false);
                                            return e9.replaceChild(ep, cx.elements[eo.uid]), void (cx.elements[ei] = ep);
                                        }
                                        cx.elements[eo.uid] = ar(eo, e9, false, true);
                                    });
                                });
                            }).catch(el => ao(el, false));
                        }
                        if (!cx.callbacks[ei]) {
                            var ek = '/users/' + ei;
                            cx.callbacks[ei] = ek;
                            firebase.database().ref(ek).on('value', function (el) {
                                if (null !== el.val()) {
                                    var em = el.val();
                                    if (cx.timestamps[em.uid] = em.presence.timestamp, cx.pendingFriends.includes(ei)) {
                                        cx.elements[ei].remove();
                                        var eo = ar(em, cx.elements[ei], true, false);
                                        return e8.appendChild(eo), void (cx.elements[ei] = eo);
                                    }
                                    if (cx.elements[ei]) {
                                        return eo = ar(em, cx.elements[ei], true, false), e8.replaceChild(eo, cx.elements[ei]), void (cx.elements[ei] = eo);
                                    }
                                    cx.elements[ei] = ar(em, e8, true, true);
                                    cO.friendOnlineCount.text(function () {
                                        var ep = 0, eq = new Date().getTime();
                                        for (var er in cx.timestamps) {
                                            var es = cx.timestamps[er];
                                            es + 60000 < eq || void 0 === es || ep++;
                                        }
                                        return ep;
                                    }() + ' online');
                                }
                            });
                        }
                        ej && ef++;
                    });
                    $('#social-friends-count').text(ef);
                });
                null && clearInterval(null);
                null = setInterval(function () {
                    if (!document.hidden) {
                        for (var eb in cx.timestamps) {
                            if (!cx.timestamps.hasOwnProperty(eb)) {
                                return;
                            }
                            var ec = cx.timestamps[eb];
                            if (ec + 60000 < new Date().getTime() || void 0 === ec) {
                                var ed = cx.elements[eb].children[1].children[1];
                                ed.innerText = 'Not playing on any server';
                                ed.className = 'status offline';
                                var ef = cx.elements[eb].children[2].children[0];
                                'Join Server' === ef.dataset.balloon && ef.remove();
                            }
                        }
                    }
                }, 60000);
                cw = true;
            }
        }
        function av() {
            void 0 !== window.grecaptcha && (cA = window.grecaptcha, window.grecaptcha = void 0, cA.ready(function () {
            }));
        }
        function aw() {
            var e7 = $('#food-color-list');
            if (e7.empty(), 0 != d5['_FoodColors'].length) {
                try {
                    for (var e8 in d5['_FoodColors']) {
                        var e9 = d5['_FoodColors'][e8];
                        e7.append('<div c=\'' + e9 + '\' style=\'background:' + e9 + ';color:' + bB(e9) + ';\'><span>' + e9 + '</span><div><button class=\'btn-food-color\'>X</button></div></div>');
                    }
                    $('.btn-food-color').on('click', function () {
                        for (var eb, ec, ed = $(this).parents().eq(1).attr('c'); -1 !== (eb = d5['_FoodColors'].indexOf(ed));) {
                            d5['_FoodColors'].splice(eb, 1);
                            ec = true;
                        }
                        ec && aw();
                    });
                } catch (eb) {
                    d5['_FoodColors'] = [];
                    e7.empty();
                }
                ax();
            } else {
                ax();
            }
        }
        function ax() {
            for (var e7 of (d9 = [], d5['_FoodColors']))
                d9.push(bF.utils.string2hex(e7));
            if (bU && bU.foodObjects) {
                for (var e8 in bU.foodObjects)
                    bU.foodObjects[e8] && (bU.foodObjects[e8].needsPixiUpdate = true);
            }
        }
        function ay(e7) {
            var e8 = $('.keybinds-btn-selected');
            if (d3 = false, 0 != e8.length) {
                var e9 = e8.first();
                e8.removeClass('keybinds-btn-selected');
                d2[e9.attr('id')] = 27 != e7 ? e7 : -1;
                az(e9);
                aA();
            }
        }
        function az(e7) {
            var e8, e9 = d2[e7.attr('id')];
            e7.html((e8 = e9) > 0 ? dL[e8].toUpperCase() : '&nbsp;');
        }
        function aA() {
            di && clearTimeout(di);
            di = setTimeout(function () {
                try {
                    bg();
                } catch (e7) {
                }
            }, 150);
        }
        function aB() {
            var e7 = document.getElementById('logo');
            d1.cDisableEventSkins || !cR.enabled ? e7.style.backgroundImage = 'url(\'./images/logo.png\')' : cR.enabled && (e7.style.backgroundImage = 'url(\'./images/events/' + cR.key + '/logo.png\')');
        }
        function aC() {
            var e7, e8;
            !d1.cDisableEventSkins && cR.enabled ? (e7 = 'images/events/' + cR.key, e8 = '/spike_mother_happy.png') : (e7 = 'images', e8 = '/spike_mother.png');
            var e9 = new Image();
            e9.addEventListener('load', function () {
                if (c1 = bF.Texture.from(e9), bU) {
                    for (var ed in bU.bucket) {
                        var ef = bU.bucket[ed];
                        3 == ef.type && (ef.needsPixiUpdate = true);
                    }
                }
            }, { 'once': true });
            var eb = new Image();
            eb.addEventListener('load', function () {
                if (c2 = bF.Texture.from(eb), bU) {
                    for (var ed in bU.bucket) {
                        var ef = bU.bucket[ed];
                        4 == ef.type && (ef.needsPixiUpdate = true);
                    }
                }
            }, { 'once': true });
            var ec = new Image();
            ec.addEventListener('load', function () {
                if (c3 = bF.Texture.from(ec), bU) {
                    for (var ed in bU.bucket) {
                        var ef = bU.bucket[ed];
                        4 == ef.type && (ef.needsPixiUpdate = true);
                    }
                }
            }, { 'once': true });
            e9.src = e7 + '/spike.png';
            eb.src = e7 + '/spike_mother.png';
            ec.src = e7 + e8;
        }
        function aD() {
            dj && clearTimeout(dj);
            dj = setTimeout(function () {
                dj = null;
                aE && aE() ? $('#performance-refresh').hide() : $('#performance-refresh').css('display', 'table-row');
            }, 200);
        }
        function aE() {
            try {
                if (!bG) {
                    return false;
                }
                var e7 = bR;
                if (!e7) {
                    return false;
                }
                var e8 = !d1.cDisableAA, e9 = d1.sRenderType, eb = 'CANVAS' === e9, ec = 'WEBGL' === e9, ed = bG.renderer;
                if (!ed) {
                    return false;
                }
                var ef = ed.type && ed.type === bF.RENDERER_TYPE.CANVAS, eg = ed.type && ed.type === bF.RENDERER_TYPE.WEBGL;
                if (ed.options && ed.options.antialias === e8 && (eb && ef || ec && eg || !eb && !ec)) {
                    return true;
                }
                var eh = e7.width, ei = e7.height;
                try {
                    ed.destroy(false);
                } catch (el) {
                }
                var ej, ek = {
                        'view': e7,
                        'width': eh,
                        'height': ei,
                        'antialias': e8,
                        'backgroundAlpha': 0,
                        'resolution': 1 || 1
                    };
                return ej = eb && bF.CanvasRenderer ? new bF.CanvasRenderer(ek) : ec && bF.Renderer ? new bF.Renderer({
                    ...ek,
                    'forceCanvas': false
                }) : bF.autoDetectRenderer({
                    ...ek,
                    'forceCanvas': eb
                }), bG.renderer = ej, ej.resize(eh, ei), bU && (bU['_forceNextRender'] = true), true;
            } catch (em) {
                return false;
            }
        }
        function aF() {
            d1.cShowCoordinates ? ($('#minimap-canvas').css({ 'border-top': '2px solid rgba(255, 255, 255, .2)' }), $('#minimap-panel').css({ 'height': '270px' })) : ($('#minimap-canvas').css({ 'border-top': '0' }), $('#minimap-panel').css({ 'height': '250px' }));
        }
        function aG(e7) {
            3 === (e7 = e7.replace('#', '')).length && (e7 = e7.split('').map(e9 => e9 + e9).join(''));
            var e8 = parseInt(e7, 16);
            return {
                'r': e8 >> 16 & 255,
                'g': e8 >> 8 & 255,
                'b': 255 & e8
            };
        }
        function aH(e7) {
            db.skinName = $('#spSkinName').val().toLowerCase();
            db.lowerName = $('#spLowerName').prop('checked');
            const e8 = document.getElementById('spNameColor');
            e8 && (db.nameColor = aG(e8.value));
            const e9 = document.getElementById('spChatColor');
            var eb = 0;
            if (e9) {
                for (var ec = e9.value.toUpperCase(), ed = 0; ed < dE.length; ed++) {
                    if (dE[ed].toUpperCase() == ec) {
                        eb = ed;
                        break;
                    }
                }
            }
            db.chatColor = eb;
            db.effect = parseInt($('#spEffect').val());
            db.nameFont = parseInt($('#spNameFont').val());
            bU.sendPacket(new bV.sendSubPanel(e7));
        }
        function aI() {
            cq || bU.subPanelOverride ? ($('#btn-cellpanel').prop('disabled', false), cq ? $('.subpanel-name-dashboard').css('display', '') : $('.subpanel-name-dashboard').css('display', 'none'), db.rules ? ($('#subpanel-rules').css('display', 'none'), $('#subpanel-content').css('display', 'block')) : ($('#subpanel-content').css('display', 'none'), $('#subpanel-rules').css('display', 'block'))) : $('#btn-cellpanel').prop('disabled', false);
        }
        function aJ(e7) {
            bU.accountListeners.loadSubPanel || (bU.accountListeners.loadSubPanel = firebase.firestore().collection('accounts').doc(e7).onSnapshot(e8 => {
                e8.exists && e8.data().locked ? (cq = true, $('#spLockedName').html(e8.data().name), void 0 !== e8.data().lastChange && $('#btn-chg-ln').attr('title', 'Last Changed: ' + new Date(e8.data().lastChange).toLocaleString()), null !== e8.data().expiry ? $('#spExpiry').html(new Date(1000 * e8.data().expiry.seconds).toLocaleString()) : $('#spExpiry').html('Never')) : (cq = false, 'none' !== $('#main-subpanel').css('display') && j('main-servers'));
                aI();
                bU.accountListeners.loadSubPanel();
                bU.accountListeners.loadSubPanel = null;
            }, e8 => {
                bU.accountListeners.loadSubPanel();
                bU.accountListeners.loadSubPanel = null;
            }));
        }
        function aK(e7, e8, e9, eb, ec, ed, ef, eg, eh) {
            this.name = e7;
            this.ip = e8;
            this.players = e9;
            this.bots = eb;
            this.playerText = ec;
            this.mode = ed;
            this.region = ef;
            this.ssl = eg;
            this.order = eh;
        }
        function aL() {
            for (var e7 in ($('#servers-body-eu').html(''), $('#servers-body-na').html(''), $('#servers-body-ap').html(''), cU))
                for (var e8 in cU[e7]) {
                    var e9 = (eb = cU[e7][e8]).bots > 0 ? ' title="Players: ' + eb.players + '&#10;Bots: ' + eb.bots + '"' : '';
                    $('#servers-body-' + eb.region).append('<tr id="s_' + eb.name + '" class="server-row" server="' + eb.name + '"><td class="server-table-name">' + eb.name + '</td><td class="server-table-players"' + e9 + '>' + eb.playerText + '</td><td class="server-table-mode">' + eb.mode + '</td></tr>');
                }
            for (var e8 in cV) {
                var eb = cV[e8];
                $('#servers-body-' + eb.region).prepend('<tr id="s_' + eb.name + '" class="account-server server-row" server="' + eb.name + '"><td class="server-table-name">' + eb.name + '</td><td class="server-table-players">' + eb.playerText + '</td><td class="server-table-mode">' + eb.mode + '</td></tr>');
            }
            $('.server-row').on('click', function () {
                aN($(this).attr('server'));
            });
        }
        function aM(e7) {
            for (var e8 in cU)
                for (var e9 in cU[e8])
                    if (e9.toLowerCase() === e7.toLowerCase()) {
                        return cU[e8][e9];
                    }
            return null;
        }
        function aN(e7) {
            null != c4 && $('#s_' + c4.name).removeClass('server-selected');
            c4 = aM(e7) || (Object.keys(cV).length > 0 ? function (e8) {
                for (var e9 in cV)
                    if (e8.toLowerCase() === e9.toLowerCase()) {
                        return cV[e9];
                    }
                return null;
            }(e7) : null);
            null != c4 && ($('#s_' + c4.name).addClass('server-selected'), 'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('event', 'select_server', {
                'server_name': c4.name,
                'region': c4.region,
                'mode': c4.gamemode,
                'players': c4.players
            }));
        }
        function aO(e7) {
            e7 = e7.toLowerCase();
            var e8 = $('#server-tab-' + e7);
            $('.server-active').css('background-color', 'inherit');
            $('#server-tab-container').children().removeClass('server-active');
            e8.addClass('server-active');
            $('.server-active').css('background-color', d5.uiMenuSubBackgroundColor);
            $('#server-content').children().css('display', 'none');
            $('#servers-' + e7).css('display', 'block');
        }
        function aP(e7, e8) {
            for (var e9 = e8, eb = false, ec = 0, ed = d1['_ChatTabs'], ef = ed.length; ec < ef; ec++) {
                var eg = ed[ec];
                if (eg && (e7 & eg.flags) === e7) {
                    var eh = dl[ec];
                    if (!eh) {
                        var ei = document.getElementById('chat-body-' + ec);
                        if (!ei) {
                            continue;
                        }
                        var ej = document.getElementById('chat-container-' + ec);
                        dl[ec] = eh = {
                            'bodyEl': ei,
                            'containerEl': ej
                        };
                    }
                    var ek = eh.bodyEl, el = eh.containerEl;
                    if (ek && el) {
                        var em;
                        ek.children.length >= eg.maxMessages && ek.firstElementChild && ek.removeChild(ek.firstElementChild);
                        eb ? em = e9.cloneNode(true) : (em = e9, eb = true);
                        var eo = document.createElement('tr');
                        eo.appendChild(em);
                        ek.appendChild(eo);
                        el.scrollHeight - el.scrollTop - el.clientHeight < 150 && (el.scrollTop = el.scrollHeight);
                    }
                }
            }
        }
        function aQ(e7) {
            $('#chat-input').val(e7);
        }
        function aR() {
            return $('#chat-input').val();
        }
        function aS() {
            dl.length = 0;
            var e7 = document.getElementById('chat-tab-container'), e8 = document.getElementById('chat-container');
            if (e7 && e8) {
                e7.innerHTML = '';
                ;
                for (var e9 = document.createDocumentFragment(), eb = document.createDocumentFragment(), ec = 0, ed = d1['_ChatTabs'], ef = ed.length; ec < ef; ec++) {
                    var eg = ed[ec];
                    if (eg) {
                        0 === eg.name.length && (eg.name = 'Unnamed');
                        var eh = document.createElement('li');
                        eh.className = 'chat-tab';
                        eh.id = 'chat-tab-' + ec;
                        eh.setAttribute('name', ec);
                        eh.innerHTML = '<span>' + eg.name + '</span>';
                        e9.appendChild(eh);
                        var ei = document.createElement('div');
                        ei.className = 'chat-inner-container';
                        ei.id = 'chat-container-' + ec;
                        ei.innerHTML = '<table class=\'chat-table\'><tbody id=\'chat-body-' + ec + '\'></tbody></table>';
                        eb.appendChild(ei);
                        dl[ec] = {
                            'bodyEl': null,
                            'containerEl': ei
                        };
                    }
                }
                e7.appendChild(e9);
                e8.appendChild(eb);
                for (var ej = 0; ej < dl.length; ej++) {
                    dl[ej] && (dl[ej].bodyEl = document.getElementById('chat-body-' + ej));
                }
                for (var ek = e7.getElementsByClassName('chat-tab'), el = 0; el < ek.length; el++) {
                    var em = ek[el];
                    em.addEventListener('click', function (eo) {
                        aT(this.getAttribute('name'));
                    });
                    em.style.borderColor = d5.uiBorderColor;
                }
                cY >= 0 && cY < d1['_ChatTabs'].length ? aT(cY) : aT(0);
            }
        }
        function aT(e7) {
            cY = e7;
            var e8 = document.getElementById('chat-tab-container'), e9 = document.getElementById('chat-container');
            if (e8 && e9) {
                for (var eb = e8.getElementsByClassName('chat-tab'), ec = 0; ec < eb.length; ec++) {
                    eb[ec].classList.remove('chat-active-tab');
                }
                for (var ed = e9.getElementsByClassName('chat-inner-container'), ef = 0; ef < ed.length; ef++) {
                    ed[ef].classList.remove('chat-active-container');
                    ed[ef].style.display = 'none';
                }
                var eg = document.getElementById('chat-tab-' + e7), eh = document.getElementById('chat-container-' + e7);
                eg && eg.classList.add('chat-active-tab');
                eh && (eh.classList.add('chat-active-container'), eh.style.display = 'block');
            }
        }
        function aU(e7 = 0) {
            var e8 = $('#cte-tab-selector');
            for (var e9 in (e8.empty(), d1['_ChatTabs']))
                e8.append('<option value=\'' + e9 + '\'>' + d1['_ChatTabs'][e9].name + '</option>');
            e8.prop('selectedIndex', e7);
            e8.trigger('change');
        }
        function aV(e7) {
            var e8 = $('#cte-tab-selector').val(), eb = d1['_ChatTabs'][e8];
            if (eb) {
                for (var ec in e9)
                    e9[ec] = eb[ec];
            }
            for (var ed in ($('#cte-tab-name').val(''), dY)) {
                var ef = (dY[ed] & 0) == dY[ed];
                $('#cte-type-' + ed.toLowerCase()).prop('checked', ef);
            }
            $('#cte-max-messages').val(0);
        }
        function aW(e7) {
            var e8 = $('#cte-tab-selector').val(), e9 = d1['_ChatTabs'][e8];
            if (e9) {
                var eb = e9.name, ec = $('#cte-tab-name').val();
                if (0 != ec.length) {
                    var ed = ec != eb, ef = 0, eg = parseInt($('#cte-max-messages').val());
                    for (var eh in dY)
                        $('#cte-type-' + eh.toLowerCase()).prop('checked') && (ef += dY[eh]);
                    e9.name = ec;
                    e9.flags = ef;
                    e9.maxMessages = eg;
                    ed && (aU(e8), function () {
                        for (var ei in d1['_ChatTabs']) {
                            var ej = d1['_ChatTabs'][ei];
                            if (ej) {
                                0 == ej.name.length && (ej.name = 'Unnamed');
                                var ek = document.getElementById('chat-tab-' + ei);
                                if (ek) {
                                    var el = ek.firstElementChild, em = ej.name;
                                    el ? el.textContent !== em && (el.textContent = em) : ((el = document.createElement('span')).textContent = em, ek.appendChild(el));
                                }
                            }
                        }
                    }());
                }
            }
        }
        function aX() {
            d1['_ChatTabs'].push({
                'name': 'New',
                'flags': 0,
                'maxMessages': 100
            });
            aU(d1['_ChatTabs'].length - 1);
            aS();
        }
        function aY() {
            var e7 = $('#cte-tab-selector').val();
            d1['_ChatTabs'][e7] && (d1['_ChatTabs'].splice(e7, 1), aU(), aS());
        }
        function aZ(e7, e8, e9, eb) {
            document.getElementById('context-name').innerText = e8 || 'An unnamed cell';
            cb.data('selected', e9);
            cb.data('party', eb);
            $('.context-action').css('display', 'none');
            -1 == eb ? ($('#menu-invite').css('display', 'block'), $('#menu-whisper').css('display', 'block'), $('#menu-block').css('display', 'block'), $('#menu-profile').css('display', 'block')) : ($('#menu-whisper').css('display', 'block'), $('#menu-profile').css('display', 'block'), bU.isPartyLeader() && ($('#menu-pu_pr').css('display', 'block'), $('#menu-promote').css('display', 'block'), $('#menu-kick').css('display', 'block')));
            bU.spectate && $('#menu-spectate').css('display', 'block');
            cb.css('display', 'block');
            cb.css('left', Math.min(bU.mouseRawX, window.innerWidth - cb.width()));
            cb.css('top', Math.min(bU.mouseRawY, window.innerHeight - cb.height()));
        }
        function b0(e7) {
            return e7.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        function b1(e7, e8, e9, eb, ec, ed, ef) {
            var eg = (e9 - bU.serverData.border.left) / bU.serverData.border.width * bS.width, eh = (eb - bU.serverData.border.top) / bU.serverData.border.height * bS.height;
            if (e7.beginPath(), e7.arc(eg, eh, ec, 0, cH, false), e7.fillStyle = ed, e7.fill(), ef) {
                var ei = eg - e7.measureText(e8).width / 2, ej = eh - 5;
                e7.fillText(e8, ei, ej);
            }
        }
        function b2(e7) {
            var e8 = e7[0] || e7;
            e8 && ('main' === e8.id && window.is_touch_device && 'undefined' != typeof touch_controls && (touch_controls.style.display = 'none'), 'none' === e8.style.display || 'none' === getComputedStyle(e8).display ? (e8.classList.contains('menu-transition') || e8.classList.add('menu-transition'), e8.style.display = 'block', e8.style.pointerEvents = 'auto', e8.offsetWidth, e8.classList.add('menu-open')) : e8.classList.contains('menu-open') || (e8.classList.add('menu-open'), e8.style.pointerEvents = 'auto'), 'main' === e8.id && (true = true));
        }
        function b3(e7) {
            try {
            } catch (e8) {
            }
        }
        function b4(e7) {
            var e8 = e7[0] || e7;
            if (e8) {
                'main' === e8.id && window.is_touch_device && 'undefined' != typeof touch_controls && (touch_controls.style.display = 'block');
                var e9 = getComputedStyle(e8);
                if ('none' !== e9.display) {
                    e8.classList.contains('menu-transition') || e8.classList.add('menu-transition');
                    e8.classList.remove('menu-open');
                    e8.style.pointerEvents = 'none';
                    for (var eb = e9.transitionDuration.split(',').map(function (ei) {
                                return parseFloat(ei) || 0;
                            }), ec = e9.transitionDelay.split(',').map(function (ei) {
                                return parseFloat(ei) || 0;
                            }), ed = false, ef = 0; ef < eb.length; ef++) {
                        if (eb[ef] + (ec[ef] || 0) > 0) {
                            ed = true;
                            break;
                        }
                    }
                    if (ed) {
                        var eg = false, eh = function (ei) {
                                ei.target === e8 && (eg = true, e8.style.display = 'none', e8.removeEventListener('transitionend', eh));
                            };
                        e8.addEventListener('transitionend', eh);
                        setTimeout(function () {
                            eg || (e8.style.display = 'none', e8.removeEventListener('transitionend', eh));
                        }, 400);
                    } else {
                        e8.style.display = 'none';
                    }
                }
                'main' === e8.id && (true = false);
            }
        }
        function b5(e7) {
            var e8 = e7[0] || e7;
            e8 && ('none' === e8.style.display || 'none' === getComputedStyle(e8).display ? b2(e8) : b4(e8));
        }
        function b6(e7) {
            var e8 = e7[0] || e7;
            return !!e8 && 'none' !== getComputedStyle(e8).display;
        }
        function b7() {
            c8.show();
            (0 == bU.party.length || d1.cHidePartyPanel) && cO.partyPanel.css('display', 'none');
            d1.cHideChat && $('#chat-panel').css('display', 'none');
            d1.cHideMinimap && $('#minimap-panel').css('display', 'none');
        }
        function b8() {
            c8.hide();
        }
        function b9(e7) {
            var e8 = e7.attr('id');
            d1[e8] = e7.prop('checked');
            bd(e8);
        }
        function bb(e7) {
            var e8 = e7.attr('id');
            d1[e8] = e7.val();
            bd(e8, e7.val());
        }
        function bc(e7) {
            bd(e7.attr('id'), e7.val());
        }
        function bd(e7, e8) {
            var e9 = dk[e7];
            null != e9 && e9(e8);
        }
        function bf(e7, e8) {
            null != e8 && (d5[e7] = e8, bd(e7, e8));
        }
        function bg() {
            e5.consented && (d1.iChatWidth = $('#chat-panel').css('width'), d1.iChatHeight = $('#chat-panel').css('height'), window.localStorage.setItem('options', JSON.stringify(d1)), window.localStorage.setItem('keybinds', JSON.stringify(d2)), window.localStorage.setItem('name', $('#name-box').val()), window.localStorage.setItem('theme', JSON.stringify(d5)), window.localStorage.setItem('subpanel', JSON.stringify(db)));
        }
        function bh() {
            for (var e7 in d6) {
                var e8 = e7.charAt(0);
                if ('r' == e8) {
                    $('#' + e7).val(d6[e7]);
                    bc($('#' + e7));
                } else {
                    if ('u' == e8) {
                        d5[e7] = d6[e7];
                        const e9 = document.getElementById(e7);
                        e9 && (e9.value = d5[e7]);
                        bd(e7, d5[e7]);
                    } else {
                        'a' == e8 ? bf(e7, '') : d5[e7] = d6[e7];
                    }
                }
            }
            d5['_FoodColors'] = [];
        }
        function bi(e7) {
            try {
                var e8 = JSON.parse(e7);
                if (null == e8.version || 2 != e8.version) {
                    return void bh();
                }
                for (var e9 in e8)
                    if (null != d5[e9] && 0 != e8[e9].length) {
                        d5[e9] = e8[e9];
                        var eb = e9.charAt(0);
                        if ('u' == eb) {
                            const ec = document.getElementById(e9);
                            ec && (ec.value = d5[e9], ec.dispatchEvent(new Event('input', { 'bubbles': true })));
                            bd(e9, d5[e9]);
                        } else {
                            'r' == eb ? ($('#' + e9).val(d5[e9]), bc($('#' + e9))) : 'a' == eb && bf(e9, d5[e9]);
                        }
                    }
            } catch (ed) {
                bh();
            } finally {
                ax();
            }
        }
        function bj(e7) {
            if (/\.(json)$/i.test(e7.name)) {
                var e8 = new FileReader();
                e8.addEventListener('load', function () {
                    d1.cThemeEnabled || bk();
                    bh();
                    bi(this.result);
                }, { 'once': true });
                e8.readAsText(e7);
            }
        }
        function bk() {
            $('#cThemeEnabled').prop('checked', true).trigger('change');
        }
        function bl(e7) {
            for (var e8 = e7.split(' '), e9 = '', eb = null, ec = 0; ec < e8.length; ec++) {
                0 != ec && (e9 += ' ');
                eb = e8[ec];
                null != cg[eb] ? (eb.startsWith(':') && eb.endsWith(':') && (eb = eb.substring(1, eb.length - 1)), e9 += '<img src="images/emotes/' + eb + '.png" height="17" width="17" alt="' + eb + '">') : null != ch[eb] ? (eb.startsWith(':') && eb.endsWith(':') && (eb = eb.substring(1, eb.length - 1)), e9 += '<img src="images/emotes/gifs/' + eb + '.gif" height="17" width="17" alt="' + eb + '">') : e9 += eb;
            }
            return e9;
        }
        function bm(e7, e8, e9) {
            this.name = e7;
            this.img = e8;
            this.type = e9;
            this.image = null;
            this.texture = null;
        }
        function bo() {
            this.passiveBuffs = {};
            this.passiveSortedBuffs = [];
            this.consumableBuffs = [];
            this.cache = null;
            this.nextCacheUpdate = 0;
            this.texture = null;
            this.bonusMaxCells = 0;
            this.onAddBuff = function (e7, e8, e9) {
                var eb = null;
                du[e7].type != 3 ? ((eb = this.passiveBuffs[e7]) ? eb.update(e8, e9) : (eb = new bp(e7, e8, e9), this.passiveBuffs[e7] = eb, this.sortPassiveBuffs()), this.onPassiveBuffsUpdate(), this.markCacheForUpdate()) : (eb = new bp(e7, e8, e9), this.consumableBuffs.push(eb), this.markCacheForUpdate());
                eb && bU.selfMsg('Recieved buff: ' + eb.powerup.name);
            };
            this.onRemoveBuff = function (e7) {
                var e8 = null;
                if (du[e7].type != 3) {
                    (e8 = this.passiveBuffs[e7]) && (delete this.passiveBuffs[e7], this.sortPassiveBuffs(), this.markCacheForUpdate(), this.onPassiveBuffsUpdate());
                } else {
                    for (var e9 = 0; e9 < this.consumableBuffs.length; e9++) {
                        if ((e8 = this.consumableBuffs[e9]).id == e7) {
                            this.consumableBuffs.splice(e9, 1);
                            this.markCacheForUpdate();
                            break;
                        }
                    }
                }
                e8 && bU.selfMsg('Lost buff: ' + e8.powerup.name);
            };
            this.clearBuffs = function (e7) {
                if (0 != this.passiveSortedBuffs.length || 0 != this.consumableBuffs.length) {
                    var e8 = e7 || false;
                    for (var e9 in this.passiveBuffs) {
                        var eb = this.passiveBuffs[e9];
                        e8 && eb.powerup.type == 1 || delete this.passiveBuffs[e9];
                    }
                    this.sortPassiveBuffs();
                    this.onPassiveBuffsUpdate();
                    this.consumableBuffs = [];
                    this.markCacheForUpdate();
                }
            };
            this.sortPassiveBuffs = function () {
                if (this.passiveSortedBuffs = [], 0 != this.passiveBuffs.length) {
                    for (var e7 in this.passiveBuffs)
                        this.passiveBuffs[e7].powerup.type == 1 ? this.passiveSortedBuffs.splice(0, 0, e7) : this.passiveSortedBuffs.push(e7);
                }
            };
            this.onPassiveBuffsUpdate = function () {
                if (this.bonusMaxCells = 0, null != this.passiveBuffs[1]) {
                    var e7 = this.passiveBuffs[1];
                    this.bonusMaxCells = 16 * e7.stack;
                }
            };
            this.update = function () {
                0 != this.passiveSortedBuffs.length || 0 != this.consumableBuffs.length ? (Date.now() >= this.nextCacheUpdate && (this.updateCache(), this.nextCacheUpdate = Date.now() + 1000), this.texture || (this.texture = bF.Texture.from(this.cache.canvas), bO.texture = this.texture, bO.anchor.set(0)), bO.position.x = bR.width / 2 - bO.width / 2 - bG.stage.position.x, bO.position.y = bR.height - bO.height - 15 - bG.stage.position.y, bO.visible = true) : bO.visible = false;
            };
            this.updateCache = function () {
                var e7 = null == this.cache || null == this.cache.canvas ? document.createElement('canvas') : this.cache.canvas, e8 = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
                e7.width = 55 * e8;
                e7.height = 105;
                this.cache = e7.getContext('2d');
                this.cache.fillStyle = '#222';
                this.cache.font = 'bold 16pt Calibri';
                for (var e9 = 0, eb = 0, ec = 0; ec < this.passiveSortedBuffs.length; ec++) {
                    this.passiveBuffs[this.passiveSortedBuffs[ec]].draw(this.cache, e9, eb);
                    e9 += 55;
                }
                for (e9 = 0, eb = 55, ec = 0; ec < this.consumableBuffs.length; ec++) {
                    this.consumableBuffs[ec].draw(this.cache, e9, eb);
                    e9 += 55;
                }
                this.texture && this.texture.update();
                this.nextCacheUpdate = Date.now() + 1000;
            };
            this.markCacheForUpdate = function () {
                this.nextCacheUpdate = 0;
            };
        }
        function bp(e7, e8, e9) {
            this.id = e7;
            this.powerup = du[e7];
            this.startTime = Date.now();
            this.expireTime = e9;
            this.stack = e8;
            this.update = function (eb, ec) {
                this.startTime = Date.now();
                this.expireTime = ec;
                this.stack = eb;
            };
            this.getCooldown = function () {
                if (Date.now() >= this.expireTime) {
                    return cH;
                }
                var eb = this.expireTime - Date.now(), ec = this.expireTime - this.startTime;
                return 2 * Math.min(eb / ec, 1) * Math.PI;
            };
            this.draw = function (eb, ec, ed) {
                eb.drawImage(this.powerup.image, ec, ed, 50, 50);
                this.stack > 1 && (eb.fillStyle = '#000', eb.fillText(this.stack, ec + 35, ed + 17));
                this.expireTime > 0 && (eb.beginPath(), eb.moveTo(ec + 25, ed + 25), eb.arc(ec + 25, ed + 25, 25, dv, dv - this.getCooldown(), false), eb.closePath(), eb.globalAlpha = 0.75, eb.fillStyle = '#222', eb.fill(), eb.globalAlpha = 1);
            };
        }
        function bq() {
            this.delay = 0;
            this.frames = [];
            this.isGif = true;
            this.push = function (e7) {
                this.frames.push(e7);
            };
            this.getFrame = function (e7) {
                return this.frames[e7];
            };
            this.getLength = function () {
                return this.frames.length;
            };
            this.getTexture = function () {
                return this.getFrame(Math.floor(bW / this.delay) % this.getLength());
            };
            this.loadFromFrameData = function (e7) {
                if (0 === e7.length) {
                    return;
                }
                const e8 = document.createElement('canvas'), e9 = e8.getContext('2d'), eb = document.createElement('canvas'), ec = eb.getContext('2d'), ed = e7[0].getImage();
                this.delay = 10 * e7[0].frameInfo.delay;
                ;
                ;
                eb.width = ed.width;
                eb.height = ed.height;
                for (const ef of e7) {
                    e9.clearRect(0, 0, e8.width, e8.height);
                    e9.drawImage(eb, 0, 0);
                    const eg = ef.getImage(), eh = eg.getContext('2d');
                    ec.drawImage(eg, 0, 0);
                    eh.clearRect(0, 0, eg.width, eg.height);
                    eh.drawImage(eb, 0, 0);
                    const {frameInfo: ei} = ef, {disposal: ej} = ei;
                    2 === ej ? ec.clearRect(ei.x, ei.y, ei.width, ei.height) : 3 === ej && (ec.clearRect(0, 0, eb.width, eb.height), ec.drawImage(e8, 0, 0));
                    this.push(bF.Texture.from(eg));
                }
            };
        }
        function br(e7) {
            return dC[e7 % dC.length];
        }
        function bs(e7) {
            return dD[e7 % dD.length];
        }
        function bu(e7) {
            for (var e8 = e7.length - 1; e8 > 0; e8--) {
                var e9 = Math.floor(Math.random() * (e8 + 1)), eb = e7[e8];
                e7[e8] = e7[e9];
                e7[e9] = eb;
            }
            return e7;
        }
        function bv(e7) {
            if (0 === e7 || e7 === bU.playerId) {
                return 'You cannot block that player.';
            }
            if (cy.includes(e7)) {
                const e8 = cy.indexOf(e7);
                return e8 > -1 && cy.splice(e8, 1), 'Unblocked player with ID: ' + e7;
            }
            return cy.push(e7), 'Blocked player with ID: ' + e7;
        }
        function bw(e7) {
            return dK[e7 >> 4 & 15] + dK[15 & e7];
        }
        function bx(e7, e8) {
            var e9 = e7 >> 16 & 255, eb = e7 >> 8 & 255, ec = 255 & e7;
            return (e9 = Math.max(0, Math.min(255, Math.floor(e9 * e8)))) << 16 | (eb = Math.max(0, Math.min(255, Math.floor(eb * e8)))) << 8 | Math.max(0, Math.min(255, Math.floor(ec * e8)));
        }
        function by(e7) {
            if (e7 <= 0) {
                return '0:00';
            }
            var e8 = Math.floor(e7 / 3600), e9 = Math.floor((e7 - 3600 * e8) / 60), eb = e7 - 3600 * e8 - 60 * e9;
            return e9 < 10 && e8 > 0 && (e9 = '0' + e9), eb < 10 && (eb = '0' + eb), (e8 > 0 ? e8 + ':' : '') + e9 + ':' + eb;
        }
        function bz(e7) {
            var e8 = e7.toString().split('.');
            return e8[0] = e8[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','), e8.join('.');
        }
        function bA(e7) {
            for (var e8 = e7.split(''), e9 = 0; e9 < e8.length; e9++) {
                '_' == e8[e9] && (e9 + 1 < e8.length && (e8[e9 + 1] = e8[e9 + 1].toUpperCase()), e8[e9] = ' ');
                0 == e9 && (e8[e9] = e8[e9].toUpperCase());
            }
            return e8.join('');
        }
        function bB(e7) {
            if (0 === e7.indexOf('#') && (e7 = e7.slice(1)), 3 === e7.length && (e7 = e7[0] + e7[0] + e7[1] + e7[1] + e7[2] + e7[2]), 6 !== e7.length) {
                throw new Error('Invalid HEX color.');
            }
            return 0.299 * parseInt(e7.slice(0, 2), 16) + 0.587 * parseInt(e7.slice(2, 4), 16) + 0.114 * parseInt(e7.slice(4, 6), 16) > 186 ? '#000000' : '#FFFFFF';
        }
        function bC(e7) {
            if (e7.dataTransfer.items) {
                for (var e8 = 0; e8 < e7.dataTransfer.items.length; e8++) {
                    if ('file' === e7.dataTransfer.items[e8].kind) {
                        return e7.dataTransfer.items[e8].getAsFile();
                    }
                }
            } else {
                for (e8 = 0; e8 < e7.dataTransfer.files.length; e8++) {
                    return e7.dataTransfer.files[e8];
                }
            }
        }
        function bD(e7, e8, e9) {
            this.font = e7;
            this.size = e8;
            this.outlineColor = e9 || '#000';
        }
        function bE() {
            try {
                'undefined' != typeof aiptag && aiptag.cmd && aiptag.cmd.display && aiptag.cmd.display.push(function () {
                    try {
                        if ('undefined' != typeof aipDisplayTag) {
                            aipDisplayTag.refresh('GOT_gota-io_336x280');
                            window.adDisplayAttempts && (window.adDisplayAttempts = 0);
                            var e7 = document.getElementById('GOT_gota-io_336x280'), e8 = document.getElementById('adblock-fallback');
                            e7 && (e7.style.display = 'block', e7.style.visibility = 'visible', e7.style.opacity = '1', e7.hasVisibilityWatcher || (new MutationObserver(function (e9) {
                                e9.forEach(function (eb) {
                                    if ('attributes' === eb.type && ('style' === eb.attributeName || 'class' === eb.attributeName)) {
                                        var ec = eb.target;
                                        'none' !== ec.style.display && 'hidden' !== ec.style.visibility && '0' !== ec.style.opacity || (ec.children.length > 0 || ec.innerHTML.trim().length > 0 || null !== ec.querySelector('iframe') ? (ec.style.display = 'block', ec.style.visibility = 'visible', ec.style.opacity = '1', e8 && (e8.style.display = 'none')) : e8 && (e8.style.display = 'block'));
                                    }
                                });
                            }).observe(e7, {
                                'attributes': true,
                                'attributeFilter': [
                                    'style',
                                    'class'
                                ]
                            }), e7.hasVisibilityWatcher = true), setTimeout(function () {
                                var e9 = e7.children.length > 0 || e7.innerHTML.trim().length > 0 || null !== e7.querySelector('iframe');
                                e9 && e8 ? e8.style.display = 'none' : !e9 && e8 && (e8.style.display = 'block');
                            }, 2000));
                        }
                    } catch (e9) {
                    }
                });
            } catch (e7) {
            }
        }
        const bF = window.PIXI;
        var bG;
        window.PIXI = null;
        const bH = new bF.Container(), bI = new bF.Container(), bJ = new bF.Container(), bK = new bF.Container(), bL = new bF.Container(), bM = new bF.Container(), bN = new bF.Container(), bO = new bF.Sprite(bF.Texture.EMPTY);
        var bP, bQ = null;
        bK.addChild(bJ);
        bK.addChild(bL);
        bK.addChild(bM);
        bK.addChild(bN);
        bH.addChild(bI);
        bH.addChild(bK);
        bH.addChild(bO);
        var bR, bS, bT, bU, bV, bW, bX, bY, bZ, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, cb, cc, cd, cf, cg, ch, ci, cj, ck, cl, cm, co, cp, cq = false, cr = 0, cs = 0, cu = null, cv = null, cw = false, cx = {
                'elements': [],
                'callbacks': [],
                'pendingFriends': [],
                'timestamps': []
            }, cy = [], cz = false, cA = null, cB = true, cC = true, cD = null, cE = null, cG = {
                'touchControls': [],
                'windowEvents': [],
                'uiElements': [],
                'chatElements': [],
                'firebaseListeners': [],
                'customElements': []
            };
        const cH = 2 * Math.PI, cI = Math.PI / 2;
        var cL, cM, cN;
        const cO = {}, cP = new firebase.auth.GoogleAuthProvider();
        var cR = {
                'key': '',
                'foodColors': [],
                'customEjectedMass': false,
                'motd': '',
                'enabled': false,
                'motherCustomEnabled': false
            }, cS = {
                'halloween': {
                    'key': 'halloween',
                    'foodColors': [
                        15633692,
                        11224098,
                        9453167,
                        6301513
                    ],
                    'customEjectedMass': false,
                    'motd': '\uD83C\uDF83 Happy Halloween! Spooky season is here! \uD83D\uDC7B',
                    'motherCustomEnabled': true
                },
                'xmas': {
                    'key': 'xmas',
                    'foodColors': [
                        16711680,
                        65280,
                        16777215,
                        16766720
                    ],
                    'customEjectedMass': true,
                    'motd': '\uD83C\uDF84 Merry Christmas! Ho ho ho! \uD83C\uDF85',
                    'motherCustomEnabled': true
                },
                'new_years': {
                    'key': 'new_years',
                    'foodColors': [
                        16766720,
                        16777215,
                        16738740,
                        49151
                    ],
                    'customEjectedMass': false,
                    'motd': '\uD83C\uDF89 Happy New Year! Here\'s to new beginnings! \u2728',
                    'motherCustomEnabled': true
                },
                'valentines': {
                    'key': 'valentines',
                    'foodColors': [
                        16738740,
                        16716947,
                        14423100,
                        16761035
                    ],
                    'customEjectedMass': false,
                    'motd': '\uD83D\uDC9D Happy Valentine\'s Day! Spread the love! \uD83D\uDC95',
                    'motherCustomEnabled': true
                },
                'spring': {
                    'key': 'spring',
                    'foodColors': [
                        10025880,
                        16761035,
                        16758465,
                        9498256
                    ],
                    'customEjectedMass': false,
                    'motd': '\uD83C\uDF38 Spring has arrived! Everything is blooming! \uD83C\uDF3A',
                    'motherCustomEnabled': true
                },
                'summer': {
                    'key': 'summer',
                    'foodColors': [
                        16766720,
                        16747520,
                        49151,
                        3329330
                    ],
                    'customEjectedMass': false,
                    'motd': '\u2600️ Summer vibes! Time for some fun in the sun! \uD83C\uDFD6️',
                    'motherCustomEnabled': true
                }
            }, cT = false;
        firebase.initializeApp({
            'apiKey': 'AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM',
            'authDomain': 'accounts.gota.io',
            'databaseURL': 'https://gota-io.firebaseio.com',
            'projectId': 'gota-io',
            'storageBucket': 'gota-io.appspot.com',
            'messagingSenderId': '570450309042',
            'appId': '1:570450309042:web:380ab6c94d44de2f'
        });
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(function () {
        });
        var cU = {}, cV = {}, cX = [
                {
                    'name': 'All',
                    'flags': 255,
                    'maxMessages': 100
                },
                {
                    'name': 'Party',
                    'flags': 2,
                    'maxMessages': 100
                }
            ], cY = 0, cZ = [], d0 = -1, d1 = {
                'cDisableAA': false,
                'cAutoRespawn': false,
                'cHideId': false,
                'cHideServer': false,
                'cHidePartyPanel': false,
                'cHideLeaderboard': false,
                'cHideExtraPanel': false,
                'sShowNames': 'ALL',
                'sShowSkins': 'ALL',
                'sRenderType': 'AUTO',
                'sTextOutlines': 'NONE',
                'sQuality': 'ULTRA',
                'sMassType': 'DEFAULT',
                'cTransCells': false,
                'cShowMass': false,
                'cShowBorder': false,
                'cSilentLogin': false,
                'cShowChatIds': false,
                'cColoredChatIds': false,
                'cHideChat': false,
                'cHideMinimap': false,
                'sScorePanel': '2',
                'cShowCoordinates': false,
                'cDarkerBots': false,
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
                'cShowTracer': false,
                'iChatWidth': '360px',
                'iChatHeight': '250px',
                'rUiScale': 1,
                'rReconnectPeriod': 5,
                'rAnimationDelay': 90,
                'rViewDistance': 100,
                'rTracerOpacity': 50,
                'rTracerColor': '#ffffff',
                '_ChatTabs': JSON.parse(JSON.stringify(cX))
            }, d2 = {
                'kContextMenu': 3,
                'kEjectMass': 87,
                'kSplit': 32,
                'kToggleSpec': 81,
                'kDoubleSplit': -1,
                'kTripleSplit': -1,
                'kQuadSplit': -1,
                'kHexaSplit': -1,
                'kFreezeMouse': -1,
                'kLineSplit': -1
            }, d3 = false;
        const d4 = Object.assign({}, d2);
        window.is_touch_device = 'ontouchstart' in document.documentElement;
        const d5 = {
                'version': 2,
                'uiForegroundColor': 'rgb(255, 255, 255)',
                'uiBackgroundColor': 'rgba(22, 22, 22, 0.8)',
                'uiBorderColor': 'rgba(255, 255, 255, .2)',
                'uiMenuBackgroundColor': '#2A2A2A',
                'uiMenuTitleBackgroundColor': '#404040',
                'uiMenuSubBackgroundColor': '#363636',
                'uiMenuSubBackground2Color': '#404040',
                'uiButtonColor': '#444444',
                'uiGameBackgroundColor': '#121212',
                'uiGameBorderColor': '#ff0000',
                'uiLeaderboardHighlightSelf': '#ffaaaa',
                'uiLeaderboardHighlightParty': '#ffff00',
                'uiPartyLeaderColor': '#00ffff',
                'uiGameColorSuccess': '#00ff00',
                'uiGameColorWarning': '#ffff00',
                'uiGameColorError': '#ff0000',
                '_FoodColors': [],
                'aCustomBackground': '',
                'aCustomSpike': '',
                'aCustomMother': '',
                'rBorderSize': 32,
                'rBackgroundOpacity': 1
            }, d6 = { d7: d5[d7] };
        for (var d7 in d5);
        ;
        var d9 = [], db = {
                'rules': false,
                'nameColor': {
                    'r': 0,
                    'g': 255,
                    'b': 255
                },
                'chatColor': 0,
                'lowerName': false,
                'skinName': '',
                'effect': 0,
                'nameFont': 0
            }, dc = null, dd = 0;
        const df = function () {
            function e7() {
                (cC = !document.hidden) ? (cD && (clearInterval(cD), cD = null), cE && (cancelAnimationFrame(cE), cE = null), a5()) : (cE && (cancelAnimationFrame(cE), cE = null), cD || (cD = setInterval(a9, 1000)));
            }
            return {
                'start'() {
                    e7();
                    document.addEventListener('visibilitychange', e7);
                },
                'stop'() {
                    document.removeEventListener('visibilitychange', e7);
                    cD && (clearInterval(cD), cD = null);
                    cE && (cancelAnimationFrame(cE), cE = null);
                }
            };
        }();
        ad.prototype.clearStats = function () {
            this.stats = {
                'name': 'An unnamed cell',
                'alive': 0,
                'eatenFood': 0,
                'eatenEject': 0,
                'eatenVirus': 0,
                'eatenPlayer': 0,
                'gainFood': 0,
                'gainEject': 0,
                'gainVirus': 0,
                'gainPlayer': 0
            };
        };
        ad.prototype.play = function () {
            null != c4 ? (this.name = $('#name-box').val(), aA(), this.spectate = false, this.currentServerName = c4.name, cO.serverSpan ? cO.serverSpan.textContent = this.currentServerName : cm.querySelector('#pServer span').textContent = this.currentServerName, av(), this.isConnected() && this.currentServer == c4.ip ? this.sendPacket(new bV.setName(this.name)) : this.connect(c4.ip), b7(), b4(c6), window.is_touch_device && (touch_controls.style.display = 'block')) : this.selfMsg('No server selected!');
        };
        ad.prototype.spec = function () {
            null != c4 ? (this.spectate = true, av(), this.isConnected() && this.currentServer == c4.ip ? this.sendPacket(new bV.sendSpectate()) : this.connect(c4.ip), b7(), b4(c6)) : this.selfMsg('No server selected!');
        };
        ad.prototype['_resetReconnectDelay'] = function () {
            this['_reconnectDelay'] = d1.rReconnectPeriod || 5;
        };
        ad.prototype['_increaseReconnectDelay'] = function () {
            this['_reconnectDelay'] || (this['_reconnectDelay'] = d1.rReconnectPeriod || 5);
            this['_reconnectDelay'] = Math.min(2 * this['_reconnectDelay'], 60);
        };
        ad.prototype['_scheduleReconnect'] = function (e7, e8) {
            if (!(d1.rReconnectPeriod <= 0 || this['_manualDisconnect'])) {
                this['_pendingReconnectTimer'] && (clearTimeout(this['_pendingReconnectTimer']), this['_pendingReconnectTimer'] = null);
                this['_increaseReconnectDelay']();
                var e9 = this['_reconnectDelay'];
                this.selfMsg(('close' === e8 ? 'Disconnected from server.' : 'Error connecting to server...') + ' Retrying in ' + e9 + ' second(s).');
                var eb = this;
                this['_pendingReconnectTimer'] = setTimeout(function () {
                    eb['_pendingReconnectTimer'] = null;
                    0 != eb.isConnected() || null != eb.socket || eb['_manualDisconnect'] || eb.connect(e7);
                }, 1000 * e9);
            }
        };
        ad.prototype.connect = function (e7) {
            if (null != this.socket) {
                return this.socket.nextUrl = e7, void this.disconnect(e7);
            }
            this.currentServer = e7;
            this.currentServerName = c4.name;
            this.selfMsg('Connecting to ' + (d1.cHideServer ? '***Hidden***' : this.currentServerName));
            1 == c4.ssl ? this.socket = new WebSocket('wss://' + e7) : this.socket = new WebSocket('ws://' + e7);
            this.socket.binaryType = 'arraybuffer';
            var e8 = this;
            this.socket.onopen = function () {
                e8['_resetReconnectDelay']();
                e8.onConnect.apply(e8, arguments);
            };
            this.socket.onmessage = this.onMessage.bind(this);
            this.socket.onclose = function (e9) {
                if (e8.reset(), e8.selfMsg('You have been disconnected from the server. Reason: ' + ('' === e9.reason ? 'Unknown' : e9.reason)), null != this.nextUrl) {
                    e8.connect(this.nextUrl);
                } else {
                    if (!e8['_manualDisconnect']) {
                        var eb = c4 && c4.ip ? c4.ip : e7;
                        eb && e8['_scheduleReconnect'](eb, 'close');
                    }
                }
                e8['_manualDisconnect'] = false;
            };
            this.socket.onerror = function (e9) {
                e8.reset();
                this.nextUrl = null;
                e8['_scheduleReconnect'](e7, 'error');
            };
            document.body.classList.add('hide-captcha-badge');
        };
        ad.prototype.disconnect = function (e7) {
            null != this.socket && (this['_manualDisconnect'] = true, this['_pendingReconnectTimer'] && (clearTimeout(this['_pendingReconnectTimer']), this['_pendingReconnectTimer'] = null), this.socket.close());
        };
        ad.prototype.clearBuckets = function () {
            for (var e7 in this.bucket)
                this.bucket[e7].onDelete(), delete this.bucket[e7];
            for (var e7 in this.foodObjects)
                this.foodObjects[e7].onDelete(), delete this.foodObjects[e7];
            this['_bucketVersionCounter'] = (this['_bucketVersionCounter'] || 0) + 1;
            this['_foodVersionCounter'] = (this['_foodVersionCounter'] || 0) + 1;
        };
        ad.prototype.reset = function () {
            bP && (bP.destroy({
                'children': true,
                'texture': true,
                'baseTexture': true
            }), bP = null, bJ.cacheAsBitmap = false);
            this.stopPingInterval();
            this.mousePacketInterval && (clearTimeout(this.mousePacketInterval), this.mousePacketInterval = null);
            this.clearBuckets();
            this.myCells = {};
            this['_myCellVersionCounter'] = (this['_myCellVersionCounter'] || 0) + 1;
            this['_forceNextRender'] = true;
            this.playerRegistry.clear();
            this.playerId = 0;
            this.score = 0;
            this.respawnCooldown = 0;
            this.customGameMap = null;
            this.currentServer = null;
            this.clearStats();
            this.clearParty();
            this.buffHolder.clearBuffs();
            bW = 'undefined' != typeof performance && performance.now ? performance.now() : Date.now();
            this.serverData.hasSentSubPanel = false;
            this.serverData.resetType = 0;
            this.serverData.autosplits = false;
            null != this.socket && (this.socket = null);
            cO.idSpan ? cO.idSpan.textContent = this.playerId : cm.querySelector('#pId span').textContent = this.playerId;
            this.subPanelOverride && (this.subPanelOverride = false, aI());
            b3();
        };
        ad.prototype.handleKey = function (e7) {
            if (e7 == d2.kEjectMass) {
                cf = true;
                this.sendPacket(new bV.sendEjectMass(true));
            } else {
                if (e7 == d2.kSplit) {
                    this.sendPacket(new bV.sendKey(17));
                } else {
                    if (e7 == d2.kToggleSpec) {
                        this.sendPacket(new bV.sendKey(18));
                    } else {
                        if (e7 == d2.kDoubleSplit) {
                            this.sendPacket(new bV.sendKey(17));
                            this.sendPacket(new bV.sendKey(17));
                        } else {
                            if (e7 == d2.kTripleSplit) {
                                for (var e8 = 0; e8 < 3; e8++) {
                                    this.sendPacket(new bV.sendKey(17));
                                }
                            } else {
                                if (e7 == d2.kQuadSplit) {
                                    for (e8 = 0; e8 < 4; e8++) {
                                        this.sendPacket(new bV.sendKey(17));
                                    }
                                } else {
                                    if (e7 == d2.kHexaSplit) {
                                        for (e8 = 0; e8 < 6; e8++) {
                                            this.sendPacket(new bV.sendKey(17));
                                        }
                                    } else {
                                        38 == e7 ? (this.mouseZoom *= 1.05, this.mouseZoom = bU.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom) : 40 == e7 ? (this.mouseZoom *= 0.95, this.mouseZoom = bU.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom) : e7 == d2.kFreezeMouse ? (this.mouseFrozen = !this.mouseFrozen, this.mouseFrozen ? cO.mouseFrozenDiv.style.display = 'block' : cO.mouseFrozenDiv.style.display = 'none') : e7 == d2.kLineSplit ? this.toggleLineSplit() : e7 == d2.kContextMenu && function () {
                                            var e9, eb = bK.pivot.x - bG.stage.position.x / bU.scale + bU.mouseRawX * 1 / bU.scale, ec = bK.pivot.y - bG.stage.position.y / bU.scale + bU.mouseRawY * 1 / bU.scale, ed = null;
                                            for (var ef in bU.bucket)
                                                if (!((e9 = bU.bucket[ef]).size < 25)) {
                                                    var eg = e9.y - e9.size, eh = e9.y + e9.size, ei = e9.x - e9.size, ej = e9.x + e9.size;
                                                    if (!(ec > eh || ec < eg || eb > ej || eb < ei)) {
                                                        ed = e9;
                                                        break;
                                                    }
                                                }
                                            if (null != ed && 0 != ed.playerId) {
                                                var ek = bU.playerRegistry.getPlayer(ed.playerId);
                                                null != ek && aZ(0, ek.name, ed.playerId, -1);
                                            }
                                        }();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        ad.prototype.isConnected = function () {
            return null != this.socket && 1 == this.socket.readyState;
        };
        ad.prototype.sendPacket = function (e7) {
            this.isConnected() && this.socket.send(e7);
        };
        ad.prototype.sendMousePacket = function (e7, e8) {
            var e9 = Date.now();
            this.pendingMousePacket = {
                'x': e7,
                'y': e8
            };
            e9 - this.lastMousePacket.time >= this.MOUSE_PACKET_RATE ? (this.sendPacket(new bV.sendMouse(e7, e8)), this.lastMousePacket.x = e7, this.lastMousePacket.y = e8, this.lastMousePacket.time = e9, this.pendingMousePacket = null) : this.mousePacketInterval || (this.mousePacketInterval = setTimeout(() => {
                this.pendingMousePacket && this.isConnected() && (this.sendPacket(new bV.sendMouse(this.pendingMousePacket.x, this.pendingMousePacket.y)), this.lastMousePacket.x = this.pendingMousePacket.x, this.lastMousePacket.y = this.pendingMousePacket.y, this.lastMousePacket.time = Date.now());
                this.pendingMousePacket = null;
                this.mousePacketInterval = null;
            }, this.MOUSE_PACKET_RATE - (e9 - this.lastMousePacket.time)));
        };
        ad.prototype.onConnect = function () {
            cy = [];
            cA.execute('6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3', { 'action': 'login' }).then(function (e7) {
                bU.sendPacket(new bV.sendCaptcha(e7));
                document.body.classList.add('hide-captcha-badge');
                bU.spectate ? bU.spec() : bU.play();
            });
            this.sendPacket(new bV.connectionStart());
            this.sendPing();
            this.sendOptions();
            bW = 'undefined' != typeof performance && performance.now ? performance.now() : Date.now();
            this.startPingInterval();
            null === firebase.auth().currentUser ? this.spectate ? this.sendPacket(new bV.sendSpectate()) : this.sendPacket(new bV.setName(this.name)) : firebase.auth().currentUser.getIdToken(true).then(e7 => {
                bU.sendPacket(new bV.sendAuthToken(e7));
            }).catch(e7 => ao(e7, true));
        };
        ad.prototype.sendPing = function () {
            this.isConnected() && (bZ = +new Date(), this.sendPacket(new bV.sendPing()));
        };
        ad.prototype.sendOptions = function () {
            this.isConnected() && this.sendPacket(new bV.sendOptions());
        };
        ad.prototype.startPingInterval = function () {
            function e7() {
                const e9 = document.hidden ? 15000 : 5000;
                ;
            }
            this.stopPingInterval();
            const e8 = this;
            e7();
            this['_pingVisibilityHandler'] || (this['_pingVisibilityHandler'] = function () {
                !document.hidden && e8.isConnected() && e8.sendPing();
                e8.pingInterval && (clearTimeout(e8.pingInterval), e8.pingInterval = null, e7());
            }, document.addEventListener('visibilitychange', this['_pingVisibilityHandler']));
        };
        ad.prototype.stopPingInterval = function () {
            this.pingInterval && (clearTimeout(this.pingInterval), this.pingInterval = null);
            this['_pingVisibilityHandler'] && (document.removeEventListener('visibilitychange', this['_pingVisibilityHandler']), this['_pingVisibilityHandler'] = null);
        };
        ad.prototype.selfMsg = function (e7) {
            var e8 = document.createElement('td'), e9 = document.createElement('span');
            e9.style.color = '#DDDD00';
            e9.innerHTML = '[System] ' + b0(e7);
            e8.appendChild(e9);
            aP(8, e8);
        };
        ad.prototype.selfMsgWithJoinCode = function (e7, e8) {
            var e9 = document.createElement('td'), eb = document.createElement('span');
            eb.style.color = '#DDDD00';
            eb.innerHTML = '[System] ' + b0(e7);
            e9.appendChild(eb);
            var ec = document.createElement('span');
            ec.style.color = '#DDDD00';
            ec.innerHTML = e8;
            ec.style.pointerEvents = 'all';
            ec.style.userSelect = 'all';
            e9.appendChild(ec);
            aP(8, e9);
        };
        ad.prototype.setupVisibilityPing = function () {
        };
        ad.prototype.cleanupVisibilityPing = function () {
        };
        ad.prototype.selfMsgCopyable = function (e7, e8) {
            var e9 = document.createElement('td'), eb = document.createElement('span');
            eb.style.color = '#DDDD00';
            eb.innerHTML = '[System] ' + b0(e7);
            e9.appendChild(eb);
            var ec = document.createElement('span');
            ec.style.color = '#428df5';
            ec.innerHTML = b0(e8);
            ec.style.pointerEvents = 'all';
            ec.style.userSelect = 'all';
            e9.appendChild(ec);
            aP(8, e9);
        };
        ad.prototype.clearParty = function (e7) {
            this.party = [];
            this.partyIds = {};
            this.partyLeader = -1;
            this.partyIndex = -1;
            $('#party-panel').css('display', 'none');
            'block' == cl.css('display') && this.handleCustomGameLeave();
            null == this.partyCode && null == ci || (this.partyCode = ci = null, window.history.pushState('page', '', ' '));
        };
        ad.prototype.isPartyLeader = function () {
            return this.partyLeader == this.playerId;
        };
        ad.prototype.getServerMaxCells = function () {
            return this.serverData.maxCells + this.buffHolder.bonusMaxCells;
        };
        ad.prototype.onMessage = function (e7) {
            var e8 = new DataView(e7.data), e9 = e8.getUint8(0);
            switch (e8.offset = 1, e9) {
            case 122:
                let er = function () {
                    try {
                        ;
                        if ('function' != typeof window['__ak8saulr']) {
                            return false;
                        }
                        var eu = window['__ak8saulr'], ev = eu(eb, ec, ed, ef, eg, ek, el, em);
                        if (eb >= 4 && eu.length < 8) {
                            try {
                                var ew = parseInt(ev, 36);
                                if (!isNaN(ew)) {
                                    var ex = 7 & em;
                                    ew = ((ew = ew >>> 0 ^ em >>> 0) << ex | ew >>> 32 - ex) >>> 0;
                                    ev = ((ew ^= em >>> 3) >>> 0).toString(36).toUpperCase();
                                }
                            } catch (eE) {
                            }
                        }
                        if (ev && '-' === ev.charAt(0)) {
                            try {
                                var ey = parseInt(ev, 36);
                                isNaN(ey) || (ev = (ey >>> 0).toString(36).toUpperCase());
                            } catch (eF) {
                            }
                        }
                        var ez = new TextEncoder().encode(ev), eA = new ArrayBuffer(12 + ez.length), eB = new DataView(eA), eC = 0;
                        eB.setUint8(eC++, 123);
                        eB.setUint8(eC++, eb);
                        eB.setUint32(eC, ec, true);
                        eC += 4;
                        eB.setUint32(eC, ed, true);
                        eC += 4;
                        eB.setUint16(eC, ez.length, true);
                        eC += 2;
                        for (var eD = 0; eD < ez.length; eD++) {
                            eB.setUint8(eC + eD, ez[eD]);
                        }
                        eo.socket.send(eA);
                        try {
                            sendEnvTelemetry(eo.socket, ec, ed, '__ak8saulr', ek, el, ef);
                        } catch (eG) {
                        }
                        if (eb >= 4) {
                            try {
                                setTimeout(function () {
                                    if (eo.socket && 1 === eo.socket.readyState) {
                                        var eH = window['__ak8saulr'], eI = 0;
                                        try {
                                            for (var eJ = eH.toString(), eK = 0; eK < eJ.length; eK++) {
                                                eI = 16777619 * (eI ^ eJ.charCodeAt(eK)) >>> 0;
                                            }
                                        } catch (eQ) {
                                        }
                                        var eL = 0;
                                        eH && eH['_wasm'] && (eL |= 1);
                                        var eM = 'v:' + eb + '|h:' + eI.toString(36) + '|f:' + eL, eN = new TextEncoder().encode(eM);
                                        if (!(eN.length > 64)) {
                                            var eO = new ArrayBuffer(2 + eN.length), eP = new DataView(eO);
                                            for (eP.setUint8(0, 126), eP.setUint8(1, eN.length), eK = 0; eK < eN.length; eK++) {
                                                eP.setUint8(2 + eK, eN[eK]);
                                            }
                                            eo.socket.send(eO);
                                        }
                                    }
                                }, 150);
                            } catch (eH) {
                            }
                        }
                        return true;
                    } catch (eI) {
                        return false;
                    }
                };
                var eb = e8.getUint8(1), ec = e8.getUint32(2, true), ed = e8.getUint32(6, true), ef = e8.getUint32(10, true), eg = null, eh = 14;
                if (eb >= 2) {
                    var ei = e8.getUint8(14);
                    if (ei > 0) {
                        eg = [];
                        for (var ej = 0; ej < ei; ej++) {
                            eg.push(e8.getUint8(15 + ej));
                        }
                    }
                    eh = 15 + ei;
                }
                var ek = 2654435769, el = 2779096485, em = 0;
                eb >= 3 && (ek = e8.getUint32(eh, true), eh += 4, el = e8.getUint32(eh, true), eh += 4, eb >= 4 && (em = e8.getUint32(eh, true) >>> 0, eh += 4));
                var eo = this;
                if (!er() && !window['__authScriptLoading']) {
                    window['__authScriptLoading'] = true;
                    var ep = document.createElement('script');
                    ep.src = 'auth.js?_=' + Date.now();
                    ep.async = true;
                    ep.onload = function () {
                        if (!er()) {
                            var es = 0;
                            !function eu() {
                                er() || ++es >= 40 || setTimeout(eu, 100);
                            }();
                        }
                    };
                    ep.onerror = function () {
                        window['__authScriptLoading'] = false;
                    };
                    document.head.appendChild(ep);
                }
                break;
            case 124:
                var eq = e8.getUint8(1);
                0 === eq || this.selfMsg('Client validation warning (code ' + eq + ').');
                break;
            case 2:
                this.handleUpdate(e8);
                break;
            case 10:
                this.handlePosition(e8);
                break;
            case 21:
                this.handleStats(e8);
                break;
            case 22:
                this.showSubPanel(e8);
                break;
            case 23:
                this.updateSubPanel(e8);
                break;
            case 40:
                this.handleInvite(e8);
                break;
            case 41:
                this.handlePartyInfo(e8);
                break;
            case 45:
                this.handlePartyData(e8);
                break;
            case 43:
                this.handlePartyJoinCode(e8);
                break;
            case 49:
                this.handleLeaderboard(e8);
                break;
            case 50:
                this.handleLeaderboardCustom(e8);
                break;
            case 63:
                this.handleRespawnCooldown(e8);
                break;
            case 64:
                this.handleMapData(e8);
                break;
            case 65:
                this.handleClearNodes();
                break;
            case 66:
                this.handleUpdateBorder(e8);
                break;
            case 68:
                this.handleResetTime(e8);
                break;
            case 69:
                this.handleSpectators(e8);
                break;
            case 70:
                this.handleSystemMsg(e8);
                break;
            case 71:
                this.handlePing();
                break;
            case 72:
                this.handleChat(e8);
                break;
            case 73:
                this.handleWhisper(e8);
                break;
            case 74:
                this.handleEditMessage(e8);
                break;
            case 75:
                this.handleCopyableMessage(e8);
                break;
            case 80:
                this.handleShowScrimmageMenu();
                break;
            case 81:
                this.handleQueueData(e8);
                break;
            case 82:
                this.handleQueueLeave(e8);
                break;
            case 83:
                this.handleMatchState(e8);
                break;
            case 90:
                this.handleScrimmageData(e8);
                break;
            case 91:
                this.handleCustomGameShow(e8);
                break;
            case 92:
                this.handleCustomGameUpdate(e8);
                break;
            case 93:
                this.handleCustomGameLeave();
                break;
            case 94:
                this.handleShowCustomGameLobbies(e8);
                break;
            case 100:
                this.handleAddBuff(e8);
                break;
            case 101:
                this.handleRemoveBuff(e8);
                break;
            case 102:
                this.handleClearBuffs(e8);
                break;
            case 103:
                this.handleAuthenticated(e8);
                break;
            case 104:
                this.handleProfile(e8);
            }
        };
        ad.prototype.handleUpdate = function (e7) {
            var e8 = e7.getUint16(e7.offset, true);
            for (e7.offset += 2; e8 > 0;) {
                var e9 = e7.getUint16(e7.offset, true);
                e7.offset += 2;
                bU.playerRegistry.remove(e9);
                e8--;
            }
            for (e8 = e7.getUint16(e7.offset, true), e7.offset += 2; e8 > 0;) {
                e9 = e7.getUint16(e7.offset, true);
                e7.offset += 2;
                null != (ej = this.bucket[e9] || this.foodObjects[e9]) && (6 == ej.type ? (delete this.foodObjects[e9], this['_foodVersionCounter'] = (this['_foodVersionCounter'] || 0) + 1) : (delete this.bucket[e9], this['_bucketVersionCounter'] = (this['_bucketVersionCounter'] || 0) + 1), ej.playerId == this.playerId && (delete this.myCells[e9], this['_myCellVersionCounter'] = (this['_myCellVersionCounter'] || 0) + 1, 0 == Object.keys(this.myCells).length && (d1.cAutoRespawn ? 'none' == $('#main').css('display') && bU.play() : ('block' != c9.css('display') && b3(), bE()))), ej.onDelete());
                e8--;
            }
            for (; e9 = e7.getUint16(e7.offset, true), e7.offset += 2, 0 != e9;) {
                var eb = this.playerRegistry.getPlayer(e9), ec = false;
                null == eb ? eb = new ah(e9) : ec = true;
                eb.cellColor = (e7.getUint8(e7.offset++) << 16) + (e7.getUint8(e7.offset++) << 8) + e7.getUint8(e7.offset++);
                eb.name = am(e7);
                eb.isServerBot = eb.name && -1 !== eb.name.indexOf('\uD83E\uDD16');
                eb.setSkin(al(e7));
                eb.setFlags(e7.getUint8(e7.offset++));
                2 & ~eb.flags || (eb.nameColor = '#' + bw(e7.getUint8(e7.offset++)) + bw(e7.getUint8(e7.offset++)) + bw(e7.getUint8(e7.offset++)), eb.parseEffect(e7.getUint8(e7.offset++)), eb.nameFont = e7.getUint8(e7.offset++));
                ec ? bU.playerRegistry.updatePlayer(eb) : bU.playerRegistry.add(eb);
            }
            for (;;) {
                var ed = 0;
                if (0 == (ei = e7.getUint8(e7.offset++))) {
                    break;
                }
                for (; 2 != ei || 0 != ed || (ed = e7.getUint16(e7.offset, true), e7.offset += 2, 0 != ed);) {
                    if (e9 = e7.getUint16(e7.offset, true), e7.offset += 2, 0 == e9) {
                        if (2 == ei) {
                            ed = 0;
                            continue;
                        }
                        break;
                    }
                    switch ((ej = new af(e9)).setType(ei), ej.setX(e7.getInt16(e7.offset, true)), ej.setY(e7.getInt16(e7.offset + 2, true)), e7.offset += 4, ei) {
                    case 6:
                        ej.color = br(ej.id);
                        break;
                    case 1:
                        ej.setSize(e7.getUint16(e7.offset, true)), e7.offset += 2, ej.color = (e7.getUint8(e7.offset++) << 16) + (e7.getUint8(e7.offset++) << 8) + e7.getUint8(e7.offset++);
                        var ef = e7.getUint8(e7.offset++);
                        if (ej.skin = (127 & ef) - 1, ej.rainbow = !(128 & ~ef), d1.cDarkerBots) {
                            for (var eg in bU.playerRegistry.bucket) {
                                var eh = bU.playerRegistry.bucket[eg];
                                if (eh && eh.isServerBot && eh.cellColor === ej.color) {
                                    ej.color = bx(ej.color, 0.4);
                                    break;
                                }
                            }
                        }
                        break;
                    case 2:
                        ej.setSize(e7.getUint16(e7.offset, true)), e7.offset += 2, ej.playerId = ed;
                        break;
                    case 3:
                    case 4:
                        ej.setSize(e7.getUint16(e7.offset, true)), e7.offset += 2;
                        break;
                    case 5:
                        ej.setSize(e7.getUint16(e7.offset, true)), e7.offset += 2, ej.buff = e7.getUint8(e7.offset++);
                    }
                    ej.onCreate(this);
                }
            }
            for (;;) {
                var ei;
                if (0 == (ei = e7.getUint8(e7.offset++))) {
                    break;
                }
                for (; e9 = e7.getUint16(e7.offset, true), e7.offset += 2, 0 != e9;) {
                    var ej, ek = e7.getInt16(e7.offset, true), el = e7.getInt16(e7.offset + 2, true);
                    switch (e7.offset += 4, null == (ej = 6 == ei ? this.foodObjects[e9] : this.bucket[e9]) ? ((ej = new af(e9)).setType(ei), ej.setSize(10), ej.setX(ek), ej.setY(el), ej.onCreate(this)) : (ej.updateX(ek), ej.updateY(el)), ei) {
                    case 2:
                    case 3:
                    case 4:
                        ej.size_ = e7.getUint16(e7.offset, true), e7.offset += 2;
                    }
                    ej.steps = 30;
                }
            }
            this.sortCells();
        };
        ad.prototype.handlePosition = function (e7) {
            this.centerX_ = e7.getFloat32(e7.offset, true);
            e7.offset += 4;
            this.centerY_ = e7.getFloat32(e7.offset, true);
            e7.offset += 4;
            this.centerSteps = 30;
            d1.cDisableAutoZoom || (this.scale_base = e7.getFloat32(e7.offset, true));
        };
        ad.prototype.handleRespawnCooldown = function (e7) {
            var e8 = e7.getFloat64(e7.offset, true);
            this.respawnCooldown = e8;
        };
        ad.prototype.handleMapData = function (e7) {
            this.playerId = e7.getUint16(e7.offset, true);
            e7.offset += 3;
            this.handleUpdateBorder(e7);
            this.serverData.maxCells = e7.getUint16(e7.offset, true);
            e7.offset += 2;
            al(e7);
            this.serverData.autosplits = e7.getUint8(e7.offset++);
            cO.idSpan ? cO.idSpan.textContent = this.playerId : cm.querySelector('#pId span').textContent = this.playerId;
            this.updateCellCounter(0, true);
            null != ci && bU.sendPacket(new bV.sendPartyJoin(ci));
            c9.css('display', 'none');
            $('#scrimmage-btn-leave').css('display', 'none');
        };
        ad.prototype.handleUpdateBorder = function (e7) {
            this.serverData.border = {};
            this.serverData.border.left = e7.getInt16(e7.offset, true);
            this.serverData.border.top = e7.getInt16(e7.offset + 2, true);
            this.serverData.border.right = e7.getInt16(e7.offset + 4, true);
            this.serverData.border.bottom = e7.getInt16(e7.offset + 6, true);
            e7.offset += 8;
            this.serverData.border.width = this.serverData.border.right - this.serverData.border.left;
            this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top;
            this.serverData.border.enabled = 0 != this.serverData.border.width && 0 != this.serverData.border.height;
            ab();
        };
        ad.prototype.handleResetTime = function (e7) {
            var e8 = e7.getUint8(e7.offset++), e9 = e7.getFloat64(e7.offset, true);
            this.serverData.resetType = e8;
            this.serverData.resetTime = e9;
        };
        ad.prototype.handleSpectators = function (e7) {
            this.spectators = e7.getUint16(e7.offset, true);
            this.updateSpectators();
        };
        ad.prototype.handleClearNodes = function (e7) {
            this.clearBuckets();
        };
        ad.prototype.handleLeaderboard = function (e7) {
            var e8 = cO.leaderCanvas, e9 = cO.leaderCtx || e8 && e8.getContext('2d');
            if (e8 && e9) {
                cO.leaderHeaderEl || (cO.leaderHeaderEl = document.getElementById('leaderboard-header'));
                cO.leaderHeaderEl && 'Leaderboard' !== cO.leaderHeaderEl.textContent && (cO.leaderHeaderEl.textContent = 'Leaderboard');
                var eb = e7.getUint32(e7.offset, true);
                e7.offset += 4;
                var ec = 20 * eb + 5;
                200 !== e8.width && (e8.width = 200);
                e8.height !== ec && (e8.height = ec);
                e9.clearRect(0, 0, e8.width, e8.height);
                e9.font = '16px Calibri';
                for (var ed = 20, ef = 0; ef < eb; ef++) {
                    var eg = e7.getUint16(e7.offset, true);
                    e7.offset += 2;
                    var eh = am(e7) || 'An unnamed cell';
                    eg == this.playerId ? e9.fillStyle = d5.uiLeaderboardHighlightSelf : null != this.partyIds[eg] ? e9.fillStyle = d5.uiLeaderboardHighlightParty : e9.fillStyle = d5.uiForegroundColor;
                    e9.fillText(ef + 1 + '. ' + eh, 10, ed);
                    ed += 20;
                }
            }
        };
        ad.prototype.handleLeaderboardCustom = function (e7) {
            var e8 = cO.leaderCanvas, e9 = cO.leaderCtx || e8 && e8.getContext('2d');
            if (e8 && e9) {
                cO.leaderHeaderEl || (cO.leaderHeaderEl = document.getElementById('leaderboard-header'));
                cO.leaderHeaderEl && 'Leaderboard' !== cO.leaderHeaderEl.textContent && (cO.leaderHeaderEl.textContent = 'Leaderboard');
                var eb = e7.getUint16(e7.offset, true), ec = e7.getUint8(e7.offset + 2, true);
                e7.getUint8(e7.offset + 3, true);
                e7.offset += 4;
                var ed = 20 * eb + 5;
                200 !== e8.width && (e8.width = 200);
                e8.height !== ed && (e8.height = ed);
                e9.clearRect(0, 0, e8.width, e8.height);
                e9.font = '16px Calibri';
                for (var ef = 20, eg = 0; eg < eb; eg++) {
                    var eh = al(e7);
                    e9.fillStyle = eg == ec ? d5.uiLeaderboardHighlightSelf : d5.uiForegroundColor;
                    e9.fillText(eh, 5, ef);
                    ef += 20;
                }
            }
        };
        ad.prototype.handlePing = function () {
            var e7 = +new Date(), e8 = 'number' == typeof bZ ? bZ : c0;
            'number' != typeof e8 && (e8 = e7);
            var e9 = e7 - e8;
            d1.cColoredPing ? (cO.pingSpan || cm.querySelector('#pPing span')).style.color = d5.uiForegroundColor : (cO.pingSpan || cm.querySelector('#pPing span')).style.color = e9 < 100 ? d5.uiGameColorSuccess : e9 < 200 ? d5.uiGameColorWarning : d5.uiGameColorError;
            (cO.pingSpan || cm.querySelector('#pPing span')).textContent = e9 + 'ms';
        };
        ad.prototype.handleChat = function (e7) {
            var e8 = e7.getUint8(e7.offset++), e9 = 'rgb(' + e7.getUint8(e7.offset++) + ',' + e7.getUint8(e7.offset++) + ',' + e7.getUint8(e7.offset++) + ')', eb = e7.getUint8(e7.offset++), ec = e7.getUint16(e7.offset, true);
            if (e7.offset += 2, !cy.includes(ec)) {
                var ed = am(e7);
                e7.getUint8(e7.offset++);
                var ef, eg = b0(am(e7)) || 'An unnamed cell', eh = b0(am(e7)), ei = 1, ej = e7.offset < e7.byteLength ? e7.getBigInt64(e7.offset, true) : 0;
                switch (e8) {
                case 1:
                    ef = 'Party', ei = 2;
                    break;
                case 2:
                    ef = 'Admin', ei = 16;
                    break;
                default:
                    ef = 'All';
                }
                var ek = null, el = ed;
                if (ed.length > 0) {
                    var em = null;
                    for (var eo in dF)
                        if (dF[eo] === ed) {
                            em = parseInt(eo);
                            break;
                        }
                    em && dG[em] && (ek = dG[em]);
                    b0(ef += ' - ' + ed);
                }
                var ep = document.createElement('td');
                0 != ej && (ep.dataset.msgid = ej);
                var eq = document.createElement('span');
                if (ek && ek.style && el.length > 0) {
                    var er = document.createElement('span');
                    for (var es in (er.innerText = el, er.className = 'chat-title', ek.style))
                        er.style[es] = ek.style[es];
                    eq.textContent = '[' + (1 === e8 ? 'Party' : 2 === e8 ? 'Admin' : 'All') + ' - ';
                    eq.appendChild(er);
                    eq.appendChild(document.createTextNode('] '));
                } else {
                    eq.textContent = '[' + ef + '] ';
                }
                ep.appendChild(eq);
                var eu = null;
                d1.cShowChatIds && ((eu = document.createElement('span')).innerText = ' (' + ec + ')', d1.cColoredChatIds || (eu.style.color = 'gray'), eu.style.fontWeight = 'bolder', eu.style.pointerEvents = 'all', eu.style.userSelect = 'all');
                var ev = document.createElement('span');
                ev.innerText = eg;
                ev.dataset.playerId = ec;
                ev.style.color = e9;
                ev.className = 'chat-name';
                null !== eu && ev.appendChild(eu);
                ep.appendChild(ev);
                var ew = document.createElement('span');
                ew.innerHTML = ': ';
                ep.appendChild(ew);
                var ex = document.createElement('span');
                ex.className = 'chat-content';
                ex.style.color = dE[eb];
                ex.innerHTML = bl(eh);
                ep.appendChild(ex);
                aP(ei, ep);
                0 != ej && a4.set(String(ej), ep);
            }
        };
        ad.prototype.handleWhisper = function (e7) {
            var e8 = b0(am(e7)) || 'An unnamed cell', e9 = e7.getUint16(e7.offset, true);
            if (e7.offset += 2, !cy.includes(e9)) {
                var eb = 'rgb(' + e7.getUint8(e7.offset++) + ',' + e7.getUint8(e7.offset++) + ',' + e7.getUint8(e7.offset++) + ')', ec = b0(am(e7)) || 'An unnamed cell', ed = e7.getUint16(e7.offset, true);
                e7.offset += 2;
                var ef = 'rgb(' + e7.getUint8(e7.offset++) + ',' + e7.getUint8(e7.offset++) + ',' + e7.getUint8(e7.offset++) + ')', eg = b0(am(e7)), eh = document.createElement('td'), ei = document.createElement('span');
                ei.innerText = e8;
                ei.dataset.playerId = e9;
                ei.style.color = eb;
                ei.className = 'chat-name';
                ei.oncontextmenu = dm;
                eh.appendChild(ei);
                var ej = document.createElement('span');
                ej.innerHTML = ' > ';
                eh.appendChild(ej);
                var ek = document.createElement('span');
                ek.innerText = ec;
                ek.dataset.playerId = ed;
                ek.style.color = ef;
                ek.className = 'chat-name';
                ek.oncontextmenu = dm;
                eh.appendChild(ek);
                var el = document.createElement('span');
                el.innerHTML = ': ' + bl(eg);
                eh.appendChild(el);
                aP(4, eh);
            }
        };
        ad.prototype.handleEditMessage = function (e7) {
            var e8 = e7.getBigInt64(e7.offset, true);
            e7.offset += 8;
            var e9 = b0(am(e7));
            const eb = String(e8), ec = a4.get(eb);
            if (ec) {
                if (e9.length > 0) {
                    const ed = ec.querySelector('.chat-content');
                    ed && (ed.innerHTML = bl(e9));
                } else {
                    const ef = ec.closest('tr');
                    ef && ef.parentNode && ef.parentNode.removeChild(ef);
                    a4.delete(eb);
                }
            } else {
                e9.length > 0 ? $('.chat-table td[data-msgid=\'' + e8 + '\'] .chat-content').html(bl(e9)) : $('.chat-table td[data-msgid=\'' + e8 + '\']').closest('tr').remove();
            }
        };
        ad.prototype.handleCopyableMessage = function (e7) {
            var e8 = al(e7), e9 = al(e7);
            this.selfMsgCopyable(e8, e9);
        };
        ad.prototype.handleSystemMsg = function (e7) {
            var e8 = am(e7);
            this.selfMsg(e8);
        };
        ad.prototype.handleAuthenticated = function (e7) {
            switch (e7.getUint8(1)) {
            case 0:
                break;
            case 1:
                this.selfMsg('Invalid authentication token! Please logout and try again!');
            }
            this.spectate ? this.sendPacket(new bV.sendSpectate()) : this.sendPacket(new bV.setName(this.name));
        };
        ad.prototype.handleProfile = function (e7) {
            var e8 = al(e7);
            as(JSON.parse(e8));
        };
        ad.prototype.handleInvite = function (e7) {
            if (d1.cAutoDecline) {
                bU.sendPacket(new bV.sendInviteResponse(false));
            } else {
                var e8 = b0(am(e7));
                document.getElementById('popup-party-text').innerText = e8 + ' has invited you to a party.';
                b2($('#popup-party'));
            }
        };
        ad.prototype.handlePartyInfo = function (e7) {
            var e8 = {
                    innerHTML: '',
                    width: ed.width,
                    height: ed.height,
                    pingInterval: setTimeout(function () {
                        e8.isConnected() && e8.sendPing();
                        e7();
                    }, e9)
                }, e9 = [], eb = -1, ec = e7.getUint16(e7.offset, true);
            e7.offset += 2;
            for (var ed = 0; ed < ec; ed++) {
                var ef = {
                        x: eh.x,
                        y: eh.y,
                        x_: eh.x_,
                        y_: eh.y_,
                        state: eh.state,
                        score: eh.score,
                        cache: eh.cache,
                        mmColor: eh.mmColor,
                        mmColor: bs(ef.id)
                    }, eg = e7.getUint8(e7.offset++);
                if (ef.id = e7.getUint16(e7.offset, true), e8[ef.id] = ed, e7.offset += 2, 1 == eg ? (eb = ef.id, ef.isLeader = true) : ef.isLeader = false, ef.name = am(e7) || 'An unnamed cell', ef.x = 0, ef.y = 0, ef.x_ = 0, ef.y_ = 0, ef.score = 0, ef.cache = -1, ef.team = 0, ef.state = dZ.UNKNOWN, null != this.partyIds[ef.id]) {
                    var eh = this.party[this.partyIds[ef.id]];
                    ;
                    ;
                    ;
                    ;
                    ;
                    ;
                    ;
                    ;
                } else {
                    ;
                }
                e9.push(ef);
            }
            this.party = e9;
            this.partyIds = e8;
            this.partyLeader != eb && (this.partyLeader = eb, 'block' == cl.css('display') && dg.checkLeader());
            ec > 0 ? this.drawParty() : this.clearParty();
        };
        ad.prototype.handlePartyData = function (e7) {
            var e8 = e7.getUint16(e7.offset, true);
            if (e7.offset += 2, e8 == this.party.length) {
                for (var e9 = 0; e9 < e8; e9++) {
                    var eb = this.party[e9];
                    eb.state = e7.getUint8(e7.offset++);
                    eb.state === dZ.ALIVE && (eb.x_ = e7.getInt16(e7.offset, true), eb.y_ = e7.getInt16(e7.offset + 2, true), eb.score = e7.getInt32(e7.offset + 4, true), e7.offset += 8);
                }
                this.drawParty();
            }
        };
        ad.prototype.handlePartyJoinCode = function (e7) {
            var e8 = al(e7);
            if (this.partyCode = al(e7), 0 != this.partyCode.length) {
                this.selfMsgCopyable('\uD83C\uDF89 Party is now public! Share this command with friends: ', '/join ' + this.partyCode);
                $('#popup-party-code-content input').val('/join ' + this.partyCode);
                $('#popup-party-code').show();
                var e9 = '#' + this.currentServerName + '&' + this.partyCode;
                window.history.pushState('page', '', e9);
            } else {
                this.selfMsg(e8);
                this.partyCode = null;
                window.history.pushState('page', '', ' ');
            }
        };
        ad.prototype.handleStats = function (e7) {
            var e8 = e7.getUint16(e7.offset, true);
            e7.offset += 2;
            this.stats.name = am(e7) || 'An unnamed cell';
            this.stats.alive += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.eatenFood += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.eatenEject += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.eatenVirus += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.eatenPlayer += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.gainFood += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.gainEject += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.gainVirus += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            this.stats.gainPlayer += e7.getUint32(e7.offset, true);
            e7.offset += 4;
            var e9 = cO.statsMenuEl || document.getElementById('main-stats');
            if (e9) {
                const eb = this.stats, ec = '<span>Name: ' + eb.name + ' (' + e8 + ')</span><br><span>Alive: ' + by(eb.alive) + '</span><br><span>Food eaten: ' + eb.eatenFood + ' (' + eb.gainFood + ')</span><br><span>Ejected mass eaten: ' + eb.eatenEject + ' (' + eb.gainEject + ')</span><br><span>Viruses eaten: ' + eb.eatenVirus + ' (' + eb.gainVirus + ')</span><br><span>Player cells eaten: ' + eb.eatenPlayer + ' (' + eb.gainPlayer + ')</span><br>';
                e9['_lastHtml'] !== ec && (e9.innerHTML = ec, e9['_lastHtml'] = ec);
            }
        };
        ad.prototype.showSubPanel = function (e7) {
            var e8 = 1 == e7.getUint8(e7.offset++);
            this.subPanelOverride = e8;
            aI();
            e8 && (this.serverData.hasSentSubPanel || (aH(), this.serverData.hasSentSubPanel = true), document.body.classList.add('hide-captcha-badge'));
        };
        ad.prototype.updateSubPanel = function (e7) {
            cu && aJ(cu.uid);
        };
        ad.prototype.updateSpectators = function () {
            cO.spectatorCount.html(this.spectators);
        };
        ad.prototype.handleAddBuff = function (e7) {
            var e8 = e7.getUint8(e7.offset++), e9 = e7.getUint8(e7.offset++), eb = e7.getFloat64(e7.offset, true);
            e7.offset += 8;
            this.buffHolder.onAddBuff(e8, e9, eb);
        };
        ad.prototype.handleRemoveBuff = function (e7) {
            var e8 = e7.getUint8(e7.offset++);
            this.buffHolder.onRemoveBuff(e8);
        };
        ad.prototype.handleClearBuffs = function (e7) {
            var e8 = 1 == e7.getUint8(e7.offset++);
            this.buffHolder.clearBuffs(e8);
        };
        ad.prototype.sortCells = function () {
            bM.children.sort(function (e7, e8) {
                return e7.parentCell.size - e8.parentCell.size;
            });
            this.updateScorePanel();
        };
        ad.prototype.updateScorePanel = function () {
            var e7 = 0, e8 = 0;
            for (var e9 in this.myCells)
                e7 += this.myCells[e9].getRealMass(), e8++;
            cO.playerMass.textContent = e7.toLocaleString();
            e7 > this.score && (this.score = e7, cO.playerScore.textContent = this.score.toLocaleString());
            this.updateCellCounter(e8);
        };
        ad.prototype.updateCellCounter = function (e7, e8) {
            if (cO.playerCellCount != e7 || e8) {
                if (cO.playerCellCount = e7, cO.playerCells.textContent = e7 + '/' + this.getServerMaxCells(), d1.cColoredCellCount) {
                    cO.playerCells.style.color = d5.uiForegroundColor;
                } else {
                    var e9 = e7 / this.getServerMaxCells();
                    cO.playerCells.style.color = e9 >= 1 ? d5.uiGameColorError : e9 >= 0.5 ? d5.uiGameColorWarning : d5.uiGameColorSuccess;
                }
            }
        };
        ad.prototype.toggleLineSplit = function () {
            if (this.lineSplitEnabled = !this.lineSplitEnabled, this.lineSplitEnabled) {
                var e7 = 0, e8 = 0, e9 = 0, eb = 0;
                for (var ec in this.myCells) {
                    var ed = this.myCells[ec];
                    e7 += ed.x * ed.size;
                    e8 += ed.y * ed.size;
                    e9 += ed.size;
                    eb++;
                }
                if (0 === eb) {
                    return;
                }
                var ef = e7 / e9, eg = e8 / e9, eh = bK.pivot.x - bG.stage.position.x / this.scale + this.mouseRawX * 1 / this.scale - ef, ei = bK.pivot.y - bG.stage.position.y / this.scale + this.mouseRawY * 1 / this.scale - eg, ej = (180 * Math.atan2(ei, eh) / Math.PI + 360) % 360;
                switch (Math.round(ej / 45)) {
                case 0:
                case 8:
                    this.lineSplitDirection = {
                        'x': 1,
                        'y': 0
                    };
                    break;
                case 1:
                    this.lineSplitDirection = {
                        'x': 1,
                        'y': 1
                    };
                    break;
                case 2:
                    this.lineSplitDirection = {
                        'x': 0,
                        'y': 1
                    };
                    break;
                case 3:
                    this.lineSplitDirection = {
                        'x': -1,
                        'y': 1
                    };
                    break;
                case 4:
                    this.lineSplitDirection = {
                        'x': -1,
                        'y': 0
                    };
                    break;
                case 5:
                    this.lineSplitDirection = {
                        'x': -1,
                        'y': -1
                    };
                    break;
                case 6:
                    this.lineSplitDirection = {
                        'x': 0,
                        'y': -1
                    };
                    break;
                case 7:
                    this.lineSplitDirection = {
                        'x': 1,
                        'y': -1
                    };
                }
                this.lineSplitLocked = true;
                this.lineSplitPhaseStart = 'undefined' != typeof performance && performance.now ? performance.now() : Date.now();
                this.calculateAndLockMousePosition();
                var ek = '';
                if (this.lineSplitDirection.y < 0 && 0 === this.lineSplitDirection.x ? ek = '\u2191' : this.lineSplitDirection.y > 0 && 0 === this.lineSplitDirection.x ? ek = '\u2193' : this.lineSplitDirection.x < 0 && 0 === this.lineSplitDirection.y ? ek = '\u2190' : this.lineSplitDirection.x > 0 && 0 === this.lineSplitDirection.y ? ek = '\u2192' : this.lineSplitDirection.y < 0 && this.lineSplitDirection.x > 0 ? ek = '\u2197' : this.lineSplitDirection.y < 0 && this.lineSplitDirection.x < 0 ? ek = '\u2196' : this.lineSplitDirection.y > 0 && this.lineSplitDirection.x > 0 ? ek = '\u2198' : this.lineSplitDirection.y > 0 && this.lineSplitDirection.x < 0 && (ek = '\u2199'), cO.pLineSpan) {
                    cO.pLineSpan.parentElement.style.display = 'block';
                    cO.pLineSpan.textContent = ek;
                } else {
                    if (em = document.getElementById('pLine')) {
                        em.style.display = 'block';
                        var el = em.querySelector('span');
                        el && (el.textContent = ek);
                    }
                }
            } else {
                var em;
                this.lineSplitLocked = false;
                cO.pLineSpan ? cO.pLineSpan.parentElement.style.display = 'none' : (em = document.getElementById('pLine')) && (em.style.display = 'none');
            }
        };
        ad.prototype['_screenFractionToWorld'] = function (e7, e8) {
            var e9 = bG.stage.position.x, eb = bG.stage.position.y;
            return {
                'x': bK.pivot.x - e9 / this.scale + bR.width * e7 / this.scale,
                'y': bK.pivot.y - eb / this.scale + bR.height * e8 / this.scale
            };
        };
        ad.prototype['_directionToScreenEdge'] = function () {
            var e7 = this.lineSplitDirection.x, e8 = this.lineSplitDirection.y, e9 = 0.5, eb = 0.5;
            return 1 === e7 && 0 === e8 ? (e9 = 0.985, eb = 0.5) : -1 === e7 && 0 === e8 ? (e9 = 0.015, eb = 0.5) : 0 === e7 && 1 === e8 ? (e9 = 0.5, eb = 0.985) : 0 === e7 && -1 === e8 ? (e9 = 0.5, eb = 0.015) : 1 === e7 && -1 === e8 ? (e9 = 0.985, eb = 0.015) : -1 === e7 && -1 === e8 ? (e9 = 0.015, eb = 0.015) : 1 === e7 && 1 === e8 ? (e9 = 0.985, eb = 0.985) : -1 === e7 && 1 === e8 && (e9 = 0.015, eb = 0.985), this['_screenFractionToWorld'](e9, eb);
        };
        ad.prototype.calculateOptimalLineSplitMouse = function () {
            return ('undefined' != typeof performance && performance.now ? performance.now() : Date.now()) - this.lineSplitPhaseStart < this.lineSplitPhaseDelayMs ? this['_screenFractionToWorld'](0.5, 0.5) : this['_directionToScreenEdge']();
        };
        ad.prototype.calculateAndLockMousePosition = function () {
            var e7 = this.calculateOptimalLineSplitMouse();
            this.lineSplitMouseX = e7.x;
            this.lineSplitMouseY = e7.y;
        };
        ad.prototype.drawParty = function () {
            if (0 != this.party.length) {
                if (d1.cHidePartyPanel) {
                    cO.partyPanel[0] && (cO.partyPanel[0].style.display = 'none');
                } else {
                    var e7 = cO.partyPanel[0], e8 = c8 && c8[0];
                    e7 && e8 && 'none' === e7.style.display && 'none' !== e8.style.display && (e7.style.display = 'block');
                }
                var e9 = cO.partyCanvas, eb = cO.partyCtx || e9 && e9.getContext('2d');
                if (e9 && eb) {
                    eb.font = '16px Calibri';
                    for (var ec = 0, ed = 0, ef = 0, eg = 0; eg < this.party.length; eg++) {
                        -1 == (el = this.party[eg]).cache && (el.cache = eb.measureText(eg + 1 + '. ' + el.name).width);
                        el.cache > ec && (ec = el.cache);
                        el.state === dZ.ALIVE || el.state === dZ.UNKNOWN ? (el.scoreText = el.score.toLocaleString(), ef += el.score) : el.state === dZ.DEAD ? el.scoreText = 'DEAD' : el.state === dZ.SPECTATE && (el.scoreText = 'SPEC');
                        var eh = eb.measureText(el.scoreText).width;
                        eh > ed && (ed = eh);
                    }
                    var ei = ef.toLocaleString();
                    ed = Math.max(ed, eb.measureText(ei).width);
                    e9.width = 15 + ec + 50 + ed;
                    e9.height = 20 * this.party.length + 5 + (this.party.length > 1 ? 20 : 0);
                    eb.font = '16px Calibri';
                    var ej = 20, ek = 5 + ec + 50;
                    for (eg = 0; eg < this.party.length; eg++) {
                        var el = this.party[eg];
                        eb.fillStyle = el.isLeader ? d5.uiPartyLeaderColor : d5.uiForegroundColor;
                        eb.fillText(eg + 1 + '. ' + el.name, 5, ej);
                        eb.fillText(el.scoreText, ek, ej);
                        ej += 20;
                    }
                    this.party.length > 1 && (eb.fillStyle = d5.uiForegroundColor, eb.fillText('Total:', 5, ej), eb.fillText(ei, ek, ej));
                }
            }
        };
        ad.prototype.handleShowScrimmageMenu = function () {
            b4(c6);
            c9.css('display', 'block');
            $('#scrimmage-btn-leave').css('display', 'none');
            bU.serverData.border.enabled = false;
        };
        ad.prototype.handleQueueData = function (e7) {
            var e8 = al(e7), e9 = e7.getUint32(e7.offset, true);
            e7.offset += 4;
            var eb = e7.offset < e7.byteLength ? e7.getUint8(e7.offset) : -1, ec = cO.leaderCanvas, ed = cO.leaderCtx || ec && ec.getContext('2d');
            if (ec && ed) {
                cO.leaderHeaderEl || (cO.leaderHeaderEl = document.getElementById('leaderboard-header'));
                cO.leaderHeaderEl && 'Queue' !== cO.leaderHeaderEl.textContent && (cO.leaderHeaderEl.textContent = 'Queue');
                ec.width = 200;
                ec.height = 20 * (2 + (-1 != eb ? 1 : 0)) + 5;
                ed.font = '16px Calibri';
                var ef = 20;
                ed.fillStyle = d5.uiForegroundColor;
                ed.fillText('Mode: ' + e8, 5, ef);
                ef += 20;
                ed.fillText('Time: ' + by(e9), 5, ef);
                -1 != eb && (ef += 20, ed.fillText('Queued players: ' + eb, 5, ef));
            }
        };
        ad.prototype.handleQueueLeave = function (e7) {
            var e8 = al(e7), e9 = cO.leaderCanvas;
            e9 && (e9.width = 0, e9.height = 0);
            this.selfMsg('You have left the queue for [' + e8 + ']');
        };
        ad.prototype.handleMatchState = function (e7) {
            var e8 = 1 == e7.byteLength ? 0 : e7.getUint8(e7.offset++);
            0 == e8 ? (this.selfMsg('A match has been found. Good luck and have fun!'), cB || 'Notification' in window && 'granted' === Notification.permission && new Notification('Your match has started.', { 'icon': 'https://gota.io/assets/images/favicon.png' })) : 1 == e8 && $('#scrimmage-btn-leave').css('display', 'block');
        };
        ad.prototype.handleScrimmageData = function (e7) {
            var e8 = e7.getUint8(e7.offset++), e9 = $('#scrimmage-mode-select'), eb = $('#scrimmage-mode-info'), ec = parseInt(e9.val());
            e9.empty();
            eb.empty();
            for (var ed = { ef: true }; e8 > 0;) {
                var ef = e7.getUint8(e7.offset++), eg = al(e7), eh = al(e7), ei = document.createElement('option');
                ei.innerHTML = eg;
                ei.value = ef;
                e9.append(ei);
                (ei = document.createElement('div')).innerHTML = eh;
                ei.id = 'scrimmage-info-' + ef;
                ei.style.display = 'none';
                eb.append(ei);
                ;
                e8--;
            }
            if (cj = {
                    'modes': {},
                    'sizes': {},
                    'maps': []
                }, e7.byteLength - 1 > e7.offset) {
                for (e8 = e7.getUint8(e7.offset++); e8 > 0;) {
                    ef = e7.getUint8(e7.offset++);
                    eg = al(e7);
                    cj.modes[ef] = {
                        'id': ef,
                        'name': eg
                    };
                    e8--;
                }
                for (e8 = e7.getUint8(e7.offset++); e8 > 0;) {
                    ef = e7.getUint8(e7.offset++);
                    eg = al(e7);
                    cj.sizes[ef] = {
                        'id': ef,
                        'name': eg
                    };
                    e8--;
                }
                for (e8 = e7.getUint8(e7.offset++); e8 > 0;) {
                    for (var ej = {
                                'name': eg = al(e7),
                                'startmass': 0,
                                'teams': 0,
                                'modes': [],
                                'sizes': []
                            }, ek = e7.getUint8(e7.offset++); ek > 0;) {
                        ej.modes.push(e7.getUint8(e7.offset++));
                        ek--;
                    }
                    for (ek = e7.getUint8(e7.offset++); ek > 0;) {
                        ej.sizes.push(e7.getUint8(e7.offset++));
                        ek--;
                    }
                    ej.startmass = e7.getUint16(e7.offset, true);
                    e7.offset += 2;
                    ej.respawnDelay = e7.getInt16(e7.offset, true);
                    e7.offset += 2;
                    ej.teams = e7.getUint8(e7.offset++);
                    cj.maps.push(ej);
                    e8--;
                }
            }
            for ($('#scrimmage-custom-btn-container').css('display', 0 == cj.maps.length ? 'none' : 'block'), $('#scrimmage-map').empty(), ek = 0; ek < cj.maps.length; ek++) {
                $('#scrimmage-map').append('<option value=\'' + ek + '\'>' + cj.maps[ek].name + '</option>');
            }
            null != ed[ec] ? (e9.val(ec), e9.trigger('change')) : (e9.prop('selectedIndex', 0), e9.trigger('change'));
        };
        ad.prototype.handleCustomGameUpdate = function (e7) {
            switch (e7.getUint8(e7.offset++)) {
            case 0:
                dg.updateMap(e7.getUint8(e7.offset++));
                break;
            case 1:
                dg.updateMode(e7.getUint8(e7.offset++));
                break;
            case 2:
                dg.updateSize(e7.getUint8(e7.offset++));
                break;
            case 3:
                dg.updateStartMass(e7.getUint16(e7.offset, true)), e7.offset += 2;
                break;
            case 4:
                dg.updateLock(1 === e7.getUint8(e7.offset++));
                break;
            case 5:
                var e8 = e7.getUint8(e7.offset++), e9 = e7.getUint8(e7.offset++);
                bU.party[e8].team = e9, dg.updatePlayerById(e8);
                break;
            case 6:
                var eb = e7.getUint8(e7.offset++);
                for (e8 = 0; eb > 0;) {
                    bU.party[e8].team = e7.getUint8(e7.offset++);
                    eb--;
                    e8++;
                }
                dg.updatePlayers();
                break;
            case 7:
                dg.updateVirusDensity(e7.getUint16(e7.offset, true)), e7.offset += 2;
                break;
            case 11:
                dg.updateRespawnDelay(e7.getInt16(e7.offset, true)), e7.offset += 2;
                break;
            case 12:
                dg.updateAutoSplit(1 === e7.getUint8(e7.offset++));
                break;
            case 8:
                dg.updatePublic(1 === e7.getUint8(e7.offset++));
                break;
            case 9:
                dg.updatePassword(1 === e7.getUint8(e7.offset++));
                break;
            case 10:
                dg.updateName(am(e7));
            }
        };
        ad.prototype.handleCustomGameShow = function (e7) {
            $('.scrimmage-full').css('display', 'none');
            $('#scrimmage-custom').css('display', 'block');
            var e8 = am(e7), e9 = e7.getUint8(e7.offset++), eb = e7.getUint8(e7.offset++), ec = e7.getUint8(e7.offset++), ed = e7.getUint16(e7.offset, true);
            e7.offset += 2;
            var ef = e7.getUint16(e7.offset, true);
            e7.offset += 2;
            var eg = e7.getInt16(e7.offset, true);
            e7.offset += 2;
            for (var eh = 1 === e7.getUint8(e7.offset++), ei = 1 === e7.getUint8(e7.offset++), ej = 1 === e7.getUint8(e7.offset++), ek = 1 === e7.getUint8(e7.offset++), el = e7.getUint8(e7.offset++), em = 0; el > 0;) {
                bU.party[em].team = e7.getUint8(e7.offset++);
                el--;
                em++;
            }
            dg.updateName(e8);
            dg.updateMap(e9);
            dg.updateMode(eb);
            dg.updateSize(ec);
            dg.updateStartMass(ed);
            dg.updateVirusDensity(ef);
            dg.updateLock(ei);
            dg.updateRespawnDelay(eg);
            dg.updateAutoSplit(eh);
            dg.updatePublic(ej);
            dg.updatePassword(ek);
            dg.updatePlayers();
            dg.checkLeader();
        };
        ad.prototype.handleCustomGameLeave = function () {
            $('.scrimmage-full').css('display', 'none');
            $('#scrimmage-menu').css('display', 'block');
        };
        ad.prototype.handleShowCustomGameLobbies = function (e7) {
            $('.scrimmage-full').css('display', 'none');
            $('#scrimmage-lobbies').css('display', 'block');
            ck = {};
            var e8 = $('#scrimmage-lobbies-tbody');
            for (e8.empty();;) {
                var e9 = e7.getUint32(e7.offset, true);
                if (e7.offset += 4, 0 == e9) {
                    break;
                }
                var eb = {
                    id: e9,
                    name: am(e7),
                    leaderId: e7.getUint32(e7.offset),
                    leaderName: am(e7) || 'An unnamed cell',
                    map: e7.getUint8(e7.offset++),
                    mode: e7.getUint8(e7.offset++),
                    size: e7.getUint16(e7.offset, true),
                    maxSize: e7.getUint16(e7.offset, true),
                    hasPasscode: 1 == e7.getUint8(e7.offset++)
                };
                ;
                ;
                ;
                e7.offset += 4;
                ;
                ;
                ;
                ;
                e7.offset += 2;
                ;
                e7.offset += 2;
                ;
                ck[eb.id] = eb;
                var ec = eb.hasPasscode ? '<div class=\'scrimmage-lock\'></div>' : '';
                e8.append('<tr partyId=\'' + eb.id + '\'><td><span>' + ec + b0(eb.name) + '</span></td><td><span>' + b0(eb.leaderName) + '</span></td><td><span>' + cj.maps[eb.map].name + '</span></td><td><span>' + cj.modes[eb.mode].name + '</span></td><td><span>' + eb.size + '/' + eb.maxSize + '</span></td></tr>');
            }
            $('#scrimmage-lobbies-tbody tr').on('click', function () {
                $('.custom-game-selected').removeClass('custom-game-selected');
                c5 = $(this).attr('partyId');
                $(this).addClass('custom-game-selected');
            });
        };
        var dg = {
            'updateName': function (e7) {
                $('#scrimmage-name').text(e7);
            },
            'updateMap': function (e7) {
                $('#scrimmage-map option[value=\'' + e7 + '\']').prop('selected', true);
                var e8 = cj.maps[e7];
                $('#scrimmage-mapmode').empty();
                for (var e9 = 0; e9 < e8.modes.length; e9++) {
                    var eb = cj.modes[e8.modes[e9]];
                    $('#scrimmage-mapmode').append('<option value=\'' + e9 + '\'>' + eb.name + '</option>');
                }
                for ($('#scrimmage-mapsize').empty(), e9 = 0; e9 < e8.sizes.length; e9++) {
                    var ec = cj.sizes[e8.sizes[e9]];
                    $('#scrimmage-mapsize').append('<option value=\'' + e9 + '\'>' + ec.name + '</option>');
                }
                dg.updateMode(0);
                dg.updateSize(0);
                dg.updateStartMass(e8.startmass);
                $('#scrimmage-startmass').attr('placeholder', e8.startmass);
                dg.updateRespawnDelay(e8.respawnDelay);
                $('#scrimmage-map').attr('data', e7);
                bU.customGameMap = e8;
            },
            'updateMode': function (e7) {
                $('#scrimmage-mapmode option[value=\'' + e7 + '\']').prop('selected', true);
                $('#scrimmage-mapmode').attr('data', e7);
            },
            'updateSize': function (e7) {
                $('#scrimmage-mapsize option[value=\'' + e7 + '\']').prop('selected', true);
                $('#scrimmage-mapsize').attr('data', e7);
            },
            'updateStartMass': function (e7) {
                $('#scrimmage-startmass').val(e7);
                $('#scrimmage-startmass').attr('data', e7);
            },
            'updateVirusDensity': function (e7) {
                $('#scrimmage-virusDensity').val(e7);
                $('#scrimmage-virusDensity').attr('data', e7);
            },
            'updateRespawnDelay': function (e7) {
                $('#scrimmage-respawnDelay').val(e7);
                $('#scrimmage-respawnDelay').attr('data', e7);
            },
            'updateAutoSplit': function (e7) {
                $('#scrimmage-autoSplit').prop('checked', e7);
            },
            'updatePublic': function (e7) {
                $('#scrimmage-public').prop('checked', e7);
            },
            'updatePassword': function (e7) {
                $('#scrimmage-password').prop('checked', e7);
            },
            'updateLock': function (e7) {
                $('#scrimmage-lockteams').prop('checked', e7);
                dg.checkLock();
            },
            'checkLock': function () {
                $('#scrimmage-lockteams').prop('checked') && !bU.isPartyLeader() ? $('#cgp-' + bU.partyIndex).attr('disabled', 'disabled') : $('#cgp-' + bU.partyIndex).removeAttr('disabled');
            },
            'checkLeader': function () {
                bU.isPartyLeader() ? $('.custom-game').removeAttr('disabled') : ($('.custom-game').attr('disabled', 'disabled'), dg.checkLock());
            },
            'updatePlayerById': function (e7) {
                var e8 = bU.party[e7];
                $('#cgp-' + e7 + ' option[value=\'' + e8.team + '\']').prop('selected', true);
                $('#cgp-name-' + e7).text(e8.name);
                $('#cgp-name-' + e7).css('color', e0[e8.team]);
            },
            'updatePlayers': function () {
                $('#scrimmage-custom-players').empty();
                for (var e7 = 0; e7 < bU.party.length; e7++) {
                    var e8 = bU.party[e7];
                    e8.id == bU.playerId && (bU.partyIndex = e7);
                    $('#scrimmage-custom-players').append('<tr><td><span id=\'cgp-name-' + e7 + '\'>' + e8.name + '</span></td>' + dg.getTeamOptions(e7, bU.customGameMap.teams) + '</tr>');
                    $('#cgp-' + e7 + ' option[value=\'' + e8.team + '\']').prop('selected', true);
                    $('#cgp-name-' + e7).css('color', e0[e8.team]);
                    $('#cgp-' + e7).on('change', function (e9) {
                        var eb = parseInt($(this).attr('id').match('\\d+')[0]), ec = $(this).find('option:selected').val();
                        $('#cgp-' + e7 + ' option[value=\'' + $(this).attr('data') + '\']').prop('selected', true);
                        bU.sendPacket(new bV.sendCustomGameUpdate(5, eb, ec));
                    });
                }
                dg.checkLeader();
            },
            'getTeamOptions': function (e7, e8) {
                var e9 = '';
                if (null != e8 && e8 > 1) {
                    e9 = '<td><select class=\'custom-game\' id=\'cgp-' + e7 + '\'><option value=\'0\'>Spectator</option>';
                    for (var eb = 1; eb <= e8; eb++) {
                        e9 += '<option value=\'' + eb + '\' class=\'t' + eb + '\'>' + dV[eb] + '</option>';
                    }
                    e9 += '</select></td>';
                }
                return e9;
            }
        };
        af.prototype.setType = function (e7) {
            this.type = e7;
        };
        af.prototype.setX = function (e7) {
            this.x_ = e7;
            this.x = e7;
        };
        af.prototype.setY = function (e7) {
            this.y_ = e7;
            this.y = e7;
        };
        af.prototype.updateX = function (e7) {
            this.x_ = e7;
        };
        af.prototype.updateY = function (e7) {
            this.y_ = e7;
        };
        af.prototype.setSize = function (e7) {
            this.size_ = e7;
            this.size = e7;
        };
        af.prototype.getMass = function () {
            return this.size * this.size / 25 | 0;
        };
        af.prototype.getRealMass = function () {
            return this.size_ * this.size_ / 25 | 0;
        };
        af.prototype.animate = function (e7) {
            this.x += (this.x_ - this.x) * e7;
            this.y += (this.y_ - this.y) * e7;
            this.size += (this.size_ - this.size) * e7;
            this.steps--;
        };
        af.prototype.getSizeCache = function () {
            var e7 = this.getMass(), e8 = false;
            if (this.massLastAmount < 0 ? e8 = true : e7 !== this.massLastAmount ? (Math.abs(e7 - this.massLastAmount) >= this['_massChangeThreshold'] || bW - this['_massCacheLastRedraw'] >= this['_massRegenIntervalMs']) && (e8 = true) : bW - this['_massCacheLastRedraw'] >= 1000 && null == this.cache && (e8 = true), e8) {
                var e9;
                e9 = 1 == cW.massType ? this.toShortString(e7) : e7.toString();
                for (var eb = 0, ec = 0, ed = 0; ed < e9.length; ed++) {
                    var ef = e9.charAt(ed);
                    eb += (ei = dh.getNumber(ef)).width - 2;
                    ec = Math.max(ei.height, ec);
                }
                null == this.cache ? this.cache = bF.RenderTexture.create(eb, ec) : eb == this.cache.width && ec == this.cache.height || (this.cache.destroy({
                    'children': true,
                    'texture': true,
                    'baseTexture': true
                }), this.cache = bF.RenderTexture.create(eb, ec));
                var eg = dh.cacheContainer, eh = 0;
                for (ed = 0; ed < e9.length; ed++) {
                    var ei;
                    ef = e9.charAt(ed);
                    (ei = dh.getSizeCacheSprite()).texture = dh.getNumber(ef).texture;
                    ei.position.x = eh;
                    eg.addChild(ei);
                    eh += ei.width - 2;
                }
                bG.renderer.render(eg, {
                    'renderTexture': this.cache,
                    'clear': true
                });
                dh.clearCacheContainer();
                this.massLastAmount = e7;
                this['_massCacheLastRedraw'] = bW;
            }
            return this.cache;
        };
        af.prototype.toShortString = function (e7) {
            return e7 < 1000 ? e7.toString() : e7 < 1000000 ? (Math.floor(e7 / 100) / 10).toFixed(1) + 'K' : e7 < 1000000000 ? (Math.floor(e7 / 100000) / 10).toFixed(1) + 'M' : e7 >= 1000000000 ? (Math.floor(e7 / 100000000) / 10).toFixed(1) + 'B' : e7.toString();
        };
        const dh = new function () {
            this.cache = {};
            this.cacheContainer = new bF.Container();
            this.sprites = [];
            this.spritesIndex = 0;
            this.getNumber = function (e7) {
                return this.cache[e7];
            };
            this.clearCacheContainer = function () {
                for (; this.cacheContainer.children[0];) {
                    this.cacheContainer.removeChild(this.cacheContainer.children[0]);
                }
                this.spritesIndex = 0;
            };
            this.getSizeCacheSprite = function () {
                for (; this.spritesIndex >= this.sprites.length;) {
                    this.sprites.push(new bF.Sprite());
                }
                return this.sprites[this.spritesIndex++];
            };
            this.buildSizeCache = function () {
                for (var e7 of [
                        '0',
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '.',
                        'K',
                        'M',
                        'B',
                        'T'
                    ]) {
                    var e8 = new bF.Text(e7, {
                        'fontFamily': 'Verdana',
                        'fontWeight': 'bold',
                        'fontSize': 54,
                        'fill': '#fff',
                        'stroke': 'black',
                        'strokeThickness': 0
                    });
                    this.cache[e7] = e8;
                }
            };
        }();
        af.prototype.handleFood = function () {
            var e7;
            this.needsPixiUpdate && this.sprite.visible && (this.sprite.texture = cN, this.sprite.anchor.set(0.5), this.sprite.width = 12, this.sprite.height = 12, d1.cThemeEnabled && d9.length > 0 ? this.sprite.tint = (e7 = this.id, d9[e7 % d9.length]) : cR.enabled && cR.foodColors && cR.foodColors.length > 0 && !d1.cDisableEventSkins ? this.sprite.tint = cR.foodColors[this.id % cR.foodColors.length] : this.sprite.tint = this.color, this.needsPixiUpdate = false);
            this.sprite.position.set(this.x, this.y);
        };
        af.prototype.handle = function () {
            switch (this.type) {
            case 0:
                break;
            case 1:
                this.needsPixiUpdate && (this.skin >= 0 && this.skin < dN.length ? this.sprite.texture = dN[this.skin] : this.sprite.texture = cM, this.sprite.tint = this.color, this.sprite.width = 2 * this.size, this.sprite.height = 2 * this.size, this.needsPixiUpdate = false), this.rainbow && (this.sprite.tint = dO[Math.floor(bW % dP / 100)]), this.sprite.position.set(this.x, this.y);
                break;
            case 2:
                var e7 = bU.playerRegistry.getPlayerById(this.playerId), e8 = 3;
                bU.playerId == this.playerId ? e8 = 1 : null != bU.partyIds[this.playerId] && (e8 = 2);
                let ei = this.needsPixiUpdate;
                if (this.needsPixiUpdate && (this.cellSprite = new bF.Sprite(bF.Texture.EMPTY), this.cellSprite.anchor.set(0.5), this.cellSprite.width = 256, this.cellSprite.height = 256, this.container.addChild(this.cellSprite), this.skinSprite = new bF.Sprite(bF.Texture.EMPTY), this.skinSprite.anchor.set(0.5), this.skinSprite.width = 256, this.skinSprite.height = 256, this.container.addChild(this.skinSprite), this.massSprite = new bF.Sprite(bF.Texture.EMPTY), this.container.addChild(this.massSprite), e7.name.length > 0 && (this.nameSprite = new bF.Sprite(bF.Texture.EMPTY), this.container.addChild(this.nameSprite)), this.needsPixiUpdate = false), e7.cacheUpdate || ei) {
                    if (this.nameSprite && (this.nameSprite.texture = e7.getNameCache(e7.cacheUpdate).texture, this.nameSprite.texture.update()), 1 == e7.spiked) {
                        null ? this.cellSprite.texture = null : this.cellSprite.texture = c1;
                        this.cellSprite.tint = 16777215;
                    } else {
                        if (2 == e7.spiked) {
                            null ? this.cellSprite.texture = null : this.cellSprite.texture = c2;
                            this.cellSprite.tint = 16777215;
                        } else {
                            this.cellSprite.texture = cL;
                            var e9 = e7.cellColor;
                            e7.isServerBot && d1.cDarkerBots && (e9 = bx(e9, 0.4));
                            this.cellSprite.tint = e9;
                        }
                    }
                }
                if (this.skinSprite.visible = 3 >= e8 && 0 == e7.spiked, this.skinSprite.visible) {
                    var eb = e7.getSkin();
                    null != eb ? eb.isGif ? this.skinSprite.texture = eb.getTexture() : eb !== this.skinSprite.texture && (this.skinSprite.texture = eb) : this.skinSprite.visible = false;
                }
                var ec = 4 / this.size, ed = 4 * Math.max(ec, 0.16), ef = bU.scale >= 4 * ec || d1.cDisableAutoNameHiding;
                if (this.nameSprite && (this.nameSprite.visible = 3 >= e8 && ef, this.nameSprite.visible && (this.nameSprite.scale.set(ed), this.nameSprite.x = -this.nameSprite.width / 2, e7.lowerName ? this.nameSprite.y = 64 - this.nameSprite.height / 2 : this.nameSprite.y = -this.nameSprite.height / 2, 1 == e7.effect && null != dx[0]))) {
                    this.nameEffectSprite || (this.nameEffectSprite = new bF.Sprite(bF.Texture.EMPTY), this.nameSprite.addChild(this.nameEffectSprite));
                    var eg = dx[0].getTexture();
                    this.nameEffectSprite.scale.set(this.nameSprite.texture.width / eg.width, this.nameSprite.texture.height / eg.height);
                    this.nameEffectSprite.texture = eg;
                }
                if (d1.cShowMass && (e8 <= 2 || bU.serverData.autosplits) && ef) {
                    var eh = this.getSizeCache();
                    this.massSprite.texture = eh;
                    this.massSprite.scale.set(ed);
                    this.massSprite.x = -this.massSprite.width / 2;
                    null != this.nameSprite && this.nameSprite.visible ? this.massSprite.y = this.nameSprite.y + this.nameSprite.height : this.massSprite.y = -this.massSprite.height / 2;
                    this.massSprite.visible = true;
                } else {
                    this.massSprite.visible = false;
                }
                4 & ~e7.flags ? this.debuffSprite && (this.debuffSprite.parent.removeChild(this.debuffSprite), this.debuffSprite.destroy(), this.debuffSprite = null) : this.debuffSprite || (this.debuffSprite = new bF.Sprite(dr), this.debuffSprite.anchor.set(0.5), this.debuffSprite.width = 268, this.debuffSprite.height = 268, this.container.addChild(this.debuffSprite)), 1 & ~e7.flags ? this.shieldSprite && (this.shieldSprite.parent.removeChild(this.shieldSprite), this.shieldSprite.destroy(), this.shieldSprite = null) : this.shieldSprite || (this.shieldSprite = new bF.Sprite(ds), this.shieldSprite.anchor.set(0.5), this.shieldSprite.width = 268, this.shieldSprite.height = 268, this.container.addChild(this.shieldSprite)), this.container.scale.set(this.size / 128), this.container.position.set(this.x, this.y);
                break;
            case 3:
                this.needsPixiUpdate && (this.sprite.anchor.set(0.5), this.sprite.width = 128, this.sprite.height = 128, null ? this.sprite.texture = null : this.sprite.texture = c1, this.needsPixiUpdate = false), this.sprite.scale.set(this.size / 256), this.sprite.position.set(this.x, this.y);
                break;
            case 4:
                this.needsPixiUpdate && (null ? this.sprite.texture = null : this.sprite.texture = c2, cR.enabled && cR.motherCustomEnabled && !d1.cDisableEventSkins && !null || this.setDefaultSpriteAnchor(), this.needsPixiUpdate = false), !null && cR.enabled && (this.size >= 100 && !d1.cDisableEventSkins ? this.sprite.texture = c3 : this.sprite.texture = c2), this.sprite.scale.set(this.size / 256), this.sprite.position.set(this.x, this.y);
                break;
            case 5:
                this.needsPixiUpdate && (this.sprite.texture = du[this.buff].texture, this.sprite.width = 2 * this.size, this.sprite.height = 2 * this.size, this.needsPixiUpdate = false), this.sprite.position.set(this.x, this.y);
            }
        };
        af.prototype.setDefaultSpriteAnchor = function () {
            this.sprite.anchor.set(0.5);
            this.sprite.width = 128;
            this.sprite.height = 128;
        };
        af.prototype.onCreate = function (e7) {
            if (2 == this.type) {
                if (this.container) {
                    return;
                }
                this.container = new bF.Container();
                this.container.parentCell = this;
                this.needsPixiUpdate = true;
                bM.addChild(this.container);
            } else {
                if (this.sprite) {
                    return;
                }
                this.sprite = new bF.Sprite(bF.Texture.EMPTY);
                this.sprite.parentCell = this;
                this.sprite.anchor.set(0.5);
                this.needsPixiUpdate = true;
                6 === this.type ? bL.addChild(this.sprite) : bM.addChild(this.sprite);
            }
            6 == this.type ? (e7.foodObjects[this.id] = this, e7['_foodVersionCounter'] = (e7['_foodVersionCounter'] || 0) + 1) : (e7.bucket[this.id] = this, e7['_bucketVersionCounter'] = (e7['_bucketVersionCounter'] || 0) + 1);
            this.playerId == e7.playerId && (e7.myCells[this.id] = this, e7['_myCellVersionCounter'] = (e7['_myCellVersionCounter'] || 0) + 1, e7['_forceNextRender'] = true);
        };
        af.prototype.onDelete = function () {
            this.container ? (this.container.parent.removeChild(this.container), this.container.parentCell = null, this.container.destroy({ 'children': true }), this.container = null) : this.sprite && (this.sprite.parent.removeChild(this.sprite), this.sprite.parentCell = null, this.sprite.destroy({ 'children': true }), this.sprite = null);
            this.cache && (this.cache.destroy(), this.cache = null);
            void 0 !== bU && (6 == this.type ? bU['_foodVersionCounter'] = (bU['_foodVersionCounter'] || 0) + 1 : bU['_bucketVersionCounter'] = (bU['_bucketVersionCounter'] || 0) + 1, this.playerId == (bU && bU.playerId) && (bU['_myCellVersionCounter'] = (bU['_myCellVersionCounter'] || 0) + 1));
        };
        ai.prototype.connectionStart = function () {
            var e7 = 'Gota Web ' + version, e8 = new ArrayBuffer(1 + e7.length + 1 + 1), e9 = new DataView(e8);
            return e9.setUint8(0, 255), e9.setUint8(1, 6), aj(2, e9, e7), e8;
        };
        ai.prototype.setName = function (e7) {
            var e8 = new ArrayBuffer(2 + 2 * (e7.length + 1)), e9 = new DataView(e8);
            return e9.setUint8(0, 0), ak(1, e9, e7), d1.cSilentLogin && e9.setUint8(2 + 2 * e7.length + 1, 1), e8;
        };
        ai.prototype.sendKey = function (e7) {
            var e8 = new ArrayBuffer(1);
            return new DataView(e8).setUint8(0, e7), e8;
        };
        ai.prototype.sendMouse = function (e7, e8) {
            var e9 = new ArrayBuffer(9), eb = new DataView(e9);
            return eb.setUint8(0, 16), eb.setInt32(1, e7, true), eb.setInt32(5, e8, true), e9;
        };
        ai.prototype.sendEjectMass = function (e7) {
            var e8 = new ArrayBuffer(1);
            return new DataView(e8).setUint8(0, e7 ? 3 : 4), e8;
        };
        ai.prototype.sendPing = function () {
            var e7 = new ArrayBuffer(1);
            return new DataView(e7).setUint8(0, 71), c0 = Date.now(), e7;
        };
        ai.prototype.sendSpectate = function (e7) {
            var e8 = new ArrayBuffer(3), e9 = new DataView(e8);
            return e9.setUint8(0, 1), e7 && e9.setUint16(1, e7, true), e8;
        };
        ai.prototype.sendChat = function (e7, e8) {
            var e9 = new ArrayBuffer(2 + 2 * (e7.length + 1)), eb = new DataView(e9);
            return eb.setUint8(0, 72), eb.setUint8(1, e8), ak(2, eb, e7), e9;
        };
        ai.prototype.sendInviteResponse = function (e7) {
            var e8 = new ArrayBuffer(2), e9 = new DataView(e8);
            return e9.setUint8(0, 41), e9.setUint8(1, e7 ? 1 : 0), e8;
        };
        ai.prototype.sendPartyAction = function (e7, e8) {
            var e9 = new ArrayBuffer(6), eb = new DataView(e9);
            return eb.setUint8(0, 40), eb.setUint8(1, e7), eb.setUint32(2, e8, true), e9;
        };
        ai.prototype.sendPartyJoin = function (e7) {
            var e8 = new ArrayBuffer(1 + e7.length + 1), e9 = new DataView(e8);
            return e9.setUint8(0, 42), aj(1, e9, e7), e8;
        };
        ai.prototype.sendShowProfile = function (e7) {
            var e8 = new ArrayBuffer(3), e9 = new DataView(e8);
            return e9.setUint8(0, 103), e9.setUint16(1, e7, true), e8;
        };
        ai.prototype.sendWhisper = function (e7, e8) {
            var e9 = new ArrayBuffer(5 + 2 * (e8.length + 1)), eb = new DataView(e9);
            return eb.setUint8(0, 73), eb.setUint32(1, e7, true), ak(5, eb, e8), e9;
        };
        ai.prototype.sendSubPanel = function () {
            var e7 = new ArrayBuffer(8 + (db.skinName.length + 1)), e8 = new DataView(e7);
            return e8.setUint8(0, 10), e8.setUint8(1, db.nameColor.r), e8.setUint8(2, db.nameColor.g), e8.setUint8(3, db.nameColor.b), e8.setUint8(4, db.chatColor), e8.setUint8(5, db.effect), e8.setUint8(6, db.lowerName ? 1 : 0), aj(7, e8, db.skinName), e8.setUint8(8 + db.skinName.length, db.nameFont), e7;
        };
        ai.prototype.sendLockedNameChange = function (e7) {
            var e8 = new ArrayBuffer(1 + (e7.length + 1)), e9 = new DataView(e8);
            return e9.setUint8(0, 11), aj(1, e9, e7), e8;
        };
        ai.prototype.sendOptions = function () {
            var e7 = new ArrayBuffer(3), e8 = new DataView(e7);
            return e8.setUint8(0, 104), e8.setUint16(1, d1.rViewDistance, true), e7;
        };
        ai.prototype.sendQueue = function (e7) {
            var e8 = new ArrayBuffer(5), e9 = new DataView(e8);
            return e9.setUint8(0, 80), e9.setUint8(1, e7), e9.setUint8(2, 0), e9.setUint16(3, 0), e8;
        };
        ai.prototype.sendCustomGame = function (e7) {
            var e8 = new ArrayBuffer(2), e9 = new DataView(e8);
            return e9.setUint8(0, 90), e9.setUint8(1, e7), e8;
        };
        ai.prototype.sendLeaveMatch = function () {
            var e7 = new ArrayBuffer(1);
            return new DataView(e7).setUint8(0, 81), e7;
        };
        ai.prototype.sendShowLobbies = function () {
            var e7 = new ArrayBuffer(2);
            return new DataView(e7).setUint8(0, 93), e7;
        };
        ai.prototype.sendJoinLobby = function (e7, e8) {
            var e9 = new ArrayBuffer(5 + 2 * e8.length + 2), eb = new DataView(e9);
            return eb.setUint8(0, 94), eb.setUint32(1, e7, true), ak(5, eb, e8), e9;
        };
        ai.prototype.sendCaptcha = function (e7) {
            var e8 = new ArrayBuffer(1 + (e7.length + 1)), e9 = new DataView(e8);
            return e9.setUint8(0, 100), aj(1, e9, e7), e8;
        };
        ai.prototype.sendAuthToken = function (e7) {
            var e8 = new ArrayBuffer(1 + (e7.length + 1)), e9 = new DataView(e8);
            return e9.setUint8(0, 101), aj(1, e9, e7), e8;
        };
        ai.prototype.sendCustomGameUpdate = function (e7, e8, e9) {
            var eb = new ArrayBuffer(4), ec = new DataView(eb);
            return ec.setUint8(0, 91), ec.setUint8(1, e7), e7 == 3 || e7 == 7 ? ec.setUint16(2, e8, false) : e7 == 11 ? ec.setInt16(2, e8, false) : (ec.setUint8(2, e8), ec.setUint8(3, e9)), eb;
        };
        ai.prototype.sendCustomGameUpdateString = function (e7, e8) {
            var e9 = new ArrayBuffer(4 + 2 * e8.length), eb = new DataView(e9);
            return eb.setUint8(0, 92), eb.setUint8(1, e7), ak(2, eb, e8), e9;
        };
        var di = null, dj = null;
        const dk = {
            'cDisableAA': function () {
                bG && aD();
            },
            'sRenderType': function () {
                bG && aD();
            },
            'cHideId': function () {
                var e7 = d1.cHideId ? 'none' : 'block';
                document.getElementById('pId').style.display = e7;
            },
            'cHideServer': function () {
                var e7 = d1.cHideServer ? 'none' : 'block';
                document.getElementById('pServer').style.display = e7;
            },
            'cTransCells': function () {
                bM.alpha = d1.cTransCells ? 0.5 : 1;
            },
            'cColoredCellCount': function () {
                bU.updateCellCounter(cO.playerCellCount, true);
            },
            'cShowChatIds': function () {
                var e7 = d1.cShowChatIds ? 'table-row' : 'none';
                document.getElementById('opt_colored_ids').style.display = e7;
            },
            'cHideChat': function () {
                var e7 = d1.cHideChat ? 'none' : 'block';
                $('#chat-panel').css('display', e7);
            },
            'cHideMinimap': function () {
                var e7 = d1.cHideMinimap ? 'none' : 'block';
                $('#minimap-panel').css('display', e7);
            },
            'cHidePartyPanel': function () {
                d1.cHidePartyPanel ? $('#party-panel').css('display', 'none') : bU && bU.party && bU.party.length > 0 && $('#party-panel').css('display', 'block');
            },
            'cDarkerBots': function () {
                if (bU) {
                    for (var e7 in bU.bucket) {
                        var e8 = bU.bucket[e7];
                        e8 && (e8.needsPixiUpdate = true);
                    }
                }
            },
            'sScorePanel': function () {
                switch (d1.sScorePanel) {
                case '0':
                    cm.style.display = 'none';
                    break;
                case '1':
                    cm.style.display = 'flex';
                    break;
                case '2':
                    cm.style.display = 'block';
                }
            },
            'cHideLeaderboard': function () {
                var e7 = d1.cHideLeaderboard ? 'none' : 'block';
                $('#leaderboard-panel').css('display', e7);
            },
            'cHideExtraPanel': function () {
                var e7 = d1.cHideExtraPanel ? 'none' : 'block';
                $('#extra-panel').css('display', e7);
            },
            'cShowCoordinates': function () {
                var e7 = d1.cShowCoordinates ? 'block' : 'none';
                $('#minimap-coordinates').css('display', e7);
                aF();
            },
            'cDisableAutoZoom': function () {
                d1.cDisableAutoZoom && (bU.scale_base = 0.2 * Math.max(bR.height / 1080, bR.width / 1920));
            },
            'cThemeEnabled': function () {
                d1.cThemeEnabled ? a8(function (e7) {
                    const e8 = document.getElementById(e7);
                    e8 && (e8.disabled = false);
                }) : (bh(), a8(function (e7) {
                    const e8 = document.getElementById(e7);
                    e8 && (e8.disabled = true);
                }));
            },
            'cShowBorder': function () {
                ab();
            },
            'cDisableEventSkins': function () {
                cR.enabled && $('body').toggleClass('event-' + cR.key);
                aC();
                aB();
            },
            'cResizableChat': function () {
                $('#chat-resize').css('display', d1.cResizableChat ? 'block' : 'none');
            },
            'sShowNames': function () {
                3 = dQ[d1.sShowNames];
            },
            'sShowSkins': function () {
                3 = dQ[d1.sShowSkins];
            },
            'sMassType': function () {
                cW.massType = dR[d1.sMassType];
            },
            'sTextOutlines': function () {
                for (var e7 in (0 = dS[d1.sTextOutlines], bU.playerRegistry.bucket)) {
                    var e8 = bU.playerRegistry.bucket[e7];
                    e8.nameCache && (e8.nameCache.style.strokeThickness = 0);
                    bU.playerRegistry.updatePlayer(e8);
                }
                dh.buildSizeCache();
            },
            'sQuality': function () {
                ;
                if (1 = dT[d1.sQuality], false) {
                    try {
                        a6();
                    } catch (e8) {
                    }
                }
            },
            'uiForegroundColor': function (e7) {
                bU && bU.drawParty();
                $('.fg-interface-color').css('color', e7);
                $('.interface-color').css('color', e7);
                $('.gota-btn').css('color', e7).css('border-color', e7);
                $('.popup-panel').css('color', e7);
                $('.main').css('color', e7);
                $('.main-bottom-stats').css('border-color', e7);
                $('#authed').css('color', e7);
                $('#guest').css('color', e7);
            },
            'uiBackgroundColor': function (e7) {
                $('.hud-panel .interface-color').css('background-color', e7);
            },
            'uiButtonColor': function (e7) {
                $('.gota-btn').css('background-color', e7);
            },
            'uiBorderColor': function (e7) {
                $('.ui-pane').css('border-color', e7);
                $('#chat-tab-container').css('border-color', e7);
                $('.chat-tab').css('border-color', e7);
            },
            'uiMenuBackgroundColor': function (e7) {
                $('.main-panel').css('background-color', e7);
                $('.popup-panel').css('background-color', e7);
                $('.options-container').css('background-color', e7);
            },
            'uiMenuTitleBackgroundColor': function (e7) {
                $('.menu-title').css('background-color', e7);
            },
            'uiMenuSubBackgroundColor': function (e7) {
                $('.menu-sub-bg').css('background-color', e7);
                $('.server-active').css('background-color', e7);
                $('#server-content').css('background-color', e7);
            },
            'uiMenuSubBackground2Color': function (e7) {
                $('.menu-sub-bg2').css('background-color', e7);
                $('.server-table tbody').css('background-color', e7);
            },
            'uiPartyLeaderColor': function (e7) {
                bU && bU.drawParty();
            },
            'uiGameColorSuccess': function (e7) {
                $('#social-friends-online-count').css('color', e7);
            },
            'uiGameBackgroundColor': function (e7) {
                document.body.style.background = e7;
            },
            'uiGameBorderColor': function () {
                ab();
            },
            'rUiScale': function (e7) {
                d1.rUiScale = Math.min(Math.max(e7, 0.5), 1.25);
                $('#uiScale').val(Number.parseFloat(100 * d1.rUiScale).toFixed(0));
                $('.ui-scale').css('transform', 'scale(' + d1.rUiScale + ')');
            },
            'rReconnectPeriod': function (e7) {
                d1.rReconnectPeriod = Math.min(Math.max(e7, 0), 10);
                $('#reconnectPeriod').val(d1.rReconnectPeriod);
            },
            'rAnimationDelay': function (e7) {
                d1.rAnimationDelay = Math.min(Math.max(e7, 1), 250);
                $('#animationDelay').val(d1.rAnimationDelay);
            },
            'rViewDistance': function (e7) {
                d1.rViewDistance = Math.min(Math.max(e7, 50), 150);
                $('#viewDistance').val(d1.rViewDistance);
                bU.sendOptions();
            },
            'rBorderSize': function (e7) {
                d5.rBorderSize = Math.min(Math.max(e7, 1), 256);
                $('#borderSize').text(d5.rBorderSize);
                ab();
            },
            'rBackgroundOpacity': function (e7) {
                d5.rBackgroundOpacity = Math.min(Math.max(e7, 0), 1);
                $('#backgroundOpacity').text(Number.parseFloat(100 * d5.rBackgroundOpacity).toFixed(0));
                document.getElementById('canvas-background').style.opacity = d5.rBackgroundOpacity;
            },
            'rTracerOpacity': function (e7) {
                d1.rTracerOpacity = Math.min(Math.max(e7, 10), 100);
                $('#tracerOpacity').val(d1.rTracerOpacity);
                $('#rTracerOpacity').val(d1.rTracerOpacity);
            },
            'rTracerColor': function (e7) {
                d1.rTracerColor = e7;
                $('#rTracerColor').val(d1.rTracerColor);
            },
            'aCustomBackground': function (e7) {
                document.getElementById('canvas-background').style.backgroundImage = 'url(\'' + e7 + '\')';
                document.getElementById('canvas-background').style.backgroundSize = '100% 100%';
            },
            'aCustomSpike': function (e7) {
                for (var e8 in (null && null.destroy(), null = null, bU.bucket)) {
                    var e9 = bU.bucket[e8];
                    3 == e9.type && (e9.needsPixiUpdate = true);
                }
                if (0 != e7.length) {
                    var eb = new Image();
                    eb.crossOrigin = '';
                    var ec = function () {
                            null = bF.Texture.from(eb);
                        }, ed = function () {
                            bU.selfMsg('Unable to load custom theme virus.');
                        };
                    eb.addEventListener('load', ec);
                    eb.addEventListener('error', ed);
                    cG.customElements.push({
                        'element': eb,
                        'event': 'load',
                        'handler': ec
                    }, {
                        'element': eb,
                        'event': 'error',
                        'handler': ed
                    });
                    eb.src = e7;
                }
            },
            'aCustomMother': function (e7) {
                for (var e8 in (null && null.destroy(), null = null, bU.bucket)) {
                    var e9 = bU.bucket[e8];
                    4 == e9.type && (e9.needsPixiUpdate = true);
                }
                if (0 != e7.length) {
                    var eb = new Image();
                    eb.crossOrigin = '';
                    var ec = function () {
                            null = bF.Texture.from(eb);
                        }, ed = function () {
                            bU.selfMsg('Unable to load custom theme mother cell.');
                        };
                    eb.addEventListener('load', ec);
                    eb.addEventListener('error', ed);
                    cG.customElements.push({
                        'element': eb,
                        'event': 'load',
                        'handler': ec
                    }, {
                        'element': eb,
                        'event': 'error',
                        'handler': ed
                    });
                    eb.src = e7;
                }
            }
        };
        var dl = [], dm = function (e7) {
                aZ(0, this.innerText, this.dataset.playerId, -1);
            }, dp = function (e7) {
                var e8 = e7.offsetY, e9 = Math.floor(e8 / 20);
                if (!(e8 % 20 < 5)) {
                    var eb = bU.party[e9];
                    null != eb && aZ(0, eb.name, eb.id, e9);
                }
            };
        ;
        var dr, ds, du = {
                0: new bm('Random', 'random', 0),
                1: new bm('Maximum Cells Upgrade', 'extracells', 1),
                2: new bm('Extra Consumable Slot', 'extraconsumable', 1),
                3: new bm('Merge', 'merge', 2),
                4: new bm('Grow', 'grow', 2),
                5: new bm('Speed', 'speed', 2),
                6: new bm('Shield', 'shield', 2),
                7: new bm('Virus', 'spike', 3),
                8: new bm('Disrupt', 'disrupt', 3),
                9: new bm('Teleport', 'teleport', 3),
                10: new bm('Disrupt', '_disrupt', 4),
                11: new bm('Silver', 'phoenix', 1),
                12: new bm('Consumable Shield', '_shield', 3),
                13: new bm('Magnet', 'magnet', 2),
                14: new bm('Decay', 'decay', 3),
                15: new bm('Decay', '_decay', 4)
            };
        const dv = 3 * cI, dw = ['hearts'];
        for (var dx = [], dy = [], dz = [], dA = 0; dA < 180; dA++) {
            var dB = a2({
                'h': 2 * dA,
                's': 97.25,
                'v': 100,
                'a': 1
            }).toRgb();
            dy[dA] = (dB.r << 16) + (dB.g << 8) + dB.b;
            dz[dA] = a2({
                'h': 2 * dA,
                's': 97.25,
                'v': 100,
                'a': 1
            }).toHex();
        }
        const dC = bu(dy.slice(0)), dD = bu(dz.slice(0));
        dy = null;
        dz = null;
        const dE = [
                '#FFFFFF',
                '#FF9BDC',
                '#FF00FF',
                '#FF0000',
                '#C80000',
                '#FF6900',
                '#FFFF00',
                '#00FF00',
                '#008000',
                '#008080',
                '#00FFFF',
                '#0096FF',
                '#0000FF',
                '#CA48FA',
                '#8A2BE2',
                '#D2C878',
                '#8C4614'
            ], dF = { eB: eA.titles[eB] }, dG = {
                500: {
                    'style': {
                        'color': '#FFD700',
                        'textShadow': '0 0 8px #FFD700, 0 0 12px #FF8C00',
                        'fontWeight': 'bold'
                    }
                },
                501: {
                    'style': {
                        'color': '#00FF00',
                        'textShadow': '0 0 8px #00FF00, 0 0 12px #00AA00',
                        'fontWeight': 'bold'
                    }
                }
            }, dH = {
                'whisper': {
                    'description': 'Whisper a player by ID',
                    'triggers': [
                        'whisper',
                        't',
                        'w'
                    ],
                    'action': function (e7) {
                        var e8 = parseInt(e7[0]);
                        if (isNaN(e8)) {
                            bU.selfMsg('Invalid player id.');
                        } else {
                            var e9 = e7.slice(1).join(' ');
                            0 != e9.length && bU.sendPacket(new bV.sendWhisper(e8, e9));
                            aQ('/t ' + e8 + ' ');
                        }
                    }
                },
                'reply_whisper': {
                    'description': 'Reply to previous whisper',
                    'triggers': [
                        'reply',
                        'r'
                    ],
                    'action': function (e7) {
                        var e8 = e7.join(' ');
                        0 != e8.length && bU.sendPacket(new bV.sendWhisper(0, e8));
                        aQ('/r ');
                    }
                },
                'party_chat': {
                    'description': 'Send a message to other party members',
                    'triggers': [
                        'party',
                        'p'
                    ],
                    'action': function (e7) {
                        var e8 = e7.join(' ');
                        0 != e8.length && bU.sendPacket(new bV.sendChat(e8, 1));
                        aQ('/p ');
                    }
                },
                'invite': {
                    'description': 'Invite a player to the party',
                    'triggers': [
                        'invite',
                        'i'
                    ],
                    'action': function (e7) {
                        var e8 = parseInt(e7[0]);
                        isNaN(e8) ? bU.selfMsg('Invalid ID.') : bU.sendPacket(new bV.sendPartyAction(0, e8));
                    }
                },
                'leave': {
                    'description': 'Leave your current party',
                    'triggers': [
                        'leave',
                        'l'
                    ],
                    'action': function (e7) {
                        bU.sendPacket(new bV.sendPartyAction(3, 0));
                    }
                },
                'promote': {
                    'description': 'Promote a party member to leader',
                    'triggers': ['promote'],
                    'action': function (e7) {
                        var e8 = parseInt(e7[0]);
                        isNaN(e8) ? bU.selfMsg('Invalid ID.') : bU.sendPacket(new bV.sendPartyAction(2, e8));
                    }
                },
                'kick': {
                    'description': 'Kick a player from the party',
                    'triggers': ['kick'],
                    'action': function (e7) {
                        var e8 = parseInt(e7[0]);
                        isNaN(e8) ? bU.selfMsg('Invalid ID.') : bU.sendPacket(new bV.sendPartyAction(1, e8));
                    }
                },
                'clear': {
                    'description': 'Clear the chat',
                    'triggers': ['clear'],
                    'action': function (e7) {
                        for (var e8 = document.getElementsByClassName('chat-active-tab')[0].getAttribute('name'), e9 = document.getElementById('chat-body-' + e8); null != e9.firstChild;) {
                            e9.removeChild(e9.firstChild);
                        }
                    }
                },
                'info': {
                    'description': 'Get your current ID',
                    'triggers': ['info'],
                    'action': function (e7) {
                        bU.playerId > 0 ? bU.selfMsg('Your id is ' + bU.playerId) : bU.selfMsg('You need to be connected to a server to use this command.');
                    }
                },
                'scrimmenu': {
                    'description': 'Show the scrimmage menu',
                    'triggers': ['scrimmenu'],
                    'action': function (e7) {
                        c9.css('display', 'none' == c9.css('display') ? 'block' : 'none');
                    }
                },
                'join': {
                    'description': 'Join a party with a code',
                    'triggers': [
                        'join',
                        'j'
                    ],
                    'action': function (e7) {
                        var e8 = e7[0];
                        null != e8 && 0 != e8.length && bU.sendPacket(new bV.sendPartyJoin(e8));
                    }
                },
                'private': {
                    'description': 'Set the party to private',
                    'triggers': ['private'],
                    'action': function (e7) {
                        bU.sendPacket(new bV.sendPartyAction(4, 1));
                    }
                },
                'public': {
                    'description': 'Allow players to join the party without an invite',
                    'triggers': ['public'],
                    'action': function (e7) {
                        bU.sendPacket(new bV.sendPartyAction(4, 0));
                    }
                },
                'reset_chat': {
                    'description': 'Reset chat size',
                    'triggers': ['resetchat'],
                    'action': function (e7) {
                        $('#chat-panel').css('width', '360px');
                        $('#chat-panel').css('height', '250px');
                    }
                },
                'reset_chat_tabs': {
                    'description': 'Reset chat tab settings',
                    'triggers': ['resetchattabs'],
                    'action': function (e7) {
                        d1['_ChatTabs'] = JSON.parse(JSON.stringify(cX));
                        aU();
                        aS();
                    }
                },
                'spectate': {
                    'description': 'Spectate a player',
                    'triggers': [
                        'spectate',
                        's'
                    ],
                    'action': function (e7) {
                        var e8 = parseInt(e7[0]);
                        isNaN(e8) ? bU.selfMsg('Invalid ID.') : bU.sendPacket(new bV.sendSpectate(e8));
                    }
                },
                'disconnect': {
                    'description': 'Disconnect from the server',
                    'triggers': ['disconnect'],
                    'action': function (e7) {
                        bU.disconnect();
                    }
                },
                'account': {
                    'description': 'Get Account UID',
                    'triggers': ['account'],
                    'action': function (e7) {
                        null !== cu ? bU.selfMsg('UID: ' + cu.uid) : bU.selfMsg('You are not logged in.');
                    }
                },
                'block': {
                    'description': 'Block or unblock a player by ID',
                    'triggers': [
                        'block',
                        'b'
                    ],
                    'action': function (e7) {
                        var e8 = parseInt(e7[0]);
                        if (!isNaN(e8)) {
                            var e9 = bv(e8);
                            bU.selfMsg(e9);
                        }
                    }
                }
            }, dI = [
                '4Head',
                'BibleThump',
                'DansGame',
                'DatSheffy',
                'FailFish',
                'FeelsBadMan',
                'FeelsGoodMan',
                'FeelsMadMan',
                'GabeN',
                'HassanChop',
                'HeyGuys',
                'Kappa',
                'KappaPride',
                'Keepo',
                'Kreygasm',
                'NotLikeThis',
                'OMGScoots',
                'PJSalt',
                'PogChamp',
                'rekt',
                'rip',
                'SaltyCorn',
                'sodaC',
                'sodaHeyGuys',
                'sodaNOPE',
                'sodaW',
                'SwiftRage',
                'WutFace',
                'ResidentSleeper',
                'LUL',
                'MikuFail',
                'PepoHype',
                'KKona',
                'MeguFace',
                'AngryBork',
                'AngeryBOYE',
                'TohruFlex',
                'Sadness',
                'nou',
                'MarioFP'
            ], dJ = [
                'Ditto',
                'MichaelPls',
                'RareParrot',
                'PepePls',
                'RooNoticeMe',
                'PepeEyes',
                'EverythingsFine',
                'WeSmart',
                'PandaAww',
                'SleepyCat',
                'Clap'
            ], dK = [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F'
            ], dL = [
                '',
                'MOUSE1',
                'MOUSE2',
                'MOUSE3',
                'MOUSE4',
                'MOUSE5',
                'HELP',
                '',
                'BACK_SPACE',
                'TAB',
                '',
                '',
                'CLEAR',
                'ENTER',
                'ENTER_SPECIAL',
                '',
                'SHIFT',
                'CONTROL',
                'ALT',
                'PAUSE',
                'CAPS_LOCK',
                'KANA',
                'EISU',
                'JUNJA',
                'FINAL',
                'HANJA',
                '',
                'ESCAPE',
                'CONVERT',
                'NONCONVERT',
                'ACCEPT',
                'MODECHANGE',
                'SPACE',
                'PAGE_UP',
                'PAGE_DOWN',
                'END',
                'HOME',
                'LEFT',
                'UP',
                'RIGHT',
                'DOWN',
                'SELECT',
                'PRINT',
                'EXECUTE',
                'PRINTSCREEN',
                'INSERT',
                'DELETE',
                '',
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                ':',
                ';',
                '<',
                '=',
                '>',
                '?',
                'AT',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
                'OS_KEY',
                '',
                'CONTEXT_MENU',
                '',
                'SLEEP',
                'NUMPAD0',
                'NUMPAD1',
                'NUMPAD2',
                'NUMPAD3',
                'NUMPAD4',
                'NUMPAD5',
                'NUMPAD6',
                'NUMPAD7',
                'NUMPAD8',
                'NUMPAD9',
                'MULTIPLY',
                'ADD',
                'SEPARATOR',
                'SUBTRACT',
                'DECIMAL',
                'DIVIDE',
                'F1',
                'F2',
                'F3',
                'F4',
                'F5',
                'F6',
                'F7',
                'F8',
                'F9',
                'F10',
                'F11',
                'F12',
                'F13',
                'F14',
                'F15',
                'F16',
                'F17',
                'F18',
                'F19',
                'F20',
                'F21',
                'F22',
                'F23',
                'F24',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'NUM_LOCK',
                'SCROLL_LOCK',
                'WIN_OEM_FJ_JISHO',
                'WIN_OEM_FJ_MASSHOU',
                'WIN_OEM_FJ_TOUROKU',
                'WIN_OEM_FJ_LOYA',
                'WIN_OEM_FJ_ROYA',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'CIRCUMFLEX',
                'EXCLAMATION',
                'DOUBLE_QUOTE',
                'HASH',
                'DOLLAR',
                'PERCENT',
                'AMPERSAND',
                'UNDERSCORE',
                'OPEN_PAREN',
                'CLOSE_PAREN',
                'ASTERISK',
                'PLUS',
                'PIPE',
                'HYPHEN_MINUS',
                'OPEN_CURLY_BRACKET',
                'CLOSE_CURLY_BRACKET',
                'TILDE',
                '',
                '',
                '',
                '',
                'VOLUME_MUTE',
                'VOLUME_DOWN',
                'VOLUME_UP',
                '',
                '',
                'SEMICOLON',
                'EQUALS',
                'COMMA',
                'MINUS',
                'PERIOD',
                'SLASH',
                'BACK_QUOTE',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'OPEN_BRACKET',
                'BACK_SLASH',
                'CLOSE_BRACKET',
                'QUOTE',
                '',
                'META',
                'ALTGR',
                '',
                'WIN_ICO_HELP',
                'WIN_ICO_00',
                '',
                'WIN_ICO_CLEAR',
                '',
                '',
                'WIN_OEM_RESET',
                'WIN_OEM_JUMP',
                'WIN_OEM_PA1',
                'WIN_OEM_PA2',
                'WIN_OEM_PA3',
                'WIN_OEM_WSCTRL',
                'WIN_OEM_CUSEL',
                'WIN_OEM_ATTN',
                'WIN_OEM_FINISH',
                'WIN_OEM_COPY',
                'WIN_OEM_AUTO',
                'WIN_OEM_ENLW',
                'WIN_OEM_BACKTAB',
                'ATTN',
                'CRSEL',
                'EXSEL',
                'EREOF',
                'PLAY',
                'ZOOM',
                '',
                'PA1',
                'WIN_OEM_CLEAR',
                ''
            ];
        var dM = [
                'heart',
                'star',
                'home',
                'apple',
                'spiral',
                'dice',
                'chicken',
                'ghost',
                'burger',
                'bow',
                'cloud',
                'skull',
                'mug',
                'flower',
                'music',
                'checkmark',
                'clover',
                'crown',
                'fancy',
                'fish',
                'fire',
                'lightning',
                'paw',
                'duck',
                'snowflake',
                'bomb',
                'butterfly',
                'cherry',
                'watermelon',
                'cat',
                'cupid',
                'sword',
                'shield',
                'tornado',
                'radioactive',
                'rocket',
                'wave',
                'letter_a',
                'letter_b',
                'letter_c',
                'letter_d',
                'letter_e',
                'letter_f',
                'letter_g',
                'letter_h',
                'letter_i',
                'letter_j',
                'letter_k',
                'letter_l',
                'letter_m',
                'letter_n',
                'letter_o',
                'letter_p',
                'letter_q',
                'letter_r',
                'letter_s',
                'letter_t',
                'letter_u',
                'letter_v',
                'letter_w',
                'letter_x',
                'letter_y',
                'letter_z',
                'number_0',
                'number_1',
                'number_2',
                'number_3',
                'number_4',
                'number_5',
                'number_6',
                'number_7',
                'number_8',
                'number_9'
            ], dN = [];
        const dO = [
                16708096,
                13294378,
                9356863,
                3847498,
                42578,
                42612,
                108702,
                43973,
                44527,
                36821,
                29371,
                21669,
                3027346,
                6696593,
                9578383,
                12393101,
                15532172,
                15468916,
                15537243,
                15538497,
                15538980,
                15951139,
                16225309,
                16761359
            ], dP = 100 * dO.length - 1, dX = {
                'ERROR': -1,
                'LOADING': 1,
                'LOADED': 2
            }, dZ = {
                'UNKNOWN': -1,
                'ALIVE': 0,
                'DEAD': 1,
                'SPECTATE': 2
            };
        var e0 = [
            'white',
            '#25f',
            '#f31',
            'green',
            'yellow',
            'purple',
            'orange'
        ];
        const e1 = {
                0: new bD('Verdana', 54),
                1: new bD('ampad', 75),
                2: new bD('burnstown', 81),
                3: new bD('chlorinar', 75),
                4: new bD('Facon', 75),
                5: new bD('archistico', 75),
                6: new bD('breakaway', 81),
                7: new bD('conformity', 81),
                8: new bD('electroharmonix', 70),
                9: new bD('pwjoyeuxnoel', 70),
                10: new bD('leckerli-one', 75),
                101: new bD('IceCaps', 81, '#00c9ff'),
                102: new bD('BrazierFlame', 81, '#e25822')
            }, e2 = e1[0];
        for (var e3 in e1) {
            var e4 = e1[e3];
            new FontFaceObserver(e4.font).load(null, 10000).then(() => {
            }, () => {
            });
            e3 > 0 && e3 < 64 && $('#spNameFont').append('<option value="' + e3 + '" style="font-family:' + e4.font + '">' + e4.font.charAt(0).toUpperCase() + e4.font.slice(1) + '</option>');
        }
        $(window).focus(function () {
            cB = true;
        });
        $(window).blur(function () {
            cB = false;
        });
        var e5 = new function () {
                this.consented = false;
                this.policyID = 'CP_0918_01';
                this.policyLink = 'https://gota.io/policies/privacy.html?v=' + this.policyID + '#cookies';
                this.consentOption = $('#cc_acceptCookies');
                this.consentCookie = {
                    'name': 'cookieConsent',
                    'value': 'yes+' + this.policyID,
                    'exdays': 730,
                    'path': '/web'
                };
                this.cookieBanner = {
                    'banner': $('#cookie-banner'),
                    'decline': $('#declineCookies'),
                    'accept': $('#acceptCookies'),
                    'handlersBound': false
                };
                this.init = function () {
                    this.backwardsCompatable();
                    this.consentOption.on('change', function (e7) {
                        e5.consentHandler($(this).prop('checked'));
                    });
                    this.getConsentCookie() === this.consentCookie.value ? (this.consentHandler(true), this.showCookieBanner(false)) : (this.consentHandler(false), this.showCookieBanner(true));
                };
                this.consentHandler = function (e7) {
                    this.consented = e7;
                    aiptag.consented = e7;
                    this.consentOption.prop('checked', e7);
                    e7 ? (this.createConsentCookie(), this.showCookieBanner(false), function () {
                        if (e5.consented) {
                            var e8 = window.localStorage.getItem('theme');
                            e8 && bi(e8);
                            var e9 = window.localStorage.getItem('keybinds');
                            if (e9) {
                                for (var eb in e9 = JSON.parse(e9))
                                    null != e9[eb] && Number.isInteger(e9[eb]) && (d2[eb] = e9[eb], az($('#' + eb)));
                            }
                            var ec = window.localStorage.getItem('options');
                            if (ec) {
                                for (var ed in (ec = JSON.parse(ec), d1))
                                    ed in ec == 0 && (ec[ed] = d1[ed]);
                            } else {
                                ec = d1;
                            }
                            for (var ed in ec) {
                                var ef = ed.charAt(0);
                                if ('c' == ef) {
                                    if (1 == ec[ed]) {
                                        var eg = $('#' + ed);
                                        eg.prop('checked', ec[ed]);
                                        b9(eg);
                                    }
                                } else {
                                    if ('s' == ef) {
                                        var eh = $('#' + ed);
                                        eh.val(ec[ed]);
                                        bb(eh);
                                    } else {
                                        'i' == ef ? d1[ed] = ec[ed] : 'r' == ef ? (d1[ed] = ec[ed], $('#' + ed).val(d1[ed]), bc($('#' + ed)), 'rTracerColor' === ed && cO.tracerColorInput && (cO.tracerColorInput.value = d1.rTracerColor || '#ffffff', cO.tracerColorInput.dispatchEvent(new Event('input', { 'bubbles': true })))) : d1[ed] = ec[ed];
                                    }
                                }
                            }
                            $('#chat-panel').css('width', d1.iChatWidth);
                            $('#chat-panel').css('height', d1.iChatHeight);
                            d1.cThemeEnabled || bd('cThemeEnabled');
                            var ei = window.localStorage.getItem('name');
                            null != ei && $('#name-box').val(ei);
                            var ej = window.localStorage.getItem('subpanel');
                            if (ej) {
                                for (var ed in ej = JSON.parse(ej))
                                    ej[ed] && 0 != ej[ed].length && (db[ed] = ej[ed]);
                            }
                            void 0 === db.lockedName && (db.lockedName = '');
                            aI();
                        }
                    }(), function () {
                        aI();
                        const e8 = document.getElementById('spNameColor');
                        var e9;
                        e8 && (e8.value = 'string' == typeof (e9 = db.nameColor) && e9.startsWith('#') ? e9 : 'object' == typeof e9 && null !== e9 ? '#' + e9.r.toString(16).padStart(2, '0') + e9.g.toString(16).padStart(2, '0') + e9.b.toString(16).padStart(2, '0') : '#ffffff', e8.dispatchEvent(new Event('input', { 'bubbles': true })), e8.addEventListener('input', function (ec) {
                            db.nameColor = aG(ec.target.value);
                        }));
                        const eb = document.getElementById('spChatColor');
                        eb && (eb.value = dE[db.chatColor], eb.dispatchEvent(new Event('input', { 'bubbles': true })), eb.addEventListener('input', function (ec) {
                            db.chatColor = dE.indexOf(ec.target.value);
                        }));
                        $('#spSkinName').val(db.skinName);
                        $('#spLowerName').prop('checked', db.lowerName);
                        $('#spEffect select').val(db.effect);
                        $('#spNameFont select').val(db.nameFont);
                    }(), $('#btn-chg-ln').on('click', function () {
                        if (cq) {
                            var e8 = prompt('Enter new locked name!');
                            if (e8) {
                                var e9 = null;
                                'string' != typeof e8 && (e9 = 'Please enter a valid name!');
                                e8.length < 2 && (e9 = 'Locked names must be 2 or more characters long.');
                                e8.length > 20 && (e9 = 'Locked names must be 20 or less characters long.');
                                null === e9 ? (e8 = e8.trim(), confirm('You are about to change your locked name to: \'' + e8 + '\'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?') && bU.sendPacket(new bV.sendLockedNameChange(e8))) : alert(e9);
                            }
                        }
                    }), $('#btn-updateSP').on('click', function () {
                        aH();
                    }), $('#btn-subpanel-rules').on('click', function () {
                        db.rules = true;
                        aI();
                    }), $('#no_cookie_consent').hide(), firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(function () {
                    }), 'none' !== $('#account-loader').css('display') ? $('#guest').hide() : $('#guest').show(), 'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'analytics_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                    })) : (this.deleteConsentCookie(), null !== firebase.auth().currentUser && firebase.auth().signOut().then(function () {
                    }).catch(e8 => {
                    }), firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).catch(function () {
                    }), $('#authed').hide(), $('#account-loader').hide(), $('#guest').hide(), $('#no_cookie_consent').show(), this.showCookieBanner(true), 'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('consent', 'update', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied'
                    }));
                };
                this.showCookieBanner = function (e7) {
                    e7 ? (this.cookieBanner.handlersBound || (this.bindBannerHandlers(), this.cookieBanner.handlersBound = true), this.cookieBanner.banner.slideDown()) : this.cookieBanner.banner.slideUp();
                };
                this.bindBannerHandlers = function () {
                    this.cookieBanner.decline.on('click', function (e7) {
                        e5.consentHandler(false);
                        e5.showCookieBanner(false);
                    });
                    this.cookieBanner.accept.on('click', function (e7) {
                        e5.consentHandler(true);
                        e5.showCookieBanner(false);
                    });
                    $('#cookie-banner .description').append(' <a href="' + this.policyLink + '" target="_blank">Our Cookie Policy!</a>');
                };
                this.createConsentCookie = function () {
                    var e7 = new Date();
                    e7.setTime(e7.getTime() + 24 * this.consentCookie.exdays * 60 * 60 * 1000);
                    var e8 = 'expires=' + e7.toUTCString();
                    document.cookie = this.consentCookie.name + '=' + this.consentCookie.value + ';' + e8 + ';path=' + this.consentCookie.path + ';';
                };
                this.deleteConsentCookie = function () {
                    document.cookie = this.consentCookie.name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + this.consentCookie.path + ';';
                };
                this.getConsentCookie = function () {
                    for (var e7 = this.consentCookie.name + '=', e8 = decodeURIComponent(document.cookie).split(';'), e9 = 0; e9 < e8.length; e9++) {
                        for (var eb = e8[e9]; ' ' == eb.charAt(0);) {
                            eb = eb.substring(1);
                        }
                        if (0 == eb.indexOf(e7)) {
                            return eb.substring(e7.length, eb.length);
                        }
                    }
                    return false;
                };
                this.backwardsCompatable = function () {
                    for (var e7 = decodeURIComponent(document.cookie).split(';'), e8 = null, e9 = 0; e9 < e7.length; e9++) {
                        for (var eb = e7[e9]; ' ' == eb.charAt(0);) {
                            eb = eb.substring(1);
                        }
                        0 == eb.indexOf('cookieconsent_status=') && (e8 = eb.substring(21, eb.length));
                    }
                    'allow' === e8 ? (this.createConsentCookie(), document.cookie = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;') : document.cookie = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;';
                };
            }(), e6 = new function () {
                this.playCounter = 0;
                this.incrementPlay = function () {
                    return !cq && (this.playCounter++, this.playCounter % 5 == 1);
                };
            }();
        'undefined' != typeof aipPlayer && aiptag.cmd.player.push(function () {
            adplayer = new aipPlayer({
                'AD_WIDTH': 960,
                'AD_HEIGHT': 540,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': 'Advertisement Loading...',
                'PREROLL_ELEM': document.getElementById('preroll'),
                'AIP_COMPLETE': function () {
                    bU.spectate ? bU.spec() : bU.play();
                }
            });
        });
        (function () {
            function e7(ez) {
                jQuery.ajax({
                    'type': 'GET',
                    'dataType': 'json',
                    'url': 'https://accounts.gota.io/api/v1/utilities/servers',
                    'success': function (eA) {
                        for (var eB of eA) {
                            var eC = [];
                            for (var eD of eB.servers) {
                                eD.players = parseInt(eD.players);
                                eD.bots = eD.bots || 0;
                                var eE = eD.players + eD.bots + '/' + eD.playersMax;
                                eD.bots > 0 && (eE += '*');
                                var eF = new aK(eD.name, eD.address, eD.players, eD.bots, eE, eD.gamemode, eB.region, eD.ssl, eD.order);
                                eC.push(eF);
                            }
                            eC.sort((eH, eI) => eH.order - eI.order);
                            cU[eB.region] = {};
                            for (var eG = 0; eG < eC.length; eG++) {
                                eF = eC[eG];
                                cU[eB.region][eF.name] = eF;
                            }
                        }
                        aL();
                        null != ez ? ez() : null != c4 && aN(c4.name);
                    },
                    'error': function (eA) {
                        aL();
                    }
                });
            }
            function e8() {
                null == c4 ? (aO('eu'), aN('Vendetta')) : aN(c4.name);
            }
            if (bR = document.getElementById('canvas'), bS = document.getElementById('minimap-canvas'), bT = bS.getContext('2d'), c6 = $('#main'), c7 = $('#party-panel'), c8 = $('.hud-panel'), cm = document.getElementById('score-panel'), c9 = $('#main-scrimmage'), cb = $('#context-menu'), cc = document.getElementById('chat-container'), cd = document.getElementById('chat-input'), $('#leaderboard-header'), cl = $('#scrimmage-custom'), cO.mouseFrozenDiv = document.getElementById('pMouse'), cO.playerScore = document.getElementById('pScore').querySelector('span'), cO.playerMass = document.getElementById('pMass').querySelector('span'), cO.playerCells = document.getElementById('pCells').querySelector('span'), cO.playerFps = document.getElementById('pFps').querySelector('span'), cO.serverSpan = document.querySelector('#pServer span'), cO.idSpan = document.querySelector('#pId span'), cO.pingSpan = document.querySelector('#pPing span'), cO.pLineSpan = document.querySelector('#pLine span'), cO.resetInfo = $('#extra-reset-timer'), cO.resetTime = $('#resetTime'), cO.respawnInfo = $('#extra-respawn-cooldown'), cO.respawnCooldown = $('#respawnCooldown'), cO.spectatorCount = $('#spectatorCount'), cO.playerCellCount = 0, cO.minimapCoords = $('#minimap-coordinates'), cO.partyPanel = c7, cO.friendOnlineCount = $('#social-online-friends-count'), cO.leaderCanvas = document.getElementById('leaderboard-canvas'), cO.leaderCanvas && (cO.leaderCtx = cO.leaderCanvas.getContext('2d')), cO.partyCanvas = document.getElementById('party-canvas'), cO.partyCanvas && (cO.partyCtx = cO.partyCanvas.getContext('2d')), cO.minimapCoordsEl = document.getElementById('minimap-coordinates'), cO.statsMenuEl = document.getElementById('main-stats'), cO.tracerColorInput = document.getElementById('rTracerColor'), cO.tracerColorInput && window.PIXI && (d1['_tracerColorCached'] = bF.utils.string2hex(d1.rTracerColor || cO.tracerColorInput.value || '#ffffff'), cO.tracerColorInput.addEventListener('input', ez => {
                    d1.rTracerColor = ez.target.value;
                    d1['_tracerColorCached'] = bF.utils.string2hex(d1.rTracerColor);
                })), cc && cc.addEventListener('contextmenu', ez => {
                    const eA = ez.target.closest && ez.target.closest('.chat-name');
                    eA && eA.dataset && eA.dataset.playerId && (ez.preventDefault(), 'function' == typeof dm && dm.call(eA, ez));
                }), b8(), cf = false, FastClick.attach(document.body), window.is_touch_device) {
                window.joystick_manager = nipplejs.create({
                    'zone': document.getElementById('joystick'),
                    'mode': 'static',
                    'position': {
                        'left': '10%',
                        'bottom': '20%'
                    },
                    'color': 'red',
                    'size': 100,
                    'restOpacity': 0.5,
                    'dynamicPage': true
                });
                d1.cHideChat = true;
                d1.cHideLeaderboard = true;
                var e9 = function (ez) {
                        ez.target.style.opacity = 1;
                        bU.handleKey(d2.kSplit);
                    }, eb = function (ez) {
                        ez.target.style.opacity = 0.3;
                    }, ec = function (ez) {
                        ez.target.style.opacity = 1;
                        cf = true;
                        bU && bU.sendPacket(new bV.sendEjectMass(true));
                    }, ed = function (ez) {
                        ez.target.style.opacity = 0.3;
                        cf = false;
                        bU && bU.sendPacket(new bV.sendEjectMass(false));
                    }, ef = function (ez) {
                        ez.target.style.opacity = 1;
                        bU.handleKey(d2.kDoubleSplit);
                    }, eg = function (ez) {
                        ez.target.style.opacity = 0.3;
                    }, eh = function (ez) {
                        ez.target.style.opacity = 1;
                        bU.handleKey(d2.kTripleSplit);
                    }, ei = function (ez) {
                        ez.target.style.opacity = 0.3;
                    };
                document.getElementById('button_split').addEventListener('touchstart', e9, { 'passive': true });
                document.getElementById('button_split').addEventListener('touchend', eb, { 'passive': true });
                document.getElementById('button_eject').addEventListener('touchstart', ec, { 'passive': true });
                document.getElementById('button_eject').addEventListener('touchend', ed, { 'passive': true });
                document.getElementById('button_double').addEventListener('touchstart', ef, { 'passive': true });
                document.getElementById('button_double').addEventListener('touchend', eg, { 'passive': true });
                document.getElementById('button_triple').addEventListener('touchstart', eh, { 'passive': true });
                document.getElementById('button_triple').addEventListener('touchend', ei, { 'passive': true });
                cG.touchControls.push({
                    'element': document.getElementById('button_split'),
                    'event': 'touchstart',
                    'handler': e9
                }, {
                    'element': document.getElementById('button_split'),
                    'event': 'touchend',
                    'handler': eb
                }, {
                    'element': document.getElementById('button_eject'),
                    'event': 'touchstart',
                    'handler': ec
                }, {
                    'element': document.getElementById('button_eject'),
                    'event': 'touchend',
                    'handler': ed
                }, {
                    'element': document.getElementById('button_double'),
                    'event': 'touchstart',
                    'handler': ef
                }, {
                    'element': document.getElementById('button_double'),
                    'event': 'touchend',
                    'handler': eg
                }, {
                    'element': document.getElementById('button_triple'),
                    'event': 'touchstart',
                    'handler': eh
                }, {
                    'element': document.getElementById('button_triple'),
                    'event': 'touchend',
                    'handler': ei
                });
                window.joystick_manager.on('move', function (ez, eA) {
                    bU.mouseRawX = eA.distance * eA.force * Math.cos(eA.angle.radian) + window.innerWidth / 2;
                    bU.mouseRawY = eA.distance * eA.force * Math.sin(-eA.angle.radian) + window.innerHeight / 2;
                });
            } else {
                var ej = function (ez) {
                        bU.mouseRawX = ez.clientX;
                        bU.mouseRawY = ez.clientY;
                    }, ek = function (ez) {
                        var eA = ez.button + 1;
                        if (d3) {
                            return ay(eA), void ez.preventDefault();
                        }
                        document.activeElement && 'INPUT' === document.activeElement.tagName || c6 && c6.css && 'none' != c6.css('display') || bU.handleKey(eA);
                    }, el = function (ez) {
                        ez.button + 1 == d2.kEjectMass && (cf = false, bU && bU.sendPacket(new bV.sendEjectMass(false)));
                    }, em = function (ez) {
                        var eA = c6 && (c6[0] || c6) || document.getElementById('main'), eB = false;
                        if (eA) {
                            var eC = getComputedStyle(eA);
                            eB = 'none' !== eC.display && 'none' !== eC.pointerEvents;
                        }
                        if (false && !eB && 'canvas' == ez.target.id) {
                            var eD = ez.wheelDelta || -1 * ez.deltaY;
                            ez.preventDefault();
                            bU.mouseZoom *= eD > 0 ? 1.1 : 0.9;
                            bU.mouseZoom = bU.mouseZoom > 5 ? 5 : bU.mouseZoom < 0.1 ? 0.1 : bU.mouseZoom;
                        }
                    };
                window.onmousemove = ej;
                window.onmousedown = ek;
                window.onmouseup = el;
                var eo = document.getElementById('canvas');
                eo && eo.addEventListener && eo.addEventListener('wheel', em, { 'passive': false });
                cG.windowEvents.push({
                    'element': window,
                    'event': 'mousemove',
                    'handler': ej,
                    'isProperty': true
                }, {
                    'element': window,
                    'event': 'mousedown',
                    'handler': ek,
                    'isProperty': true
                }, {
                    'element': window,
                    'event': 'mouseup',
                    'handler': el,
                    'isProperty': true
                });
                eo && cG.windowEvents.push({
                    'element': eo,
                    'event': 'wheel',
                    'handler': em
                });
            }
            var ep = function (ez) {
                    var eA = ez.which || ez.keyCode || ez.charCode;
                    if (!(eA <= 5)) {
                        return d3 ? (ay(eA), void ez.preventDefault()) : void (document.activeElement && 'INPUT' === document.activeElement.tagName || (27 == eA && (b5(c6), (b6($('#popup-profile')) || b6($('#popup-account-username'))) && (b4($('#popup-profile')), b4($('#popup-account-username')))), true || bU.handleKey(eA)));
                    }
                }, eq = function (ez) {
                    (ez.which || ez.keyCode || ez.charCode) == d2.kEjectMass && (cf = false, bU && bU.sendPacket(new bV.sendEjectMass(false)));
                }, er = function (ez) {
                    cf && d1.cDisablePersistEjectMass && (cf = false, bU && bU.sendPacket(new bV.sendEjectMass(false)));
                };
            window.onkeydown = ep;
            window.onkeyup = eq;
            window.onblur = er;
            cG.windowEvents.push({
                'element': window,
                'event': 'keydown',
                'handler': ep,
                'isProperty': true
            }, {
                'element': window,
                'event': 'keyup',
                'handler': eq,
                'isProperty': true
            }, {
                'element': window,
                'event': 'blur',
                'handler': er,
                'isProperty': true
            });
            var es = function (ez) {
                ez.preventDefault();
            };
            document.addEventListener('contextmenu', es);
            cG.windowEvents.push({
                'element': document,
                'event': 'contextmenu',
                'handler': es
            });
            aB();
            (function () {
                function ez(eE, eF) {
                    return new Promise(function (eG, eH) {
                        var eI = new Image();
                        eI.onload = function () {
                            try {
                                var eJ = bF.Texture.from(eI);
                                eG(eJ);
                            } catch (eK) {
                                eH(eK);
                            }
                        };
                        eI.onerror = function (eJ) {
                            eH(eJ);
                        };
                        eI.src = 'images/ejected_mass_skins/' + eF + '.png';
                    });
                }
                for (var eA in (aC(), cg = {}, ch = {}, dI)) {
                    var eB = dI[eA];
                    $('.emote-list').append('<li><img name=\'' + eB + '\' title=\'' + eB + '\' src=\'images/emotes/' + eB + '.png\' /></li>');
                    cg[eB] = true;
                }
                for (var eA in dJ)
                    eB = dJ[eA], $('.gif-list').append('<li><img name=\'' + eB + '\' title=\'' + eB + '\' src=\'images/emotes/gifs/' + eB + '.gif\' /></li>'), ch[eB] = true;
                for (eA = 0; eA < dM.length; eA++) {
                    var eC = dM[eA];
                    $('#spEffect').append('<option value="' + (eA + 1) + '">' + bA(eC) + '</option>');
                    dN[eA] = cM;
                    (function (eE, eF) {
                        ez(0, eF).then(function (eG) {
                            dN[eE] = eG;
                        }).catch(function (eG) {
                        });
                    }(eA, eC));
                }
                for (cR.enabled && cR.customEjectedMass && (new Image().src = 'images/events/' + cR.key + '/ejected_mass.png'), function () {
                        for (var eE in du) {
                            var eF = du[eE], eG = 'images/powerups/' + eF.img + '.png', eH = new Image();
                            eH.addEventListener('load', function (eI, eJ) {
                                eI.texture = bF.Texture.from(eJ);
                            }.bind(null, eF, eH));
                            eH.src = eG;
                            eF.image = eH;
                        }
                        ds = bF.Texture.from('images/shield.png');
                        dr = bF.Texture.from('images/debuff.png');
                    }(), eA = 0; eA < dw.length; eA++) {
                    var eD = eA;
                    gifFrames({
                        'url': 'images/effects/' + dw[eD] + '.gif',
                        'frames': 'all',
                        'cumulative': false,
                        'outputType': 'canvas'
                    }).then(function (eE) {
                        var eF = new bq();
                        eF.loadFromFrameData(eE);
                        dx[eD] = eF;
                    });
                }
            }());
            var eu = window.location.href.split('#').slice(1).join('#').split('&'), ev = '';
            eu[0] && (ev = eu[0].toLowerCase());
            eu[1] && (ci = eu[1]);
            null != ev && '' != ev ? (ev = ev[0].toUpperCase() + ev.slice(1), dc = function () {
                var ez;
                null != (ez = aM(ev)) ? (aN(ez.name), aO(ez.region)) : e8();
            }) : dc = e8;
            var ew = function (ez) {
                var eA = ez.val();
                for (var eB in (eA.version !== version && bU.selfMsg('Woah! Version ' + eA.version + ' is now available. Press Ctrl+F5 to update!'), co != eA.motd && '' !== eA.motd && (co = eA.motd, bU.selfMsg(eA.motd)), eA.listRefresh != dd && (dd = eA.listRefresh, cU = {}, e7(dc), null && clearInterval(null), null = setInterval(() => {
                        document.hidden || e7();
                    }, eA.listRefresh)), eA.titles));
            };
            firebase.database().ref('/game').on('value', ew);
            cG.firebaseListeners.push({
                'element': firebase.database().ref('/game'),
                'event': 'value',
                'handler': ew,
                'isFirebase': true
            });
            bX = {};
            bY = {};
            (function () {
                function ez(eG, eH) {
                    try {
                        'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('event', eG, eH || {});
                    } catch (eI) {
                    }
                }
                function eA(eG, eH) {
                    if (eG) {
                        return $(eH).prop('disabled', false), void $(eH).text('Set');
                    }
                    $(eH).prop('disabled', true);
                    $(eH).text('...');
                }
                cR.enabled && !d1.cDisableEventSkins && $('body').toggleClass('event-' + cR.key);
                $('.server-tab').on('click', function () {
                    aO($(this).attr('region'));
                });
                $('#btn-play').on('click', function () {
                    null == c4 || Date.now() < cp || (0 == Object.keys(bU.myCells).length || this.currentServerName != c4.name ? (bU.spectate = false, e6.incrementPlay() && 'undefined' != typeof adplayer ? (aiptag.cmd.player.push(function () {
                        adplayer.startPreRoll();
                    }), b4(c6), b8(), cp = Date.now() + 2000) : (bU.play(), ez('play_click', {
                        'server_name': c4 ? c4.name : void 0,
                        'region': c4 ? c4.region : void 0,
                        'mode': c4 ? c4.gamemode : void 0
                    }))) : b4(c6));
                });
                $('#btn-servers').on('click', function () {
                    j('main-servers');
                    ez('menu_open', { 'menu': 'servers' });
                });
                $('#btn-options').on('click', function () {
                    j('main-options');
                    ez('menu_open', { 'menu': 'options' });
                });
                $('#btn-hotkeys').on('click', function () {
                    j('main-hotkeys');
                    ez('menu_open', { 'menu': 'hotkeys' });
                });
                $('#btn-themes').on('click', function () {
                    j('main-themes');
                    ez('menu_open', { 'menu': 'themes' });
                });
                $('#btn-cellpanel').on('click', function () {
                    firebase.auth().currentUser ? j('main-subpanel') : window.open('https://store.gota.io', '_blank');
                });
                $('#btn-reddit').on('click', function () {
                    window.open('https://www.reddit.com/r/PlayGotaIO/', '_blank');
                    'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('event', 'social_click', { 'network': 'reddit' });
                });
                $('#btn-discord').on('click', function () {
                    window.open('https://gota.io/discord', '_blank');
                    'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('event', 'social_click', { 'network': 'discord' });
                });
                $('#name-box').keypress(function (eG) {
                    13 == eG.keyCode && $(this).is(':focus') && (bU.play(), ez('play_click', {
                        'server_name': c4 ? c4.name : void 0,
                        'region': c4 ? c4.region : void 0,
                        'mode': c4 ? c4.gamemode : void 0
                    }));
                });
                $('#btn-spec').on('click', function () {
                    null == c4 || Date.now() < cp || (bU.spectate && this.currentServerName == c4.name ? b4(c6) : (bU.spectate = true, e6.incrementPlay() && 'undefined' != typeof adplayer ? (aiptag.cmd.player.push(function () {
                        adplayer.startPreRoll();
                    }), b4(c6), b8(), cp = Date.now() + 2000) : (bU.spec(), ez('spectate_click', {
                        'server_name': c4 ? c4.name : void 0,
                        'region': c4 ? c4.region : void 0,
                        'mode': c4 ? c4.gamemode : void 0
                    }))));
                });
                var eB = function (eG) {
                    var eH, eI = eG.target.value, eJ = eI.split(' ');
                    if (38 == eG.keyCode && $(this).is(':focus')) {
                        return -1 == d0 ? d0 = cZ.length - 1 : d0 > 1 && d0--, d0 <= 0 && (d0 = 0), void aQ(cZ[d0]);
                    }
                    if (40 == eG.keyCode && $(this).is(':focus')) {
                        return -1 == d0 ? d0 = 0 : d0 < cZ.length - 1 && d0++, d0 >= cZ.length - 1 && (d0 = cZ.length - 1), void aQ(cZ[d0]);
                    }
                    if (13 == eG.keyCode && $(this).is(':focus') && (0 != (eH = $(this).val()).length && ('/' == eH.charAt(0) ? function (eN) {
                            var eO = eN.split(' '), eP = eO[0].substring(1);
                            aQ('');
                            var eQ = false;
                            Object.keys(dH).findIndex(eR => {
                                if (dH[eR].triggers.findIndex(eS => eS.toUpperCase() === eP.toUpperCase()) > -1 && 0 == eQ) {
                                    return dH[eR].action(eO.slice(1)), void (eQ = true);
                                }
                            });
                            0 == eQ && bU.selfMsg('Invalid command!');
                        }(eH) : (bU.sendPacket(new bV.sendChat(eH, 0)), aQ('')), cZ.length > 20 && cZ.shift(), cZ.push(eH))), 0 == eI.length || eI.endsWith(' ') || 13 == eG.keyCode) {
                        $('#autocomplete-panel').html('');
                        $('#autocomplete-panel').hide();
                    } else {
                        if (eI.startsWith('/')) {
                            if (eJ.length > 1) {
                                return;
                            }
                            $('#autocomplete-panel').html('<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>');
                            var eK = -1;
                            Object.values(dH).map(eN => {
                                (eK = eN.triggers.findIndex(eO => eO.toLowerCase().startsWith(eJ[0].substring(1).toLowerCase()))) > -1 && $('#autocomplete-panel tbody').append('<tr><td>' + eN.triggers[eK] + '</td><td>' + eN.triggers + '</td><td>' + eN.description + '</td></tr>');
                            });
                            0 == $('#autocomplete-panel tbody').children().length ? $('#autocomplete-panel').hide() : $('#autocomplete-panel').show();
                        } else {
                            if (eJ[eJ.length - 1].startsWith(':')) {
                                $('#autocomplete-panel').html('');
                                var eL = Object.keys(cg).filter(eN => eN.toLowerCase().includes(eJ[eJ.length - 1].substring(1).toLowerCase())), eM = Object.keys(ch).filter(eN => eN.toLowerCase().includes(eJ[eJ.length - 1].substring(1).toLowerCase()));
                                if (0 === eL.length && 0 === eM.length) {
                                    return $('#autocomplete-panel').html(''), void $('#autocomplete-panel').hide();
                                }
                                $('#autocomplete-panel').show();
                                eL.length > 0 && ($('#autocomplete-panel').append('<h3>Emotes</h3>'), eL.forEach(eN => {
                                    $('#autocomplete-panel').append('<img name=\'' + eN + '\' title=\'' + eN + '\' src=\'images/emotes/' + eN + '.png\' />');
                                }));
                                eM.length > 0 && ($('#autocomplete-panel').append('<h3>Gifs</h3>'), eM.forEach(eN => {
                                    $('#autocomplete-panel').append('<img name=\'' + eN + '\' title=\'' + eN + '\' src=\'images/emotes/gifs/' + eN + '.gif\' />');
                                }));
                            }
                        }
                    }
                    d0 = -1;
                };
                cd.addEventListener('keyup', eB);
                cG.chatElements.push({
                    'element': cd,
                    'event': 'keyup',
                    'handler': eB
                });
                $('#autocomplete-panel').on('click', function (eG) {
                    var eH = aR().split(' ');
                    'TD' === eG.target.nodeName ? (aQ('/' + eG.target.parentElement.children[0].innerHTML + ' '), $('#autocomplete-panel').html(''), $('#autocomplete-panel').hide(), $('#chat-input').focus()) : 'IMG' === eG.target.nodeName && (aQ(aR().substring(0, aR().length - eH[eH.length - 1].length) + eG.target.attributes.name.nodeValue + ' '), $('#autocomplete-panel').html(''), $('#autocomplete-panel').hide(), $('#chat-input').focus());
                });
                $('#animationDelay').on('change', function () {
                    var eG = parseInt($(this).val());
                    isNaN(eG) && (eG = 90);
                    d1.rAnimationDelay = Math.min(Math.max(eG, 1), 250);
                    $('#animationDelay').val(d1.rAnimationDelay);
                    $('#rAnimationDelay').val(d1.rAnimationDelay);
                });
                $('#reconnectPeriod').on('change', function () {
                    var eG = parseInt($(this).val());
                    isNaN(eG) && (eG = 5);
                    d1.rReconnectPeriod = Math.min(Math.max(eG, 0), 10);
                    $('#reconnectPeriod').val(d1.rReconnectPeriod);
                    $('#rReconnectPeriod').val(d1.rReconnectPeriod);
                });
                $('#viewDistance').on('change', function () {
                    var eG = parseInt($(this).val());
                    isNaN(eG) && (eG = 100);
                    d1.rViewDistance = Math.min(Math.max(eG, 50), 150);
                    $('#viewDistance').val(d1.rViewDistance);
                    $('#rViewDistance').val(d1.rViewDistance);
                    bU.sendOptions();
                });
                $('#uiScale').on('change', function () {
                    var eG = parseInt($(this).val());
                    isNaN(eG) && (eG = 100);
                    eG *= 0.01;
                    d1.rUiScale = Math.min(Math.max(eG, 0.5), 1.25);
                    $('#uiScale').val(Number.parseFloat(100 * d1.rUiScale).toFixed(0));
                    $('#rUiScale').val(d1.rUiScale);
                    $('.ui-scale').css('transform', 'scale(' + d1.rUiScale + ')');
                });
                var eC = $('#chat-emote-btn'), eD = function () {
                        var eG = dI[Math.floor(Math.random() * dI.length)];
                        eC.css('background-image', 'url(images/emotes/' + eG + '.png)');
                    };
                eD();
                null && clearInterval(null);
                null = setInterval(function () {
                    document.hidden || eD();
                }, 30000);
                var eE = $('#emote-panel'), eF = $('#chat-input');
                eC.on('click', function () {
                    eE.toggle();
                });
                $('#emote-panel ul li img').on('click', function (eG) {
                    var eH;
                    eH = eG.target.name + ' ';
                    $('#chat-input').val(aR() + eH);
                    eF.focus();
                });
                (function () {
                    function eG(eP) {
                        eO = eP;
                        eN || (eN = true, requestAnimationFrame(function () {
                            var eQ = eO;
                            eM.style.width = eK + eQ.clientX - eI + 'px';
                            eM.style.height = eL - (eQ.clientY - eJ) + 'px';
                            eN = false;
                        }));
                    }
                    function eH(eP) {
                        document.documentElement.removeEventListener('mousemove', eG, false);
                        document.documentElement.removeEventListener('mouseup', eH, false);
                    }
                    var eI, eJ, eK, eL, eM = document.getElementById('chat-panel');
                    document.getElementById('chat-resize').addEventListener('mousedown', function (eP) {
                        eI = eP.clientX;
                        eJ = eP.clientY;
                        eK = parseInt(document.defaultView.getComputedStyle(eM).width, 10);
                        eL = parseInt(document.defaultView.getComputedStyle(eM).height, 10);
                        document.documentElement.addEventListener('mousemove', eG, false);
                        document.documentElement.addEventListener('mouseup', eH, false);
                    }, false);
                    var eN = false, eO = null;
                }());
                $('.checkbox-options').on('change', function (eG) {
                    b9($(this));
                });
                $('.options-container select').on('change', function (eG) {
                    bb($(this));
                });
                $('.options-container input[type=range]').on('change', function (eG) {
                    bc($(this));
                });
                $('#btn-changelog').on('click', function () {
                    b4($('#popup-changelog'));
                    b2(c6);
                    window.open('https://discord.com/channels/166703751053312000/630428963889741854', '_blank');
                    ez('changelog_open');
                });
                $('#btn-close-changelog').on('click', function () {
                    b4($('#popup-changelog'));
                    b2(c6);
                    ez('changelog_close');
                });
                $('#btn-accept').on('click', function () {
                    bU.sendPacket(new bV.sendInviteResponse(true));
                    b4($('#popup-party'));
                });
                $('#btn-decline').on('click', function () {
                    bU.sendPacket(new bV.sendInviteResponse(false));
                    b4($('#popup-party'));
                });
                $('#popup-party-code-content button').on('click', function () {
                    $('#popup-party-code-content input').select();
                    document.execCommand('Copy');
                    $('#popup-party-code').hide();
                });
                $('#menu-invite').on('click', function () {
                    var eG = cb.data('selected');
                    bU.sendPacket(new bV.sendPartyAction(0, eG));
                });
                $('#menu-whisper').on('click', function () {
                    var eG = cb.data('selected'), eH = $('#chat-input').val();
                    $('#chat-input').val('/t ' + eG + ' ' + eH);
                });
                $('#menu-profile').on('click', function () {
                    var eG = cb.data('selected');
                    bU.sendPacket(new bV.sendShowProfile(eG));
                });
                $('#menu-pu_pr').on('click', function () {
                    null == bU.partyCode ? (bU.sendPacket(new bV.sendPartyAction(4, 0)), $('#menu-pu_pr span').text('Private')) : (bU.sendPacket(new bV.sendPartyAction(4, 1)), $('#menu-pu_pr span').text('Public'));
                });
                $('#menu-promote').on('click', function () {
                    var eG = cb.data('party') + 1;
                    eG >= 0 && bU.sendPacket(new bV.sendPartyAction(2, eG));
                });
                $('#menu-kick').on('click', function () {
                    var eG = cb.data('party') + 1;
                    eG >= 0 && bU.sendPacket(new bV.sendPartyAction(1, eG));
                });
                $('#menu-spectate').on('click', function () {
                    var eG = cb.data('selected');
                    eG >= 0 && bU.sendPacket(new bV.sendSpectate(eG));
                });
                $('#menu-block').on('click', function () {
                    var eG = bv(parseInt(cb.data('selected')));
                    bU.selfMsg(eG);
                });
                $(document).on('click', function (eG) {
                    cb.hide();
                    'chat-emote-btn' !== eG.target.id && $('#emote-panel').hide();
                    'none' !== $('#popup-party-code').css('display') && 'popup-party-code' !== eG.target.id && $('#popup-party-code').hide();
                });
                $('#aEditChatTabs').on('click', function (eG) {
                    aU();
                    b4(c6);
                    b2($('#popup-chat-tab-editor'));
                });
                $('#cte-tab-selector').on('change', aV);
                $('#btn-chat-tab-editor-add').on('click', aX);
                $('#btn-chat-tab-editor-remove').on('click', aY);
                $('#btn-chat-tab-editor-update').on('click', aW);
                $('.custom-asset-skinner').on('click', function () {
                    $('#popup-asset-skinner .title-text').text($(this).text());
                    $('#input-asset-skinner').attr('asset', $(this).attr('id')).val('');
                    b4(c6);
                    b2($('#popup-asset-skinner'));
                });
                $('#btn-custom-asset-set').on('click', function () {
                    d1.cThemeEnabled || bk();
                    var eG = $('#input-asset-skinner').val();
                    if (eG) {
                        var eH = $('#input-asset-skinner').attr('asset');
                        'a' == eH.charAt(0) && null != d5[eH] && bf(eH, eG);
                    }
                    $('#popup-asset-skinner .back-button').trigger('click');
                });
                $('#btn-custom-asset-clear').on('click', function () {
                    d1.cThemeEnabled || bk();
                    var eG = $('#input-asset-skinner').attr('asset');
                    'a' == eG.charAt(0) && null != d5[eG] && bf(eG, '');
                });
                $('#popup-asset-skinner').on('dragover', false).on('drop', function (eG) {
                    d1.cThemeEnabled || bk();
                    var eH = $('#input-asset-skinner').attr('asset');
                    if ('a' == eH.charAt(0) && null != d5[eH]) {
                        var eI = bC(eG.originalEvent);
                        if (/\.(jpe?g|png|gif)$/i.test(eI.name)) {
                            var eJ = new FileReader();
                            eJ.addEventListener('load', function () {
                                bf(eH, this.result);
                            }, { 'once': true });
                            eJ.readAsDataURL(eI);
                        }
                    }
                    return false;
                });
                $('#btn-food-colors').on('click', function () {
                    aw();
                    b4(c6);
                    b2($('#popup-food-colors'));
                });
                $('#btn-theme-export').on('click', function () {
                    d1.cThemeEnabled && function (eG, eH) {
                        var eI = new Blob([eH], { 'type': 'text/plain' });
                        if (window.navigator.msSaveOrOpenBlob) {
                            window.navigator.msSaveOrOpenBlob(eI, eG);
                        } else {
                            var eJ = document.createElement('a'), eK = URL.createObjectURL(eI);
                            eJ.href = eK;
                            eJ.download = eG;
                            document.body.appendChild(eJ);
                            eJ.click();
                            setTimeout(function () {
                                document.body.removeChild(eJ);
                                window.URL.revokeObjectURL(eK);
                            }, 0);
                        }
                    }('theme.json', JSON.stringify(d5, null, 2));
                });
                $('#btn-theme-import').on('click', function () {
                    $('#theme-import').trigger('click');
                });
                $('#theme-import').on('change', function () {
                    var eG = $(this).prop('files');
                    eG.length > 0 && bj(eG[0]);
                });
                $('#main-themes .options-container').on('dragover', false).on('drop', function (eG) {
                    return bj(bC(eG.originalEvent)), false;
                });
                $('#cGlobalLeaderboard').on('change', function () {
                    cu && !cz && (cz = true, firebase.auth().currentUser.getIdToken().then(eG => {
                        fetch('https://accounts.gota.io/api/v1/options/setFlags', {
                            'method': 'POST',
                            'headers': { 'Content-Type': 'application/json' },
                            'body': JSON.stringify({ 'token': eG })
                        }).then(eH => eH.json()).then(eH => {
                            cz = false;
                            $(this).prop('checked', eH.message);
                        }).catch(eH => {
                            cz = false;
                            alert(eH);
                        });
                    }).catch(eG => {
                        ao(eG, true);
                        cz = false;
                    }));
                });
                firebase.auth().onAuthStateChanged(function (eG) {
                    if (eG) {
                        if (!e5.consented) {
                            return void firebase.auth().signOut().then(function () {
                            });
                        }
                        cT || setTimeout(function () {
                            cT = true;
                        }, 100);
                        $('#guest').hide();
                        $('#account-loader').show();
                        bU.isConnected() && null !== firebase.auth().currentUser && firebase.auth().currentUser.getIdToken(true).then(eJ => {
                            bU.sendPacket(new bV.sendAuthToken(eJ));
                        }).catch(eJ => ao(eJ, true));
                        var eH = firebase.database().ref('users/' + eG.uid), eI = false;
                        eH.on('value', function (eJ) {
                            var eK = eJ.val();
                            if (eK) {
                                if (eI || ($('#account-loader').hide(), $('#authed').show(), $('#authed').attr('style', 'display: flex;'), $('#cGlobalLeaderboard').removeAttr('disabled'), $('#cGlobalLeaderboard').prop('checked', eK.flags.PUBLIC), eI = true), cu = eK, $('#account-avatar').attr('src', eK.avatar), $('#account-username').text(eK.username), eK.flags.STAFF && (cc.style.userSelect = 'text'), ap($('#account-username'), eK), $('#account-level').html('Level ' + eK.levelData.level + '&nbsp;&nbsp;&nbsp;&nbsp;' + bz(eK.levelData.xp_current) + '/' + bz(eK.levelData.xp_needed) + ' XP'), $('.xp-meter > span').each(function () {
                                        var eP = eK.levelData.xp_current / eK.levelData.xp_needed * 100;
                                        $(this).animate({ 'width': eP + '%' }, 1200);
                                    }), bU.accountListeners.loadServers || (bU.accountListeners.loadServers = firebase.database().ref('servers/account/' + cu.uid).on('value', function (eP) {
                                        var eQ = eP.val();
                                        if (eQ) {
                                            for (var eR in (cV = {}, eQ)) {
                                                var eS = eQ[eR];
                                                eS.up && (cV[eS.name] = new aK(eS.name, eS.ip + ':' + eS.port, 0, 0, '?', eS.gamemode, eS.region, eS.ssl, 0));
                                            }
                                            aL();
                                            null != c4 && aN(c4.name);
                                        }
                                    })), eK.flags.DISCORD_LINKED && !bU.accountListeners.loadDiscord && (bU.accountListeners.loadDiscord = firebase.firestore().collection('discord').doc(cu.uid).onSnapshot(eP => {
                                        eP.exists ? ($('#discordLinkStatus').text('Your account is linked with ' + eP.data().username + '#' + eP.data().discrim), $('#discordLinkStatus').show(), $('#discordLink').hide(), $('#discordUnlink').show(), $('.discord-login-container').css('padding', '15px')) : ($('#discordLinkStatus').hide(), $('#discordUnlink').hide(), $('#discordLink').show(), $('.discord-login-container').css('padding', '30px'));
                                    })), void 0 !== eK.tokens) {
                                    var eL = new Date();
                                    eL.setMonth(eL.getMonth() + eK.tokens);
                                    0 == eK.tokens ? ($('#redeem-tokens').hide(), $('#token-amount').text('You have 0 tokens.')) : ($('#redeem-tokens').show(), $('#token-amount').text('You have ' + eK.tokens + ' tokens, maximum expiry date: ' + eL.toString()), $('#redeem-spend').attr('max', eK.tokens));
                                } else {
                                    $('#token-amount').text('You have 0 tokens.');
                                }
                                if (cu.title && cu.title > 0 && cv && cv.titles && cv.titles.length > 0) {
                                    for (var eM = $('#account-titles'), eN = 0, eO = 0; eO < cv.titles.length; eO++) {
                                        cv.titles[eO] == cu.title && (eN = eO + 1);
                                    }
                                    eN > 0 && eM.val(eN);
                                }
                                bU.accountListeners.loadPrivateData || (bU.accountListeners.loadPrivateData = firebase.database().ref('private/' + eG.uid).on('value', function (eP) {
                                    var eQ = eP.val();
                                    if (eQ) {
                                        if ((cv = eQ).titles && cv.titles.length > 0) {
                                            var eR = $('#account-titles'), eS = 0;
                                            eR.empty();
                                            eR.append('<option value=\'0\'>Default Title</option>');
                                            for (var eT = 0; eT < eQ.titles.length; eT++) {
                                                eR.append('<option value=\'' + (eT + 1) + '\'>' + dF[cv.titles[eT]] + '</option>');
                                                cv.titles[eT] == cu.title && (eS = eT + 1);
                                            }
                                            eS > 0 && eR.val(eS);
                                            eR.css('display', 'inline-block');
                                        } else {
                                            $('#account-titles').css('display', 'none');
                                        }
                                        cv.message && cv.message.title && cv.message.content && !cv.message.read && ($('#popup-message-title').text(cv.message.title), $('#popup-message-content').html(cv.message.content), b2($('#popup-message')), b4(c6));
                                    }
                                }));
                                cw && au(cu);
                                aJ(eG.uid);
                            }
                        });
                    } else {
                        $('#cGlobalLeaderboard').attr('disabled');
                        e5.consented ? ($('#authed').hide(), $('#account-loader').hide(), $('#no_cookie_consent').hide(), $('#guest').show()) : ($('#authed').hide(), $('#account-loader').hide(), $('#guest').hide(), $('#no_cookie_consent').show());
                    }
                });
                $('#account-login').on('click', function () {
                    e5.consented && firebase.auth().signInWithPopup(cP).then(function (eG) {
                    }).catch(eG => ao(eG, true));
                });
                $('#account-logout').on('click', function () {
                    firebase.auth().signOut().then(function () {
                        $('#authed').hide(500);
                        $('#guest').show();
                        $('#discordLinkStatus').hide();
                        $('.discord-login-container').show();
                    }).catch(eG => ao(eG, true));
                });
                $('#account-shop').on('click', function () {
                    window.open('https://store.gota.io/', '_blank');
                });
                $('#account-social').on('click', function () {
                    cu && (au(cu), b2($('#main-social')), b4($(c6)));
                });
                $('#social-back-button').on('click', function () {
                    b4($('#main-social'));
                    b2($(c6));
                });
                $('#account-profile').on('click', function () {
                    as(cu, c6);
                });
                $('#food-colors-close-btn').on('click', function () {
                    b5(c6);
                    b4($('#popup-food-colors'));
                });
                $('#account-titles').on('change', function () {
                    if (!cz) {
                        var eG = parseInt($(this).val());
                        cz = true;
                        firebase.auth().currentUser.getIdToken().then(eH => {
                            fetch('https://accounts.gota.io/api/v1/options/setTitle', {
                                'method': 'POST',
                                'headers': { 'Content-Type': 'application/json' },
                                'body': JSON.stringify({
                                    'token': eH,
                                    'title': eG
                                })
                            }).then(eI => eI.json()).then(eI => {
                                cz = false;
                            }).catch(eI => {
                                cz = false;
                            });
                        }).catch(eH => {
                            ao(eH, true);
                            cz = false;
                        });
                    }
                });
                $('#popup-message-read-btn').on('click', function () {
                    cz || (b4($('#popup-message')), b5(c6), cz = true, firebase.auth().currentUser.getIdToken().then(eG => {
                        fetch('https://accounts.gota.io/api/v1/options/markAsRead', {
                            'method': 'POST',
                            'headers': { 'Content-Type': 'application/json' },
                            'body': JSON.stringify({ 'token': eG })
                        }).then(eH => eH.json()).then(eH => {
                            cz = false;
                        }).catch(eH => {
                            cz = false;
                        });
                    }).catch(eG => {
                        ao(eG, true);
                        cz = false;
                    }));
                });
                $('#account-set-username-btn').on('click', function () {
                    if (cu) {
                        eA(false, this);
                        var eG = $('#account-username-input').val();
                        if (!eG || '' == eG || '' == eG.trim()) {
                            return alert('Please provide a username!'), void eA(true, this);
                        }
                        firebase.auth().currentUser.getIdToken().then(eH => {
                            fetch('https://accounts.gota.io/api/v1/social/username', {
                                'method': 'POST',
                                'headers': { 'Content-Type': 'application/json' },
                                'body': JSON.stringify({
                                    'token': eH,
                                    'username': eG
                                })
                            }).then(eI => eI.json()).then(eI => {
                                if (eA(true, this), 200 == eI.code) {
                                    return b5(c6), void $('#popup-account-username').hide();
                                }
                                alert(eI.message);
                            }).catch(eI => {
                                alert(eI);
                                eA(true, this);
                            });
                        }).catch(eH => {
                            eA(true, this);
                            ao(eH, true);
                        });
                    }
                });
                $('.popup-panel .back-button').on('click', function () {
                    $('.popup-panel').each(function () {
                        b4($(this));
                    });
                    b5(c6);
                });
                $('#discordLink').on('click', function () {
                    cu && firebase.auth().currentUser.getIdToken().then(eG => {
                        window.open('https://accounts.gota.io/api/v1/options/discord/redirect?token=' + eG, 'popup', 'width=600,height=700');
                    });
                });
                $('#discordUnlink').on('click', function () {
                    cu && firebase.auth().currentUser.getIdToken().then(eG => {
                        fetch('https://accounts.gota.io/api/v1/options/discord/unlink', {
                            'method': 'POST',
                            'body': JSON.stringify({ 'token': eG }),
                            'headers': { 'Content-Type': 'application/json' }
                        }).then(eH => eH.json()).then(eH => {
                            alert(eH.message);
                        });
                    }).catch(eG => ao(eG));
                });
                $('#redeem-tokens').submit(function (eG) {
                    if (eG.preventDefault(), cu && confirm('By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.')) {
                        var eH = $('#redeem-name').val(), eI = $('#redeem-spend').val();
                        firebase.auth().currentUser.getIdToken().then(eJ => {
                            fetch('https://accounts.gota.io/api/v1/options/redeem', {
                                'method': 'POST',
                                'body': JSON.stringify({
                                    'token': eJ,
                                    'name': eH,
                                    'spend': parseInt(eI)
                                }),
                                'headers': { 'Content-Type': 'application/json' }
                            }).then(eK => eK.json()).then(eK => {
                                alert(eK.message);
                                200 === eK.code && aJ(cu.uid);
                            });
                        }).catch(eJ => ao(eJ));
                    }
                });
                $('.error-banner').on('click', function () {
                    $(this).hide();
                });
                $('#btn-add-friend').on('click', function (eG) {
                    if (eG.preventDefault(), cu) {
                        var eH = prompt('Enter friend\'s UID (found above add friend button)');
                        if (eH) {
                            var eI = eH.replace(/\s/g, '');
                            if ('string' != typeof eH || 0 === eI.length) {
                                return alert('Please enter a valid UID');
                            }
                            firebase.auth().currentUser.getIdToken().then(eJ => {
                                fetch('https://accounts.gota.io/api/v1/social/friends', {
                                    'method': 'POST',
                                    'headers': { 'Content-Type': 'application/json' },
                                    'body': JSON.stringify({
                                        'token': eJ,
                                        'target': eI,
                                        'action': 1
                                    })
                                }).then(eK => eK.json()).then(eK => {
                                    alert(eK.message);
                                });
                            }).catch(eJ => ao(eJ, true));
                        }
                    }
                });
                cO.partyCanvas && (cO.partyCanvas.oncontextmenu = dp);
                $(document).keyup(function (eG) {
                    if (13 == eG.keyCode) {
                        var eH = $('#chat-input');
                        if ('INPUT' != document.activeElement.tagName) {
                            var eI = eH[0];
                            eI && eI.setSelectionRange(eI.value.length, eI.value.length);
                            eH.focus();
                        } else {
                            eH.is(':focus') && eH.blur();
                        }
                    }
                });
                $(window).bind('beforeunload', function () {
                    return 'Are you sure you want to leave Gota.io?';
                });
                aF();
                $('.keybinds-btn').on('click', function () {
                    $('.keybinds-btn').removeClass('keybinds-btn-selected');
                    $(this).addClass('keybinds-btn-selected');
                    d3 = true;
                });
                $('#btn-reset-keybinds').on('click', function () {
                    $('.keybinds-btn').each(function () {
                        var eG = $(this), eH = eG.attr('id');
                        null != d4[eH] && (d2[eH] = d4[eH], az(eG));
                    });
                    aA();
                });
                $('#scrimmage-mode-select').on('change', function () {
                    $('#scrimmage-mode-info').children().css('display', 'none');
                    $('#scrimmage-info-' + $(this).val()).css('display', 'block');
                });
                $('#btn-queue').on('click', function () {
                    var eG = parseInt($('#scrimmage-mode-select').val()), eH = isNaN(eG) ? 0 : Math.min(Math.max(eG, 0), 100);
                    bU.sendPacket(new bV.sendQueue(eH));
                    $(this).blur();
                });
                $('#btn-leave-match').on('click', function () {
                    bU.sendPacket(new bV.sendLeaveMatch());
                    'undefined' != typeof window && 'function' == typeof window.gtag && window.gtag('event', 'leave_match', { 'server_name': bU.currentServerName || (c4 ? c4.name : void 0) });
                });
                $('#btn-custom-create').on('click', function () {
                    bU.sendPacket(new bV.sendCustomGame(0));
                    $(this).blur();
                });
                $('#btn-custom-return').on('click', function () {
                    bU.sendPacket(new bV.sendCustomGame(1));
                });
                $('#btn-custom-start').on('click', function () {
                    bU.sendPacket(new bV.sendCustomGame(2));
                });
                $('#btn-custom-lobbies').on('click', function () {
                    bU.sendPacket(new bV.sendShowLobbies());
                });
                $('#btn-lobbies-refresh').on('click', function () {
                    bU.sendPacket(new bV.sendShowLobbies());
                });
                $('#btn-lobbies-join').on('click', function () {
                    if (0 !== c5) {
                        var eG = c5, eH = '', eI = ck[eG];
                        null != eI && (eI.hasPasscode && (eH = prompt('Enter the password to join this game', '')), null == eH && (eH = ''), bU.sendPacket(new bV.sendJoinLobby(eG, eH)));
                    }
                });
                $('#btn-lobbies-return').on('click', function () {
                    $('.scrimmage-full').css('display', 'none');
                    $('#scrimmage-menu').css('display', 'block');
                });
                $('#scrimmage-map').on('change', function (eG) {
                    var eH = $(this).find('option:selected').val(), eI = $(this).attr('data');
                    eH != eI && ($('#scrimmage-map option[value=\'' + eI + '\']').prop('selected', true), bU.sendPacket(new bV.sendCustomGameUpdate(0, eH)));
                });
                $('#scrimmage-mapmode').on('change', function (eG) {
                    var eH = $(this).find('option:selected').val(), eI = $(this).attr('data');
                    eH != eI && ($('#scrimmage-mapmode option[value=\'' + eI + '\']').prop('selected', true), bU.sendPacket(new bV.sendCustomGameUpdate(1, eH)));
                });
                $('#scrimmage-mapsize').on('change', function (eG) {
                    var eH = $(this).find('option:selected').val(), eI = $(this).attr('data');
                    eH != eI && ($('#scrimmage-mapsize option[value=\'' + eI + '\']').prop('selected', true), bU.sendPacket(new bV.sendCustomGameUpdate(2, eH)));
                });
                $('#scrimmage-startmass').on('change', function (eG) {
                    var eH = $(this).val(), eI = $(this).attr('data');
                    isNaN(eH) ? $(this).val(eI) : (eH = Math.max(1, Math.min(parseInt(eH), 32000))) != eI && ($(this).val(eI), bU.sendPacket(new bV.sendCustomGameUpdate(3, eH)));
                });
                $('#scrimmage-virusDensity').on('change', function (eG) {
                    var eH = $(this).val(), eI = $(this).attr('data');
                    isNaN(eH) ? $(this).val(eI) : (eH = Math.max(0, Math.min(parseInt(eH), 1000))) != eI && ($(this).val(eI), bU.sendPacket(new bV.sendCustomGameUpdate(7, eH)));
                });
                $('#scrimmage-respawnDelay').on('change', function (eG) {
                    var eH = $(this).val(), eI = $(this).attr('data');
                    isNaN(eH) ? $(this).val(eI) : (eH = Math.max(-1, Math.min(parseInt(eH), 600))) != eI && ($(this).val(eI), bU.sendPacket(new bV.sendCustomGameUpdate(11, eH)));
                });
                $('#scrimmage-lockteams').on('change', function (eG) {
                    var eH = $(this).prop('checked');
                    $(this).prop('checked', !eH);
                    bU.sendPacket(new bV.sendCustomGameUpdate(4, 1 == eH ? 1 : 0));
                });
                $('#scrimmage-autoSplit').on('change', function (eG) {
                    var eH = $(this).prop('checked');
                    $(this).prop('checked', !eH);
                    bU.sendPacket(new bV.sendCustomGameUpdate(12, 1 == eH ? 1 : 0));
                });
                $('#scrimmage-public').on('change', function (eG) {
                    var eH = $(this).prop('checked');
                    $(this).prop('checked', !eH);
                    bU.sendPacket(new bV.sendCustomGameUpdate(8, 1 == eH ? 1 : 0));
                });
                $('#scrimmage-password').on('change', function (eG) {
                    var eH = $(this).prop('checked');
                    $(this).prop('checked', !eH);
                    var eI = '';
                    eH && (eI = prompt('Enter a password to join your game (32 max characters)', ''));
                    null == eI && (eI = '');
                    bU.sendPacket(new bV.sendCustomGameUpdateString(9, eI));
                });
                $('#scrimmage-name').on('click', function (eG) {
                    if (bU.isPartyLeader()) {
                        var eH = prompt('Enter a new name for your game (32 max characters)', $(this).text());
                        null != eH && bU.sendPacket(new bV.sendCustomGameUpdateString(10, eH));
                    }
                });
            }());
            var ex = ac;
            window.addEventListener('unload', ex);
            cG.windowEvents.push({
                'element': window,
                'event': 'unload',
                'handler': ex
            });
            bU = new ad();
            bV = new ai();
            (function () {
                function ez(eN) {
                    var eO = eN.start, eP = eN.end;
                    return eO.month > eP.month ? eC >= eO.month && eD >= eO.day || eC <= eP.month && eD <= eP.day : (eC > eO.month || eC === eO.month && eD >= eO.day) && (eC < eP.month || eC === eP.month && eD <= eP.day);
                }
                function eA(eN) {
                    return void 0 !== cS[eN];
                }
                var eB = new Date(), eC = eB.getMonth() + 1, eD = eB.getDate(), eE = {
                        'halloween': {
                            'start': {
                                'month': 10,
                                'day': 1
                            },
                            'end': {
                                'month': 11,
                                'day': 7
                            },
                            'themes': [
                                'halloween',
                                'halloween2020',
                                'halloween2023'
                            ]
                        },
                        'xmas': {
                            'start': {
                                'month': 12,
                                'day': 1
                            },
                            'end': {
                                'month': 1,
                                'day': 7
                            },
                            'themes': ['xmas']
                        },
                        'valentines': {
                            'start': {
                                'month': 2,
                                'day': 1
                            },
                            'end': {
                                'month': 2,
                                'day': 21
                            },
                            'themes': ['valentines']
                        },
                        'spring': {
                            'start': {
                                'month': 3,
                                'day': 15
                            },
                            'end': {
                                'month': 5,
                                'day': 31
                            },
                            'themes': ['spring']
                        },
                        'summer': {
                            'start': {
                                'month': 6,
                                'day': 15
                            },
                            'end': {
                                'month': 8,
                                'day': 31
                            },
                            'themes': ['summer']
                        },
                        'new_years': {
                            'start': {
                                'month': 12,
                                'day': 30
                            },
                            'end': {
                                'month': 1,
                                'day': 5
                            },
                            'themes': ['new_years']
                        },
                        'birthday': {
                            'start': {
                                'month': 0,
                                'day': 0
                            },
                            'end': {
                                'month': 0,
                                'day': 0
                            },
                            'themes': ['birthday_2018']
                        }
                    }, eF = null;
                for (var eG in eE) {
                    var eH = eE[eG];
                    if (ez(eH)) {
                        for (var eI = 0; eI < eH.themes.length; eI++) {
                            var eJ = eH.themes[eI];
                            if (eA(eJ)) {
                                eF = eJ;
                                break;
                            }
                        }
                        if (eF) {
                            break;
                        }
                    }
                }
                if (eF && cS[eF]) {
                    var eK = cS[eF];
                    cR.key = eK.key;
                    cR.foodColors = eK.foodColors.slice();
                    cR.customEjectedMass = eK.customEjectedMass;
                    cR.motd = eK.motd;
                    cR.motherCustomEnabled = eK.motherCustomEnabled;
                    cR.enabled = true;
                } else {
                    cR.enabled = false;
                    cR.key = '';
                    cR.foodColors = [];
                    cR.motd = '';
                }
                if (cR.enabled && !d1.cDisableEventSkins && $('body').addClass('event-' + cR.key), cR.enabled && cR.foodColors && cR.foodColors.length > 0 && !d1.cDisableEventSkins) {
                    if (br = function (eN) {
                            return cR.foodColors[eN % cR.foodColors.length];
                        }, void 0 !== bU && bU && bU.foodObjects) {
                        for (var eL in bU.foodObjects)
                            (eM = bU.foodObjects[eL]) && (eM.color = br(eM.id), eM.needsPixiUpdate = true);
                    }
                } else {
                    if (br = function (eN) {
                            return dC[eN % dC.length];
                        }, void 0 !== bU && bU && bU.foodObjects) {
                        for (var eL in bU.foodObjects) {
                            var eM;
                            (eM = bU.foodObjects[eL]) && (eM.color = br(eM.id), eM.needsPixiUpdate = true);
                        }
                    }
                }
                aB();
                aC();
            }());
            (function () {
                if (Coloris({
                        'theme': 'pill',
                        'themeMode': 'dark',
                        'el': '[data-coloris]'
                    }), window.Coloris && 'function' == typeof Coloris.setInstance) {
                    Coloris.setInstance('#spChatColor', {
                        'swatches': dE,
                        'swatchesOnly': true,
                        'theme': 'pill',
                        'themeMode': 'dark',
                        'alpha': false
                    });
                    Coloris.setInstance('#spNameColor', {
                        'swatches': [],
                        'swatchesOnly': false,
                        'theme': 'pill',
                        'themeMode': 'dark',
                        'alpha': false
                    });
                    const eC = document.getElementById('spNameColor'), eD = document.getElementById('spChatColor');
                    eC && eC.addEventListener('focus', function () {
                        Coloris.setInstance('#spNameColor', {
                            'swatches': [],
                            'swatchesOnly': false,
                            'theme': 'pill',
                            'themeMode': 'dark',
                            'alpha': false
                        });
                    });
                    eD && eD.addEventListener('focus', function () {
                        Coloris.setInstance('#spChatColor', {
                            'swatches': dE,
                            'swatchesOnly': true,
                            'theme': 'pill',
                            'themeMode': 'dark',
                            'alpha': false
                        });
                    });
                    document.querySelectorAll('[data-coloris]').forEach(function (eE) {
                        eE.id && 'spChatColor' !== eE.id && 'spNameColor' !== eE.id && eE.addEventListener('focus', function () {
                            Coloris.setInstance('#' + eE.id, {
                                'swatches': [],
                                'swatchesOnly': false,
                                'theme': 'pill',
                                'themeMode': 'dark',
                                'alpha': false
                            });
                        });
                    });
                }
                a8(function (eE) {
                    const eF = document.getElementById(eE);
                    eF && (eF.value = d5[eE], eF.addEventListener('input', function (eG) {
                        d5[eE] = eG.target.value;
                        bd(eE, d5[eE]);
                    }));
                });
                const ez = document.getElementById('pFoodColors');
                let eA = document.getElementById('btnAddFoodColor');
                ez && !eA && (eA = document.createElement('button'), eA.id = 'btnAddFoodColor', eA.textContent = 'Add', eA.type = 'button', ez.insertAdjacentElement('afterend', eA));
                ez && eA && eA.addEventListener('click', function () {
                    d1.cThemeEnabled || bk();
                    var eE = ez.value;
                    eE && !d5['_FoodColors'].includes(eE) && (d5['_FoodColors'].push(eE), aw());
                });
                const eB = cO.tracerColorInput || document.getElementById('rTracerColor');
                eB && (eB.value = d1.rTracerColor || '#ffffff', eB['_listenersAdded'] || (eB.addEventListener('input', function (eE) {
                    d1.rTracerColor = eE.target.value;
                    d1['_tracerColorCached'] = bF.utils.string2hex(d1.rTracerColor);
                    bg();
                }), eB['_listenersAdded'] = true));
            }());
            e5.init();
            aS();
            var ey = {
                'view': bR,
                'backgroundAlpha': 0,
                'forceCanvas': 'CANVAS' === d1.sRenderType,
                'antialias': !d1.cDisableAA
            };
            bG = {
                'renderer': bF.autoDetectRenderer(ey),
                'stage': bH
            };
            $('#performance-refresh').hide();
            cL = a7(128);
            cM = a7(32);
            cN = a7(8);
            window.addEventListener('resize', a6);
            cG.windowEvents.push({
                'element': window,
                'event': 'resize',
                'handler': a6
            });
            a6();
            bW = 'undefined' != typeof performance && performance.now ? performance.now() : Date.now();
            bU.selfMsg('Welcome to Gota.io!');
            cR.enabled && '' !== cR.motd && bU.selfMsg(cR.motd);
            (function () {
                if (e5.consented) {
                    var ez = localStorage.getItem('version'), eA = version.split('.');
                    null !== ez ? (ez = ez.split('.'), (eA[0] != ez[0] || eA[1] != ez[1]) && (localStorage.setItem('version', version), b4(c6), b2($('#popup-changelog')))) : localStorage.setItem('version', version);
                }
            }());
            df.start();
        }());
    });
    (function () {
        function a5(a7, a8, a9, aa, ab, ac) {
            var ad = navigator || {}, ae = ad.userAgent || '';
            try {
                var ag = window[a7];
                ag && ag['_envSig'] && (af.mx = ag['_envSig']);
            } catch (ao) {
            }
            var ah = 0, ai = 0;
            try {
                window.process && process.versions && process.versions.electron && (ah |= 1);
            } catch (ap) {
            }
            try {
                /Electron/i.test(ae) && (ah |= 2);
            } catch (aq) {
            }
            try {
                'function' == typeof window.require && (ah |= 4);
            } catch (ar) {
            }
            try {
                window.process && 'renderer' === window.process.type && (ah |= 8);
            } catch (as) {
            }
            try {
                ad.webdriver && (ai |= 1);
            } catch (at) {
            }
            af.el = ah;
            af.hv = ai;
            af.ua = function (au) {
                for (var av = 2166136261, aw = 0; aw < au.length; aw++) {
                    av = 16777619 * ((av ^= au.charCodeAt(aw)) >>> 0);
                }
                return (av >>> 0).toString(36).toUpperCase();
            }(ae);
            af.pf = ad.userAgentData && ad.userAgentData.platform || ad.platform || '';
            var aj = [];
            1 & ah && aj.push('EP');
            2 & ah && aj.push('EU');
            4 & ah && aj.push('RF');
            8 & ah && aj.push('PR');
            1 & ai && aj.push('WD');
            aj.length && (af.mk = aj.join(','));
            try {
                for (var ak = a5.toString(), al = ak.length, am = 0, an = 0; an < ak.length; an++) {
                    am = am + ak.charCodeAt(an) & 65535;
                }
                af.ti = {
                    'l': al,
                    'c': am
                };
                (al < 150 || al > 1200) && (aj.push ? aj : []).push('TM');
                aj.length && !af.mk ? af.mk = aj.join(',') : aj.length && (af.mk = af.mk + ',' + aj[aj.length - 1]);
                try {
                    af.dq = ((65535 & (al ^ am ^ 24375)) >>> 0).toString(36).toUpperCase();
                } catch (au) {
                }
            } catch (av) {
            }
            return JSON.stringify(af);
        }
        if (!window['__GOTA_TELEM_INIT__']) {
            window['__GOTA_TELEM_INIT__'] = true;
            var a6 = 'undefined' != typeof WeakSet ? new WeakSet() : [];
            window.sendEnvTelemetry = function (a7, a8, a9, aa, ab, ac, ad) {
                if (a7 && 1 === a7.readyState && !function (aj) {
                        return !aj || (a6 instanceof Array ? -1 !== a6.indexOf(aj) : a6.has(aj));
                    }(a7)) {
                    !function (aj) {
                        aj && (a6 instanceof Array ? -1 === a6.indexOf(aj) && a6.push(aj) : a6.add(aj));
                    }(a7);
                    var ae = a5(aa || '');
                    try {
                        var af = new TextEncoder().encode(ae);
                        if (af.length > 1200) {
                            return;
                        }
                        !function (aj, ak) {
                            for (var al = ak >>> 0, am = 0; am < aj.length; am++) {
                                al ^= al << 13;
                                al ^= al >>> 17;
                                al ^= al << 5;
                                al >>>= 0;
                                aj[am] ^= 255 & al;
                            }
                        }(af, (a8 ^ a9 ^ ab ^ ac ^ ad) >>> 0);
                        var ag = new ArrayBuffer(3 + af.length), ah = new DataView(ag);
                        ah.setUint8(0, 125);
                        ah.setUint16(1, af.length, true);
                        for (var ai = 0; ai < af.length; ai++) {
                            ah.setUint8(3 + ai, af[ai]);
                        }
                        a7.send(ag);
                    } catch (aj) {
                    }
                }
            };
        }
    }());
}();
