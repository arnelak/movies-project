$(document).ready(function(){
  var url = document.location.search.split("=");
  var decoded = decodeURIComponent(url[1]);

  var movie = '';
  moviesObject.forEach(function(item){
      if(item.title.toLowerCase() == decoded.toLowerCase()) movie = item;
  });

  var movieElement =
      `<div class="row">
   <img id="poster" src="${movie.image}" />
   <div class="col-xs-9 col-sm-9 col-md-9 singleDescription">
    <h1>${movie.title}</h1>
    <h2>(${movie.year})</h2>
    <p>${movie.description}</p>
    <h4>Actors</h4>
    <p>Actors list</p>
    </div>
  </div>`;

  $("#movies .row").append(movieElement);

  $("#mainImg").attr("src", movie.image);

});
