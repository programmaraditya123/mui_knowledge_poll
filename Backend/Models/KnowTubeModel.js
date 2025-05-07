const mongoose = require('mongoose');

const KnowTube = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true
    },
    TTOC: {
        type: String
    },
    uploadedon: {
        type: Date,
        default: Date.now
    }
    // videos: [
    //     {
    //         sequenceNumber: {
    //             type: Number,
    //         },
    //         videoUrl: {
    //             type: String,
    //         }
    //     }
    // ]
    ,
    videoUrl:{
        type:String,
        required:true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: [
        {
            text: String,
            author: String,
            postedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
    ,
    thumbnail: {
        type: String
    },
    tags: [String]

}, { timestamps: true })


module.exports = mongoose.model('knowtube', KnowTube)

// TTOC = total time of the course