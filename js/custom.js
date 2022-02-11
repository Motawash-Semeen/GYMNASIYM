
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
$('.slick-next').html('<i class="fas fa-chevron-right" aria-hidden="true" ></i>');
  
$('.slick-prev').html('<i class="fas fa-chevron-left" aria-hidden="true" ></i>');



$(function () {
  $('ul.tabs').pixiefyTabs();
})
$(document).ready(function() {
  $('.stickyMenu').smoothMenu({
    stickyMenu: true,
    slidingLine: true
  });
});


/* SCROLL TO TOP START */

$(document).ready(function() {

  $.apScrollTop({
      'onInit': function(evt) {
          console.log('apScrollTop: init');
      }
  });

  // Add event listeners
  $.apScrollTop().on('apstInit', function(evt) {
      console.log('apScrollTop: init');
  });

  $.apScrollTop().on('apstToggle', function(evt, details) {
      console.log('apScrollTop: toggle / is visible: ' + details.visible);
  });

  $.apScrollTop().on('apstCssClassesUpdated', function(evt) {
      console.log('apScrollTop: cssClassesUpdated');
  });

  $.apScrollTop().on('apstPositionUpdated', function(evt) {
      console.log('apScrollTop: positionUpdated');
  });

  $.apScrollTop().on('apstEnabled', function(evt) {
      console.log('apScrollTop: enabled');
  });

  $.apScrollTop().on('apstDisabled', function(evt) {
      console.log('apScrollTop: disabled');
  });

  $.apScrollTop().on('apstBeforeScrollTo', function(evt, details) {
      console.log('apScrollTop: beforeScrollTo / position: ' + details.position + ', speed: ' + 10000);

      // You can return a single number here, which means that to this position
      // browser window scolls to
      /*
      return 100;
      */

      // .. or you can return an object, containing position and speed:
      /*
      return {
          position: 100,
          speed: 100
      };
      */

      // .. or do not return anything, so the default values are used to scroll
  });

  $.apScrollTop().on('apstScrolledTo', function(evt, details) {
      console.log('apScrollTop: scrolledTo / position: ' + details.position);
  });

  $.apScrollTop().on('apstDestroy', function(evt, details) {
      console.log('apScrollTop: destroy');
  });

});
/* SCROLL TO TOP END */