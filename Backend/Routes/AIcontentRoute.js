// this route contain the  python, react , bootstrap , and many technologies title and content  
const express = require('express');
const { GenerateAIContent,getcontent, updatecontent, addContent ,
    generateDeepSeek,generatechatgpt,
    addReactContent,
    getReactContent,
    getJavaContent,
    addJavaContent
} = require('../controllers/GenerateContent');
const {requireSignIn} = require('../middlewares/authMiddleware');

const router = express.Router()

//generate gemini content
router.post('/generate',GenerateAIContent);

//generate deepseek content
// router.post('/generatedeepseek',generateDeepSeek)

// genearte chatgpt content
// router.post('/generatechatgpt',generatechatgpt);

router.get('/content',getcontent)

// router.put('/updatecont',updatecontent)

// router.post('/addcontent',requireSignIn,addContent);
router.post('/addcontent',addContent);




// add and update react title content

router.get('/getreactcontent',getReactContent);

router.post('/addreactcontent',addReactContent);
// router.post('/addreactcontent',requireSignIn,addReactContent);


// add and update JAVA title content

router.get('/getjavacontent',getJavaContent);

router.post('/addjavacontent',addJavaContent);
// router.post('/addjavacontent',requireSignIn,addJavaContent);

module.exports = router;