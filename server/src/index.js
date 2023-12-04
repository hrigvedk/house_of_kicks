const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const sneakerRouter = require('./routers/sneaker')
var cors = require('cors')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(userRouter)
app.use(sneakerRouter)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    res.setHeader('Access-Control-Allow-Methods','POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
  });
app.use(cors())

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})