const express=require('express')

const app=express()
require("dotenv").config();


app.listen(process.env.PORT,()=>{
    console.log(`Server Run is Running Port Number ${process.env.PORT}`);
    
})

