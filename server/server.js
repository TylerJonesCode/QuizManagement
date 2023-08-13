const express = require('express')
const app = express()
require('dotenv').config()

const corsOptions = require('./config/corsOptions')
const cors = require('cors')
app.use(cors(corsOptions))


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:5050')
})

