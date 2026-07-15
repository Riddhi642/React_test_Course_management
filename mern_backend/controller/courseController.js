const courseModel = require('../model/courseModel');


// ADD COURSE

exports.addCourse = async(req,res)=>{

    try{

        const new_course = new courseModel(req.body);

        const result = await new_course.save();

        res.status(200).json(result);

    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:err.message
        });

    }

};



// SHOW ALL COURSES

exports.showCourses = async(req,res)=>{

    try{

        const course = await courseModel.find();

        res.status(200).json(course);

    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:err.message
        });

    }

};



// SHOW SINGLE COURSE

exports.showCourse = async(req,res)=>{

    try{

        const course = await courseModel.findById(req.params.id);


        if(course){

            res.status(200).json(course);

        }
        else{

            res.status(404).json({
                message:"Course not found"
            });

        }


    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:err.message
        });

    }

};



// UPDATE COURSE

exports.updateCourse = async(req,res)=>{

    try{

        await courseModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );


        res.status(200).json({
            message:"Course Updated Successfully"
        });


    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:err.message
        });

    }

};



// DELETE COURSE

exports.deleteCourse = async(req,res)=>{

    try{

        const course = await courseModel.findByIdAndDelete(
            req.params.id
        );


        if(course){

            res.status(200).json({
                message:"Course Deleted"
            });

        }
        else{

            res.status(404).json({
                message:"Course not found"
            });

        }


    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:err.message
        });

    }

};