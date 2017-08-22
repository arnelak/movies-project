var moviesObject = [
    {
        title: 'Star Trek',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMDkwNzIwOF5BMl5BanBnXkFtZTcwNDU4ODUzOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre: 'Action',
        year: 2013,
        url: 'single.html?movie=star%20trek',
        description: 'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
        actors: 'Chris Pine, Zachary Quinto, Zoe Saldana',
    },
    {
        title:'Kung Fu Panda',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyOTQ5NDQyNV5BMl5BanBnXkFtZTcwMzcyNDUwMg@@._V1_.jpg",
        genre: 'Animation',
        year: 2008,
        url: 'single.html?movie=kung%20fu%20panda',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The Dragon Warrior has to clash against the savage Tai Lung as China\'s fate hangs in the balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a tyro in martial arts.',
        actors:'Jack Black, Ian McShane, Angelina Jolie... '
    },
    {
        title:'Son of a Gun',
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGI5OWQ2YzctMTcxMS00MWMxLTk1MDQtNmU1ODMyMjkyNmRiL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,692,1000_AL_.jpg",
        genre:'Action',
        year:2014,
        url: 'single.html?movie=son%20of%20a%20gun',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.JR busts out of prison with Brendan Lynch, Australia\'s most notorious criminal, and joins Lynch\'s gang for a gold heist that soon pits the two men against one another.',
        actors:'Ewan McGregor, Brenton Thwaites, Alicia Vikander... '
    },
    {
        title:'Mr.Right',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOTcxNjUyOTMwOV5BMl5BanBnXkFtZTgwMzUxMDk4NzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Comedy',
        year:2015,
        url: 'single.html?movie=Mr.right',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A girl falls for the "perfect" guy, who happens to have a very fatal flaw: he\'s a hitman on the run from the crime cartels who employ him.',
        actors:' Anna Kendrick, Sam Rockwell, Tim Roth...'
    },
    {
        title:'The Finest Hours',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYTNlODFjYjctYWYyOS00Mjk4LWFkYWUtMjEyM2Y1MjM2NGM2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,699,1000_AL_.jpg",
        genre:'Drama',
        year:2015,
        url: 'single.html?movie=the%20finest%20hours',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The Coast Guard makes a daring rescue attempt off the coast of Cape Cod after a pair of oil tankers are destroyed during a blizzard in 1952.',
        actors:' Chris Pine, Casey Affleck, Ben Foster..'
    },
    {
        title:"Everybody's fine",
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyMTM3NzQ1MDReQTJeQWpwZ15BbWU3MDk5MTAyOTI@._V1_.jpg",
        genre:'Adventure',
        year:2009,
        url: 'single.html?movie=everybody%27s%20fine',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A widower who realized his only connection to his family was through his wife sets off on an impromptu road trip to reunite with each of his grown children.',
        actors:' Robert De Niro, Kate Beckinsale, Sam Rockwell..'
    },
    {
        title:'Wonder Woman',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg",
        genre:'Adventure',
        year:2017,
        url: 'single.html?movie=wonder%20woman',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Before she was Wonder Woman, she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war, discovering her full powers and true destiny.',
        actors:'Robert De Niro, Kate Beckinsale, Sam Rockwell..'
    },
    {
        title:'The Kid',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMzk2NTE5NF5BMl5BanBnXkFtZTcwMTcyOTAwMQ@@._V1_.jpg",
        genre:'Comedy',
        year:2000,
        url: 'single.html?movie=the%20kid',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An unhappy and disliked image consultant gets a second shot at life when he is mysteriously confronted by an eight-year-old version of himself.',
        actors:' Bruce Willis, Spencer Breslin, Emily Mortimer..'
    },
    {
        title:'Dunkirk',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2017,
        url: 'single.html?movie=dunkirk',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Allied soldiers from Belgium, the British Empire and France are surrounded by the German army and evacuated during a fierce battle in World War II.',
        actors:' Fionn Whitehead, Damien Bonnard, Aneurin Barnard ..'
    },
    {
        title:'Baby Driver',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Action',
        year:2017,
        url: 'single.html?movie=baby%20driver',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
        actors:' Ansel Elgort, Jon Bernthal, Jon Hamm ..'
    },
    {
        title:'The Boss Baby',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_SY1000_CR0,0,685,1000_AL_.jpg",
        genre:'Animation',
        year:2017,
        url: 'single.html?movie=the%20boss%20baby',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.',
        actors:'  Alec Baldwin, Steve Buscemi, Jimmy Kimmel ..'
    },
    {
        title:'Deadpool',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjQ5Mzc3M15BMl5BanBnXkFtZTgwNDExMjE3NzE@._V1_SY1000_SX686_AL_.jpg",
        genre:'Action',
        year:2016,
        url: 'single.html?movie=deadpool',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
        actors:'Ryan Reynolds, Morena Baccarin, T.J. Miller ..'
    },
    {
        title:'Spirited away',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZTk4YjVlZTQtYmFmOC00MjcxLWJiMWEtNzNhOGJmN2NkY2U3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        genre:'Animation',
        year:2001,
        url: 'single.html?movie=spirited%20away',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
        actors:' Daveigh Chase, Suzanne Pleshette, Miyu Irino ..'
    },
    {
        title:'The pianist',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,724,1000_AL_.jpg",
        genre:'Drama',
        year:2002,
        url: 'single.html?movie=the%20pianist',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'The Dark Knight',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        genre:'Action',
        year:2008,
        url: 'single.html?movie=the%20dark%20knight',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'The Godfather',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxOTdjMDMtMWY1MC00MjkxLTgxYTMtYTM1MjU5ZTJlNTZjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,706,1000_AL_.jpg",
        genre:'Drama',
        year:1972,
        url: 'single.html?movie=the%20godfather',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Inception',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NzE0OTQxMV5BMl5BanBnXkFtZTcwOTE0MjYwMw@@._V1_.jpg",
        genre:'Action',
        year:2010,
        url: 'single.html?movie=inception',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Life is Beautiful',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOWY1OWI1MmUtNjAxYy00MmRiLWI4YWItYjNjMmU4Yzc3M2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Comedy',
        year:1997,
        url: 'single.html?movie=life%20is%20beautiful',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Room',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY1000_SX675_AL_.jpg",
        genre:'Drama',
        year:2015,
        url: 'single.html?movie=room',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A young boy is raised within the confines of a small shed.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Dancer in the Dark',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BODI1ZmVkMzAtYzlmZC00ZGUyLWIwY2UtNWExMzAyZTBlY2UyXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
        genre:'Drama',
        year:2000,
        url: 'single.html?movie=dancer%20in%20the%20dark',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An east European girl goes to America with her young son, expecting it to be like a Hollywood film.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Before sunrise',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        genre:'Drama',
        year:1995,
        url: 'single.html?movie=before%20sunrise',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'The Cabin in the Woods',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Horror',
        year:2012,
        url: 'single.html?movie=the%20cabin%20in%20the%20woods',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:"Howl's moving castle",
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMDQzNTFhYzgtYjMwZS00YzQ1LTgxODgtYjFhYTUzMTNmNTIzXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Animation',
        year:2004,
        url: 'single.html?movie=howl%27s%20moving%20castle',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'The Wolf of the Wall Street',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Comedy',
        year:2013,
        url: 'single.html?movie=the%20wolf%20of%20the%20wall%20street',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Django Unchained',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzODg5MDUyNF5BMl5BanBnXkFtZTcwMTA3NDU2OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2012,
        url: 'single.html?movie=django%20unchaind',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'The Bourne Supremacy',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMDFmMmItMWQzYy00MjBiLTg2M2UtM2JiNDRhOWE4NjBhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX676_AL_.jpg",
        genre:'Action',
        year:2004,
        url: 'single.html?movie=the%20bourne%20supremacy',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'Shot Caller',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMGY0YTM3MjItZmExMy00NDgyLThjNzUtZWQ1MzY2NGRmMjZhXkEyXkFqcGdeQXVyMzYyMzE1NjA@._V1_.jpg",
        genre:'Thriller',
        year:2017,
        url: 'single.html?movie=shot%20caller',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A newly released prison gangster is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'The Flowers of War',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3OTUzODA3Ml5BMl5BanBnXkFtZTcwNDk5NTUyNw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        genre:'Drama',
        year:2011,
        url: 'single.html?movie=the%20flowers%20of%20war',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A Westerner finds refuge with a group of women in a church during Japan\'s rape of Nanking in 1937. Posing as a priest, he attempts to lead the women to safety.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'Black Swan',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Thriller',
        year:2010,
        url: 'single.html?movie=black%20swan',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    },
    {
        title:'The Hateful Eight',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Drama',
        year:2015,
        url: 'single.html?movie=the%hateful%20eight',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'The Martian',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMjI2NzM2MF5BMl5BanBnXkFtZTgwNDkyNTI5NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Adventure',
        year:2015,
        url: 'single.html?movie=the%20martian',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'Mad Max: Fury Road',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMTEzNjgxM15BMl5BanBnXkFtZTgwMTI4NDQzNTE@._V1_SY1000_CR0,0,659,1000_AL_.jpg",
        genre:'Action',
        year:2015,
        url: 'single.html?movie=mad%20max%3A%20fury%20road',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'Passengers',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5ODU3MDUyMV5BMl5BanBnXkFtZTgwODg0NTE1MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        genre:'Adventure',
        year:2016,
        url: 'single.html?movie=passengers',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'Get Out',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTE2Nzg1NjkzNV5BMl5BanBnXkFtZTgwOTgyODMyMTI@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
        genre:'Horror',
        year:2017,
        url: 'single.html?movie=get%20out',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.It\'s time for a young African American to meet with his white girlfriend\'s parents for a weekend in their secluded estate in the woods, but before long, the friendly and polite ambience will give way to a nightmare.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'Pocahontas',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMzc4MDJlOWMtZjVmYi00N2VkLWJjOTMtOTg5MmRmMzczYTIxXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        genre:'Animation',
        year:1995,
        url: 'single.html?movie=pocahontas',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth-century Virginia.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'The Prestige',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
        genre:'Drama',
        year:2005,
        url: 'single.html?movie=the%20prestige',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.After a tragic accident two stage magicians engage in a battle to create the ultimate illusion whilst sacrificing everything they have to outwit the other.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'The Notebook',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
        genre:'Drama',
        year:2004,
        url: 'single.html?movie=the%20notebook',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title:'WALL-E',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BYWNmNDQwZWEtNGZmNS00MGIyLThhZjYtNjlkZDZmMGI1ZGE5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY999_CR0,0,695,999_AL_.jpg",
        genre:'Animation',
        year:2008,
        url: 'single.html?movie=wall-e',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay',
    },
    {
        title:'The Big Sick',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY1000_SX675_AL_.jpg",
        genre:'Comedy',
        year:2017,
        url: 'single.html?movie=the%20big%20sick',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.Pakistan-born comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash. When Emily contracts a mysterious illness, Kumail finds himself forced to face her feisty parents, his family\'s expectations, and his true feelings.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay..'
    },
    {
        title:'The Mist',
        image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_.jpg",
        genre:'Horror',
        year:2007,
        url: 'single.html?movie=the%20mist',
        description:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.A freak storm unleashes a species of bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket and fight for their lives.',
        actors:' Adrien Brody, Thomas Kretschmann, Frank Finlay ..'
    }
];
