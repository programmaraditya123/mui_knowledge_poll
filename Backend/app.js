const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');
const {connectDB,getBucket} = require('./config/db');
const AIcontentRoute = require('./Routes/AIcontentRoute');
const CourseRoute = require('./Routes/CourseRoute')
const authUserRoute = require('./Routes/authUserRoute')
const searchRoute = require("./Routes/searchRoute");
const UpdatePageViews = require("./Routes/UpdatePageViews");
const KnowledgeTube = require('./Routes/KnowledgeTube')
const multer = require("multer");
//const { GridFsStorage } = require("multer-gridfs-storage");
//const mongoose = require("mongoose");
//const Grid = require("gridfs-stream");
//const { MongoClient, GridFSBucket } = require('mongodb');
const { Readable } = require('stream');
const path = require('path');
const Course = require('./Models/CourseModel');
require("dotenv").config();
// const http = require('http');
// const {Server} = require('socket.io');

const app = express();
//app.set('trust proxy', true);
// const server = http.createServer(app);

// const io = new Server(server,{
//   cors:{
//       origin:["http://localhost:5173",'https://main.d2jgjuq5es9kag.amplifyapp.com'],
//       methods:["GET","POST"],
//       credentials:true,
//   }
// });


const cors = require('cors');

const allowedOrigins = [
  'https://www.knowledgepoll.site',
  'http://localhost:5173',
  'https://knowledgepoll.site',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));





//socket section

//store connected users
// let activeUsers = new Set();

// io.on("connection",(socket) => {
//   const ip =
//   socket.handshake.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
//   socket.handshake.address;

//   console.log(`user connected with id : ${socket.id},IP:${ip}`)
//   activeUsers.add(socket.id)


//   //emit active users to admin
//   io.emit('updateUserCount',activeUsers.size);

//   socket.on('disconnect',() => {
//     console.log(`user disconnected with id : ${socket.id}`)
//     activeUsers.delete(socket.id);
//     io.emit('updateUserCount',activeUsers.size)
//   });

//     // Optional: Collect metadata (IP, page, browser, etc.)
//     socket.on('userData', (data) => {
//       console.log('User Data Received:', data,"IP",ip);
//       // Save to DB or cache for admin panel if needed
//       const fullData = {
//         ...data,
//         ip
//       }
//       io.emit('userData',fullData)
//     });
// });

  

  

app.use(express.json());

connectDB();

const storage = multer.memoryStorage();
const upload = multer({ storage });
 

//Routes
app.use("/app/getcont",AIcontentRoute);

app.use("/app/getcourse",CourseRoute);

app.use("/app/userauth",authUserRoute);

app.use("/app/searchdb",searchRoute);

app.use("/app/updateuser",UpdatePageViews);

//knowledgetube route 

app.use("/app/knowtube",KnowledgeTube)

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
          if (!req.body.courseId || !req.body.sequenceNumber) {
            return res.status(400).json({ message: "Course ID and sequence number are required" });
           }
        
            try {
              const { courseId , sequenceNumber } = req.body;
                console.log("Updating course with ID:", courseId);
                console.log("Updating course with sequence number:",sequenceNumber);
                console.log("Course video with file name:" , manualFilename);
                // update course document with uploaded file name
                const updateCourse = await Course.findByIdAndUpdate(courseId,{$push : {videos : { sequenceNumber,videoName : manualFilename}}},{new:true});

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



const PORT = process.env.PORT || 8081;
//console.log(PORT)


app.listen(PORT,() => {
    console.log(`app.js is runing on port  ${PORT}`)
})