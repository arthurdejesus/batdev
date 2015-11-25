
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

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function () {
        $('.section-animate').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('section-animation');
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

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

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


