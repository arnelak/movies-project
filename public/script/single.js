$(document).ready(function(){
  var url = document.location.search.split("=");
  var decoded = decodeURIComponent(url[1]);

  var movie = '';
  moviesObject.forEach(function(item){
      if(item.title.toLowerCase() == decoded.toLowerCase()) movie = item;
  });

  var movieElement =
  `<div>
  <img src="${movie.image}" />
  <h3>${movie.title}</h3>
  </div>`;

  $("#movies .row").append(movieElement);

  $("#mainImg").attr("src", movie.image);

});
