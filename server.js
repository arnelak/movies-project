var express = require('express');
var mongoose = require('mongoose');
var movieModel = require('./models/movieModel');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/static', express.static('node_modules'));

mongoose.connect('mongodb://localhost/moviesDB');

app.get('/', function (req, res) {
  movieModel.find({}, function(err, result){
    //console.info("RESULT",result);
  });
  res.render("index");
});

app.get('/single', function (req, res) {
  movieModel.findOne({title: req.query.movie}, function(err, result){
    console.info("RESULT",result);
  });
  res.render("single");
});

app.get('/actors', function (req, res) {
  res.render("actors");
});

app.listen(4000, function(){
  console.log('server up on port 4000');
});
