jQuery(window).on("elementor/frontend/init", (function() {
    elementorFrontend.hooks.addAction("frontend/element_ready/wts-gmap.default", (function(e) {
        var t = e.find(".eae-markers");
        0 != t.length && (map = function(a) {
            var n = (t = e.find(".eae-markers")).data("zoom"),
                i = a.find(".marker"),
                r = t.data("style"),
                o = (t.data("scroll"), {
                    zoom: n,
                    center: new google.maps.LatLng(0, 0),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: r
                }),
                s = new google.maps.Map(a[0], o);
            return s.markers = [], i.each((function() {
                    ! function(a, n) {
                        var i = t.data("animate");
                        t.data("show-info-window-onload");
                        t = e.find(".eae-markers");
                        var r = new google.maps.LatLng(a.attr("data-lat"), a.attr("data-lng"));
                        if (icon_img = a.attr("data-icon"), "" != icon_img) var o = {
                            url: a.attr("data-icon"),
                            scaledSize: new google.maps.Size(a.attr("data-icon-size"), a.attr("data-icon-size"))
                        };
                        var s = new google.maps.Marker({
                            position: r,
                            map: n,
                            icon: o,
                            animation: google.maps.Animation.DROP
                        });
                        "animate-yes" == i && "yes" != a.data("info-window") && s.setAnimation(google.maps.Animation.BOUNCE);
                        "animate-yes" == i && google.maps.event.addListener(s, "click", (function() {
                            s.setAnimation(null)
                        }));
                        if (n.markers.push(s), a.html()) {
                            var d = new google.maps.InfoWindow({
                                content: a.html()
                            });
                            "yes" == a.data("info-window") && d.open(n, s), google.maps.event.addListener(s, "click", (function() {
                                d.open(n, s)
                            }))
                        }
                        "animate-yes" == i && google.maps.event.addListener(d, "closeclick", (function() {
                            s.setAnimation(google.maps.Animation.BOUNCE)
                        }))
                    }(jQuery(this), s)
                })),
                function(e, t) {
                    var a = new google.maps.LatLngBounds;
                    jQuery.each(e.markers, (function(e, t) {
                        var n = new google.maps.LatLng(t.position.lat(), t.position.lng());
                        a.extend(n)
                    })), 1 == e.markers.length ? (e.setCenter(a.getCenter()), e.setZoom(t)) : e.fitBounds(a)
                }(s, n), s
        }(e.find(".eae-markers")))
    })), elementorFrontend.hooks.addAction("frontend/element_ready/global", (function(e) {
        var t, a, n, i, r, o, s, d = [],
            l = [],
            c = e.children(".eae-section-bs").children(".eae-section-bs-inner");
        c && c.data("eae-bg-slider") && (slider_images = c.data("eae-bg-slider"), t = c.data("eae-bg-slider-transition"), a = c.data("eae-bg-slider-animation"), i = ("yes" == (n = c.data("eae-bg-custom-overlay")) || c.data("eae-bg-slider-overlay"), eae_editor.plugin_url + "assets/lib/vegas/overlays/" + c.data("eae-bg-slider-overlay")), r = c.data("eae-bg-slider-cover"), o = c.data("eae-bs-slider-delay"), s = c.data("eae-bs-slider-timer"), "undefined" != typeof slider_images && (d = slider_images.split(","), jQuery.each(d, (function(e, t) {
            var a = [];
            a.src = t, l.push(a)
        })), c.vegas({
            slides: l,
            transition: t,
            animation: a,
            overlay: i,
            cover: r,
            delay: o,
            timer: s,
            init: function() {
                "yes" == n && c.children(".vegas-overlay").css("background-image", "")
            }
        })))
    }))
}));
var isEditMode = !1,
    popupInstance = [];
