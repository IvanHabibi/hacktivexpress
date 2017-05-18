var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaUser = new Schema({
  username:String,
  password:String
})


var User = mongoose.model('users', schemaUser);

module.exports = User;
