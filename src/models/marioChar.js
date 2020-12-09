const mongoose = require('mongoose');
const {Schema} = mongoose
//  Your code goes here
const marioSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    weight:{
        type: Number,
        required: true,
    },
    
})
const marioModel = mongoose.model('mariochar',marioSchema)

module.exports = marioModel
