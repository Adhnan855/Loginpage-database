const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignupTutorial")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LoginSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        require:true
    }
})

const collection=new mongoose.model("Collection1",LoginSchema)
module.exports=collection