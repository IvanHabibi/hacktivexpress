var method = {}
var User = require("../models/user");
var passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
require('dotenv').config();

method.signUp = (req, res) => {
  var user = new User();
  user.username = req.body.username;
  user.password = passwordHash.generate(req.body.password);


    user.save(function(err, createdUser) {
        if (err) {
            res.send(err);
        }
        res.send(createdUser);
    });
}

method.sendToken = function(req, res) {
    var user = req.user
    if (!user.msg) {
        var token = jwt.sign({
            username: user.username,
            name: user.name,
        }, process.env.SECRET_KEY, {
            expiresIn: '3h'
        });
        res.send({
            'username' : user.username,
            'token': token,
            'id':user._id
        })

      res.send(user.msg)
    }else{
      res.send(user)
    }

}

module.exports = method;
