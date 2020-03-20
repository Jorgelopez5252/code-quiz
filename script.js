const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
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

const questions = [
  {
    question: "What existing bird has the largest wingspan?",
    answers: [
      { text: "Condor", correct: false },
      { text: "Albatross", correct: true },
      { text: "Swan", correct: false },
      { text: "Moose", correct: false }
    ]
  },
  {
    question: "What kind of animal is a feline?",
    answers: [
      { text: "Dog", correct: false },
      { text: "Cat", correct: true },
      { text: "Rat", correct: false },
      { text: "Moose", correct: false }
    ]
  },
  {
    question: "Which of the following is a mammal?",
    answers: [
      { text: "Bird", correct: false },
      { text: "Fish", correct: false },
      { text: "Lizard", correct: false },
      { text: "Whale", correct: true }
    ]
  },
  {
    question: "What animal lives the longest?",
    answers: [
      { text: "Ocean quahog (clam)", correct: true },
      { text: "Red sea urchin", correct: false },
      { text: "Galapagos tortois", correct: false },
      { text: "Rougheye rockfish", correct: false }
    ]
  },

  {
    question: "What is the fastest water animal?",
    answers: [
      { text: "Porpoise", correct: false },
      { text: "Sailfish", correct: true },
      { text: "Flying fish", correct: false },
      { text: "Tuna", correct: false }
    ]
  }
];
