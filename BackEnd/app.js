const express =require('express');
const mongoose = require('mongoose');

const cors =require('cors');
const cookie = require('cookie-parser');


const app =express();

//mongoose connection
mongoose.connect('mongodb://localhost:27017/crud',{useNewUrlParser:true}).then(()=>{
    console.log('MongoDB Connected!!')
}).catch(err=>{
    console.log('MongoDb Connection Failed:'+err);
});

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(cookie());

var corsOptions ={
    origin:['http://localhost:4200'],
    methods:'GET,POST,PUT,DELETE',
    credentials: true
}

app.use(cors(corsOptions));

var server = app.listen(3000, ()=>{
    console.log('Server is live on %d port',server.address().port)
})

//importing models in app
require('./models/model');
var api = require('./routes/api');

app.use('/api',api);

module.exports=app;
