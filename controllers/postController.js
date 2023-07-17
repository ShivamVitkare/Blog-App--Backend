 const Post=require("../models/postmodel")

 exports.createPost=async(req,res)=>{
    try{


        //data fetch

        const {title,body}=req.body;

        //object update
        const post=new Post({
            title,body
        })

        //data save
         const savePost=await post.save();
      

         res.json({
            post:savePost,
         })

    }catch(error){
return res.status(400).json({
      error:"Error while creating post"
})
    }
 }

 exports.getAllPost=async(req,res)=>{
    try{

        const posts=await Post.find().populate("likes").populate("comments").exec();
         res.json({
            posts,
         })
 

    }catch(err){


        return res.status(400).json({
            err:"Error occured"
        })
    }
 }