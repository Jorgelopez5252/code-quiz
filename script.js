const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame() {
 console.log('Started')
 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random)
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}
function setNextQuestion() {

}

function selectAnswer(){

}
const questions = [
    {
        question:'What is 2+2',
        answers:[
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    }
]