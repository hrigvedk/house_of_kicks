const express = require('express')
require('./db/mongoose')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})