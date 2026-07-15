const express = require('express');

const {
    addCourse,
    showCourses,
    showCourse,
    deleteCourse,
    updateCourse
} = require('../controller/courseController');


const routes = express.Router();



routes.post('/add', addCourse);


routes.get('/', showCourses);


routes.get('/:id', showCourse);


routes.put('/:id', updateCourse);


routes.delete('/:id', deleteCourse);



module.exports = routes;