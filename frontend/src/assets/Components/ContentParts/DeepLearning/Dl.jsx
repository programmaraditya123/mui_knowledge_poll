import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import axios from 'axios';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Dl = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  

const deep_learning_topics = [
  "Perceptron",
  "Multilayer Perceptron (MLP)",
  "Activation Functions",
  "Backpropagation",
  "Gradient Descent and Variants",
  "Loss Functions",
  "Batch Normalization",
  "Dropout Regularization",
  "Convolutional Neural Networks (CNN)",
  "Pooling Layers",
  "Recurrent Neural Networks (RNN)",
  "Long Short-Term Memory (LSTM)",
  "Gated Recurrent Units (GRU)",
  "Attention Mechanism",
  "Transformers",
  "Encoder-Decoder Architecture",
  "BERT",
  "GPT",
  "Vision Transformers (ViT)",
  "Autoencoders",
  "Variational Autoencoders (VAE)",
  "Generative Adversarial Networks (GAN)",
  "Deep Reinforcement Learning",
  "Q-Networks (DQN)",
  "Actor-Critic Methods",
  "Policy Gradient Methods",
  "Deep Q-Learning",
  "Neural Style Transfer",
  "Image Segmentation (U-Net, Mask R-CNN)",
  "Object Detection (YOLO, SSD, Faster R-CNN)",
  "Speech Recognition Models",
  "Sequence-to-Sequence Models",
  "Neural Machine Translation",
  "Transfer Learning",
  "Fine-tuning Pretrained Models",
  "Model Quantization and Pruning",
  "Hyperparameter Tuning",
  "Distributed Training",
  "Model Deployment",
  "ONNX and TensorRT",
  "TensorBoard",
  "Custom Training Loops",
  "Data Augmentation",
  "Synthetic Data Generation",
  "Zero-shot and Few-shot Learning",
  "Self-supervised Learning",
  "Contrastive Learning",
  "Meta-Learning",
  "Neural Architecture Search (NAS)"
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

              {deep_learning_topics.map((topics, index) => (
                <li key={index}><Link to={`/deeplearning/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="dl" tagn={15} />

        <NextPrevTopic topics={deep_learning_topics} currentTopic={formattedTopic} basePath="/deeplearning"/>

        
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Dl;
