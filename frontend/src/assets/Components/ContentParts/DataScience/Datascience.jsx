import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Datascience = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

const datascience_topics = [
    
    "Introduction to Data Science",
    "Data Science Lifecycle",
    "Types of Data (Structured, Unstructured, Semi structured)",
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
    "Scikit learn",
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
                <li key={index}><Link to={`/datascience/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="ds" tagn={13}/>

      <NextPrevTopic topics={datascience_topics} currentTopic={formattedTopic} basePath="/datascience"/>

       
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Datascience;
