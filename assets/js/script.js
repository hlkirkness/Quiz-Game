document.addEventListener('DOMContentLoaded', () => {

  // HTML elements querySelectors
  var timeLeftDisplay = document.querySelector('#TimeLeftSpan')
  var questionsDiv = document.querySelector("#questions")
  var introDiv = document.querySelector("#intro")
  var resultsDiv = document.querySelector("#results-screen")
  var scoreSpan = document.querySelector('#score')
  var title = document.querySelector("#title")
  var choice1 = document.querySelector("#choice1")
  var choice2 = document.querySelector("#choice2")
  var choice3 = document.querySelector("#choice3")
  var choice4 = document.querySelector("#choice4")

  const startBtn = document.querySelector('#startBtn')
  let timeLeft = 50

  var questionIndex=0

  // array of question
  var questions = [
    {
      q: 'Commonly used data types DO NOT include',
      c: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
      a: 2
    },
    {
      q: 'The condition in an if/else statement is enclosed with _____',
      c: ['1. Quotes', '2. Curly Brackets', '3. Parentheses', '4. Square Brackets'],
      a: 1
    },
    {
      q: 'Arrays in JavaScript can be used to store _____',
      c: ['1. Numbers and Strings', '2. Other Arrays', '3. Booleans', '4. All of the Above'],
      a: 3
    },
    {
      q: 'String values must be enclosed within _____ when being assigned to variables.',
      c: ['1. Commas', '2. Curly Brackets', '3. Quotes', '4. Parentheses'],
      a: 2
    },
    {
      q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      c: ['1. JavaScript', '2. Terminal/Bash', '3. For Loops', '4. console.log'],
      a: 3
    },
  ];

  // functions
  function startQuiz() {

    //countdown code
    timeLeftDisplay.innerHTML = timeLeft
    var scoreCountdown = setInterval(function () {
      timeLeft -= 1
      timeLeftDisplay.innerHTML = timeLeft
      if (timeLeft <= 0 || resultsDiv.style.display === "block") {
        clearInterval(scoreCountdown)
        goToResults()
      }
    }, 1000)

    // hide the intro
    introDiv.style.display = "none"

    // show the questions
    questionsDiv.style.display = "block"

    loadQuestion()
  }

  startBtn.addEventListener('click', startQuiz)

  function loadQuestion(){
        
    title.textContent=questions[questionIndex].q
    choice1.textContent=questions[questionIndex].c[0]
    choice2.textContent=questions[questionIndex].c[1]
    choice3.textContent=questions[questionIndex].c[2]
    choice4.textContent=questions[questionIndex].c[3]


}

choice1.addEventListener("click", function(){
 onChoiceClicked(0)
})
choice2.addEventListener("click", function(){
 onChoiceClicked(1)
 })
 choice3.addEventListener("click", function(){
   onChoiceClicked(2)
 })
 choice4.addEventListener("click", function(){
   onChoiceClicked(3)
 })

  function onChoiceClicked(choiceIndex) {
    if (choiceIndex != questions[questionIndex].a) {
        (timeLeft-=10)
    }
    if (questionIndex === questions.length - 1) {
      goToResults()
    }
    else {
      questionIndex++
      loadQuestion()
    }
  }

  function goToResults() {
    scoreSpan.innerHTML = timeLeft
    questionsDiv.style.display = "none"
    resultsDiv.style.display = "block"
  }

})