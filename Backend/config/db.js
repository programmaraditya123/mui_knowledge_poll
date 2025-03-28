const mongoose = require('mongoose');
//const colors = require('colors');
const { MongoClient, GridFSBucket } = require('mongodb');

let bucket;
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/knowledgepool');
        console.log(`connnected to mongodb dtabase ${conn.connection.host}`);

        // create gridfs bucket using mongoclient not mongoose
        const client = new MongoClient('mongodb://127.0.0.1:27017/knowledgepool');
        await client.connect()
        const db = client.db('knowledgepool');
        bucket = new GridFSBucket(db,{bucketName:'videos'})
        console.log('GridFS BUcket Initialized')
    }
    catch (error){
        console.log(`Error in mongoodb ${error}`);
    }
};

// Function to get the GridFSBucket instance
const getBucket = () => {
    if (!bucket) {
        throw new Error("GridFSBucket is not initialized yet.");
    }
    return bucket;
};

module.exports = {connectDB,getBucket};