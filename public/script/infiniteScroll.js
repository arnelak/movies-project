$(document).ready(function(){
  var counter = 1;
  $(".movieList li:gt("+ (counter * 20 - 1) +")").hide();
  $(".moviesWrap").scroll(function(){
    var docHeight = $("#movies").height() - 700;
    if($(".moviesWrap").scrollTop() >= docHeight){
      counter += 1;
      $(".loader").show();
      setTimeout(function() {
        $(".loader").hide();
        $(".movieList li:lt("+ (counter * 20 - 1) +")").show();
        $(".movieList li:gt("+ (counter * 20 - 1) +")").hide();
      },2000);
    }
  });
});
