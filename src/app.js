const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs')
const port=process.env.port ||3000;
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.static(mypublic))
app.set('view engine',"hbs");
hbs.registerPartials(mypartials);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// getting-started.js
const mongoose = require('mongoose');
const { stringify } = require('querystring');
main().catch(err => console.log(err));
async function main() {
mongoose.set('strictQuery',true);
await mongoose.connect('mongodb://127.0.0.1:27017/info');
};
const contactschema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    mobileno:Number,
    emailid:String,
    yourmessage:String
  });
  const Kitten = mongoose.model('Kitten',contactschema);
app.get("/",(req,res)=>{
const params={}
res.render('index')
})
app.post('/',async(req,res)=>{

const silence = new Kitten(
{ 
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    mobileno:req.body.mobileno,
    emailid:req.body.emailid,
    yourmessage:req.body.yourmessage

});
silence.save()
res.send("Successfull Submit")


})
app.listen(port);