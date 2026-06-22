//  id (number)
//  courseName (string)
//  instructor (string)
//  category (string)
//  duration (number – in hours)
//  level (string – Beginner / Intermediate / Advanced)
//  thumbnail (file or image URL preview)

const mongoose = require('mongoose');

const courseSchema=new mongoose.Schema({
    id:Number,
    courseName:String,
    instructor:String,
    category:String,
    duration:Number,
    level:String,
    thumbnail:String

},{
    timestamps:true
})

const courseModel= mongoose.model('course',courseSchema)

module.exports=courseModel