const express=require('express');

const router=express.Router();

  //add-product=>get
  router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/prodects" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
  });

  //products=>Post
  router.post('/prodects',(req,res,next)=>{
     console.log(req.body)
      res.redirect('/');
  });
  

module.exports=router;