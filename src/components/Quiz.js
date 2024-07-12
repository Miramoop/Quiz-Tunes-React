import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ImageButton from './ImageButton';
import ImageOverlay from './ImageOverlay';
import StepsComponent from './StepsComponent';
import AlertBox from './AlertBox';

const Quiz = ({ questions, weights, updateWeights, setIsQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState(
    new Array(questions.length).fill(false)
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const allAnswered = answeredQuestions.every((answered) => answered);
    if (allAnswered) {
      setError(false); // Hide the error message if all questions are answered
    }
  }, [answeredQuestions]);

  const handleChoiceSelection = (selectedChoice) => {
    const previousChoice = selectedChoices[currentQuestionIndex];
    const updatedWeights = { ...weights };

    if (previousChoice) {
      for (const [key, value] of Object.entries(previousChoice.weights)) {
        const normalizedKey = key.toLowerCase();
        updatedWeights[normalizedKey] =
          (updatedWeights[normalizedKey] || 0) - value;
      }
    }

    for (const [key, value] of Object.entries(selectedChoice.weights)) {
      const normalizedKey = key.toLowerCase();
      updatedWeights[normalizedKey] =
        (updatedWeights[normalizedKey] || 0) + value;
    }

    updateWeights(updatedWeights);
    setSelectedChoices({
      ...selectedChoices,
      [currentQuestionIndex]: selectedChoice,
    });

    setAnsweredQuestions((prevAnswers) =>
      prevAnswers.map((answered, index) =>
        index === currentQuestionIndex || answered
      )
    );
  };

  const handleStepClick = (index) => {
    setCurrentQuestionIndex(index);
  };
  
  const handleFinishQuiz = () => {
    const allAnswered = answeredQuestions.every((answered) => answered);
    if (allAnswered) {
      setIsQuizComplete(true);
    } else {
      setError(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <section id="quiz">
      <StepsComponent
        totalSteps={questions.length}
        currentStepIndex={currentQuestionIndex}
        handleStepClick={handleStepClick}
        answeredQuestions={answeredQuestions}
      />
      <div id="questionText">{currentQuestion.question}</div>
      <div className="choices">
        {currentQuestion.choices.map((choice) => {
          const isSelected =
            selectedChoices[currentQuestionIndex]?.choice === choice.choice;
          return (
            <ImageButton
              key={choice.choice}
              onClick={() => handleChoiceSelection(choice)}
              style={{
                border: isSelected ? '2px solid blue' : 'none',
                backgroundColor: isSelected
                  ? 'rgba(0, 0, 255, 0.1)'
                  : 'initial',
              }}
            >
              <div
                className="image-bg"
                style={{ backgroundImage: `url(${choice.image.src})` }}
              />
              <ImageOverlay>
                <Typography
                  component="span"
                  variant="subtitle1"
                  className="image-text"
                >
                  {choice.choice}
                </Typography>
              </ImageOverlay>
            </ImageButton>
          );
        })}
      </div>
      <div className="quiz-navigation">
        {!isFirstQuestion && (
          <button
            className="navigation-button"
            onClick={() => handleStepClick(currentQuestionIndex - 1)}
          >
            Previous
          </button>
        )}
        {isLastQuestion ? (
          <button className="navigation-button" onClick={handleFinishQuiz}>
            Done
          </button>
        ) : (
          <button
            className="navigation-button"
            onClick={() => handleStepClick(currentQuestionIndex + 1)}
          >
            Next
          </button>
        )}
      </div>
      {error && <AlertBox />}
    </section>
  );
};

export default Quiz;