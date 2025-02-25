const http = require('http');
const fs = require('fs');
const url = require('url');
// function dataControl(req, res) {
//   res.write("Hieee");
//   res.end();
// }

// http.createServer(dataControl).listen(4500);

let products = JSON.parse(fs.readFileSync('../Data/product.json', 'utf-8'))
let productHtml = fs.readFileSync('../Data/index.html', 'utf-8');

let producthtmlArray = products.map((product) => {
  let output = productHtml.replaceAll('{{%name%}}', product.name);
  output = output.replace('{{%id%}}', product.id);

  return output;
})
http.createServer((req, res) => {

  let { query, pathname: path } = url.parse(req.url, true);
  // const path = req.url;
  // console.log(x);
  console.log("New Request Received");

  if (path === "/") {
    res.writeHead(200);
    res.end("Home Page");
  }
  else if (path === "/about") {
    res.writeHead(200);
    res.end("<h1>You are in About Page</h1>");
  }
  else if (path === "/contact") {
    res.writeHead(200);
    res.end("<h1>You are in Contact Page</h1>");
  }
  else if (path === "/product") {

    if (query.id) {
      res.end("Product with id = " + query.id)
    }
    else {

      res.writeHead(200, {
        'content-type': 'text/html'
      });

      res.write('Products List')
      res.end(producthtmlArray.join(','));
      console.log();
    }
  }
  else {
    res.writeHead(404);
    res.end("<h1>Error 404:  Page Not Found</h1>");
  }

}).listen(4500, '127.21.1.2', () => {
  console.log("Server Has Started");
});
