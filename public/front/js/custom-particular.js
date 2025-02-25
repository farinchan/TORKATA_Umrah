/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */


// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#ffffff',
    lineColor: '#ffffff'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
