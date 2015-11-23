
(function(window, document, $) {
    'use strict';

    //var D = document,
    //    W = window;

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
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

            $(window).scroll(function() {
            if ($(this).scrollTop() > 1){
                $('.header').addClass('navbar-animated');
            }
            else{
                $('.header').removeClass('navbar-animated');
            }
        });


})(window, document, jQuery);

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