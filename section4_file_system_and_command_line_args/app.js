// import chalk from 'chalk';
const notes =require('./notes.js');

const yargs =require('yargs');

// console.log(chalk.blue('Hello world!'));

// console.log(process.argv);
//Customize yargs version
yargs.version('1.1.0');

//creat add command 
yargs.command({
    command:'add',
    description:'Add a new note',
    builder: {
        title: {
            describe:"Note title",
            demandOption:true,
            type:'string'
        },

        body: {
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.addNotes(argv.title, argv.body);
    }
})

//create remove command 
yargs.command({
    command:'remove',
    description:'Remove a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
})

//CHALLENGES:
//create list command 
yargs.command({
    command:'list',
    description:'List a new note',
    handler(){
        // console.log('List a new new note!');
        notes.listNotes();
    }
})

//create read command
yargs.command({
    command:'read',
    description:'Read a new note',
    builder: {
        title:{
            describe: "Note",
            demandOpition: true,
            type: "string"
        }
    },
    handler(argv){
       notes.readNote(argv.title);
    }
})
// add, remove, read, list

// console.log(yargs.argv);

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

yargs.parse();