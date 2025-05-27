let questionsData = {}; // will load questions file
let currentQuestions = [];
let currentCategory = '';

document.getElementById('startBtn').addEventListener('click', () => {
  const categorySelect = document.getElementById('categories');
  currentCategory = categorySelect.value;
  
  if (!currentCategory) {
    alert('Please select a category.');
    return;
  }
  
  fetch('questions.json')
    .then(res => res.json())
    .then(data => {
      questionsData = data;
      loadQuestions();
    });
});

function loadQuestions() {
  currentQuestions = questionsData[currentCategory];
  let quizHTML = '';
  
  currentQuestions.forEach((q, index) => {
    quizHTML += `<div class="question" data-index="${index}">
      <p>${index + 1}. ${q.question}</p>
      <ul class="choices">`;
    q.choices.forEach((choice, i) => {
      quizHTML += `<li>
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${choice}
        </label>
      </li>`;
    });
    quizHTML += `</ul></div>`;
  });
  
  quizHTML += `<button id="submitBtn">Submit</button>`;
  document.getElementById('quiz-container').innerHTML = quizHTML;
  
  document.getElementById('submitBtn').addEventListener('click', evaluateAnswers);
}

function evaluateAnswers() {
  let score = 0;
  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    const questionDiv = document.querySelector(`div[data-index="${index}"]`);
    
    if (selected) {
      const selectedAnswer = parseInt(selected.value);
      if (selectedAnswer === q.answer) {
        score++;
        questionDiv.classList.remove('incorrect');
        questionDiv.classList.add('correct');
      } else {
        questionDiv.classList.remove('correct');
        questionDiv.classList.add('incorrect');
      }
    } else {
      // No answer selected
      questionDiv.classList.remove('correct');
      questionDiv.classList.add('incorrect');
    }
    // Show explanations
    const explanation = document.createElement('p');
    explanation.innerText = `Explanation: ${q.explanation}`;
    questionDiv.appendChild(explanation);
  });
  document.getElementById('result').innerText = `You scored ${score} out of ${currentQuestions.length}`;
}
