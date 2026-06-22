const mongoose = require('mongoose');

const coonectDB=  () => {
    mongoose.connect('mongodb://localhost:27017/course')
    .then(() => {
        console.log("Connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports={coonectDB}