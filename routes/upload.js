const mongoose = require('mongoose'); 
const express = require('express');
const multer = require('multer');
const {Upload} = require('../model/upload');
const {Client} = require('../model/client');
const {upload} = require('../multer/storage');
const router = express.Router();

// ,upload.single('upload')
let upload_= upload.single('upload');
router.post('/upload/:id',(req,res,next)=>{
    upload_(req, res, function (err) {
         // need to check if the req.file is set.
         

         if(req.file == null || req.file == undefined || req.file == ""){
            //redirect to the same url            
            res.send("Not a defined ");
            
        }
        else if (err instanceof multer.MulterError) {
            res.send(req.file.filename);
          // A Multer error occurred when uploading.
          return;
        } else if (err) {
          // An unknown error occurred when uploading.
          return;
        }
    
    });
    console.log(req.file);
    res.json({ fileUrl: 'http://192.168.0.7:5050/images/' + req.file.filename });

    // to store the path to the upload object
    
    // let newUpload = new Upload({
    //     path:req.file.filename
    // });
    // newUpload= await newUpload.save();
    //     let user = await Client.updateOne({_id:req.params.id},
    //              { $set:{uploadID:newUpload._id}},{new:true});
    //     res.send(user);
     
});

module.exports= router