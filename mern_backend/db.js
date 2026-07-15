const mongoose = require('mongoose');

const coonectDB=  () => {
    mongoose.connect(
  "mongodb+srv://riddhikhatate_db_user:Vn1qqgbEkbiQpM6S@cluster0.jepgubh.mongodb.net/course?retryWrites=true&w=majority&appName=Cluster0"
)
    .then(() => {
        console.log("Connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports={coonectDB}