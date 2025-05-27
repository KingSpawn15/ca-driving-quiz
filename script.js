let data;
let categoryIndex = 0;
let questionIndex = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-btn");
const categoryTitle = document.getElementById("category-title");

fetch("quizData.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    showQuestion();
  });

function showQuestion() {
  nextBtn.disabled = true;
  const category = data.categories[categoryIndex];
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
  const selected = document.querySelector("input[name=option]:checked").value;
  const correct = data.categories[categoryIndex].questions[questionIndex].answer;
  if (selected === correct) score++;

  const category = data.categories[categoryIndex];
  if (questionIndex < category.questions.length - 1) {
    questionIndex++;
  } else if (categoryIndex < data.categories.length - 1) {
    categoryIndex++;
    questionIndex = 0;
  } else {
    alert(`Quiz finished! Your score: ${score}`);
    categoryIndex = 0;
    questionIndex = 0;
    score = 0;
  }

  showQuestion();
});
