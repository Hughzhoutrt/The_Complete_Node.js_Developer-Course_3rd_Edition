const fs = require('fs');

// fs.writeFileSync('notes.txt','My name is Hugh!');

fs.appendFileSync('./notes.txt', 'add something behide my name!');