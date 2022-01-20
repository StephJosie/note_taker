
const indexHTMLRoutes = require('express').Router();
const { readFilePromise, addNote } = require("../utils/utils");
const { v1: uuidv1 } = require("uuid");
const db = "./db/db.json";

// indexHTMLRoutes.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

indexHTMLRoutes.get('/notes', (req, res) => {
    readFilePromise(db).then((data) => res.json(JSON.parse(data)));

});
// indexHTMLRoutes.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));

// })
indexHTMLRoutes.post("/notes/", (req, res) => {
    let newNote = {
        ...req.body,
        id: uuidv1(),
    };

    addNote(newNote, db);

    res.status(200).send("Succesful!");
});

module.exports = indexHTMLRoutes





