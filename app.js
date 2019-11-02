const express = require ('express');
const mongoose = require('mongoose');
const apirouter = require("./routes/apiServices");
const {Twofa}=require('./2FA/authenticator');

const app = express();
const dburl = "mongodb://localhost:27017/admin-module";
var twf = new Twofa();
console.log("TWF",twf);


app.get("/",(req,res)=>{
   res.send('we r in home');

});
app.get("/twofa", async (req,res)=>{
  
    await twf.qrCodeGen()
    // console.log("TWF",ret);
    var tests=twf.qrCode;
    console.log(tests)
    
    res.render('index',{'tests':tests});   
     
 });

 app.get("/validate",async (req,res)=>{
    
      await twf.tfaValidate()
      res.send('validated, token:'+ twf.token);   
       
   });
  

app.use("/api0",apirouter);


//DB connection
mongoose.connect(dburl,{useNewUrlParser:true},()=>
console.log("established connection with local mongodb"));
app.set('view engine', 'ejs');
//port listening to the server
app.listen(3000);
