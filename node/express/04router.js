// 这是路由模块
const express = require('express')
    // 创建路由对象
const router = express.Router()

// 挂载路由
router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

module.exports = router