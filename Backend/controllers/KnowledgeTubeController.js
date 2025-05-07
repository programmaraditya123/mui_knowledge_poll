const { Storage } = require('@google-cloud/storage');
const path = require('path');
const knowtube = require('../Models/KnowTubeModel');
require('dotenv').config();

const gcpCredentials = JSON.parse(process.env.GCP_CREDENTIALS)

const storage = new Storage({
    keyFilename: gcpCredentials,
    projectId: process.env.GCP_PROJECT_ID,
  });

const bucket = storage.bucket(process.env.GCS_BUCKET);


 

const getPresignedUrl = async (req,res) => {
    try {
        const { filename } = req.params;
        const options = {
          version: 'v4',
          action: 'read',
          expires: Date.now() + 15 * 60 * 1000, // 15 mins
        };
    
        const [url] = await bucket.file(`videos/${filename}`).getSignedUrl(options);
        res.status(200).json({ url });
      } catch (error) {
        res.status(500).json({ error: 'Failed to get signed URL' });
      }
};

const uploadVideo = async (req,res) => {
    try {
        const blob = bucket.file(`videos/${Date.now()}-${req.file.originalname}`);
        const blobStream = blob.createWriteStream({
          resumable: true,
          contentType: req.file.mimetype,
        });
    
        blobStream.on('finish', () => {
          res.status(200).json({
            message: 'Upload successful',
            fileName: blob.name,
          });
        });
    
        blobStream.end(req.file.buffer);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Upload failed' });
      }
};



//upload knowtube with video and data
const uploadtubevideo = async (req, res) => {
    try {
        const { title, description, category, creator,TTOC ,videoUrl, tags } = req.body;
        // validations 
        switch (true) {
            case !title:
                return res.status(500).send({ error: 'Title is required' });
            case !description:
                return res.status(500).send({ error: 'description is required' });
            case !category:
                return res.status(500).send({ error: 'Category is required' });
            case !creator:
                return res.status(500).send({ error: 'Instructor  is required' });
            case TTOC === undefined || TTOC === null:
                return res.status(400).send({ error: ' Total Time of the video' });
            case !videoUrl:
                return res.status(400).send({ error: ' VideoUrl is requires' });
            // case !videos || !Array.isArray(videos):
            //     return res.status(400).send({ error: 'Videos array is required' });


        }
        const newCourse = new knowtube({
          title, description, category, creator,TTOC ,videoUrl, tags 
        })
        await newCourse.save();
        res.status(201).send({
            success: true,
            message: "Course added succesfully",

        })

    } catch (error) {
        console.log("Error", error)

    }
};



const getKnowTubeVideos = async(req,res) => {
  try {
    const data = await knowtube.find({});
    res.json(data)
    
  } catch (error) {
    console.log(error)
    
  }
}

module.exports={getPresignedUrl,uploadVideo,uploadtubevideo,getKnowTubeVideos}