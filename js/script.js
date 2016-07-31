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
//      fade: true,
//      autoplay: true,
      prevArrow: '<img class="a" src="/img/arr-left.png">',
      nextArrow: '<img class="b" src="/img/arr-right.png">',
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
        });
	});

$(function(){
    $('#menu').slicknav({
        duration: 300,
        closedSymbol: "&#9660;",
    });
});