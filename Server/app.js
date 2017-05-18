var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var index = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');
const util = require('./helpers/util');
const cors = require('cors');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ivanblog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});


app.use(cors())
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*")
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token")
   next()
})

passport.use(new Strategy(util.passportAuth))
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/articles', articles);


module.exports = app;
