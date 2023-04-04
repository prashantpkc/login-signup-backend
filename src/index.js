const express = require('express')

const mongoose = require('mongoose')

const router = require('./routes/route')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://prashantpkc123:Prashant123@prashant.2lyameg.mongodb.net/signup-login")
.then( ()=> console.log("DB is connected"))
.catch(
    (err)=>console.log(err)
)

app.use('/', router);

app.listen(process.env.port || 5000, ()=> {
    console.log('Running at Port 5000')
})



