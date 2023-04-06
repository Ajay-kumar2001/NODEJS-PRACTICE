let mongoose= require("mongoose")
let user_schema=new mongoose.Schema({
    
    user_id:{
        type:String,
        require:true,
       
    },
    email:{
        type:String,
        require:true,
        
    },
    password:{
        type:String,
        require:true,
    
    },
    confirmPassword:{
         type:String,
        require:true,
        
    },
    roll:{
        type:String,
        default:"user"
    }
})
module.exports=mongoose.model("registers",user_schema)