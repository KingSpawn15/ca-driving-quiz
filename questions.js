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
  // ... (other categories remain similar structure)
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
      },
      {
        question: "How do you handle a pedestrian who suddenly steps into the street outside of a crosswalk?",
        choices: [
          "Honk your horn and continue",
          "Slow down and prepare to stop",
          "Speed up to pass quickly",
          "Ignore and continue"
        ],
        correctIndex: 1,
        explanation: "You should slow down and be prepared to stop to avoid an accident."
      },
      {
        question: "Under what conditions can you legally drive in a carpool lane?",
        choices: [
          "Only with the required number of passengers",
          "Any time",
          "Only during rush hour",
          "When you are driving alone"
        ],
        correctIndex: 0,
        explanation: "Carpool lanes require you to have the minimum number of passengers."
      },
      {
        question: "What does it mean when a school bus has flashing yellow lights?",
        choices: [
          "Prepare to stop",
          "Stop immediately",
          "The bus is loading passengers",
          "The bus is leaving"
        ],
        correctIndex: 0,
        explanation: "Flashing yellow means slow down and prepare to stop."
      },
      {
        question: "How do you properly execute a three-point turn on a narrow street?",
        choices: [
          "Back up into traffic",
          "Signal, pull over and wait",
          "Signal, turn left across the road, reverse to the other side, and move forward",
          "Make a U-turn in one motion"
        ],
        correctIndex: 2,
        explanation: "A three-point turn involves signaling, turning left, reversing across, and moving forward."
      },
      {
        question: "What should you do if an emergency vehicle with flashing lights approaches from behind?",
        choices: [
          "Speed up to get out of the way",
          "Stop immediately where you are",
          "Pull over to the right edge of the road and stop",
          "Ignore and keep driving"
        ],
        correctIndex: 2,
        explanation: "Pull over to the right and stop to let emergency vehicles pass."
      },
      {
        question: "How far ahead should you scan the road when driving at highway speeds?",
        choices: [
          "5 seconds ahead",
          "10 seconds ahead",
          "20 seconds ahead",
          "Only the car in front"
        ],
        correctIndex: 1,
        explanation: "You should scan at least 10 seconds ahead to anticipate hazards."
      }
    ],
  }
];
