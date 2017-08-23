var moviesObject = [
    {
        title: 'Star Trek',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMDkwNzIwOF5BMl5BanBnXkFtZTcwNDU4ODUzOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre: 'Action',
        year: 2013,
        url: 'single.html?movie=star%20trek',
        description: 'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
        actors: 'Chris Pine, Zachary Quinto, Zoe Saldana',
        gallery: [
          'http://www.treknews.net/wp-content/uploads/2013/04/win-tickets-star-trek-into-darkness-hollywood-premiere.jpg',
          'http://www.startrek.com/uploads/assets/db_articles/68dd0aa20ab61ed2e70d9387044cdafd02a8801d.jpg',
          'http://familygeekdom.com/wp-content/uploads/bfi_thumb/2013-0081-307rq81g8okwmo8s9ezjm2.jpg',
          'http://www.treknews.net/wp-content/uploads/2013/03/alternate-star-trek-into-darkness-teaser-trailer.jpg'
        ]
    },
    {
        title:'Kung Fu Panda',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyOTQ5NDQyNV5BMl5BanBnXkFtZTcwMzcyNDUwMg@@._V1_.jpg",
        genre: 'Animation',
        year: 2008,
        url: 'single.html?movie=kung%20fu%20panda',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The Dragon Warrior has to clash against the savage Tai Lung as China\'s fate hangs in the balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a tyro in martial arts.',
        actors:'Jack Black, Ian McShane, Angelina Jolie... ',
        gallery: [
          'http://www.tvovermind.com/wp-content/uploads/2017/06/Kung-Fu-Panda-3-Furious-Five-Po.jpg',
          'http://www.cartoonbrew.com/wp-content/uploads/2015/01/kungfupanda3-1280x600.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/29/4e/2b/294e2b32c858c72072faf839bd6f8ec6.jpg'
        ]
    },
    {
        title:'Son of a Gun',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGI5OWQ2YzctMTcxMS00MWMxLTk1MDQtNmU1ODMyMjkyNmRiL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,692,1000_AL_.jpg",
        genre:'Action',
        year:2014,
        url: 'single.html?movie=son%20of%20a%20gun',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.JR busts out of prison with Brendan Lynch, Australia\'s most notorious criminal, and joins Lynch\'s gang for a gold heist that soon pits the two men against one another.',
        actors:'Ewan McGregor, Brenton Thwaites, Alicia Vikander... ',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzdmOWQ4NWYtNzQ2Ni00MjliLTllYWYtZTBhYzdkYTM4ODIxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,692,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NTcyMjQzNl5BMl5BanBnXkFtZTgwMDM2Mjk0MzE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjgxOTQ3Nl5BMl5BanBnXkFtZTgwODI2Mjk0MzE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM0ODE1OTc3NF5BMl5BanBnXkFtZTgwOTYzMTg0MzE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg'
        ]
    },
    {
        title:'Mr.Right',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOTcxNjUyOTMwOV5BMl5BanBnXkFtZTgwMzUxMDk4NzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Comedy',
        year:2015,
        url: 'single.html?movie=Mr.right',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A girl falls for the "perfect" guy, who happens to have a very fatal flaw: he\'s a hitman on the run from the crime cartels who employ him.',
        actors:' Anna Kendrick, Sam Rockwell, Tim Roth...',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxNjEzNDI0M15BMl5BanBnXkFtZTgwMTA3MTQ3NjE@._V1_SY1000_CR0,0,1749,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzY2NTQ2M15BMl5BanBnXkFtZTgwOTkyMDAyODE@._V1_SX1499_CR0,0,1499,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjMyMTg4NTI0M15BMl5BanBnXkFtZTgwNDU2MzAyODE@._V1_SY1000_SX1500_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3MTk0Mzg4Nl5BMl5BanBnXkFtZTgwMTU2MzAyODE@._V1_SY1000_SX1500_AL_.jpg'
        ]
    },
    {
        title:'The Finest Hours',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYTNlODFjYjctYWYyOS00Mjk4LWFkYWUtMjEyM2Y1MjM2NGM2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,699,1000_AL_.jpg",
        genre:'Drama',
        year:2015,
        url: 'single.html?movie=the%20finest%20hours',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The Coast Guard makes a daring rescue attempt off the coast of Cape Cod after a pair of oil tankers are destroyed during a blizzard in 1952.',
        actors:' Chris Pine, Casey Affleck, Ben Foster..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzM4MzczNF5BMl5BanBnXkFtZTgwMjQyNDg1NjE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwMTQ2NzUwMTZeQTJeQWpwZ15BbWU4MDE0MjQ4NTYx._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwOTAwNzIwOV5BMl5BanBnXkFtZTgwMjUyNDg1NjE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYzk0MTk3YjItNGY2ZS00N2E0LTkzZWMtOGM4MzBlMzhhNTY4XkEyXkFqcGdeQXVyNjE3NjA1MzQ@._V1_.jpg'
        ]
    },
    {
        title:"Everybody's fine",
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyMTM3NzQ1MDReQTJeQWpwZ15BbWU3MDk5MTAyOTI@._V1_.jpg",
        genre:'Adventure',
        year:2009,
        url: 'single.html?movie=everybody%27s%20fine',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A widower who realized his only connection to his family was through his wife sets off on an impromptu road trip to reunite with each of his grown children.',
        actors:' Robert De Niro, Kate Beckinsale, Sam Rockwell..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2NTgxNTQ0OF5BMl5BanBnXkFtZTcwMjEyODcwMw@@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTgxMDc4MF5BMl5BanBnXkFtZTcwMjU1OTg5Mg@@._V1_SY1000_CR0,0,1494,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMxMjU5MjY2NF5BMl5BanBnXkFtZTcwMzU1OTg5Mg@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMjA4MzY1MF5BMl5BanBnXkFtZTcwOTU1OTg5Mg@@._V1_SY1000_CR0,0,1494,1000_AL_.jpg'
        ]
    },
    {
        title:'Wonder Woman',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg",
        genre:'Adventure',
        year:2017,
        url: 'single.html?movie=wonder%20woman',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Before she was Wonder Woman, she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war, discovering her full powers and true destiny.',
        actors:'Robert De Niro, Kate Beckinsale, Sam Rockwell..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDY0ZTVlNTEtZTZmOS00NGI0LTg2NTgtZWNhNjE1M2RkYzRkXkEyXkFqcGdeQXVyNjUyODQ4ODU@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYmE0OWJiNmMtNDU4ZC00YzFkLWFiZWMtYjZkODE0OWNiNzNlXkEyXkFqcGdeQXVyNjUyODQ4ODU@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ2NzQ5MTQ5NV5BMl5BanBnXkFtZTgwMjQyOTYzMjI@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZGFhMjYwZDYtMmFhMi00ZDRkLTg4MjctN2U3ZTA3NGFhMGIwXkEyXkFqcGdeQXVyNTY2OTc5OTM@._V1_.jpg'
        ]
    },
    {
        title:'The Kid',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMzk2NTE5NF5BMl5BanBnXkFtZTcwMTcyOTAwMQ@@._V1_.jpg",
        genre:'Comedy',
        year:2000,
        url: 'single.html?movie=the%20kid',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An unhappy and disliked image consultant gets a second shot at life when he is mysteriously confronted by an eight-year-old version of himself.',
        actors:' Bruce Willis, Spencer Breslin, Emily Mortimer..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNDg4MzU3N15BMl5BanBnXkFtZTcwNDg3OTgzNQ@@._V1_SY1000_CR0,0,1675,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZjQyZjAyZmItMjM2Ni00NjZhLTllMjUtMGNjYjRjODIzNzE1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTM0NTY2M15BMl5BanBnXkFtZTgwMDM4NTA4MTE@._V1_SY1000_CR0,0,1523,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjUwNjM1OF5BMl5BanBnXkFtZTcwMDg3OTgzNQ@@._V1_SY1000_CR0,0,1675,1000_AL_.jpg'
        ]
    },
    {
        title:'Dunkirk',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2017,
        url: 'single.html?movie=dunkirk',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Allied soldiers from Belgium, the British Empire and France are surrounded by the German army and evacuated during a fierce battle in World War II.',
        actors:' Fionn Whitehead, Damien Bonnard, Aneurin Barnard ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNjQ3ODcxMl5BMl5BanBnXkFtZTgwNTE5ODE1MjI@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTE0Mjg4MTMwMDZeQTJeQWpwZ15BbWU4MDAwMDQ1ODAy._V1_SY1000_CR0,0,674,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4ODIxOTYxMV5BMl5BanBnXkFtZTgwNDMzNDQ3MjI@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMjQyNDU2Ml5BMl5BanBnXkFtZTgwODgyNDY4MjI@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        ]
    },
    {
        title:'Baby Driver',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Action',
        year:2017,
        url: 'single.html?movie=baby%20driver',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
        actors:' Ansel Elgort, Jon Bernthal, Jon Hamm ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MTIxMDcxNl5BMl5BanBnXkFtZTgwMDczODMyMTI@._V1_SY1000_CR0,0,1611,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzkxMzQ3NTM3MF5BMl5BanBnXkFtZTgwMjE0NzI2MjI@._V1_SY1000_CR0,0,1744,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMzYyOTMyODI1N15BMl5BanBnXkFtZTgwMDE0NzI2MjI@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjA5MjI2OTIzN15BMl5BanBnXkFtZTgwODkzNzI2MjI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg'
        ]
    },
    {
        title:'The Boss Baby',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_SY1000_CR0,0,685,1000_AL_.jpg",
        genre:'Animation',
        year:2017,
        url: 'single.html?movie=the%20boss%20baby',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.',
        actors:'  Alec Baldwin, Steve Buscemi, Jimmy Kimmel ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ3NzlkOWEtYTM3NC00ZDYwLWJmM2EtMTA0MzhkOGFkNjZhXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDM0YjlkZTgtMjNmOS00M2Q0LThlZWItYzVjNDYxY2FiNTYyXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjM2OTBiMWUtMjE4NS00YmZkLTliYTYtMWNkNzVlZWQyZGIxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZjVlYzAzYjctZGUzNy00Mjk5LWI5YjItNDQ3NGJiMzZiYTJiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX1777_CR0,0,1777,736_AL_.jpg'
        ]
    },
    {
        title:'Deadpool',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjQ5Mzc3M15BMl5BanBnXkFtZTgwNDExMjE3NzE@._V1_SY1000_SX686_AL_.jpg",
        genre:'Action',
        year:2016,
        url: 'single.html?movie=deadpool',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
        actors:'Ryan Reynolds, Morena Baccarin, T.J. Miller ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NDE5MzM3NF5BMl5BanBnXkFtZTgwNDQ3Nzk3ODE@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNjMyNzY0NV5BMl5BanBnXkFtZTgwOTg2Nzc5NzE@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM2OTYwNTI3N15BMl5BanBnXkFtZTgwNjU0NTY0NjE@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNjUzMjE2MF5BMl5BanBnXkFtZTgwNzM0NTY0NjE@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExODUxNzcxODdeQTJeQWpwZ15BbWU4MDg2Njc3OTcx._V1_SX1777_CR0,0,1777,998_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2NTEwMTI0NV5BMl5BanBnXkFtZTgwNTc2Nzc5NzE@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMxNmVkYzYtZmUwMC00OWNhLWJiNTQtY2E1ZDAxNDZiMGM2XkEyXkFqcGdeQXVyNTI4MDA1MzI@._V1_.jpg'
        ]
    },
    {
        title:'Spirited away',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZTk4YjVlZTQtYmFmOC00MjcxLWJiMWEtNzNhOGJmN2NkY2U3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        genre:'Animation',
        year:2001,
        url: 'single.html?movie=spirited%20away',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
        actors:' Daveigh Chase, Suzanne Pleshette, Miyu Irino ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYjU5Y2UzYzYtYzYxYy00MTQyLWIwZWYtNjYwMDY5ZWNkMmFjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ0OTcwNDY3MF5BMl5BanBnXkFtZTgwODc1MTMyMDE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZjc4Y2IwODYtY2M0MC00MTBmLTkwODItNDkxZTBkMjRhNjVjXkEyXkFqcGdeQXVyNTc1OTgwMDc@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYTY5YWZhYWEtZDUxMy00YTBjLTgzZjUtZjczOTc5MWRlOWZjXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNTA2OTU4NF5BMl5BanBnXkFtZTcwMjI0MjIyNw@@._V1_SX1777_CR0,0,1777,959_AL_.jpg'
        ]
    },
    {
        title:'The pianist',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,724,1000_AL_.jpg",
        genre:'Drama',
        year:2002,
        url: 'single.html?movie=the%20pianist',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTUzOTYxNF5BMl5BanBnXkFtZTcwNDYxMTIyMw@@._V1_SY1000_CR0,0,1491,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MDQxMzQ3M15BMl5BanBnXkFtZTcwMjYxMTIyMw@@._V1_SY1000_CR0,0,1491,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NzcyMDk0N15BMl5BanBnXkFtZTcwOTYxMTIyMw@@._V1_SY1000_CR0,0,1490,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0MzEwOTM1N15BMl5BanBnXkFtZTcwMDAxMTIyMw@@._V1_SY1000_CR0,0,1545,1000_AL_.jpg'
        ]
    },
    {
        title:'The Dark Knight',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        genre:'Action',
        year:2008,
        url: 'single.html?movie=the%20dark%20knight',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYzNkODM3MTgtYjZlMi00Y2VjLTg5NTktZDg2NTYzOTgxYTg2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY1000_CR0,0,1612,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODg2MzU1OF5BMl5BanBnXkFtZTcwMjYzMTk2Mw@@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzYzMjQyODg1MV5BMl5BanBnXkFtZTcwNDYzMTk2Mw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_SX1777_CR0,0,1777,756_AL_.jpg'
        ]
    },
    {
        title:'The Godfather',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxOTdjMDMtMWY1MC00MjkxLTgxYTMtYTM1MjU5ZTJlNTZjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,706,1000_AL_.jpg",
        genre:'Drama',
        year:1972,
        url: 'single.html?movie=the%20godfather',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMDhkYzhiYjEtMTQwYy00MTdmLTlkOTAtYTk1YmMyYmE5NDVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,657,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZGJhNDk1MzYtNzFiNS00MWEyLWFiNmEtNjVjNjFmODJmZTBkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BY2VmMTdhMTItYWE2YS00MDM0LTlhODUtYWRjNGNlMmFiYzY4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY1000_CR0,0,1486,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODNmMjM3MWQtMjMyNy00ZGY3LTkxZjgtODUzYjA2NDliNjhmXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk3MWYyZjAtY2M5Ni00OTIzLTkxMTItZWEwM2M2Y2E3NDcxXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,1272,1000_AL_.jpg'
        ]

    },
    {
        title:'Inception',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NzE0OTQxMV5BMl5BanBnXkFtZTcwOTE0MjYwMw@@._V1_.jpg",
        genre:'Action',
        year:2010,
        url: 'single.html?movie=inception',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNTQ5NzI5ODUyOV5BMl5BanBnXkFtZTcwMzU0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2MTc4NDk0MV5BMl5BanBnXkFtZTcwNjU0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3ODgyMDc2Nl5BMl5BanBnXkFtZTcwODY0OTk1Mw@@._V1_SX1777_CR0,0,1777,734_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZjZlZjZjYjMtOGZmMC00YTNhLTlkZDItZjA1NWM2YzQ2ZjY5XkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg'
        ]
    },
    {
        title:'Life is Beautiful',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOWY1OWI1MmUtNjAxYy00MmRiLWI4YWItYjNjMmU4Yzc3M2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Comedy',
        year:1997,
        url: 'single.html?movie=life%20is%20beautiful',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BOGUwZDJmYzItY2VlOS00ZjcxLWE0MjQtNGZiZGJiNmM3MmQ5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZTZjYmZhYTQtMGRjZS00N2U4LThjMzctZGMxMzYxMWM4N2Y0XkEyXkFqcGdeQXVyNjM0ODQ2MDk@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwMTA1OTE4OF5BMl5BanBnXkFtZTYwNzM1NDM3._V1_.jpg'
        ]
    },
    {
        title:'Room',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY1000_SX675_AL_.jpg",
        genre:'Drama',
        year:2015,
        url: 'single.html?movie=room',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A young boy is raised within the confines of a small shed.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NTczOTM3MV5BMl5BanBnXkFtZTgwNDQzMzU1NzE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk1MzIyOTEyNV5BMl5BanBnXkFtZTgwNjQzMzU1NzE@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NTczMDg5MV5BMl5BanBnXkFtZTgwOTQ4NTUzNzE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYzcxNjcxODMtMjAzYi00YzYwLWIwM2MtYmMyNTAzNGFiMTY1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX1777_CR0,0,1777,999_AL_.jpg'
        ]
    },
    {
        title:'Dancer in the Dark',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BODI1ZmVkMzAtYzlmZC00ZGUyLWIwY2UtNWExMzAyZTBlY2UyXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
        genre:'Drama',
        year:2000,
        url: 'single.html?movie=dancer%20in%20the%20dark',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An east European girl goes to America with her young son, expecting it to be like a Hollywood film.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTE5OTI0MTA5Ml5BMl5BanBnXkFtZTcwOTEyNjYxMQ@@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODQ4YmE5NzgtNDM3YS00MzdmLWFjM2MtM2YyYzM0MTM3N2MyXkEyXkFqcGdeQXVyNjkxMjM5Nzc@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BOTNlZDA0MmUtZDBmNy00ODI0LTg3NmUtODk2OWRkM2YzMTlhXkEyXkFqcGdeQXVyNjkxMjM5Nzc@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ3NWYzMDYtY2NjNC00MTkxLWI5YTMtZTBhYjZiMWIzY2Q4XkEyXkFqcGdeQXVyNjkxMjM5Nzc@._V1_.jpg'
        ]
    },
    {
        title:'Before sunrise',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        genre:'Drama',
        year:1995,
        url: 'single.html?movie=before%20sunrise',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMzhkYjEwYmUtOWZmNi00OTJhLWE0Y2EtMDQ3ODA5Yzc5OTM0XkEyXkFqcGdeQXVyNjQ2NDA2ODM@._V1_SY1000_CR0,0,1776,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQyODYzNTAxNV5BMl5BanBnXkFtZTgwMDcxNzM2MjI@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2MDQ0MTQ2Ml5BMl5BanBnXkFtZTgwMzcxNzM2MjI@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNTE5NzczOV5BMl5BanBnXkFtZTgwMjcxNzM2MjI@._V1_.jpg'
        ]
    },
    {
        title:'The Cabin in the Woods',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Horror',
        year:2012,
        url: 'single.html?movie=the%20cabin%20in%20the%20woods',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwODU0MzQ3NzVeQTJeQWpwZ15BbWU3MDA4NDAzMTc@._V1._CR9,133.89999389648438,1910,811_SX1777_CR0,0,1777,754_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNjQ4NTQ4MF5BMl5BanBnXkFtZTcwNzE0NzE1Nw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNTViNDRhMTUtMDA4Ni00MGQxLWExNDEtMzQ5ZDAyOTYzNWRlXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNTM2YzItOWJjMC00ZGMxLWIzOGMtZTEwODA5ODFmYzY0XkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SY1000_SX1500_AL_.jpg'
        ]
    },
    {
        title:"Howl's moving castle",
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMDQzNTFhYzgtYjMwZS00YzQ1LTgxODgtYjFhYTUzMTNmNTIzXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Animation',
        year:2004,
        url: 'single.html?movie=howl%27s%20moving%20castle',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZTRhY2QwM2UtNWRlNy00ZWQwLTg3MjktZThmNjQ3NTdjN2IxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,716,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk0ZmFkNDEtOTk2Ni00Nzk1LWI4ZTYtMjU0NTUzZjBmMGE4XkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjgxNjYyOV5BMl5BanBnXkFtZTcwNDk1NzEyNw@@._V1_SX1777_CR0,0,1777,961_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDQwNDk1ODkzMl5BMl5BanBnXkFtZTcwMDk1NzEyNw@@._V1_SX1777_CR0,0,1777,960_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3NzI5MTg2Nl5BMl5BanBnXkFtZTcwMjk1NzEyNw@@._V1_SX1777_CR0,0,1777,960_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMzk0NDAtMmMwNC00NzIyLWE4MWQtZTFlNmIzZWIxY2FkXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNTExOTM2OV5BMl5BanBnXkFtZTcwNTk1NzEyNw@@._V1_SX1777_CR0,0,1777,934_AL_.jpg'

        ]
    },
    {
        title:'The Wolf of the Wall Street',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Comedy',
        year:2013,
        url: 'single.html?movie=the%20wolf%20of%20the%20wall%20street',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5NDM2MjYzNF5BMl5BanBnXkFtZTgwOTY3NTIxMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODA5NjMwNzA3OV5BMl5BanBnXkFtZTgwODUyOTg2MDE@._V1_SX1777_CR0,0,1777,738_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMzE4NzA4N15BMl5BanBnXkFtZTgwNzY3NTIxMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NzU3OTg4NV5BMl5BanBnXkFtZTgwMTc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        ]
    },
    {
        title:'Django Unchained',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzODg5MDUyNF5BMl5BanBnXkFtZTcwMTA3NDU2OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2012,
        url: 'single.html?movie=django%20unchaind',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NzU1Nzk2MF5BMl5BanBnXkFtZTcwNjE4Mzg2OA@@._V1_SY1000_CR0,0,657,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BOTA2NjY5NzY3NV5BMl5BanBnXkFtZTcwNzcyNjY4Nw@@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MTY4NjUyMV5BMl5BanBnXkFtZTcwNjkzNTI3Nw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDY5ODQ4MF5BMl5BanBnXkFtZTcwODE4Mzg2OA@@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNzEyODI5OV5BMl5BanBnXkFtZTcwNTcyNjY4Nw@@._V1_.jpg'
        ]
    },
    {
        title:'The Bourne Supremacy',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMDFmMmItMWQzYy00MjBiLTg2M2UtM2JiNDRhOWE4NjBhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX676_AL_.jpg",
        genre:'Action',
        year:2004,
        url: 'single.html?movie=the%20bourne%20supremacy',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYzZjYmFjZGYtZmEzYi00ODcyLWE3M2QtMDI5MjAxMmI3ZmM1XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_SY1000_CR0,0,759,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTUxMTgzOF5BMl5BanBnXkFtZTYwNzMzMTE3._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ0NjA4MTM0OV5BMl5BanBnXkFtZTcwNjgxODcyMw@@._V1_SX1537_CR0,0,1537,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0NjQ0NzY5OV5BMl5BanBnXkFtZTcwMjExODcyMw@@._V1_SY1000_CR0,0,651,1000_AL_.jpg'
        ]
    },
    {
        title:'Shot Caller',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMGY0YTM3MjItZmExMy00NDgyLThjNzUtZWQ1MzY2NGRmMjZhXkEyXkFqcGdeQXVyMzYyMzE1NjA@._V1_.jpg",
        genre:'Thriller',
        year:2017,
        url: 'single.html?movie=shot%20caller',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A newly released prison gangster is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BOTgxNTk3OTYxM15BMl5BanBnXkFtZTgwMDM4MjA2MjI@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTA3MTExOF5BMl5BanBnXkFtZTgwMTM4MjA2MjI@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyMjQ3MjYzMF5BMl5BanBnXkFtZTgwMzM4MjA2MjI@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwOTkzNDcxMF5BMl5BanBnXkFtZTgwNTM4MjA2MjI@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        ]
    },
    {
        title:'The Flowers of War',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3OTUzODA3Ml5BMl5BanBnXkFtZTcwNDk5NTUyNw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        genre:'Drama',
        year:2011,
        url: 'single.html?movie=the%20flowers%20of%20war',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A Westerner finds refuge with a group of women in a church during Japan\'s rape of Nanking in 1937. Posing as a priest, he attempts to lead the women to safety.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxOTI4NzI1MV5BMl5BanBnXkFtZTcwNTU5MDYxNw@@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDMzMjgyMV5BMl5BanBnXkFtZTcwNzU5MDYxNw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNDk2OTcwMV5BMl5BanBnXkFtZTcwOTU5MDYxNw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNDQyNTc5OF5BMl5BanBnXkFtZTcwMDk5NDgzNw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        ]
    },
    {
        title:'Black Swan',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Thriller',
        year:2010,
        url: 'single.html?movie=black%20swan',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNTRmYWZlYTMtZTljYy00NDFhLWJmMzMtNDA4ZDU4MGE3YjI2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_SY1000_SX1600_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NzQ4MjAyMF5BMl5BanBnXkFtZTcwNjUyNDQ4Mw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MzA5MzYwNl5BMl5BanBnXkFtZTcwMzg3ODIxNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MzI3MTE1MV5BMl5BanBnXkFtZTcwNzI5ODIxNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
        ]
    },
    {
        title:'The Hateful Eight',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2015,
        url: 'single.html?movie=the%hateful%20eight',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYTBhOTI1YjYtZDA2Yi00YmRlLTgyNTAtMzEyNDkwMjQwODhlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BOTU3OTIwNDg3M15BMl5BanBnXkFtZTgwNTA5MDM1NjE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzODUyMzU4M15BMl5BanBnXkFtZTgwMzA5MDM1NjE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMGRmOWIyOGEtMWI0ZC00MmNlLTg5MmMtMzNlZDczZjkyMGViL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzk1MzY3NzM@._V1_.jpg'
        ]
    },
    {
        title:'The Martian',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMjI2NzM2MF5BMl5BanBnXkFtZTgwNDkyNTI5NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Adventure',
        year:2015,
        url: 'single.html?movie=the%20martian',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE4MTkwOV5BMl5BanBnXkFtZTgwMTE0MDE5NTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5OTgyODI3N15BMl5BanBnXkFtZTgwMjE0MDE5NTE@._V1_SX1777_CR0,0,1777,998_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzRjZTBiODgtODMyOS00OWRlLTg3YTYtYTAzNGQzNGU0NjlmXkEyXkFqcGdeQXVyMjMxMDgyNzU@._V1_SX1777_CR0,0,1777,934_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZDhhNmE2NjgtMGIxMC00MTZjLTk4YmItZWQwYTA2YmJjZDVlXkEyXkFqcGdeQXVyMjMxMDgyNzU@._V1_SX1777_CR0,0,1777,956_AL_.jpg'
        ]
    },
    {
        title:'Mad Max: Fury Road',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMTEzNjgxM15BMl5BanBnXkFtZTgwMTI4NDQzNTE@._V1_SY1000_CR0,0,659,1000_AL_.jpg",
        genre:'Action',
        year:2015,
        url: 'single.html?movie=mad%20max%3A%20fury%20road',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0ODMxNzkwMV5BMl5BanBnXkFtZTgwNzE3NTE2NTE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzc4NTAzNDUyMF5BMl5BanBnXkFtZTgwNzg2ODcyMjE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTk0NDkyMl5BMl5BanBnXkFtZTgwNDI3NTE2NTE@._V1_SY1000_CR0,0,1566,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTUxNDUyN15BMl5BanBnXkFtZTgwNjI3NTE2NTE@._V1_SY1000_CR0,0,1503,1000_AL_.jpg'
        ]
    },
    {
        title:'Passengers',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5ODU3MDUyMV5BMl5BanBnXkFtZTgwODg0NTE1MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Adventure',
        year:2016,
        url: 'single.html?movie=passengers',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxODU3NTc2NF5BMl5BanBnXkFtZTgwMzAyNzU0MDI@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA1ODAzMF5BMl5BanBnXkFtZTgwMjAyNzU0MDI@._V1_SX1777_CR0,0,1777,964_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY2NmFmOTgtZjhlYS00Yzk1LTkzMGYtNjgzM2YxZmZmODI1XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY2NmFmOTgtZjhlYS00Yzk1LTkzMGYtNjgzM2YxZmZmODI1XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjFkMjRhY2YtZjkzZC00ZGQ4LThkMzgtNDQ1YmVjY2JmNDA2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg'
        ]
    },
    {
        title:'Get Out',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTE2Nzg1NjkzNV5BMl5BanBnXkFtZTgwOTgyODMyMTI@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
        genre:'Horror',
        year:2017,
        url: 'single.html?movie=get%20out',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.It\'s time for a young African American to meet with his white girlfriend\'s parents for a weekend in their secluded estate in the woods, but before long, the friendly and polite ambience will give way to a nightmare.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4MjkxNjMxMF5BMl5BanBnXkFtZTgwMzYwNjUzMTI@._V1_SY1000_CR0,0,964,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjEzNzE1NF5BMl5BanBnXkFtZTgwNDYwNjUzMTI@._V1_SX1777_CR0,0,1777,998_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzMxNDIyMl5BMl5BanBnXkFtZTgwNTYwNjUzMTI@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MDkyMjIxN15BMl5BanBnXkFtZTgwODYwNjUzMTI@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        ]
    },
    {
        title:'Pocahontas',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMzc4MDJlOWMtZjVmYi00N2VkLWJjOTMtOTg5MmRmMzczYTIxXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Animation',
        year:1995,
        url: 'single.html?movie=pocahontas',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth-century Virginia.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            '',
            '',
            '',
            ''
        ]
    },
    {
        title:'The Prestige',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
        genre:'Drama',
        year:2005,
        url: 'single.html?movie=the%20prestige',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.After a tragic accident two stage magicians engage in a battle to create the ultimate illusion whilst sacrificing everything they have to outwit the other.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NTU0MzU4OV5BMl5BanBnXkFtZTcwMTYzNDMyMw@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MTYwMjA2OV5BMl5BanBnXkFtZTcwNDIzNDMyMw@@._V1_SY1000_CR0,0,1504,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MzYyNzY5Ml5BMl5BanBnXkFtZTcwODEzNDMyMw@@._V1_SY1000_CR0,0,667,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NjA2MzIzOTNeQTJeQWpwZ15BbWU3MDAyMzQzMjM@._V1_SY1000_CR0,0,1506,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjA3MTQ3MF5BMl5BanBnXkFtZTcwMjAzNDMyMw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU0MjQwNjQ0Ml5BMl5BanBnXkFtZTcwMDYzNDMyMw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNzIyNTAxMl5BMl5BanBnXkFtZTcwOTUzNDMyMw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNzIyNTAxMl5BMl5BanBnXkFtZTcwOTUzNDMyMw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg'
        ]
    },
    {
        title:'The Notebook',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
        genre:'Drama',
        year:2004,
        url: 'single.html?movie=the%20notebook',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTcyNzYwNV5BMl5BanBnXkFtZTcwMTYxMTg0NA@@._V1_SY1000_CR0,0,1508,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjU3NjMwMDYzNV5BMl5BanBnXkFtZTcwNzUxMTg0NA@@._V1_SY1000_CR0,0,669,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxODE3NDQwNl5BMl5BanBnXkFtZTcwMjUxMTg0NA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3MzY0NzIxNl5BMl5BanBnXkFtZTcwOTUxMTg0NA@@._V1_SY1000_CR0,0,1497,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MDM0NDUzOF5BMl5BanBnXkFtZTcwODUxMTg0NA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        ]
    },
    {
        title:'WALL-E',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYWNmNDQwZWEtNGZmNS00MGIyLThhZjYtNjlkZDZmMGI1ZGE5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY999_CR0,0,695,999_AL_.jpg",
        genre:'Animation',
        year:2008,
        url: 'single.html?movie=wall-e',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MTcwMTM1Nl5BMl5BanBnXkFtZTcwMTIwMzMzMw@@._V1_SY1000_CR0,0,1485,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyOTk0NDMwMF5BMl5BanBnXkFtZTcwMzgwMzMzMw@@._V1_SY1000_CR0,0,1001,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2NDMyNTE3Ml5BMl5BanBnXkFtZTcwOTIwMzMzMw@@._V1_SX1777_CR0,0,1777,742_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjAxMjMzNDY1NV5BMl5BanBnXkFtZTcwODIwMzMzMw@@._V1_SX1777_CR0,0,1777,740_AL_.jpg'
        ]
    },
    {
        title:'The Big Sick',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY1000_SX675_AL_.jpg",
        genre:'Comedy',
        year:2017,
        url: 'single.html?movie=the%20big%20sick',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Pakistan-born comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash. When Emily contracts a mysterious illness, Kumail finds himself forced to face her feisty parents, his family\'s expectations, and his true feelings.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxMDg2MzI0NzheQTJeQWpwZ15BbWU4MDMwNTIwMDMy._V1_SY1000_CR0,0,1647,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMjU4NjQ2Ml5BMl5BanBnXkFtZTgwOTA1MjAwMzI@._V1_SX1777_CR0,0,1777,998_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDMyOWQ4OTQtNDUwMi00ZjUyLWIwN2QtM2FjOTIzMmJlODFhXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_SY1000_CR0,0,1500,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzA3NTMwMl5BMl5BanBnXkFtZTgwMTA3MjIyMTI@._V1_.jpg'
        ]
    },
    {
        title:'The Mist',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_.jpg",
        genre:'Horror',
        year:2007,
        url: 'single.html?movie=the%20mist',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A freak storm unleashes a species of bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket and fight for their lives.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..',
        gallery:[
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjYzMjJhM2YtYWQ3Yy00MzMxLThiY2EtNzI2OGQxYTliYTIzXkEyXkFqcGdeQXVyMjMxMDgyNzU@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZWM1MzcwYjYtODQ0ZC00YjRhLWFhOWYtOTUyYTJiZGZhYWZhXkEyXkFqcGdeQXVyMjMxMDgyNzU@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjZhYTM3MWQtMDY4OS00ZDJkLTllZDktZDQ0MzhmMjk4NDgzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BN2RmMjg0ZDYtZjVlZi00YzQ1LTg1NWYtOGRiNTMzNjNmYTI2XkEyXkFqcGdeQXVyNzc5NjM0NA@@._V1_.jpg'
        ]
    }
];
