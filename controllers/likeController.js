
const Post=require("../models/postmodel")
const Like=require("../models/likemodel")

//like post

exports.likePost=async(req,res)=>{
    try{

        const{post,user}=req.body;

        const like=new Like({
            post,user
        })

        const saveLike=await like.save();

        //update post collection

        const updatePost=await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true}).populate("likes").exec()
      
        res.json({
            post:updatePost,
        })

    }catch(err){
        return res.status(400).json({
            err:"Error while liking occured"
        })
    }
}


exports.unlikePost=async(req,res)=>{
    try{

        const{post,like}=req.body;
         const deletedLike=await Like.findOneAndDelete({post:post,_id:like})

         //update the post collection

         const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})

         res.json({
            post:updatedPost
         })

    }catch(err){
        return res.status(400).json({
            err:"Error while unliking occured"
        })
    }
}




exports.dummyLink=(req,res)=>{
    res.send("This is Your Dummy Page")
}