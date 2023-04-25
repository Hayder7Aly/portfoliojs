import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading type="spin" color={'#ffffff'} height={80} width={80} />
    </div>
  );
};

export default Loading;
