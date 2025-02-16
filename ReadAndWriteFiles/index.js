const fIleSystem = require('fs');

// Read File
const readTxt = fIleSystem.readFileSync('./ReadFile/input.txt', 'utf-8');
console.log(readTxt);

// Write File
fIleSystem.writeFileSync('./WriteFile/write.txt', `Text from the read file \n${readTxt}\nDate created ${new Date()}`);
