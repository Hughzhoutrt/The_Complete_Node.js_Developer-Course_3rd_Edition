const fs =require('fs');
const chalk = require("chalk");

const getNotes = () =>{
    return 'Your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(note =>  note.title === title);
    const duplicateNote  = notes.find((note)=> note.title === title);

    console.log(duplicateNotes, 'duplicateNotes');
    console.log(duplicateNotes.length, 'duplicateNotes.length');

    //For debugging the if and else function, we can set a listener to see the value of duplicatNote:
    console.log(duplicateNote);

    console.log(title);

    if (!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });

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

const readNote = (title) => {
    const notes = loadNotes ();
    const note = notes.find((note)=> note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Notes not found!"))
    }
}

module.exports= {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
};