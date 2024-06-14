import questionsData from "../data/questions.json";
import weightsData from "../data/weights.json";

const loadInitialData = () => {
  return {
    questions: questionsData,
    weights: weightsData,
  };
};

export { loadInitialData };
