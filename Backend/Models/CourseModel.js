const mongoose  = require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true,
        enum: ['Programming', 'Data Science', 'Machine Learning', 'Design', 'Marketing', 'Other','Python']
    },
    instructor:{
        type:String,
        required:true
    },
    TTOC:{
        type:Number
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    uploadedon:{
        type:Date,
        default:Date.now
    },
    videos: [
  {
    sequenceNumber: {
      type: Number,
      required: true
    },
    videoName: {
      type: String,
      required: true
    }
  }
]
,
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
         type:Number,
         default:0
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
    courseimg:{
         data:Buffer,
         contentType:String
    },
    tags: [String]

},{timestamps:true})


module.exports = mongoose.model('course',courseSchema)

// TTOC = total time of the course