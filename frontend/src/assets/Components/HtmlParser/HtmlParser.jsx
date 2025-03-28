import React from 'react';
import parse from 'html-react-parser';

const HtmlParser = ({htmlString}) => {
  return (
    <>
    {parse(htmlString)}
      
    </>
  )
}

export default HtmlParser;
 