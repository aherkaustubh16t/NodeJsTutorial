const http = require('http');

http.createServer((req, res) => {
  
  res.writeHead(200, 'Success');
  res.end();
}).listen(1600);