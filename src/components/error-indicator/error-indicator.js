import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span>Warning!</span>
      <span>We found some error, please wait...</span>
    </div>
  );
};

export default ErrorIndicator;