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
    readFileAsync('../db/db.json', 'utf8').then((data) => {
        notes = [].concat(JSON.parse(data))
        res.json(notes)
    }
})



