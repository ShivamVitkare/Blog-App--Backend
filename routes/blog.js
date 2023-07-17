

const express=require("express")

const router=express.Router();

//import controller

const {dummyLink,likePost, unlikePost}= require("../controllers/LikeController")
const {createComment}=require("../controllers/CommentController")
const {createPost,getAllPost}=require("../controllers/PostController")



//mapping create

router.get("/dummyRoute ",dummyLink)
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllPost )
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)


//export

module.exports=router