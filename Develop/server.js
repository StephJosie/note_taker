const express = require('express');
const path = require('path');
const indexHTMLRoutes = require('./routes/indexHTMLRoutes.js')


const app = express()
const PORT = process.env.PORT || 3007


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api', indexHTMLRoutes);
// app.use('/', indexHTMLRoutes);
app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, './public/index.html'))
}
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(PORT, () => console.log(`listening on port: ${PORT} `))





