// link all variables

var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var start = document.querySelector(".start");
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-btn");
var timeEl = document.querySelector(".timer");
var scoreEl = document.querySelector(".score");

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
    question: "Q2: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Q3: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Q4: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Q5: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Q6: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "Q7: Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function () {
    // knock a second off the clock
    secondsLeft--;
    // display the new countdown time
    timeEl.textContent = "Time: " + secondsLeft;

    // check if we are out of time
    if (secondsLeft === 0) {
      // if so, sotp the timer
      clearInterval(timerInterval);
      // trigger the message
      nextQuestion();
    }
  }, 1000);
}

setTime();

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);

function startGame() {
  console.log("started");
  start.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextBtn.classList.remove("hide");
  currentQuestionIndex = 0;
  console.log(currentQuestionIndex);
  showQuestion();
  showAnswer();
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

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtn.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
}

function resetState() {
  clearStatusClass(document.body);
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
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

function resetState() {
  clearStatusClass(document.body);
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function nextQuestion() {
  console.log("next");
  currentQuestionIndex++;
  console.log(currentQuestionIndex);
  showQuestion();
  resetState();
  showAnswer();
}

console.log(currentQuestionIndex);

// showAnswer();
