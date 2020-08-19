//declare all variables
var score;
var timeleft;
var correctAnswer;
var timer;
var playing = false;



//declare all functions
//1. stoptimer
//2. showquestionAnswers
//3. starttimer
//4. hide
//5. show


//Writing the functions
//show
function show(id){
    document.getElementById(id).style.display = "block";
}

//hide
function hide(id){
    document.getElementById(id).style.display = "none";
}

//starttimer
function startTimer(){
    timer = setInterval(function(){
        --timeleft;
        show("timeremaining");
        document.getElementById("timeremainingvalue").innerText = timeleft;
        if(timeleft == 50){
            //stop timer
           stopTimer();
            //display game over div
            show("gameOver");
            playing = false;
            clearText();
            hide("timeremaining");
            document.getElementById("gameOver").innerHTML = "<p>Game Over!!</p><p>Your score is " + score +    "</p>";
           }
    }, 1000);
}


//stoptimer
function stopTimer(){
    clearInterval(timer);
}

//generateQandA
function generateQandA(){
    //generate two random numbers between 1 and 10 1 -10
    var fnum = 1 + Math.floor(Math.random() * 10); //4
    var snum = 1 + Math.floor(Math.random() * 10); //5
    correctAnswer = fnum * snum;
    
    document.getElementById("question").innerText = fnum + " x " + snum;   //10 x 10
    
    var answers = [correctAnswer];
    var randompositions = [];
    
    //generate the wrong answers
    while(answers.length < 4){
        
        var wrongAnswer = 1 + Math.floor(Math.random() * 99);   // 1 - 100
        if(wrongAnswer != correctAnswer){
            //insert into answers array
            answers.push(wrongAnswer);
        }
        
        
    }
    
    var i = 0;
    
    while(randompositions.length < 4){
        
        var randpos = Math.floor(Math.random() * 4);   // 0-3
        
        if(randompositions.includes(randpos) == false){
           randompositions[i] = randpos;
            i++;
        }
          
    }
    
    
    //
    console.log(answers);
    console.log(randompositions);
    
    
    //answers = [34, 56, 23, 78];
    //display them on the divs
    for(i=1; i<=4; i++){
        document.getElementById("box" + i).innerText = answers[randompositions[i-1]];  //1
    }
    
    
    /*for(i=0; i<4; i++){
        document.getElementById("box" + (i+1)).innerText = answers[i];
    }
    */
    
    
}




//Start Playing game
document.getElementById("startreset").onclick = function(){
    
    //check if we are playing
    if(playing == false){
        //start playing
        playing = true;
        score = 0;
        timeleft = 60;
        document.getElementById("scorevalue").innerText = score;
        
        startTimer();
        generateQandA();
        this.innerText = "Reset Game";
        
        
    }else{
        //stop playing by reloading the page
        location.reload();
        
    }
    
    
}


//clicking on the answer box
for(j=1; j<=4; j++){
    document.getElementById("box"+ j).onclick = function (){
        
        if(playing == true){
            if(this.innerText == correctAnswer){
                show("correct");
                hide("wrong");
                ++score;
                document.getElementById("scorevalue").innerText = score;
                generateQandA();
                setTimeout(function(){
                    hide("correct");
                }, 1000);
                
            }else{
                show("wrong");
                hide("correct");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
        
        
    }
}


function clearText (){
    document.getElementById("box1").innerText = "";
    document.getElementById("box2").innerText = "";
    document.getElementById("box3").innerText = "";
    document.getElementById("box4").innerText = "";
    document.getElementById("question").innerText = "";
}











