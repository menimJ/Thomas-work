const mongoose = require('mongoose'); 

const uploadSchema = new mongoose.Schema({
    path:{type:String,required:true}
});

const UploadDB = mongoose.model('UploadDb',uploadSchema);
exports.UploadDB = UploadDB;
