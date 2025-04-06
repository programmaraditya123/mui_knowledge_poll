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
        default:Date.now()
    },
    videoName:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    comments:{
        type:[String]  
    },
    courseimg:{
         data:Buffer,
         contentType:String
    }
},{timestamps:true})


module.exports = mongoose.model('course',courseSchema)

// TTOC = total time of the course