const chalk = require('chalk');
const log = console.log;

var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Chirag",
    score: 1,
  },

  {
    name: "Pushpa",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "1. Who among the following is not regarded as one of the director of the movie? ",
  options:"A. Smita Singh\nB. Anurag Kashyap\nC.Vikramaditya Motwane\nD. Neeraj Ghaywan",
  answer: "Smita Singh"
}, {
  question: "2.Kabhi Kabhi Lagta Hai Apun Hi __________ Hai",
  options:"A. Insaan\nB. Devil\nC. Bhoot\nD. Bhagwan",
  answer: "Bhagwan"
},
{
  question: "3.When was the original release date of the Series? ",
  options:"A. Sept 6 2013\nB. June 7 2012\nC. July 6 2018\nD. July 7 2017",
  answer: "July 6 2018"
},
{
  question: "4.Who Killed Ganesh Gaitonde Mother?",
  options:"A. Isa Suleiman\nB. Ganesh Gaittonde\nC. Gaitonde First Father\nD. Bunty",
  answer: "Ganesh Gaitonde"
},
{
  question: "5. What Is The Profession Of Gaitonde First Father?",
  options:"A. Pandit\nB. Bouncer\nC. Terrorist\nD. Painter",
  answer: "Pandit"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName ,'\n', "let's see if you know");
  log(chalk.yellow.underline.bold("Sacred Games"));
}


// play function
function play(question,options,answer) {
    var userAnswer = readlineSync.question(chalk.yellowBright(question)+'\n'+chalk.cyanBright(options)+'\n'+"write answer-");
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("right!"));
    score = score + 1;
    
  } else {
    log(chalk.red("wrong!"));
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.options,currentQuestion.answer)
  }
}

function showScores() {
  console.log(chalk.red("YAY! You SCORED: ", score));

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

