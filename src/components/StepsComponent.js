import React from 'react';

const StepsComponent = ({ totalSteps, currentStepIndex, handleStepClick, answeredQuestions }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index);

  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${index === currentStepIndex ? 'step-primary' : (answeredQuestions[index] ? 'step-success' : (index < currentStepIndex ? 'step-warning' : ''))}`}
          onClick={() => handleStepClick(index)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default StepsComponent;