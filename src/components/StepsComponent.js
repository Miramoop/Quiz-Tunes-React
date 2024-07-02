import React from "react";

const StepsComponent = ({ steps, activeStep, onStepClick }) => {
  return (
    <ul className="steps">
      {steps && steps.map((step, index) => (
        <li 
          key={index}
          className={`step ${activeStep >= index ? 'step-primary' : ''}`} 
          onClick={() => onStepClick(index)}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};

export default StepsComponent;

