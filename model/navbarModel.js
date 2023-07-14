const mongoose = require('mongoose')

const navbarSchema = mongoose.Schema({
    label:String,
    link:String
})

module.exports = mongoose.model('navbar', navbarSchema)