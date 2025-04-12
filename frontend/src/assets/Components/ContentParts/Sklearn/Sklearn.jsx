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



const Sklearn = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Scikit-learn" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const scikit_learn_topics = [
  "Introduction to Scikit-learn",
  "Installing Scikit-learn",
  "Scikit-learn API Structure",
  "Datasets in Scikit-learn",
  "Loading and Splitting Data",
  "Preprocessing and Data Transformation",
  "Standardization and Normalization",
  "Handling Missing Values",
  "Encoding Categorical Variables",
  "Pipeline and ColumnTransformer",
  "Feature Selection",
  "Dimensionality Reduction",
  "Principal Component Analysis (PCA)",
  "Model Selection",
  "Cross-Validation",
  "Grid Search CV",
  "Randomized Search CV",
  "Hyperparameter Tuning",
  "Performance Metrics",
  "Confusion Matrix",
  "Accuracy, Precision, Recall, F1-Score",
  "ROC Curve and AUC",
  "Regression Metrics (MAE, MSE, RMSE, R²)",
  "Classification Algorithms",
  "Logistic Regression",
  "K-Nearest Neighbors (KNN)",
  "Support Vector Machines (SVM)",
  "Naive Bayes",
  "Decision Trees",
  "Random Forest",
  "Gradient Boosting",
  "Bagging and Voting Classifiers",
  "Regression Algorithms",
  "Linear Regression",
  "Ridge and Lasso Regression",
  "Polynomial Regression",
  "ElasticNet",
  "KNN Regression",
  "Decision Tree Regression",
  "Random Forest Regression",
  "Clustering Algorithms",
  "K-Means Clustering",
  "Hierarchical Clustering",
  "DBSCAN",
  "Gaussian Mixture Models",
  "Model Persistence (Joblib, Pickle)",
  "Custom Estimators and Transformers",
  "Working with Imbalanced Datasets",
  "Multilabel and Multiclass Classification",
  "Time Series and Scikit-learn",
  "Text Classification with Scikit-learn",
  "Integration with Pandas and NumPy",
  "Visualization with Scikit-learn (e.g., plot_tree, confusion_matrix)",
  "Best Practices in Using Scikit-learn"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getsklearncontent`, { params: { title: searchtitle } });
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

              {scikit_learn_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,18)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,18)}>Modify Content</button>
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

export default Sklearn;
