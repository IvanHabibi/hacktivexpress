var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
const passport = require('passport');

router.post('/signup', userController.signUp);
router.post('/signin', passport.authenticate('local', { session: false }), userController.sendToken);

module.exports = router;
