const express = require('express')
const app = express()
const http = require('http')


const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

const corsOptions = require('./config/corsOptions')
const cors = require('cors')
app.use(cors(corsOptions))

io.on('connection', socket=>{
    console.log("A user has connected: ", socket.id)
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

/*
const io = require('socket.io')(8080, {
    cors: {
        origin: ['http://localhost:5050'],
    },
})
*/


server.listen(5050, () => {
    console.log('Server is running on http://localhost:5050')
})

