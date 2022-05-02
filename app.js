var $ = require("./lib/jquery");

// Change text color while hovering
$(function() {
    $('#nav-container li').hover(function() {
        $(this).children().css('color', 'white');
    }, function() {
      // on mouseout, reset
        $(this).children().css('color', '#1a1d1c');
    });
  });

// Fix chrome bug of auto transition after page load
$(window).load(function() {
    $("body").removeClass("preload");
  });

if (module.hot) {
  module.hot.accept()
}