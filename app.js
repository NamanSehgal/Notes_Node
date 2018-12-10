console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Process: ', process.argv)
console.log('Yargs: ', argv);


if (command === 'add'){
    notes.addNote(argv.title,argv.body);
}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    notes.getNode(argv.title);
}else if (command === 'remove')
{
    notes.removeNode(argv.title);
}else {
    console.log('Command Not Recognized');
}
