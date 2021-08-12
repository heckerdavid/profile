'use strict';


let userName = prompt("Hi! Welcome to my Code 201 week one project. What's your name??")
alert("Hello there " + userName + ", checkout the bottom of my page for questions! correct answers will increase your score!")

function favoriteColor(){
  let likeColor = prompt("Do you think my favorite color is pink? (yes/no)")
  if (likeColor.toLowerCase() == "yes" || likeColor.toLowerCase() == "y") {
    alert("Pink is cool, but I really like purple!")
  } else if (likeColor.toLowerCase() == "no" || likeColor.toLowerCase() == "n") {
    alert("Good guess! My favorite color is actually purple");
    incrementScore();
  } else {
    alert("I only speak Yes's and No's so...let's just move on.")
  }
  console.log(likeColor)
}


function fearOfHeights(){
  let likeHeights = prompt("Do you think I am scared of heights? (yes/no)")
  if (likeHeights.toLowerCase() == "yes" || likeHeights.toLowerCase() == "y") {
    alert("Correct! I am terrified of heights.")
    incrementScore();
  } else if (likeHeights.toLowerCase() == "no" || likeHeights.toLowerCase() == "n") {
    alert("I wish. I am terrified of heights")
  } else {
    alert("I only speak Yes's and No's so...let's just move on.")
  }
  console.log(likeHeights)
}


function rockClimbing(){
  let likeCLimbing = prompt("Do you think I enjoy rock climbing? (yes/no)")
  if (likeCLimbing.toLowerCase() == "yes" || likeCLimbing.toLowerCase() == "y") {
    alert("Truth! Rock climbing is an awesome challenge and fantastic exercise")
    incrementScore();
  } else if (likeCLimbing.toLowerCase() == "no" || likeCLimbing.toLowerCase() == "n") {
    alert("Despite my fear of heights, I do infact love rock climbing!")
  } else {
    alert("I only speak Yes's and No's so...let's just move on.")
  }
  console.log(likeCLimbing)
  }


function programmer(){
  let likeCode = prompt("Do you think I like JavaScript more than CSS? (yes/no)")
  if (likeCode.toLowerCase() == "yes" || likeCode.toLowerCase() == "y") {
    alert("Heck yes I do! I appreciate the logical thought required for JS")
    incrementScore();
  } else if (likeCode.toLowerCase() == "no" || likeCode.toLowerCase() == "n") {
    alert("I have no style, so CSS is not for me.")
  } else {
    alert("I only speak Yes's and No's so...let's just move on.")
  }
  console.log(likeCode)
}

function goNoGo(){
  let likeYesNo = prompt("Do you think I like yes or no questions? (yes/no)")
  if (likeYesNo.toLowerCase() == "yes" || likeYesNo.toLowerCase() == "y") {
    alert("nah, they're too absolute.")
  } else if (likeYesNo.toLowerCase() == "no" || likeYesNo.toLowerCase() == "n") {
    alert("yeah, they're not great for getting to know someone.")
    incrementScore();
  } else {
    alert("I only speak Yes's and No's so...let's just move on.")
  }
  console.log(likeYesNo)
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
  let directors = ['quinten tarantino', 'ridley scott', 'martin scorsese', 'david fincher', 'clint eastwood', 'steven spielberg', 'george lucas', 'alfred hitchcock', 'christopher nolan', 'guy ritchie']
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