$(document).ready(function () {
  var url = document.location.search.split("=");
  var actorName = decodeURIComponent(url[1]);

  /*
    var actors = [
      {
        name: 'Brad pit',
        biography: 'Tako i tako...',
        movies: ['prvi', 'drugi', 'treci']
      },
      {
        name: 'Angelina Joline',
        biography: 'Tako i tako...',
        movies: ['prvi', 'drugi', 'treci']
      }
    ]
  */

  // Pronaci kroz actors.forEach(...) da bude (item.name == actorName) i vratit taj item
  // u njemu ces imat tacnog glumca

});
