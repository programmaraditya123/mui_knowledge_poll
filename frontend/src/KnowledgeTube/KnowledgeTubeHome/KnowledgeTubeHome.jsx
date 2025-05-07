import React from 'react'
import { useNavigate } from 'react-router'
import KnowTubeCard from '../KnowTubeCard/KnowTubeCard';

const KnowledgeTubeHome = () => {
  const navigate = useNavigate();

  const uploadvideo = () =>{
    navigate("/knowtube/creatorupload")
  };
  return (
    <>
    <div>
      <h1>This is where videos are shown</h1>
      <button className='btn-12' onClick={uploadvideo}>Become Creator</button>
    </div>
    <KnowTubeCard/>
    </>
  )
}

export default KnowledgeTubeHome
