// JavaScript for scroll indicator
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-indicator').fadeOut();
      } else {
        $('.scroll-indicator').fadeIn();
      }
    });
    $('.scroll-indicator i').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });