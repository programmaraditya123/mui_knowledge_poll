const moongoose = require('mongoose');

const ContentSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"python",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const ReactSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"react",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const JavaSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const CplusplusSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const GolangSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const RustSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const CSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const PerlSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const JavaScriptSchema = new moongoose.Schema({
    title:String,
    content:String,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

// module.exports = moongoose.model("Article",ContentSchema)

const Article =  moongoose.model("Article",ContentSchema);
const React =  moongoose.model("React",ReactSchema)
const Java =  moongoose.model("Java",JavaSchema)
const cplusplus =  moongoose.model("cplusplus",CplusplusSchema)
const golang =  moongoose.model("golang",GolangSchema)
const rust =  moongoose.model("rust",RustSchema)
const C =  moongoose.model("C",CSchema)
const perl =  moongoose.model("perl",PerlSchema)
const JavaScript =  moongoose.model("JavaScript",JavaScriptSchema)

module.exports={Article,React,Java,cplusplus,golang,rust,C,perl,JavaScript};