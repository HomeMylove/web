const fs = require('fs')

const p = new Promise((resove, reject) => {
    fs.readFile('./chg.md', 'utf8', (err, dataStr) => {
        if (err) reject(err)
        resove(dataStr)
    })
})
p.then(value => {
    return new Promise((resove, reject) => {
        fs.readFile('./jys.md', 'utf8', (err, dataStr) => {
            if (err) reject(err)
            resove([value, dataStr])
        })
    })
}).then(value => {
    return new Promise((resove, reject) => {
        fs.readFile('./cx.md', 'utf8', (err, dataStr) => {
            if (err) reject(err)
            resove([...value, dataStr].join('\r\n'))
        })
    })
}).then(value => {
    console.log(value);
})