! function(e) {
    e(window).on("elementor/frontend/init", (function() {
        var t = function(e, t) {
                function a(e) {
                    $icons = t(document).find(e).find(".eae-ic-icon-wrap"), window.innerWidth < 767 ? $icons.each((function(e, a) {
                        t(a).css("top", t(a).height() / 2 + 8 + "px"), t(a).next(".eae-info-circle-item__content-wrap").css("padding-top", t(a).height() / 2 + 8 + "px")
                    })) : $icons.each((function(e, a) {
                        t(a).css("margin-left", -.5 * t(a).outerWidth()), t(a).css("margin-top", -.5 * t(a).outerHeight()), $a = function(e) {
                            return e = (e - 90) * Math.PI / 180, {
                                x: 50 + 45 * Math.cos(e),
                                y: 50 + 45 * Math.sin(e)
                            }
                        }($angle), $b = 360 / $icons.length, t(a).css("left", $a.x + "%"), t(a).css("top", $a.y + "%"), $angle += $b
                    }))
                }
                $wrap_class = ".elementor-element-" + e.data("id"), $angle = 0, a(e);
                var n = null;

                function i() {
                    "yes" == e.find(".eae-info-circle").data("autoplay") && (n = setInterval(r, $autoplayDuration))
                }

                function r() {
                    e.find(".eae-active").next().length > 0 ? e.find(".eae-active").next().addClass("eae-active").siblings().removeClass("eae-active") : e.find(".eae-info-circle-item").eq(0).addClass("eae-active").siblings().removeClass("eae-active")
                }
                $autoplayDuration = e.find(".eae-info-circle").data("delay"), i(), e.find(".eae-ic-icon-wrap").hover((function() {
                    clearInterval(n)
                }), (function() {
                    i()
                })), e.find(".eae-info-circle-item").length > 0 && t(e.find(".eae-info-circle-item")[0]).addClass("eae-active"), e.find(".eae-ic-icon-wrap").on("click", (function() {
                    e.find(".eae-info-circle-item").removeClass("eae-active"), t(this).parent().addClass("eae-active")
                })), e.hasClass("eae-mouseenter-yes") && e.find(".eae-ic-icon-wrap").on("mouseenter", (function() {
                    e.find(".eae-info-circle-item").removeClass("eae-active"), t(this).parent().addClass("eae-active")
                })), window.addEventListener("resize", a.bind(this, $wrap_class))
            },
            a = function(e, t) {
                function a() {
                    var a = e.find(".eae-timline-progress-bar"),
                        n = e.find(".eae-timeline-item"),
                        i = e.find(".eae-timeline");
                    const r = i.data("top-offset");
                    var o = t(i).height(),
                        s = t(n).last().find(".eae-tl-icon-wrapper").offset().top - t(n[0]).parent().offset().top,
                        d = e.find(".eae-tl-icon-wrapper");
                    t(a).css("top", t(n[0]).find(".eae-tl-icon-wrapper").offset().top - t(n[0]).parent().offset().top), t(a).css("bottom", o - s), t(a).css("left", d.eq(0)[0].offsetLeft + d.eq(0).width() / 2), t(a).css("display", "block"), n.each((function(e, a) {
                        new Waypoint({
                            element: t(a),
                            handler: function(e) {
                                "down" == e ? t(a).addClass("eae-tl-item-focused") : t(a).removeClass("eae-tl-item-focused")
                            },
                            offset: r
                        })
                    }))
                }
                a(), window.addEventListener("resize", a), window.addEventListener("scroll", (function() {
                    e.find(".eae-timline-progress-bar");
                    const a = e.find(".eae-timeline").data("top-offset");
                    e.find(".eae-pb-inner-line").css("height", t(window).scrollTop() - e.find(".eae-timeline").offset().top + a), e.find(".eae-pb-inner-line").css("max-height", e.find(".eae-pb-inner-line").parent().height())
                }))
            };

        function n(e, t, a) {
            var n = new Date;
            n.setTime(n.getTime() + 60 * a * 60 * 1e3);
            var i = "expires=" + n.toUTCString();
            document.cookie = e + "=" + t + ";" + i + ";path=/"
        }

        function i(e) {
            for (var t = e + "=", a = decodeURIComponent(document.cookie).split(";"), n = 0; n < a.length; n++) {
                for (var i = a[n];
                    " " == i.charAt(0);) i = i.substring(1);
                if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
            }
            return ""
        }
        var r = function(e, t) {
                $is_rtl = jQuery("body").hasClass("rtl"), $wrapper = e.find(".eae-progress-bar");
                $wrapper.attr("data-skill");
                var a = $wrapper.attr("data-value"),
                    n = $wrapper.attr("data-skin"),
                    i = $wrapper.find(".eae-pb-bar-skill"),
                    r = $wrapper.find(".eae-pb-bar-value"),
                    o = $wrapper.find(".eae-pb-bar"),
                    s = $wrapper.find(".eae-pb-bar-inner");
                "skin1" === n && t(s).attr("style", "width : " + a + "%"), "skin2" === n && t(s).attr("style", "width : " + a + "%"), "skin3" === n && (t(r).addClass("eae-pb-bar-value--aligned-value"), $is_rtl ? t(r).attr("style", "right :" + a + "%") : t(r).attr("style", "left :" + a + "%"), t(s).attr("style", "width :" + a + "%")), "skin4" === n && (t(r).addClass("eae-pb-bar-value--aligned-value"), $is_rtl ? t(r).attr("style", "right :" + a + "%") : t(r).attr("style", "left :" + a + "%"), t(s).attr("style", "width :" + a + "%"), t(o).addClass("eae-pb-bar--no-overflow")), "skin5" === n && (t(r).addClass("eae-pb-bar-value--aligned-value"), $is_rtl ? t(r).attr("style", "right :" + a + "%") : t(r).attr("style", "left :" + a + "%"), t(s).attr("style", "width :" + a + "%")), $wrapper.each((function(e, a) {
                    new Waypoint({
                        element: a,
                        skill_value: t(a).find(".eae-pb-bar-skill"),
                        valueElem: t(a).find(".eae-pb-bar-value"),
                        prgBar: t(a).find(".eae-pb-bar-bar"),
                        prgInner: t(a).find(".eae-pb-bar-inner"),
                        handler: function(e) {
                            "down" == e && (t(r).hasClass("js-animated") || t(r).addClass("js-animated"), t(s).hasClass("js-animated") || t(s).addClass("js-animated"), t(i).hasClass("js-animated") || t(i).addClass("js-animated"))
                        },
                        offset: "bottom-in-view"
                    })
                }))
            },
            o = function(e, t) {
                var a = e.find(".eae-content-switcher-wrapper"),
                    n = (e.data("id"), a.find(".eae-content-switch-button"));
                n.each((function(e, i) {
                    t(this).on("click", (function(e) {
                        e.preventDefault();
                        let i = t(this).find(".eae-content-switch-label");
                        if (!t(this).hasClass("active")) {
                            t(n).removeClass("active");
                            let e = t(i).attr("id");
                            t(this).addClass("active");
                            var r = t(a).find(".eae-cs-content-section");
                            t(r).removeClass("active");
                            let o = t(a).find(".eae-content-section-" + e);
                            t(o).addClass("active"), window.dispatchEvent(new Event("resize"))
                        }
                    }))
                }))
            },
            s = function(e, t) {
                let a = e.find(".eae-content-switcher-wrapper"),
                    n = (e.data("id"), a.find(".eae-cs-switch-label")),
                    i = a.find(".eae-content-switch-label.primary-label");
                const r = t(i).attr("item_id");
                let o = a.find(".eae-content-switch-label.secondary-label");
                const s = t(o).attr("item_id");
                let d = a.find(".eae-cs-content-section.eae-content-section-" + r),
                    l = a.find(".eae-cs-content-section.eae-content-section-" + s);
                t(n).on("click", (function(e) {
                    t(this).find("input.eae-content-toggle-switch").is(":checked") ? (o.addClass("active"), l.addClass("active"), i.removeClass("active"), d.removeClass("active")) : (i.addClass("active"), d.addClass("active"), o.removeClass("active"), l.removeClass("active")), window.dispatchEvent(new Event("resize"))
                }))
            };
        e.fn.EAEHoverDirection = function(t) {
            var a = e.extend({
                inaccuracy: 30,
                speed: 200
            }, t);
            this.find(".overlay").css({
                top: -9999999
            }), this.mouseenter((function(t) {
                container = e(this), overlay = container.find(".overlay"), parentOffset = container.offset(), relX = t.pageX - parentOffset.left, relY = t.pageY - parentOffset.top, overlay.css({
                    top: 0,
                    left: 0,
                    width: container.width(),
                    height: container.height()
                }), relX > container.width() - a.inaccuracy ? overlay.css({
                    top: 0,
                    left: container.width()
                }) : relX < a.inaccuracy ? overlay.css({
                    top: 0,
                    left: -container.width()
                }) : relY > container.height() - a.inaccuracy ? overlay.css({
                    top: container.width(),
                    left: 0
                }) : relY < a.inaccuracy && overlay.css({
                    top: -container.width(),
                    left: 0
                }), overlay.animate({
                    top: 0,
                    left: 0
                }, a.speed)
            })), this.mouseleave((function(t) {
                container = e(this), overlay = container.find(".overlay"), parentOffset = container.offset(), relX = t.pageX - parentOffset.left, relY = t.pageY - parentOffset.top, relX <= 0 && overlay.animate({
                    top: 0,
                    left: -container.width()
                }, a.speed), relX >= container.width() && overlay.animate({
                    top: 0,
                    left: container.width()
                }, a.speed), relY <= 0 && overlay.animate({
                    left: 0,
                    top: -container.height()
                }, a.speed), relY >= container.height() && overlay.animate({
                    left: 0,
                    top: container.height()
                }, a.speed)
            }))
        };
        let d = function(e, t) {
            const a = e.find(".eae-chart-outer-container"),
                n = (e.data("id"), e.find("#eae-chart-canvas"));
            let i = a.data("settings");
            e.find(".eae-chart-outer-container").each((function(e, t) {
                new Waypoint({
                    element: t,
                    handler: function(e) {
                        "down" == e && (t.classList.contains("trigger") || (t.classList.add("trigger"), new Chart(n, i)))
                    },
                    offset: "70%"
                })
            }))
        };
        const l = function(e, t, a = null, n) {
                let i = {},
                    r = [],
                    o = ".elementor-element-" + t + " .eae-swiper-container",
                    s = elementorFrontend.config.responsive.activeBreakpoints;
                const d = {
                        slidesPerView: "slidesPerView",
                        slidesPerGroup: "slidesPerGroup",
                        spaceBetween: "spaceBetween"
                    },
                    l = ".elementor-element-" + t;
                if (null !== a) {
                    t = a.data("id");
                    o = l + ' .eae-swiper-container[data-eae-slider-id="' + a.find(".swiper-container").data("eae-slider-id") + '"]'
                }
                if ("yes" === n.data("show-thumbnail")) {
                    i = function(e, t, a, n) {
                        let i = {};
                        const r = {};
                        if (e.hasOwnProperty("mobile"))
                            for (const e in t) a.hasOwnProperty(e) && (i[e] = a[e].mobile);
                        return n && Object.keys(n).map((e => {
                            const t = parseInt(n[e]);
                            "desktop" === e && (e = "default");
                            const i = parseInt(a.spaceBetween[e]),
                                o = parseInt(a.slidesPerView[e]);
                            r[t - 1] = {
                                spaceBetween: i,
                                slidesPerView: o
                            }
                        })), i.breakpoints = r, i.direction = "horizontal", i.watchSlidesVisibility = !0, i.watchSlidesProgress = !0, i.freeMode = !0, i.slideToClickedSlide = !0, i
                    }(s, d, n.data("thumb-settings"), e.breakpoints_value), i.el = jQuery(".elementor-element-" + t + " .eae-thumb-container")
                }
                if (void 0 === e) return !1;
                if (r = {
                        direction: e.direction,
                        speed: e.speed,
                        autoHeight: e.autoHeight,
                        autoplay: e.autoplay,
                        effect: e.effect,
                        loop: e.loop,
                        zoom: e.zoom,
                        wrapperClass: "eae-swiper-wrapper",
                        slideClass: "eae-swiper-slide",
                        observer: !0,
                        observeParents: !0
                    }, s.hasOwnProperty("mobile"))
                    for (const t in d) e.hasOwnProperty(t) && (r[t] = e[t].mobile);
                e.loop && e.hasOwnProperty("slidersPerView") && document.querySelectorAll(l + " .eae-swiper-slide").length < e.slidesPerView.tablet && (r.loop = !1);
                const f = {};
                if (e.hasOwnProperty("breakpoints_value") && Object.keys(e.breakpoints_value).map((t => {
                        const a = parseInt(e.breakpoints_value[t]);
                        "desktop" === t && (t = "default");
                        const n = parseInt(e.spaceBetween[t]),
                            i = parseInt(e.slidesPerView[t]),
                            r = parseInt(e.slidesPerGroup[t]);
                        f[a - 1] = {
                            spaceBetween: n,
                            slidesPerView: i,
                            slidesPerGroup: r
                        }
                    })), r.breakpoints = f, r.keyboard = "yes" === e.keyboard && {
                        enabled: !0,
                        onlyInViewport: !0
                    }, "yes" === e.navigation && (r.navigation = {
                        nextEl: l + " .eae-swiper-button-next",
                        prevEl: l + " .eae-swiper-button-prev"
                    }), "" !== e.ptype && (r.pagination = {
                        el: l + " .eae-swiper-pagination",
                        type: e.ptype,
                        clickable: e.clickable
                    }), "yes" == e.scrollbar && (r.scrollbar = {
                        el: l + " .eae-swiper-scrollbar",
                        hide: !0
                    }), r.thumbs = {
                        swiper: i
                    }, "undefined" == typeof Swiper) {
                    new(0, elementorFrontend.utils.swiper)(jQuery(o), r).then((a => {
                        let n = a;
                        c(n);
                        const i = e.pause_on_hover;
                        "yes" == i && e.autoplay && p(n, i, t)
                    }))
                } else {
                    const a = new Swiper(".elementor-element-" + t + " .eae-swiper-container", r);
                    c(a);
                    const n = e.pause_on_hover;
                    "yes" == n && p(a, n, t)
                }
                jQuery(".elementor-element-" + t + " .eae-swiper-container").css("visibility", "visible")
            },
            c = function(e) {
                e.length > 0 ? e.forEach((function(t) {
                    t.on("slideChangeTransitionStart", (function() {
                        t.$wrapperEl.find(".ae-featured-bg-yes").each((function() {
                            if ("none" == jQuery(this).css("background-image")) {
                                let e = jQuery(this).attr("data-ae-bg");
                                jQuery(this).css("background-image", "url(" + e + ")")
                            }
                        })), t.$wrapperEl.find(".ae-bg-color-yes").each((function() {
                            let e = jQuery(this).attr("data-ae-bg-color");
                            "rgba(0, 0, 0, 0)" === jQuery(this).css("background-color") && jQuery(this).css("background-color", e)
                        })), t.$wrapperEl.find(".swiper-slide-duplicate").find(".elementor-invisible").each((function() {
                            elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))
                        })), t.$wrapperEl.find(".swiper-slide").find(".animated").each((function() {
                            elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))
                        }))
                    })), t.on("click", (function() {
                        const t = e.clickedSlide;
                        if (void 0 === t) return;
                        const a = t.querySelector(".ae-link-yes");
                        if (null !== a && 0 != a.length) {
                            void 0 !== jQuery(a).data("ae-url") && (jQuery(a).data("ae-url") && jQuery(a).hasClass("ae-new-window-yes") ? window.open(jQuery(a).data("ae-url")) : location.href = jQuery(a).data("ae-url"))
                        }
                    })), t.init()
                })) : (e.on("slideChangeTransitionStart", (function() {
                    e.$wrapperEl.find(".ae-featured-bg-yes").each((function() {
                        if ("none" == jQuery(this).css("background-image")) {
                            let e = jQuery(this).attr("data-ae-bg");
                            jQuery(this).css("background-image", "url(" + e + ")")
                        }
                    })), e.$wrapperEl.find(".ae-bg-color-yes").each((function() {
                        let e = jQuery(this).attr("data-ae-bg-color");
                        "rgba(0, 0, 0, 0)" === jQuery(this).css("background-color") && jQuery(this).css("background-color", e)
                    })), e.$wrapperEl.find(".swiper-slide-duplicate").find(".elementor-invisible").each((function() {
                        elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))
                    })), e.$wrapperEl.find(".swiper-slide").find(".animated").each((function() {
                        elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))
                    }))
                })), e.on("click", (function() {
                    const t = e.clickedSlide;
                    if (void 0 === t) return;
                    const a = t.querySelector(".ae-link-yes");
                    if (null !== a && 0 != a.length) {
                        void 0 !== jQuery(a).data("ae-url") && (jQuery(a).data("ae-url") && jQuery(a).hasClass("ae-new-window-yes") ? window.open(jQuery(a).data("ae-url")) : location.href = jQuery(a).data("ae-url"))
                    }
                })), e.init())
            },
            p = function(e, t, a) {
                jQuery(".elementor-element-" + a + " .eae-swiper-container").hover((function() {
                    e.autoplay.stop()
                }), (function() {
                    e.autoplay.start()
                }))
            };
        var f, u = elementorModules.frontend.handlers.Base;
        f = u.extend({
            getDefaultSettings: function() {
                return {
                    settings: this.getElementSettings()
                }
            },
            getDefaultElements: function() {
                const e = this.$element.data("id"),
                    t = document.querySelector(".elementor-element-" + e),
                    a = t.querySelector(".wts-eae-coupon-code-wrapper");
                return {
                    eid: e,
                    element: t,
                    wrapper: a
                }
            },
            onInit: function() {
                const {
                    settings: t
                } = this.getDefaultSettings(), {
                    wrapper: a
                } = this.getDefaultElements(), {
                    element: n
                } = this.getDefaultElements();
                var i = n.querySelector(".eae-cc-button"),
                    r = n.querySelector(".eae-code");
                if (n.querySelectorAll(".wts-eae-coupon-code-wrapper").forEach((e => {
                        let t = e.querySelector(".eae-lottie");
                        if (null != t) {
                            let e = JSON.parse(t.getAttribute("data-lottie-settings")),
                                a = lottie.loadAnimation({
                                    container: t,
                                    path: e.url,
                                    renderer: "svg",
                                    loop: e.loop
                                });
                            1 == e.reverse && a.setDirection(-1)
                        }
                    })), null != i && i.addEventListener("click", (function() {
                        const e = r.getAttribute("data-code-value"),
                            a = document.createElement("textarea");
                        a.value = e, document.body.appendChild(a), a.select(), document.execCommand("copy"), document.body.removeChild(a);
                        const n = i.innerHTML;
                        let o;
                        "scratch" == t.coupon_type || "peel" == t.coupon_type || "slide" == t.coupon_type ? i.innerText = t.peel_after_copy_button : i.innerText = t.after_copy_button, o = "standard" == t.coupon_type ? t.sta_speed : t.peel_speed, setTimeout((function() {
                            i.innerHTML = n
                        }), o)
                    })), "peel" == t.coupon_type && "" != t.dynamic_coupon) {
                    var o = new Peel("#fade-out", {
                        corner: Peel.Corners.TOP_RIGHT
                    });
                    o.setFadeThreshold(.9), o.handleDrag((function(e, t, a) {
                        this.setPeelPosition(t, a), 1 === o.getAmountClipped() && o.removeEvents()
                    })), o.setPeelPosition(440, 100)
                }
                if ("pop" == t.sta_layout && "" != t.dynamic_coupon) {
                    const C = a.querySelector(".eae-coupon-popup-link"),
                        x = n.getAttribute("data-id");
                    "svg" == t.pop_icon.library ? ($close_btn_html = "", $close_btn_html = '<svg class="eae-close" style="-webkit-mask-image: url(' + t.pop_icon.value.url + "); mask-image: url(" + t.pop_icon.value.url + '); "></svg>') : $close_btn_html = '<i class="eae-close ' + t.pop_icon.value + '"> </i>', e(C).eaePopup({
                        type: "inline",
                        midClick: !0,
                        mainClass: "eae-coupon-popup eae-popup  eae-cc-" + x,
                        closeMarkup: $close_btn_html,
                        closeBtnInside: "yes" == t.btn_in_out,
                        callbacks: {
                            beforeOpen: function() {
                                "" != t.effect && (this.st.mainClass = " eae-coupon-popup eae-popup  eae-cc-" + x + " mfp-" + t.effect)
                            },
                            open: function() {
                                var e = C.getAttribute("data-id");
                                const a = document.querySelector(".eae-coupon-popup-" + e);
                                var n = a.querySelector(".eae-cc-button"),
                                    i = a.querySelector(".eae-code");
                                const r = n.innerText;
                                n.addEventListener("click", (function() {
                                    const e = i.getAttribute("data-code-value"),
                                        o = document.createElement("textarea");
                                    o.value = e, a.appendChild(o), o.select(), document.execCommand("copy"), a.removeChild(o), n.innerText = t.after_copy_button, setTimeout((function() {
                                        n.innerText = r
                                    }), t.sta_speed)
                                }))
                            }
                        }
                    }), "yes" == t.preview_modal && elementorFrontend.isEditMode() && C.click()
                }
                if ("slide" == t.coupon_type && "" != t.dynamic_coupon) {
                    var s = a.querySelector(".eae-slide-fr");
                    if ("yes" == t.preview_modal && elementorFrontend.isEditMode()) s.style.display = "none";
                    else {
                        var d = 0,
                            l = 0,
                            c = 0;

                        function p(e) {
                            c = e.clientX - d, e.clientY - l, c > 2 || c < t.Peel_scratch_width || (s.style.left = c + "px")
                        }
                        s.addEventListener("mousedown", (function(e) {
                            e.preventDefault(), d = e.clientX - s.offsetLeft, l = e.clientY - s.offsetTop, window.addEventListener("mousemove", p, !1)
                        }), !1), window.addEventListener("mouseup", (function() {
                            window.removeEventListener("mousemove", p, !1)
                        }), !1);
                        const T = s;
                        let S;
                        T.addEventListener("touchstart", (e => {
                            const t = e.touches[0];
                            S = t.clientX - T.getBoundingClientRect().left, T.style.cursor = "grabbing"
                        })), T.addEventListener("touchmove", (e => {
                            if (void 0 === S) return;
                            const a = e.touches[0].clientX - S;
                            a > 4 || a < t.Peel_scratch_width || (T.style.left = a + "px")
                        })), T.addEventListener("touchend", (() => {
                            S = void 0, T.style.cursor = "grab"
                        }))
                    }
                }
                if ("scratch" === t.coupon_type && "" != t.dynamic_coupon)
                    if ("yes" == t.preview_modal && elementorFrontend.isEditMode()) a.querySelector("#eae-scratch-canvas").style.display = "none";
                    else {
                        var f, u;
                        canvas = a.querySelector("#eae-scratch-canvas");
                        var m = canvas.width,
                            g = canvas.height,
                            h = canvas.getContext("2d"),
                            v = new Image,
                            w = new Image;
                        if (null == t.item_bg_image && null == t.item_bg_color && null == t.item_bg_color_b && (v.src = eae.plugin_url + "assets/img/coupon/scratch_img.png", v.onload = function() {
                                h.drawImage(v, 0, 0, m, g)
                            }), null != t.item_bg_image) v.src = t.item_bg_image.url, v.onload = function() {
                            h.drawImage(v, 0, 0, m, g)
                        };
                        else if (null == t.item_bg_color_b && "classic" == t.item_bg_background && null == t.item_bg_image) {
                            if (null != t.item_bg_color) {
                                let D = h.createLinearGradient(0, 0, 135, 135);
                                D.addColorStop(0, t.item_bg_color), h.fillStyle = D, h.fillRect(0, 0, m, g)
                            }
                        } else if (null != t.item_bg_color_b && null != t.item_bg_color && "gradient" == t.item_bg_background && null == t.item_bg_image) {
                            let E = h.createLinearGradient(0, 0, t.item_bg_color_stop.size, t.item_bg_color_b_stop.size);
                            E.addColorStop(0, t.item_bg_color), E.addColorStop(1, t.item_bg_color_b), h.fillStyle = E, h.fillRect(0, 0, m, g)
                        }

                        function y(e, t) {
                            var a = 0,
                                n = 0;
                            if (void 0 !== t.offsetParent)
                                do {
                                    a += t.offsetLeft, n += t.offsetTop
                                } while (t = t.offsetParent);
                            return {
                                x: (e.pageX || e.touches[0].clientX) - a,
                                y: (e.pageY || e.touches[0].clientY) - n
                            }
                        }

                        function b(e) {
                            f = !0, u = y(e, canvas)
                        }

                        function _(e) {
                            if (f) {
                                e.preventDefault();
                                for (var t, n, i, r, o, s = y(e, canvas), d = (i = u, r = s, Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2))), l = function(e, t) {
                                        return Math.atan2(t.x - e.x, t.y - e.y)
                                    }(u, s), c = 0; c < d; c++) t = u.x + Math.sin(l) * c - 25, n = u.y + Math.cos(l) * c - 25, h.globalCompositeOperation = "destination-out", h.drawImage(w, t, n);
                                u = s, o = function(e) {
                                    (!e || e < 1) && (e = 1);
                                    for (var t = h.getImageData(0, 0, m, g).data, a = t.length, n = a / e, i = 0, r = i = 0; r < a; r += e) 0 === parseInt(t[r]) && i++;
                                    return Math.round(i / n * 100)
                                }(32), (o = o || 0) > 40 && (a.querySelector(".eae-back-wrapper").style.zIndex = "1", a.querySelector(".eae-coupon-canvas").remove())
                            }
                        }

                        function k(e) {
                            f = !1
                        }
                        w.src = eae.plugin_url + "assets/img/coupon/brush.png", canvas.addEventListener("mousedown", b, !1), canvas.addEventListener("touchstart", b, !1), canvas.addEventListener("mousemove", _, !1), canvas.addEventListener("touchmove", _, !1), canvas.addEventListener("mouseup", k, !1), canvas.addEventListener("touchend", k, !1)
                    }
            },
            onElementChange: function(e) {
                const {
                    wrapper: t
                } = this.getDefaultElements(), {
                    settings: a
                } = this.getDefaultSettings();
                if (("" != a.dynamic_coupon && "dynamic" == a.source || "static" == a.source) && "scratch" === a.coupon_type) var n = t.querySelector("#eae-scratch-canvas");
                if ("item_bg_background" == e || "item_bg_color" == e || "item_bg_color_b" == e || "item_bg_color_stop" == e || "item_bg_color_b_stop" == e) {
                    var i = n.width,
                        r = n.height,
                        o = n.getContext("2d");
                    if (null == a.item_bg_color_b && "classic" == a.item_bg_background && (o.fillStyle = a.item_bg_color, o.fillRect(0, 0, i, r)), null != a.item_bg_color_b && "gradient" == a.item_bg_background) {
                        let e = o.createLinearGradient(0, 0, a.item_bg_color_stop.size, a.item_bg_color_b_stop.size);
                        e.addColorStop(0, a.item_bg_color), e.addColorStop(1, a.item_bg_color_b), o.fillStyle = e, o.fillRect(0, 0, i, r)
                    }
                }
            }
        }), elementorFrontend.hooks.addAction("frontend/element_ready/wts-ab-image.default", (function(e, t) {
            e.find(".eae-img-comp-container").imagesLoaded().done((function() {
                ab_style = e.find(".eae-img-comp-container").data("ab-style"), slider_pos = e.find(".eae-img-comp-container").data("slider-pos"), "horizontal" === ab_style ? (separator_width = parseInt(e.find(".eae-img-comp-overlay").css("border-right-width")), function(e) {
                    var t, a;

                    function n(t) {
                        var n, i, r, o = 0;

                        function s(e) {
                            e.preventDefault(), o = 1, window.addEventListener("mousemove", l), n.addEventListener("touchmove", c)
                        }

                        function d() {
                            o = 0
                        }

                        function l(e) {
                            var t;
                            if (0 == o) return !1;
                            (t = f(e)) < 0 && (t = 0), t > i && (t = i), u(t)
                        }

                        function c(e) {
                            var t;
                            if (0 == o) return !1;
                            (t = p(e)) < 0 && (t = 0), t > i && (t = i), u(t)
                        }

                        function p(e) {
                            var a;
                            return a = t.getBoundingClientRect(), e.changedTouches[0].clientX - a.left
                        }

                        function f(e) {
                            var a;
                            return e = e || window.event, a = t.getBoundingClientRect(), e.pageX - a.left
                        }

                        function u(e) {
                            t.style.width = e + "px", n.style.left = t.offsetWidth - n.offsetWidth / 2 - separator_width / 2 + "px"
                        }
                        i = t.offsetWidth, r = t.offsetHeight, t.style.width = a + "px", (n = (n = e.find(".eae-img-comp-slider"))[0]).style.top = r / 2 - n.offsetHeight / 2 + "px", n.style.left = a - n.offsetWidth / 2 - separator_width / 2 + "px", e.hasClass("elementor-element-edit-mode") || (n.addEventListener("mousedown", s), window.addEventListener("mouseup", d), n.addEventListener("touchstart", s), window.addEventListener("touchstop", d))
                    }
                    t = e.find(".eae-img-comp-overlay"), a = (a = t.width()) * slider_pos / 100, n(t[0])
                }(e)) : (separator_width = parseInt(e.find(".eae-img-comp-overlay").css("border-bottom-width")), function(e) {
                    var t;

                    function a(t) {
                        var a, n, i, r = 0;

                        function o(e) {
                            e.preventDefault(), r = 1, window.addEventListener("mousemove", d), a.addEventListener("touchmove", c)
                        }

                        function s() {
                            r = 0
                        }

                        function d(e) {
                            var t;
                            if (0 == r) return !1;
                            (t = l(e)) < 0 && (t = 0), t > i && (t = i), f(t)
                        }

                        function l(e) {
                            var a, n = 0;
                            return e = e || window.event, a = t.getBoundingClientRect(), n = e.pageY - a.top, n -= window.pageYOffset
                        }

                        function c(e) {
                            var t;
                            if (0 == r) return !1;
                            (t = p(e)) < 0 && (t = 0), t > i && (t = i), f(t)
                        }

                        function p(e) {
                            var a;
                            return a = t.getBoundingClientRect(), e.changedTouches[0].clientY - a.top
                        }

                        function f(e) {
                            t.style.height = e + "px", a.style.top = t.offsetHeight - a.offsetHeight / 2 - separator_width / 2 + "px"
                        }
                        n = t.offsetWidth, i = t.offsetHeight, t.style.height = start_pos + "px", (a = (a = e.find(".eae-img-comp-slider"))[0]).style.top = start_pos - a.offsetHeight / 2 - separator_width / 2 + "px", a.style.left = n / 2 - a.offsetWidth / 2 + "px", e.hasClass("elementor-element-edit-mode") || (a.addEventListener("mousedown", o), window.addEventListener("mouseup", s), a.addEventListener("touchstart", o), window.addEventListener("touchstop", s))
                    }
                    t = e.find(".eae-img-comp-overlay"), start_pos = t.height(), start_pos = start_pos * slider_pos / 100, a(t[0])
                }(e))
            }))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/global", (function(e, t) {
            e.hasClass("eae-particle-yes") && (id = e.data("id"), element_type = e.data("element_type"), pdata = e.data("eae-particle"), pdata_wrapper = e.find(".eae-particle-wrapper").data("eae-pdata"), "undefined" != typeof pdata && "" != pdata ? e.find(".eae-section-bs").length > 0 ? (e.find(".eae-section-bs").after('<div class="eae-particle-wrapper" id="eae-particle-' + id + '"></div>'), particlesJS("eae-particle-" + id, pdata)) : ("column" == element_type ? e.prepend('<div class="eae-particle-wrapper" id="eae-particle-' + id + '"></div>') : e.prepend('<div class="eae-particle-wrapper " id="eae-particle-' + id + '"></div>'), particlesJS("eae-particle-" + id, pdata)) : "undefined" != typeof pdata_wrapper && "" != pdata_wrapper && (element_type, e.prepend('<div class="eae-particle-wrapper eae-particle-area" id="eae-particle-' + id + '"></div>'), particlesJS("eae-particle-" + id, JSON.parse(pdata_wrapper))))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/global", (function(e, t) {
            if (e.hasClass("eae-animated-gradient-yes"))
                if (id = e.data("id"), color = e.data("color"), angle = e.data("angle"), e.hasClass("elementor-element-edit-mode")) color = e.find(".animated-gradient").data("color"), angle = e.find(".animated-gradient").data("angle"), gradient_color_editor = "linear-gradient(" + angle + "," + color + ")", e.prepend('<div class="animated-gradient" style="background-image : ' + gradient_color_editor + ' "></div>');
                else {
                    var a = "linear-gradient(" + angle + "," + color + ")";
                    e.css("background-image", a)
                }
        })), elementorFrontend.hooks.addAction("frontend/element_ready/wts-modal-popup.default", (function(e, t) {
            new Event("eaePopupLoaded");
            $preview_modal = e.find(".eae-popup-wrapper").data("preview-modal");
            var a = e.find(".eae-popup-wrapper").data("effect");
            $close_btn_type = e.find(".eae-popup-wrapper").data("close-button-type"), $close_btn = e.find(".eae-popup-wrapper").data("close-btn"), "icon" == $close_btn_type ? $close_btn_html = '<i class="eae-close ' + $close_btn + '"> </i>' : $close_btn_html = '<svg class="eae-close" style="-webkit-mask: url(' + $close_btn + "); mask: url(" + $close_btn + '); "></svg>', $magnific = e.find(".eae-popup-link").eaePopup({
                type: "inline",
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "eae-popup eae-popup-" + e.find(".eae-popup-link").data("id") + " eae-wrap-" + e.find(".eae-popup-link").data("ctrl-id"),
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: e.find(".eae-popup-wrapper").data("close-in-out"),
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 200,
                prependTo: null,
                fixedContentPos: !0,
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: $close_btn_html,
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
                callbacks: {
                    beforeOpen: function() {
                        "" != a && (this.st.mainClass = "eae-popup eae-popup-" + e.find(".eae-popup-link").data("id") + " eae-wrap-" + e.find(".eae-popup-link").data("ctrl-id") + " mfp-" + a)
                    },
                    open: function() {
                        var t = e.find(".eae-popup-link").data("id");
                        jQuery(".eae-popup-" + t + " .elementor-element");
                        window.dispatchEvent(new Event("resize"))
                    }
                }
            }), "yes" == $preview_modal && e.hasClass("elementor-element-edit-mode") && e.find(".eae-popup-link").click()
        })), elementorFrontend.hooks.addAction("frontend/element_ready/wts-testimonial-slider.default", (function(e, t) {
            if (e.find(".eae-grid-wrapper").hasClass("eae-masonry-yes")) {
                var a = e.find(".eae-grid").masonry({});
                a.imagesLoaded().progress((function() {
                    a.masonry("layout")
                }))
            }
            if (e.find(".eae-layout-carousel").length) {
                outer_wrapper = e.find(".eae-swiper-outer-wrapper"), wid = e.data("id"), wclass = ".elementor-element-" + wid;
                var n = outer_wrapper.data("direction"),
                    i = outer_wrapper.data("speed"),
                    r = outer_wrapper.data("autoplay"),
                    o = outer_wrapper.data("duration"),
                    s = outer_wrapper.data("effect"),
                    d = outer_wrapper.data("space"),
                    l = outer_wrapper.data("loop");
                l = "yes" == l;
                var c = outer_wrapper.data("slides-per-view"),
                    p = outer_wrapper.data("slides-per-group"),
                    f = outer_wrapper.data("ptype"),
                    u = outer_wrapper.data("navigation"),
                    m = outer_wrapper.data("clickable"),
                    g = outer_wrapper.data("keyboard"),
                    h = outer_wrapper.data("scrollbar");
                adata = {
                    direction: n,
                    effect: s,
                    spaceBetween: d.desktop,
                    loop: l,
                    speed: i,
                    slidesPerView: c.desktop,
                    slidesPerGroup: p.desktop,
                    observer: !0,
                    mousewheel: {
                        invert: !0
                    },
                    breakpoints: {
                        1024: {
                            spaceBetween: d.tablet,
                            slidesPerView: c.tablet,
                            slidesPerGroup: p.tablet
                        },
                        767: {
                            spaceBetween: d.mobile,
                            slidesPerView: c.mobile,
                            slidesPerGroup: p.mobile
                        }
                    }
                }, "fade" == s && (adata.fadeEffect = {
                    crossFade: !1
                }), adata.autoplay = "yes" == r && {
                    delay: o,
                    disableOnInteraction: !1
                }, "yes" == u && (adata.navigation = {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }), "" != f && (adata.pagination = {
                    el: ".swiper-pagination",
                    type: f
                }), "bullets" == f && "yes" == m && (adata.pagination = {
                    el: ".swiper-pagination",
                    clickable: !0,
                    type: f
                }), "yes" == h && (adata.scrollbar = {
                    el: ".swiper-scrollbar",
                    draggable: !0
                }), "yes" == g && (adata.keyboard = {
                    enabled: !0,
                    onlyInViewport: !0
                }), 0 == l && (adata.autoplay = {
                    delay: o,
                    stopOnLastSlide: !0,
                    disableOnInteraction: !1
                }), window.mswiper = new Swiper(".elementor-element-" + wid + " .eae-swiper-outer-wrapper .swiper-container", adata), t(".elementor-element-" + wid + " .eae-swiper-outer-wrapper .swiper-container").css("visibility", "visible")
            }
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-info-circle.skin1", t), elementorFrontend.hooks.addAction("frontend/element_ready/eae-info-circle.skin2", t), elementorFrontend.hooks.addAction("frontend/element_ready/eae-info-circle.skin3", t), elementorFrontend.hooks.addAction("frontend/element_ready/eae-info-circle.skin4", t), elementorFrontend.hooks.addAction("frontend/element_ready/eae-timeline.skin1", a), elementorFrontend.hooks.addAction("frontend/element_ready/eae-timeline.skin2", a), elementorFrontend.hooks.addAction("frontend/element_ready/eae-timeline.skin3", a), elementorFrontend.hooks.addAction("frontend/element_ready/eae-timeline.skin4", a), elementorFrontend.hooks.addAction("frontend/element_ready/eae-evergreen-timer.skin1", (function(e, t) {
            var a = e.find(".eae-evergreen-wrapper").data("egtime"),
                r = e.find(".eae-evergreen-wrapper").data("egt-expire"),
                o = e.find(".eae-evergreen-wrapper").data("element-type"),
                s = "eae-" + e.find(".eae-evergreen-wrapper").data("id"),
                d = "eae-temp-" + e.find(".eae-evergreen-wrapper").data("id"),
                l = e.find(".eae-evergreen-wrapper").data("actions"),
                c = e.find(".eae-evergreen-wrapper").data("unqid"),
                p = (new Date).getTime();
            if (!e.hasClass("elementor-element-edit-mode"))
                if ("countdown" === o) {
                    m = new Date(a), a = m.getTime();
                    var f = "expires=" + m.toUTCString();
                    document.cookie = d + "=" + m.getTime() + ";" + f + ";path=/"
                } else {
                    var u = i(s),
                        m = "";
                    if ("" !== u) {
                        (m = new Date(parseInt(u))).setSeconds(m.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), a = m.getTime();
                        var g = new Date(parseInt(u));
                        g.setTime(g.getTime() + 60 * r * 60 * 1e3);
                        var h = "expires=" + g.toUTCString();
                        document.cookie = s + "=" + u + ";" + h + ";path=/";
                        var v = new Date(parseInt(u));
                        v.setTime(v.getTime() + 1e3 * e.find(".eae-evergreen-wrapper").data("egtime"));
                        f = "expires=" + v.toUTCString();
                        a - p > 0 && (document.cookie = d + "=" + u + ";" + f + ";path=/")
                    } else {
                        temp_date = a, (m = new Date).setSeconds(m.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), a = m.getTime(), n(s, (new Date).getTime(), r);
                        var w = new Date;
                        w.setTime(w.getTime() + 1e3 * temp_date);
                        var y = "expires=" + w.toUTCString();
                        document.cookie = d + "=" + (new Date).getTime() + ";" + y + ";path=/"
                    }
                }
            if (!e.hasClass("elementor-element-edit-mode") && a - p < 0) return l.length > 0 && l.forEach((function(a) {
                "redirect" === a && ($url = e.find(".eae-evergreen-wrapper").data("redirected-url"), "" !== t.trim($url) && (window.location.href = $url1)), "hide" === a && (e.hasClass("elementor-element-edit-mode") || (e.find("#eaeclockdiv").css("display", "none"), e.find(".egt-title").css("display", "none"))), "message" === a && e.find(".eae-egt-message").css("display", "block"), "hide_parent" === a && (e.hasClass("elementor-element-edit-mode") || ($p_secs = e.closest("section"), $p_secs.css("display", "none")))
            })), days = "00", hours = "00", minutes = "00", seconds = "00", e.find("." + c).find("#eaedivDays").html(days), e.find("." + c).find("#eaedivHours").html(hours.slice(-2)), e.find("." + c).find("#eaedivMinutes").html(minutes.slice(-2)), void e.find("." + c).find("#eaedivSeconds").html(seconds.slice(-2));
            e.hasClass("elementor-element-edit-mode") && ("countdown" === o ? (m = new Date(a), a = m.getTime()) : ((m = new Date).setSeconds(m.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), a = m.getTime()));
            var b = setInterval((function() {
                var n = (new Date).getTime(),
                    i = a - n,
                    r = 0,
                    o = 0,
                    s = 0,
                    d = 0;
                i > 0 ? (r = Math.floor(i / 864e5), o = "0" + Math.floor(i % 864e5 / 36e5), s = "0" + Math.floor(i % 36e5 / 6e4), d = "0" + Math.floor(i % 6e4 / 1e3)) : (l.length > 0 && (e.hasClass("elementor-element-edit-mode") || l.forEach((function(a) {
                    "redirect" === a && ($url1 = e.find(".eae-evergreen-wrapper").data("redirected-url"), "" !== t.trim($url1) && (window.location.href = $url1)), "hide" === a && (e.find("#eaeclockdiv").css("display", "none"), e.find(".egt-title").css("display", "none")), "message" === a && e.find(".eae-egt-message").css("display", "block"), "hide_parent" === a && (e.hasClass("elementor-element-edit-mode") || ($p_secs = e.closest("section"), $p_secs.css("display", "none")))
                }))), clearInterval(b), r = "0", o = "00", s = "00", d = "00"), r < 10 && (r = "0" + r), e.find("." + c).find("#eaedivDays").html(r), e.find("." + c).find("#eaedivHours").html(o.slice(-2)), e.find("." + c).find("#eaedivMinutes").html(s.slice(-2)), e.find("." + c).find("#eaedivSeconds").html(d.slice(-2))
            }), 1e3)
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-evergreen-timer.skin2", (function(e, t) {
            var a = e.find(".eae-evergreen-wrapper").data("egtime"),
                r = e.find(".eae-evergreen-wrapper").data("egt-expire"),
                o = e.find(".eae-evergreen-wrapper").data("element-type"),
                s = "eae-" + e.find(".eae-evergreen-wrapper").data("id"),
                d = "eae-temp-" + e.find(".eae-evergreen-wrapper").data("id"),
                l = e.find(".eae-evergreen-wrapper").data("actions"),
                c = e.find(".eae-evergreen-wrapper").data("unqid"),
                p = (new Date).getTime();
            if (!e.hasClass("elementor-element-edit-mode"))
                if ("countdown" === o) {
                    m = new Date(a), a = m.getTime();
                    var f = "expires=" + m.toUTCString();
                    document.cookie = d + "=" + m.getTime() + ";" + f + ";path=/"
                } else {
                    var u = i(s),
                        m = "";
                    if ("" !== u) {
                        (m = new Date(parseInt(u))).setSeconds(m.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), a = m.getTime();
                        var g = new Date(parseInt(u));
                        g.setTime(g.getTime() + 60 * r * 60 * 1e3);
                        var h = "expires=" + g.toUTCString();
                        document.cookie = s + "=" + u + ";" + h + ";path=/";
                        var v = new Date(parseInt(u));
                        v.setTime(v.getTime() + 1e3 * e.find(".eae-evergreen-wrapper").data("egtime"));
                        f = "expires=" + v.toUTCString();
                        a - p > 0 && (document.cookie = d + "=" + u + ";" + f + ";path=/")
                    } else {
                        temp_date = a, (m = new Date).setSeconds(m.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), a = m.getTime(), n(s, (new Date).getTime(), r);
                        var w = new Date;
                        w.setTime(w.getTime() + 1e3 * temp_date);
                        var y = "expires=" + w.toUTCString();
                        document.cookie = d + "=" + (new Date).getTime() + ";" + y + ";path=/"
                    }
                }
            if (!e.hasClass("elementor-element-edit-mode") && a - p < 0) return void(l.length > 0 && l.forEach((function(a) {
                "redirect" === a && ($url = e.find(".eae-evergreen-wrapper").data("redirected-url"), "" !== t.trim($url) && (window.location.href = $url)), "hide" === a && (e.find("." + c).find(".timer-container").css("display", "none"), e.find("." + c).find(".egt-title").css("display", "none")), "message" === a && e.find("." + c).find(".eae-egt-message").css("display", "block"), "hide_parent" === a && (e.hasClass("elementor-element-edit-mode") || ($p_secs = e.closest("section"), $p_secs.css("display", "none")))
            })));
            e.hasClass("elementor-element-edit-mode") && ("countdown" === o ? (m = new Date(a), a = m.getTime()) : ((m = new Date).setSeconds(m.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), a = m.getTime()));
            var b = setInterval((function() {
                var n = (new Date).getTime(),
                    i = a - n,
                    r = Math.floor(i / 864e5),
                    o = Math.floor(i % 864e5 / 36e5),
                    s = Math.floor(i % 36e5 / 6e4),
                    d = Math.floor(i % 6e4 / 1e3);
                if (e.find("." + c).find("#eaeulSec1").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulSec1").find(".flip-clock-before").removeClass("flip-clock-before"), e.find("." + c).find("#eaeulSec").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulSec").find(".flip-clock-before").removeClass("flip-clock-before"), i < 0) return clearInterval(b), void(l.length > 0 && l.forEach((function(a) {
                    "redirect" === a && (e.hasClass("elementor-element-edit-mode") || ($url1 = e.find(".eae-evergreen-wrapper").data("redirected-url"), "" !== t.trim($url1) && (window.location.href = $url1))), "hide" === a && (e.hasClass("elementor-element-edit-mode") || (e.find("." + c).find(".timer-container").css("display", "none"), e.find("." + c).find(".egt-title").css("display", "none"))), "message" === a && (e.hasClass("elementor-element-edit-mode") || e.find("." + c).find(".eae-egt-message").css("display", "block")), "hide_parent" === a && (e.hasClass("elementor-element-edit-mode") || ($p_secs = e.closest("section"), $p_secs.css("display", "none")))
                })));
                if (2 === t.trim(d).length) {
                    var p = "#eaeulSec1 li:eq( " + t.trim(d).charAt(1) + " )",
                        f = "#eaeulSec li:eq( " + t.trim(d).charAt(0) + " )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulSec1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulSec1 li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulSec li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulSec li:first-child").addClass("flip-clock-before"))
                } else {
                    p = "#eaeulSec1 li:eq( " + t.trim(d).charAt(0) + " )", f = "#eaeulSec li:eq( 0 )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulSec1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulSec1 li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulSec li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulSec li:first-child").addClass("flip-clock-before"))
                }
                if (e.find("." + c).find("#eaeulMin1").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulMin1").find(".flip-clock-before").removeClass("flip-clock-before"), e.find("." + c).find("#eaeulMin").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulMin").find(".flip-clock-before").removeClass("flip-clock-before"), 2 == t.trim(s).length) {
                    p = "#eaeulMin1 li:eq( " + t.trim(s).charAt(1) + " )", f = "#eaeulMin li:eq( " + t.trim(s).charAt(0) + " )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulMin1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulMin1 li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulMin li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulMin li:first-child").addClass("flip-clock-before"))
                } else {
                    p = "#eaeulMin1 li:eq( " + t.trim(s).charAt(0) + " )", f = "#eaeulMin li:eq( 0 )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulMin1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulMin1 li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulMin li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulMin li:first-child").addClass("flip-clock-before"))
                }
                if (e.find("." + c).find("#eaeulHour1").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulHour1").find(".flip-clock-before").removeClass("flip-clock-before"), e.find("." + c).find("#eaeulHour").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulHour").find(".flip-clock-before").removeClass("flip-clock-before"), 2 == t.trim(o).length) {
                    p = "#eaeulHour1 li:eq( " + t.trim(o).charAt(1) + " )", f = "#eaeulHour li:eq( " + t.trim(o).charAt(0) + " )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulHour1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulHour1 li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulHour li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulHour li:first-child").addClass("flip-clock-before"))
                } else {
                    p = "#eaeulHour1 li:eq( " + t.trim(o).charAt(0) + " )", f = "#eaeulHour li:eq( 0 )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulHour1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulHour li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulHour li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulHour li:first-child").addClass("flip-clock-before"))
                }
                if (e.find("." + c).find("#eaeulDay1").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulDay1").find(".flip-clock-before").removeClass("flip-clock-before"), e.find("." + c).find("#eaeulDay").find(".flip-clock-active").removeClass("flip-clock-active"), e.find("." + c).find("#eaeulDay").find(".flip-clock-before").removeClass("flip-clock-before"), 2 == t.trim(r).length) {
                    p = "#eaeulDay1 li:eq( " + t.trim(r).charAt(1) + " )", f = "#eaeulDay li:eq( " + t.trim(r).charAt(0) + " )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulDay1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulDay1 li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulDay li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulDay li:first-child").addClass("flip-clock-before"))
                } else {
                    p = "#eaeulDay1 li:eq( " + t.trim(r).charAt(0) + " )", f = "#eaeulDay li:eq( 0 )";
                    e.find("." + c).find(p).next().length > 0 ? (e.find("." + c).find(p).addClass("flip-clock-active"), e.find("." + c).find(p).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulDay1 li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulDay li:first-child").addClass("flip-clock-before")), e.find("." + c).find(f).next().length > 0 ? (e.find("." + c).find(f).addClass("flip-clock-active"), e.find("." + c).find(f).next().addClass("flip-clock-before")) : (e.find("." + c).find("#eaeulDay li:last-child").addClass("flip-clock-active"), e.find("." + c).find("#eaeulDay li:first-child").addClass("flip-clock-before"))
                }
            }), 1e3)
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-evergreen-timer.skin3", (function(e, t) {
            var a, r = e.find(".eae-evergreen-wrapper").data("egtime"),
                o = e.find(".eae-evergreen-wrapper").data("egt-expire"),
                s = e.find(".eae-evergreen-wrapper").data("element-type"),
                d = "eae-" + e.find(".eae-evergreen-wrapper").data("id"),
                l = "eae-temp-" + e.find(".eae-evergreen-wrapper").data("id"),
                c = e.find(".eae-evergreen-wrapper").data("actions"),
                p = e.find(".eae-evergreen-wrapper").data("days"),
                f = e.find(".eae-evergreen-wrapper").data("hours"),
                u = e.find(".eae-evergreen-wrapper").data("mins"),
                m = e.find(".eae-evergreen-wrapper").data("seconds"),
                g = e.find(".eae-evergreen-wrapper").data("unqid"),
                h = (new Date).getTime();
            if (!e.hasClass("elementor-element-edit-mode"))
                if ("countdown" === s) {
                    y = new Date(r), r = y.getTime();
                    var v = "expires=" + y.toUTCString();
                    document.cookie = l + "=" + y.getTime() + ";" + v + ";path=/"
                } else {
                    var w = i(d),
                        y = "";
                    if ("" !== w) {
                        (y = new Date(parseInt(w))).setSeconds(y.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), r = y.getTime();
                        var b = new Date(parseInt(w));
                        b.setTime(b.getTime() + 60 * o * 60 * 1e3);
                        var _ = "expires=" + b.toUTCString();
                        document.cookie = d + "=" + w + ";" + _ + ";path=/";
                        var k = new Date(parseInt(w));
                        k.setTime(k.getTime() + 1e3 * e.find(".eae-evergreen-wrapper").data("egtime"));
                        v = "expires=" + k.toUTCString();
                        r - h > 0 && (document.cookie = l + "=" + w + ";" + v + ";path=/")
                    } else {
                        temp_date = r, (y = new Date).setSeconds(y.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), r = y.getTime(), n(d, (new Date).getTime(), o);
                        var C = new Date;
                        C.setTime(C.getTime() + 1e3 * temp_date);
                        var x = "expires=" + C.toUTCString();
                        document.cookie = l + "=" + (new Date).getTime() + ";" + x + ";path=/"
                    }
                }
            if (!e.hasClass("elementor-element-edit-mode")) {
                var T = D(r);
                if (parseInt(T.all) < 1) {
                    if (c.length > 0 && (c.forEach((function(t) {
                            "redirect" === t && (e.hasClass("elementor-element-edit-mode") || ($url = e.find(".eae-evergreen-wrapper").data("redirected-url"), "" !== $url && (window.location.href = $url))), "hide_parent" === t && (e.hasClass("elementor-element-edit-mode") || ($p_secs = e.closest("section"), $p_secs.css("display", "none"))), "hide" === t && (e.find("#timer").css("display", "none"), e.find(".egt-title").css("display", "none"), e.find(".desc").css("display", "none")), "message" === t && e.find(".eae-egt-message").css("display", "block")
                        })), 1 === c.length && ("" === c[0] || "message" === c[0]))) {
                        var S = e.find("." + g).find("#timer")[0];
                        "yes" === p && (S.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), "yes" === f && ("yes" === p ? t(S).append("<span class='egt-time eae-time-wrapper'><div>00</div></span>") : S.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), "yes" === u && ("yes" === p || "yes" === f ? t(S).append("<span class='egt-time eae-time-wrapper'><div>00</div></span>") : S.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), "yes" === m && ("yes" === p || "yes" === f || "yes" === u ? t(S).append("<span class='egt-time eae-time-wrapper'><div>00</div></span>") : S.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>")
                    }
                    return
                }
            }

            function D(e) {
                var t = r - new Date;
                return {
                    days: Math.floor(t / 864e5),
                    hours: "0" + Math.floor(t / 36e5 % 24),
                    minutes: "0" + Math.floor(t / 6e4 % 60),
                    seconds: "0" + Math.floor(t / 1e3 % 60),
                    all: t
                }
            }

            function E(e) {
                e.classList.add("fade"), setTimeout((function() {
                    e.classList.remove("fade")
                }), 700)
            }
            e.hasClass("elementor-element-edit-mode") && ("countdown" === s ? (y = new Date(r), r = y.getTime()) : ((y = new Date).setSeconds(y.getSeconds() + e.find(".eae-evergreen-wrapper").data("egtime")), r = y.getTime())), D(r).all > 1 && (a = setInterval((function() {
                var n = e.find("." + g).find("#timer")[0],
                    i = D(r);
                "yes" === p && (i.days < 10 && (i.days = "0" + i.days), n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>" + i.days + "</div></span>"), "yes" === f && ("yes" === p ? t(n).append("<span class='egt-time eae-time-wrapper'><div>" + i.hours.slice(-2) + "</div></span>") : n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>" + i.hours.slice(-2) + "</div></span>"), "yes" === u && ("yes" === p || "yes" === f ? t(n).append("<span class='egt-time eae-time-wrapper'><div>" + i.minutes.slice(-2) + "</div></span>") : n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>" + i.minutes.slice(-2) + "</div></span>"), "yes" === m && ("yes" === p || "yes" === f || "yes" === u ? t(n).append("<span class='egt-time eae-time-wrapper'><div>" + i.seconds.slice(-2) + "</div></span>") : n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>" + i.seconds.slice(-2) + "</div></span>");
                var o = n.getElementsByTagName("span");
                "yes" === p && 59 == i.hours && 59 == i.minutes && 59 == i.seconds && E(o[0]), "yes" === f && ("yes" === p ? 59 == i.minutes && 59 == i.seconds && E(o[1]) : 59 == i.minutes && 59 == i.seconds && E(o[0])), "yes" === u && ("yes" === p ? "yes" === f ? 59 == i.seconds && E(o[2]) : 59 == i.seconds && E(o[1]) : "yes" === f ? 59 == i.seconds && E(o[1]) : 59 == i.seconds && E(o[0])), "yes" === m && ("yes" === p ? "yes" === f ? "yes" === u && E(o[3]) : E("yes" === u ? o[2] : o[1]) : "yes" === f ? "yes" === u && E(o[2]) : E("yes" === u ? o[1] : o[0])), i.all <= 1 && (clearInterval(a), "yes" === p && (n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), "yes" === f && ("yes" === p ? t(n).append("<span class='egt-time eae-time-wrapper'><div>00</div></span>") : n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), "yes" === u && ("yes" === p || "yes" === f ? t(n).append("<span class='egt-time eae-time-wrapper'><div>00</div></span>") : n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), "yes" === m && ("yes" === p || "yes" === f || "yes" === u ? t(n).append("<span class='egt-time eae-time-wrapper'><div>00</div></span>") : n.innerHTML = "<span class='egt-time eae-time-wrapper'><div>00</div></span>"), e.hasClass("elementor-element-edit-mode") || c.length > 0 && c.forEach((function(t) {
                    "redirect" === t && ($url1 = e.find(".eae-evergreen-wrapper").data("redirected-url"), "" !== $url1 && (window.location.href = $url1)), "hide" === t && (e.find("#timer").css("display", "none"), e.find(".egt-title").css("display", "none"), e.find(".desc").css("display", "none")), "message" === t && e.find(".eae-egt-message").css("display", "block"), "hide_parent" === t && ($p_secs = e.closest("section"), $p_secs.css("display", "none"))
                })))
            }), 1e3))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-comparisontable.default", (function(e, t) {
            t(e.find(".eae-ct-heading")[0]).addClass("active"), e.find("ul").on("click", "li", (function() {
                var a = t(this).index() + 2;
                e.find("tr").find("td:not(:eq(0))").hide(), e.find("td:nth-child(" + a + ")").css("display", "table-cell"), e.find("tr").find("th:not(:eq(0))").hide(), e.find("li").removeClass("active"), t(this).addClass("active")
            }));
            var a = window.matchMedia("(min-width: 767px)");

            function n(t) {
                t.matches ? e.find(".sep").attr("colspan", 5) : e.find(".sep").attr("colspan", 2)
            }
            a.addListener(n), n(a)
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-progress-bar.skin1", r), elementorFrontend.hooks.addAction("frontend/element_ready/eae-progress-bar.skin2", r), elementorFrontend.hooks.addAction("frontend/element_ready/eae-progress-bar.skin3", r), elementorFrontend.hooks.addAction("frontend/element_ready/eae-progress-bar.skin4", r), elementorFrontend.hooks.addAction("frontend/element_ready/eae-progress-bar.skin5", r), elementorFrontend.hooks.addAction("frontend/element_ready/eae-filterableGallery.default", (function(e, t) {
            var a = e.find(".eae-fg-wrapper"),
                n = e.data("id"),
                i = a.attr("data-maxtilt"),
                r = a.attr("data-perspective"),
                o = a.attr("data-speed"),
                s = a.attr("data-tilt-axis"),
                d = a.attr("data-glare"),
                l = parseInt(a.attr("data-overlay-speed"));
            if (s = "x" === s ? "y" : "y" === s ? "x" : "both", "yes" === d) var c = a.attr("data-max-glare");
            d = "yes" === d;
            var p = t(".elementor-element-" + n + " .eae-fg-image"),
                f = a.hasClass("masonry-yes") ? "masonry" : "fitRows";
            p.outerHeight();
            adata = {
                percentPosition: !0,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }, "fitRows" === f && (adata.layoutMode = "fitRows"), "masonry" === f && (adata.masonry = {
                columnWidth: ".eae-gallery-item",
                horizontalOrder: !0
            }), e.hasClass("eae-show-all-yes") || (e.find(".eae-gallery-filter a").first().addClass("current"), adata.filter = e.find(".eae-gallery-filter a").first().attr("data-filter"));
            var u = p.isotope(adata);
            u.imagesLoaded().progress((function() {
                u.isotope("layout")
            })), e.find(".eae-tilt-yes") && (atilt = {
                maxTilt: i,
                perspective: r,
                easing: "linear",
                scale: 1,
                speed: o,
                disableAxis: s,
                transition: !0,
                reset: !0,
                glare: d,
                maxGlare: c
            }, e.find(".el-tilt").tilt(atilt)), t(".elementor-element-" + n + " .eae-gallery-filter a").on("click", (function() {
                e.find(".eae-gallery-filter .current").removeClass("current"), t(this).addClass("current");
                var a = t(this).attr("data-filter");
                adata.filter = a;
                var n = p.isotope(adata);
                return n.imagesLoaded().progress((function() {
                    if (n.isotope("layout"), isEditMode) return !1;
                    e.find(".eae-tilt-yes") && (e.find(".el-tilt").tilt(atilt), e.find(".el-tilt").tilt.reset.call(e.find(".el-tilt")))
                })), !1
            })), a.hasClass("eae-hover-direction-effect") || e.find(".eae-gallery-item-inner").hover((function() {
                t(this).find(".eae-grid-overlay").addClass("animated")
            })), a.hasClass("eae-hover-direction-effect") && (e.find(".eae-gallery-item-inner").hover((function() {
                t(this).find(".eae-grid-overlay").addClass("overlay")
            })), a.find(".eae-gallery-item-inner").EAEHoverDirection({
                speed: l
            }))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-content-switcher.skin1", o), elementorFrontend.hooks.addAction("frontend/element_ready/eae-content-switcher.skin2", o), elementorFrontend.hooks.addAction("frontend/element_ready/eae-content-switcher.skin3", s), elementorFrontend.hooks.addAction("frontend/element_ready/eae-content-switcher.skin4", s), elementorFrontend.hooks.addAction("frontend/element_ready/global", (function(e, t) {
            isEditMode || e.data("wts-url") && "yes" == e.data("wts-link") && e.on("click", (function(t) {
                e.data("wts-url") && "yes" == e.data("wts-new-window") ? window.open(e.data("wts-url")) : location.href = e.data("wts-url")
            }))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-thumbgallery.default", (function(e, t) {
            let a;
            swiper_outer_wrapper = e.find(".eae-swiper-outer-wrapper"), wid = e.data("id"), wClass = ".elementor-element-" + wid, thumb_outer_wrapper = e.find(".eae-gallery-thumbs");
            let n = swiper_outer_wrapper.data("swiper-settings"),
                i = (swiper_outer_wrapper.data("slides-per-view"), swiper_outer_wrapper.data("space"), elementorFrontend.config.responsive.activeBreakpoints);
            sliderData = {
                direction: "horizontal",
                effect: n.effect,
                keyboard: {
                    enabled: n.keyboard
                },
                speed: n.speed,
                loop: "yes" === n.loop,
                thumbs: {
                    swiper: {
                        el: wClass + " .eae-gallery-thumbs",
                        direction: "horizontal",
                        navigation: {
                            nextEl: wClass + " .eae-swiper-button-next",
                            prevEl: wClass + " .eae-swiper-button-prev"
                        },
                        speed: n.speed,
                        loop: "yes" === n.loop,
                        freeMode: !0,
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !0
                    }
                }
            };
            const r = {
                slidesPerView: "slidesPerView",
                slidesPerGroup: "slidesPerGroup",
                spaceBetween: "spaceBetween"
            };
            if (i.hasOwnProperty("mobile"))
                for (const e in r) n.hasOwnProperty(e) && (sliderData[e] = n[e].mobile), n.thumbs.hasOwnProperty(e) && (sliderData.thumbs.swiper[e] = n.thumbs[e].mobile);
            const o = {},
                s = {};
            if (n.hasOwnProperty("breakpoints_value") && Object.keys(n.breakpoints_value).map((e => {
                    const t = parseInt(n.breakpoints_value[e]);
                    if ("desktop" === e && (e = "default"), "mobile" !== e) {
                        const a = parseInt(n.spaceBetween[e]);
                        o[t - 1] = {
                            spaceBetween: a
                        };
                        const i = parseInt(n.thumbs.spaceBetween[e]),
                            r = parseInt(n.thumbs.slidesPerView[e]);
                        s[t - 1] = {
                            spaceBetween: i,
                            slidesPerView: r
                        }
                    }
                })), sliderData.breakpoints = o, sliderData.thumbs.swiper.breakpoints = s, void 0 !== n.autoplay && (sliderData.thumbs.swiper.autoplay = {
                    delay: n.autoplay.duration,
                    disableOnInteraction: n.autoplay.disableOnInteraction,
                    reverseDirection: n.autoplay.reverseDirection
                }), "yes" == n.navigation && (sliderData.navigation = {
                    nextEl: wClass + " .eae-swiper-button-next",
                    prevEl: wClass + " .eae-swiper-button-prev"
                }), "" !== n.pagination && (sliderData.pagination = {
                    type: n.pagination,
                    el: wClass + " .swiper-pagination",
                    clickable: n.clickable
                }), void 0 !== n.autoplay && (sliderData.autoplay = {
                    delay: n.autoplay.duration,
                    disableOnInteraction: n.autoplay.disableOnInteraction,
                    reverseDirection: n.autoplay.reverseDirection
                }), "undefined" == typeof Swiper) {
                new(0, elementorFrontend.utils.swiper)(jQuery(".elementor-element-" + wid + " .eae-swiper-outer-wrapper .eae-swiper-container"), sliderData).then((e => {
                    a = e
                }))
            } else window.sswiper = new Swiper(".elementor-element-" + wid + " .eae-swiper-outer-wrapper .eae-swiper-container", sliderData), t(".elementor-element-" + wid + " .eae-swiper-outer-wrapper .eae-swiper-container").css("visibility", "visible");
            if (void 0 !== n.autoplay) {
                "yes" == n.autoplay.pauseOnHover && jQuery(wClass + " .eae-swiper-container").hover((function() {
                    null != a && (a.autoplay.stop(), a.thumbs.swiper.autoplay.stop())
                }), (function() {
                    null != a && (a.autoplay.start(), a.thumbs.swiper.autoplay.start())
                }))
            }
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-chart.bar", d), elementorFrontend.hooks.addAction("frontend/element_ready/eae-chart.horizontalBar", d), elementorFrontend.hooks.addAction("frontend/element_ready/eae-chart.line", d), elementorFrontend.hooks.addAction("frontend/element_ready/eae-data-table.default", (function(e, t) {
            const a = e.find(".eae-table"),
                n = e.find(".eae-table-container");
            lottie_class = e.find(".eae-lottie"), settings = a.data("settings"), lottie_class.each((function() {
                let e = t(this).data("lottie-settings"),
                    a = lottie.loadAnimation({
                        container: document.getElementById(e.id),
                        path: e.url,
                        renderer: "svg",
                        loop: e.loop
                    });
                1 == e.reverse && a.setDirection(-1)
            })), !0 === settings.sort ? (head_class = t(".eae-table thead tr:not(:last-child)").addClass("eae-sort__ignoreRow"), a.tablesorter({
                sortReset: !1,
                sortRestart: !0
            })) : head_class = t(".eae-table thead tr:not(:last-child)").removeClass("eae-sort__ignoreRow"), settings.search && n.find("#eae-searchable").keyup((function() {
                _this = this, a.find(".eae-table__body tr").each((function() {
                    -1 === t(this).text().toLowerCase().indexOf(t(_this).val().toLowerCase()) ? t(this).addClass("eae-table-search-hide") : t(this).removeClass("eae-table-search-hide")
                }))
            }))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/CfStyler.default", (function(e, t) {
            if (e.hasClass("elementor-element-edit-mode") && t("#error-field-hidden").hasClass("validation-field-box")) {
                e.find(".wpcf7-validates-as-required").parent().append("<p class='error-field'>The field is required.</p>")
            }
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-anythingcarousel.default", (function(e, t) {
            const a = e.find(".eae-swiper-outer-wrapper"),
                n = e.data("id"),
                i = a.data("swiper-settings");
            l(i, n, e, a)
        })), elementorFrontend.hooks.addAction("frontend/element_ready/wts-content-ticker.default", (function(e) {
            let t = e.data("id"),
                a = e.find(".swiper");
            swiper_outer = e.find(".eae-content-ticker-wrapper");
            let n = swiper_outer.data("swiper"),
                i = {};
            if (i = {
                    effect: n.effect,
                    loop: n.loop,
                    speed: n.speed,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    fadeEffect: {
                        crossFade: !0
                    }
                }, null != n.autoplayDuration && (i.autoplay = {
                    delay: n.autoplayDuration,
                    disableOnInteraction: !0
                }), 0 != n.keyboardControl && (i.keyboard = {
                    enabled: !0
                }), "yes" === n.arrows && (i.navigation = {
                    nextEl: ".eae-navigation-icon-wrapper .eae-swiper-button-next",
                    prevEl: ".eae-navigation-icon-wrapper .eae-swiper-button-prev"
                }), "null" != n.direction && "slide" == n.effect && (i.direction = n.direction), "undefined" == typeof Swiper) {
                new(0, elementorFrontend.utils.swiper)(jQuery(a), i).then((e => {
                    let a = e;
                    "true" == n.pauseOnHover && jQuery(".elementor-element-" + t + " .eae-content-ticker-content-wrapper").hover((function() {
                        a.autoplay.stop()
                    }), (function() {
                        a.autoplay.start()
                    }))
                }))
            }
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-radial-charts.default", (function(e) {
            const t = e.find(".eae-radial-chart-container"),
                a = e.find(".eae-radial-chart");
            let n = t.data("chart");
            "polarArea" == n.type && "true" == n.enablePercentage && (n.options.scales.r.ticks.callback = function(e, t, a) {
                return `${e}%`
            }), a.each((function(e, t) {
                new Waypoint({
                    element: t,
                    handler: function(e) {
                        "down" == e && (t.classList.contains("trigger") || (t.classList.add("trigger"), new Chart(a, n)))
                    },
                    offset: "bottom-in-view"
                })
            }))
        })), elementorFrontend.hooks.addAction("frontend/element_ready/eae-coupon-code.default", (function(e) {
            elementorFrontend.elementsHandler.addHandler(f, {
                $element: e
            })
        }))
    }))
}(jQuery);