const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://frostbyteb:test123@cluster0.qfzemm4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose
