const fs =require('fs');
const chalk = require("chalk");

const getNotes = () =>{
    return 'Your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note =  note.title === title);

    console.log(duplicateNotes, 'duplicateNotes');
    console.log(duplicateNotes.length, 'duplicateNotes.length');


    if (duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body:body
        })
    
       saveNotes(notes);
       console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
  
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return[];
    }

}

//challange:
const removeNotes = function (title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function(notes){
        return notes.title !==title;
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }

    saveNotes(notesToKeep);
}

module.exports= {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes:removeNotes
};