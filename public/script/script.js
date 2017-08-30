$(document).ready(function () {

var list = [];
list = moviesObject.map(function (item){

    var newli =`<li class="movie">
                        <div class="wrap">
                            <img class="img-responsive" src="${item.image}">
                            <div class="hiddenDetails">
                            <div class="details">
                                <h3>Rating:</h3>
                                <h3 data-genre="${item.genre.toLowerCase()}" class="genre">${item.genre}</h3>
                                <div class="starIcons">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                </div>
                                <button class="btn btn-default detailsBtn"><a href="${item.url}"><b>View More</b></a></button>
                            </div>
                        </div>
                        <h5><b>${item.title}</b></h5>
                        <p>${item.year}</p>
                    </li>`;
    return newli;
});

$(".movieList").append(list);


if(document.location.search){
  var genre = document.location.search.split("=");
  $('.genre').not(`[data-genre*="${genre[1]}"]`).closest(".movie").hide();
}

});
