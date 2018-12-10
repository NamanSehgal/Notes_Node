console.log('Starting Notes.js');

var addNote = (title,body) =>{
    console.log('Adding Note: ', title, body);
};

var getAll = () =>{
    console.log('Getting All Notes');
};

var getNode = (title) =>{
    console.log('Reading the Note:', title)

};

var removeNode = (title) =>{
    console.log('Removing the Note: ',title);
};

module.exports = {
    addNote,
    getAll,
    getNode,
    removeNode
};
