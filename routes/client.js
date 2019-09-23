const mongoose = require('mongoose'); 
const express = require('express');
const router = express.Router();
const {Client} = require('../model/client');

router.post('/create_description',async(req,res)=>{
    //create a client to store the information send in by the client
    let client = new Client({
        name:req.body.name,
        description:req.body.description
    });
    client= await client.save();
    //
    let token = client.generateToken();
    res.send(token) ;

});

router.get('/',async(req,res)=>{
   let customer = await Client.find();
   res.send(customer);
})

module.exports= router