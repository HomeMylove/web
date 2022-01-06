const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('HELLO AJAX')
})

app.listen(80, () => {
    console.log('express server is running at http://127.0.0.1');
})