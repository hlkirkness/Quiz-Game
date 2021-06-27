document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#TimeLeftSpan')
    const startBtn = document.querySelector ('#startBtn')
    let timeLeft = 50

    function countDown(){
        setInterval(function(){
            if (timeLeft <=0) {
                clearInterval(timeLeft=0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -= 1
        }, 1000)
    }
    startBtn.addEventListener('click', countDown)
})
var startBtn = document.querySelector("#startBtn")
    var questionsDiv = document.querySelector("#questions")
    var introDiv = document.querySelector("#intro")
    var TimeLeftSpan= document.querySelector("#TimeLeftSpan")
  var initialDiv= document.querySelector("#initialDiv")
  var title= document.querySelector("#title")
  var choice1= document.querySelector("#choice1")
  var choice2= document.querySelector("#choice2")
  var choice3= document.querySelector("#choice3")
  var choice4= document.querySelector("#choice4")
  var questions = [
    {
        q: 'Commonly used data types DO NOT include',
        c: ['1. Strings','2. Booleans','3. Alerts','4. Numbers'],
        a: 3
    },
    {
        q: 'The condition in an if/else statement is enclosed with _____',
        c: ['1. Quotes','2. Curly Brackets','3. Parentheses','4. Square Brackets'],
        a: 2
    },
    {
        q: 'Arrays in JavaScript can be used to store _____',
        c: ['1. Numbers and Strings','2. Other Arrays','3. Booleans','4. All of the Above'],
        a: 3
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        c: ['1. Commas','2. Curly Brackets','3. Quotes','4. Parentheses'],
        a: 2
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        c: ['1. JavaScript','2. Terminal/Bash','3. For Loops','4. console.log'],
        a: 4
    },
];
    var timeRemaining =  questions.length *10

    var questionIndex = 0

    var pidClock

    startBtn.addEventListener("click", function () {
      questionsDiv.classList.remove("hide")
      introDiv.classList.add("hide")
      loadQuestion()
      pidClock=setInterval(countDown, 1000)
       
    })
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
    function countDown(){
      if(timeRemaining===0)
      {
        clearInterval(pidClock)  
        questionsDiv.classList.add("hide")  //adding the hide class to make it invisible
        initialDiv.classList.remove("hide") // removing the hide class to make it visible

      }
      TimeLeftSpan.textContent  =timeRemaining
      timeRemaining--  // timeRemaining = timeRemaining-1


    }