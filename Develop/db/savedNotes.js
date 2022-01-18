const fs = require('fs');
const readFile = (fs.readFile);
const writeFile = (fs.writeFile);



class Save {
    read() {
        return readFile('db/db.json', 'utf8')

    }

}