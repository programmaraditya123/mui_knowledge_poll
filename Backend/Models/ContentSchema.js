const moongoose = require('mongoose');

const ContentSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"python",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const ReactSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"react",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const JavaSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"java",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const CplusplusSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"cpp",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const GolangSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"golang",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const RustSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"rust",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const CSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"c",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const PerlSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"perl",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const JavaScriptSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"javascript",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const HtmlSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"html",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const CssSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"css",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const BootstrapSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"bootstrap",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const TailwindcssSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"tailwindcss",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const DatascienceSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"datascience",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const MachinelearningSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"ml",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const DeeplearningSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"dl",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})

const DataanalystSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"da",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const AiagentsSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"aiagents",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})




const ScikitlearnSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"sklearn",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const MatplotlibSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"matplotlib",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const PandasSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"panndas",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const NumpySchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"numpy",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const SeabornSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"seaborn",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const OperatingsystemSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"os",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  ComputernetworkSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"cn",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  DbmsSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"dbms",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  OopsSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"oops",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  FlaSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"fla",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  CdSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"cd",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  DsaSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"dsa",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  IsdhSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"isdh",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  SqlSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"sql",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  MysqlSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"mysql",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  MongodbSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"mongodb",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})





const  PostgresqlSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"postgresql",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  DockerSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"docker",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  KubernetesSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"kubernetes",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  GitSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"git",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  AwsSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"aws",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  GradleSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"gradle",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  GitlabSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"gitlab",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  SystemdesignSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"systemdesign",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  AndroidSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"android",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  LinuxSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"linux",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  SoftwaretestingSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"st",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  ProductmanagementSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"productmanagement",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


const  ProjectmanagementSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"projectmanagement",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})



const  ExcelSchema = new moongoose.Schema({
    title:String,
    content:String,
    creator:String,
    views:Number,
    tag:{
        type:String,
        default:"excel",
        immutable:true
    },
    createdAt:{type:Date , default:Date.now}

})


// module.exports = moongoose.model("Article",ContentSchema)

const Article =  moongoose.model("Article",ContentSchema);
const React =  moongoose.model("React",ReactSchema)
const Java =  moongoose.model("Java",JavaSchema)
const cplusplus =  moongoose.model("cplusplus",CplusplusSchema)
const golang =  moongoose.model("golang",GolangSchema)
const rust =  moongoose.model("rust",RustSchema)
const C =  moongoose.model("C",CSchema)
const perl =  moongoose.model("perl",PerlSchema)
const JavaScript =  moongoose.model("JavaScript",JavaScriptSchema)
const Html =  moongoose.model("Html",HtmlSchema)
const Css =  moongoose.model("Css",CssSchema)
const Bootstrap =  moongoose.model("Bootstrap",BootstrapSchema)
const Tailwindcss =  moongoose.model("Tailwindcss",TailwindcssSchema)
const Datascience =  moongoose.model("Datascience",DatascienceSchema)
const ml =  moongoose.model("ml",MachinelearningSchema)
const dl =  moongoose.model("dl",DeeplearningSchema)
const da =  moongoose.model("da",DataanalystSchema)
const aiagents =  moongoose.model("aiagents",AiagentsSchema)
const sklearn =  moongoose.model("sklearn",ScikitlearnSchema)
const matplotlib =  moongoose.model("matplotlib",MatplotlibSchema)
const pandas =  moongoose.model("pandas",PandasSchema)
const numpy =  moongoose.model("numpy",NumpySchema)
const seaborn =  moongoose.model("seaborn",SeabornSchema)
const operatingsystem =  moongoose.model("operatingsystem",OperatingsystemSchema)
const computernetwork =  moongoose.model("computernetwork",ComputernetworkSchema)
const dbms =  moongoose.model("dbms",DbmsSchema)
const oops =  moongoose.model("oops",OopsSchema)
const fla =  moongoose.model("fla",FlaSchema)
const cd =  moongoose.model("cd",CdSchema)
const dsa =  moongoose.model("dsa",DsaSchema)
const isdh =  moongoose.model("isdh",IsdhSchema)
const sql =  moongoose.model("sql",SqlSchema)
const mysql =  moongoose.model("mysql",MysqlSchema)
const mongodb =  moongoose.model("mongodb",MongodbSchema)
const postgresql =  moongoose.model("postgresql",PostgresqlSchema)
const docker =  moongoose.model("docker",DockerSchema)
const kubernetes =  moongoose.model("kubernetes",KubernetesSchema)
const git =  moongoose.model("git",GitSchema)
const aws =  moongoose.model("aws",AwsSchema)
const gradle =  moongoose.model("gradle",GradleSchema)
const gitlab =  moongoose.model("gitlab",GitlabSchema)
const systemdesign =  moongoose.model("systemdesign",SystemdesignSchema)
const android =  moongoose.model("android",AndroidSchema)
const linux =  moongoose.model("linux",LinuxSchema)
const softwaretesting =  moongoose.model("softwaretesting",SoftwaretestingSchema)
const productmanagement =  moongoose.model("productmanagement",ProductmanagementSchema)
const projectmanagement =  moongoose.model("projectmanagement",ProjectmanagementSchema)
const excel =  moongoose.model("excel",ExcelSchema)



module.exports={Article,React,Java,cplusplus,golang,rust,C,perl,JavaScript,Html,Css,Bootstrap,Tailwindcss,
    Datascience,ml,dl,da,aiagents,sklearn,matplotlib,pandas,numpy,seaborn,operatingsystem,computernetwork,
    dbms,oops,fla,cd,dsa,isdh,sql,mysql,mongodb,postgresql,docker,kubernetes,git,aws,gradle,gitlab,systemdesign,
    android,linux,softwaretesting,productmanagement,projectmanagement,excel
};