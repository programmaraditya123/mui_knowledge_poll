const express = require('express');
const { GenerateAIContent,getcontent, updatecontent, addContent ,
    generateDeepSeek,generatechatgpt
} = require('../controllers/GenerateContent');

const router = express.Router()

//generate gemini content
router.post('/generate',GenerateAIContent);

//generate deepseek content
// router.post('/generatedeepseek',generateDeepSeek)

// genearte chatgpt content
// router.post('/generatechatgpt',generatechatgpt);

router.get('/content',getcontent)

// router.put('/updatecont',updatecontent)

router.post('/addcontent',addContent)

module.exports = router;