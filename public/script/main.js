$(document).ready(function(){
  $(".searchIcon").on('click',function () {
      $("#myText").fadeToggle();
  });

  $(".navCollapse").on('click', function () {
      $("header").toggleClass("active");
  });

   /* $(".backRow .return").hover(function () {
        $(".return .back").hide();
        $(this).mouseenter(function () {
            $(".return .back").show();
        });

    });*/

});

