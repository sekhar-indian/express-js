// const http=require('http');
// const fs=require('fs')
//  const server=http.createServer((req,res)=>{
//     const url=req.url;
//     const method=req.method;
//     if(url==='/'){
//         res.write('<html> ');
//         res.write('<h1>Enter massage</h1>');
//         res.write('<body><form action="/mesage" method="POST"><input type="text"><button type="text">Submit</button></form></body>');
//         res.write('</html> ');

//        return res.end();
//     }
//     if(url=="/mesage"&& method==='POST'){
//     fs.writeFile('mesage.text','dummy');
//     res.statusCode=302;
//     res.setHeader('Location','/');
//     return res.end();
//     }
//   res.setHeader('Content-type','text/html');
//   res.write('<html> <h1>hi</h1></html>');
//   res.end();
// });
// server.listen(3000);