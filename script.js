let quizData = null;

fetch('quizData.json?' + Date.now()) // prevent caching
  .then(res => res.json())
  .then(data => {
    quizData = data.categories;
    displayCategoryButtons();
  });

function displayCategoryButtons() {
  const container = document.getElementById('category-buttons');
  quizData.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.textContent = cat.name;
    btn.onclick = () => displayCategory(index);
    container.appendChild(btn);
  });
}

function displayCategory(index) {
  const quizArea = document.getElementById('quiz-area');
  const category = quizData[index];
  quizArea.innerHTML = `<h2>${category.name}</h2>`;
  category.questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question-block';
    div.innerHTML = `
      <div class="question">${i + 1}. ${q.question}</div>
      <div class="options">
        ${q.options.map((opt, j) => `
          <label>
            <input type="radio" name="q${i}" value="${opt}" />
            ${opt}
          </label>
        `).join('')}
      </div>
    `;
    quizArea.appendChild(div);
  });

  const btn = document.createElement('button');
  btn.textContent = 'Submit';
  btn.className = 'submit-btn';
  btn.onclick = () => gradeCategory(index);
  quizArea.appendChild(btn);

  const score = document.createElement('div');
  score.className = 'score';
  score.id = 'score-display';
  quizArea.appendChild(score);
}

function gradeCategory(index) {
  const category = quizData[index];
  let score = 0;

  category.questions.forEach((q, i) => {
    const radios = document.getElementsByName('q' + i);
    let selected = null;

    for (let r of radios) {
      if (r.checked) selected = r.value;
    }

    radios.forEach(r => {
      const label = r.parentElement;
      label.classList.remove('correct', 'incorrect');
      if (r.value === q.answer) {
        if (r.checked) {
          label.classList.add('correct');
          score++;
        } else {
          label.classList.add('correct');
        }
      } else if (r.checked) {
        label.classList.add('incorrect');
      }
    });
  });

  document.getElementById('score-display').textContent = `Score: ${score} / ${category.questions.length}`;
}
