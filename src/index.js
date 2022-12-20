
const express = require('express');
const route =require("./route/route.js");
const mongoose  = require('mongoose');

const app= express();


app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://yachika03:wkaTIq3zkjIou3YI@cluster0.t9qdtvx.mongodb.net/node_Assignment", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


 app.use('/', route);

 route.all("/*", function (req, res) { 
    res.status(400).send({status: false,message: "The api you request is not available"})
})


app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});

