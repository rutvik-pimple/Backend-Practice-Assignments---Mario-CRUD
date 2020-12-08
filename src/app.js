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
app.get('http://localhost:3000/mario',(req,res)=>{
    const charArray = marioModel.find()
    res.send(charArray)
})

app.get('http://localhost:3000/mario/:id',(req,res)=>{
    const marioId = parseInt(req.params.id);
    const marioDet = marioModel.find(mar => mar.id===marioId)
    if (marioDet){
        res.send(JSON.parse(JSON.stringify(marioDet)))
    }else{
        res.status(400).send({message: error.message})
    }
    
})



module.exports = app;