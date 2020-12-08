const mongoose,{Schema} = require('mongoose');

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

module.exports = mongoose.model('marioChar',marioSchema)
