const express=require("express")

const app=express()

require("dotenv").config()

const PORT=process.env.PORT || 3000

//middleware
app.use(express.json());

const blog=require("./routes/blog")

//mount

app.use("/api/v1",blog)


const connectwithDb=require("./config/database")

connectwithDb();



app.listen(PORT,()=>{
    console.log(`App started at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("This is Homepage");
})  