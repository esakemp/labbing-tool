const fs = require('fs')
const db = require('../data/db.json')

const getNewId = () => {
    if (db.measurements.length > 0) {
        const newIndex = Number(db.measurements[db.measurements.length - 1].id) + 1
        return newIndex
    }
    return 1
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