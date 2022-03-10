const mongoose = require('mongoose')

const CarsSchema = new mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    title: {type: String, required: true},
    subtitle: {type: String, required: false},
    price: {type: Number, required: true},
    prevPrice: {type: Number, required: false},
    location: {type: String, required: false},
    odometer: {type: Number, required: true},
    image: {type: String, required: false},
    description: {type: String, required: false}
})

const model = mongoose.model('Cars', CarsSchema)

module.exports = model
