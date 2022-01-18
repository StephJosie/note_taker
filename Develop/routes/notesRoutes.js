const Save = require('../db/savedNotes');
const Routes = require('express').Router();

Routes.get('/notes', (req, res) => {
    Save
        .getNotes()
        .then((notes) => {
            return res.json(notes)


        })
        .catch((err) => res.status(404).json(err))

})
Routes.post('/notes', (req, res) => {
    Save
        .addNote(req, body)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(404).json(err))

})
module.exports = Routes;