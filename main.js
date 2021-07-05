// ハンバーガーメニュー
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

  $(function () {
  $('.ac-parent').on('click', function () {
  $(this).next().slideToggle();
});
});

// スライダー
$(function(){
    $('#rec-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        centerPadding: '100px',
        centerMode: true,
            responsive: [
                {
                breakpoint: 769,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                centerMode: true,
                }
            }
        ]
    });
});

AOS.init({
  offset: 120,
  delay: 100,
  duration: 300,
  easing: 'ease-in',
  once: true,
});

// トップに戻るボタン
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});


// ローディング画面
$(window).on('load',function(){
  // $("#js-loader").fadeOut(); これだけでOK

  // codepen用
  function loaderClose(){
    $("#js-loader").fadeOut();
  }
  setTimeout(loaderClose, 1000);
  
});