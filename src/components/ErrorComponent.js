import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorComponent = () => {
    return (
      <div role="alert" className="alert alert-error">
        <FontAwesomeIcon icon={faExclamationTriangle} className="error-icon" />
        <span>Error! Please answer all the questions before clicking done!</span>
      </div>
    );
  };
  
  export default ErrorComponent;
  


