const express = require('express')
const app = express()
const port = process.env.PORT | 4000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./routes/main')

const uri = "mongodb+srv://pixxelarts:aTjkaNnNR6eSIKPA@dynamicwebsite.0j1proq.mongodb.net/pixxelarts?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: true }))
// View engine
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('',route)
app.use(express.json())


// database Connection
// mongoose.connect("mongodb://0.0.0.0:27017/dynamicwebsite")

try{
    mongoose.connect(uri)
}catch(err){
    console.log(err)
}


app.listen(port,()=>{console.log(`server is running at port: ${port}`)})