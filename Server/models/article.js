const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaArticle = new Schema({
  title:String,
  content:String,
  category:String,
  author:String
})


var Article = mongoose.model('articles', schemaArticle);

module.exports = Article;
