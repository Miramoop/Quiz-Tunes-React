import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const AlertBox = ({ message }) => {
    return (
      <div role="alert" className="alert alert-error">
        <FontAwesomeIcon icon={faExclamationTriangle} className="error-icon" />
        <span>{message}</span>
      </div>
    );
  };
  
  export default AlertBox;