import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
import  '../Python/Python.css';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Datascience = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Data Science" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const datascience_topics = [
    
    "Introduction to Data Science",
    "Data Science Lifecycle",
    "Types of Data (Structured, Unstructured, Semi-structured)",
    "Statistics for Data Science",
    "Probability Theory",
    "Descriptive Statistics",
    "Inferential Statistics",
    "Hypothesis Testing",
    "Bayesian Thinking",
    
    
    "Python for Data Science",
    "R for Data Science",
    "Jupyter Notebooks",
    "Version Control (Git)",
    "SQL for Data Science",
    "Data Science IDEs (VSCode, Jupyter, Colab)",

     
    "Data Cleaning",
    "Data Wrangling",
    "Data Merging and Joining",
    "Handling Missing Data",
    "Data Transformation",
    "Data Aggregation",
    "Working with Time Series Data",

     
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Scikit-learn",
    "Statsmodels",
    "SciPy",

     
    "Data Visualization Principles",
    "Exploratory Data Analysis (EDA)",
    "Plotting with Python (Matplotlib, Seaborn)",
    "Interactive Visualizations (Plotly, Bokeh)",
    "Dashboards (Streamlit, Dash)",

    
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Classification Algorithms",
    "Regression Algorithms",
    "Clustering Algorithms",
    "Dimensionality Reduction",
    "Model Evaluation and Metrics",
    "Cross-Validation",
    "Hyperparameter Tuning",
    "Overfitting and Underfitting",
    "Ensemble Methods (Random Forest, Gradient Boosting)",
    "Feature Engineering",
    "Feature Selection",

    
    "Neural Networks",
    "Activation Functions",
    "Convolutional Neural Networks (CNN)",
    "Recurrent Neural Networks (RNN)",
    "Natural Language Processing (NLP)",
    "Transfer Learning",
    "Deep Learning Frameworks (TensorFlow, PyTorch, Keras)",

     
    "Big Data Concepts",
    "Apache Hadoop",
    "Apache Spark",
    "Data Lakes vs Data Warehouses",
    "Cloud Platforms (AWS, GCP, Azure for Data Science)",

    
    "Text Cleaning and Preprocessing",
    "Tokenization",
    "Stemming and Lemmatization",
    "Bag of Words and TF-IDF",
    "Word Embeddings (Word2Vec, GloVe)",
    "Topic Modeling",
    "Sentiment Analysis",
    "Text Classification",

     
    "Time Series Decomposition",
    "Trend and Seasonality",
    "ARIMA Models",
    "Forecasting Techniques",
    "LSTM for Time Series",

    
    "Model Serialization (Pickle, Joblib)",
    "APIs with Flask or FastAPI",
    "Deploying with Docker",
    "Model Monitoring",
    "CI/CD in ML Projects",
    "Using Streamlit or Gradio for Demos",

     
    "Data Privacy",
    "Bias in Data and Models",
    "Explainable AI (XAI)",
    "Fairness in Machine Learning",
    "Responsible AI",

    
    "Data-Driven Decision Making",
    "Business Intelligence Tools",
    "KPIs and Metrics",
    "Communication and Storytelling with Data",

    
    "Creating a Data Science Portfolio",
    "Capstone Projects",
    "Kaggle Competitions",
    "Resume and Interview Preparation"
]





   

  const navigate = useNavigate();
  const routerchange = (Title,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,tag}});
  }
  const routerchange1 = (Title,Content,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,Content,tag}})
  }
  // http://13.201.93.211/api/home

  const getContent = async () => {
    // console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
    try {
      const data = await axios.get(`${BASE_URL}/app/getcont/getdscontent`, { params: { title: searchtitle } });
      //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
      setCont(data.data[0]?.content || `${searchtitle} contetnt not available`);
    } catch (error) {
      console.log("Error", error)

    }
  }
  useEffect(() => {
    getContent();
  }, [searchtitle])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
    <Suspense fallback={<div>Loading ...</div>}>
      <Carousel b="Data Types" c="Constants" d="Comments" e="Sets" f="Lists" g="Tuple" h="Dictionary" i="Multithreading" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}><FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense></button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {datascience_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,13)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,13)}>Modify Content</button>
          }

           

          <div className='disp-cont-btns'>
            <button className='btn-12'>Previous Topic Topic Name</button>
            <button className='btn-12'>Next Topic Topic Name</button>
          </div>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Datascience;
