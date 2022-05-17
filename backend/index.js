// dependencies
const express = require('express')

//config
require ('dotenv').config()
const PORT = process.env.PORT
const app = express()

// routes
app.get('/', (req, res) => {
    res.send('<h1>BACKEND CONNECTED</h1>')
})

// listen
app.listen(PORT,() => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})