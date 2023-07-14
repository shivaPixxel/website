const mongoose = require('mongoose')

const servicesSchema = mongoose.Schema({
    heading:String,
    content:String,
    readMore:String
})

module.exports = mongoose.model('services', servicesSchema)