const path = require('path');
const Routes = require('express').Router();

Routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

Routes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));

});
Routes.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

})

module.exports = Routes