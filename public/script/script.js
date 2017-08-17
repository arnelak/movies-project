$(document).ready(function () {

    $(".searchIcon").on('click',function () {
        $("#myText").fadeToggle();
    });

   // var docHeight = $(document).innerHeight();
   // $(".backImg").css("height",docHeight+"px");


    $(".navCollapse").on('click', function () {
        $("header").toggleClass("active");
    });


var moviesObject = [
    {
        title:'Star Trek',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMDkwNzIwOF5BMl5BanBnXkFtZTcwNDU4ODUzOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Action',
        year: 2013
    },
    {
        title:'Kung Fu Panda',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyOTQ5NDQyNV5BMl5BanBnXkFtZTcwMzcyNDUwMg@@._V1_.jpg",
        genre: 'Animation',
        year: 2008
    },
    {
        title:'Son of a Gun',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGI5OWQ2YzctMTcxMS00MWMxLTk1MDQtNmU1ODMyMjkyNmRiL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,692,1000_AL_.jpg",
        genre:'Action',
        year:2014
    },
    {
        title:'Mr.Right',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOTcxNjUyOTMwOV5BMl5BanBnXkFtZTgwMzUxMDk4NzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Comedy',
        year:2015
    },
    {
        title:'The Finest Hours',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYTNlODFjYjctYWYyOS00Mjk4LWFkYWUtMjEyM2Y1MjM2NGM2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,699,1000_AL_.jpg",
        genre:'Drama',
        year:2015
    },
    {
        title:"Everybody's fine",
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyMTM3NzQ1MDReQTJeQWpwZ15BbWU3MDk5MTAyOTI@._V1_.jpg",
        genre:'Adventure',
        year:2009
    },
    {
        title:'Wonder Woman',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg",
        genre:'Adventure',
        year:2017
    },
    {
        title:'The kid',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMzk2NTE5NF5BMl5BanBnXkFtZTcwMTcyOTAwMQ@@._V1_.jpg",
        genre:'Comedy',
        year:2000
    },
    {
        title:'Dunkirk',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2017
    },
    {
        title:'Baby Driver',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Action',
        year:2017
    },
    {
        title:'The Boss Baby',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_SY1000_CR0,0,685,1000_AL_.jpg",
        genre:'Animation',
        year:2017
    },
    {
        title:'Deadpool',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjQ5Mzc3M15BMl5BanBnXkFtZTgwNDExMjE3NzE@._V1_SY1000_SX686_AL_.jpg",
        genre:'Action',
        year:2016
    },
    {
        title:'Spirited away',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZTk4YjVlZTQtYmFmOC00MjcxLWJiMWEtNzNhOGJmN2NkY2U3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        genre:'Animation',
        year:2001
    },
    {
        title:'The pianist',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,724,1000_AL_.jpg",
        genre:'Drama',
        year:2002
    },
    {
        title:'The Dark Knight',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        genre:'Action',
        year:2008
    },
    {
        title:'The Godfather',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxOTdjMDMtMWY1MC00MjkxLTgxYTMtYTM1MjU5ZTJlNTZjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,706,1000_AL_.jpg",
        genre:'Drama',
        year:1972
    },
    {
        title:'Inception',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NzE0OTQxMV5BMl5BanBnXkFtZTcwOTE0MjYwMw@@._V1_.jpg",
        genre:'Action',
        year:2010
    },
    {
        title:'Life is Beautiful',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOWY1OWI1MmUtNjAxYy00MmRiLWI4YWItYjNjMmU4Yzc3M2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Comedy',
        year:1997
    },
    {
        title:'Room',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY1000_SX675_AL_.jpg",
        genre:'Drama',
        year:2015
    },
    {
        title:'Dancer in the Dark',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BODI1ZmVkMzAtYzlmZC00ZGUyLWIwY2UtNWExMzAyZTBlY2UyXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
        genre:'Musical',
        year:2000
    },
    {
        title:'Before sunrise',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        genre:'Drama',
        year:1995
    },
    {
        title:'The Cabin in the Woods',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Horror',
        year:2012
    },
    {
        title:"Howl's moving castle",
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMDQzNTFhYzgtYjMwZS00YzQ1LTgxODgtYjFhYTUzMTNmNTIzXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Animation',
        year:2004
    },
    {
        title:'The Wolf of the Wall Street',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Comedy',
        year:2013
    },
    {
        title:'Django unchained',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzODg5MDUyNF5BMl5BanBnXkFtZTcwMTA3NDU2OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2012
    },
    {
        title:'The Bourne supremacy',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMDFmMmItMWQzYy00MjBiLTg2M2UtM2JiNDRhOWE4NjBhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX676_AL_.jpg",
        genre:'Action',
        year:2004
    },
    {
        title:'Shot Caller',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMGY0YTM3MjItZmExMy00NDgyLThjNzUtZWQ1MzY2NGRmMjZhXkEyXkFqcGdeQXVyMzYyMzE1NjA@._V1_.jpg",
        genre:'Thriller',
        year:2017
    },
    {
        title:'The Flowers of War',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3OTUzODA3Ml5BMl5BanBnXkFtZTcwNDk5NTUyNw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        genre:'Drama',
        year:2011
    },
    {
        title:'Black Swan',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Thriller',
        year:2010
    },
    {
        title:'The Hateful Eight',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2015
    },
    {
        title:'The Martian',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMjI2NzM2MF5BMl5BanBnXkFtZTgwNDkyNTI5NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Adventure',
        year:2015
    },
    {
        title:'Mad Max: Fury Road',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMTEzNjgxM15BMl5BanBnXkFtZTgwMTI4NDQzNTE@._V1_SY1000_CR0,0,659,1000_AL_.jpg",
        genre:'Action',
        year:2015
    },
    {
        title:'Passengers',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5ODU3MDUyMV5BMl5BanBnXkFtZTgwODg0NTE1MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Adventure, drama, romance',
        year:2016
    },
    {
        title:'Get Out',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTE2Nzg1NjkzNV5BMl5BanBnXkFtZTgwOTgyODMyMTI@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
        genre:'Horror',
        year:2017
    },
    {
        title:'Pocahontas',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMzc4MDJlOWMtZjVmYi00N2VkLWJjOTMtOTg5MmRmMzczYTIxXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Animation',
        year:1995
    },
    {
        title:'The Prestige',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
        genre:'Drama',
        year:2005
    },
    {
        title:'The Notebook',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
        genre:'Drama',
        year:2004
    },
    {
        title:'WALL-E',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYWNmNDQwZWEtNGZmNS00MGIyLThhZjYtNjlkZDZmMGI1ZGE5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY999_CR0,0,695,999_AL_.jpg",
        genre:'Animation',
        year:2008
    },
    {
        title:'The Big Sick',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY1000_SX675_AL_.jpg",
        genre:'Comedy',
        year:2017
    },
    {
        title:'The Mist',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_.jpg",
        genre:'Horror',
        year:2007
    }
];

var list = [];
list = moviesObject.map(function (item){

    var newli =`<li class="movie">
                        <div class="wrap">
                            <img class="img-responsive" src="${item.image}">
                            <div class="hiddenDetails">
                                <h3>Rating:</h3>
                                <h3>${item.genre}</h3>
                                <div class="starIcons">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <button class="btn btn-default detailsBtn"><a href="#"></a><b>View More</b></button>
                            </div>
                        </div>
                        <h5><b>${item.title}</b></h5>
                        <p>${item.year}</p>
                    </li>`;
    return newli;
});
$(".movieList").append(list);

});