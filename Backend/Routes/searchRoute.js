const express = require('express');
const { searchDatabase } = require('../controllers/searchController');

const Router = express.Router();

Router.get('/search',searchDatabase)

module.exports = Router;