// questions.js
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
    {
      question: "What is the speed limit in an alley?",
      options: ["10 mph", "15 mph", "20 mph", "25 mph"],
      answer: 1,
      explanation: "The speed limit in an alley is 15 mph."
    },
    {
      question: "What is the speed limit when passing a school while children are outside?",
      options: ["15 mph", "20 mph", "25 mph", "35 mph"],
      answer: 2,
      explanation: "The speed limit is 25 mph when passing a school while children are outside."
    },
    {
      question: "What is the posted speed limit near railroad tracks when you cannot see 400 feet in either direction?",
      options: ["15 mph", "20 mph", "25 mph", "30 mph"],
      answer: 0,
      explanation: "You must slow to 15 mph when approaching a railroad track if you can't see 400 feet in either direction."
    },
    {
      question: "What is the speed limit in a business district unless otherwise posted?",
      options: ["20 mph", "25 mph", "30 mph", "35 mph"],
      answer: 1,
      explanation: "The speed limit in business districts is typically 25 mph unless otherwise posted."
    },
    {
      question: "What is the speed limit when approaching or passing a streetcar, trolley, or bus stopped at a safety zone?",
      options: ["10 mph", "15 mph", "25 mph", "30 mph"],
      answer: 0,
      explanation: "When passing a stopped streetcar, trolley, or bus at a safety zone, the speed limit is 10 mph."
    },
    {
      question: "What is the default speed limit on a two-lane undivided highway?",
      options: ["45 mph", "55 mph", "60 mph", "65 mph"],
      answer: 1,
      explanation: "On two-lane undivided highways, the speed limit is usually 55 mph."
    },
    {
      question: "What is the maximum speed limit for vehicles towing trailers on a highway?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      answer: 0,
      explanation: "Vehicles towing trailers are limited to a maximum speed of 55 mph on highways."
    },
    {
      question: "How fast can you legally drive in fog, heavy rain, or snow?",
      options: ["Posted speed limit", "10 mph", "As fast as traffic", "Safe speed for conditions"],
      answer: 3,
      explanation: "You must drive at a speed that is safe for conditions, even if it means going slower than the posted limit."
    },
    {
      question: "What is the speed limit near blind intersections where you cannot see 100 feet in either direction?",
      options: ["10 mph", "15 mph", "20 mph", "25 mph"],
      answer: 1,
      explanation: "The speed limit near blind intersections is 15 mph."
    },
    {
      question: "What is the speed limit within 100 feet of a railroad crossing where visibility is obstructed?",
      options: ["10 mph", "15 mph", "25 mph", "30 mph"],
      answer: 1,
      explanation: "You must slow to 15 mph within 100 feet of a railroad crossing when your view is obstructed."
    },
    {
      question: "What is the speed limit in a senior zone if posted?",
      options: ["15 mph", "20 mph", "25 mph", "30 mph"],
      answer: 0,
      explanation: "Some senior zones may post speed limits as low as 15 mph."
    },
    {
      question: "What is the speed limit in areas where there are no speed limit signs and no specific area rules apply?",
      options: ["50 mph", "55 mph", "65 mph", "Safe speed based on conditions"],
      answer: 3,
      explanation: "If there are no speed limit signs, you must drive at a speed that is reasonable and prudent for the conditions."
    },
    {
      question: "How should you adjust your speed when driving downhill?",
      options: ["Maintain the same speed", "Accelerate slightly", "Shift to a higher gear", "Slow down and use lower gear"],
      answer: 3,
      explanation: "When going downhill, you should slow down and shift to a lower gear to maintain control."
    }
  ],
  laws: [
    {
      question: "Is it legal to use a handheld phone while driving in California?",
      options: ["Yes, anytime", "Only with speaker mode", "No, it's illegal", "Only for navigation"],
      answer: 2,
      explanation: "California law prohibits the use of handheld cell phones while driving."
    },
    // 14 more laws questions here...
  ],
  signs: [
    {
      question: "What does a red octagon-shaped sign mean?",
      options: ["Yield", "Stop", "Do Not Enter", "Wrong Way"],
      answer: 1,
      explanation: "A red octagon-shaped sign means 'Stop'."
    },
    // 14 more signs questions here...
  ],
  distance: [
    {
      question: "What is the minimum following distance you should maintain behind another vehicle?",
      options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
      answer: 2,
      explanation: "You should maintain at least a 3-second gap under ideal conditions."
    },
    // 14 more distance questions here...
  ],
  parking: [
    {
      question: "What does a red-painted curb mean?",
      options: ["Loading only", "No parking or stopping", "Bus stop", "Disabled parking only"],
      answer: 1,
      explanation: "A red curb means no stopping, standing, or parking at any time."
    },
    // 14 more parking questions here...
  ],
  pedestrians: [
    {
      question: "Who has the right-of-way at a crosswalk?",
      options: ["Vehicles", "Pedestrians", "Bicycles", "No one"],
      answer: 1,
      explanation: "Pedestrians have the right-of-way at crosswalks."
    },
    // 14 more pedestrians questions here...
  ],
  signals: [
    {
      question: "What should you do if your turn signals fail?",
      options: ["Stop driving immediately", "Use hand signals", "Change lanes often", "Drive slower"],
      answer: 1,
      explanation: "If your turn signals fail, use hand signals to indicate your intentions."
    },
    // 14 more signals questions here...
  ],
  night: [
    {
      question: "When should you use high-beam headlights?",
      options: ["In the city", "At night on unfamiliar roads", "During heavy traffic", "Near other vehicles"],
      answer: 1,
      explanation: "Use high beams in rural areas and unfamiliar roads when there are no other cars nearby."
    },
    // 14 more night questions here...
  ],
