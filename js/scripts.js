$(document).ready(function() {
    $("p").click(function() {
      $("#walrus-showing").toggle().fadeIn().slideup();
      $("#walrus-hidden").toggle().fadeOut().slideDown();
    });


  });