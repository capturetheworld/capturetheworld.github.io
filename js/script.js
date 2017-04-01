
function setProportion(e, t, n, r) {
    var i = getProportion(e, t, n, r);
    e.find(".vid-bg").width(i * t);
    e.find(".vid-bg").height(i * n);
    e.find(".vid-bg video").width(i * t);
    e.find(".vid-bg video").height(i * n);
    var s = (e.width() >> 1) - (e.find(".vid-bg video").width() >> 1) | 0;
    var o = (e.height() >> 1) - (e.find(".vid-bg video").height() >> 1) | 0;
    e.find(".vid-bg video").css({
        left: s,
        top: o
    })
}

function getProportion(e, t, n, r) {
    var i = jQuery(window).width();
    var s = jQuery(window).height();
    var o = i / s;
    var u = e.width();
    var a = e.height();
    var f = u / a;
    var l = t / n;
    var c = a / n;
    if (f >= l) {
        c = u / t
    } else if (r && a < jQuery(window).height()) {
        c = jQuery(window).height() / n
    }
    return c
}

function parallaxVideo(e) {
    var t = e.visible(true);
    if (t) {
        var n = parseInt(jQuery(e).position().top);
        var r = n - jQuery(window).scrollTop();
        var i = -(r / 1.5);
        var s = i + "px";
        e.find(".vid-bg video").css({
            top: s
        })
    }
}(function(e) {
    e.fn.extend({
        bgVideo: function(e) {
            return this.each(function(e) {
                var t = jQuery(this);
                var n = {
                    videofile: "files/uploads/steven",
                    videowidth: 1280,
                    videoheight: 720,
                    videoposter: "files/uploads/video-poster.jpg",
                    videoparallax: true,
                    videooverlaycolor: "#000000",
                    videooverlayopacity: 0,
                    videosound: t.data("sound")
                };
                t.css({
                    position: "relative",
                    overflow: "hidden",
                    "z-index": "1"
                });
                var r = "";
                if (n.videooverlaycolor) {
                    overlay = '<div class="vid-overlay" style="position:absolute;width:100%;height:100%;top:0;left:0;background:' + n.videooverlaycolor + ';z-index:-2;-webkit-backface-visibility: hidden;-webkit-transform: translateZ(0);" ></div>'
                }
                r += '<div class="vid-bg" style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:-10;background: url(' + n.videoposter + ') center center; background-size: cover;">';
                if (jQuery(window).width() > 1024) {
                    r += '<video id="video' + e + '" preload="auto" autoplay="autoplay" loop="loop"';
                    if (n.videosound) {} else {
                        r += ' muted="muted" '
                    }
                    if (n.videoposter) {
                        r += ' poster="' + n.videoposter + '" '
                    }
                    r += 'style="display:none;top:0;left:0;position: relative;z-index:-11;width:100%;height:100%;">';
                    r += '<source src="' + n.videofile + '.mp4" type="video/mp4" />';
                    r += '<source src="' + n.videofile + '.ogg" type="video/ogg" />';
                    r += '<source src="' + n.videofile + '.webm" type="video/webm" />';
                    r += "bgvideo</video>";
                    r += "</div>";
                    if (n.videosound) {
                        r += '<a href="#" class="mute-video" style="position: absolute;z-index:50; bottom:20px;left:50%;margin-left: -10px;color:#ffffff;display:block;width: 20px;height: 20px;"><i class="fa fa-volume-up fa-fw"></i></a>'
                    } else {}
                }
                t.prepend(overlay);
                t.append(r);
                t.find(".vid-overlay").css({
                    opacity: n.videooverlayopacity
                });
                t.find(".vid-bg video").fadeIn(1e3);
                if (jQuery(window).width() > 1024) {
                    setProportion(t, n.videowidth, n.videoheight, n.videoparallax);
                    jQuery(window).resize(function() {
                        setProportion(t, n.videowidth, n.videoheight, n.videoparallax);
                        parallaxVideo(t)
                    })
                }
                if (n.videoparallax) {
                    parallaxVideo(t);
                    jQuery(window).scroll(function() {
                        parallaxVideo(t)
                    })
                }
            })
        }
    })
})(jQuery);


