const express = require('express')
const app = express()

const router = require('./11apiRouter')
    // 解决跨域问题
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', router)

app.listen(80, () => {
    console.log('express server is running at 127.0.0.1');
})