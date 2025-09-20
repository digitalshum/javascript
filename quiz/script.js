const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: 2
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
    answer: 1
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Multi Language", "None of these"],
    answer: 0
  },
  {
    question: "Which year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of these"],
    answer: 1
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
    answer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}: ${currentQuestion.question}`;

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(li, index));
    optionsList.appendChild(li);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsList.innerHTML = "";
}

function selectAnswer(selectedLi, index) {
  let correctAnswer = questions[currentQuestionIndex].answer;

  if (index === correctAnswer) {
    selectedLi.classList.add("correct");
    score++;
  } else {
    selectedLi.classList.add("wrong");
  }

  Array.from(optionsList.children).forEach((li, i) => {
    li.style.pointerEvents = "none";
    if (i === correctAnswer) li.classList.add("correct");
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let message = "";

  if (score === questions.length) {
    message = "Perfect! Congratulations, you nailed all questions!";
  } else if (score >= 3) {
    message = "Great Job! You did really well.";
  } else if (score >= 1) {
    message = "Not bad! Keep practicing and you’ll get better.";
  } else {
    message = "Oops! No correct answers. Try again!";
  }

  scoreText.innerHTML = `You scored <strong>${score}</strong> out of <strong>${questions.length}</strong><br><br>${message}`;
}

restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
});
