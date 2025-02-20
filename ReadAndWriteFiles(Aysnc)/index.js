const fs = require('fs');
const { data } = require('react-router-dom');

// Read File Async
fs.readFile('./ReadFile(Async)/text.txt', 'utf-8', (error, data) => {

  // if (error) {
  //   console.log(error);
  // } else {
  //   console.log(data)
  // }

  // ternary operator
  error ? console.log(error) : console.log(data);
  fs
})
console.log("Reading the file....");

// Write File Async
fs.writeFile('./WriteFile(Async)/text.txt', `Writing File Asynchronously `, () => {
  console.log("Write File Succefully");
});