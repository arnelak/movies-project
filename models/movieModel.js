var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title:  String,
  year: Number,
  genre:   String,
  keywords: Array,
  actors: Array,
  image: String,
  gallery: Array,
  description: String
});

var movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;
