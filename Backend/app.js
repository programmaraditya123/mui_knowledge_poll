const express = require('express');
//const cors = require('cors');
const axios = require('axios');
const bodyparser = require('body-parser');
const {connectDB,getBucket} = require('./config/db');
const AIcontentRoute = require('./Routes/AIcontentRoute');
const CourseRoute = require('./Routes/CourseRoute')
const authUserRoute = require('./Routes/authUserRoute')
const searchRoute = require("./Routes/searchRoute")
const multer = require("multer");
//const { GridFsStorage } = require("multer-gridfs-storage");
//const mongoose = require("mongoose");
//const Grid = require("gridfs-stream");
//const { MongoClient, GridFSBucket } = require('mongodb');
const { Readable } = require('stream');
const path = require('path');
const Course = require('./Models/CourseModel');
require("dotenv").config();

const app = express()

const cors = require("cors");
app.use(cors({
    origin: ['http://localhost:5173', 'https://knowledgepoll.site'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  

app.use(express.json());

connectDB();

const storage = multer.memoryStorage();
const upload = multer({ storage });
 

//Routes
app.use("/app/getcont",AIcontentRoute);

app.use("/app/getcourse",CourseRoute);

app.use("/app/userauth",authUserRoute);

app.use("/app/searchdb",searchRoute);

app.get('/home',(req,res) =>{
    res.send("Heelo aditya this is home route")
})

app.get('/about',(req,res) => {
    res.send("This is about page")
})

app.post('/upload',upload.single('video'),(req,res) => {
    // const {courseid} = req.body;
    if(!req.file) return res.status(400).json({message:"No file uploaded"})

    
        const bucket = getBucket(); // Get bucket AFTER DB connection
        if (!bucket) return res.status(500).json({ message: "GridFSBucket not initialized" });

        const manualFilename = req.body.filename 
        ? req.body.filename + path.extname(req.file.originalname) // Preserve extension
        : req.file.originalname;

        const readableStream = new Readable();
        readableStream.push(req.file.buffer);
        readableStream.push(null);

        const uploadStream = bucket.openUploadStream(manualFilename,{
            contentType:req.file.mimetype
        });

        readableStream.pipe(uploadStream)
        .on('error',(err) => res.status(500).json({message:err.message}))
        // .on('finish',() => res.status(201).json({message:'video uploaded',fileId:uploadStream.id,filename:manualFilename}));
        .on('finish',async () => {
            try {
                console.log("Updating course with ID:", req.body.courseId)
                // update course document with uploaded file name
                const updateCourse = await Course.findByIdAndUpdate(req.body.courseId,{videoName:manualFilename},{new:true});

                if(!updateCourse){
                    return res.status(404).json({message:"Course Not Found"})
                }
                res.status(201).json({
                    message:'Video Uploaded and course Updated',
                    fileid:uploadStream.id,
                    filename:manualFilename,
                    updateCourse
                });
            } catch (error) {
                res.status(500).json({message:"Error in updating Course"})
                
            }
        });

});



PORT = process.env.PORT || 8080;
//console.log(PORT)


app.listen(PORT,() => {
    console.log(`app.js is runing on port  ${PORT}`)
})