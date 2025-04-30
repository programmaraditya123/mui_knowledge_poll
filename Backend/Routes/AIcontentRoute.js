// this route contain the  python, react , bootstrap , and many technologies title and content  
const express = require('express');
const { GenerateAIContent,getcontent, updatecontent, addContent ,
    generateDeepSeek,generatechatgpt,
    addReactContent,
    getReactContent,
    getJavaContent,
    addJavaContent,
    getcplusplusContent,addcplusplusContent,
    getgolangContent,
    addgolangContent,
    getrustContent,
    addrustContent,
    getCContent,
    addCContent,
    getperlContent,
    addperlContent,
    getjavascriptContent,
    addjavascriptContent,
    gethtmlContent,
    addhtmlContent,
    getcssContent,
    addcssContent,
    getbsContent,
    addbsContent,
    gettailwindcssContent,
    addtailwindcssContent,
    getdsContent,
    adddsContent,
    getmlContent,
    addmlContent,
    getdlContent,
    adddlContent,
    getdaContent,
    adddaContent,
    getaiagentsContent,
    addaiagentsContent,
    getsklearnContent,
    addsklearnContent,
    getmatplotlibContent,
    addmatplotlibContent,
    getpandasContent,
    addpandasContent,
    getnumpyContent,
    addnumpyContent,
    getseabornContent,
    addseabornContent,
    getosContent,
    addosContent,
    getcnContent,
    addcnContent,
    getdbmsContent,
    adddbmsContent,
    getoopsContent,
    addoopsContent,
    getflaContent,
    addflaContent,
    getcdContent,
    addcdContent,
    getdsaContent,
    adddsaContent,
    getisdhContent,
    addisdhContent,
    getsqlContent,
    addsqlContent,
    getmysqlContent,
    addmysqlContent,
    getmongodbContent,
    addmongodbContent,
    getpostgreContent,
    addpostgreContent,
    getdockerContent,
    adddockerContent,
    getkubernetesContent,
    addkubernetesContent,
    getgitContent,
    addgitContent,
    getawsContent,
    addawsContent,
    getgradleContent,
    addgradleContent,
    getgitlabContent,
    addgitlabContent,
    getsystemdesignContent,
    addsystemdesignContent,
    getandroidContent,
    addandroidContent,
    getlinuxContent,
    addlinuxContent,
    getsoftwaretestingContent,
    addsoftwaretestingContent,
    getprojectmanagementContent,
    addprojectmanagementContent,
    getexcelContent,
    addexcelContent,
    getproductmanagementContent,
    addproductmanagementContent
} = require('../controllers/GenerateContent');
const {requireSignIn} = require('../middlewares/authMiddleware');

const router = express.Router()

//generate gemini content
router.post('/generate',GenerateAIContent);

//generate deepseek content
// router.post('/generatedeepseek',generateDeepSeek)

// genearte chatgpt content
// router.post('/generatechatgpt',generatechatgpt);

router.get('/getcontent',getcontent)

// router.put('/updatecont',updatecontent)

router.post('/addcontent',requireSignIn,addContent);
// router.post('/addcontent',addContent);




// add and update react title content

router.get('/getreactcontent',getReactContent);

// router.post('/addreactcontent',addReactContent);
router.post('/addreactcontent',requireSignIn,addReactContent);


// add and update JAVA title content

router.get('/getjavacontent',getJavaContent);

// router.post('/addjavacontent',addJavaContent);
router.post('/addjavacontent',requireSignIn,addJavaContent);



//add and update c++ schema
router.get('/getcpluspluscontent',getcplusplusContent);

router.post('/addcpluspluscontent',addcplusplusContent);


//add and update golang schema
router.get('/getgolangcontent',getgolangContent);

router.post('/addgolangcontent',addgolangContent);



//add and update rust schema
router.get('/getrustcontent',getrustContent);

router.post('/addrustcontent',addrustContent);



//add and update C schema
router.get('/getCcontent',getCContent);

router.post('/addCcontent',addCContent);



//add and update rust schema
router.get('/getperlcontent',getperlContent);

router.post('/addperlcontent',addperlContent);


//add and update rust schema
router.get('/getjavascriptcontent',getjavascriptContent);

router.post('/addjavascriptcontent',addjavascriptContent);


//add and update html schema
router.get('/gethtmlcontent',gethtmlContent);

router.post('/addhtmlcontent',addhtmlContent);


//add and update html schema
router.get('/getcsscontent',getcssContent);

router.post('/addcsscontent',addcssContent);


//add and update bootstrap schema
router.get('/getbscontent',getbsContent);

router.post('/addbscontent',addbsContent);


//add and update Tailwindcss schema
router.get('/gettailwindcsscontent',gettailwindcssContent);

router.post('/addtailwindcsscontent',addtailwindcssContent);



