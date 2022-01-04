// import chalk from 'chalk';
const notes = require('./notes.js');

const yargs = require('yargs');

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
    handler: function(argv){
       notes.addNotes(argv.title, argv.body);
    }
})

//create remove command 
yargs.command({
    command:'remove',
    description:'Remove a new note',
    handler: function(){
        console.log('Remove a new new note!');
    }
})

//CHALLENGES:
//create list command 
yargs.command({
    command:'list',
    description:'List a new note',
    handler: function(){
        console.log('List a new new note!');
    }
})

//create read command
yargs.command({
    command:'read',
    description:'Read a new note',
    handler: function(){
        console.log('Read a new new note!');
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