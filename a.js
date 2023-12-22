
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form action="/message" method="POST" ><input type="text"  name="massage" ><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on('end', () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split('=')[1];
//       fs.writeFile('message.txt', message,err=>{
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//       });
    

//   });
//   } 
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title><head>');
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000);





const http = require('http');
const express=require('express');
const bodyparser= require('body-parser')

const app =express();
app.use(bodyparser.urlencoded({extended: false}))
app.use('/add-product',(req,res,next)=>{
  console.log("iam  wave");
  res.send('<form action="/prodects" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
});

app.use('/prodects',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
});

app.use('/',(req,res,)=>{
  console.log("iam nother midel wave");
  res.send('<h1>welcome to the</h1>');
});

const server=http.createServer(app);

server.listen(3000);