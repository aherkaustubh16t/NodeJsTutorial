const http = require('http');

// function dataControl(req, res) {
//   res.write("Hieee");
//   res.end();
// }

// http.createServer(dataControl).listen(4500);

http.createServer((req, res) => {

  const path = req.url;
  console.log("New Request Received");

  if (path === "/") {
    res.writeHead(200);
    res.end("<h1>You are in Home Page</h1>");
  }
  else if (path === "/about") {
    res.writeHead(200);
    res.end("<h1>You are in About Page</h1>");
  }
  else if (path === "/contact") {
    res.writeHead(200);
    res.end("<h1>You are in Contact Page</h1>");
  }
  else {
    res.writeHead(404);
    res.end("<h1>Error 404:  Page Not Found</h1>");
  }

}).listen(4500, '127.21.1.2', () => {
  console.log("Server Has Started");
});
