var express = require('express');
var router = express.Router();
var articleController = require("../controllers/articleController")
const passport = require('passport');

router.get('/', articleController.getAllArticle);
router.get('/:id', articleController.getOneArticle);
router.get('/category/:cat', articleController.getbyCategory);
router.get('/author/:aut', articleController.getbyAuthor);
router.post('/', articleController.createArticle);
router.delete('/:id', articleController.deleteArticle);
router.put('/:id', articleController.updateArticle)

module.exports = router;
