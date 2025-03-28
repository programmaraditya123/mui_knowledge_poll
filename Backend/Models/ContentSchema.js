const moongoose = require('mongoose');

const ContentSchema = new moongoose.Schema({
    title:String,
    content:String,
    createdAt:{type:Date , default:Date.now}

})

module.exports = moongoose.model("Article",ContentSchema)