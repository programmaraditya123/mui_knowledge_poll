const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {Article,React, Java, cplusplus, golang,rust,C, perl, JavaScript, Html, Css, Bootstrap, Tailwindcss, Datascience, ml, dl, da, aiagents, sklearn, matplotlib, pandas, numpy, seaborn, operatingsystem, computernetwork, dbms, oops, fla, cd, dsa, isdh, sql, mysql, mongodb, postgresql, docker, kubernetes, git, aws, gradle, gitlab, systemdesign, android, linux, softwaretesting, projectmanagement, productmanagement, excel} = require("../Models/ContentSchema");
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


// contorller for C add and update c title and content
const getCContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await C.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addCContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await C.findOneAndUpdate(
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



// contorller for perl add and update perl title and content
const getperlContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await perl.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addperlContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await perl.findOneAndUpdate(
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




// contorller for javascript add and update javascript title and content
const getjavascriptContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await JavaScript.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addjavascriptContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await JavaScript.findOneAndUpdate(
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



// contorller for html add and update html title and content
const gethtmlContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await Html.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addhtmlContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Html.findOneAndUpdate(
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





// contorller for css add and update css title and content
const getcssContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await Css.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addcssContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Css.findOneAndUpdate(
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



// contorller for bootstrap add and update bootstrap title and content
const getbsContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await Bootstrap.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addbsContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Bootstrap.findOneAndUpdate(
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



// contorller for tailwind add and update tailwind title and content
const gettailwindcssContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await Tailwindcss.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addtailwindcssContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Tailwindcss.findOneAndUpdate(
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



// contorller for datascience add and update datascience title and content
const getdsContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await Datascience.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const adddsContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await Datascience.findOneAndUpdate(
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



// contorller for machine learning add and update machine learning title and content
const getmlContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await ml.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addmlContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await ml.findOneAndUpdate(
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



// contorller for deep learning add and update deep learning title and content
const getdlContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await dl.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const adddlContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await dl.findOneAndUpdate(
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




// contorller for deep analyst add and update deep analyst title and content
const getdaContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await da.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const adddaContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await da.findOneAndUpdate(
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




// contorller for aiagents add and update aiagents title and content
const getaiagentsContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await aiagents.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addaiagentsContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await aiagents.findOneAndUpdate(
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


// contorller for sklearn add and update sklearn title and content
const getsklearnContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await sklearn.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addsklearnContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await sklearn.findOneAndUpdate(
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


// contorller for  matplotlib add and update matplotlib title and content
const getmatplotlibContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await matplotlib.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addmatplotlibContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await matplotlib.findOneAndUpdate(
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



// contorller for  pandas add and update pandas title and content
const getpandasContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await pandas.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addpandasContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await pandas.findOneAndUpdate(
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



// contorller for  numpy add and update numpy title and content
const getnumpyContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await numpy.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addnumpyContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await numpy.findOneAndUpdate(
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



// contorller for  seaborn add and update seaborn title and content
const getseabornContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await seaborn.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addseabornContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await seaborn.findOneAndUpdate(
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



// contorller for  operating system add and update operating system title and content
const getosContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await operatingsystem.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addosContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await operatingsystem.findOneAndUpdate(
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

// contorller for computer network add and update computer network title and content
const getcnContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await computernetwork.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addcnContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await computernetwork.findOneAndUpdate(
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


// contorller for dbms add and update  dbms title and content
const getdbmsContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await dbms.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const adddbmsContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await dbms.findOneAndUpdate(
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


// contorller for oops add and update  oops title and content
const getoopsContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await oops.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addoopsContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await oops.findOneAndUpdate(
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



// contorller for FLA add and update  FLA title and content
const getflaContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await fla.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addflaContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await fla.findOneAndUpdate(
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


// contorller for CD add and update  CD title and content
const getcdContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await cd.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addcdContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await cd.findOneAndUpdate(
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



// contorller for DSA add and update  DSA title and content
const getdsaContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await dsa.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const adddsaContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await dsa.findOneAndUpdate(
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



// contorller for ISDH add and update  ISDH title and content
const getisdhContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await isdh.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addisdhContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await isdh.findOneAndUpdate(
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



// contorller for sql add and update sql title and content
const getsqlContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await sql.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addsqlContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await sql.findOneAndUpdate(
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


// contorller for mysql add and update mysql title and content
const getmysqlContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await mysql.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addmysqlContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await mysql.findOneAndUpdate(
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



// contorller for mongodb add and update mongodb title and content
const getmongodbContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await mongodb.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addmongodbContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await mongodb.findOneAndUpdate(
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

// contorller for postgre add and update postgre title and content
const getpostgreContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await postgresql.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addpostgreContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await postgresql.findOneAndUpdate(
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






// contorller for docker add and update docker title and content
const getdockerContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await docker.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const adddockerContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await docker.findOneAndUpdate(
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



// contorller for kubernetes add and update kubernetes title and content
const getkubernetesContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await kubernetes.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addkubernetesContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await kubernetes.findOneAndUpdate(
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


// contorller for git add and update git title and content
const getgitContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await git.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addgitContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await git.findOneAndUpdate(
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



// contorller for aws add and update aws title and content
const getawsContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await aws.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addawsContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await aws.findOneAndUpdate(
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



// contorller for gradle add and update gradle title and content
const getgradleContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await gradle.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addgradleContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await gradle.findOneAndUpdate(
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



// contorller for gitlab add and update gitlab title and content
const getgitlabContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await gitlab.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addgitlabContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await gitlab.findOneAndUpdate(
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




// contorller for systemdesign add and update systemdesign title and content
const getsystemdesignContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await systemdesign.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addsystemdesignContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await systemdesign.findOneAndUpdate(
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


// contorller for android add and update android title and content
const getandroidContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await android.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addandroidContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await android.findOneAndUpdate(
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



// contorller for linux add and update linux title and content
const getlinuxContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await linux.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addlinuxContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await linux.findOneAndUpdate(
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



// contorller for softwaretesting add and update softwaretesting title and content
const getsoftwaretestingContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await softwaretesting.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addsoftwaretestingContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await softwaretesting.findOneAndUpdate(
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




// contorller for projectmanagement add and update projectmanagement title and content
const getprojectmanagementContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await projectmanagement.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addprojectmanagementContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await projectmanagement.findOneAndUpdate(
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




// contorller for excel add and update excel title and content
const getexcelContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await excel.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addexcelContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await excel.findOneAndUpdate(
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




// contorller for productmanagement add and update productmanagement title and content
const getproductmanagementContent = async(req,res) =>{
    //check content with prompt
    try {
       const {title} = req.query;
       const existingcont = await productmanagement.find({title});
       res.json(existingcont)
    } catch (error) {
       res.send("No content Avialbale")
       // console.log("Error",error)
        
       
    }
}

const addproductmanagementContent = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const data = await productmanagement.findOneAndUpdate(
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
    addgolangContent,getrustContent,addrustContent,getCContent,addCContent,getperlContent,
    addperlContent,getjavascriptContent,addjavascriptContent,gethtmlContent,addhtmlContent,
    getcssContent,addcssContent,getbsContent,addbsContent,gettailwindcssContent,addtailwindcssContent,
    getdsContent,adddsContent,getmlContent,addmlContent,getdlContent,adddlContent,getdaContent,
    adddaContent,getaiagentsContent,addaiagentsContent,getsklearnContent,addsklearnContent,
    getmatplotlibContent,addmatplotlibContent,getpandasContent,addpandasContent,getnumpyContent,
    addnumpyContent,getseabornContent,addseabornContent,getosContent,addosContent,getcnContent,
    addcnContent,getdbmsContent,adddbmsContent,getoopsContent,addoopsContent,getflaContent,
    addflaContent,getcdContent,addcdContent,getdsaContent,adddsaContent,getisdhContent,
    addisdhContent,getsqlContent,addsqlContent,getmysqlContent,addmysqlContent,getmongodbContent,
    addmongodbContent,getpostgreContent,addpostgreContent,getdockerContent,adddockerContent,
    getkubernetesContent,addkubernetesContent,getgitContent,addgitContent,getawsContent,
    addawsContent,getgradleContent,addgradleContent,getgitlabContent,addgitlabContent,
    getsystemdesignContent,addsystemdesignContent,getandroidContent,addandroidContent,
    getlinuxContent,addlinuxContent,getsoftwaretestingContent,addsoftwaretestingContent,
    getprojectmanagementContent,addprojectmanagementContent,getexcelContent,addexcelContent,
    getproductmanagementContent,addproductmanagementContent
}
// module.exports = {GenerateAIContent,getAIcontent,updatecontent,addContent,generatechatgpt}

