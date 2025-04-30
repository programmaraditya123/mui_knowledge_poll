// ContentDisplay.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import './CreatorViews.css'
import { BsPersonSquare } from "react-icons/bs";
import { useNavigate } from 'react-router';

const CreatorViews= ({ formattedTopic , tit , tagn}) => {
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [views, setViews] = useState(0);
  const [creator, setCreator] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  // Fetch content
  const getContent = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/app/getcont/get${tit}content`, {
        params: { title: formattedTopic },
      });
      const data = response.data[0];

      setContent(data?.content || `${formattedTopic} content not available`);
      setTag(data?.tag || '');
      setViews(data?.views || 0);
      setCreator(data?.creator || '');
      setCreatedAt(data?.createdAt || '');
    } catch (error) {
      console.log('Error fetching content:', error);
    }
  };

  // Update view count after 30s
  const updateViews = async () => {
    try {
      await axios.post(`${BASE_URL}/app/updateuser/updateviews`, {
        title: formattedTopic,
        tag: tag,
        views: (views || 0) + 1,
      });
    } catch (error) {
      console.log('Error updating views:', error);
    }
  };

  useEffect(() => {
    getContent();
  }, [formattedTopic]);

  useEffect(() => {
    if (tag && formattedTopic) {
      const timer = setTimeout(() => {
        updateViews();
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [tag, formattedTopic]);


  const navigate = useNavigate();
  const routerchange = (Title,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,tag}});
  }
  const routerchange1 = (Title,Content,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,Content,tag}})
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className='crt'>
       <div className='creator'>
       <div className='creatorphoto'><BsPersonSquare className='creicon'/></div>
       <div className='creatorname'>{creator}</div>
       </div>
       <div className='views'>
         <div className='updatetime'>{createdAt}</div>
         <div className='totalviews'>{views}</div>
      </div>
    </div>
    {content?.trim() === `${formattedTopic} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(formattedTopic,tagn)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(formattedTopic,content,tagn)}>Modify Content</button>
          }
    </div>
  );
};

export default CreatorViews;














// import React from 'react';
// import './CreatorViews.css'
// import { BsPersonSquare } from "react-icons/bs";

// const CreatorViews = (props) => {
//   return (
//     <div className='crt'>
//       <div className='creator'>
//       <div className='creatorphoto'><BsPersonSquare className='creicon'/></div>
//       <div className='creatorname'>{props.name}</div>
//       </div>
//       <div className='views'>
//         <div className='updatetime'>{props.time}</div>
//         <div className='totalviews'>{props.views}</div>
//       </div>
//     </div>
//   )
// }

// export default CreatorViews;
