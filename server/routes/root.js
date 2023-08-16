const express = require('express')
const router = express.Router()


router.get('/user', (req, res) => {
    console.log(req.path)
    res.send("test")
})

module.exports = router