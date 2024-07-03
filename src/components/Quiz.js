import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import ImageButton from './ImageButton'; 
import ImageOverlay from './ImageOverlay'; 

const Quiz = ({ questions, weights, updateWeights, setIsQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({}); 
  const [answeredQuestions, setAnsweredQuestions] = useState(new Array(questions.length).fill(false)); 

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
    setAnsweredQuestions(answeredQuestions.map((answered, index) => index === currentQuestionIndex ? true : answered));
  };

  const handleStepClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleFinishQuiz = () => {
    const allQuestionsAnswered = answeredQuestions.every(answered => answered);
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


