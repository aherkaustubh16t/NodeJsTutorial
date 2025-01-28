console.log("Hello");
const fs = require('fs');
fs.writeFile("Write.txt", "KAustubh", (error) => {
  if (error) {
    console.log("error");
  }
});

