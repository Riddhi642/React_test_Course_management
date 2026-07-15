const mongoose = require('mongoose');


const connectDB = () => {

    mongoose.connect(
        "mongodb+srv://riddhikhatate_db_user:Vn1qqgbEkbiQpM6S@cluster0.jepgubh.mongodb.net/course?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((err)=>{
        console.log("MongoDB Error :",err);
    });

};


module.exports = { connectDB };