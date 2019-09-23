const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken')
const descSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    uploadID:{type:String}
});
descSchema.methods.generateToken = function(){
    let payload ={_id:this._id,uploadID:this.uploadID};
    let secretkey = "12345";
    let token = jwt.sign(payload,secretkey);
    return token;
}
const Client = mongoose.model('Client',descSchema);

exports.Client=Client;