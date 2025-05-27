// questions.js

// Utility functions for shuffling options and recalculating answer index (used in emergencies category)
function shuffleOptions(options, correctIndex) {
  // Simple shuffle that keeps track of correct answer position
  const array = options.map((opt, idx) => ({opt, idx}));
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  const newCorrectIndex = array.findIndex(item => item.idx === correctIndex);
  return {shuffledOptions: array.map(item => item.opt), newCorrectIndex};
}

function getNewAnswerIndex(originalOptions, correctIndex) {
  // This is just a placeholder since the actual shuffleOptions above returns both shuffled options and new index
  // You can integrate the shuffleOptions function and return values accordingly in your actual code.
  return correctIndex;
}

const questions = {
  speed: [
    {
      question: "What is the maximum speed limit on most California highways?",
      options: ["55 mph", "65 mph", "70 mph", "75 mph"],
      answer: 2,
      explanation: "The maximum speed limit on most California highways is 65 mph, but it can be up to 70 mph where posted."
    },
    {
      question: "When driving in a residential area, what is the general speed limit unless otherwise posted?",
      options: ["15 mph", "25 mph", "30 mph", "35 mph"],
      answer: 1,
      explanation: "The speed limit in residential areas is typically 25 mph unless otherwise posted."
    },
    // Add more speed questions here...
  ],

  laws: [
    {
      question: "Is it legal to use a handheld phone while driving in California?",
      options: ["Yes, anytime", "Only with speaker mode", "No, it's illegal", "Only for navigation"],
      answer: 2,
      explanation: "California law prohibits the use of handheld cell phones while driving."
    },
    // Add more laws questions here...
  ],

  signs: [
    {
      question: "What does a red octagon-shaped sign mean?",
      options: ["Yield", "Stop", "Do Not Enter", "Wrong Way"],
      answer: 1,
      explanation: "A red octagon-shaped sign means 'Stop'."
    },
    // Add more signs questions here...
  ],

  distance: [
    {
      question: "What is the minimum following distance you should maintain behind another vehicle?",
      options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
      answer: 2,
      explanation: "You should maintain at least a 3-second gap under ideal conditions."
    },
    // Add more distance questions here...
  ],

  parking: [
    {
      question: "What does a red-painted curb mean?",
      options: ["Loading only", "No parking or stopping", "Bus stop", "Disabled parking only"],
      answer: 1,
      explanation: "A red curb means no stopping, standing, or parking at any time."
    },
    // Add more parking questions here...
  ],

  pedestrians: [
    {
      question: "Who has the right-of-way at a crosswalk?",
      options: ["Vehicles", "Pedestrians", "Bicycles", "No one"],
      answer: 1,
      explanation: "Pedestrians have the right-of-way at crosswalks."
    },
    // Add more pedestrians questions here...
  ],

  signals: [
    {
      question: "What should you do if your turn signals fail?",
      options: ["Stop driving immediately", "Use hand signals", "Change lanes often", "Drive slower"],
      answer: 1,
      explanation: "If your turn signals fail, use hand signals to indicate your intentions."
    },
    // Add more signals questions here...
  ],

  night: [
    {
      question: "When should you use high-beam headlights?",
      options: ["In the city", "At night on unfamiliar roads", "During heavy traffic", "Near other vehicles"],
      answer: 1,
      explanation: "Use high beams in rural areas and unfamiliar roads when there are no other cars nearby."
    },
    // Add more night questions here...
  ],

  emergencies: [
    {
      question: "What should you do if your brakes fail while driving?",
      options: ["Turn off the engine", "Shift into neutral", "Pump the brakes and use emergency brake", "Jump out of the car"],
      answer: 2,
      explanation: "If your brakes fail, pump the brakes and use the emergency brake to slow down safely."
    },
    {
      question: "If you are in an accident and someone is injured, what is the first thing you should do?",
      options: ["Move the injured person immediately", "Call 911 and provide help", "Leave the scene", "Exchange insurance information"],
      answer: 1,
      explanation: "Call 911 and provide help first before doing anything else."
    },
    {
      question: "What is the safest way to handle a tire blowout?",
      options: ["Brake hard immediately", "Hold the steering wheel firmly and gradually slow down", "Turn sharply to the side of the road", "Stop in the middle of the road"],
      answer: 1,
      explanation: "Hold the steering wheel firmly and gradually slow down to maintain control."
    },
    // Add more emergencies questions here...
  ]
};

export default questions;
