import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextPrevTopic = ({ topics, currentTopic, basePath}) => {
  const currentIndex = topics.findIndex(
    t => t.trim().toLowerCase() === currentTopic.trim().toLowerCase()
  );

  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex >= 0 && currentIndex < topics.length - 1
      ? topics[currentIndex + 1]
      : null;

  return (
    <div className='disp-cont-btns'>
      {prevTopic && (
        <Link to={`${basePath}/${encodeURIComponent(prevTopic)}`}>
          <button className='btn-12'>
            <FaArrowLeft /> {prevTopic}
          </button>
        </Link>
      )}
      {nextTopic && (
        <Link to={`${basePath}/${encodeURIComponent(nextTopic)}`}>
          <button className='btn-12'>
            {nextTopic} <FaArrowRight />
          </button>
        </Link>
      )}
    </div>
  );
};

export default NextPrevTopic;

