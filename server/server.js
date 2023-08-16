const express = require('express')
const app = express()
require('dotenv').config()

const corsOptions = require('./config/corsOptions')
const cors = require('cors')

app.use(cors(corsOptions))
app.use(express.json())


app.use('/', require('./routes/root'))
/*
app.use('/user', require('./routes/userRoutes'))

app.use('/class', require('./routes/classRoutes'))

app.use('/user/test', (req, res) => {
    res.send('this is weird')
})
*/

/*
app.use('/a', )


app.use('/a/b', (req, res) => {
    res.send('route: /a/b')
})


app.use('/a/b/c', (req, res) => {
    res.send('route: /a/b/c')
})
*/
app.use((req, res, next) =>{
    console.log(req.body)
    next()
})

app.all('*', (req, res) => {
    res.status(404)
    res.type('txt').send('404 error, requested resource not found')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

