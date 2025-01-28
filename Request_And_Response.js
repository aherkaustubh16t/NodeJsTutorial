// Creating first server 
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1 style='color:red;'>Kaustubh</h1>");
  res.end();
  // process.exit();
});
server.listen(3000, () => {
  console.log("Server Started");
  console.log("Server running on http://localhost:3000");
});