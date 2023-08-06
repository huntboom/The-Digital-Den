import React from 'react';

const PageComponent = ({ text }) => {
  const pageStyle = {
    width: '500px', // Set your desired width
    height: '700px', // Set your desired height
    padding: '20px',
    border: '1px solid black',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap', // Preserves newlines and spaces in the text
    wordWrap: 'break-word' // Breaks the words at the end of the line
  };

  // If no text is passed in, don't render the component
  if (!text) {
    return null;
  }

  return (
    <div style={pageStyle}>
      {text}
    </div>
  );
};

export default PageComponent;
