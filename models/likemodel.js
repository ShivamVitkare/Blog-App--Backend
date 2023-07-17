const mongoose=require("mongoose")


//rout handler

const likeSchema=new mongoose.Schema({
    post:{
        //which post pe like

         type:mongoose.Schema.Types.ObjectId,
         ref:"Post",//ref to the post model
        
     },

     //whos like
      user:{
        type:"String",
        required:true,
      },
})

 module.exports=mongoose.model("Like",likeSchema);