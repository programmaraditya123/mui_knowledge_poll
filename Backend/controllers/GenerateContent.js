const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Article = require("../Models/ContentSchema");
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
           message: data.createdAt ? "Article created successfully" : "Article updated successfully",
        })
    } catch (error) {
        console.log('Error1',error)
        
    }
}
module.exports = {addContent,getcontent,GenerateAIContent}
// module.exports = {GenerateAIContent,getAIcontent,updatecontent,addContent,generatechatgpt}

