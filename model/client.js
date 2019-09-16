const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken')
const descSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    uploadID:{type:String}
});
descSchema.methods.generateToken = function(){
    let token = jwt.sign({_id:this._id},"12345");
    return token;
}
const Client = mongoose.model('Client',descSchema);

exports.Client=Client;