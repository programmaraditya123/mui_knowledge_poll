const { MongoClient } = require("mongodb");
const { connectDB } = require("../config/db");
require("dotenv").config();

const uri = process.env.MONGODB_KEY;
const client = new MongoClient(uri);

const searchDatabase = async (req, res) => {
    try {
        const queryText = req.query.q;

        if (!queryText) {
            return res.status(400).json({ error: "Search query is required!" });
        }

        await client.connect();
        const db = client.db("test");
        // const db = await connectDB();

        const regex = new RegExp(queryText, "i"); // Case-insensitive regex

        // Create queries using .find with regex on 'title'
        const javaPromise = db.collection("javas")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const reactPromise = db.collection("reacts")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const articlesPromise = db.collection("articles")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const aiagentsPromise = db.collection("aiagents")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const androidPromise = db.collection("androids")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const awsPromise = db.collection("aws")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const bootstrapPromise = db.collection("bootstraps")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const cdPromise = db.collection("cds")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const cnPromise = db.collection("computernetworks")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        
        const cppPromise = db.collection("cpluspluss")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const cPromise = db.collection("cs")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const cssPromise = db.collection("csses")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const daPromise = db.collection("das")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const dsPromise = db.collection("datasciences")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const dbmsPromise = db.collection("dbms")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const dlPromise = db.collection("dls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();


        const dockerPromise = db.collection("dockers")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const dsaPromise = db.collection("dsas")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const excelPromise = db.collection("excels")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const flaPromise = db.collection("flas")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const gitlabPromise = db.collection("gitlabs")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const gitPromise = db.collection("gits")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const golangPromise = db.collection("golangs")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const gradlePromise = db.collection("gradles")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const htmlPromise = db.collection("htmls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const isdhPromise = db.collection("isdhs")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const jsPromise = db.collection("javascripts")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const kubernetesPromise = db.collection("kubernetes")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();
        
        const linuxPromise = db.collection("linuxes")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const matplotlibPromise = db.collection("matplotlibs")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const mlPromise = db.collection("mls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();


        const mongodbPromise = db.collection("mongodbs")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

            
        const mysqlPromise = db.collection("mysqls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const numpyPromise = db.collection("numpies")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();


        const oopsPromise = db.collection("oops")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const osPromise = db.collection("operatingsystems")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const pandasPromise = db.collection("pandas")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const perlPromise = db.collection("perls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const postgresqlPromise = db.collection("postgresqls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const productmanagPromise = db.collection("productmanagements")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const projectmanagPromise = db.collection("projectmanagements")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const rustPromise = db.collection("rusts")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const seabornPromise = db.collection("seaborns")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const sklearnPromise = db.collection("sklearns")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();


        const softwaretestingPromise = db.collection("softwaretestings")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const sqlPromise = db.collection("sqls")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        
        const systemdesignPromise = db.collection("systemdesigns")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();


        const tailwindcssPromise = db.collection("tailwindcsses")
            .find({ title: { $regex: regex } })
            .limit(10)
            .toArray();

        const [java, react, articles,aiagents,android,
            aws,bootstrap,cd,cn,cpp,c,css,da,ds,dbms,dl,docker,dsa,excel,fla,gitlab,gits,
        golang,gradle,html,isdh,js,kubernetes,linux,matplotlib,ml,mongodb,mysql,numpy,
    oops,os,pandas,perl,postgresql,productmanag,projectmanag,rust,seaborn,sklearn,st,sql,systemdesign,tailwindcss] = await Promise.all([javaPromise, reactPromise, articlesPromise,aiagentsPromise,
                androidPromise,awsPromise,bootstrapPromise,cdPromise,cnPromise,cppPromise,cPromise,cssPromise,daPromise,
                dsPromise,dbmsPromise,dlPromise,dockerPromise,dsaPromise,excelPromise,flaPromise,gitlabPromise,gitPromise,
                golangPromise,gradlePromise,htmlPromise,isdhPromise,jsPromise,kubernetesPromise,linuxPromise,matplotlibPromise,
                mlPromise,mongodbPromise,mysqlPromise,numpyPromise,oopsPromise,osPromise,pandasPromise,perlPromise,postgresqlPromise,
                productmanagPromise,projectmanagPromise,rustPromise,seabornPromise,sklearnPromise,softwaretestingPromise,sqlPromise,
                systemdesignPromise,tailwindcssPromise]);

        res.status(200).json({ success: true, results: { java, react, articles,aiagents,android,aws,bootstrap,cd,
            cn,cpp,c,css,da,ds,dbms,dl,docker,dsa,excel,fla,gitlab,gits,golang,gradle,html,isdh,js,kubernetes,linux,matplotlib,
        ml,mongodb,mysql,numpy,oops,os,pandas,perl,postgresql,productmanag,projectmanag,rust,seaborn,sklearn,st,sql,systemdesign,tailwindcss}});

    } catch (error) {
        console.error("Error during search:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
    // finally {
    //     await client.close(); // Always close connection in non-serverless environments
    // }
};

module.exports = { searchDatabase };






// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// // 🔹 MongoDB connection setup
// const uri = process.env.MONGODB_KEY; // Store MongoDB URI in .env file
// const client = new MongoClient(uri);

// // 🔍 Controller function to search in multiple collections
// const searchDatabase = async (req, res) => {
//     try {
//         const queryText = req.query.q; // Get search query from request

//         if (!queryText) {
//             return res.status(400).json({ error: "Search query is required!" });
//         }

//         await client.connect();
//         const db = client.db("test"); // ✅ Your single database

//         // Search in "products" collection
//         const productsQuery = await db.collection("javas").aggregate([
//             {
//                 $search: {
//                     index: "default",
//                     text: {
//                         query: queryText,
//                         path: ["title"], // Fields to search in "products"
//                         fuzzy: {}
//                     }
//                 }
//             },
//             { $limit: 10 } // Limit results for performance
//         ]).toArray();

//         // Search in "users" collection
//         const usersQuery = await db.collection("reacts").aggregate([
//             {
//                 $search: {
//                     index: "default",
//                     text: {
//                         query: queryText,
//                         path: ["title"], // Fields to search in "users"
//                         fuzzy: {}
//                     }
//                 }
//             },
//             { $limit: 10 }
//         ]).toArray();

//         const articlesQuery = await db.collection("articles").aggregate([
//             {
//                 $search: {
//                     index: "default",
//                     text: {
//                         query: queryText,
//                         path: ["title"], // Fields to search in "products"
//                         fuzzy: {}
//                     }
//                 }
//             },
//             { $limit: 10 } // Limit results for performance
//         ]).toArray();

//         // Execute both queries in parallel
//         const [java, react,articles] = await Promise.all([productsQuery, usersQuery,articlesQuery]);

//         res.status(200).json({ success: true, results: { java, react , articles } });
//     } catch (error) {
//         console.error("Error during search:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// module.exports = { searchDatabase };
