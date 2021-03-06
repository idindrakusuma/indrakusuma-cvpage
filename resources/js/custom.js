/*=========================================================================
        Preloader
=========================================================================*/
$(window).load(function() {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function(){
    "use strict";
    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    /*=========================================================================
            Portfolio filter
    =========================================================================*/
      if($('#works .item-outer').length > 0){
        var filterizd = $('#works .item-outer').filterizr({
          filter: 1,
          delay: 50,
          delayMode: "progressive",
        });
      }
      $( '.control ul li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, Testimonials, Customers /
    =========================================================================*/
      $(".customer-carousel").owlCarousel({
        items: 6,
        lazyLoad: true,
        dots: false,
      });

      $(".resume-carousel").owlCarousel({
        singleItem:true
      });

      $(".testimonial-carousel").owlCarousel({
        singleItem: true,
        loop: true,
        autoPlay: true
      });

    /*=========================================================================
            Backstretch Background Slider
    =========================================================================*/
    $("#welcome").backstretch([
        "./dist/images/indra-1.JPG",
        "./dist/images/indra-2.JPG",
        "./dist/images/indra-3.JPG",
        // "dist/images/your_pic.jpg" 
    ], {duration: 5000, fade: 1000});

    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height':($(window).height())+'px'});
    $(".header").css({'height':($(window).height())+'px'});

    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
    $('.work-image').magnificPopup({
      type: 'image'
    });

    $('.open-popup-link').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.work-video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 

          patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',

              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

          },

          srcAction: 'iframe_src',
        }
    });

});