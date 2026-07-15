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

routes.delete('/:id', deleteCourse);

routes.put('/:id', updateCourse);

module.exports = routes;