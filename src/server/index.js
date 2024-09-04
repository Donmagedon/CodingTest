const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const ENTRY_POINT = 5500
const index = path.join(__dirname,"../index.html")

app.use((req,res,next)=>{    
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()    
  })
app.use("/",(req,res,next)=>{
    res.sendFile(index)
})

app.listen(ENTRY_POINT,"0.0.0.0",()=>{
    console.log("connected succesfully!")
})