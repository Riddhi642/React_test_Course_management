// add, view, edit, and delete courses,
const courseModel = require('../model/courseModel');

exports.addCourse=async (req,resp) => {
    const new_course= new courseModel(req.body)
    const result= await new_course.save()
    resp.status(200).json(result)
}

exports.showCourses= async (req,resp) => {
    const course= await courseModel.find()
    if (course!=null) {
        resp.status(200).json(course)
    } else {
        resp.status(404).json({message:'Courses not found'})

    }
}

exports.showCourse =async (req,resp) => {
    const course=await courseModel.findById(req.params.id)
    if (course!=null) {
        resp.status(200).json(course)
    } else {
        resp.status(404).json({message:'Course not found'})

    }
}

exports.updateCourse= async (req,resp) => {
    const course=await courseModel.findByIdAndUpdate(req.params.id,req.body)
    resp.status(200).json({message:'Course Updated Successfully...'})
}

exports.deleteCourse=async (req,resp) => {
    const course=await courseModel.findByIdAndDelete(req.params.id)
    if (course!=null) {
        resp.status(200).json({message:'Course Deleted'})
    } else {
        resp.status(404).json({message:'Course not Found...'})
    }
}