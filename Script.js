var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement= document.getElementById('question')
var answerButtonsElement= document.getElementById('answered-buttons')
var shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame(){
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions= questions.sort(() => Math.random() - .5 )
currentQuestionsIndex= 0
questionContainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion(){
 showQuestion(shuffledQuestions[currentQuestionsIndex])

}
function showQuestion(question) {
    questionElement.innerText= question.question
question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText= answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})

}
function selectAnswer(){


}

var questions= [
    {
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      text: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      question: "In HTML, JavaScript code must be inserted between ______ and____ tags.",
      answers: ["<p>", "<iframe>", "<script>", "<div>"],
      answer: "<script>"
    },
    {
      question: "A JavaScript function is a block of JavaScript code, that can be executed when___for",
      answers: ["called", "looked for", "replaced", "givin"],
      answer: "called"
    },
    {
      question: "Writing into the browser console, using_____.",
      answers: ["window.alert()", "console.log()", "document.write()", "innerHTML"],
      answer: "console.log()"
    },
  ];