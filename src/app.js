const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get('/mario',(req,res)=>{
    const charArray = marioModel.find()
    res.send(charArray)
})

app.get('/mario/:id',(req,res)=>{
    const stId = parseInt(req.params.id);
    const stDetails = marioModel.find(stu => stu.id===stId)
    if (stDetails){
        res.send(JSON.parse(JSON.stringify(stDetails)))
    }else{
        res.status(400).send({message: error.message})
    }
    
})



module.exports = app;