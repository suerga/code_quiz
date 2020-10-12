var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var start = document.querySelector(".start");
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-btn");

let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("started");
  start.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextBtn.classList.remove("hide");
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {}

function showQuestion() {}

function selectAnswer() {}

const questions = [
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
