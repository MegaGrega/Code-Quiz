// Create a button to start the quiz
// Brings up a new question
// Create button to go to new question
// Create Timer for page

//HTMl Elements
timerEl = $("#timer")



//Timer
function timer(){
    var timeLeft = 20
    setInterval(function(){
    timeLeft--;
    timerEl.text("Timer: " + timeLeft) ;
    }, 1000)   
    }
