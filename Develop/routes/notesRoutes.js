const Save = require('../server');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    Save
        .getNotes()
        .then((notes) => {
            return res.json(notes);


        })
        .catch((err) => res.status(404).json(err));

})


router.post('/notes', (req, res) => {
    Save
        .addNote(req, body)
        .then((note) => res.json(note))
        .catch((err) => res.status(404).json(err))

})
module.exports = router;


