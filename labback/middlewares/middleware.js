const fs = require('fs')
const db = require('../data/db.json')

const getNewId = () => {
    const newIndex = Number(db.measurements[db.measurements.length - 1].id) + 1
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