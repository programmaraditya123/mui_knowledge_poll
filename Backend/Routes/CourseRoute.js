const express = require('express');
const { addCourse, getVideo, getallCourses, getoneCourses } = require('../controllers/CourseController');
 

const Router = express.Router();
Router.get('/getcoursebyid',getoneCourses)

Router.post("/postCourse",addCourse);

Router.get('/video/:filename',getVideo);

Router.get('/getcourses',getallCourses);

 

 

 
  

module.exports = Router;