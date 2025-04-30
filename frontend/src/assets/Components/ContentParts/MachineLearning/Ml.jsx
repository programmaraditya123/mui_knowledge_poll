import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));
import  '../Python/Python.css';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Ml = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const ml_topics = [
  
  "Supervised Learning",
  "Unsupervised Learning",
  "Semi-supervised Learning",
  "Reinforcement Learning",

  
  "Linear Regression",
  "Logistic Regression",
  "K-Nearest Neighbors (KNN)",
  "Support Vector Machines (SVM)",
  "Decision Trees",
  "Random Forest",
  "Gradient Boosting Machines (GBM)",
  "XGBoost",
  "AdaBoost",
  "LightGBM",
  "CatBoost",
  "Naive Bayes",

  
  "K-Means Clustering",
  "Hierarchical Clustering",
  "DBSCAN",
  "Gaussian Mixture Models (GMM)",
  "Principal Component Analysis (PCA)",
  "t-SNE",
  "Autoencoders",

   
  "Perceptron",
  "Feedforward Neural Networks (FNN)",
  "Convolutional Neural Networks (CNN)",
  "Recurrent Neural Networks (RNN)",
  "Long Short-Term Memory (LSTM)",
  "Gated Recurrent Units (GRU)",
  "Transformers",
  "GANs (Generative Adversarial Networks)",

  
  "Markov Decision Processes (MDP)",
  "Q-Learning",
  "SARSA",
  "Deep Q Networks (DQN)",
  "Policy Gradient Methods",
  "Actor-Critic Methods",

  
  "Confusion Matrix",
  "Accuracy, Precision, Recall, F1-Score",
  "ROC Curve & AUC",
  "Cross-Validation",
  "Bias-Variance Tradeoff",
  "Overfitting and Underfitting",

  
  "Feature Selection",
  "Feature Scaling (Normalization, Standardization)",
  "One-Hot Encoding",
  "Label Encoding",
  "Dimensionality Reduction",

  
  "Model Serialization (Pickle/Joblib)",
  "Flask/Django for Deployment",
  "FastAPI",
  "Docker for ML",
  "CI/CD in ML Projects",
  "ML Model Monitoring",

 
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "XGBoost Library",
  "OpenCV (for CV)",
  "Hugging Face Transformers",

  
  "Natural Language Processing (NLP)",
  "Computer Vision (CV)",
  "Time Series Forecasting",
  "Anomaly Detection",
  "Recommender Systems",
  "Federated Learning",
  "Explainable AI (XAI)",
  "AutoML",
  "MLOps",
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

              {ml_topics.map((topics, index) => (
                 <li key={index}><Link to={`/machinelearning/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="ml" tagn={14}/>

        <NextPrevTopic topics={ml_topics} currentTopic={formattedTopic} basePath="/machinelearning"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Ml;
