$(document).ready(function(){
  $(".searchIcon").on('click',function () {
      $("#myText").fadeToggle();
  });

  $(".navCollapse").on('click', function () {
      $("header").toggleClass("active");
  });

    $(".leftArrow").hover(function () {
        $(".return .homePage").show().fadeOut(1000);

    });

});

