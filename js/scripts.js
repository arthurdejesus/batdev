
(function(window, document, $) {
    'use strict';

    //var D = document,
    //    W = window;


    $(function() {
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'}).addClass('is-shown');
        });

        $('.bxslider').bxSlider({
            auto: true,
            autoControls: false,
            speed: 1000,
            mode: 'fade',
            randomStart: true,
            pager: false
        });

        $(document).ready(function(){
            var nav = $('.navbar-menu');

            $(window).scroll(function () {
                if ($(this).scrollTop() > 62) {
                    nav.addClass("navbar-fixed-top");
                } else {
                    nav.removeClass("navbar-fixed-top");
                }
            });
        });

    });

    $(function() {
        $('a[href=#goto-down]').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $('.grid-product-list .grid-we-do-item:odd .product-content').addClass("text--right");

    $(".scroll").click(function(e) {
        e.preventDefault();
        $.scrollify.move($(this).attr("href"));
    });

    $(".process-list li a").on('click', function(e){
        $(".process-list .active").removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });


    $( 'document' ).ready(function() {
        // Timeout for crypto text
        setTimeout( function() {
            $( '.text-effects' ).fadeIn( 'slow' );
            SPY.text('text-math');
        }, 800);
    });





})(window, document, jQuery);


var bodyEl = $("body");
$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    $(".our-process-holder section").each(function() {
        var el = $(this),
            className = el.attr("data-section-name");
        if (el.offset().top < scrollTop) {
            var lastClass = bodyEl.attr("class").split(' ').pop();
            bodyEl.removeClass(lastClass);
            bodyEl.addClass(className);
        }
        else {
            bodyEl.removeClass(className);
            if(!bodyEl.attr("class")) {
                bodyEl.addClass("is-shown");
            }
        }
    });
});

var SPY = function() {
    function e(a, d, b) {
        var c, f, g, h;
        b == a.length ? k.animationComplete = !0 : (g = d.textContent, h = Math.floor(21 * Math.random() + 5), c = 32 === a[b] ? 32 : a[b] - h, f = setInterval(function() {
            d.textContent = g + String.fromCharCode(c);
            c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
                e(a, d, b);
            }, 10)) : c++;
        }, 5));
    }
    var k = {};
    return k = {animationComplete:!1, text:function(a) {
        this.animationComplete = !1;
        a = document.getElementById(a);
        for (var d = a.textContent, b = [], c = 0;c < d.length;c++) {
            b.push(d.charCodeAt(c));
        }
        a.textContent = "";
        e(b, a, 0);
    }};
}();

$( 'document' ).ready(function() {
    // Timeout for crypto text
    setTimeout( function() {
        $( '.text-effects' ).fadeIn( 'slow' );
        SPY.text('text-math');
    }, 800);
});

jQuery('.section-innovation a').hover(function () {
    jQuery(this).parents(".section-innovation").addClass("section-overlay");
}, function () {
    jQuery(this).parents(".section-innovation").removeClass("section-overlay");
});

$(document).ready(function(){
    var percent = 0, bar = $('.transition-timer-carousel-progress-bar'), crsl = $('#carousel-example-generic');
    function progressBarCarousel() {
        bar.css({width:percent+'%'});
        percent = percent +0.5;
        if (percent > 100) {
            percent = 0;
            crsl.carousel('next');
        }
    }
    crsl.carousel({
        interval: false,
        pause: true
    }).on('slid.bs.carousel', function () {percent=0;});var barInterval = setInterval(progressBarCarousel, 30);
    crsl.hover(
        function(){
            clearInterval(barInterval);
        },
        function(){
            barInterval = setInterval(progressBarCarousel, 30);
        })
});