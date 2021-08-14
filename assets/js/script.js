document.addEventListener('DOMContentLoaded', () => {

  // HTML elements querySelectors
  var timeLeftDisplay = document.querySelector('#TimeLeftSpan')
  var questionsDiv = document.querySelector("#questions")
  var introDiv = document.querySelector("#intro")
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
      a: 3
    },
    {
      q: 'The condition in an if/else statement is enclosed with _____',
      c: ['1. Quotes', '2. Curly Brackets', '3. Parentheses', '4. Square Brackets'],
      a: 2
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

  // variable data types
  // array, strings, boolean, numbers, objects

  // var myString = "Hello World";
  // var myNumber = 6;
  // var anotherNumber = 7;

  // var myArray = ["blue", "ye;l;low", "red"]


  // var objects = [
  //   {
  //     // key : value
  //     color: "blue",
  //     size: 5,
  //     anotherString: myString
  //   }, 
  //   {
  //     // key : value
  //     color: "red",
  //     size: 6,
  //     anotherString: myString
  //   }
  // ]

  // console.log(objects[1].color)




  // functions
  function startQuiz() {

    //countdown code
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -= 1
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
 questionIndex++
 loadQuestion()
})
choice2.addEventListener("click", function(){
 questionIndex++
 loadQuestion()
 })
 choice3.addEventListener("click", function(){
   questionIndex++
   loadQuestion()
 })
 choice4.addEventListener("click", function(){
   questionIndex++
   loadQuestion()
 })

if (questions[questionIndex].c != questions[questionIndex].a) {
    (timeLeft-10)
}



})
// var startBtn = document.querySelector("#startBtn")
// var TimeLeftSpan= document.querySelector("#TimeLeftSpan")
var initialDiv = document.querySelector("#initialDiv")

var timeLeft = questions.length * 10

var questionIndex = 0

var pidClock

startBtn.addEventListener("click", function () {
  questionsDiv.classList.remove("hide")
  introDiv.classList.add("hide")
  loadQuestion()
  pidClock = setInterval(countDown, 1000)

})
function loadQuestion() {

  title.textContent = questions[questionIndex].q
  choice1.textContent = questions[questionIndex].c[0]
  choice2.textContent = questions[questionIndex].c[1]
  choice3.textContent = questions[questionIndex].c[2]
  choice4.textContent = questions[questionIndex].c[3]


}

choice1.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
choice2.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
choice3.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
choice4.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
function countDown() {
  if (timeLeft === 0) {
    clearInterval(pidClock)
    questionsDiv.classList.add("hide")  //adding the hide class to make it invisible
    initialDiv.classList.remove("hide") // removing the hide class to make it visible

  }
  TimeLeftSpan.textContent = timeLeft
  timeLeft--  // timeRemaining = timeRemaining-1


}