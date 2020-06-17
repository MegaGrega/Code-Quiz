
//HTMl Elements
var container = $(".container")
var timerEl = $("#timer")
var startBttn = $(".start-button");
var swapZone = $(".card-changer")
var timerSlot = $(".timer-slot")



// Question Load Format
function loadQuestions(){ 
    var $newHead1 = $("<h3 class = question>Question</h3>")  //Creates New Question
    var $newButton1 = $('<button class="btn btn-dark btn-lg wrong-button"> Answer 1 </button>') //Creates New Button
    var $newButton2 = $('<button class="btn btn-dark btn-lg wrong-button"> Answer 2 </button>') //Creates New Button
    var $newButton3 = $('<button class="btn btn-dark btn-lg wrong-button"> Answer 3 </button>') //Creates New Button
    var $newButton4 = $('<button class="btn btn-dark btn-lg right-button"> Answer 4 </button>') //Creates New Button
    var $newBreak = $("<hr></hr>")
    var questionNumber = 0
     
     //Total Quiz Time
    var timeLeft = 40

     //Timer
    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.text("Timer: " + timeLeft) ;
        if(timeLeft <= 0){
            timerEl.text("")
            //Empties Card Content
            swapZone.empty();
            clearInterval(timeInterval)
            var $gameOver = $("<h3>Game Over</h3>")
            swapZone.append($gameOver);
            
        }
    }, 1000)   
    
    createRandomOrder();


        //Created array to hold new buttons
    function createRandomOrder() {
        var buttonOrder = [$newButton1, $newButton2, $newButton3, $newButton4]
        var randomOrder = buttonOrder.sort(randomizer)
        function randomizer(a,b){
            return 0.5 -(Math.random())
        }
        //Creates Question Heading
        swapZone.append($newHead1);
        //Loads Qusetion in random order
        for (i=0; i < 4; i++){
            swapZone.append(randomOrder[i]);
        }
        //Adds line break
        swapZone.append($newBreak)
        //Create Correct or Incorrect Notification =-====================================================================================
    }



    //Subtracts 10 Seconds on Button Click
    subtractBttn= $(".wrong-button");
    correctBttn= $(".right-button");
    subtractBttn.on("click", function() {
        console.log("That is incorrect") //DEBUG
        timeLeft -= 10;
        questionNumber++
        console.log(questionNumber)
        if(questionNumber === 1){
            secondQuestion();
        }
        if(questionNumber === 2){
            thirdQuestion();
        }
        if(questionNumber === 3){
            fourthQuestion();
        }
        if(questionNumber === 4){
            console.log(timeLeft) //DEBUG
            var $gameOver = $("<h3>Game Over</h3>")
            var $scoreHeading = $("<h3></h3>")
            $scoreHeading.text("Your score is " + timeLeft)
            clearInterval(timeInterval)
            timerSlot.empty();
            swapZone.empty();
            swapZone.append($gameOver);
            swapZone.append($scoreHeading);
        }

    })

    //Correct Answer - No time Penalty
    correctBttn.on("click", function() {
        console.log("That is correct") //DEBUG
        questionNumber++
        console.log(questionNumber)
        if(questionNumber === 1){
            secondQuestion();
        }
        if(questionNumber === 2){
            thirdQuestion();
        }
        if(questionNumber === 3){
            fourthQuestion();
        }
        if(questionNumber === 4){
            console.log(timeLeft) //DEBUG
            var $gameOver = $("<h3>Game Over</h3>")
            var $scoreHeading = $("<h3></h3>")
            $scoreHeading.text("Your score is " + timeLeft)
            clearInterval(timeInterval)
            timerSlot.empty();
            swapZone.empty();
            swapZone.append($gameOver);
            swapZone.append($scoreHeading);
        }

    })

    //First Question
    function firstQuestion(){
        $newHead1.text("First Question")
        $newButton1.text("Dog")
        $newButton2.text("Elephant")
        $newButton3.text("Giraffe")
        $newButton4.text("Correct Answer")
    }  

    //Second Question
    function secondQuestion(){
        createRandomOrder();
        $newHead1.text("Second Question")
        $newButton1.text("Dog")
        $newButton2.text("Elephant")
        $newButton3.text("Cat")
        $newButton4.text("Correct Answer")
    }
    
    //Third Question
    function thirdQuestion(){
        createRandomOrder();
        $newHead1.text("Third Question")
        $newButton1.text("Dog")
        $newButton2.text("Elephant")
        $newButton3.text("Cat")
        $newButton4.text("Correct Answer")
    }

    //Fourth Question
    function fourthQuestion(){
        createRandomOrder();
        $newHead1.text("Fourth Question")
        $newButton1.text("Dog")
        $newButton2.text("Elephant")
        $newButton3.text("Cat")
        $newButton4.text("Correct Answer")
    }

     firstQuestion();



}


//Hitting Start Button Begins Quiz
 startBttn.on("click", function() {
     swapZone.empty();
     loadQuestions();
 })




