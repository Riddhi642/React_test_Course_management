const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db');
const routes = require('./router/courseRoute');


const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended:true }));


app.get('/', (req,res)=>{
    res.send("Course Management Backend is running");
});


app.use('/course', routes);


const PORT = process.env.PORT || 4000;


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});