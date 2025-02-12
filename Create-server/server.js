const http = require('http');

// function dataControl(req, res) {
//   res.write("Hieee");
//   res.end();
// }

// http.createServer(dataControl).listen(4500);

http.createServer((req, res) => {
  res.write("<h1>Hieee Server started....</h1>");
  res.end();
}).listen(4500);
