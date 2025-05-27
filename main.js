// Helper function to shuffle options and return new options array
function shuffleOptions(options, correctIndex) {
  const optionsCopy = [...options];
  // Swap correct option with random position
  const randomIndex = Math.floor(Math.random() * optionsCopy.length);
  const temp = optionsCopy[randomIndex];
  optionsCopy[randomIndex] = optionsCopy[correctIndex];
  optionsCopy[correctIndex] = temp;
  return optionsCopy;
}

// Helper to get the new index of the correct answer after shuffling
function getNewAnswerIndex(originalOptions, originalCorrectIndex) {
  const shuffled = shuffleOptions(originalOptions, originalCorrectIndex);
  return shuffled.indexOf(originalOptions[originalCorrectIndex]);
}
