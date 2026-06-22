const express = require('express');
const {coonectDB} = require('./db');
const routes = require('./router/courseRoute');
const cors = require('cors');
coonectDB()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/course',routes)

app.listen(4000,()=>{
    console.log("Running...");
    
})