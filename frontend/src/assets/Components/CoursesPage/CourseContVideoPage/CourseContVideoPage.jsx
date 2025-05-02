import React, { useEffect , useRef, useState} from 'react';
import './CourseContVideoPage.css';
import { useLocation } from 'react-router';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CourseContVideoPage = () => {
  const location = useLocation();
  const videos = location.state?.videos;
  const [name,setName] = useState(videos[0]?.videoName || "");
  // const filename = "default font size.mp4";  
 
  //console.log("5555555555",name)

    //  const encodedFilename = encodeURIComponent(filename);
    // console.log("+++++++++++++++",encodedFilename)
     const videoRef = useRef(null);

      useEffect(() => {
        const video = videoRef.current;
        if (video) {
          video.addEventListener("loadedmetadata", () => {
            console.log("Seekable ranges:", video.seekable);
          });
        }
      }, []);


      const changevideo = (videoName) => {
        setName(videoName);

      }
      const encodedFilename = encodeURIComponent(name);
      console.log("+++++++++++++++",encodedFilename)
  return (
    
    <div className='coursevideos1'>
       <div className='coursevideos2'>
            <h2>Video Player</h2>
            <video ref={videoRef} width="800" controls key={encodedFilename} >
                <source src={`${BASE_URL}/app/getcourse/video/${encodedFilename}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
         <div className='coursevideos3'>
          <h2>List of all Course videos</h2>
          {videos.map((video) => (
            <div key={video._id} className="video-item" onClick={() => changevideo(video.videoName)}>
              <p><strong>Video {video.sequenceNumber}:</strong> {video.videoName}</p>
            </div>
          ))}

         </div>
    </div>
  )
}

export default CourseContVideoPage
