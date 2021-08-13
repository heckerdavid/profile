'use strict';

// greet the user on page access
let userName = prompt("Hi! Welcome to my Code 201 week one project. What's your name??")
alert("Hello there " + userName + ", checkout the bottom of my page for questions! correct answers will increase your score!")

// array of yes/no questions
let questionList = [
'Do you think my favorite color is pink? (yes/no)', 
'Do you think I am scared of heights? (yes/no)', 
'Do you think I enjoy rock climbing? (yes/no)', 
'Do you think I like JavaScript more than CSS? (yes/no)', 
'Do you think I like yes or no questions? (yes/no)'
]

// array of acceptable answer choices
let answerList = ['yes', 'y', 'no', 'n']

// array of feedback based on user choice, indexed with invalid input then by question associated, valid inputs are in [yes, no] response order
let feedBack = [
  // invalid input feedback
  'I only speak Yess and Nos so...lets just move on.', 
  ['Pink is cool, but I really like purple!', 'Good guess! My favorite color is actually purple. Score +1'],
  ['Correct! I am terrified of heights. Score +1', 'I wish. I am terrified of heights',], 
  ['Truth! Rock climbing is an awesome challenge and fantastic exercise. Score +1','Despite my fear of heights, I do infact love rock climbing!'], 
  ['Heck yes I do! I appreciate the logical thought required for JS. Score +1','I have no style, so CSS is not for me.'], 
  ['Nah, theyre too absolute.', 'yeah, theyre not great for getting to know someone. Score +1',]
]

// array for calling the incrementScore function
// TODO>>>>>> merge this with answerList 
let flagList = [
  ['no', 'n'], 
  ['yes', 'y'], 
  ['yes', 'y'], 
  ['yes', 'y'], 
  ['no', 'n']
]

//uses questionList, answerList, feedBack, and flagList to prompt questions, accept answers, give feedback based on the answer, and icrement score if the answer is correct
function questionLoop(n=undefined) {
  // allow for calling of a single question by passing the index position of the question
  if (n !== undefined){
    let ques = prompt(questionList[n])
    if (ques == answerList[1] || ques == answerList[0]) {
      alert(feedBack[n+1][0]);
    } else if (ques == answerList[2] || ques == answerList[3]) {
      alert(feedBack[n+1][1])
    } else {
      alert(feedBack[0])
    }
    if (flagList[n][0] == ques || flagList[n][1] == ques) {
      incrementScore();
    }
  } else {
    // loop thru all questions if no index is passed to func call
  for (let i=0; i < questionList.length; i++) {
    let ques = prompt(questionList[i])
    if (ques == answerList[1] || ques == answerList[0]) {
      alert(feedBack[i+1][0]);
    } else if (ques == answerList[2] || ques == answerList[3]) {
      alert(feedBack[i+1][1])
    } else {
      alert(feedBack[0])
    }
    // use flag array and user input to increment score
    if (flagList[i][0] == ques || flagList[i][1] == ques) {
      incrementScore();
    }
  }
}
}

// number guessing game

function randomNumber(){
  let userGuess = parseInt(prompt('Pick a number between 1 & 10'));
  let correctNumber = Math.floor(Math.random() * 10);
  let attempts = 0;
  while ((userGuess !== correctNumber) && (attempts < 4)) {
    let remainingTrys = 4 - attempts
    if (userGuess > correctNumber) {
      alert('Too High! Try again.');
      userGuess = prompt('pick a number between 1 & 10 you have ' + remainingTrys + ' tries left.');
      attempts++;
    } else if (userGuess < correctNumber) {
      alert('Too low! Try again.');
      userGuess = prompt('pick a number between 1 & 10 ' + remainingTrys + ' tries left.');
      attempts++;
    } else {
      alert('Dang! Nice Guess! The correct answer WAS ' + correctNumber + '!!')
      incrementScore();
      break;
    }
  }
  alert('Nice guesses ' + userName + "! The correct answer was " + correctNumber);
  }


// guess from an array game

function filmDirectors(){
  let directors = ['quentin tarantino', 'ridley scott', 'martin scorsese', 'david fincher', 'clint eastwood', 'steven spielberg', 'george lucas', 'alfred hitchcock', 'christopher nolan', 'guy ritchie']
  let directorGuess = prompt('Who do you think is one of my favorite movie directors?')
  let flag = true
  let arrayGuess = 0
  while (flag && arrayGuess < 6) {
    console.log('started while loop')
    for (let i = 0; i < directors.length; i++) {
      if (directors[i] == directorGuess.toLowerCase()) {
        alert('FANTASTIC Guess!! I love ' + directorGuess)
        incrementScore();
        flag = false
      }
    }
    if (flag) {
      arrayGuess++;
      alert('Nope! I am not really into ' + directorGuess + '. Try again! You have ' + (6 - arrayGuess) + ' guesses left')
      directorGuess = prompt('Who do you think is one of my favorite movie directors?')
    }
  }
  alert('you could have guessed ' + directors + ' and been correct!')
}


// alert("Thank you for making it to the end! You got " + incrementScore() "/7 questions right! Have a nice day " + userName + "!")

function incrementScore() {
  let element = document.getElementById('score');
  let value = element.innerHTML;
  let num = parseInt(value);

  num += 1;

  console.log(num);
  document.getElementById('score').innerHTML = num;
}