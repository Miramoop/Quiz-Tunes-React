import React, { useEffect, useState } from "react";
import { getToken } from "../api/spotifyApi";

const Quiz = ({
  questions,
  weights,
  handleQuestionData,
  setIsQuizComplete,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionText, setQuestionText] = useState(null);
  const [questionImage, setQuestionImage] = useState(null);
  const [progressImage, setProgressImage] = useState(null);
  const [questionChoices, setQuestionChoices] = useState(null);
  const [choiceWeights, setChoiceWeights] = useState(weights);
  const handleGetToken = async () => {
    try {
      const result = await getToken();
      console.log(result);
      setCurrentQuestion(questions[currentQuestionIndex]);
    } catch (e) {}
  };
  useEffect(() => {
    handleGetToken();
  }, []);

  useEffect(() => {
    if (currentQuestion !== null && currentQuestion !== undefined) {
      setQuestionText(currentQuestion.question);
      setQuestionImage(currentQuestion.questionImage);
      setProgressImage(currentQuestion.progressImage);
      setQuestionChoices(currentQuestion.choices);
    }
  }, [currentQuestion]);

  const handleChoiceSelection = (selectedChoice) => {
    const updatedWeights = { ...choiceWeights.weights };

    for (const [key, value] of Object.entries(selectedChoice.weights)) {
      const normalizedKey = key.toLowerCase();
      if (updatedWeights.hasOwnProperty(normalizedKey)) {
        updatedWeights[normalizedKey] += value;
      } else {
        updatedWeights[normalizedKey] = value;
      }
    }

    setChoiceWeights({ weights: updatedWeights });

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setCurrentQuestion(questions[nextQuestionIndex]);
    } else {
      setIsQuizComplete(true);
    }
  };

  if (!progressImage || !questionImage || !questionText || !questionChoices) {
    return <div>Loading</div>;
  }

  return (
    <section id="quiz">
      <img
        id="progressImage"
        src={progressImage.src ?? ""}
        alt={progressImage.alt}
      />
      <img
        id="questionImage"
        src={questionImage.src ?? ""}
        alt={questionImage.alt}
      />
      <div id="questionText" tabindex="-1">
        {questionText}
      </div>
      <div className="choices">
        {questionChoices?.length > 0 &&
          questionChoices.map((choice) => (
            <button
              id={choice.choice}
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
