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
    marioModel.find().then(ele => {
        res.send(ele)
        return
    })
    
})

app.get('/mario/:id',(req,res)=>{
    const marioId = parseInt(req.params.id);
    marioModel.find({ _id: marioId })
    .then((mariochars) =>
      mariochars.map((mariochars) => res.send(mariochars))
    )
    .catch((error) => res.status(400).send({ message: error.message }));
  return;
});



module.exports = app;