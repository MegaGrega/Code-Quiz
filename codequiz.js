
//HTMl Elements
var container = $(".container")
var timerEl = $("#timer")
var startBttn = $(".start-button");
var swapZone = $(".card-changer")
var timerSlot = $(".timer-slot")

// HighScore Slots
var localScore = []
var initialArr = []



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
    var timeLeft = 50

     //Timer
    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.text("Timer: " + timeLeft) ;
        if(timeLeft <= 0){
            timerEl.text("")
            //Empties Card Content
            swapZone.empty();
            clearInterval(timeInterval)
            end();
            
        }
    }, 1000)   
    
    //Creates Random Order
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
            end();
        
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
            end();
        }

    })

    //First Question
    function firstQuestion(){
        $newHead1.text("Which is not a Coen Brother's Movie?")
        $newButton1.text("No Country for Old Men")
        $newButton2.text("Fargo")
        $newButton3.text("The Big Lebowski")
        $newButton4.text("The Matrix")
    }  

    //Second Question
    function secondQuestion(){
        createRandomOrder();
        $newHead1.text("Who Shot First?")
        $newButton1.text("Greedo")
        $newButton2.text("Chewbacca")
        $newButton3.text("Jabba the Hutt")
        $newButton4.text("Han Solo")
    }
    
    //Third Question
    function thirdQuestion(){
        createRandomOrder();
        $newHead1.text("___ is love ___ is life")
        $newButton1.text("Nemo")
        $newButton2.text("Buzz Lightyear")
        $newButton3.text("Donkey")
        $newButton4.text("Shrek")
    }

    //Fourth Question
    function fourthQuestion(){
        createRandomOrder();
        $newHead1.text("How many Fast and the Furious movies are there?")
        $newButton1.text("5")
        $newButton2.text("49")
        $newButton3.text("3")
        $newButton4.text("9")
    }

    //End Function
    function end (){
        var $gameOver = $("<h3>Game Over</h3>")
            var $scoreHeading = $("<h3></h3>")
            var $form = $("<form id = score-form></form>")
            var $input = $('<input type = "text" placeholder = "Enter your Initials"  id = "user-initial">')
            var $scoreList = $("<ul></ul>")

            $scoreHeading.text("Your score is " + timeLeft)
            clearInterval(timeInterval)
            timerSlot.empty();
            swapZone.empty();
            swapZone.append($gameOver);
            swapZone.append($scoreHeading);
            swapZone.append($form);
            $form.append($input)
            $form.on("submit", function(event){
                event.preventDefault();
                var userInitialInput = document.querySelector("#user-initial")
                var inputText = userInitialInput.value.trim();

                if (inputText === ""){
                    return;
                }
                
                //stores score and initials
                var storedScores = JSON.parse(localStorage.getItem("score"))
                var storedInitials = JSON.parse(localStorage.getItem("initials"))
                
                if(storedScores !== null){
                    localScore = storedScores
                    console.log(localScore)
                    localScore.push(timeLeft);
                    console.log(localScore)
       
                }
                if(storedInitials !== null){
                    initialArr = storedInitials
                    initialArr.push(inputText);

                    
                }
                else{
                    initialArr.push(inputText);
                    localScore.push(timeLeft);
                }
                localStorage.setItem("score", JSON.stringify(localScore))
                localStorage.setItem("initials", JSON.stringify(initialArr))
                userInitialInput.value = ""
                swapZone.empty();
                swapZone.append($gameOver)
                swapZone.append($scoreList)
                $gameOver.text("High Scores")
                // Create a score for every score
                for (var i = 0; i < localScore.length; i++){
                    var score = localScore[i]
                    var initial = initialArr[i]
                    var $scoreListItem = $("<li></li>")
                    $scoreList.append($scoreListItem)
                    $scoreListItem.text(initialArr[i] + ":              " + localScore[i] )

                    
        
                }
                


                
            })
    }


     firstQuestion();



}


//Hitting Start Button Begins Quiz
 startBttn.on("click", function() {
     swapZone.empty();
     loadQuestions();
 })




