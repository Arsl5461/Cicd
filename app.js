const express=require("express")
const app=express()
const PORT=5005;

app.listen("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})