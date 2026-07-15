const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({

    id:Number,

    courseName:{
        type:String,
        required:true
    },

    instructor:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    duration:{
        type:Number,
        required:true
    },

    level:{
        type:String,
        required:true
    },

    thumbnail:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});


const courseModel = mongoose.model(
    "course",
    courseSchema
);


module.exports = courseModel;