let data;
let currentCategoryIndex = 0;
let questionIndex = 0;
let scores = [];

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-btn");
const categoryTitle = document.getElementById("category-title");
const scoreBox = document.getElementById("score-box");
const categoryList = document.getElementById("category-list");

fetch("quizData.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    scores = data.categories.map(() => ({ correct: 0, total: 0 }));
    renderCategoryButtons();
    loadCategory(0);
  });

function renderCategoryButtons() {
  data.categories.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.textContent = cat.name;
    btn.onclick = () => {
      currentCategoryIndex = i;
      questionIndex = 0;
      loadCategory(i);
    };
    categoryList.appendChild(btn);
  });
}

function loadCategory(index) {
  questionIndex = 0;
  showQuestion();
  updateScoreDisplay();
}

function showQuestion() {
  nextBtn.disabled = true;
  const category = data.categories[currentCategoryIndex];
  const question = category.questions[questionIndex];

  categoryTitle.textContent = `Category: ${category.name}`;
  questionBox.innerHTML = `
    <p>${question.question}</p>
    <form id="quiz-form">
      ${question.options.map((opt, i) => `
        <label>
          <input type="radio" name="option" value="${opt}"> ${opt}
        </label><br>
      `).join('')}
    </form>
  `;

  document.querySelectorAll("input[name=option]").forEach(input => {
    input.addEventListener("change", () => {
      nextBtn.disabled = false;
    });
  });
}

nextBtn.addEventListener("click", () => {
  const selectedInput = document.querySelector("input[name=option]:checked");
  const selected = selectedInput.value;
  const category = data.categories[currentCategoryIndex];
  const question = category.questions[questionIndex];
  const correctAnswer = question.answer;

  // Score tracking
  scores[currentCategoryIndex].total++;
  if (selected === correctAnswer) {
    scores[currentCategoryIndex].correct++;
  }

  // Color feedback
  document.querySelectorAll("input[name=option]").forEach(input => {
    const label = input.parentElement;
    if (input.value === correctAnswer) {
      label.classList.add("correct");
    } else if (input.checked) {
      label.classList.add("incorrect");
    }
    input.disabled = true;
  });

  updateScoreDisplay();
  nextBtn.disabled = true;

  setTimeout(() => {
    if (questionIndex < category.questions.length - 1) {
      questionIndex++;
      showQuestion();
    } else {
      alert(`You've finished ${category.name}!`);
    }
  }, 1000);
});

function updateScoreDisplay() {
  const s = scores[currentCategoryIndex];
  scoreBox.innerHTML = `Score for ${data.categories[currentCategoryIndex].name}: ${s.correct} / ${s.total}`;
}
