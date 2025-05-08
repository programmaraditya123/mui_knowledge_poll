const path = require('path');
const knowtube = require('../Models/KnowTubeModel');
require('dotenv').config();
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const { Storage } = require('@google-cloud/storage');





// const { Storage } = require('@google-cloud/storage');
// const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
// require('dotenv').config();

// const client = new SecretManagerServiceClient();

async function accessSecret() {
  try {
    const projectId = process.env.GCP_PROJECT_ID;
    if (!projectId) {
      throw new Error('GCP_PROJECT_ID environment variable is not set');
    }
    const client = new SecretManagerServiceClient();
     
    const secretName = `projects/${projectId}/secrets/gcp-credentials/versions/latest`;
    const [version] = await client.accessSecretVersion({ name: secretName });
    
    if (!version.payload?.data) {
      throw new Error('Invalid secret version response - missing payload data');
    }

    const gcpCredentials = JSON.parse(version.payload.data.toString('utf8'));

    //  const credentialClient = new SecretManagerServiceClient({
    //   credentials: gcpCredentials
    // });
    
    // Validate credentials structure
    if (!gcpCredentials.client_email || !gcpCredentials.private_key) {
      throw new Error('Retrieved credentials are missing required fields');
    }

    const storage = new Storage({
      credentials: gcpCredentials,
      projectId,
    });

    // Verify the storage client works
    await storage.getBuckets().catch(err => {
      throw new Error(`Failed to initialize Storage client: ${err.message}`);
    });

    return storage;
  } catch (error) {
    console.error('Error in accessSecret:', error);
    throw error; // Re-throw to be handled by the caller
  }
}

const getPresignedUrl = async (req, res) => {
  try {
    const { filename } = req.params;
    if (!filename) {
      return res.status(400).json({ error: 'Filename is required' });
    }

    if (!process.env.GCS_BUCKET) {
      throw new Error('GCS_BUCKET environment variable is not set');
    }

    // Validate filename to prevent path traversal
    if (filename.includes('..') || filename.includes('/')) {
      return res.status(400).json({ error: 'Invalid filename' });
    }

    const storage = await accessSecret();
    const bucket = storage.bucket(process.env.GCS_BUCKET);

    const file = bucket.file(`videos/${filename}`);

    // Check if file exists first
    const [exists] = await file.exists();
    if (!exists) {
      return res.status(404).json({ error: 'File not found' });
    }

    const options = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      // Additional recommended options:
      // contentType: 'application/octet-stream',
    };

    const [url] = await file.getSignedUrl(options);
    res.status(200).json({ url });

  } catch (error) {
    console.error('Error in getPresignedUrl:', error);
    res.status(500).json({ 
      error: 'Failed to get signed URL',
      detail: error.message,
      // Only include stack trace in development
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
  }
};



// async function accessSecret() {
//   const projectId = process.env.GCP_PROJECT_ID;
//   if (!projectId) {
//     throw new Error('GCP_PROJECT_ID environment variable is not set');
//   }
//   const secretName = `projects/${projectId}/secrets/gcp-credentials/versions/latest`;
//   const [version] = await client.accessSecretVersion({name: secretName});
//   const gcpCredentials = JSON.parse(version.payload.data.toString('utf8'));
//   if (!gcpCredentials.client_email || !gcpCredentials.private_key) {
//     throw new Error('Retrieved credentials are missing required fields');
//   }

//   const storage = new Storage({
//     credentials: gcpCredentials,
//     projectId: projectId,
//   });
//   console.log('Secret:', gcpCredentials);
//   return storage;
// }

// // accessSecret();

// //projects/788842606624/secrets/gcp-credentials/versions/1

// // const gcpCredentials = JSON.parse(process.env.GCP_CREDENTIALS)



// // const storage = new Storage({
// //     keyFilename: path.join(__dirname, '../gcs-key.json'),
// //     projectId: process.env.GCP_PROJECT_ID,
// //   });

// // const storage = new Storage({
// //   credentials: gcpCredentials,
// //   projectId: process.env.GCP_PROJECT_ID,
// // });

// // const storage = accessSecret();

// // const bucket = storage.bucket(process.env.GCS_BUCKET);


 

// const getPresignedUrl = async (req, res) => {
//   const storage = await accessSecret();
//   const bucket = storage.bucket(process.env.GCS_BUCKET);

//   try {
//     const { filename } = req.params;
//     if (!filename) {
//       return res.status(400).json({ error: 'Filename is required' });
//     }
    

//     const options = {
//       version: 'v4',
//       action: 'read',
//       expires: Date.now() + 15 * 60 * 1000, // 15 minutes
//     };

//     const file = bucket.file(`videos/${filename}`);

//     const [url] = await file.getSignedUrl(options);

//     res.status(200).json({ url });
//   } catch (error) {
//     console.error('Error generating signed URL:', error); // Log full error
//     res.status(500).json({ error: 'Failed to get signed URL', detail: error.message });
//   }
// };



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