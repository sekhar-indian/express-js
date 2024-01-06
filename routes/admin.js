const express=require('express');

const router=express.Router();
   router.get('/login',(rq,res)=>{
    res.send(`
       <form action="/add-product" method="POST">
       <input type="text" name="userid" >
       <button type="submit">login</button>
       </form>
    `)
   });
  //add-product=>get
  router.post('/add-product',(req,res,next)=>{
    res.send('<form action="/prodects" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
  });

  //products=>Post
  router.post('/prodects',(req,res,next)=>{
     console.log(req.body.title)
      // res.redirect('/add-product');
  });
  

module.exports=router;