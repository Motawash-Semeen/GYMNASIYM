
$('.banner_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
  });

  new VenoBox({
    selector: '.my-video-links',
});
$('.testi_main').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  dots: true,
});
$('.sponser_main').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:true,
  dots: false,
});

jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 100,
      time: 3000,
  });
});




$(function () {
  $('ul.tabs').pixiefyTabs();
})


