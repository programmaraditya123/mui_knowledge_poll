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



const Ml = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Supervised Learning" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

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
      const data = await axios.get(`${BASE_URL}/app/getcont/getmlcontent`, { params: { title: searchtitle } });
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

              {ml_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,14)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,14)}>Modify Content</button>
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

export default Ml;
