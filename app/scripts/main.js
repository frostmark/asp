$(document).ready(function() {
  $('.menu_btn').click(function() {
    if ($('#nav-icon').attr('class') === 'open') {
      $('.menu_overlay').fadeOut();
    } else {
      $('.menu_overlay').fadeIn();
    }
    $('#nav-icon').toggleClass('open');
  });

  $('.parent_item').click(function(e) {
      if (e.target.className !== 'parent_item') return false;

      var inner = $('.inner_menu');

      if (inner.attr('class').indexOf('open') !== -1) {
        inner.slideUp().toggleClass('open')
      } else {
        inner.slideDown().toggleClass('open');
      }
    });


    $('#main-slider').owlCarousel({
      navigationText: [
      '<span class=\'control-wrapper\'><img class=\'slider-controls\' src=\'images/arrow_left.png\'></span>',
      '<span  class=\'control-wrapper\'><img class=\'slider-controls\' src=\'images/arrow_right.png\'></span>'],
      navigation : true,
      dots: true,
      singleItem:true
    });

});
