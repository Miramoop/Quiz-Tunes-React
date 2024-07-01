import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import "../styles/quizStyles.scss";

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
  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  boxSizing: 'border-box', // Include padding in width and height calculations
});

const Quiz = ({ questions, weights, updateWeights, setIsQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  const handleChoiceSelection = (selectedChoice) => {
    const updatedWeights = { ...weights };

    for (const [key, value] of Object.entries(selectedChoice.weights)) {
      const normalizedKey = key.toLowerCase();
      updatedWeights[normalizedKey] =
        (updatedWeights[normalizedKey] || 0) + value;
    }

    updateWeights(updatedWeights);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizComplete(true);
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <section id="quiz">
      <div id="questionText">{currentQuestion.question}</div>
      <div className="choices">
        {currentQuestion.choices.map((choice) => (
          <ImageButton
            key={choice.choice}
            onClick={() => handleChoiceSelection(choice)}
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
        ))}
      </div>
    </section>
  );
};

export default Quiz;



