$(document).ready(function(){
  var url = document.location.search.split("=");
  var decoded = decodeURIComponent(url[1]);

  var movie = '';
  moviesObject.forEach(function(item){
      if(item.title.toLowerCase() == decoded.toLowerCase()) movie = item;
  });

  var movieElement =
      `<div class="col-xs-12 col-sm-5">
          <img class="img-responsive" id="poster" src="${movie.image}" />
      </div>
      <div class="col-xs-12 col-sm-7">
        <div class="singleDescription">
          <h1>${movie.title}</h1>
          <h2>(${movie.year})</h2>
          <p>${movie.description}</p>
          <h4>Actors:</h4>
          <p>${movie.actors}</p>
        </div>
      </div>`;

  $("#movies .row").append(movieElement);

  $("#mainImg").attr("src", movie.image);


});