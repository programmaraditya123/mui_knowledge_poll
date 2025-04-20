const mongoose = require('mongoose');
//const { React } = require('../Models/ContentSchema');
const {Article,React, Java, cplusplus, golang,rust,C, perl, JavaScript,
     Html, Css, Bootstrap, Tailwindcss, Datascience, ml, dl, da, aiagents,
      sklearn, matplotlib, pandas, numpy, seaborn, operatingsystem, 
      computernetwork, dbms, oops, fla, cd, dsa, isdh, sql, mysql, 
      mongodb, postgresql, docker, kubernetes, git, aws, gradle,
       gitlab, systemdesign, android, linux, softwaretesting, 
       projectmanagement, productmanagement, excel} = require("../Models/ContentSchema");



const getModelByName = (modelName) => {
    const schemaMap = {
        react: React,
        python:Article,
        java:Java,
        cpp:cplusplus,
        golang:golang,
        rust:rust,
        c:C,
        perl:perl,
        javascript:JavaScript,
        html:Html,
        css:Css,
        bootstrap:Bootstrap,
        tailwindcss:Tailwindcss,
        datascience:Datascience,
        ml:ml,
        dl:dl,
        da:da,
        aiagents:aiagents,
        sklearn:sklearn,
        matplotlib:matplotlib,
        panndas:pandas,
        numpy:numpy,
        seaborn:seaborn,
        os:operatingsystem,
        cn:computernetwork,
        dbms:dbms,
        oops:oops,
        fla:fla,
        cd:cd,
        dsa:dsa,
        isdh:isdh,
        sql:sql,
        mysql:mysql,
        mongodb:mongodb,
        postgresql:postgresql,
        docker:docker,
        kubernetes:kubernetes,
        git:git,
        aws:aws,
        gradle:gradle,
        gitlab:gitlab,
        systemdesign:systemdesign,
        android:android,
        linux:linux,
        st:softwaretesting,
        productmanagement:productmanagement,
        projectmanagement:projectmanagement,
        excel:excel
    };

    // Error handling if tag is invalid
    if (!schemaMap[modelName]) {
        throw new Error(`Invalid model name: ${modelName}`);
    }

    // Prevent re-compilation warning
    return schemaMap[modelName]; 
};


const UpdateViews = async(req,res) => {
    try {
        const {title,tag,views} = req.body;
    
        const Model = getModelByName(tag);
         

    const view = await Model.findOneAndUpdate(
        {title},
        {views:views},
        {new:true,upsert:true}
    );
    res.status(201).send({
        success:true,
        message:"Views updated successfully",
        view
    })
    } catch (error) {
        console.log("Error1",error);
        res.status(500).send({success:false,message:"Error in updating views"})
        
    }
};

// const getViews = async(req,res) => {};

module.exports = {UpdateViews};