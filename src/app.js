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
    const marioId = req.params.id;
    if (!marioId){
        res.status(400).send({ message: error.message })
    }
    marioModel.find({ _id: marioId })
    .then((mariochars) =>
      mariochars.map((mariochars) => res.send(mariochars))
    )
    .catch((error) => res.status(400).send({ message: error.message }));
  return;
});

app.post('/mario',(req,res)=>{
    const mario= new marioModel({
        ...req.body,
        weight: parseInt(req.body.weight)
    })

    if(!mario.name || !mario.weight){
        
        //res.setHeader('{"content-type":"application/x-www-form-urlencoded"}');
        res.status(400).send({message: 'either name or weight is missing'});
        return;
    }
    marioModel.save().then((mario)=>res.send(201,mario))
    
})



module.exports = app;