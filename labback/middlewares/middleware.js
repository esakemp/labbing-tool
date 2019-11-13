const fs = require('fs')
let db = require('../data/indexdb.json')
const indexfilename = './data/indexdb.json'

const getNewId = () => {
    const newIndex = db.indexes.length + 1
    db.indexes.push(newIndex)
    writeJSONFile(indexfilename, db)
    return newIndex
}

const writeJSONFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    writeJSONFile,
    getNewId
}