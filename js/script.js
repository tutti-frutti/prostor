//$('.main-nav__toogle').click(function(){
  // $('.main-nav').slideToggle(); 
//    $('.main-nav__items-left').slideToggle();
//    $('.main-nav__items-right').slideToggle();
//});

$(document).ready(function(){
  $('.single-slide').slick({
      dots: true,
//      accessibility: true,
      arrows: true,
      slidesToShow: 1, // кол-во слайдов для показа
//      fade: true, // не перелистывается, а через fade
//      autoplay: true,
      prevArrow: '<img class="a" src="/img/arr-left.png">',
      nextArrow: '<img class="b" src="/img/arr-right.png">',
//      cssEase: 'easeInBack',
//      centerMode: true, //уменьшает картинку, ставит в центре
  });
});
//
//$(document).ready(function() {
//		$(".fancybox").fancybox();
//	});

$(document).ready(function() {   
		$('.fancybox')
            .attr('rel', 'gallery')
            .fancybox({
                padding : 3,
                width   : '320',
                closeBtn: false,
                fitToView: false,
        });
	});

$(function(){
    $('#menu').slicknav({
        duration: 300,
        closedSymbol: "&#9660;",
    });
});

$(window).scroll(function() { // кнопка наверх
    if ($(this).scrollTop() > 100) {
      if ($('#upbutton').is(':hidden')) {
        $('#upbutton').css({
          opacity : 1
        }).fadeIn('slow');
      }
    } else {
      $('#upbutton').stop(true, false).fadeOut('fast');
    }
  });
  $('#upbutton').click(function() {
    $('html, body').stop().animate({
      scrollTop : 0
    }, 300);
  });

$(document).ready(function() {   // скрипт для pop-up
	$(".various").fancybox({
		maxWidth	: 388,
		maxHeight	: 550,
		fitToView	: true, //адаптирует pop-up к размеру окна
//		width		: '70%',
//		height		: '70%',
        autoHeight  : true,
//      autoWidth   : true,
//		autoSize	: true,
        padding     : 3,    //размер белого поля вокруг фото
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
});
