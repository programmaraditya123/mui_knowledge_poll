import React, { useEffect, useState } from 'react';
import './KnowTubeVideo.css';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const KnowTubeVideo = () => {
    const {video} = useParams();
    const[data,setData] = useState();
    const [url,setUrl] = useState();
    console.log("+++++++++0",url);
    const navigate = useNavigate();

    const getVideos = async () => {
      const data  = await axios.get(`${BASE_URL}/app/knowtube/knowtubevideos`)
      setData(data.data);
    };


    useEffect(() => {
        const getpresignedUrl = async () =>{
            const url = await axios.get(`${BASE_URL}/app/knowtube/${encodeURIComponent(video)}`);
            setUrl(url.data.url)
            
        }
        getpresignedUrl();
        getVideos();
    },[video]);

    const getMimeType = (url) => {
      if (url.endsWith('.mp4')) return 'video/mp4';
      if (url.endsWith('.webm')) return 'video/webm';
      if (url.endsWith('.ogg')) return 'video/ogg';
      return 'video/mp4'; // fallback
    };
    

  return (
    <div className='top-container1'>
    <div className='vedio-container1'>
    {url ? (
  <video key={url} width="925" controls>
    <source src={url} type={getMimeType(url)}/>
    Your browser does not support the video tag.
  </video>
) : (
  <p>Loading video...</p>
)}
    </div>
      <div className="video-card2">
    {data && data.map((d) => (
      <div className='parent-cont' key={d._id} onClick={() => navigate(`/knowtube/${d.videoUrl.replace(/^videos\//, "")}`)}>
      <div className="thumbnail2">
        <img
          src="/thumbnail.png"  
          alt={d.title}
        />
        <span className="duration2">{d.duration}</span>
      </div>
      <div className="video-info2">
        <h3 className="video-title2">
          {d.title}
        </h3>
        <p className="channel-name2">{d.creator}</p>
        <p className="video-meta2">113 views • {new Date(d.uploadedon).toDateString()}</p>
        <span className="new-badge2">New</span>
      </div>
      </div>

    ))}
    </div>
   

    </div>
  );
};

export default KnowTubeVideo;
