const questionsData = [
  {
    name: "Traffic Signs",
    questions: [
      {
        question: "What does a red octagon sign mean?",
        choices: [
          "Stop",
          "Yield",
          "Do not enter",
          "Speed limit"
        ],
        correctIndex: 0,
        explanation: "A red octagon always means Stop."
      },
      {
        question: "What should you do when you see a yellow diamond-shaped sign?",
        choices: [
          "Stop immediately",
          "Prepare to stop",
          "Be cautious, warning of hazards",
          "Pedestrian crossing"
        ],
        correctIndex: 2,
        explanation: "Yellow diamond signs warn you of hazards or changes ahead."
      },
      {
        question: "What does a flashing red light mean at an intersection?",
        choices: [
          "Stop, then proceed when safe",
          "Proceed with caution",
          "Traffic light is malfunctioning",
          "Pedestrian crossing"
        ],
        correctIndex: 0,
        explanation: "A flashing red light means stop, then proceed when safe."
      },
      {
        question: "What is the meaning of a 'No U-turn' sign?",
        choices: [
          "U-turns are allowed",
          "U-turns are prohibited",
          "Turn left only",
          "Yield to U-turns"
        ],
        correctIndex: 1,
        explanation: "No U-turn means U-turns are prohibited at that location."
      }
    ],
  },

  // Add 8 more categories here with the same structure
  // For brevity, only one more category is shown below

  {
    name: "Challenging Questions (Most Often Incorrect)",
    questions: [
      {
        question: "When making a left turn from a two-way street onto a one-way street, which lane should you turn into?",
        choices: [
          "Any lane",
          "The left lane",
          "The right lane",
          "The middle lane"
        ],
        correctIndex: 1,
        explanation: "You must turn into the left lane of the one-way street."
      },
      {
        question: "What is the correct procedure if your vehicle begins to hydroplane?",
        choices: [
          "Brake hard immediately",
          "Take your foot off the gas and steer straight",
          "Accelerate to regain traction",
          "Turn sharply to correct"
        ],
        correctIndex: 1,
        explanation: "Take your foot off the gas and steer straight until you regain traction."
      }
      // Add more questions as needed
    ],
  }
];
