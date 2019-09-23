const mongoose = require('mongoose'); 
const express = require('express');
const {UploadDB} = require('../model/upload');
const {Client} = require('../model/client');
const {upload} = require('../multer/storage');
const router = express.Router();


router.post('/:id', (req, res) => {
  //let mongoID = req.params.id;
  //if(mongoID) return res.status(404).json({"msg":"Already uploaded"});
 upload(req,res,(err)=>{
   if(err){
     res.json({"Error":err});
   }
   else {
      if(req.file == undefined){ }
      else {
       // console.log(req.file);
        let newUpload = new UploadDB({
          path:req.file.filename
           });
        newUpload.save()
            .then((value)=>{
              Client.findOneAndUpdate({_id:req.params.id},
                { $set:{uploadID:value._id}},{new:true})
                .then((value)=>{
                  console.log(value)
                  res.send(value);
                })           
            })
            .catch(err=>{ console.error(err)});
      }
  }
 });


});


module.exports= router