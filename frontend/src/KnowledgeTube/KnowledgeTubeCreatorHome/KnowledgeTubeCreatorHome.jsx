import React from 'react';
import { Link } from 'react-router';

const KnowledgeTubeCreatorHome = () => {
  return (
    <div>
    <h1>Creator Dashboard</h1>
     <Link to='/knowtube/creatorupload'><button className='btn-11'>Upload Video</button></Link>
    </div>
  )
}

export default KnowledgeTubeCreatorHome
