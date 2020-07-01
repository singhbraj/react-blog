const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://braj3978:braj3978@cluster0.0yzsj.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log('DB connected')
}).catch(err => console.error(err));


app.get('/',(req,res)=>{
    res.send('hello world!!')
})


app.listen(5000);