//add and update datascience schema
router.get('/getdscontent',getdsContent);

router.post('/adddscontent',adddsContent);


//add and update machine learning schema
router.get('/getmlcontent',getmlContent);

router.post('/addmlcontent',addmlContent);



//add and update deep learning schema
router.get('/getdlcontent',getdlContent);

router.post('/adddlcontent',adddlContent);


//add and update deep analyst schema
router.get('/getdacontent',getdaContent);

router.post('/adddacontent',adddaContent);


//add and update aiagents schema
router.get('/getaiagentscontent',getaiagentsContent);

router.post('/addaiagentscontent',addaiagentsContent);



//add and update sklearn schema
router.get('/getsklearncontent',getsklearnContent);

router.post('/addsklearncontent',addsklearnContent);


//add and update matplotlib schema
router.get('/getmatplotlibcontent',getmatplotlibContent);

router.post('/addmatplotlibcontent',addmatplotlibContent);


//add and update pandas schema
router.get('/getpandascontent',getpandasContent);

router.post('/addpandascontent',addpandasContent);


//add and update numpy schema
router.get('/getnumpycontent',getnumpyContent);

router.post('/addnumpycontent',addnumpyContent);


//add and update seaborn schema
router.get('/getseaborncontent',getseabornContent);

router.post('/addseaborncontent',addseabornContent);


//add and update operatingsystem schema
router.get('/getoscontent',getosContent);

router.post('/addoscontent',addosContent);


//add and update Computer nnetwork schema
router.get('/getcncontent',getcnContent);

router.post('/addcncontent',addcnContent);


//add and update DBMS schema
router.get('/getdbmscontent',getdbmsContent);

router.post('/adddbmscontent',adddbmsContent);


//add and update OOPS schema
router.get('/getoopscontent',getoopsContent);

router.post('/addoopscontent',addoopsContent);


//add and update FLA schema
router.get('/getflacontent',getflaContent);

router.post('/addflacontent',addflaContent);


//add and update compiler design schema
router.get('/getcdcontent',getcdContent);

router.post('/addcdcontent',addcdContent);



//add and update DSA schema
router.get('/getdsacontent',getdsaContent);

router.post('/adddsacontent',adddsaContent);


//add and update ISDH schema
router.get('/getisdhcontent',getisdhContent);

router.post('/addisdhcontent',addisdhContent);



//add and update SQL schema
router.get('/getsqlcontent',getsqlContent);

router.post('/addsqlcontent',addsqlContent);


//add and update MYSQL schema
router.get('/getmysqlcontent',getmysqlContent);

router.post('/addmysqlcontent',addmysqlContent);


//add and update Mongodb schema
router.get('/getmongodbcontent',getmongodbContent);

router.post('/addmongodbcontent',addmongodbContent);


//add and update Postgre schema
router.get('/getpostgrecontent',getpostgreContent);

router.post('/addpostgrecontent',addpostgreContent);


//add and update docker schema
router.get('/getdockercontent',getdockerContent);

router.post('/adddockercontent',adddockerContent);


//add and update kubernetes schema
router.get('/getkubernetescontent',getkubernetesContent);

router.post('/addkubernetescontent',addkubernetesContent);


//add and update git schema
router.get('/getgitcontent',getgitContent);

router.post('/addgitcontent',addgitContent);


//add and update git schema
router.get('/getawscontent',getawsContent);

router.post('/addawscontent',addawsContent);


//add and update gradle schema
router.get('/getgradlecontent',getgradleContent);

router.post('/addgradlecontent',addgradleContent);


//add and update gradle schema
router.get('/getgitlabcontent',getgitlabContent);

router.post('/addgitlabcontent',addgitlabContent);


//add and update systemdesign schema
router.get('/getsystemdesigncontent',getsystemdesignContent);

router.post('/addsystemdesigncontent',addsystemdesignContent);


//add and update android schema
router.get('/getandroidcontent',getandroidContent);

router.post('/addandroidcontent',addandroidContent);



//add and update linux schema
router.get('/getlinuxcontent',getlinuxContent);

router.post('/addlinuxcontent',addlinuxContent);


//add and update softwaretesting schema
router.get('/getsoftwaretestingcontent',getsoftwaretestingContent);

router.post('/addsoftwaretestingcontent',addsoftwaretestingContent);


//add and update projectmanagement schema
router.get('/getprojectmanagementcontent',getprojectmanagementContent);

router.post('/addprojectmanagementcontent',addprojectmanagementContent);


//add and update Excel schema
router.get('/getexcelcontent',getexcelContent);

router.post('/addexcelcontent',addexcelContent);


//add and update projectmanagement schema
router.get('/getproductmanagementcontent',getproductmanagementContent);

router.post('/addproductmanagementcontent',addproductmanagementContent);

module.exports = router;