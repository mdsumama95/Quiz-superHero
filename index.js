var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "hello",
    score: 1,
  },

  {
    name: "bhai",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Who are favourite Hero?",
  answer: "Dactor strange"
}, {
  question: "What is your best web series?",
  answer: "Stranger things"
},
{
  question: "Do you know what's your real Aim?",
  answer: "Good person"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "let's see if you know Marvel Cinematic Universe");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


