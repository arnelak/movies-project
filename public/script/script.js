$(document).ready(function () {

    $(".searchIcon").on('click',function () {
        $("#myText").fadeToggle();
    });

   // var docHeight = $(document).innerHeight();
   // $(".backImg").css("height",docHeight+"px");


    $(".navCollapse").on('click', function () {
        $("header").toggleClass("active");
    });
});