
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
            onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                $('.active-slide').removeClass('active-slide');
                $('.bxslider > li').eq(currentSlideHtmlObject).addClass('active-slide')
            },
            onSliderLoad: function () {
                $('.bxslider > li').eq(1).addClass('active-slide')
            },
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

//Progress bar
$(document).ready(function(){
    var barInterval = '',
        percent = 0,
        bar = $('.transition-timer-carousel-progress-bar'),
        crsl = $('#carousel-example-generic');
    function progressBarCarousel() {
        bar.css({width:percent+'%'});
        percent = percent + 0.5;
        if (Math.ceil(percent) == 50 || Math.ceil(percent) > 100) {
            crsl.carousel('next');
            if (Math.ceil(percent) > 100) {
                percent = 0;
                clearInterval(barInterval);
            }
        }
    }
    crsl.carousel({
        interval: false,
        pause: true
    }).on('slid.bs.carousel', function () {
        if (Math.ceil(percent) == 0) {
            crsl.carousel('next')
            bar.css({width:percent+'%'});
            barInterval = setInterval(progressBarCarousel, 30);
        }
    });
    barInterval = setInterval(progressBarCarousel, 30);
});