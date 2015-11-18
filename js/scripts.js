
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
    });

    $(function() {
        $(".scroll").click(function(e) {
            e.preventDefault();
            $.scrollify("move",$(this).attr("href"));
        });
    });

})(window, document, jQuery);

$('.grid-product-list .grid-we-do-item:even .product-content').addClass("text-left");
$('.grid-product-list .grid-we-do-item:odd .product-content').addClass("text-right");

