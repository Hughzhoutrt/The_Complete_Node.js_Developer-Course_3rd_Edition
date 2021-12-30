const validator = require('validator');

// fs.writeFileSync('notes.txt','My name is Hugh!');

// fs.appendFileSync('./notes.txt', 'add something behide my name!');

console.log(validator.isEmail('hugh@1234.com'));

console.log(validator.isURL('http://hiyuhui.com'));