function smoothShow() {
    jQuery(".counter-value").each(function() {
        if (jQuery(window).width() > 700) {
            var e = jQuery(this).visible(false);
            if (jQuery(this).hasClass("anim")) {} else if (e) {
                jQuery(this).addClass("anim");
                var t = parseInt(jQuery(this).attr("data-from"));
                var n = parseInt(jQuery(this).attr("data-to"));
                var r = parseInt(jQuery(this).attr("data-speed"));
                jQuery(this).count(t, n, r)
            }
        } else {
            var n = parseInt(jQuery(this).attr("data-to"));
            jQuery(this).html(n)
        }
    });
    jQuery(".sr-animation").each(function() {
        if (jQuery(window).width() > 700) {
            var e = jQuery(this).visible(true);
            var t = jQuery(this).attr("data-delay");
            if (!t) {
                t = 0
            }
            if (jQuery(this).hasClass("animated")) {} else if (e) {
                jQuery(this).delay(t).queue(function() {
                    jQuery(this).addClass("animated")
                })
            }
        } else {
            jQuery(this).addClass("animated")
        }
    });
    jQuery(".skill").each(function() {
        var e = jQuery(this).visible(true);
        var t = jQuery(this).find(".skill-bar .skill-active ").attr("data-perc");
        if (jQuery(this).hasClass("anim")) {} else if (e) {
            var n = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
            jQuery(this).addClass("anim");
            jQuery(this).find(".skill-bar .skill-active ").animate({
                width: t + "%"
            }, 2e3, "easeInOutQuart", function() {
                jQuery(this).find(".tooltip").delay(n).animate({
                    top: "-28px",
                    opacity: 1
                }, 500)
            }).css("overflow", "visible")
        }
    })
}

