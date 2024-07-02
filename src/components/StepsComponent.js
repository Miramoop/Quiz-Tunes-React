import React from "react";

const StepsComponent = ({ steps, answeredQuestions, activeStep, onStepClick }) => {
  return (
    <ul className="steps">
      {steps.map((stepIndex) => (
        <li 
          key={stepIndex}
          className={`step ${answeredQuestions[stepIndex] ? 'step-success' : (stepIndex < activeStep ? 'step-warning' : '')}`} 
          onClick={() => onStepClick(stepIndex)}
        />
      ))}
    </ul>
  );
};

export default StepsComponent;


