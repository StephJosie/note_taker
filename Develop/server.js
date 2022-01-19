const express = require('express');
// const notesRoutes = require('./routes/notesRoutes')
// const indexHTMLRoutes = require('./routes/indexHTMLRoutes')
const fs = require('fs')
const path = require('path')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

const app = express()
const PORT = process.env.PORT || 3007



app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use('/api', notesRoutes);
// app.use('/', indexHTMLRoutes);
// app.use(express.static('public'));

app.listen(PORT, () => console.log(`listening on port: ${PORT} `))

app.use(express.static('../public'))

app.get('/api/notes', (req, res) => {
    readFileAsync('../db/db.json', 'utf8').then(function (data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);

    })
})

app.post('/api/notes', (req, res) => {
    const note = req.body;
    readFileAsync('../db/db.json', 'utf8').then(function (data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length + 1
        notes.push(note);
        return notes
    })
        .then(function (notes) {
            writeFileAsync('../db/db.json', JSON.stringify(notes))
            res.json(note)
        })

})
app.delete('/api/notes/:id', function (req, res) {
    const idTodelete = parseInt(req.params.id)
    readFileAsync('../db/db.json', 'utf8').then(function (data) {
        const notes = [].concat(JSON.parse(data))
        const newNotesDaata = []
        for (let i = 0; i < notes.length; i++) {
            if (idTodelete !== notes[i].id) {
                newNotesDaata.push(notes[i])

            }
        }

        return newNotesDaata
    })
        .then(function (notes) {
            writeFileAsync('../db/db.jdon', JSON.stringify(notes))
            res.send('succcess')
        })
})
})





