/ -------- LOGIN LOGIC --------
if (document.getElementById('loginForm')) {
  const loginForm = document.getElementById('loginForm');
  const errorMsg = document.getElementById('error-msg');

  // Hardcoded demo credentials (for project/demo only)
  const validUsername = "admin";
  const validPassword = "quiz123";

  loginForm.addEventListener('submit', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
      // Save logged in state
      sessionStorage.setItem('loggedIn', 'true');
      // Redirect to quiz page
      window.location.href = 'quiz.html';
    } else {
      errorMsg.textContent = "Invalid username or password. Please try again.";
    }
  });

  // Redirect to quiz if already logged in
  if (sessionStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'quiz.html';
  }
}

// -------- QUIZ LOGIC --------
if (document.getElementById('question-text')) {
  // Simple quiz questions - you can load from questions.json too (fetch)
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
      answer: 1
    }
  ];

  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextBtn = document.getElementById('next-btn');

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedOptionIndex = null;

  // Redirect to login if not logged in
  if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }

  function loadQuestion() {
    nextBtn.disabled = true;
    selectedOptionIndex = null;
    optionsContainer.innerHTML = '';

    const currentQ = questions[currentQuestionIndex];
    questionText.textContent = currentQ.question;

    currentQ.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.addEventListener('click', () => selectOption(index, btn));
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(index, btn) {
    if (selectedOptionIndex !== null) return; // only one selection allowed

    selectedOptionIndex = index;

    // Mark selected button
    [...optionsContainer.children].forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // Enable next button
    nextBtn.disabled = false;
  }

  nextBtn.addEventListener('click', () => {
    const currentQ = questions[currentQuestionIndex];

    // Check answer and update score
    if (selectedOptionIndex === currentQ.answer) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      // Save score and total
      sessionStorage.setItem('quizScore', score);
      sessionStorage.setItem('quizTotal', questions.length);
      // Redirect to result page
      window.location.href = 'result.html';
    }
  });

  // Initial load
  loadQuestion();
}

// -------- RESULT LOGIC --------
if (document.getElementById('score')) {
  // Redirect to login if not logged in
  if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }

  const score = sessionStorage.getItem('quizScore');
  const total = sessionStorage.getItem('quizTotal');
  const scoreEl = document.getElementById('score');
  const totalEl = document.getElementById('total');
  const retryBtn = document.getElementById('retry-btn');

  scoreEl.textContent = score ?? '0';
  totalEl.textContent = total ?? '0';

  retryBtn.addEventListener('click', () => {
    // Clear quiz data and redirect to quiz page
    sessionStorage.removeItem('quizScore');
    sessionStorage.removeItem('quizTotal');
    window.location.href = 'quiz.html';
  });
}
