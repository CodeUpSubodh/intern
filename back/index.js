const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongooose = require("mongoose");
const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,

  },
  state: {
    type: String,
    required: true,

  },
  address: {
    type: String,
    required: true,

  },
  lat:{
    type: Number,
    

  },
  lon:{
    type: Number,
    

  }
});
const User = new mongooose.model("USER", userSchema);
const port = process.env.PORT || 9000;
require("./db/conn");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

app.post("/",(req,res)=>{
    const {name,email,password,password2,mobile,city,state,address,lat,lon} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(err){
            res.send(err);
        }
        if(user){
            res.send({message:"User Already Exists"});
        }
        else{
            const user = new User({
                name,
                email,
                password,
                password2,
                mobile,
                city,
                state,
                address,
                lat,
                lon
            });
            user.save().then(()=>{
                res.send({message:"User Created"});
                res.redirect('/')
            }).catch((err)=>{
                res.send(err);
            });
       }
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});