//import model
const Post=require("../models/postmodel")

const Comment=require("../models/commentsmodel")


//business Logic

exports.createComment=async(req,res)=>{
try{

    //fetch data from req body

    const{post,user,body}= req.body;

    //create a comment object 

    const comment=new Comment({
        post,user,body
    });

    //save the new comment into the database

    const saveComment=await comment.save();
    
    //find the post by Id , add the new comment add in array
//push-for new entry
//pull-for dele entry
     const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
.populate("comments")//for actual comments ke liye agar nhi kiya toh only ids
.exec();

res.json({
    post:updatePost
})



}catch(error){
    return res.status(500).json({
        error:"Error while commenting"
    })

}
}

