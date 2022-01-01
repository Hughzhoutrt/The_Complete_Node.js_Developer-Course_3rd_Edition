import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

// console.log(process.argv[2]);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing note!');
}