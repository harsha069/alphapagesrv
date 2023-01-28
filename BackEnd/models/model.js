const mongoose =require('mongoose');
const Schema =mongoose.Schema;

//User Collection Schema
const userSchema =new Schema({
    email : {type: String, required:true},
    pwd : {type: String, required:true},
    first_name : {type:String , required: true},
    last_name: {type:String , required:true},
    gender: {type:String , required:true}
})
mongoose.model('User',userSchema);

   