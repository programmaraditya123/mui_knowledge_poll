const moongoose = require('mongoose');

const ContentSchema = new moongoose.Schema({
    title:String,
    content:String,
    createdAt:{type:Date , default:Date.now}

})

const ReactSchema = new moongoose.Schema({
    title:String,
    content:String,
    createdAt:{type:Date , default:Date.now}

})


const JavaSchema = new moongoose.Schema({
    title:String,
    content:String,
    createdAt:{type:Date , default:Date.now}

})

// module.exports = moongoose.model("Article",ContentSchema)

const Article =  moongoose.model("Article",ContentSchema);
const React =  moongoose.model("React",ReactSchema)
const Java =  moongoose.model("Java",ReactSchema)

module.exports={Article,React,Java};