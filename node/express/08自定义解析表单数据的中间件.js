const express = require('express')
const app = express()

const bodyParser = require('./09custom-body-parse')

app.use(bodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
    console.log('ok');
})


app.listen(80, () => {
    console.log('express server is running at 127.0.0.1');
})