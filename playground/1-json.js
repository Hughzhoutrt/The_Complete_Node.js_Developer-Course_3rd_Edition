const fs = require('fs');

// const book = {
//     title: "Ego is Enermy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parseData = JSON.parse( bookJSON );

// console.log(parseData.title);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json'); 
// const dataJSON = dataBuffer.toString();
// const data =  JSON.parse(dataJSON);

// console.log(data);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data =  JSON.parse(dataJSON);
data.name = "Hugh";
data.age = 31;
console.log(data);

const dataJSONAgain = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSONAgain);
