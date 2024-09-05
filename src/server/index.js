const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const ENTRY_POINT = 5500
const JSON_FILE = path.join(__dirname,"../../package.json")

app.use((req,res,next)=>{    
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()    
  })
app.use(express.static(path.join(__dirname,"../public")))
app.get("/api/v1",(req,res,next)=>{
    res.sendFile(JSON_FILE)
})

app.listen(ENTRY_POINT,()=>{
    console.log("connected succesfully!")
})