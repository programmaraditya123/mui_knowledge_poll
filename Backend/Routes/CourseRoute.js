const express = require('express');
const { addCourse, getVideo } = require('../controllers/CourseController');
 

const Router = express.Router();

Router.post("/postCourse",addCourse);

Router.get('/video/:filename',getVideo);
 

 

 
  

module.exports = Router;