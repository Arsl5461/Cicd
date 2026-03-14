const express=require("express")
const app=express()
const PORT=5005;

app.send("/",(req,res)=>{
    res.json({message:"Hello World"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})