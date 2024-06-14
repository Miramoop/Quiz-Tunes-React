//To Do - Fix this function, as it currently outputs a value of null

const calculateDominantGenre = (weights) => {
  let maxValue = -Infinity;
  let dominantGenre = null;
  for (const genre in weights) {
    if (weights.hasOwnProperty(genre)) {
      if (weights[genre] > maxValue) {
        maxValue = weights[genre];
        dominantGenre = genre;
      }
    }
  }
  
  return dominantGenre;
};

export { calculateDominantGenre };


  
