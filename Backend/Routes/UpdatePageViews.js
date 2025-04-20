const express = require('express');
const { UpdateViews, getViews } = require('../controllers/UpdatePageViewsController');

const Router = express.Router();

Router.post("/updateviews",UpdateViews);

// Router.get("getviews",getViews);

module.exports = Router;