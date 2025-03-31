const { MongoClient } = require("mongodb");
require("dotenv").config();

// 🔹 MongoDB connection setup
const uri = process.env.MONGODB_KEY; // Store MongoDB URI in .env file
const client = new MongoClient(uri);

// 🔍 Controller function to search in multiple collections
const searchDatabase = async (req, res) => {
    try {
        const queryText = req.query.q; // Get search query from request

        if (!queryText) {
            return res.status(400).json({ error: "Search query is required!" });
        }

        await client.connect();
        const db = client.db("test"); // ✅ Your single database

        // Search in "products" collection
        const productsQuery = await db.collection("javas").aggregate([
            {
                $search: {
                    index: "default",
                    text: {
                        query: queryText,
                        path: ["title"], // Fields to search in "products"
                        fuzzy: {}
                    }
                }
            },
            { $limit: 10 } // Limit results for performance
        ]).toArray();

        // Search in "users" collection
        const usersQuery = await db.collection("reacts").aggregate([
            {
                $search: {
                    index: "default",
                    text: {
                        query: queryText,
                        path: ["title"], // Fields to search in "users"
                        fuzzy: {}
                    }
                }
            },
            { $limit: 10 }
        ]).toArray();

        const articlesQuery = await db.collection("articles").aggregate([
            {
                $search: {
                    index: "default",
                    text: {
                        query: queryText,
                        path: ["title"], // Fields to search in "products"
                        fuzzy: {}
                    }
                }
            },
            { $limit: 10 } // Limit results for performance
        ]).toArray();

        // Execute both queries in parallel
        const [java, react,articles] = await Promise.all([productsQuery, usersQuery,articlesQuery]);

        res.status(200).json({ success: true, results: { java, react , articles } });
    } catch (error) {
        console.error("Error during search:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { searchDatabase };
