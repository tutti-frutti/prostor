$('.main-nav__toogle').click(function(){
   $('.main-nav').slideToggle(); 
//    $('.main-nav__items-left').slideToggle();
//    $('.main-nav__items-right').slideToggle();
});

$(document).ready(function(){
  $('.single-slide').slick({
      dots: true,
//      accessibility: true,
      arrows: true,
//      centerMode: true, //уменьшает картинку, ставит в центре
  });
});