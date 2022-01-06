const fs = require('fs')

const p = new Promise(function(resove, reject) {
    fs.readFile('./chg.md', 'utf8', (err, dataStr) => {
        if (err) reject(err)
        resove(dataStr)
    })
})

p.then(value => {
    console.log(value);
}, reason => {
    console.log(reason);
})