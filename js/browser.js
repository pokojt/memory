

$(document).ready(function(){
  var clickCount = 0;
  $("i").hide();

  $(".card").click(function(){

    $(this).children('i').toggle();
    $(this).children('i').toggleClass('clicked');
    clickCount += 1;

    console.log(clickCount);

    if (clickCount === 2) {
      if ($(".clicked").hasClass("fa-car")) {
        console.log("has class fa-car");
          $(".clicked").addClass("matched");
      } else {
        $("i").hide();
      }
      clickCount = 0;
      $("i").removeClass("clicked");
    }
  });
});
