// link all variables

var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var start = document.querySelector(".start");
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-btn");

var questions = [
  {
    question: "Q1: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Q2:Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
];

var currentQuestionIndex = 0;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", addNumber);

function addNumber() {
  currentQuestionIndex++;
}

function startGame() {
  console.log("started");
  start.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextBtn.classList.remove("hide");
}

function showQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].question;
}

showQuestion();

function showAnswer() {
  questions[currentQuestionIndex].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
    }
    answerBtn.appendChild(button);
  });
}
showAnswer();

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtn.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

console.log(currentQuestionIndex);
