const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('express server is running at 127.0.0.1');
})