$(document).ready(function(){
  $(".searchIcon").on('click',function () {
      $("#myText").fadeToggle();
  });

  $(".navCollapse").on('click', function () {
      $("header").toggleClass("active");
  });

    $(".leftArrow").hover(function () {
        $(".return .back").fadeOut();
        $(this).mouseenter(function () {
            $(".return .back").fadeIn();
        });

    });

});

