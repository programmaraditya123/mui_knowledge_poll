const mongoose = require('mongoose');
//const colors = require('colors');
const { MongoClient, GridFSBucket } = require('mongodb');
require("dotenv").config();

let bucket;
// let nativeClient;
 

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_KEY);
        console.log(`connnected to mongodb dtabase ${conn.connection.host}`);

        // if (!nativeClient) {
        //     nativeClient = new MongoClient(process.env.MONGODB_KEY);
        //     await nativeClient.connect();
        //     console.log('Native MongoClient connected');
        // }

        // create gridfs bucket using mongoclient not mongoose
        const client = new MongoClient(process.env.MONGODB_KEY);
        await client.connect()
        const db = client.db('knowledgepool');
        bucket = new GridFSBucket(db,{bucketName:'videos'})
        console.log('GridFS BUcket Initialized')

        return db;
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