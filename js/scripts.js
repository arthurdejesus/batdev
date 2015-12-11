
(function(window, document, $) {
    'use strict';

    $(window).scroll(function(){
        $(".banner-caption").css("opacity", 1 - $(window).scrollTop() / 350);
    });

    //var D = document,
    //    W = window;


    $('.navbar-toggle-menu').click(function() {
        $('.navbar-collapse').addClass('is-open');
        $('body').addClass('is-open');
    });

    $('.close-wrap').click(function() {
        $('.navbar-collapse').removeClass('is-open');
        $('body').removeClass('is-open');
    });


    $(function() {
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'}).addClass('is-shown');
        });

        
        $('.bxslider').bxSlider({
            mode: 'fade'
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

    $('.product-section-item:even .font-img').addClass("animated fadeInLeft slow delay-250");
    $('.product-section-item:odd .font-img').addClass("animated fadeInRight slow delay-250");

    $('.product-section-item:even .btn-learn-more').addClass("animated fadeInLeft slow delay-500");
    $('.product-section-item:odd .btn-learn-more').addClass("animated fadeInRight slow delay-500");

    jQuery('.section-innovation a').hover(function () {
        jQuery(this).parents(".section-innovation").addClass("section-overlay");
    }, function () {
        jQuery(this).parents(".section-innovation").removeClass("section-overlay");
    });

    //design next
    //jQuery('.product-content .btn-reveal-planning').click(function () {
    //    jQuery(this).hide();
    //    jQuery('.view-design').addClass('view-next-transform');
    //    jQuery('.product-section-planning').addClass('product-remove-overlay');
    //});
    //
    //jQuery('.product-content .view-design').click(function () {
    //    jQuery('.btn-reveal-planning').show();
    //    jQuery(this).removeClass('view-next-transform');
    //    jQuery('.product-section-planning').removeClass('product-remove-overlay');
    //});

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
        interval: false
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