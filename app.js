const mongoose = require('mongoose'); 
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const upload = require('./routes/upload');
const client = require('./routes/client')
mongoose.connect('mongodb://localhost/Testing',{useNewUrlParser:true})
        .then(()=>console.log('connected to DB'))
        .catch((err)=>console.log('Not Connected to db'));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//main public folder
app.use(express.static("./public"));
//uploads Multer folder
app.use(express.static("./uploads"));

// app.use('/',(req,res)=>{
//         res.sendFile(path.join(__dirname + "/index.html"));
// });

app.use('/upload',upload);
app.use('/client',client);
app.listen('5050',()=>console.log('connected to server'));

// 