emergencies: [
  {
    question: "What should you do if your brakes fail while driving?",
    options: shuffleOptions([
      "Turn off the engine",
      "Shift into neutral",
      "Pump the brakes and use emergency brake",
      "Jump out of the car"
    ], 2),
    answer: getNewAnswerIndex([
      "Turn off the engine",
      "Shift into neutral",
      "Pump the brakes and use emergency brake",
      "Jump out of the car"
    ], 2)
  },
  {
    question: "If you are in an accident and someone is injured, what is the first thing you should do?",
    options: shuffleOptions([
      "Move the injured person immediately",
      "Call 911 and provide help",
      "Leave the scene",
      "Exchange insurance information"
    ], 1),
    answer: getNewAnswerIndex([
      "Move the injured person immediately",
      "Call 911 and provide help",
      "Leave the scene",
      "Exchange insurance information"
    ], 1)
  },
  {
    question: "What is the safest way to handle a tire blowout?",
    options: shuffleOptions([
      "Brake hard immediately",
      "Hold the steering wheel firmly and gradually slow down",
      "Turn sharply to the side of the road",
      "Stop in the middle of the road"
    ], 1),
    answer: getNewAnswerIndex([
      "Brake hard immediately",
      "Hold the steering wheel firmly and gradually slow down",
      "Turn sharply to the side of the road",
      "Stop in the middle of the road"
    ], 1)
  },
  {
    question: "If your car catches fire while driving, what should you do?",
    options: shuffleOptions([
      "Drive until the fire goes out",
      "Stop, turn off the engine, and move away from the car",
      "Open the hood immediately",
      "Pour water on the fire"
    ], 1),
    answer: getNewAnswerIndex([
      "Drive until the fire goes out",
      "Stop, turn off the engine, and move away from the car",
      "Open the hood immediately",
      "Pour water on the fire"
    ], 1)
  },
  {
    question: "What do you do if your accelerator sticks?",
    options: shuffleOptions([
      "Shift into neutral and apply brakes",
      "Turn off the engine while driving",
      "Jump out of the car",
      "Accelerate more"
    ], 0),
    answer: getNewAnswerIndex([
      "Shift into neutral and apply brakes",
      "Turn off the engine while driving",
      "Jump out of the car",
      "Accelerate more"
    ], 0)
  },
  {
    question: "How should you react if an emergency vehicle approaches from behind with sirens on?",
    options: shuffleOptions([
      "Speed up and outrun it",
      "Pull over to the right and stop",
      "Ignore it and keep driving",
      "Stop in the middle of the road"
    ], 1),
    answer: getNewAnswerIndex([
      "Speed up and outrun it",
      "Pull over to the right and stop",
      "Ignore it and keep driving",
      "Stop in the middle of the road"
    ], 1)
  },
  {
    question: "If your vehicle skids on ice, what is the proper action?",
    options: shuffleOptions([
      "Brake hard immediately",
      "Turn your steering wheel in the direction of the skid",
      "Turn the wheel away from the skid",
      "Accelerate quickly"
    ], 1),
    answer: getNewAnswerIndex([
      "Brake hard immediately",
      "Turn your steering wheel in the direction of the skid",
      "Turn the wheel away from the skid",
      "Accelerate quickly"
    ], 1)
  },
  {
    question: "When you experience hydroplaning, what should you do?",
    options: shuffleOptions([
      "Brake hard and steer off the road",
      "Slow down gradually and avoid braking",
      "Accelerate to regain traction",
      "Turn sharply"
    ], 1),
    answer: getNewAnswerIndex([
      "Brake hard and steer off the road",
      "Slow down gradually and avoid braking",
      "Accelerate to regain traction",
      "Turn sharply"
    ], 1)
  },
  {
    question: "If you are caught in fog, what is the best way to drive?",
    options: shuffleOptions([
      "Use high-beam headlights",
      "Use low-beam headlights and drive slowly",
      "Drive at normal speed",
      "Turn off your headlights"
    ], 1),
    answer: getNewAnswerIndex([
      "Use high-beam headlights",
      "Use low-beam headlights and drive slowly",
      "Drive at normal speed",
      "Turn off your headlights"
    ], 1)
  },
  {
    question: "If your vehicle stalls on railroad tracks and a train is approaching, what should you do?",
    options: shuffleOptions([
      "Try to start the engine again",
      "Get out and run toward the train",
      "Get out and run away from the train",
      "Stay in the vehicle"
    ], 2),
    answer: getNewAnswerIndex([
      "Try to start the engine again",
      "Get out and run toward the train",
      "Get out and run away from the train",
      "Stay in the vehicle"
    ], 2)
  },
  {
    question: "If you see a stopped emergency vehicle with flashing lights on the road, what is required?",
    options: shuffleOptions([
      "Slow down and move over one lane if possible",
      "Keep driving at normal speed",
      "Stop immediately",
      "Ignore the vehicle"
    ], 0),
    answer: getNewAnswerIndex([
      "Slow down and move over one lane if possible",
      "Keep driving at normal speed",
      "Stop immediately",
      "Ignore the vehicle"
    ], 0)
  },
  {
    question: "What is the proper way to use your horn in an emergency?",
    options: shuffleOptions([
      "Constantly honk to alert all vehicles",
      "Use it to avoid collisions or warn others",
      "Use it to express anger",
      "Never use it"
    ], 1),
    answer: getNewAnswerIndex([
      "Constantly honk to alert all vehicles",
      "Use it to avoid collisions or warn others",
      "Use it to express anger",
      "Never use it"
    ], 1)
  },
  {
    question: "If your headlights suddenly go out at night, what should you do?",
    options: shuffleOptions([
      "Turn on your hazard lights and slow down",
      "Keep driving at the same speed",
      "Turn on your high beams",
      "Turn off the car"
    ], 0),
    answer: getNewAnswerIndex([
      "Turn on your hazard lights and slow down",
      "Keep driving at the same speed",
      "Turn on your high beams",
      "Turn off the car"
    ], 0)
  },
  {
    question: "If you are driving and feel drowsy, what should you do?",
    options: shuffleOptions([
      "Open the windows and keep driving",
      "Stop and rest or switch drivers",
      "Drink coffee and keep driving",
      "Ignore it and drive faster"
    ], 1),
    answer: getNewAnswerIndex([
      "Open the windows and keep driving",
      "Stop and rest or switch drivers",
      "Drink coffee and keep driving",
      "Ignore it and drive faster"
    ], 1)
  },
  {
    question: "If you hit a parked car and cannot find the owner, what should you do?",
    options: shuffleOptions([
      "Leave a note with your information",
      "Drive away quickly",
      "Call the police immediately",
      "Ignore it"
    ], 0),
    answer: getNewAnswerIndex([
      "Leave a note with your information",
      "Drive away quickly",
      "Call the police immediately",
      "Ignore it"
    ], 0)
  }
];


