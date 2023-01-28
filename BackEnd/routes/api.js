var express =require('express');
const { data } = require('jquery');
const { default: mongoose } = require('mongoose');
var router = express.Router();

// creating routes and apis
var User = mongoose.model('User');
//api to post user information based on user schema
router.post('/postUserInfo',(req,res)=>{
    var body = req.body;
    console.log(body);
    var user = new User(body);
    console.log(user);
    user.save().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })

})
//get api
router.get('/getUserInfo',(req,res)=>{
    User.find().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
//getUserById/123
router.get('/getUserById/:id',(req, res)=>{
    User.find({"_id":req.params.id}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
    
})
router.put('/updateUser/:id',(req,res)=>{
    var body=req.body;
    User.updateOne({"_id": req.params.id}, {$set:body}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
router.delete('/deleteUser/:id', (req,res)=>{
    User.deleteOne({'_id':req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(500).send(err);
    })
})
module.exports =router;