const http = require('http');

// function dataControl(req, res) {
//   res.write("Hieee");
//   res.end();
// }

// http.createServer(dataControl).listen(4500);

http.createServer((req, res) => {
  res.write("<h1>Hieee Server started....</h1>");
  console.log("New Request Received");

  res.end("Server Ended....");
  
  // console.log(req);

  // console.log(res);
}).listen(4500);
