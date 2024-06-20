import React, { useEffect, useState } from "react";
import "../styles/quizStyles.scss";

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
      <img
        id="questionImage"
        src={currentQuestion.questionImage?.src ?? ""}
        alt={currentQuestion.questionImage?.alt}
      />
      <div id="questionText">{currentQuestion.question}</div>
      <div className="choices">
        {currentQuestion.choices.map((choice) => (
          <button
            key={choice.choice}
            onClick={() => handleChoiceSelection(choice)}
          >
            {choice.choice}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Quiz;
