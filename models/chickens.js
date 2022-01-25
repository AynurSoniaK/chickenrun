const mongoose = require('mongoose')

const chickenSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    birthday: Date,
    weight: {type: Number, required: true},
    steps: Number,
    isRunning: Boolean,
    coop: {type: mongoose.Schema.Types.ObjectId, ref: 'coops'},
})

const chickenModel = mongoose.model('chickens', chickenSchema)

module.exports = chickenModel