function flexInit(e) {
    if (jQuery().flexslider) {
        jQuery(e + " .flexslider").flexslider({
            animation: "slide",
            slideshowSpeed: 7e3,
            animationDuration: 1e3,
            slideshow: false,
            directionNav: false,
            controlNav: true,
            smoothHeight: true,
            touch: true,
            video: true,
            randomize: false
        })
    }
}
jQuery(window).load(function(e) {
    function i() {
        var e = jQuery("#menu-responsive").width() + 10;
        jQuery("#menu-responsive").animate({
            right: "-" + e + "px"
        }, 800, "easeInOutQuart")
    }
    jQuery("#page-loader .page-loader-inner").delay(1e3).fadeOut(500, function() {
        jQuery("#page-loader").fadeOut(500)
    });
    flexInit("body");
    if (jQuery().isotope) {
        jQuery(".masonry").each(function() {
            var e = jQuery(this);
            e.imagesLoaded(function() {
                e.isotope({
                    itemSelector: ".masonry-item",
                    transformsEnabled: true
                })
            })
        });
        jQuery(".filter li a").click(function() {
            var e = jQuery(this).parents("ul.filter").data("related-grid");
            jQuery(this).parents("ul.filter").find("li a").removeClass("active");
            jQuery(this).addClass("active");
            var t = jQuery(this).attr("data-option-value");
            jQuery("#" + e).isotope({
                filter: t
            }, function() {});
            return false
        });

        function t() {
            jQuery(".masonry.portfolio-entries").each(function() {
                $container = jQuery(this);
                var e = $container.data("maxitemwidth");
                if (!e) {
                    e = 370
                }
                var t = $container.width();
                var t = t / 110 * 100;
                var n = parseInt($container.children("div").css("marginRight"));
                var r = Math.ceil(t / e);
                var i = (r - 1) * n;
                var s = i / r;
                var o = Math.floor(t / r - s + 1);
                $container.css({
                    width: "110%"
                });
                $container.children("div").css({
                    width: o + "px"
                });
                if ($container.children("div").hasClass("isotope-item")) {
                    $container.isotope("reLayout")
                }
            })
        }
        t();
        jQuery(window).resize(function() {
            t()
        })
    }
    var n = [];
    var r = [];
    jQuery("nav#main-nav li").each(function(e) {
        if (jQuery(this).find("ul").length > 0) {
            var t = jQuery(this);
            jQuery(this).mouseenter(function() {
                if (n[e]) {
                    clearTimeout(n[e]);
                    n[e] = null
                }
                n[e] = setTimeout(function() {
                    jQuery(t).children("ul").fadeIn(200)
                }, 150)
            });
            jQuery(this).mouseleave(function() {
                if (n[e]) {
                    clearTimeout(n[e]);
                    n[e] = null
                }
                n[e] = setTimeout(function() {
                    jQuery(t).children("ul").fadeOut(200)
                }, 150)
            })
        }
    });
    jQuery("nav#main-nav").on("click", "li", function() {
        if (jQuery(window).width() < 1025) {
            if (jQuery(this).find("ul").length > 0) {
                if (jQuery(this).find("ul").css("display") !== "block") {
                    jQuery(this).children("ul").fadeIn(200);
                    return false
                }
            }
        }
    });
    jQuery('<a class="open-responsive-nav" href=""><span></span></a>').appendTo(".header-inner .menu");
    jQuery("body #page-content").prepend('<div id="menu-responsive"><div id="menu-responsive-inner"><a href="" class="close-responsive-nav"><span></span></a><nav id="responsive-nav"><ul></ul></nav></div></div>');
    jQuery("nav#responsive-nav > ul").html(jQuery("nav#main-nav > ul").html());
    jQuery("header").on("click", ".open-responsive-nav", function() {
        var e = jQuery("header").height();
        var t = jQuery("#page-content").height() - e;
        jQuery("#menu-responsive").css({
            height: t + "px",
            top: e + "px"
        });
        if (jQuery("#menu-responsive").css("right") == 0 || jQuery("#menu-responsive").css("right") == "0px") {
            i()
        } else {
            jQuery("#menu-responsive").animate({
                right: "0"
            }, 800, "easeInOutQuart");
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1e3, "easeInOutQuart")
        }
        return false
    });
    jQuery("#page-content").on("click", "#menu-responsive", function() {
        i()
    });
    jQuery(".tabs").each(function(e) {
        jQuery(this).find(".tab-content").removeClass("active");
        var t = jQuery(this).find(".active").attr("href");
        jQuery(this).find("." + t).addClass("active")
    });
    jQuery(".tab-nav").on("click", "a", function() {
        var e = jQuery(this).parent("li").parent("ul").parent("div");
        var t = jQuery(this).attr("href");
        jQuery(e).find(".tab-nav a").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(e).find(".tab-container .tab-content").hide().removeClass("active");
        jQuery(e).find(".tab-container ." + t).fadeIn(500).addClass("active");
        return false
    });
   
  
    
    if (jQuery().fitVids) {
        jQuery("body").fitVids()
    }
    if (jQuery().parallax) {
        jQuery(".parallax-section").parallax()
    }
    if (jQuery().jPlayer && jQuery(".jp-interface").length) {
        jQuery(".jp-interface").each(function() {
            var e = jQuery(this).width();
            var t = e - 175;
            jQuery(this).find(".jp-progress-container").css({
                width: t + "px"
            })
        })
    }
    if (jQuery().revolution) {
        jQuery(".home-slider").revolution({
            startwidth: 1100,
            startheight: 500,
            delay: 1e4,
            onHoverStop: "on",
            navigationType: "none",
            fullWidth: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: "#pseudo-header"
        })
    }
    if (jQuery().bgVideo) {
        setTimeout(function() {
            jQuery(".videobg-section").bgVideo()
        }, 1e3)
    }
    if (jQuery().owlCarousel) {
        jQuery("#portfolio-carousel").owlCarousel({
            navigation: false,
            items: 4,
            itemsCustom: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]
        })
    }
    smoothShow()
});
jQuery(window).scroll(function() {
    smoothShow()
})