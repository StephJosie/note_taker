const express = require('express');
const notesRoutes = require('./routes/notesRoutes')
const indexHTMLRoutes = require('./routes/indexHTMLRoutes')
const app = express()
const PORT = process.env.PORT || 3007

app.use(express.json())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', notesRoutes);
app.use('/', indexHTMLRoutes);
app.use(express.static('public'));

app.listen(PORT, () => console.log(`listening on port: ${PORT} `))