import React, { useEffect, useState } from 'react';
import './KnowTubeCard.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const KnowTubeCard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  

  useEffect(() => {
    const vedioData = async () => {
        const res = await axios.get(`${BASE_URL}/app/knowtube/knowtubevideos`);
        // const rawData = res.data;
        setData(res.data)
     

    // For each video, fetch the pre-signed URL
    //     const enrichedData = await Promise.all(rawData.map(async (d) => {

    //         const fullUrl = d.videoUrl;
    //         const match = fullUrl.match(/videos\/([^?]+)/);

    //         const videoFileName = match ? match[1] : null;

    //         if (!videoFileName) return d;

    //     const urlRes = await axios.get(`http://localhost:8081/app/knowtube/${encodeURIComponent(videoFileName)}`);
    //     return { ...d, signedUrl: urlRes.data.url };
    //   }));
    //   setData(enrichedData)
    // };
}
    vedioData();
  }, []);

 

  return (
    <div className="card-list">
      {data.map((d) => (
        <div className="card-video" key={d._id}>
          <div className="thumbnail-container">
            <video
              className="thumbnail"
              src={d.signedUrl}
              alt="thumbnail not available"
              muted
              preload="metadata"
              onMouseOver={e => e.target.play()}
              onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
              onClick={() => navigate(`/knowtube/${d.videoUrl.replace(/^videos\//, "")}`)}
            ></video>
            <span className="duration">{d.TTOC}</span>
          </div>
          <div className="card-details">
            <img
              src="https://yt3.ggpht.com/ytc/your_channel_id=s68-c-k-c0x00ffffff-no-rj"
              alt="Channel"
              className="avatar"
            />
            <div className="info">
              <p className="title" onClick={() => navigate(`/knowtube/${d.videoUrl.replace(/^videos\//, "")}`)}>{d.title}</p>
              <p className="channel">{d.creator} <span className="verified">✔</span></p>
              <p className="meta">{d.likes} likes • {new Date(d.uploadedon).toDateString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KnowTubeCard;
