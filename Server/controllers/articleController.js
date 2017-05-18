var method = {}
var Article = require("../models/article")

method.getAllArticle=function(req,res){
  Article.find(function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}

method.getOneArticle=function(req,res){
  console.log('wews');
  Article.findById(req.params.id,function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}

method.getbyCategory=function(req,res){
  Article.find({category: req.params.cat},function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}

method.getbyAuthor=function(req,res){
  console.log('asdasd');
  Article.find({author: req.params.aut},function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}

method.createArticle=function(req,res){
  let newArticle = new Article()
  newArticle.title = req.body.title
  newArticle.content= req.body.content
  newArticle.category = req.body.category
  newArticle.author = req.body.author

  newArticle.save(function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}

method.deleteArticle=function(req,res){
  Article.findByIdAndRemove(req.params.id,function(err,result){
    if(err){

      res.send(err)
    }else{
      let response = {msg:`article deleted`, id:result._id}
      res.send(response)
    }
  })
}

method.updateArticle=function(req,res){
  Article.findById(req.params.id,function(err,article){
    if(err){
      res.send(err)
    }else{
      article.title = req.body.title || article.title
      article.content= req.body.content || article.content
      article.category = req.body.category || article.category
      article.author = req.body.author || article.author
      article.save(function(err,result){
        if(err){

          res.send(err)
        }else{
          res.send(result)
        }

      })
    }
  })


}



module.exports = method;
