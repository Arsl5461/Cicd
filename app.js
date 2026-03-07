const express=require("express")
const app=express()
const PORT=5005;
console.log("test")

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})