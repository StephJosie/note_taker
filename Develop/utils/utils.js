

const util = require("util");
const fs = require("fs");

const readFilePromise = util.promisify(fs.readFile);

const writeNotes = (notes, db) => {
    fs.writeFile(db, JSON.stringify(notes, null), (err) => {
        err ? console.error(err) : console.log("");
    });
};

const addNote = (note, db) => {
    fs.readFile(db, "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const notes = JSON.parse(data);
            notes.push(note);
            writeNotes(notes, db);
        }
    });
};

const deleteNote = (id, db) => {
    fs.readFile(db, "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const notes = JSON.parse(data);
            for (const [index, note] of notes.entries()) {
                if (id === note.id) {
                    notes.splice(index, 1);
                    writeNotes(notes, db);
                    return;
                }
            }

            console.log("id not in delete operation");
        }
    });
};

module.exports = { readFilePromise, writeNotes, addNote, deleteNote };