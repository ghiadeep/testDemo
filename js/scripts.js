var __extends = this && this.__extends || function () {
    var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
        e.__proto__ = t
    } || function (e, t) {
        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
    };
    return function (t, o) {
        function i() {
            this.constructor = t
        }

        e(t, o), t.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i)
    }
}(), Project;
!function (e) {
    var t = function () {
        function e() {
        }

        return e.bind = function (e) {
            var t = this, o = "undefined" != typeof e ? $(e) : $body;
            $("[data-ga]", o).off(".ga").on("click.ga", function (e) {
                var o = $(e.currentTarget).data("ga");
                t.sendEvent(o[0] || "", o[1] || "", o[2] || "", o[3] || -1)
            })
        }, e.sendEvent = function (e, t, o, i) {
            "undefined" != typeof gtag ? gtag("event", t, {
                event_category: e,
                event_label: o,
                value: i
            }) : "undefined" != typeof ga && ga("send", "event", e, t, o, i)
        }, e.sendPageview = function (t, o) {
            "undefined" != typeof gtag ? gtag("config", e.TRACKING_ID, {
                page_path: t || "",
                page_title: o
            }) : "undefined" != typeof ga && ga("send", "pageview", t || window.location.pathname, {
                title: o,
                pathname: t || ""
            })
        }, e
    }();
    e.Analytics = t
}(Project || (Project = {}));
var Project;
!function (e) {
    function t() {
        var e = window.getComputedStyle(document.querySelector("body"), ":before"),
            t = e.getPropertyValue("content").replace(/[\"\']/g, "");
        return {desktop: "desktop" === t, phone: "phone" === t, tablet: "tablet" === t, value: t}
    }

    e.getBreakpoint = t
}(Project || (Project = {}));
var Project;
!function (e) {
    function t() {
        var e = window.navigator.userAgent, t = {
            mobile: !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))),
            ios: /iPad|iPhone|iPod/.test(e),
            mac: navigator.platform.toUpperCase().indexOf("MAC") >= 0,
            ie: e.indexOf("MSIE ") > 0 || !!e.match(/Trident.*rv\:11\./),
            opera: !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf("OPR/index.html") >= 0,
            firefox: e.toLowerCase().indexOf("firefox") > -1,
            safari: /^((?!chrome|android).)*safari/i.test(e),
            windows: window.navigator.platform.toLowerCase().indexOf("win") > -1
        };
        return $("html").toggleClass("mac", !t.windows && (t.ios || t.mac)).toggleClass("mobile", t.mobile).toggleClass("firefox", t.firefox).toggleClass("safari", t.safari).toggleClass("ie", t.ie), t
    }

    e.getBrowser = t;
    var o = function () {
        function t() {
        }

        return t.update = function () {
            e.browser = e.getBrowser()
        }, t
    }();
    e.Browser = o
}(Project || (Project = {}));
var InstallTrigger = function () {
    function e() {
    }

    return e
}(), Utils;
!function (e) {
    function t() {
        return "" + (new Date).getTime() + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    function o(e) {
        return e.replace(/#.*$/, "").replace(/^\/|\/$/g, "").replace(/\?.*$/, "")
    }

    function i() {
        function e() {
            t.begin(), t.end(), requestAnimationFrame(e)
        }

        var t = new Stats;
        return t.showPanel(0), $(t.dom).css("pointer-events", "none"), document.body.appendChild(t.dom), requestAnimationFrame(e), t
    }

    function n(e, t, o) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3);
        var n = "expires=" + i.toUTCString(), a = e + "=" + t + ";" + n + ";path=/";
        document.cookie = a
    }

    function a(e) {
        e += "=";
        for (var t = decodeURIComponent(document.cookie), o = t.split(";"), i = 0; i < o.length; i++) {
            for (var n = o[i]; " " === n.charAt(0);) n = n.substring(1);
            if (0 === n.indexOf(e)) return n.substring(e.length, n.length)
        }
        return null
    }

    e.keys = {
        backspace: 8,
        enter: 13,
        esc: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36
    }, e.generateUID = t, e.normalizeURL = o, e.stats = i, e.setCookie = n, e.getCookie = a
}(Utils || (Utils = {}));
var Project;
!function (e) {
    var t = function () {
        function t(e) {
            var o = this;
            this.view = e, this.shown = !1, e[0] && this.view.find(".js-cookies-agree").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), Utils.setCookie(t.COOKIE_SLUG, "lorem", 365), o.hide()
            })
        }

        return t.prototype.tryToShow = function () {
            return this.shown || !Modernizr.cookies || !this.view || Utils.getCookie(t.COOKIE_SLUG) ? void this.destroy() : void this.show()
        }, t.prototype.show = function () {
            this.view.show(), this.shown = !0, TweenMax.from(this.view, .3, {yPercent: 100, ease: e.easing})
        }, t.prototype.hide = function () {
            var t = this;
            this.shown = !1, TweenMax.to(this.view, .3, {
                yPercent: 100, ease: e.easing, onComplete: function () {
                    t.destroy()
                }
            })
        }, t.prototype.destroy = function () {
            this.view && (this.view.remove(), this.view = null)
        }, t.COOKIE_SLUG = "ciastko", t
    }();
    e.Cookies = t
}(Project || (Project = {}));
var Project;
!function (e) {
    var t = function () {
        function e(e) {
            this.view = e, this.cache = {}, this.$black = this.view.find("div"), this.$white = this.$black.clone().insertAfter(this.$black)
        }

        return e.prototype.resize = function () {
            var e = window.scrollY ? window.scrollY : $window.scrollTop();
            this.cache.top = this.view.offset().top - e, this.cache.bottom = this.cache.top + (this.view.hasClass("rotated") ? this.view.width() : this.view.height())
        }, e.prototype.update = function (e) {
            if (breakpoint.desktop) {
                var t;
                !e.top && e.bottom ? t = Math.min(0, this.cache.top - e.edge) : e.top && !e.bottom ? t = Math.max(0, -e.edge + this.cache.bottom) : e.top && e.bottom ? t = 0 : e.top || e.bottom || (t = this.cache.bottom - this.cache.top), TweenMax.set(this.$white, {x: t}), TweenMax.set(this.$white.children(), {x: -t})
            }
        }, e
    }();
    e.Fixed = t
}(Project || (Project = {}));
var Project;
!function (e) {
    var t = function () {
        function e() {
            this.events = {}
        }

        return e.prototype.on = function (e, t) {
            return this.events[e] || (this.events[e] = []), this.events[e].push(t), this
        }, e.prototype.off = function (e, t) {
            if ("undefined" == typeof e) return this.events = {}, this;
            if ("undefined" == typeof t && this.events[e]) return this.events[e] = [], this;
            if (!this.events[e]) return this;
            var o = this.events[e].indexOf(t);
            return o > -1 && this.events[e].splice(o, 1), this
        }, e.prototype.trigger = function (e) {
            for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            if (this.events[e]) {
                var i = this.events[e].length;
                if (i) for (var n = 0; n < i; n++) this.events[e][n].apply(this, [].slice.call(arguments, 1))
            }
        }, e.prototype.destroy = function () {
            this.events = {}
        }, e
    }();
    e.Handler = t
}(Project || (Project = {}));
var Project;
!function (e) {
    var t = function () {
        function e(e) {
            var t = this;
            this.view = e, this.animate = function () {
                var e = 0;
                t.warp.transform(function (o) {
                    var i = t.basePoints && t.basePoints[e] ? t.basePoints[e] : o;
                    return e++, t.smudge(o, i)
                }), requestAnimationFrame(t.animate)
            }, this.onMouseMove = function (e) {
                var o = window.scrollY ? window.scrollY : $window.scrollTop();
                if (!t.timestamp) return t.timestamp = Date.now(), void(t.mouse = {x: e.pageX, y: e.pageY - o});
                var i = Date.now(), n = i - t.timestamp, a = e.pageX - t.mouse.x, s = e.pageY - o - t.mouse.y,
                    r = Math.round(a / n * 100), c = Math.round(s / n * 100);
                t.acceleration = {
                    x: r / n * 5,
                    y: c / n * 5,
                    z: Math.max(Math.abs(r / n), Math.abs(c / n))
                }, t.timestamp = i, t.mouse = {x: e.pageX, y: e.pageY - o}
            }, this.svg = e.find("svg")[0], this.warp = new Warp(this.svg), this.mouse = {
                x: 0,
                y: 0
            }, this.acceleration = {x: 10, y: 10, z: 1}, this.position = this.view.offset(), this.size = 40;
            var o = [];
            this.warp.interpolate(16), this.warp.transform(function (e) {
                return o.push([e[0], e[1]]), e
            }), this.basePoints = o
        }

        return e.prototype.run = function () {
            this.view.addClass("is-warped"), $doc.on("mousemove", this.onMouseMove), this.animate()
        }, e.prototype.smudge = function (e, t) {
            var o = e[0], i = e[1], n = Math.max(-100, Math.min(100, this.mouse.x - t[0] - this.position.left)),
                a = Math.max(-100, Math.min(100, this.mouse.y - t[1] - this.position.top)),
                s = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2)), r = this.size;
            if (s <= r && this.acceleration.z > 1) o = Math.max(t[0] - 100, Math.min(t[0] + 100, o + this.acceleration.x * ((r - s) / r))), i = Math.max(t[1] - 100, Math.min(t[1] + 100, i + this.acceleration.y * ((r - s) / r))); else if (e[0] !== t[0] || e[1] !== t[1]) {
                var c = t[0] - e[0], l = t[1] - e[1];
                o += .2 * c, i += .2 * l
            }
            return [o, i]
        }, e
    }();
    e.Logo = t
}(Project || (Project = {}));
var Project;
!function (e) {
    var t = function () {
        function t() {
            var o = this;
            this.callbacks = {
                folio: function (e, t, o) {
                    var i = 2 * (-.5 + (e.top + (e.height - .5 * o) - t) / o);
                    TweenMax.set(e.children.$a, {y: i * o * .15}), TweenMax.set(e.$bg, {y: Math.max(-1, Math.min(1, i / 2)) * -160});
                    var n = (e.top + e.children.aTop + e.children.aHeight - t) / o;
                    e.$el.toggleClass("is-current", n < .95 && n > .3)
                }
            }, this.settings = {disableTouchDevices: !0}, this.ticking = !1, this.changingPath = !1, this.scrollCache = {}, this.onScroll = function () {
                o.lastScrollY = window.scrollY, o.requestTick()
            }, this.update = function () {
                if (!o.cache || t.disabled) return void(o.ticking = !1);
                var e = window.scrollY ? window.scrollY : $window.scrollTop(), i = e + .33 * o.windowHeight, n = [],
                    a = {edge: o.windowHeight};
                breakpoint.desktop ? TweenMax.to(".bgs", 0, {
                    y: -e,
                    position: "fixed",
                    ease: Sine.easeOut
                }) : TweenMax.set(".bgs", {clearProps: "y, position"}), o.scrollCache[window.location.pathname] = e, $body.toggleClass("is-scrolled", e > 0), $body.toggleClass("scrolled-window-height", e > o.windowHeight);
                for (var s = 0; s < o.cache.length; s++) {
                    var r = o.cache[s];
                    r.top < i && r.top + r.height > i ? (r.$el.addClass("is-in-center"), r.path && !t.animating && (o.changingPath = !0, o.changingPath = !1)) : r.$el.removeClass("is-in-center"), r.$el.toggleClass("is-past-fold", r.top < e), r.top < e + o.windowHeight && r.top + r.height >= e ? (r.$el.addClass("is-in-view"), r.role in o.callbacks && (o.settings.disableTouchDevices && Modernizr.touchevents || o.callbacks[r.role](r, e, o.windowHeight)), n.push(r), void 0 === a.top && (a.top = r.inverse, a.bottom = r.inverse), r.top - e >= 0 && (a.edge = r.top - e, a.bottom = r.inverse), r.top + r.height - e < o.windowHeight && (a.top = r.inverse)) : r.$el.removeClass("is-in-view"), r.$el.toggleClass("is-aligned", r.top === e), r.$el.toggleClass("is-past-bottom", r.top + r.height <= o.windowHeight + e)
                }
                o.fixed.forEach(function (e) {
                    e.update(a)
                }), o.ticking = !1
            }, "scrollRestoration" in history && (history.scrollRestoration = "manual"), t.instance = this, this.fixed = $(".js-fixed").toArray().map(function (t) {
                return new e.Fixed($(t))
            })
        }

        return t.scrollToPath = function (e) {
            var o = $('[data-path="' + window.location.pathname + '"]');
            return !!o[0] && (t.scrollToElement(o, e), !0)
        }, t.scrollToElement = function (e, t, o) {
            var i = this;
            if (e[0]) {
                this.animating = !0, !breakpoint.phone && e.is("section:first-of-type") && (o = .45 * window.innerHeight);
                var n = "number" == typeof t ? t : t ? 0 : 1,
                    a = {y: e.offset().top + (o || 0), speed: n, animate: !!n};
                return this.scroll(a).then(function () {
                    i.animating = !1
                })
            }
        }, t.scrollTop = function (e) {
            t.scroll({y: 0, speed: e ? 0 : .5, ease: Sine.easeOut})
        }, t.scroll = function (e) {
            var t = this;
            return new Promise(function (o, i) {
                var n = {x: 0, y: 0, speed: 1.2, ease: Quad.easeInOut, animate: !0, relativeSpeed: !1, callback: null};
                if ($.extend(n, e), t.obj.x = Math.max(document.body.scrollLeft, window.pageXOffset), t.obj.y = Math.max(document.body.scrollTop, window.pageYOffset), n.animate && n.speed > 0) {
                    var a = Math.max(Math.abs(n.y - t.obj.y)), s = Math.min(a / $window.height(), 1.5),
                        r = n.relativeSpeed ? n.speed * s : n.speed;
                    a < 1 ? (window.scrollTo(t.obj.x, t.obj.y), o()) : (TweenMax.killTweensOf(t.obj), TweenMax.to(t.obj, r, {
                        onUpdate: function () {
                            window.scrollTo(t.obj.x, t.obj.y)
                        }, x: n.x, y: n.y, ease: n.ease, onComplete: o
                    }))
                } else window.scrollTo(n.x, n.y), o()
            })
        }, t.disable = function () {
            t.disabled = !0
        }, t.enable = function () {
            t.disabled = !1
        }, t.prototype.resize = function (e, t, o) {
            this.windowHeight = t, this.saveCache(), this.fixed.forEach(function (e) {
                e.resize()
            })
        }, t.prototype.load = function () {
            var e = this;
            this.elements = $("[data-scroll]"), this.elements[0] && (this.saveCache(), $body.imagesLoaded(function () {
                return e.saveCache()
            }), $window.off(".scrolling").on("scroll.scrolling", this.onScroll))
        }, t.prototype.saveCache = function () {
            for (var e = [], t = 0; t < this.elements.length; ++t) {
                var o = this.elements.eq(t), i = o.data("scroll");
                TweenMax.set(o.children("a"), {clearProps: "transform"});
                var n = {
                    $el: o,
                    height: o.outerHeight(),
                    top: o.offset().top - o.parent(".folio__wrap").offset().top,
                    role: i,
                    path: o.data("path") || !1,
                    title: o.data("title") || !1,
                    children: {
                        $a: o.children("a, div"),
                        aTop: o.children("a, div").offset().top - o.offset().top,
                        aHeight: o.children("a, div").height()
                    },
                    $bg: $("#" + o.data("bg") + " > div"),
                    inverse: o.is("[data-inverse]")
                };
                e.push(n), o.data("cache", t)
            }
            this.cache = e, this.onScroll()
        }, t.prototype.requestTick = function () {
            this.ticking || (this.rAF = requestAnimationFrame(this.update), this.ticking = !0)
        }, t.disabled = !1, t.animating = !1, t.obj = {x: 0, y: 0}, t
    }();
    e.Scrolling = t
}(Project || (Project = {}));
var Historyjs = History, Project;
!function (e) {
    var t = function () {
        function e() {
        }

        return e.CHANGE = "state", e
    }();
    e.PushStatesEvents = t;
    var o = function (e) {
        function o() {
            var i = e.call(this) || this;
            return i.onClick = function (e) {
                e.preventDefault();
                var t = $(e.currentTarget), i = t.attr("href").replace("http://" + window.location.host, ""),
                    n = t.attr("data-history");
                "back" === n ? o.back(i) : "replace" === n ? Historyjs.replaceState(null, document.title, i) : Historyjs.pushState({randomData: Math.random()}, document.title, i)
            }, i.onState = function () {
                i.trigger(t.CHANGE)
            }, Historyjs && (i.bindLinks(), Historyjs.Adapter.bind(window, "statechange", i.onState)), i
        }

        return __extends(o, e), o.back = function (e) {
            history.length > 2 ? Historyjs.back() : e ? Historyjs.replaceState(null, null, e) : Historyjs.replaceState(null, null, "index.html")
        }, o.prototype.bindLinks = function (e) {
            e = e || "body", $(e).find("a").not('[data-history="false"]').not("[download]").not('[href^="#"]').not('[href$=".jpg"]').not('[target="_blank"]').not('[href^="mailto:"]').not('[href^="tel:"]').off(".history").on("click.history", this.onClick), $(e).find('a[href^="http"]').not('[href^="http://' + window.location.host + '"]').off(".history")
        }, o
    }(e.Handler);
    e.PushStates = o
}(Project || (Project = {}));
var Project;
!function (e) {
    var t = function () {
        function t() {
            var t = this;
            this.onResize = function () {
                breakpoint = e.getBreakpoint(), t.scrolling.resize(window.innerWidth, window.innerHeight, breakpoint)
            }, this.onPreload = function () {
                $body.removeClass("is-not-ready"), t.animate().then(function () {
                    t.logo.run(), t.onState()
                })
            }, this.onState = function () {
                var e = window.location.pathname, o = $('[data-section="' + e + '"]');
                o[0] ? t.showDetails(o) : t.detailsShown && t.hideDetails()
            }, this.onKeyDown = function (o) {
                t.detailsShown && (o.keyCode || o.which) === Utils.keys.esc && e.PushStates.back()
            }, $body = $("body"), $doc = $(document), $window = $(window), breakpoint = e.getBreakpoint(), e.browser = e.getBrowser(), e.easing = CustomEase.create("custom", "M0,0,C0.5,0,0.2,1,1,1"), this.cookies = new e.Cookies($(".js-cookies")), this.scrolling = new e.Scrolling, this.scrolling.load(), this.pushstates = new e.PushStates, this.pushstates.on(e.PushStatesEvents.CHANGE, this.onState), this.logo = new e.Logo($(".js-logo")), e.Analytics.TRACKING_ID = $("[data-ga-uid]").data("ga-uid"), this.onPreload(), this.preload().then(this.onResize), $body.toggleClass("test", window.location.search.indexOf("test") >= 0), $("html").removeClass("no-js"), $doc.on("keydown.details", this.onKeyDown), this.parseEmails(), $window.on("resize", this.onResize), this.onResize()
        }

        return t.prototype.preload = function () {
            return new Promise(function (e, t) {
                var o = $(".project, .bg > div").toArray(), i = imagesLoaded(o, {background: !0});
                i.on("always", function (t) {
                    e()
                })
            })
        }, t.prototype.animate = function () {
            var t = this;
            return new Promise(function (o, i) {
                new TimelineMax({delay: .3, onComplete: o}).to(".curtain", .7, {
                    scaleX: .5,
                    ease: e.easing,
                    onComplete: function () {
                        $(".curtain").css({opacity: 0}), $(".folio").css({zIndex: 100})
                    }
                }, 0).fromTo(".rotated", .4, {x: 10, opacity: 0}, {
                    x: 0,
                    opacity: 1,
                    ease: e.easing
                }, "-=0.1").call(function () {
                    $(".rotated").addClass("is-animated")
                }, null, null, "-=0.2").call(t.animateTitle, null, null, "-=0.4").staggerFromTo(".info__column:nth-child(1) li, .info__column:nth-child(1) h2", .5, {
                    x: 40,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: e.easing
                }, .025, 1.2).staggerFromTo(".info__column:nth-child(2) li, .info__column:nth-child(2) h2", .5, {
                    x: 40,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: e.easing
                }, .025, 1.3).staggerFromTo(".info__column:nth-child(3) li, .info__column:nth-child(3) h2", .5, {
                    x: 40,
                    opacity: 0
                }, {x: 0, opacity: 1, ease: e.easing}, .025, 1.4).fromTo(".folio__wrap", 1, {y: 100, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    ease: e.easing,
                    clearProps: "y"
                }, 1.8)
            })
        }, t.prototype.animateTitle = function () {
            var t = $(".info__lead"), o = new SplitText(t, {type: "words"});
            new TimelineMax({autoRemoveChildren: !0}).set(t, {opacity: 1}).staggerFrom(o.words, 1.6, {
                opacity: 0,
                x: 10,
                transformOrigin: "0% 100%",
                ease: Power3.easeOut
            }, .075).from(t, 1, {x: 30, ease: e.easing}, 0)
        }, t.prototype.showDetails = function (t) {
            var o = this;
            return new Promise(function (i, n) {
                t.show().siblings("section").hide(), o.detailsShown = !0, $(".details").show(), $body.addClass("is-detail-shown");
                var a = $('.project__link[href="' + t.data("section") + '"]').closest("section");
                e.Scrolling.scrollToElement(a, .5).then(function () {
                    var t = window.scrollY ? window.scrollY : $window.scrollTop();
                    if (o.lastScroll = t, e.Scrolling.disable(), $body.addClass("is-scroll-disabled"), breakpoint.phone) TweenMax.set(".wrap", {y: -t}), new TimelineMax({onComplete: i}).to(".wrap", .4, {
                        x: -window.innerWidth + 50,
                        ease: e.easing
                    }); else {
                        TweenMax.set(".folio__wrap", {y: -t});
                        var n = .5 * -window.innerWidth;
                        new TimelineMax({onComplete: i}).fromTo(".details", .6, {x: 300}, {
                            x: 0,
                            ease: e.easing
                        }, 0).to(".folio__wrap", .5, {
                            x: n,
                            ease: e.easing
                        }, 0).to(".folio__scroll, .folio__title", .5, {
                            x: n,
                            opacity: 0,
                            ease: e.easing
                        }, 0).staggerTo(".bgs, .info", .5, {
                            x: n,
                            ease: e.easing
                        }, .02, .02).to(".logo", .5, {x: n - 100, ease: e.easing}, 0)
                    }
                })
            })
        }, t.prototype.hideDetails = function () {
            return this.detailsShown = !1, $body.removeClass("is-detail-shown is-scroll-disabled"), e.Scrolling.scroll({
                y: this.lastScroll,
                speed: 0,
                animate: !1
            }), e.Scrolling.enable(), TweenMax.set(breakpoint.phone ? ".wrap" : ".folio__wrap", {y: 0}), new Promise(function (t, o) {
                breakpoint.phone ? new TimelineMax({onComplete: t}).to(".wrap", .4, {
                    x: 0,
                    ease: e.easing
                }) : new TimelineMax({
                    onComplete: function () {
                        $(".details").hide(), t()
                    }
                }).staggerTo(".folio__wrap, .bgs, .info", .5, {
                    x: 0,
                    ease: e.easing
                }, .02).to(".folio__scroll, .folio__title", .5, {
                    x: 0,
                    opacity: 1,
                    ease: e.easing
                }, 0).to(".logo", .5, {x: 0, ease: e.easing}, 0).to(".details", .6, {x: 300, ease: e.easing}, 0)
            })
        }, t.prototype.parseEmails = function () {
            $("[data-poczta]").each(function (e, t) {
                var o = atob($(t).data("poczta"));
                t.href = "mailto:" + o, t.text = o, $(t).removeAttr("data-poczta hidden")
            })
        }, t
    }();
    e.Main = t
}(Project || (Project = {})), main = new Project.Main;
// a.scroll.slide
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
$(document).on('click','.project__link', function () {
    var t = $(this).attr('class');
    $('.' + t + ':first-of-type').css('transform', 'matrix(1,0,0,1,0,0');
    setTimeout(
        function() {
            $('body').addClass('is-scroll-disabled');
            $('.wrap').css('transform', 'translateX(-50%)');
            // $('.bg:first-child, .project:first-child').css('height','100vh');
            // $('.bgs div').css('transform', 'matrix(1,0,0,1,0,0');
            var d = $('.' + t).parent().attr('data-id');
            $('.details, #'+d).css('display','block');
        },
        500);
});
$(document).on('click','.icon-close', function () {
    $('body').removeClass('is-scroll-disabled');
    $('.wrap').css('transform', 'translateX(0%)');
    // $('.bg:first-child, .project:first-child').css('height','145vh');
    $('.details, .project-details').css('display','none');
});