import React, { useRef ,useEffect} from 'react'

const CommunityPricing = () => {
  // const filename = "default font size.mp4";  
  // const filename = "4kvideo.mp4"; 
  const filename = "tutorial2.mp4";  

  const encodedFilename = encodeURIComponent(filename);
  console.log("+++++++++++++++",encodedFilename)
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", () => {
        console.log("Seekable ranges:", video.seekable);
      });
    }
  }, []);

  return (
    <div>
            <h2>Video Player</h2>
            <video ref={videoRef} width="900" controls>
                <source src={`http://localhost:8000/app/getcourse/video/${encodedFilename}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
  )
}

export default CommunityPricing
