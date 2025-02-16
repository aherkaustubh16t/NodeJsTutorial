const { read, readlink } = require('fs');
const { stdin, stdout } = require('process');
const readLine = require('readline');

const r1 = readLine.createInterface({
  input: stdin,
  output: stdout,
})

r1.question("Enter Your Name:- ", (name) => {
  if (name) {
    console.log("Your Name is name : ", name);
    r1.close();
  }
})
r1.on('close', () => {
  console.log("Interface Closed...");
  process.exit();

})