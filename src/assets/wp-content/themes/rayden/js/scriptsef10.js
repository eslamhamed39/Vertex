jQuery((function (e) {
    e(document).ready((function () {
        "use strict";
        !function () {
            e("#page-content").hasClass("light-content") && e(".preloader-wrap").addClass("light-content"),
            gsap.set(e(".menu-timeline .before-span"), {
                y: 120,
                opacity: 0
            }),
            e("body").removeClass("hidden").removeClass("hidden-ball"),
            gsap.to(e(".preloader-marquee-wrapper"), {
                duration: 1,
                force3D: !0,
                opacity: 1,
                y: 0,
                delay: .2,
                ease: Power3.easeOut
            }),
            gsap.to(e("#header-container"), {
                duration: .5,
                force3D: !0,
                opacity: 1,
                delay: .2,
                ease: Power2.easeOut
            });
            var o = window.performance.timing,
                t = -(o.loadEventEnd - o.navigationStart) / 100 % 500 * 10;
            e(".loadbar").animate({
                width: "0%"
            }, t),
            function (o, t, a, s) {
                var r = a - t,
                    i = t,
                    n = a > t ? 1 : -1,
                    l = Math.abs(Math.floor(s / r)),
                    d = e(o),
                    c = setInterval((function () {
                        i += n,
                        e(d).text(i),
                        i == a && clearInterval(c)
                    }), l)
            }(e("#precent"), 0, 100, t + 0),
            e("body").waitForImages({
                finished: function () {
                    window.onload = function () {
                        gsap.to(e(".trackbar, .percentage-intro, .percentage"), {
                            duration: .3,
                            force3D: !0,
                            opacity: 0,
                            y: -10,
                            ease: Power2.easeIn
                        }),
                        gsap.to(e(".preloader-wrap"), {
                            duration: 1,
                            force3D: !0,
                            yPercent: -101,
                            delay: .6,
                            ease: Power2.easeInOut,
                            onComplete: function () {
                                e(".preloader-wrap").css({visibility: "hidden", opacity: 0})
                            }
                        }),
                        gsap.to(e("#header-container"), {
                            duration: .5,
                            force3D: !0,
                            opacity: 1,
                            delay: .4,
                            ease: Power2.easeOut
                        }),
                        gsap.to(e("#main"), {
                            duration: 0,
                            opacity: 1,
                            ease: Power2.easeOut
                        }),
                        gsap.to(e("#main-page-content"), {
                            duration: .7,
                            opacity: 1,
                            delay: .3,
                            ease: Power2.easeOut
                        }),
                        gsap.to(e("#showcase-slider-webgl-holder"), {
                            duration: .7,
                            opacity: 1,
                            delay: .6,
                            ease: Power2.easeOut
                        }),
                        gsap.to(e("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), {
                            duration: 1,
                            force3D: !0,
                            y: 0,
                            opacity: 1,
                            delay: .6,
                            ease: Power2.easeOut
                        }),
                        gsap.to(e("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"), {
                            duration: 1,
                            force3D: !0,
                            y: 0,
                            opacity: 1,
                            delay: 1,
                            ease: Power2.easeOut
                        }),
                        setTimeout((function () {
                            e("#showcase-slider-webgl-holder").addClass("loaded"),
                            e("body").addClass("header-visible").removeClass("show-loader")
                        }), 1500)
                    }
                },
                waitForAll: !0
            })
        }(),
        function () {
            e("#page-content").hasClass("light-content") && e(".preloader-wrap").addClass("light-content"),
            e(".site-header-cart.menu").length > 0 && e("#open-sidebar-nav").addClass("filters-responsive-shop"),
            gsap.set(e(".menu-timeline .before-span"), {
                y: 120,
                opacity: 0
            }),
            e(".preloader-wrap").on("mouseenter", (function () {
                var o = e(this);
                gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "2px",
                    scale: 1.2,
                    borderColor: e("body").data("primary-color"),
                    backgroundColor: e("body").data("primary-color")
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "2px",
                    top: 2,
                    left: 2
                }),
                e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
            })),
            e(".preloader-wrap").on("mouseleave", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999",
                    backgroundColor: "transparent"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                }),
                e("#ball p").remove()
            })),
            e("body").removeClass("hidden").removeClass("hidden-ball"),
            gsap.to(e(".preloader-marquee-wrapper"), {
                duration: 1,
                force3D: !0,
                opacity: 1,
                y: 0,
                delay: .2,
                ease: Power3.easeOut
            }),
            gsap.to(e("#header-container"), {
                duration: .5,
                force3D: !0,
                opacity: 1,
                delay: .2,
                ease: Power2.easeOut
            });
            var o = window.performance.timing,
                t = -(o.loadEventEnd - o.navigationStart) / 100 % 500 * 10;
            e(".loadbar").animate({
                width: "0%"
            }, t),
            function (o, t, a, s) {
                var r = a - t,
                    i = t,
                    n = a > t ? 1 : -1,
                    l = Math.abs(Math.floor(s / r)),
                    d = e(o),
                    c = setInterval((function () {
                        i += n,
                        e(d).text(i),
                        i == a && clearInterval(c)
                    }), l)
            }(e("#precent"), 0, 100, t + 0),
            setTimeout((function () {
                e(".loadbar").append('<span class="hold-progress-bar"></span>'),
                gsap.to(e(".hold-progress-bar"), {
                    duration: .3,
                    force3D: !0,
                    width: "100%",
                    delay: 0,
                    ease: Power2.easeOut,
                    onComplete: function () {
                        e("body").waitForImages({
                            finished: function () {
                                gsap.to("#ball", {
                                    duration: .2,
                                    borderWidth: "4px",
                                    scale: .5,
                                    borderColor: "#999999",
                                    backgroundColor: "transparent"
                                }),
                                gsap.to("#ball-loader", {
                                    duration: .2,
                                    borderWidth: "4px",
                                    top: 0,
                                    left: 0
                                }),
                                e("#ball p").remove(),
                                gsap.to(e(" .trackbar, .percentage-intro, .percentage"), {
                                    duration: .3,
                                    force3D: !0,
                                    opacity: 0,
                                    y: -10,
                                    delay: 0,
                                    ease: Power2.easeIn
                                }),
                                gsap.to(e(".preloader-wrap"), {
                                    duration: 1,
                                    force3D: !0,
                                    yPercent: -101,
                                    delay: .6,
                                    ease: Power2.easeInOut
                                }),
                                gsap.set(e(".preloader-wrap"), {
                                    visibility: "hidden",
                                    delay: 1.7,
                                    opacity: 0
                                }),
                                gsap.to(e("#header-container"), {
                                    duration: .5,
                                    force3D: !0,
                                    opacity: 1,
                                    delay: 1.4,
                                    ease: Power2.easeOut
                                }),
                                setTimeout((function () {
                                    if (e("body").waitForImages({
                                        finished: function () {
                                            gsap.to(e(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), {
                                                duration: 1,
                                                force3D: !0,
                                                opacity: 1,
                                                delay: 0,
                                                ease: Power2.easeOut
                                            })
                                        },
                                        waitForAll: !0
                                    }), e(".hero-video-wrapper").length > 0 && e("#hero-image-wrapper").find("video").each((function () {
                                        e(this).get(0).play()
                                    })), gsap.to(e("#main"), {
                                        duration: 0,
                                        opacity: 1,
                                        delay: 0,
                                        ease: Power2.easeOut
                                    }), e("#hero").hasClass("has-image")) 
                                        gsap.to(e("#hero-bg-image, #hero-fg-image"), {
                                            duration: 1,
                                            force3D: !0,
                                            scale: 1,
                                            opacity: 1,
                                            delay: .2,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".hero-title span"), {
                                            duration: 1,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: .6,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".hero-subtitle span"), {
                                            duration: 1,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: .8,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".hero-footer-left"), {
                                            duration: 1,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: 1.1,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".hero-footer-right"), {
                                            duration: 1,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: 1.2,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".scroll-down-wrap"), {
                                            duration: 1,
                                            force3D: !0,
                                            scale: 1,
                                            opacity: 1,
                                            delay: 1.2,
                                            ease: Elastic.easeOut
                                        }),
                                        gsap.to(e("#main-page-content"), {
                                            duration: .4,
                                            opacity: 1,
                                            delay: 1.15,
                                            ease: Power2.easeOut
                                        });
                                     else {
                                        var o = gsap.timeline();
                                        o.set(e("#hero .hero-title span"), {
                                            y: 120,
                                            opacity: 0
                                        }),
                                        e("#hero .hero-title span").each((function (e, t) {
                                            o.to(t, {
                                                duration: .7,
                                                y: 0,
                                                opacity: 1,
                                                delay: .6,
                                                ease: Power3.easeOut
                                            }, .05 * e)
                                        })),
                                        gsap.to(e(".hero-subtitle span"), {
                                            duration: .4,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: .8,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".hero-footer-left"), {
                                            duration: .7,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: 1,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".hero-footer-right"), {
                                            duration: .7,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: 1.1,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e("#main-page-content"), {
                                            duration: .7,
                                            opacity: 1,
                                            delay: 1.3,
                                            ease: Power2.easeOut
                                        }),
                                        gsap.to(e(".error-button"), {
                                            duration: .4,
                                            y: 0,
                                            opacity: 1,
                                            rotation: 0,
                                            delay: 1,
                                            ease: Power2.easeOut
                                        })
                                    }
                                    gsap.set(e("#showcase-slider-holder"), {opacity: 0}),
                                    gsap.set(e("#showcase-slider-webgl-holder, #showcase-carousel-holder, #vp-portfolio-wrapper"), {opacity: 0}),
                                    gsap.set(e(".swiper-prev, .swiper-next, .swiper-pagination-bullet, .arrows-wrap, .carousel-allprojects-wrapper"), {opacity: 0}),
                                    gsap.to(e("#showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, #vp-portfolio-wrapper"), {
                                        duration: .7,
                                        opacity: 1,
                                        delay: .6,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e("#showcase-slider-holder .swiper-slide .slide-title span"), {
                                        duration: 1,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: .8,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e("#showcase-slider-holder .swiper-slide .subtitle span"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: 1.2,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.set(e("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), {
                                        y: 160,
                                        opacity: 0
                                    }),
                                    gsap.set(e("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"), {
                                        y: 30,
                                        opacity: 0
                                    }),
                                    gsap.to(e("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), {
                                        duration: 1,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: .6,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"), {
                                        duration: 1,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: 1,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e("#showcase-slider-webgl-holder .swiper-slide .slide-title span"), {
                                        duration: .5,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: 1,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e("#showcase-slider-webgl-holder .swiper-slide .subtitle span"), {
                                        duration: .5,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: 1,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e(".swiper-prev"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        rotation: 0,
                                        delay: 1.2,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e(".swiper-pagination-bullet, .arrows-wrap, .carousel-allprojects-wrapper"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        rotation: 0,
                                        delay: 1,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e(".swiper-next"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        rotation: 0,
                                        delay: 1.2,
                                        ease: Power2.easeOut
                                    }),
                                    setTimeout((function () {
                                        e("#showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, .showcase-list-holder").addClass("loaded")
                                    }), 1500);
                                    var t = gsap.timeline();
                                    if (e(".slide-small-title span").each((function (e, o) {
                                        t.to(o, {
                                            duration: .5,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            delay: 1,
                                            ease: Power2.easeOut
                                        }, .05 * e)
                                    })), e("#showcase-carousel-holder").hasClass("columns-carousel")) 
                                        gsap.set(e("#showcase-carousel-holder #showcase-slider .swiper-slide"), {
                                            x: 0,
                                            scale: .9,
                                            opacity: 0
                                        }),
                                        gsap.to(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active"), {
                                            duration: 1,
                                            force3D: !0,
                                            x: 0,
                                            scale: 1,
                                            delay: .7,
                                            opacity: 1,
                                            ease: Power3.easeOut
                                        }),
                                        gsap.to(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), {
                                            duration: 1,
                                            force3D: !0,
                                            x: 0,
                                            scale: 1,
                                            delay: .6,
                                            opacity: 1,
                                            ease: Power3.easeOut
                                        }),
                                        gsap.to(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next().next(), {
                                            duration: 1,
                                            force3D: !0,
                                            x: 0,
                                            scale: 1,
                                            delay: .7,
                                            opacity: 1,
                                            ease: Power3.easeOut
                                        }),
                                        gsap.set(e("#showcase-carousel-holder #showcase-slider .swiper-slide"), {
                                            x: 0,
                                            scale: 1,
                                            delay: 1.8,
                                            opacity: 1
                                        }),
                                        gsap.to(e("#showcase-carousel-holder.columns-carousel .swiper-slide .slide-title span"), {
                                            duration: .5,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            delay: .8,
                                            ease: Power2.easeOut
                                        });
                                     else {
                                        var a = e("#showcase-carousel-holder #showcase-slider .swiper-slide").width();
                                        gsap.set(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active").prev(), {
                                            x: a,
                                            scale: .8,
                                            opacity: 0
                                        }),
                                        gsap.set(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), {
                                            x: - a,
                                            scale: .8,
                                            opacity: 0
                                        }),
                                        gsap.to(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active").prev(), {
                                            duration: 2,
                                            force3D: !0,
                                            x: 0,
                                            scale: 1,
                                            delay: .2,
                                            opacity: 1,
                                            ease: Power3.easeInOut
                                        }),
                                        gsap.to(e("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), {
                                            duration: 2,
                                            force3D: !0,
                                            x: 0,
                                            scale: 1,
                                            delay: .2,
                                            opacity: 1,
                                            ease: Power3.easeInOut
                                        })
                                    }
                                    gsap.to(e(".showcase-list-intro span, .split-slider-intro span"), {
                                        duration: 1,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        rotation: 0,
                                        delay: .3,
                                        ease: Power2.easeOut
                                    });
                                    var s = gsap.timeline();
                                    e(".sl-title span, .split-title span").each((function (e, o) {
                                        s.to(o, {
                                            duration: .7,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            delay: .5,
                                            ease: Power2.easeOut
                                        }, .05 * e)
                                    }));
                                    var r = gsap.timeline();
                                    e(".sl-subtitle span, .split-subtitle span").each((function (e, o) {
                                        r.to(o, {
                                            duration: .7,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            delay: .6,
                                            ease: Power2.easeOut
                                        }, .05 * e)
                                    })),
                                    gsap.set(e(".intro-timeline"), {
                                        opacity: 0,
                                        y: 30
                                    });
                                    var i = gsap.timeline();
                                    e(".intro-timeline").each((function (e, o) {
                                        i.to(o, {
                                            duration: .5,
                                            force3D: !0,
                                            y: 0,
                                            opacity: 1,
                                            delay: .65,
                                            ease: Power2.easeOut
                                        }, .05 * e)
                                    })),
                                    TweenMax.to(e("#blog-content"), {
                                        duration: .4,
                                        opacity: 1,
                                        y: 0,
                                        delay: 1.05,
                                        ease: Power2.easeOut
                                    }),
                                    TweenMax.to(e(".post-article-wrap"), {
                                        duration: .4,
                                        y: 0,
                                        opacity: 1,
                                        delay: .7,
                                        ease: Power2.easeOut
                                    }),
                                    TweenMax.to(e("#post-content, #post .post-image, .post-meta-data, .post-navigation, .post-comments, .post-form"), {
                                        duration: .4,
                                        opacity: 1,
                                        y: 0,
                                        delay: .75,
                                        ease: Power2.easeOut
                                    }),
                                    TweenMax.to(e("#blog-navigation, #sidebar"), {
                                        duration: 1,
                                        opacity: 1,
                                        ease: Power2.easeOut
                                    }),
                                    gsap.to(e(".woocommerce-result-count, .woocommerce-ordering, ul.products"), {
                                        duration: .4,
                                        y: 0,
                                        opacity: 1,
                                        rotation: 0,
                                        delay: 1,
                                        ease: Power2.easeOut
                                    }),
                                    setTimeout((function () {
                                        e("body").removeClass("load-project-page").removeClass("load-project-page-carousel")
                                    }), 600),
                                    setTimeout((function () {
                                        e("body").removeClass("load-next-project"),
                                        e("body").addClass("header-visible"),
                                        e("#showcase-holder").removeClass("disabled")
                                    }), 1600),
                                    setTimeout((function () {
                                        e("body").removeClass("show-loader")
                                    }), 800)
                                }), 600)
                            },
                            waitForAll: !0
                        })
                    }
                })
            }), t)
        }(),
        function () {
            if (gsap.defaults({overwrite: "auto"}), gsap.config({
                nullTargetWarn: !1
            }), gsap.registerPlugin(ScrollToPlugin), gsap.registerPlugin(Draggable), gsap.registerPlugin(EasePack), gsap.registerPlugin(CSSRulePlugin), gsap.registerPlugin(ScrollMagic), setTimeout((function () {
                var o = document.getElementById("app");
                o.className += "active",
                e("body").append(o)
            }), 1500), e("#showcase-slider-webgl-holder").length > 0 && setTimeout((function () {
                var o = document.getElementById("canvas-slider");
                o.className += " active",
                e("body").append(o)
            }), 1500), e(window).width() < 1025) {
                var o,
                    t = e(window).height(),
                    a = e("footer").height();
                function s() {
                    var o = e(window).height(),
                        t = e("footer").height();
                    e("nav, #canvas-slider, #showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, #slider-webgl .swiper-slide, .vp-portfolio-images .vp-slide, .vp-img, #hero.has-image, #hero.has-image #hero-styles, #hero-image-wrapper, #project-nav").css({height: o}),
                    e("#main-page-content.project-page").css({
                        "margin-bottom": o - t
                    }),
                    e(".icon-wrap").removeClass("parallax-wrap")
                }
                e("nav, #canvas-slider, #showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, #slider-webgl .swiper-slide, .vp-portfolio-images .vp-slide, .vp-img, #hero.has-image, #hero.has-image #hero-styles, #hero-image-wrapper, #project-nav").css({height: t}),
                e("#main-page-content.project-page").css({
                    "margin-bottom": t - a
                }),
                e("#project-nav").css({
                    bottom: - t
                }),
                e(".icon-wrap").removeClass("parallax-wrap"),
                e(window).resize((function () {
                    clearTimeout(o),
                    o = setTimeout(s, 100)
                }))
            }
            if (e("body").hasClass("smooth-scroll")) {
                const o = document.querySelector("#content-scroll");
                var s = window.Scrollbar,
                    r = this && this.__extends || (l = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, o) {
                        e.__proto__ = o
                    } || function (e, o) {
                        for (var t in o) 
                            o.hasOwnProperty(t) && (e[t] = o[t])
                        
                    },
                    function (e, o) {
                        function t() {
                            this.constructor = e
                        }
                        l(e, o),
                        e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
                    }),
                    n = function (e) {
                        function o() {
                            var o = null !== e && e.apply(this, arguments) || this;
                            return o._remainMomentum = {
                                x: 0,
                                y: 0
                            },
                            o
                        }
                        return r(o, e),
                        o.prototype.transformDelta = function (e) {
                            var o = this.scrollbar,
                                t = o.limit,
                                a = o.offset,
                                s = this._remainMomentum.x + e.x,
                                r = this._remainMomentum.y + e.y;
                            return this.scrollbar.setMomentum(Math.max(- a.x, Math.min(s, t.x - a.x)), Math.max(- a.y, Math.min(r, t.y - a.y))), {
                                x: 0,
                                y: 0
                            }
                        },
                        o.prototype.onRender = function (e) {
                            Object.assign(this._remainMomentum, e)
                        },
                        o.pluginName = "edgeEasing",
                        o
                    }(Scrollbar.ScrollbarPlugin);
                Scrollbar.use(n),
                s = Scrollbar.init(o, {
                    damping: .1,
                    renderByPixel: !0,
                    continuousScrolling: !0,
                    syncCallbacks: !0
                }),
                e(window).width() > 1024 && e("body").hasClass("drag-scroll") && setTimeout((function () {
                    var o = s.getSize().content,
                        t = s.getSize().container,
                        a = Draggable.create(".scroll-content", {
                            type: "y",
                            bounds: {
                                minX: 0,
                                maxX: 0,
                                minY: 0,
                                maxY: t.height - o.height
                            },
                            autoScroll: 2,
                            dragResistance: -2,
                            edgeResistance: 1,
                            onPress: function (o) {
                                return window.innerWidth <= 1024 || 2 == o.button || null != o.target && e(o.target).parents(".disable-drag").length ? (o.dragCancelled =! 0, void this.endDrag(o)) : (e("body").addClass("scale-up"), void gsap.to("#ball", {
                                    duration: .2,
                                    borderWidth: "2px",
                                    borderColor: "#999",
                                    scale: 1
                                }))
                            },
                            onClick: function () {},
                            onDragStart: function () {
                                this.minY != - s.limit.y && (s.getSize().content, s.getSize().container, this.applyBounds({
                                    minX: 0,
                                    maxX: 0,
                                    minY: 0,
                                    maxY: - s.limit.y
                                }))
                            },
                            onDrag: function () {
                                gsap.to(s, {
                                    duration: 1,
                                    scrollTo: -this.y,
                                    ease: Power4.easeOut
                                })
                            },
                            onDragEnd: function (e) {
                                e.dragCancelled || document.getElementById("content-scroll").addEventListener("wheel", (function () {
                                    gsap.set(s, {
                                        scrollTo: -this.y
                                    })
                                }))
                            },
                            onRelease: function (o) {
                                o.dragCancelled || (e("body").removeClass("scale-up"), gsap.to("#ball", {
                                    duration: 1,
                                    borderWidth: "4px",
                                    scale: .5,
                                    borderColor: "#999999",
                                    ease: Elastic.easeOut
                                }))
                            }
                        });
                    s.addListener((function (e) {
                        gsap.set(a[0].target, {
                            x: 0,
                            y: - s.scrollTop
                        })
                    }))
                }), 1e3)
            }
            var l;
            e("#hero.has-image").hasClass("autoscroll") && (e("body").hasClass("smooth-scroll") ? gsap.to(s, {
                duration: 1.5,
                scrollTo: 120,
                delay: .7,
                ease: Power4.easeInOut
            }) : gsap.to(window, {
                duration: 1.5,
                scrollTo: 120,
                delay: .7,
                ease: Power4.easeInOut
            })),
            e(".autocenter").on("click", (function () {
                var o = e(window),
                    t = e(this),
                    a = t.offset().top,
                    r = t.height(),
                    i = a - (o.height() - r) / 2;
                if (e("body").hasClass("smooth-scroll")) {
                    var n = s.offset.y + (a - s.getSize().container.height / 2);
                    gsap.to(s, {
                        duration: .8,
                        scrollTo: n + r / 2,
                        ease: Power4.easeInOut
                    })
                } else 
                    e("html, body").animate({
                        scrollTop: i
                    }, 350)
                
            })),
            e("#backtotop").on("click", (function () {
                e("body").hasClass("smooth-scroll") ? (gsap.to(s, {
                    duration: 1.5,
                    scrollTop: 0,
                    delay: .1,
                    ease: Power4.easeInOut
                }), gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999",
                    delay: .15
                })) : (e("html,body").animate({
                    scrollTop: 0
                }, 800), gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999",
                    delay: .15
                }))
            })),
            e(".scroll-down").on("click", (function () {
                var o = e("#hero").height();
                e("body").hasClass("smooth-scroll") ? (gsap.to(s, {
                    duration: 1.5,
                    scrollTop: o,
                    ease: Power4.easeInOut
                }), gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999",
                    delay: .15
                })) : (e("html,body").animate({
                    scrollTop: o
                }, 800), gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999",
                    delay: .15
                }))
            }));
            var d = gsap.to(".parallax-scroll-effect", {
                    duration: 1,
                    top: "5%",
                    scale: 1.1,
                    opacity: 1,
                    ease: Linear.easeNone
                }),
                c = gsap.to("#hero-caption.parallax-onscroll", {
                    duration: .5,
                    yPercent: 10,
                    opacity: 0,
                    ease: Linear.easeNone
                }),
                p = gsap.to("#hero-caption.reverse-parallax-onscroll", {
                    duration: .5,
                    yPercent: 10,
                    opacity: .5,
                    ease: Linear.easeNone
                }),
                u = gsap.to("#hero-footer", {
                    duration: .5,
                    yPercent: 15,
                    opacity: 0,
                    ease: Linear.easeNone
                }),
                h = gsap.to(".next-project-image", {
                    duration: 1,
                    top: "0",
                    scale: 1,
                    opacity: .8,
                    ease: Linear.easeNone
                }),
                g = gsap.to(".next-project-wrap", {
                    duration: .5,
                    top: "0",
                    scale: 1,
                    opacity: 1,
                    ease: Linear.easeNone
                }),
                f = gsap.to(".next-page-title", {
                    duration: .5,
                    top: "2",
                    scale: 1,
                    opacity: 1,
                    ease: Linear.easeNone
                }),
                m = new ScrollMagic.Controller,
                v = new ScrollMagic.Scene({triggerElement: "#hero", triggerHook: 0, duration: "120%"}).setTween(d).addTo(m),
                w = new ScrollMagic.Scene({triggerElement: "#hero", triggerHook: 0, duration: "50%"}).setTween(c).addTo(m),
                b = new ScrollMagic.Scene({triggerElement: "#hero", triggerHook: 0, duration: "100%"}).setTween(p).addTo(m),
                y = new ScrollMagic.Scene({triggerElement: "#hero", triggerHook: 0, duration: "30%"}).setTween(u).addTo(m),
                C = new ScrollMagic.Scene({triggerElement: "#project-nav", triggerHook: 1, duration: "100%"}).setTween(h).addTo(m),
                x = new ScrollMagic.Scene({triggerElement: "#project-nav", triggerHook: 1, duration: "99%"}).setTween(g).addTo(m),
                k = e("#page-nav").outerHeight() + e("footer").outerHeight(),
                O = new ScrollMagic.Scene({triggerElement: "#page-nav", triggerHook: 1, duration: k}).setTween(f).addTo(m);
            e("body").hasClass("smooth-scroll") && s.addListener((() => {
                v.refresh(),
                w.refresh(),
                b.refresh(),
                y.refresh(),
                C.refresh(),
                x.refresh(),
                O.refresh()
            })),
            e(".has-parallax").each((function () {
                var o = e(this),
                    t = 2 * window.innerHeight,
                    a = o.find("img"),
                    r = gsap.fromTo(a, {
                        y: "-20%"
                    }, {
                        duration: 1,
                        y: "20%",
                        ease: Linear.easeNone
                    }),
                    i = new ScrollMagic.Scene({triggerElement: this, triggerHook: 1, duration: t}).setTween(r).addTo(m);
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    i.refresh()
                }))
            })),
            e(".has-animation").each((function () {
                var o = e(this),
                    t = e(this).height(),
                    a = new ScrollMagic.Scene({triggerElement: o[0], duration: t}).addTo(m);
                a.triggerHook(1),
                a.on("enter", (function () {
                    o.delay(o.attr("data-delay")).queue((function (e) {
                        gsap.to(o, {
                            duration: .6,
                            force3D: !0,
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            delay: 0,
                            ease: Power2.easeOut
                        }),
                        e(),
                        o.addClass("animated")
                    }))
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    a.refresh()
                }))
            })),
            e("body").find(".has-scale").each((function (o) {
                e(this).wrap("<div class='figure-wrapper'></div>")
            })),
            e(".has-mask").each((function () {
                var o = e(this).text().split(" "),
                    t = o.length;
                for (e(this).empty(), index = 0; index < t; index ++) 
                    e(this).append(e("<span /> ").text(o[index]))
                
            })),
            e(".has-mask span").each((function () {
                var o = e(this).text().split(" "),
                    t = o.length;
                for (e(this).empty(), index = 0; index < t; index ++) 
                    e(this).append(e("<span /> ").text(o[index]))
                
            })),
            e(".has-mask").each((function () {
                var o = e(this),
                    t = e(this).height(),
                    a = new ScrollMagic.Scene({triggerElement: o[0], duration: t}).addTo(m);
                a.triggerHook(1),
                a.on("enter", (function () {
                    o.delay(o.attr("data-delay")).queue((function (e) {
                        var t = gsap.timeline();
                        o.find("span > span").each((function (e, o) {
                            t.to(o, .6, {
                                y: 0,
                                opacity: 1,
                                delay: .1,
                                ease: Power2.easeOut
                            }, 0 * e)
                        })),
                        e()
                    }))
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    a.refresh()
                }))
            })),
            e(".white-section").each((function (o) {
                e(this).hasClass("large") ? e(this).wrap("<div class='white-section-wrapper large'><div class='white-section-container'></div></div>") : e(this).wrap("<div class='white-section-wrapper'><div class='white-section-container'></div></div>"),
                e("body").find(".white-section-wrapper").each((function (o) {
                    e(this).css("background-color", (function () {
                        return e(this).children().children().data("bgcolor")
                    }))
                }))
            })),
            e(".half-white-section").each((function (o) {
                e(this).wrap("<div class='half-white-section-wrapper section-wrapper'></div>"),
                e(this).hasClass("first") ? e(this).parent(".half-white-section-wrapper").addClass("first") : e(this).hasClass("second") && e(this).parent(".half-white-section-wrapper").addClass("second"),
                e("body").find(".half-white-section-wrapper").each((function (o) {
                    e(this).css("background-color", (function () {
                        return e(this).children().data("bgcolor")
                    }))
                }))
            })),
            e(".dark-section").each((function (o) {
                e(this).hasClass("large") ? e(this).wrap("<div class='dark-section-wrapper large'><div class='dark-section-container'></div></div>") : e(this).wrap("<div class='dark-section-wrapper'><div class='dark-section-container'></div></div>"),
                e("body").find(".dark-section-wrapper").each((function (o) {
                    e(this).css("background-color", (function () {
                        return e(this).children().children().data("bgcolor")
                    }))
                }))
            })),
            e(".half-dark-section").each((function (o) {
                e(this).wrap("<div class='half-dark-section-wrapper section-wrapper'></div>"),
                e(this).hasClass("first") ? e(this).parent(".half-dark-section-wrapper").addClass("first") : e(this).hasClass("second") && e(this).parent(".half-dark-section-wrapper").addClass("second"),
                e("body").find(".half-dark-section-wrapper").each((function (o) {
                    e(this).css("background-color", (function () {
                        return e(this).children().data("bgcolor")
                    }))
                }))
            })),
            e("#page-content").hasClass("dark-content") || e("#project-nav.change-header").each((function () {
                const o = e("#page-content");
                e(this);
                var t = e(this).outerHeight(!0),
                    a = new ScrollMagic.Scene({triggerElement: this, duration: t}).addTo(m);
                a.triggerHook(.08),
                a.on("enter", (function () {
                    o.removeClass("light-content")
                })),
                a.on("leave", (function () {
                    o.addClass("light-content")
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    a.refresh()
                }))
            })),
            e("#page-content").hasClass("light-content") || e("#project-nav").hasClass("change-header") || e("#project-nav").each((function () {
                const o = e("#page-content");
                e(this);
                var t = e(this).outerHeight(!0),
                    a = new ScrollMagic.Scene({triggerElement: this, duration: t}).addTo(m);
                a.triggerHook(.08),
                a.on("enter", (function () {
                    o.addClass("light-content")
                })),
                a.on("leave", (function () {
                    o.removeClass("light-content")
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    a.refresh()
                }))
            })),
            e(".change-header-color").length > 0 && e("body").waitForImages({
                finished: function () {
                    e(".change-header-color").each((function () {
                        const o = e("header");
                        e(this);
                        var t = e(this).outerHeight(!0),
                            a = new ScrollMagic.Scene({triggerElement: this, duration: t}).addTo(m);
                        a.triggerHook(.08),
                        a.on("enter", (function () {
                            setTimeout((function () {
                                o.addClass("white-header")
                            }), 10)
                        })),
                        a.on("leave", (function () {
                            o.removeClass("white-header")
                        })),
                        e("body").hasClass("smooth-scroll") && s.addListener((() => {
                            a.refresh()
                        }))
                    }))
                },
                waitForAll: !0
            }),
            e("header").removeClass("white-header");
            var T = window.innerHeight;
            e(".portfolio .item").each((function () {
                var o = e(this),
                    t = e(this).height(),
                    a = new ScrollMagic.Scene({triggerElement: o[0], duration: t}).addTo(m);
                a.triggerHook(.9),
                a.on("enter", (function () {
                    o.addClass("active")
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    a.refresh()
                }))
            })),
            e(".item").each((function () {
                var o = e(this),
                    t = e(this).height() + T,
                    a = o.find(".item-parallax.enabled"),
                    r = gsap.fromTo(a, {
                        y: "20%"
                    }, {
                        duration: 1,
                        y: "-20%",
                        ease: Linear.easeNone
                    }),
                    i = new ScrollMagic.Scene({triggerElement: this, triggerHook: 1, duration: t}).setTween(r).addTo(m);
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    i.refresh()
                }))
            })),
            e(".sided-grid .item").each((function () {
                var o = e(this),
                    t = e(this).height() + T,
                    a = o.find(".item-caption-wrapper"),
                    r = gsap.fromTo(a, {
                        y: "40%"
                    }, {
                        duration: 1,
                        y: "-40%",
                        ease: Linear.easeNone
                    }),
                    i = new ScrollMagic.Scene({triggerElement: this, triggerHook: 1, duration: t}).setTween(r).addTo(m);
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    i.refresh()
                }))
            })),
            e(".woocommerce ul.products li.product").each((function () {
                var o = e(this),
                    t = e(this).height(),
                    a = new ScrollMagic.Scene({triggerElement: o[0], duration: t}).addTo(m);
                a.triggerHook(.9),
                a.on("enter", (function () {
                    o.addClass("active")
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    a.refresh()
                }))
            })),
            e(".content-carousel").each((function () {
                var o = e(this),
                    t = e(this).outerHeight(!0),
                    a = gsap.timeline();
                a.set(e(".content-carousel .swiper-slide"), {
                    x: 800,
                    opacity: 0
                });
                var r = new ScrollMagic.Scene({triggerElement: this, duration: t}).addTo(m);
                r.triggerHook(1),
                r.on("enter", (function () {
                    o.find(".swiper-slide").each((function (e, o) {
                        a.to(o, 1.4, {
                            x: 0,
                            opacity: 1,
                            delay: .1,
                            ease: Power3.easeOut
                        }, .1 * e)
                    }))
                })),
                e("body").hasClass("smooth-scroll") && s.addListener((() => {
                    r.refresh()
                }))
            })),
            e("#vp-portfolio-wrapper").length > 0 && e("body").waitForImages({
                finished: function () {
                    var o = e(".vp-portfolio-images .vp-slide").length;
                    for (i = 0; i < o; i ++) 
                        e(".vp-portfolio-images .vp-slide").eq(i).css("z-index", o - i);
                    
                    if (e("body").hasClass("smooth-scroll")) {
                        var t = document.getElementById("fixed"),
                            a = document.getElementById("fixed-borders"),
                            r = e("#hero").outerHeight(),
                            n = window.innerHeight / 2 - e("#hero").outerHeight();
                        gsap.set(t, {
                            y: - r
                        }),
                        gsap.set(a, {y: n}),
                        s.addListener((function (e) {
                            var o = e.offset;
                            t.style.top = o.y + "px",
                            t.style.left = o.x + "px",
                            a.style.top = o.y + "px",
                            a.style.left = o.x + "px"
                        }))
                    } else {
                        var l = e(".vp-portfolio-captions").outerHeight() - window.innerHeight;
                        new ScrollMagic.Scene({triggerElement: "#vp-portfolio-wrapper", duration: l, triggerHook: 0}).setPin("#fixed").addTo(m)
                    } e("#vp-portfolio").each((function () {
                        var o = e(this),
                            t = e(".vp-portfolio-captions").outerHeight() - window.innerHeight + e(".vp-portfolio-captions .vp-slide").outerHeight(),
                            a = (e(".vp-portfolio-images .vp-slide").outerHeight(), o.find(".vp-portfolio-images"), e(".vp-portfolio-images .vp-slide")),
                            r = gsap.timeline();
                        a.each((function () {
                            r.add(gsap.to(e(this), {
                                duration: 10,
                                scale: 1.1,
                                opacity: 0,
                                ease: Power2.easeInOut
                            }))
                        }));
                        var i = new ScrollMagic.Scene({triggerElement: this, triggerHook: 0, duration: t}).setTween(r).addTo(m);
                        e("body").hasClass("smooth-scroll") && s.addListener((() => {
                            i.refresh()
                        }))
                    })),
                    e(".vp-portfolio-captions").each((function () {
                        var o = e(this),
                            t = e(this).height() - window.innerHeight,
                            a = e(this).height() - window.innerHeight,
                            r = new ScrollMagic.Scene({triggerElement: o[0], duration: t}).addTo(m);
                        r.triggerHook(0),
                        r.on("enter", (function () {
                            o.removeClass("not-in-view"),
                            e(".vp-portfolio-images").removeClass("not-in-view")
                        })),
                        r.on("leave", (function () {
                            o.addClass("not-in-view"),
                            e(".vp-portfolio-images").addClass("not-in-view")
                        }));
                        var i = new ScrollMagic.Scene({triggerElement: o[0], duration: a}).addTo(m);
                        i.triggerHook(.05),
                        i.on("enter", (function () {
                            e("#fixed-borders").addClass("view-borders")
                        })),
                        i.on("leave", (function () {
                            e("#fixed-borders").removeClass("view-borders")
                        })),
                        e("body").hasClass("smooth-scroll") && s.addListener((() => {
                            r.refresh(),
                            i.refresh()
                        }))
                    })),
                    e(".vp-portfolio-captions .vp-slide").each((function () {
                        var o = e(this),
                            t = e(this).height(),
                            a = e(".vp-portfolio-captions").width() / 2 - 120,
                            r = new ScrollMagic.Scene({triggerElement: o[0], duration: t}).addTo(m);
                        r.triggerHook(.5);
                        var i = o.data("aux"),
                            n = e('.vp-img-mask[data-aux="' + i + '"]');
                        r.on("enter", (function () {
                            o.addClass("active"),
                            e(".caption-border.left").css({
                                width: a - o.width() / 2 + "px",
                                opacity: 1
                            }),
                            e(".caption-border.right").css({
                                width: a - o.width() / 2 + "px",
                                opacity: 1
                            }),
                            o.hasClass("change-header") && (setTimeout((function () {
                                e("header").addClass("white-header")
                            }), 10), o.addClass("white-title")),
                            n.addClass("active"),
                            n.find("video").each((function () {
                                e(this).get(0).play()
                            }))
                        })),
                        r.on("leave", (function () {
                            o.removeClass("active"),
                            o.removeClass("white-title"),
                            e("header").removeClass("white-header"),
                            n.removeClass("active"),
                            n.find("video").each((function () {
                                e(this).get(0).pause()
                            }))
                        })),
                        e("body").hasClass("smooth-scroll") && s.addListener((() => {
                            r.refresh()
                        }))
                    })),
                    e(window).width() >= 1024 && (e(".vp-portfolio-captions .vp-title").on("mouseenter", (function () {
                        var o = e(this);
                        gsap.to("#ball", {
                            duration: .3,
                            borderWidth: "2px",
                            scale: 1.2,
                            borderColor: e("body").data("primary-color"),
                            backgroundColor: e("body").data("primary-color")
                        }),
                        gsap.to("#ball-loader", {
                            duration: .2,
                            borderWidth: "2px",
                            top: 2,
                            left: 2
                        }),
                        e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
                    })), e(".vp-portfolio-captions .vp-title").on("mouseleave", (function () {
                        gsap.to("#ball", {
                            duration: .2,
                            borderWidth: "4px",
                            scale: .5,
                            borderColor: "#999999",
                            backgroundColor: "transparent"
                        }),
                        gsap.to("#ball-loader", {
                            duration: .2,
                            borderWidth: "4px",
                            top: 0,
                            left: 0
                        }),
                        e("#ball p").remove()
                    }))),
                    e("body").hasClass("load-no-ajax") || e(".vp-portfolio-captions .vp-title").on("click", (function () {
                        let o = e(this).closest(".vp-slide");
                        o.addClass("above"),
                        e("body").addClass("show-loader"),
                        e(this).parents(".vp-slide").hasClass("change-header") ? e("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>') : e("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>'),
                        gsap.to(e(".vp-slide.above").prevAll(), {
                            duration: .3,
                            force3D: !0,
                            y: -100,
                            delay: .3,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }),
                        gsap.to(e(".vp-slide.above").nextAll(), {
                            duration: .3,
                            force3D: !0,
                            y: 100,
                            delay: .3,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }),
                        gsap.to("#fixed-borders", {
                            duration: .3,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }),
                        gsap.to("#ball", {
                            duration: .2,
                            borderWidth: "4px",
                            scale: .5,
                            borderColor: "#999999",
                            backgroundColor: "transparent"
                        }),
                        gsap.to("#ball-loader", {
                            duration: .2,
                            borderWidth: "4px",
                            top: 0,
                            left: 0
                        }),
                        e("#ball").removeClass("with-icon"),
                        e("#ball p").remove(),
                        e("#ball i").remove(),
                        setTimeout((function () {
                            o.find(".vp-title").clone().appendTo(".temporary-hero .inner"),
                            o.find(".vp-cat").clone().appendTo(".temporary-hero .inner");
                            var t = o.data("aux");
                            e('.vp-img-mask[data-aux="' + t + '"]').addClass("temporary").clone().appendTo(".temporary-hero"),
                            e("body").addClass("load-project-thumb-with-title"),
                            setTimeout((function () {
                                e(".above").find("a").trigger("click")
                            }), 100)
                        }), 600)
                    }))
                },
                waitForAll: !0
            })
        }(),
        e("#main-content").length > 0 && e("body").removeClass(".woocommerce-page").removeClass(".woocommerce"),
        e("#project-nav").length > 0 && (e("#main-content").addClass("solid-color"), e("#main-page-content").addClass("project-page")),
        e(".portfolio").length > 0 && e("#main-page-content").addClass("portfolio-page"),
        e("#page-content").hasClass("light-content") ? (e("nav").css("background-color", "#141414"), e("main, #main-content.solid-color").css("background-color", (function () {
            return e("#page-content").data("bgcolor")
        })), e("#magic-cursor").addClass("light-content"), e("#hero").length > 0 ? e("#hero").hasClass("has-image") || e("header").hasClass("fullscreen-menu") ? e("header").css("background-color", "transparent") : (e("#blog").length > 0 && e("header").css("background-color", "#141414"), e("#post").length > 0 && e("header").css("background-color", "#141414")) : e("header").css("background-color", "transparent")) : (e("nav").css("background-color", "#141414"), e("main, #main-content.solid-color").css("background-color", (function () {
            return e("#page-content").data("bgcolor")
        })), e("#magic-cursor").removeClass("light-content"), e("#hero").length > 0 ? e("#hero").hasClass("has-image") || e("header").hasClass("fullscreen-menu") ? e("header").css("background-color", "transparent") : (e("#blog").length > 0 && e("header").css("background-color", "#fff"), e("#post").length > 0 && e("header").css("background-color", "#fff")) : e("header").css("background-color", "transparent")),
        e(".hero-subtitle, .next-hero-subtitle, .light-content .hero-subtitle, .light-content .next-hero-subtitle, .item-cat, .vp-cat, .showcase-list-intro, .sl-subtitle, .subtitle, li.split-slider-intro, .split-subtitle, .primary-color").css("color", (function () {
            return e("body").data("primary-color")
        })),
        e(".video-cover").each((function () {
            var o = e(this).data("src");
            e(this).css({
                "background-image": "url(" + o + ")"
            })
        })),
        e("a.ajax-link").on("click", (function () {
            e("body").addClass("show-loader"),
            e(".flexnav").removeClass("flexnav-show"),
            e("#menu-burger").removeClass("open"),
            e("header").removeClass("white-header"),
            e("#app").remove(),
            setTimeout((function () {
                e("#canvas-slider.active").remove()
            }), 300),
            e(".temporary-hero").remove();
            var o = gsap.timeline();
            e(".fullscreen-menu .menu-timeline").each((function (e, t) {
                o.to(t, {
                    duration: .25,
                    y: -30,
                    opacity: 0,
                    ease: Power2.easeIn
                }, .03 * e)
            })),
            gsap.to("#ball", {
                duration: .3,
                borderWidth: "4px",
                scale: .5,
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1
            }),
            gsap.to(e("#main, #hero-image-wrapper, #project-nav, .next-project-image, #app, #canvas-slider, #showcase-slider-webgl-holder, #quickmenu-scroll, #blog"), {
                duration: .3,
                opacity: 0,
                delay: 0,
                ease: Power0.ease
            }),
            gsap.to(e("#footer-container, .header-middle"), {
                duration: .3,
                opacity: 0,
                ease: Power0.ease
            }),
            gsap.to("#show-filters, #counter-wrap", {
                duration: .2,
                opacity: 0
            })
        })),
        e("nav .ajax-link").on("click", (function () {
            e(this).parents(".flexnav").addClass("hover"),
            e(this).parents(".item-with-ul").addClass("hover"),
            gsap.set(e(this).find("span"), {yPercent: 0});
            var o = gsap.timeline();
            e(".menu-timeline .before-span").each((function (e, t) {
                o.to(t, {
                    duration: .5,
                    force3D: !0,
                    y: -120,
                    opacity: 0,
                    delay: 0,
                    ease: Power2.easeIn
                }, .05 * e)
            })),
            e("header").removeClass("white-header"),
            e("#app").remove(),
            e(".big-title-caption").remove()
        })),
        e("#burger-wrapper, .menu .button-text").on("click", (function () {
            e("#menu-burger, nav").toggleClass("open"),
            setTimeout((function () {
                if (e("#menu-burger").hasClass("open")) 
                    e("header").addClass("over-sidebar").addClass("over-white-section"),
                    e("#page-content").hasClass("light-content") || (e("#magic-cursor").addClass("light-content"), e("#header-container").addClass("light-content")),
                    gsap.set(e("nav ul ul li"), {
                        y: 0,
                        opacity: 1
                    }),
                    (o = gsap.timeline()).set(e(".menu-timeline .before-span"), {
                        y: 120,
                        opacity: 0
                    }),
                    e(".menu-timeline .before-span").each((function (e, t) {
                        o.to(t, {
                            duration: .7,
                            force3D: !0,
                            y: 0,
                            opacity: 1,
                            delay: .4,
                            ease: Power2.easeOut
                        }, .1 * e)
                    })),
                    e(".touch-button").click((function (o, t) {
                        if (1 == t) 
                            return;
                        
                        let a = e(this);
                        e(".touch-button.active").each((function () {
                            a.get(0) !== e(this).get(0) && e(this).trigger("click", !0)
                        }))
                    }));
                 else {
                    var o = gsap.timeline();
                    e(".menu-timeline .before-span").each((function (e, t) {
                        o.to(t, .5, {
                            force3D: !0,
                            y: -120,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeIn
                        }, .05 * e)
                    }));
                    var t = gsap.timeline();
                    e("nav ul ul li").each((function (e, o) {
                        t.to(o, .5, {
                            force3D: !0,
                            y: -120,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeIn
                        }, .03 * e)
                    })),
                    e("#page-content").hasClass("light-content") || setTimeout((function () {
                        e("#magic-cursor").removeClass("light-content"),
                        e("#header-container").removeClass("light-content")
                    }), 500),
                    setTimeout((function () {
                        e(".touch-button.active").trigger("click"),
                        e("header").removeClass("over-sidebar"),
                        setTimeout((function () {
                            e("header").removeClass("over-white-section")
                        }), 350)
                    }), 500)
                }
            }), 20)
        })),
        e(window).width() < 1024 && e(".hero-video-wrapper").remove(),
        e(".wpcf7-form-control-wrap").each((function () {
            e(this).has("label").length <= 0 && e(this).append('<label class="input_label"></label>')
        })),
        e(".page-numbers li a").each((function () {
            e(this).addClass("link")
        })),
        e(".next-ajax-link-page").on("mouseenter", (function () {
            var o = e(this);
            gsap.to("#ball", {
                duration: .3,
                borderWidth: "2px",
                scale: 1.2,
                borderColor: e("body").data("primary-color"),
                backgroundColor: e("body").data("primary-color")
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "2px",
                top: 2,
                left: 2
            }),
            e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
        })),
        e(".next-ajax-link-page").on("mouseleave", (function () {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999",
                backgroundColor: "transparent"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }),
            e("#ball p").remove()
        })),
        e("body").hasClass("load-no-ajax") || e(".next-ajax-link-page").on("click", (function () {
            if (e("body").addClass("load-next-page"), e("body").addClass("show-loader"), e("header").removeClass("white-header"), e("#app").remove(), e(".big-title-caption").remove(), gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999",
                backgroundColor: "transparent"
            }), gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }), e("#ball").removeClass("with-icon"), e("#ball p").remove(), e("#ball i").remove(), e("#project-nav").hasClass("light-content") && setTimeout((function () {
                e("body").addClass("light-content")
            }), 300), e("body").hasClass("smooth-scroll")) 
                var o = e("#content-scroll").height() - e("#page-nav").height() - e("footer").height();
             else 
                o = window.innerHeight - e("#page-nav").height() - e("footer").height();
            
            gsap.to(e(".subtitle-info"), {
                duration: .3,
                force3D: !0,
                opacity: 0,
                delay: 0,
                y: -20,
                ease: Power2.easeOut
            }),
            gsap.to(e(".subtitle-name"), {
                duration: .3,
                force3D: !0,
                opacity: 1,
                y: 0,
                delay: .15,
                ease: Power2.easeOut
            }),
            gsap.to(e("#main-page-content, #hero"), {
                duration: .3,
                opacity: 0
            }),
            gsap.to(e("#page-nav"), {
                duration: .7,
                y: - o,
                delay: 0,
                ease: Power2.easeInOut
            }),
            gsap.to(e("footer"), {
                duration: .3,
                opacity: 0,
                delay: 0,
                ease: Power2.easeInOut
            })
        })),
        e("#project-nav .next-ajax-link-project").mouseenter((function (o) {
            var t = e(this);
            e("#ball").append('<p class="first">' + t.data("firstline") + "</p><p>" + t.data("secondline") + "</p>"),
            gsap.to("#ball", {
                duration: .3,
                borderWidth: "2px",
                scale: 1.2,
                borderColor: e("body").data("primary-color"),
                backgroundColor: e("body").data("primary-color")
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "2px",
                top: 2,
                left: 2
            })
        })),
        e("#project-nav .next-ajax-link-project").mouseleave((function (o) {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999",
                backgroundColor: "transparent"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }),
            e("#ball p").remove()
        })),
        e("body").hasClass("load-no-ajax") || e(".next-ajax-link-project").on("click", (function () {
            e("body").addClass("load-project-thumb-with-title").addClass("show-loader"),
            e("header").removeClass("white-header"),
            e("#app").remove(),
            e(".next-project-image").addClass("temporary").appendTo("body"),
            e(this).parents("#project-nav").hasClass("change-header") ? e("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>') : e("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>'),
            e(".next-caption").appendTo(".temporary-hero .inner"),
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999",
                backgroundColor: "transparent"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }),
            e("#ball").removeClass("with-icon"),
            e("#ball p").remove(),
            e("#ball i").remove(),
            gsap.to(e("#main-page-content"), {
                duration: .3,
                opacity: 0
            }),
            gsap.to(e(".next-project-image"), {
                duration: .6,
                scale: 1,
                opacity: 1,
                ease: Power2.easeOut,
                onComplete: function () {
                    e(".next-project-image").addClass("visible")
                }
            }),
            gsap.to(e("footer"), {
                duration: .3,
                opacity: 0,
                ease: Power2.easeInOut
            })
        })),
        function () {
            if (e("#showcase-slider-holder").length > 0) {
                function s() {
                    var o = e("#showcase-slider-holder").width(),
                        t = e(".swiper-slide-active .slide-title").width(),
                        a = o / 2 - 120;
                    e(".caption-border.left").css({
                        width: a - t / 2 + "px",
                        opacity: 1
                    }),
                    e(".caption-border.right").css({
                        width: a - t / 2 + "px",
                        opacity: 1
                    })
                }
                e("footer").addClass("showcase-footer");
                var o = new Swiper("#showcase-slider", {
                    direction: "vertical",
                    loop: !0,
                    grabCursor: !1,
                    resistance: !0,
                    resistanceRatio: .5,
                    slidesPerView: "auto",
                    allowTouchMove: !0,
                    speed: 2e3,
                    autoplay: !0,
                    mousewheel: !0,
                    parallax: !0,
                    navigation: {
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev"
                    },
                    on: {
                        progress: function () {
                            for (var e = this, o = 0; o < e.slides.length; o++) {
                                var t = e.slides[o].progress * (.3 * e.height);
                                e.slides[o].querySelector(".img-mask").style.transform = "translate3d(0," + t + "px, 0)"
                            }
                        },
                        touchStart: function () {
                            for (var e = 0; e < this.slides.length; e++) 
                                this.slides[e].style.transition = ""
                            
                        },
                        setTransition: function (e) {
                            for (var o = this, t = 0; t < o.slides.length; t++) 
                                o.slides[t].style.transition = e + "ms",
                                o.slides[t].querySelector(".img-mask").style.transition = e + "ms"
                            
                        },
                        init: function () {
                            e(".swiper-slide-active").find("video").each((function () {
                                e(this).get(0).play()
                            }))
                        },
                        slideChangeTransitionStart: function () {
                            e("#showcase-slider .swiper-slide-active").hasClass("change-header") ? (e("#page-content").delay(300).queue((function (o) {
                                e(this).removeClass("light-content"),
                                o()
                            })), e("#magic-cursor").removeClass("light-content")) : (e("#page-content").delay(300).queue((function (o) {
                                e(this).addClass("light-content"),
                                o()
                            })), e("#magic-cursor").addClass("light-content")),
                            e("#showcase-slider .swiper-slide-duplicate-active").hasClass("change-header") ? (e("#page-content").delay(300).queue((function (o) {
                                e(this).removeClass("light-content"),
                                o()
                            })), e("#magic-cursor").removeClass("light-content")) : (e("#page-content").delay(300).queue((function (o) {
                                e(this).addClass("light-content"),
                                o()
                            })), e("#magic-cursor").addClass("light-content")),
                            e("#showcase-slider .swiper-slide").find(".slide-title").each((function () {
                                e(this).removeClass("active-title")
                            })),
                            e("#showcase-slider .swiper-slide-active").find("video").each((function () {
                                e(this).get(0).play()
                            })),
                            s()
                        },
                        slideChangeTransitionEnd: function () {
                            e("#showcase-slider .swiper-slide-active").find(".slide-title").each((function () {
                                e(this).addClass("active-title")
                            })),
                            e("#showcase-slider .swiper-slide-duplicate-active").find(".slide-title").each((function () {
                                e(this).addClass("active-title")
                            })),
                            e("#showcase-slider .swiper-slide-prev").find("video").each((function () {
                                e(this).get(0).pause()
                            })),
                            e("#showcase-slider .swiper-slide-next").find("video").each((function () {
                                e(this).get(0).pause()
                            }))
                        }
                    }
                });
                if (s(), e(window).width() >= 1024) {
                    var t = new Swiper("#showcase-slider-captions", {
                            speed: 700,
                            spaceBetween: 0,
                            slidesPerView: "auto",
                            direction: "vertical",
                            longSwipes: !0,
                            longSwipesRatio: .5,
                            touchRatio: 3,
                            longSwipesMs: 0,
                            centeredSlides: !0,
                            loop: !0,
                            mousewheel: !0,
                            parallax: !0
                        }),
                        a = new Swiper("#showcase-slider-lists", {
                            speed: 700,
                            spaceBetween: 0,
                            slidesPerView: "auto",
                            direction: "vertical",
                            longSwipes: !0,
                            longSwipesRatio: .5,
                            touchRatio: 3,
                            longSwipesMs: 0,
                            centeredSlides: !0,
                            loop: !0,
                            mousewheel: !0,
                            parallax: !0
                        });
                    o.controller.control = a,
                    o.controller.control = t,
                    t.controller.control = a
                }
                e(window).width() >= 1024 && (e("#showcase-slider-holder .slide-title").on("mousedown", (function (e) {
                    return !1
                })), e(".swiper-container").on("mousedown touchstart", (function () {
                    e("#magic-cursor").hasClass("light-content") ? gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }) : gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#000"
                    }),
                    e("body").addClass("scale-drag-y")
                })), e(".swiper-container").on("mouseup touchend", (function () {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    e("body").removeClass("scale-drag-y")
                })), e("body").on("mouseup touchend", (function () {
                    e("body").removeClass("scale-drag-y")
                })), e("#showcase-slider-holder .slide-title").on("mouseenter", (function () {
                    var o = e(this);
                    gsap.to("#ball", {
                        duration: .3,
                        borderWidth: "2px",
                        scale: 1.2,
                        borderColor: e("body").data("primary-color"),
                        backgroundColor: e("body").data("primary-color")
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "2px",
                        top: 2,
                        left: 2
                    }),
                    e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
                })), e("#showcase-slider-holder .slide-title").on("mouseleave", (function () {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999",
                        backgroundColor: "transparent"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball p").remove()
                }))),
                e("body").hasClass("load-no-ajax") || e("#showcase-slider-holder .slide-title").on("click", (function () {
                    let o = e(this).closest(".swiper-slide");
                    o.addClass("above"),
                    e("body").addClass("show-loader"),
                    e(this).parents(".swiper-slide").hasClass("change-header") ? e("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>') : e("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>'),
                    gsap.to(".slide-small-title span", {
                        duration: .3,
                        y: -30,
                        opacity: 0,
                        delay: 0,
                        ease: Power2.easeIn
                    }),
                    gsap.to("footer, .showcase-pagination-wrap .parallax-element, .caption-border", {
                        duration: .5,
                        opacity: 0,
                        ease: Power4.easeInOut
                    }),
                    gsap.to("#showcase-slider .inner .subtitle", {
                        duration: .3,
                        opacity: 1,
                        delay: .4,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            o.find(".slide-title").appendTo(".temporary-hero .inner"),
                            o.find(".subtitle").appendTo(".temporary-hero .inner"),
                            o.find(".section-image").addClass("temporary").appendTo(".temporary-hero"),
                            e("body").addClass("load-project-thumb-with-title"),
                            e(this).delay(100).queue((function () {
                                e(".above").find("a").trigger("click")
                            }))
                        }
                    }),
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999",
                        backgroundColor: "transparent"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball").removeClass("with-icon"),
                    e("#ball p").remove(),
                    e("#ball i").remove()
                }))
            }
        }(),
        function () {
            if (e("#showcase-slider-webgl-holder").length > 0) {
                e("footer").addClass("showcase-footer");
                var o,
                    t = new Swiper(".swiper-container", {
                        direction: "horizontal",
                        loop: !0,
                        grabCursor: !1,
                        resistance: !0,
                        resistanceRatio: .1,
                        slidesPerView: "auto",
                        centeredSlides: !0,
                        allowTouchMove: !0,
                        spaceBetween: 0,
                        speed: 2e3,
                        autoplay: !0,
                        mousewheel: !0,
                        parallax: !0,
                        navigation: {
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev"
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0,
                            renderBullet: function (e, o) {
                                return '<span class="' + o + '"><div class="parallax-wrap"><div class="parallax-element"><svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20"><circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"stroke-opacity="1" stroke-width="2px"></circle><circle class="solid-fill" cx="10" cy="10" r="3"></circle></svg></div></div></span>'
                            }
                        },
                        on: {
                            slideChangeTransitionStart: function () {
                                e(".swiper-slide-active").find("div").each((function () {
                                    e(this).hasClass("active") || e(this).trigger("click")
                                })),
                                e(".swiper-slide-duplicate-active").find("div").each((function () {
                                    e(this).hasClass("active") || e(this).trigger("click")
                                })),
                                e(".swiper-slide-active").hasClass("change-header") ? (e("#page-content").removeClass("light-content"), e("#magic-cursor").removeClass("light-content")) : (e("#page-content").addClass("light-content"), e("#magic-cursor").addClass("light-content")),
                                e(".swiper-slide-duplicate-active").hasClass("change-header") ? (e("#page-content").removeClass("light-content"), e("#magic-cursor").removeClass("light-content")) : (e("#page-content").addClass("light-content"), e("#magic-cursor").addClass("light-content")),
                                e(".swiper-slide").find(".slide-title").each((function () {
                                    e(this).removeClass("active-title")
                                }))
                            },
                            slideChangeTransitionEnd: function () {
                                setTimeout((function () {
                                    e(".swiper-slide-active").find(".slide-title").each((function () {
                                        e(this).addClass("active-title")
                                    })),
                                    e(".swiper-slide-duplicate-active").find(".slide-title").each((function () {
                                        e(this).addClass("active-title")
                                    }))
                                }), 0)
                            }
                        }
                    });
                if (e("#slider-webgl").length > 0 && e("body").waitForImages({
                    finished: function () {
                        t.update()
                    },
                    waitForAll: !0
                }), e(window).width() >= 1024 && (e(".swiper-container"), e(".swiper-container .slide-title-wrapper").on("mousedown", (function (e) {
                    return !1
                })), e(".swiper-container").on("mousedown touchstart", (function (a) {
                    e("#magic-cursor").hasClass("light-content") ? gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }) : gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#000"
                    }),
                    e("body").addClass("scale-drag-x"),
                    o = setInterval((function () {
                        e("#page-content").hasClass("light-content") || e("#page-content").addClass("light-content"),
                        e("#magic-cursor").hasClass("light-content") || e("#magic-cursor").addClass("light-content"),
                        gsap.to("#ball", {
                            duration: .2,
                            borderWidth: "2px",
                            scale: 1,
                            borderColor: "#fff"
                        }),
                        e("body").addClass("scale-drag-down"),
                        gsap.to("#slider-webgl", {
                            duration: .2,
                            scale: .6,
                            delay: 0
                        }),
                        gsap.to(".swiper-slide", {
                            duration: .2,
                            scale: 1,
                            delay: 0
                        }),
                        gsap.to(".swiper-slide .subtitle span", {
                            duration: .2,
                            y: 80,
                            opacity: 0
                        }),
                        gsap.to("#canvas-slider", {
                            duration: .2,
                            opacity: 0,
                            delay: 0,
                            ease: Linear.easeNone
                        }),
                        t.params.longSwipes = !0,
                        t.params.longSwipesRatio = .5,
                        t.params.touchRatio = 3,
                        e(".swiper-slide .slide-title").each((function () {
                            var o = e(this).data("fill-img");
                            e(this).children().css({
                                background: "url(" + o + ")"
                            })
                        }))
                    }), 1e3)
                })), e(".swiper-container").on("mouseup touchend", (function (a) {
                    gsap.to("#slider-webgl", {
                        duration: .2,
                        scale: 1
                    }),
                    gsap.to(".swiper-slide", {
                        duration: .2,
                        scale: 1
                    }),
                    gsap.to(".swiper-slide .subtitle span", {
                        duration: .2,
                        y: 0,
                        opacity: 1,
                        delay: .3
                    }),
                    gsap.to("#canvas-slider", {
                        duration: .2,
                        opacity: 1,
                        delay: .4,
                        ease: Linear.easeNone
                    }),
                    t.params.longSwipes = !1,
                    t.params.longSwipesRatio = .1,
                    t.params.touchRatio = 1,
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    e("body").removeClass("scale-drag-x"),
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    clearInterval(o),
                    setTimeout((function () {
                        e(".swiper-slide-active").hasClass("change-header") ? (e("#page-content").removeClass("light-content"), e("#magic-cursor").removeClass("light-content")) : (e("#page-content").addClass("light-content"), e("#magic-cursor").addClass("light-content")),
                        setTimeout((function () {
                            e("body").removeClass("scale-drag-down"),
                            e(".swiper-slide .slide-title").each((function () {
                                e(this).children().css({background: "none"})
                            }))
                        }), 100)
                    }), 300)
                })), e("#showcase-slider-webgl-holder .slide-title").on("mouseleave", (function () {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999",
                        backgroundColor: "transparent"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball p").remove()
                }))), e("body").hasClass("load-no-ajax") || e("#slider-split-webgl .split-caption").on("click", (function () {
                    let o = e(this).closest("#slider-split-projects li");
                    o.addClass("above"),
                    gsap.to("#canvas-slider.split", {
                        duration: .7,
                        x: 0,
                        delay: .3,
                        ease: Power1.easeInOut
                    }),
                    gsap.to("#canvas-slider.split canvas", {
                        duration: .7,
                        x: 0,
                        delay: .3,
                        ease: Power1.easeInOut
                    }),
                    e("body").addClass("show-loader"),
                    o.hasClass("change-header") && e("#page-content").delay(900).queue((function (o) {
                        e(this).removeClass("light-content"),
                        o()
                    })),
                    gsap.to("footer", {
                        duration: .5,
                        opacity: 0,
                        ease: Power4.easeInOut
                    }),
                    gsap.to(e(".split-slider-intro span"), {
                        duration: .5,
                        force3D: !0,
                        y: -30,
                        opacity: 0,
                        delay: 0,
                        ease: Power2.easeInOut
                    });
                    var t = gsap.timeline();
                    e(".split-title span").each((function (e, o) {
                        t.to(o, {
                            duration: .5,
                            force3D: !0,
                            y: -80,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        }, .05 * e)
                    }));
                    var a = gsap.timeline();
                    e(".split-subtitle span").each((function (e, o) {
                        a.to(o, {
                            duration: .5,
                            force3D: !0,
                            y: -20,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        }, .05 * e)
                    })),
                    gsap.to("footer", {
                        duration: .5,
                        opacity: 0,
                        ease: Power4.easeInOut
                    }),
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999",
                        backgroundColor: "transparent"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball").removeClass("with-icon"),
                    e("#ball p").remove(),
                    e("#ball i").remove(),
                    e(this).delay(1e3).queue((function () {
                        e(".above").find("a").trigger("click")
                    }))
                })), e("#slider-split-webgl").length > 0) {
                    class o {
                        constructor(o, t) {
                            this.__list = e(o),
                            this.friction = t,
                            this.desire_positionY = e("#slider-split-scroll").scrollTop(),
                            this.py = [],
                            e("#slider-split-scroll").on("scroll", this.handleChange.bind(this)),
                            this.update()
                        }
                        handleChange(o) {
                            this.desire_positionY = e("#slider-split-scroll").scrollTop()
                        }
                        update() {
                            e.each(this.__list, function (o, t) {
                                null == this.py[o] && (this.py[o] = 0),
                                this.py[o] += (this.desire_positionY - this.py[o]) / (this.friction + o),
                                e(t).css({
                                    top: Math.round(this.desire_positionY) + "px",
                                    transform: " translateY(-" + Math.round(this.py[o]) + "px)"
                                })
                            }.bind(this)),
                            window.requestAnimationFrame(this.update.bind(this))
                        }
                    } e(window).width() > 1024 && new o("#slider-split-projects li", 6)
                }
            }
        }(),
        function () {
            if (e("#showcase-slider-webgl-holder").length > 0) {
                var o = new ClapatWebGL({vertex: "varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\t}", fragment: "\n\t\t\t\tvarying vec2 vUv;\n\n\t\t\t\tuniform sampler2D currentImage;\n\t\t\t\tuniform sampler2D nextImage;\n\t\t\t\tuniform sampler2D disp;\n\t\t\t\tuniform float dispFactor;\n\t\t\t\tuniform float effectFactor;\n\t\t\t\tuniform vec4 resolution;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n\n\t\t\t\t\tvec4 disp = texture2D(disp, uv);\n\t\t\t\t\tvec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n\t\t\t\t\tvec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n\t\t\t\t\tvec4 _currentImage = texture2D(currentImage, distortedPosition);\n\t\t\t\t\tvec4 _nextImage = texture2D(nextImage, distortedPosition2);\n\t\t\t\t\tvec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n\n\t\t\t\t\tgl_FragColor = finalTexture; }\n\n\t\t\t\t"});
                e("#slider-webgl").length > 0 && (t = Array.from(document.getElementById("trigger-slides").querySelectorAll(".slide-wrap")), o.isRunning =! 1, t.forEach((e => {
                    e.addEventListener("click", (function () {
                        if (! o.isRunning) {
                            o.isRunning = !0,
                            document.getElementById("trigger-slides").querySelectorAll(".active")[0].className = "",
                            this.className = "active";
                            var e = parseInt(this.dataset.slide, 10);
                            o.material.uniforms.nextImage.value = o.textures[e],
                            o.material.uniforms.nextImage.needsUpdate = !0,
                            gsap.to(o.material.uniforms.dispFactor, {
                                duration: .9,
                                value: 1,
                                ease: "Sine.easeInOut",
                                onComplete: function () {
                                    o.material.uniforms.currentImage.value = o.textures[e],
                                    o.material.uniforms.currentImage.needsUpdate = !0,
                                    o.material.uniforms.dispFactor.value = 0,
                                    o.isRunning = !1
                                }
                            })
                        }
                    }))
                }))),
                e("#slider-split-webgl").length > 0 && function () {
                    var t = Array.from(document.getElementById("slider-split-projects").querySelectorAll(".slide-wrap"));
                    o.isRunning = !1,
                    t.forEach((t => {
                        t.addEventListener("mousemove", (function () {
                            if (! e(this).hasClass("active") && ! o.isRunning) {
                                o.isRunning = !0,
                                document.getElementById("slider-split-projects").querySelectorAll(".active")[0].className = "",
                                this.className = "active";
                                var t = parseInt(this.dataset.slide, 10);
                                o.material.uniforms.nextImage.value = o.textures[t],
                                o.material.uniforms.nextImage.needsUpdate = !0,
                                gsap.to(o.material.uniforms.dispFactor, {
                                    duration: .5,
                                    value: 1,
                                    ease: "Sine.easeInOut",
                                    onComplete: function () {
                                        o.material.uniforms.currentImage.value = o.textures[t],
                                        o.material.uniforms.currentImage.needsUpdate = !0,
                                        o.material.uniforms.dispFactor.value = 0,
                                        o.isRunning = !1
                                    }
                                })
                            }
                        }))
                    }))
                }()
            }
            var t
        }(),
        function () {
            if (e("#showcase-carousel-holder").length > 0) {
                e("footer").addClass("showcase-footer");
                var o = new Swiper("#showcase-slider", {
                    direction: "horizontal",
                    loop: !0,
                    grabCursor: !1,
                    resistance: !0,
                    resistanceRatio: .5,
                    slidesPerView: "auto",
                    allowTouchMove: !0,
                    speed: 2e3,
                    autoplay: !0,
                    mousewheel: !0,
                    centeredSlides: !0,
                    spaceBetween: 200,
                    navigation: {
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev"
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0,
                        renderBullet: function (e, o) {
                            return '<span class="' + o + '"><div class="parallax-wrap"><div class="parallax-element"><svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20"><circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)" stroke="#FFF"stroke-opacity="1" stroke-width="2px"></circle><circle cx="10" cy="10" r="3" fill="#FFF"></circle></svg></div></div></span>'
                        }
                    },
                    on: {
                        init: function () {
                            e("#showcase-carousel-holder").hasClass("columns-carousel") || e(".swiper-slide-active").find("video").each((function () {
                                e(this).get(0).play()
                            }))
                        },
                        slideChangeTransitionStart: function () {
                            if (! e("#showcase-carousel-holder").hasClass("columns-carousel")) {
                                e(".swiper-slide-active").find("video").each((function () {
                                    e(this).get(0).play()
                                }));
                                var o = e("#showcase-carousel-holder #showcase-slider .swiper-slide .slide-title").height();
                                e("#showcase-carousel-holder").find(".swiper-slide").each((function () {
                                    e(this).hasClass("swiper-slide-active") ? (gsap.to(e(this).find(".slide-title span"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: .1,
                                        ease: Power2.easeOut
                                    }), gsap.to(e(this).find(".subtitle span"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 0,
                                        opacity: 1,
                                        delay: .15,
                                        ease: Power2.easeOut
                                    })) : (gsap.to(e(this).find(".slide-title span"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: o,
                                        opacity: 0,
                                        delay: .2,
                                        ease: Power2.easeOut
                                    }), gsap.to(e(this).find(".subtitle span"), {
                                        duration: .7,
                                        force3D: !0,
                                        y: 30,
                                        opacity: 0,
                                        delay: .1,
                                        ease: Power2.easeOut
                                    }))
                                }))
                            }
                        },
                        slideChangeTransitionEnd: function () {
                            e("#showcase-carousel-holder").hasClass("columns-carousel") || (e(".swiper-slide-prev").find("video").each((function () {
                                e(this).get(0).pause()
                            })), e(".swiper-slide-next").find("video").each((function () {
                                e(this).get(0).pause()
                            })))
                        }
                    }
                });
                e("#showcase-carousel-holder").hasClass("mixed-carousel") && (o.params.spaceBetween = 20, o.update()),
                e("#showcase-carousel-holder").hasClass("columns-carousel") && (o.params.spaceBetween = 0, o.params.centeredSlides =! 1, o.params.speed = 600, o.update(), e(window).width() > 1024 && e(".columns-carousel").find(".swiper-slide").on("mouseenter", (function (o) {
                    e(this).find("video").each((function () {
                        e(this).get(0).play()
                    }))
                })).on("mouseleave", (function (o) {
                    e(this).find("video").each((function () {
                        e(this).get(0).pause()
                    }))
                }))),
                e(window).width() >= 1024 && (e("#showcase-carousel-holder .trigger-slide-link").on("mousedown", (function () {
                    return !1
                })), e("#showcase-carousel-holder .swiper-container").on("mousedown touchstart", (function () {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }),
                    e("body").addClass("scale-drag-x")
                })), e("#showcase-carousel-holder .swiper-container").on("mouseup touchend", (function (o) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    e("body").removeClass("scale-drag-x")
                })), e("#showcase-carousel-holder .trigger-slide-link").on("mouseenter", (function () {
                    var o = e(this);
                    gsap.to("#ball", {
                        duration: .3,
                        borderWidth: "2px",
                        scale: 1.2,
                        borderColor: e("body").data("primary-color"),
                        backgroundColor: e("body").data("primary-color")
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "2px",
                        top: 2,
                        left: 2
                    }),
                    e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
                })), e("#showcase-carousel-holder .trigger-slide-link").on("mouseleave", (function () {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999",
                        backgroundColor: "transparent"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball p").remove()
                })))
            }
        }(),
        function () {
            if (e(".showcase-list-holder").length > 0) {
                if (e(window).width() < 1024 && (e(".hover-reveal").addClass("trigger-slide-link"), e(".sl-title").addClass("trigger-slide-link")), e(window).width() >= 1024) {
                    if (e("body").hasClass("smooth-scroll")) 
                        var o = document.querySelector("#content-scroll"),
                            t = Scrollbar.init(o, {
                                renderByPixels: !0,
                                damping: .1
                            });
                    
                    const s = e => {
                        let o = 0,
                            t = 0;
                        return e || (e = window.event),
                        e.pageX || e.pageY ? (o = e.pageX, t = e.pageY) : (e.clientX || e.clientY) && (o = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                            x: o,
                            y: t
                        }
                    };
                    class r {
                        constructor(e) {
                            this.DOM = {
                                el: e
                            },
                            this.DOM.reveal = this.DOM.el.querySelector(".hover-reveal"),
                            this.DOM.revealInner = this.DOM.reveal.querySelector(".hover-reveal__inner"),
                            this.DOM.revealInner.style.overflow = "hidden",
                            this.DOM.revealImg = this.DOM.revealInner.querySelector(".hover-reveal__img"),
                            this.initEvents()
                        }
                        initEvents() {
                            this.positionElement = o => {
                                const a = s(o);
                                if (e("body").hasClass("smooth-scroll")) {
                                    const o = {
                                        left: document.body.scrollLeft + document.documentElement.scrollLeft,
                                        top: - t.scrollTop
                                    };
                                    e(".showcase-list-holder").hasClass("vertical-list") ? gsap.to(e(".hover-reveal"), {
                                        duration: .7,
                                        top: a.y - 250 - o.top + "px",
                                        left: a.x - 400 - o.left + "px",
                                        ease: Power4.easeOut
                                    }) : gsap.to(e(".hover-reveal"), {
                                        duration: 1,
                                        top: a.y + 40 - o.top + "px",
                                        left: a.x + 10 - o.left + "px",
                                        ease: Power4.easeOut
                                    })
                                } else {
                                    const o = {
                                        left: document.body.scrollLeft + document.documentElement.scrollLeft,
                                        top: document.body.scrollTop + document.documentElement.scrollTop
                                    };
                                    e(".showcase-list-holder").hasClass("vertical-list") ? gsap.to(e(".hover-reveal"), {
                                        duration: .7,
                                        top: a.y - 250 - o.top + "px",
                                        left: a.x - 400 - o.left + "px",
                                        ease: Power4.easeOut
                                    }) : gsap.to(e(".hover-reveal"), {
                                        duration: 1,
                                        top: a.y + 40 - o.top + "px",
                                        left: a.x + 10 - o.left + "px",
                                        ease: Power4.easeOut
                                    })
                                }
                            },
                            this.mouseenterFn = e => {
                                this.positionElement(e),
                                this.showImage()
                            },
                            this.mousemoveFn = e => requestAnimationFrame((() => {
                                this.positionElement(e)
                            })),
                            this.mouseleaveFn = () => {
                                this.hideImage()
                            },
                            this.DOM.el.addEventListener("mouseenter", this.mouseenterFn),
                            this.DOM.el.addEventListener("mousemove", this.mousemoveFn),
                            this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn)
                        }
                        showImage() {
                            gsap.killTweensOf(this.DOM.revealInner),
                            gsap.killTweensOf(this.DOM.revealImg),
                            this.tl = gsap.timeline({
                                onStart: () => {
                                    this.DOM.reveal.style.opacity = 1,
                                    gsap.set(this.DOM.el, {zIndex: 1e3})
                                }
                            }).add("begin").add(gsap.to(this.DOM.revealInner, {
                                duration: .4,
                                ease: Sine.easeOut,
                                startAt: {
                                    x: "-100%"
                                },
                                x: "0%"
                            }), "begin").add(gsap.to(this.DOM.revealImg, {
                                duration: .4,
                                ease: Sine.easeOut,
                                startAt: {
                                    x: "100%"
                                },
                                x: "0%"
                            }), "begin")
                        }
                        hideImage() {
                            gsap.killTweensOf(this.DOM.revealInner),
                            gsap.killTweensOf(this.DOM.revealImg),
                            this.tl = gsap.timeline({
                                onStart: () => {
                                    gsap.set(this.DOM.el, {zIndex: 999})
                                },
                                onComplete: () => {
                                    gsap.set(this.DOM.el, {zIndex: ""}),
                                    gsap.set(this.DOM.reveal, {opacity: 0})
                                }
                            }).add("begin").add(gsap.to(this.DOM.revealInner, {
                                duration: .4,
                                ease: Sine.easeOut,
                                x: "100%"
                            }), "begin").add(gsap.to(this.DOM.revealImg, {
                                duration: .4,
                                ease: Sine.easeOut,
                                x: "-100%"
                            }), "begin")
                        }
                    }
                    Array.from(document.querySelectorAll(".slide-list")).forEach((e => new r(e)));
                    var a = document.querySelector(".slide-list:first-child");
                    e(".showcase-list-intro").css("top", a.offsetTop),
                    e(".slide-list").on("mouseenter", (function () {
                        e(".slide-list").addClass("disable"),
                        e(this).removeClass("disable"),
                        e(this).find("video").each((function () {
                            e(this).get(0).play()
                        }))
                    })).on("mouseleave", (function () {
                        e(".slide-list").removeClass("disable"),
                        e(this).find("video").each((function () {
                            e(this).get(0).pause()
                        }))
                    })),
                    e(".vertical-list .slide-list").on("mouseenter", (function () {
                        var o = e(this);
                        gsap.to("#ball", {
                            duration: .3,
                            borderWidth: "2px",
                            scale: 1.2,
                            borderColor: e("body").data("primary-color"),
                            backgroundColor: e("body").data("primary-color")
                        }),
                        gsap.to("#ball-loader", {
                            duration: .2,
                            borderWidth: "2px",
                            top: 2,
                            left: 2
                        }),
                        e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
                    })).on("mouseleave", (function () {
                        gsap.to("#ball", {
                            duration: .2,
                            borderWidth: "4px",
                            scale: .5,
                            borderColor: "#999999",
                            backgroundColor: "transparent"
                        }),
                        gsap.to("#ball-loader", {
                            duration: .2,
                            borderWidth: "4px",
                            top: 0,
                            left: 0
                        }),
                        e("#ball p").remove()
                    }))
                }
                e("body").hasClass("load-no-ajax") || e(".showcase-list-holder .trigger-slide-link").on("click", (function () {
                    let o = e(this).closest(".slide-list");
                    o.addClass("above"),
                    o.hasClass("change-header") && e("#page-content").delay(900).queue((function (o) {
                        e(this).removeClass("light-content"),
                        o()
                    })),
                    e(".showcase-list-holder").removeClass("loaded"),
                    e("body").addClass("load-project-thumb").addClass("show-loader"),
                    gsap.to(e(".showcase-list-intro span"), {
                        duration: .5,
                        force3D: !0,
                        y: -30,
                        opacity: 0,
                        delay: 0,
                        ease: Power2.easeInOut
                    });
                    var t = gsap.timeline();
                    e(".sl-title span").each((function (e, o) {
                        t.to(o, {
                            duration: .5,
                            force3D: !0,
                            y: -80,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        }, .05 * e)
                    }));
                    var a = gsap.timeline();
                    e(".sl-subtitle span").each((function (e, o) {
                        a.to(o, {
                            duration: .5,
                            force3D: !0,
                            y: -20,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        }, .05 * e)
                    })),
                    gsap.to("footer, .slide-list", {
                        duration: .5,
                        opacity: 0,
                        ease: Power4.easeInOut
                    }),
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999",
                        backgroundColor: "transparent",
                        opacity: 1
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball").removeClass("with-icon"),
                    e("#ball p").remove(),
                    e("#ball i").remove(),
                    e(this).delay(1e3).queue((function () {
                        e(".above").find("a").trigger("click")
                    }))
                }))
            }
        }(),
        function () {
            if (e(".portfolio-wrap").length > 0) {
                if (e("body").hasClass("smooth-scroll")) 
                    var o = document.querySelector("#content-scroll"),
                        t = Scrollbar.init(o, {
                            renderByPixels: !0,
                            damping: .1
                        });
                
                var a = e(".portfolio");
                a.isotope({layoutMode: "packery", itemSelector: ".item", gutter: 0, transitionDuration: "0.5s"}),
                e("#filters a").on("click", (function () {
                    e("#filters a").removeClass("active"),
                    e(this).addClass("active"),
                    e(".item").addClass("item-margins");
                    var o = e(this).attr("data-filter");
                    return a.isotope({
                        filter: o
                    }, (function (e, o) {
                        o.$allAtoms.filter(".isotope-hidden").removeClass("is-filtered"),
                        o.$filteredAtoms.addClass("is-filtered")
                    })),
                    !1
                })),
                e("#all").trigger("click"),
                e("#show-filters, #close-filters").on("click", (function () {
                    e("#filters-overlay").toggleClass("active"),
                    e(".hero-title").height(),
                    e(".hero-subtitle").height(),
                    setTimeout((function () {
                        if (e("#filters-overlay").hasClass("active")) {
                            gsap.to(e(".item-parallax"), {
                                duration: .6,
                                force3D: !0,
                                scale: .9,
                                opacity: .3,
                                delay: 1.1,
                                ease: Power2.easeInOut
                            }),
                            gsap.to(e(".active .item-caption"), {
                                duration: .3,
                                opacity: 0,
                                ease: Power2.easeOut
                            }),
                            gsap.to(e("#show-filters, #counter-wrap"), {
                                duration: .3,
                                opacity: 0,
                                delay: 0,
                                ease: Power2.easeOut
                            }),
                            gsap.to(e("#show-filters, #counter-wrap"), {
                                duration: 0,
                                visibility: "hidden",
                                delay: .35,
                                ease: Power2.easeOut
                            }),
                            gsap.set(e(".filters-info"), {
                                y: 30,
                                opacity: 0
                            }),
                            gsap.to(e(".filters-info"), {
                                duration: .4,
                                force3D: !0,
                                y: 0,
                                opacity: 1,
                                delay: .7,
                                ease: Power2.easeOut
                            }),
                            (a = gsap.timeline()).set(e(".filters-timeline"), {
                                y: 60,
                                opacity: 0
                            }),
                            e(".filters-timeline").each((function (e, o) {
                                a.to(o, {
                                    duration: .5,
                                    y: 0,
                                    opacity: 1,
                                    delay: 1.2,
                                    ease: Power3.easeOut
                                }, .1 * e)
                            }));
                            var o = e("#hero").height();
                            e("body").hasClass("smooth-scroll") ? gsap.to(t, {
                                duration: 1.5,
                                scrollTop: o,
                                ease: Power4.easeInOut
                            }) : e("html,body").animate({
                                scrollTop: o
                            }, 800)
                        } else {
                            gsap.to(e(".item-parallax"), {
                                duration: .6,
                                force3D: !0,
                                scale: 1,
                                opacity: 1,
                                delay: .3,
                                ease: Power2.easeInOut
                            }),
                            gsap.to(e(".active .item-caption"), {
                                duration: .5,
                                opacity: 1,
                                delay: .5,
                                ease: Power2.easeOut
                            }),
                            gsap.set(e("#show-filters, #counter-wrap"), {
                                visibility: "visible",
                                opacity: 0
                            }),
                            gsap.to(e("#show-filters, #counter-wrap"), {
                                duration: .3,
                                opacity: 1,
                                delay: .7,
                                ease: Power2.easeOut
                            }),
                            gsap.to(e(".filters-info"), {
                                duration: .2,
                                force3D: !0,
                                y: -30,
                                opacity: 0,
                                delay: 0,
                                ease: Power1.easeIn
                            });
                            var a = gsap.timeline();
                            e(".filters-timeline, .jssocials-share").each((function (e, o) {
                                a.to(o, {
                                    duration: .25,
                                    opacity: 0,
                                    y: -60,
                                    delay: .1,
                                    ease: Power1.easeIn
                                }, .1 * e)
                            })),
                            gsap.to("#ball", {
                                duration: .1,
                                borderWidth: "4px",
                                scale: .5
                            }),
                            e("#ball").removeClass("close-icon"),
                            e("#ball i").remove()
                        }
                    }), 20)
                })),
                e(window).width() >= 1024 && (e("#close-filters").mouseenter((function (o) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "2px",
                        top: 2,
                        left: 2
                    }),
                    e("#ball").addClass("close-icon").append('<i class="fa fa-times"></i>')
                })), e("#close-filters").mouseleave((function (o) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball").removeClass("close-icon"),
                    e("#ball i").remove()
                }))),
                setTimeout((function () {
                    var o = new ScrollMagic.Controller;
                    e(".portfolio").each((function () {
                        var a = e(this),
                            s = e(this).outerHeight() - .7 * window.innerHeight,
                            r = e(this).outerHeight() - .1 * window.innerHeight,
                            i = new ScrollMagic.Scene({triggerElement: a[0], duration: s}).addTo(o);
                        i.triggerHook(.3),
                        i.on("enter", (function () {
                            gsap.to(e("#show-filters"), {
                                duration: .3,
                                opacity: 1,
                                delay: 0,
                                ease: Power2.easeOut
                            }),
                            e("#show-filters").addClass("enabled")
                        })),
                        i.on("leave", (function () {
                            gsap.to(e("#show-filters"), {
                                duration: .15,
                                opacity: 0,
                                delay: 0,
                                ease: Power2.easeOut
                            }),
                            e("#show-filters").removeClass("enabled")
                        }));
                        var n = new ScrollMagic.Scene({triggerElement: a[0], duration: r}).addTo(o);
                        n.triggerHook(.5),
                        n.on("enter", (function () {
                            e(".portfolio-captions").addClass("enabled")
                        })),
                        n.on("leave", (function () {
                            e(".portfolio-captions").removeClass("enabled")
                        })),
                        e("body").hasClass("smooth-scroll") && t.addListener((() => {
                            i.refresh(),
                            n.refresh()
                        }))
                    }))
                }), 2e3),
                gsap.to(e("#show-filters"), {
                    duration: 0,
                    opacity: 0,
                    delay: .05,
                    ease: Power2.easeOut
                }),
                e(window).width() > 1024 && (e(".portfolio-wrap").hasClass("tooltip-caption") || (e(".item-image").mouseenter((function (o) {
                    gsap.to("#ball", {
                        duration: .3,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "2px",
                        top: 2,
                        left: 2
                    }),
                    e("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>'),
                    e(this).parent().find("video").each((function () {
                        e(this).get(0).play()
                    }))
                })), e(".item-image").mouseleave((function (o) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball").removeClass("with-icon"),
                    e("#ball i").remove(),
                    e(this).parent().find("video").each((function () {
                        e(this).get(0).pause()
                    }))
                }))), e(".tooltip-caption").length > 0 && (e(".item-title-hover").remove(), e("#ball").append('<div class="title-caption-tooltip"></div>'), e(".portfolio").find(".item .item-caption").each((function () {
                    e(".title-caption-tooltip").append(e(this))
                })), e(".portfolio").find(".item .item-content").on("mouseenter", (function (o) {
                    e(".title-caption-tooltip").children().eq(e(this).parents(".item").index()).addClass("hover")
                })).on("mouseleave", (function (o) {
                    e(".title-caption-tooltip").children().eq(e(this).parents(".item").index()).removeClass("hover")
                })).on("click", (function () {
                    e(".title-caption-tooltip").children().eq(e(this).parents(".item").index()).removeClass("hover"),
                    setTimeout((function () {
                        e(".title-caption-tooltip").remove()
                    }), 100)
                })), e(".item-content").mouseenter((function (e) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "0px",
                        scale: 1,
                        borderColor: "transparent"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "2px",
                        top: 4,
                        left: 4
                    })
                })), e(".item-content").mouseleave((function (e) {
                    gsap.to("#ball", {
                        duration: .3,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    })
                }))), e(".hover-caption").length > 0 && e(".portfolio-wrap").hasClass("hover-caption") && (e("#page-content").hasClass("light-content") ? e("body").append('<div class="temporary-hero portfolio-captions light-content"></div>') : e("body").append('<div class="temporary-hero portfolio-captions"></div>'), e(".temporary-hero").append('<div class="outer"></div>'), e(".temporary-hero .outer").append('<div class="inner"></div>'), e(".portfolio").find(".item .item-caption").each((function () {
                    e(".temporary-hero .outer .inner").append(e(this))
                })), e(".portfolio").find(".item .item-content").on("mouseenter", (function (o) {
                    gsap.to(e(".temporary-hero .outer .inner").children().children(".item-title").eq(e(this).parents(".item").index()), {
                        duration: .4,
                        force3D: !0,
                        opacity: 1,
                        y: 0,
                        delay: .15,
                        ease: Power2.easeOut
                    }),
                    gsap.to(e(".temporary-hero .outer .inner").children().children(".item-cat").eq(e(this).parents(".item").index()), {
                        duration: .3,
                        force3D: !0,
                        opacity: 1,
                        y: 0,
                        delay: .25,
                        ease: Power2.easeOut
                    })
                })).on("mouseleave", (function (o) {
                    gsap.to(e(".temporary-hero .outer .inner").children().children(".item-title").eq(e(this).parents(".item").index()), {
                        duration: .3,
                        force3D: !0,
                        opacity: 0,
                        y: -50,
                        ease: Power2.easeIn
                    }),
                    gsap.to(e(".temporary-hero .outer .inner").children().children(".item-cat").eq(e(this).parents(".item").index()), {
                        duration: .3,
                        force3D: !0,
                        opacity: 0,
                        y: -30,
                        delay: .05,
                        ease: Power2.easeIn
                    }),
                    gsap.set(e(".temporary-hero .outer .inner").children().children(".item-title").eq(e(this).parents(".item").index()), {
                        y: 50,
                        opacity: 0,
                        delay: .3
                    }),
                    gsap.set(e(".temporary-hero .outer .inner").children().children(".item-cat").eq(e(this).parents(".item").index()), {
                        y: 30,
                        opacity: 0,
                        delay: .35
                    })
                })).on("click", (function () {
                    e(".temporary-hero").removeClass("enabled")
                })), e(".item-title-hover").remove()))
            }
        }(),
        function () {
            if (e("#blog").length > 0) {
                if (e("body").hasClass("smooth-scroll")) 
                    var o = document.querySelector("#content-scroll"),
                        t = Scrollbar.init(o, {
                            renderByPixels: !0,
                            damping: .05
                        });
                
                var a = new ScrollMagic.Controller;
                if (e(".article-wrap").each((function () {
                    var o = e(this),
                        s = e(this).height(),
                        r = new ScrollMagic.Scene({triggerElement: o[0], duration: s}).addTo(a);
                    r.triggerHook(1),
                    r.on("enter", (function () {
                        o.addClass("active")
                    })),
                    e("body").hasClass("smooth-scroll") && t.addListener((() => {
                        r.refresh()
                    }))
                })), e(".article-img").mouseenter((function (o) {
                    gsap.to("#ball", {
                        duration: .3,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "2px",
                        top: 2,
                        left: 2
                    }),
                    e("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>'),
                    e(this).parent().find("video").each((function () {
                        e(this).get(0).play()
                    }))
                })), e(".article-img").mouseleave((function (o) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    gsap.to("#ball-loader", {
                        duration: .2,
                        borderWidth: "4px",
                        top: 0,
                        left: 0
                    }),
                    e("#ball").removeClass("with-icon"),
                    e("#ball i").remove(),
                    e(this).parent().find("video").each((function () {
                        e(this).get(0).pause()
                    }))
                })), e("article.post").on("mouseenter", (function () {
                    e("article.post").addClass("disable"),
                    e(this).removeClass("disable")
                })).on("mouseleave", (function () {
                    e("article.post").removeClass("disable")
                })), e(window).width() >= 1024 && e(".blog-minimal").length > 0) {
                    const o = e => {
                        let o = 0,
                            t = 0;
                        return e || (e = window.event),
                        e.pageX || e.pageY ? (o = e.pageX, t = e.pageY) : (e.clientX || e.clientY) && (o = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                            x: o,
                            y: t
                        }
                    };
                    class a {
                        constructor(e) {
                            this.DOM = {
                                el: e
                            },
                            this.DOM.reveal = this.DOM.el.querySelector(".hover-reveal"),
                            this.DOM.revealInner = this.DOM.reveal.querySelector(".hover-reveal__inner"),
                            this.DOM.revealInner.style.overflow = "hidden",
                            this.DOM.revealImg = this.DOM.revealInner.querySelector(".hover-reveal__img"),
                            this.initEvents()
                        }
                        initEvents() {
                            this.positionElement = a => {
                                const s = o(a);
                                if (e("body").hasClass("smooth-scroll")) {
                                    const o = {
                                        left: document.body.scrollLeft + document.documentElement.scrollLeft,
                                        top: - t.scrollTop
                                    };
                                    gsap.to(e(".hover-reveal"), {
                                        duration: 1,
                                        top: s.y + 40 - o.top + "px",
                                        left: s.x + 10 - o.left + "px",
                                        ease: Power4.easeOut
                                    })
                                } else {
                                    const o = {
                                        left: document.body.scrollLeft + document.documentElement.scrollLeft,
                                        top: document.body.scrollTop + document.documentElement.scrollTop
                                    };
                                    gsap.to(e(".hover-reveal"), {
                                        duration: 1,
                                        top: s.y + 40 - o.top + "px",
                                        left: s.x + 10 - o.left + "px",
                                        ease: Power4.easeOut
                                    })
                                }
                            },
                            this.mouseenterFn = e => {
                                this.positionElement(e),
                                this.showImage()
                            },
                            this.mousemoveFn = e => requestAnimationFrame((() => {
                                this.positionElement(e)
                            })),
                            this.mouseleaveFn = () => {
                                this.hideImage()
                            },
                            this.DOM.el.addEventListener("mouseenter", this.mouseenterFn),
                            this.DOM.el.addEventListener("mousemove", this.mousemoveFn),
                            this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn)
                        }
                        showImage() {
                            gsap.killTweensOf(this.DOM.revealInner),
                            gsap.killTweensOf(this.DOM.revealImg),
                            this.tl = gsap.timeline({
                                onStart: () => {
                                    this.DOM.reveal.style.opacity = 1,
                                    gsap.set(this.DOM.el, {zIndex: 1e3})
                                }
                            }).add("begin").add(gsap.to(this.DOM.revealInner, {
                                duration: .4,
                                ease: Sine.easeOut,
                                startAt: {
                                    x: "-100%"
                                },
                                x: "0%"
                            }), "begin").add(gsap.to(this.DOM.revealImg, {
                                duration: .4,
                                ease: Sine.easeOut,
                                startAt: {
                                    x: "100%"
                                },
                                x: "0%"
                            }), "begin")
                        }
                        hideImage() {
                            gsap.killTweensOf(this.DOM.revealInner),
                            gsap.killTweensOf(this.DOM.revealImg),
                            this.tl = gsap.timeline({
                                onStart: () => {
                                    gsap.set(this.DOM.el, {zIndex: 999})
                                },
                                onComplete: () => {
                                    gsap.set(this.DOM.el, {zIndex: ""}),
                                    gsap.set(this.DOM.reveal, {opacity: 0})
                                }
                            }).add("begin").add(gsap.to(this.DOM.revealInner, {
                                duration: .4,
                                ease: Sine.easeOut,
                                x: "100%"
                            }), "begin").add(gsap.to(this.DOM.revealImg, {
                                duration: .4,
                                ease: Sine.easeOut,
                                x: "-100%"
                            }), "begin")
                        }
                    } e(".has-post-thumbnail").length > 0 && Array.from(document.querySelectorAll(".has-post-thumbnail")).forEach((e => new a(e)))
                }
            }
            e("#black-fade").mouseenter((function (o) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "2px",
                    scale: 1,
                    borderColor: "#fff"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "2px",
                    top: 2,
                    left: 2
                }),
                e("#ball").addClass("close-icon").append('<i class="fa fa-times"></i>')
            })),
            e("#black-fade").mouseleave((function (o) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                }),
                e("#ball").removeClass("close-icon"),
                e("#ball i").remove()
            })),
            e("#black-fade").on("click", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                }),
                e("#ball").removeClass("close-icon"),
                e("#ball i").remove()
            })),
            e("#open-sidebar, #open-sidebar-nav, #black-fade").on("click", (function () {
                e("#open-sidebar").toggleClass("open"),
                e("#sidebar").toggleClass("open"),
                e("#black-fade").toggleClass("fade-in")
            })),
            e("#sidebar select").wrap("<div class='select hide-ball'></div>")
        }(),
        e("body").hasClass("woocommerce-page") && e(".preloader-wrap").addClass("hidden"),
        gsap.to(e(".woocommerce div.product"), {
            duration: .4,
            opacity: 1,
            delay: 1.5,
            ease: Power2.easeOut
        }),
        e(".woocommerce-product-gallery__image a").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                easing: "ease-in-out",
                opener: function (e) {
                    return e.is("img") ? e : e.find("img")
                }
            }
        }),
        e(".woocommerce-product-gallery__image a").mouseenter((function (o) {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "2px",
                scale: 1,
                borderColor: "#fff"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "2px",
                top: 2,
                left: 2
            }),
            e("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>')
        })),
        e(".woocommerce-product-gallery__image a").mouseleave((function (o) {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }),
            e("#ball").removeClass("with-icon"),
            e("#ball i").remove()
        })),
        e(".variations select").wrap("<div class='select hide-ball'></div>"),
        function () {
            e("dd.accordion-content").slideUp(1).addClass("hide"),
            e("dl.accordion").on("click", "dt", (function () {
                e(this).addClass("accordion-active").next().slideDown(350).siblings("dd.accordion-content").slideUp(350).prev().removeClass("accordion-active")
            })),
            e("dl.accordion").on("click", "dt.accordion-active", (function () {
                e(this).removeClass("accordion-active").siblings("dd.accordion-content").slideUp(350)
            })),
            e(".flexnav").flexNav({animationSpeed: 250});
            var o = ["facebook", "twitter", "pinterest"];
            "undefined" != typeof ClapatRaydenThemeOptions && ClapatRaydenThemeOptions.share_social_network_list && (o = ClapatRaydenThemeOptions.share_social_network_list.split(",")),
            e("#share").jsSocials({
                showLabel: !1,
                showCount: !1,
                shares: o
            }),
            e(".jssocials-share").wrap("<div class='parallax-wrap'><div class='parallax-element'></div></div>"),
            e(".random-collage-wrap").length > 0 && e(window).width() >= 1024 && (e(".random-collage .rc-slide .item-wrap-image").on("mouseenter", (function () {
                var o = e(this);
                gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "2px",
                    scale: 1.2,
                    borderColor: e("body").data("primary-color"),
                    backgroundColor: e("body").data("primary-color")
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "2px",
                    top: 2,
                    left: 2
                }),
                e("#ball").append('<p class="first">' + o.data("firstline") + "</p><p>" + o.data("secondline") + "</p>")
            })), e(".random-collage .rc-slide .item-wrap-image").on("mouseleave", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999",
                    backgroundColor: "transparent"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                }),
                e("#ball p").remove()
            })))
        }(),
        setTimeout((function () {
            e(".content-slider").length > 0 && (new Swiper(".content-slider", {
                direction: "horizontal",
                loop: !0,
                slidesPerView: 1,
                paginationClickable: !0,
                spaceBetween: 0,
                mousewheelControl: !1,
                simulateTouch: !1,
                speed: 1e3,
                navigation: {
                    nextEl: ".slider-button-next",
                    prevEl: ".slider-button-prev"
                },
                on: {
                    progress: function () {
                        for (var e = this, o = 0; o < e.slides.length; o++) {
                            var t = e.slides[o].progress * (.4 * e.height);
                            e.slides[o].querySelector("img").style.transform = "translate3d(" + t + "px,0, 0)"
                        }
                    },
                    touchStart: function () {
                        for (var e = 0; e < this.slides.length; e++) 
                            this.slides[e].style.transition = ""
                        
                    },
                    setTransition: function (e) {
                        for (var o = this, t = 0; t < o.slides.length; t++) 
                            o.slides[t].style.transition = e + "ms",
                            o.slides[t].querySelector("img").style.transition = e + "ms"
                        
                    }
                }
            }), e(".slider-button-prev").mouseenter((function (o) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "2px",
                    scale: 1,
                    borderColor: "#fff"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "2px",
                    top: 2,
                    left: 2
                }),
                e("#ball").addClass("with-icon").append('<i class="fa fa-chevron-left"></i>')
            })), e(".slider-button-prev").mouseleave((function (o) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                }),
                e("#ball").removeClass("with-icon"),
                e("#ball i").remove()
            })), e(".slider-button-next").mouseenter((function (o) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "2px",
                    scale: 1,
                    borderColor: "#fff"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "2px",
                    top: 2,
                    left: 2
                }),
                e("#ball").addClass("with-icon").append('<i class="fa fa-chevron-right"></i>')
            })), e(".slider-button-next").mouseleave((function (o) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999"
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                }),
                e("#ball").removeClass("with-icon"),
                e("#ball i").remove()
            }))),
            e(".content-carousel").length > 0 && (e("body").waitForImages({
                finished: function () {
                    new Swiper(".content-carousel", {
                        direction: "horizontal",
                        simulateTouch: !0,
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        mousewheelControl: !1,
                        speed: 700,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0,
                            renderBullet: function (e, o) {
                                return '<span class="' + o + '"><div class="parallax-wrap"><div class="parallax-element"><svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20"><circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"stroke-opacity="1" stroke-width="2px"></circle><circle class="solid-fill" cx="10" cy="10" r="3"></circle></svg></div></div></span>'
                            }
                        }
                    })
                },
                waitForAll: !0
            }), e(".content-carousel").on("mousedown touchstart", (function () {
                gsap.to(".swiper-slide img", {
                    duration: .7,
                    scale: .9
                }),
                e("body").addClass("drag-cursor")
            })), e("body").on("mouseup touchend", (function () {
                gsap.to(".swiper-slide img", {
                    duration: .7,
                    scale: 1
                }),
                e("body").removeClass("drag-cursor")
            })), e(".content-carousel").on("mouseenter mousemove", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "2px",
                    scale: 1,
                    borderColor: "#fff"
                }),
                e("body").addClass("scale-drag-x")
            })), e(".content-carousel").on("mouseleave", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999"
                }),
                e("body").removeClass("scale-drag-x").removeClass("drag-cursor")
            })), e("body").mouseleave((function (o) {
                gsap.to(".swiper-slide img", {
                    duration: .7,
                    scale: 1
                }),
                e("body").removeClass("scale-drag-x").removeClass("drag-cursor")
            }))),
            e(".content-looped-carousel").length > 0 && (e("body").waitForImages({
                finished: function () {
                    new Swiper(".content-looped-carousel", {
                        direction: "horizontal",
                        simulateTouch: !0,
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        centeredSlides: !0,
                        loop: !0,
                        mousewheelControl: !1,
                        speed: 700,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0,
                            renderBullet: function (e, o) {
                                return '<span class="' + o + '"><div class="parallax-wrap"><div class="parallax-element"><svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20"><circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"stroke-opacity="1" stroke-width="2px"></circle><circle class="solid-fill" cx="10" cy="10" r="3"></circle></svg></div></div></span>'
                            }
                        }
                    })
                },
                waitForAll: !0
            }), e(".content-looped-carousel").on("mousedown touchstart", (function () {
                gsap.to(".swiper-slide img", {
                    duration: .7,
                    scale: .9
                }),
                e("body").addClass("drag-cursor")
            })), e("body").on("mouseup touchend", (function () {
                gsap.to(".swiper-slide img", {
                    duration: .7,
                    scale: 1
                }),
                e("body").removeClass("drag-cursor")
            })), e(".content-looped-carousel").on("mouseenter mousemove", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "2px",
                    scale: 1,
                    borderColor: "#fff"
                }),
                e("body").addClass("scale-drag-x")
            })), e(".content-looped-carousel").on("mouseleave", (function () {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "4px",
                    scale: .5,
                    borderColor: "#999999"
                }),
                e("body").removeClass("scale-drag-x").removeClass("drag-cursor")
            })), e("body").mouseleave((function (o) {
                gsap.to(".swiper-slide img", {
                    duration: .7,
                    scale: 1
                }),
                e("body").removeClass("scale-drag-x").removeClass("drag-cursor")
            })))
        }), 400),
        e(".content-middle-carousel").length > 0 && (new Swiper(".content-middle-carousel", {
            direction: "horizontal",
            simulateTouch: !0,
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: !0,
            loop: !0,
            mousewheelControl: !1,
            speed: 700,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0,
                renderBullet: function (e, o) {
                    return '<span class="' + o + '"><div class="parallax-wrap"><div class="parallax-element"><svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20"><circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"stroke-opacity="1" stroke-width="2px"></circle><circle class="solid-fill" cx="10" cy="10" r="3"></circle></svg></div></div></span>'
                }
            }
        }), e(window).width() > 1024 && (e(".content-middle-carousel .swiper-slide img").mouseenter((function (o) {
            gsap.to("#ball", {
                duration: .3,
                borderWidth: "2px",
                scale: 1,
                borderColor: "#fff"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "2px",
                top: 2,
                left: 2
            }),
            e("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>'),
            e(this).parent().find("video").each((function () {
                e(this).get(0).play()
            }))
        })), e(".content-middle-carousel .swiper-slide img").mouseleave((function (o) {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }),
            e("#ball").removeClass("with-icon"),
            e("#ball i").remove(),
            e(this).parent().find("video").each((function () {
                e(this).get(0).pause()
            }))
        })))),
        function () {
            var o = {
                    x: 0,
                    y: 0
                },
                t = {
                    x: 0,
                    y: 0
                },
                a = !1,
                s = document.getElementById("ball"),
                r = (document.getElementById("ball-loader"), 40);
            function i() {
                a || (t.x += .65 * (o.x - t.x), t.y += .65 * (o.y - t.y), gsap.to(s, {
                    duration: .4,
                    x: t.x,
                    y: t.y
                }))
            }
            function n(e, o) {
                !function (e, o, t, a) {
                    var s = o.getBoundingClientRect(),
                        r = e.pageX - s.left,
                        i = e.pageY - s.top,
                        n = window.pageYOffset || document.documentElement.scrollTop;
                    gsap.to(t, {
                        duration: .3,
                        x: (r - s.width / 2) / s.width * a,
                        y: (i - s.height / 2 - n) / s.height * a,
                        ease: Power2.easeOut
                    })
                }(e, o, o.querySelector(".parallax-element"), 20)
            }
            gsap.set(s, {
                xPercent: -50,
                yPercent: -50,
                scale: .5,
                borderWidth: "4px"
            }),
            document.addEventListener("mousemove", (function (e) {
                var t = window.pageYOffset || document.documentElement.scrollTop;
                o.x = e.pageX,
                o.y = e.pageY - t
            })),
            gsap.ticker.add(i),
            e(".sticky.left").mouseenter((function (o) {
                var t = e(this)[0].getBoundingClientRect(),
                    a = t.left - r,
                    n = t.top + t.height / 2;
                gsap.to(s, {
                    duration: .5,
                    x: a,
                    y: n,
                    scale: .9,
                    borderWidth: "2px"
                }),
                gsap.ticker.remove(i)
            })),
            e(".sticky.right").mouseenter((function (o) {
                var t = e(this)[0].getBoundingClientRect(),
                    a = t.right + r,
                    n = t.top + t.height / 2;
                gsap.to(s, {
                    duration: .5,
                    x: a,
                    y: n,
                    scale: .9,
                    borderWidth: "2px"
                }),
                gsap.ticker.remove(i)
            })),
            e("#main .sticky.left").mouseenter((function (o) {
                var t = e(this)[0].getBoundingClientRect(),
                    a = t.left - r + 10,
                    n = t.top + t.height / 2;
                gsap.to(s, {
                    duration: .5,
                    x: a,
                    y: n,
                    scale: .7,
                    opacity: .6,
                    borderWidth: "6px",
                    borderColor: "#999999"
                }),
                gsap.ticker.remove(i)
            })),
            e("#main .sticky.right").mouseenter((function (o) {
                var t = e(this)[0].getBoundingClientRect(),
                    a = t.right + r - 10,
                    n = t.top + t.height / 2;
                gsap.to(s, {
                    duration: .5,
                    x: a,
                    y: n,
                    scale: .7,
                    opacity: .6,
                    borderWidth: "6px",
                    borderColor: "#999999"
                }),
                gsap.ticker.remove(i)
            })),
            e(".sticky").mouseleave((function (e) {
                gsap.to(s, {
                    duration: .2,
                    scale: .5,
                    borderWidth: "4px",
                    borderColor: "#999999",
                    opacity: 1
                }),
                gsap.ticker.add(i)
            })),
            e(".parallax-wrap").mouseenter((function (o) {
                gsap.to(this, {
                    duration: .3,
                    scale: 2
                }),
                gsap.to(s, {
                    duration: .3,
                    scale: .9,
                    borderWidth: "2px",
                    opacity: 1
                }),
                gsap.to(e(this).children(), {
                    duration: .3,
                    scale: .5
                }),
                a = !0
            })),
            e("#main .parallax-wrap.icon-wrap").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    scale: .7,
                    borderWidth: "6px",
                    opacity: .6,
                    borderColor: "#999"
                })
            })),
            e(".parallax-wrap.bigger").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    scale: 1.35,
                    borderWidth: "2px",
                    opacity: 1
                })
            })),
            e(".parallax-wrap").mouseleave((function (o) {
                gsap.to(this, {
                    duration: .3,
                    scale: 1
                }),
                gsap.to(s, {
                    duration: .3,
                    scale: .5,
                    borderWidth: "4px",
                    opacity: 1,
                    borderColor: "#999999"
                }),
                gsap.to(e(this).children(), {
                    duration: .3,
                    scale: 1,
                    x: 0,
                    y: 0
                }),
                a = !1
            })),
            e("#magic-cursor").hasClass("light-content") ? (e(".sticky").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .5,
                    borderColor: "#999"
                })
            })), e("#main .sticky").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .5,
                    borderColor: "#999"
                })
            })), e(".parallax-wrap").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#999"
                })
            })), e(".parallax-wrap.bigger").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#fff"
                })
            })), e(".white-section .parallax-wrap.bigger").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#000"
                })
            })), e("#main .parallax-wrap.icon-wrap").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#999"
                })
            }))) : (e(".sticky").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .5,
                    borderColor: "#999"
                })
            })), e("#main .sticky").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .5,
                    borderColor: "#999"
                })
            })), e(".parallax-wrap").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#999"
                })
            })), e(".parallax-wrap.bigger").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#000"
                })
            })), e("#main .parallax-wrap.icon-wrap").mouseenter((function (e) {
                gsap.to(s, {
                    duration: .3,
                    borderColor: "#999"
                })
            }))),
            e(".parallax-wrap").mousemove((function (e) {
                (function (e, o, a) {
                    var r = o.getBoundingClientRect(),
                        i = e.pageX - r.left,
                        n = e.pageY - r.top,
                        l = window.pageYOffset || document.documentElement.scrollTop;
                    t.x = r.left + r.width / 2 + (i - r.width / 2) / a,
                    t.y = r.top + r.height / 2 + (n - r.height / 2 - l) / a,
                    gsap.to(s, {
                        duration: .3,
                        x: t.x,
                        y: t.y
                    })
                })(e, this, 2),
                n(e, this)
            })),
            e(".hide-ball").mouseenter((function (e) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "1px",
                    scale: 1,
                    opacity: 0
                })
            })),
            e(".hide-ball").mouseleave((function (e) {
                gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "4px",
                    scale: .5,
                    opacity: 1
                })
            })),
            e(".link, .button").mouseenter((function (e) {
                gsap.to("#ball", {
                    duration: .2,
                    borderWidth: "0px",
                    scale: 1.5,
                    backgroundColor: "rgba(153, 153, 153, 1)",
                    opacity: .15
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "2px",
                    top: 4,
                    left: 4
                })
            })),
            e(".link, .button").mouseleave((function (e) {
                gsap.to("#ball", {
                    duration: .3,
                    borderWidth: "4px",
                    scale: .5,
                    backgroundColor: "rgba(153, 153, 153, 0)",
                    opacity: 1
                }),
                gsap.to("#ball-loader", {
                    duration: .2,
                    borderWidth: "4px",
                    top: 0,
                    left: 0
                })
            }))
        }(),
        e("#justified-grid").length > 0 && e("#justified-grid").justifiedGallery({rowHeight: 360, lastRow: "nojustify", margins: 10}),
        e(".image-link").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                easing: "ease-in-out",
                opener: function (e) {
                    return e.is("img") ? e : e.find("img")
                }
            }
        }),
        e(".image-link").mouseenter((function (o) {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "2px",
                scale: 1,
                borderColor: "#fff"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "2px",
                top: 2,
                left: 2
            }),
            e("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>')
        })),
        e(".image-link").mouseleave((function (o) {
            gsap.to("#ball", {
                duration: .2,
                borderWidth: "4px",
                scale: .5,
                borderColor: "#999999"
            }),
            gsap.to("#ball-loader", {
                duration: .2,
                borderWidth: "4px",
                top: 0,
                left: 0
            }),
            e("#ball").removeClass("with-icon"),
            e("#ball i").remove()
        })),
        function () {
            if (e(".video-wrapper").length > 0) {
                e(".video-wrapper").mouseenter((function (o) {
                    e(this).hasClass("play") && e("#ball").addClass("pause-movie"),
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    }),
                    e("#ball").addClass("over-movie").append('<i class="fa fa-play"></i><i class="fa fa-pause"></i>')
                })),
                e(".video-wrapper").mouseleave((function (o) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "4px",
                        scale: .5,
                        borderColor: "#999999"
                    }),
                    e("#ball").removeClass("over-movie").removeClass("pause-movie"),
                    e("#ball i").remove()
                })),
                e(".video-wrapper .control").mouseenter((function (e) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "20px",
                        scale: 0
                    })
                })),
                e(".video-wrapper .control").mouseleave((function (e) {
                    gsap.to("#ball", {
                        duration: .2,
                        borderWidth: "2px",
                        scale: 1,
                        borderColor: "#fff"
                    })
                }));
                var o = (e(window).height() - e(".video-cover").height()) / 2,
                    t = function (e) {
                        null != e[0] && (e[0].paused || e[0].ended ? (e.parent().addClass("play"), e[0].play()) : (e.parent().removeClass("play"), e[0].pause()))
                    },
                    a = function (e) {
                        var o = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : Math.floor(e / 60);
                        return o + ":" + (
                        Math.floor(e - 60 * o) < 10 ? "0" + Math.floor(e - 60 * o) : Math.floor(e - 60 * o)
                    )
                    };
                e(".video-wrapper").on("click", (function () {
                    e("html,body").animate({
                        scrollTop: e(this).offset().top - o
                    }, 390),
                    e(this).find(".video-cover").addClass("hidden"),
                    e("#ball").toggleClass("pause-movie");
                    var a = e(this);
                    e("#main-page-content").find(".video-wrapper").each((function () {
                        a.is(e(this)) || (e(this).removeClass("play"), e(this).find("video").each((function () {
                            e(this).get(0).paused || e(this).get(0).ended || e(this).get(0).pause()
                        })))
                    })),
                    e(this).find("video").each((function () {
                        t(e(this))
                    }))
                })),
                e(".btnFS").on("click", (function (o) {
                    var t = e(this).closest(".video-wrapper").find("video");
                    e.isFunction(t[0].webkitEnterFullscreen) ? t[0].webkitEnterFullscreen() : e.isFunction(t[0].mozRequestFullScreen) ? t[0].mozRequestFullScreen() : alert("Your browsers doesn't support fullscreen"),
                    o.stopPropagation()
                })),
                e(".sound").on("click", (function (o) {
                    var t = e(this).closest(".video-wrapper"),
                        a = t.find("video");
                    a[0].muted = ! a[0].muted,
                    e(this).toggleClass("muted"),
                    a[0].muted ? t.find(".volumeBar").css("width", 0) : t.find(".volumeBar").css("width", 100 * a[0].volume + "%"),
                    o.stopPropagation()
                })),
                e(".progress").on("click", (function (o) {
                    var t = e(this).closest(".video-wrapper").find("video"),
                        a = t[0].duration,
                        s = 100 * (o.pageX - e(this).offset().left) / e(this).width();
                    s > 100 && (s = 100),
                    s < 0 && (s = 0),
                    e(".timeBar").css("width", s + "%"),
                    t[0].currentTime = a * s / 100,
                    o.stopPropagation()
                })),
                e("#main-page-content").find("video").each((function () {
                    var o = e(this),
                        s = e(this).parent();
                    o[0].removeAttribute("controls"),
                    s.find(".control").fadeIn(500),
                    s.find(".caption").fadeIn(500),
                    o.on("loadedmetadata", (function () {
                        e(this);
                        var t = e(this).parent();
                        t.find(".current").text(a(0)),
                        t.find(".duration").text(a(o[0].duration))
                    })),
                    o.on("progress", (function () {
                        var o = e(this),
                            t = e(this).parent(),
                            a = o[0].duration;
                        if (a > 0) 
                            for (var s = 0; s < o[0].buffered.length; s++) 
                                if (o[0].buffered.start(o[0].buffered.length - 1 - s) < o[0].currentTime) {
                                    var r = o[0].buffered.end(o[0].buffered.length - 1 - s) / a * 100 + "%";
                                    t.find(".bufferBar").css("width", r + "%");
                                    break
                                }
                            
                        
                    })),
                    o.on("timeupdate", (function () {
                        var o = e(this).parent(),
                            t = e(this).get(0).currentTime,
                            s = 100 * t / e(this).get(0).duration;
                        o.find(".timeBar").css("width", s + "%"),
                        o.find(".current").text(a(t))
                    })),
                    o.on("click", (function () {
                        t(e(this))
                    })),
                    o.on("canplay", (function () {
                        e(this).parent().find(".loading").fadeOut(100)
                    }));
                    var r = !1;
                    o.on("canplaythrough", (function () {
                        r = !0
                    })),
                    o.on("ended", (function () {
                        e(this).get(0).pause(),
                        e(this).parent().removeClass("play"),
                        e("#ball").toggleClass("pause-movie")
                    })),
                    o.on("seeking", (function () {
                        r || e(this).parent().find(".loading").fadeIn(200)
                    })),
                    o.on("seeked", (function () {})),
                    o.on("waiting", (function () {
                        e(this).parent().find(".loading").fadeIn(200)
                    }))
                }))
            }
        }(),
        InitContactMap()
    }))
}));
