const mongoose = require('mongoose')
const Schema = mongoose.Schema

testSchema = new Schema ({
    some_text: String,
})

module.exports = mongoose.model('texts', testSchema)