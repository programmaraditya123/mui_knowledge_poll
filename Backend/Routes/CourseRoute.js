const express = require('express');
const { addCourse, getVideo, getallCourses, getoneCourses } = require('../controllers/CourseController');
 

const Router = express.Router();

Router.post("/postCourse",addCourse);

Router.get('/video/:filename',getVideo);

Router.get('/getcourses',getallCourses);

Router.get('/getcoursebyid',getoneCourses)
 

 

 
  

module.exports = Router;