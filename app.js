const express=require("express")
const app=express()
const PORT=5005;

app.use("/",(req,res)=>{
    res.json({message:"Hello World"})
})


app.use("/health",(req,res)=>{
    res.json({message:"Hello World From PNY"})
})
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})