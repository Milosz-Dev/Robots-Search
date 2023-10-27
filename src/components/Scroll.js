import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', overflowX: 'hidden', border: '3px solid black', height: '1000px' }}>
      {props.children}
    </div>
  )
};

export default Scroll;