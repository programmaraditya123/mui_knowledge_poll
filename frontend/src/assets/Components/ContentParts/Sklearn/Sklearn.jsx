import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Sklearn = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Scikit-learn" : title);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

   

const scikit_learn_topics = [
  "Introduction to Scikit learn",
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
                <li key={index}><Link to={`/sklearn/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="sklearn" tagn={18}/>

        <NextPrevTopic topics={scikit_learn_topics} currentTopic={formattedTopic} basePath="/sklearn"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Sklearn;
