
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
                $('.bxslider > li').eq(currentSlideHtmlObject).addClass('active-slide');
            },
            onSliderLoad: function () {
                $('.bxslider > li').eq(1).addClass('active-slide');
            },
            auto: true,
            autoControls: false,
            speed: 1000,
            mode: 'fade',
            randomStart: true,
            pager: false
        });

        $(document).ready(function(){
            var nav = $('.header');

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
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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

    $(function() {
        $('a[href=#go-down]').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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

    $('.product-section-item:even .grid-product-title').addClass("animated fadeInLeft slow delay-250");
    $('.product-section-item:odd .grid-product-title').addClass("animated fadeInRight slow delay-250");

    $('.product-section-item:even .btn-learn-more').addClass("animated fadeInLeft slow delay-500");
    $('.product-section-item:odd .btn-learn-more').addClass("animated fadeInRight slow delay-500");

    jQuery('.section-innovation a').hover(function () {
        jQuery(this).parents(".section-innovation").addClass("section-overlay");
    }, function () {
        jQuery(this).parents(".section-innovation").removeClass("section-overlay");
    });

    jQuery('.grid-wrap-black .grid-product-type-green .transparent-btn').hover(function () {
        jQuery('.grid-product-wrap-green').addClass("wrap-overlay");
    }, function () {
        jQuery('.grid-product-wrap-green').removeClass("wrap-overlay");
    });

    jQuery('.grid-wrap-black .grid-product-type-red .transparent-btn').hover(function () {
        jQuery('.grid-product-wrap-red').addClass("wrap-overlay");
    }, function () {
        jQuery('.grid-product-wrap-red').removeClass("wrap-overlay");
    });

    jQuery('.grid-wrap-black .grid-product-type-blue .transparent-btn').hover(function () {
        jQuery('.grid-product-wrap-blue').addClass("wrap-overlay");
    }, function () {
        jQuery('.grid-product-wrap-blue').removeClass("wrap-overlay");
    });

    jQuery('.carousel-indicators li:first-child').click(function () {
        jQuery('.transition-border').css('left', '0');
    });

    jQuery('.carousel-indicators li:nth-child(2)').click(function () {
        jQuery('.transition-border').css('left', '49%');
    });

    jQuery('.carousel-indicators li:nth-child(3)').click(function () {
        jQuery('.transition-border').css('left', '98%');
    });

    $('#carousel-example-generic').carousel({
        interval: 4000
    });

    $('#carousel-example-generic').on('slid.bs.carousel', function () {
        var active = $(this).find('.carousel-indicators .active');
        if(active.index() === 0) {
            $('.transition-border').css('left', '0');
        }
        if(active.index() === 1) {
            $('.transition-border').css('left', '49%');
        }
        if(active.index() === 2) {
            $('.transition-border').css('left', '98%');
        }
    });

})(window, document, jQuery);