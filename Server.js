// Creating first server 
const http = require('http');

http.createServer((req, res) => {
  console.log(req);
}).listen(3000, () => {
  console.log("Server Started");
  console.log("Server running on http://localhost:3000");
});