const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {Article,React, Java, cplusplus, golang} = require("../Models/ContentSchema");
//import OpenAI from "openai";
//const {OpenAI} = require('openai')
require("dotenv").config();

 

const GenerateAIContent = async(req,res) =>{
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        console.log(genAI,"+++++++++++")
        const model = genAI.getGenerativeModel({model:"gemini-2.0-flash"})

        // const prompt = "Write an article in pure html css on topic comments in python";
    try {
        const {prompt} = req.body;
        const result = await model.generateContent(prompt);
        const responsetext = await result.response.text();
        // res.json(responsetext);
        // console.log(responsetext);
        // save to mongodb
        // const cont = await new Article({title:prompt,content:responsetext}).save()
        res.status(201).send({
            success:true,
            message:"Content Generated Succesfully",
            content:responsetext

        })
    } catch (error) {
        console.error("Error",error)
        
    }

}

// const openai = new OpenAI({
    // apiKey: ,
//   });

// const generatechatgpt = async (req,res) => {
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: "Hello, how are you?" }],
//           });
//           response = response.choices[0].message.content
//         //   console.log(response.choices[0].message.content);
//         res.status(201).send({
//             status:true,
//             message:"content generated succesfully",
//             content:response
//         })
        
//     } catch (error) {
//         console.log("Error chatgpt",error)
        
//     }
// };

// const generateDeepSeek = async() => {
//     try {
//         const completion = await openai.chat.completions.create({
//             messages: [{ role: "system", content: "You are a helpful assistant." }],
//             model: "deepseek-chat",
//           });
//           console.log(completion.choices[0].message.content);
//           res.status(201).send({
//             success:true,
//             message:"Content Generated Succesfully",
//             content:responsetext

//         })
//     } catch (error) {
//         console.log("Error",error)
        
//     }
// };

const getcontent = async(req,res) =>{
     //check content with prompt
     try {
        const {title} = req.query;
        const existingcont = await Article.find({title});
        res.json(existingcont)
     } catch (error) {
        res.send("No content Avialbale")
        // console.log("Error",error)
         
        
     }
}

 

const addContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Article.findOneAndUpdate(
            {title:title},
            {content:content},
        {new:true,upsert:true})
        res.status(201).send({
            success:true,
           message: data.upserted ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        res.status(500).json({ success: false, message: "Internal Server Error", error });
        
    }
}

//Conterollers of react add update content
const getReactContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await React.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addReactContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await React.findOneAndUpdate(
            {title:title},
            {content:content},
        {new:true,upsert:true})
        res.status(201).send({
            success:true,
           message: data.createdAt ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        
    }
}





// contorller for java add and update JAVA title and content
const getJavaContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await Java.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addJavaContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Java.findOneAndUpdate(
            {title:title},
            {content:content},
        {new:true,upsert:true})
        res.status(201).send({
            success:true,
           message: data.createdAt ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        
    }
}



// contorller for cplusplus add and update cplusplus title and content
const getcplusplusContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await cplusplus.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addcplusplusContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await cplusplus.findOneAndUpdate(
            {title:title},
            {content:content},
        {new:true,upsert:true})
        res.status(201).send({
            success:true,
           message: data.createdAt ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        
    }
}



// contorller for golang add and update golang title and content
const getgolangContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await golang.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addgolangContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await golang.findOneAndUpdate(
            {title:title},
            {content:content},
        {new:true,upsert:true})
        res.status(201).send({
            success:true,
           message: data.createdAt ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        
    }
}



// contorller for rust add and update rust title and content
const getrustContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await rust.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addrustContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await rust.findOneAndUpdate(
            {title:title},
            {content:content},
        {new:true,upsert:true})
        res.status(201).send({
            success:true,
           message: data.createdAt ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        
    }
}







module.exports = {addContent,getcontent,GenerateAIContent,getReactContent,addReactContent,
    getJavaContent,addJavaContent,addcplusplusContent,getcplusplusContent,getgolangContent,
    addgolangContent,getrustContent,addrustContent
}
// module.exports = {GenerateAIContent,getAIcontent,updatecontent,addContent,generatechatgpt}

