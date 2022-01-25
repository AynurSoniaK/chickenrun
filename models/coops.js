const mongoose = require('mongoose')

const coopSchema = mongoose.Schema({
    number: Number,
    size: Number,
    material: String
})

const coopModel = mongoose.model('coops', coopSchema)

module.exports = coopModel