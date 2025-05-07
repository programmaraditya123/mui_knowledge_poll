import React, { useState } from 'react';
import './CreatorUploadVedioPage.css';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CreatorUploadVedioPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        creator: "",
        TTOC: "",
        tags: "",
        videoUrl:""
      });
    
      const [videoFile, setVideoFile] = useState(null);

   
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!videoFile) {
          alert("Please select a video file.");
          return;
        }
        try {
          const videoFileName = await UploadVideo();
          if (!videoFileName) return;

          // const videoUrl = await getpreSignedUrl(videoFileName);
          // if (!videoUrl) return;

          const finalFormData = {
            ...formData,
            videoUrl:videoFileName,
          };

          await uploadData(finalFormData);
          // alert("Video uploaded successfully!");
          
        } catch (error) {
          console.error("Upload failed:", error);
      alert("Failed to upload video and data.");
          
        }
       
        // const videoFileName = await UploadVideo();
        // // videoName = result.fileName;
        // const Url = getpreSignedUrl(result)
        // const finalFormData = {
        //   ...formData,
        //   videourl,
        // };
        // uploadData()


        
        console.log({ ...formData });
      };


      const UploadVideo = async () => {
        
        try {
            const uploadFormData = new FormData();
            uploadFormData.append("file",videoFile)
            const uploadRes = await axios.post(`${BASE_URL}/app/knowtube/upload`,uploadFormData,{headers: {
            "Content-Type": "multipart/form-data",
          },})
          console.log("11111111111",uploadRes.data.fileName)
          return uploadRes.data.fileName;
            
        } catch (error) {
          console.log(error,"error in uploading video")
            
        }
      };

      // const getpreSignedUrl = async (videoFileName) => {
      //   try {
      //     const Urlres = await axios.get(`http://localhost:8081/app/knowtube/${encodeURIComponent(videoFileName)}`)
      //     console.log("+++++++",Urlres)
      //     return Urlres.data.url;
      //   } catch (error) {
      //     console.log(error,"error in getting presignedUrl")
          
      //   }
      // };
    

       const uploadData = async(finalData) => {
        try {
          const data = await axios.post(`${BASE_URL}/app/knowtube/uploadtubevideo`,finalData,{
            headers: {
              'Content-Type': 'application/json'
        }});
           alert("Vedio uploaded succssfully")
          console.log(data,"data Uploaded Successfully")
          
        } catch (error) {
          console.log(error,"error in uploading data")
          
        }
       };


      return (
        <div className="upload-container">
          <form className="form-section" onSubmit={handleSubmit}>
            <h2>Upload Video</h2>
    
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            <input type="text" name="creator" placeholder="Creator" value={formData.creator} onChange={handleChange} />
            <input type="text" name="TTOC" placeholder="Time to Completion (TTOC)" value={formData.TTOC} onChange={handleChange} />
            <input type="text" name="tags" placeholder="Tags (comma-separated)" value={formData.tags} onChange={handleChange} />
    
            <button type="submit">Submit</button>
          </form>
    
          <div className="video-upload-section">
            <h3>Upload Video</h3>
            <input type="file" accept="video/*" onChange={handleFileChange}  />
            {videoFile && (
              <video controls className="preview-video">
                <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      );
}

export default CreatorUploadVedioPage
