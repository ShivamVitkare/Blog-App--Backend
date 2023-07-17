const mongoose=require("mongoose")

//route handler

const commentSchema=new mongoose.Schema({
     post:{
        //id denote

         type:mongoose.Schema.Types.ObjectId,
         ref:"Post",//ref to the post model
        
     },

     //whos commenting
      user:{
        type:"String",
        required:true,
      },

      //what commenting
      body:{
        type:String,
        required:true,
      }
})




//export
 module.exports=mongoose.model("Comment",commentSchema)