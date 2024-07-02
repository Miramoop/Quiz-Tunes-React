import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import '../index.css';
import "../styles/quizStyles.scss";
import StepsComponent from "./StepsComponent";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageOverlay = styled('div')({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.5)', 
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  boxSizing: 'border-box',
});

const Quiz = ({ questions, weights, updateWeights, setIsQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({}); 
  const [answeredQuestions, setAnsweredQuestions] = useState({}); 

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
    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuestionIndex]: true,
    });
  };

  const handleStepClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleFinishQuiz = () => {
    const allQuestionsAnswered = questions.length === Object.keys(answeredQuestions).length;
    if (allQuestionsAnswered) {
      setIsQuizComplete(true);
    } else {
      alert("Please answer all questions before completing the quiz.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <section id="quiz">
      <StepsComponent
        steps={questions.map((_, idx) => `Step ${idx + 1}`)}  
        activeStep={currentQuestionIndex}
        onStepClick={handleStepClick}
      />
      <div id="questionText">{currentQuestion.question}</div>
      <div className="choices">
        {currentQuestion.choices.map((choice) => {
          const isSelected = selectedChoices[currentQuestionIndex]?.choice === choice.choice;
          return (
            <ImageButton
              key={choice.choice}
              onClick={() => handleChoiceSelection(choice)}
              style={{
                border: isSelected ? '2px solid blue' : 'none',
                backgroundColor: isSelected ? 'rgba(0, 0, 255, 0.1)' : 'initial',
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
          <button className="navigation-button" onClick={handleFinishQuiz}>Finish</button>
        ) : (
          <button
            className="navigation-button"
            onClick={() => handleStepClick(currentQuestionIndex + 1)}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Quiz;










