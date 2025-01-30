// Creating first server 
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.write("<h1 style='color:red;'>Home Section</h1>");
    return res.end();
  } else if (req.url === "/payment") {
    res.write("<h1 style='color:green;'>Payment Section</h1>");
    res.write("<form action='/submit_form' method='POST'>");
    res.write("<label for='username'>Username:</label>");
    res.write("<input type='text' id='username' name='username' required><br><br>");
    res.write("<label for='gender'>Gender:</label>");
    res.write("<select id='gender' name='gender' required>");
    res.write("<option value='male'>Male</option>");
    res.write("<option value='female'>Female</option>");
    res.write(" <option value='other'>Other</option>");
    res.write("</select><br><br>");
    res.write("<label for='mobile'>Mobile No:</label>");
    res.write("<input type='tel' id='mobile' name='mobile' pattern='[0-9]{10}' required><br><br>");
    res.write("<input type='submit' value='Submit'>");
    res.write("</form>")
    return res.end();
  }
  else if (req.url.toLowerCase() === "/submit_form" && req.method == "POST") {
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  else {
    res.write("<h1 style='color:blue;'>Defalt Section</h1>");
    return res.end();
  }
  // process.exit();
});
server.listen(3000, () => {
  console.log("Server Started");
  console.log("Server running on http://localhost:3000");
});