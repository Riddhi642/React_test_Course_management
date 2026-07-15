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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});