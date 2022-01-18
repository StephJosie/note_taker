const fs = require('fs');
const util = require('util');
// const express = require('express'),
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Save {
    read() {
        return readFile('./db/db.json', 'utf8')

    }
    wrie(note) {
        return writeFile('./db/db.json', JSON.stringify(note));

    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;

        })

    }


}

module.exports = new Save();


