'use strict';


let userName = prompt("Hi! Welcome to my Code 201 week one project. What's your name??")
alert("Hello there " + userName + ", checkout the bottom of my page for questions! correct answers will increase your score!")

let questionList = ['Do you think my favorite color is pink? (yes/no)', 'Do you think I am scared of heights? (yes/no)', 'Do you think I enjoy rock climbing? (yes/no)', 'Do you think I like JavaScript more than CSS? (yes/no)', 'Do you think I like yes or no questions? (yes/no)']
let answerList = ['yes', 'y', 'no', 'n']
let feedBack = ['I only speak Yess and Nos so...lets just move on.', ['Pink is cool, but I really like purple!', 'Good guess! My favorite color is actually purple. Score +1'],['Correct! I am terrified of heights. Score +1', 'I wish. I am terrified of heights',], ['Truth! Rock climbing is an awesome challenge and fantastic exercise. Score +1','Despite my fear of heights, I do infact love rock climbing!'], ['Heck yes I do! I appreciate the logical thought required for JS. Score +1','I have no style, so CSS is not for me.'], [ 'nah, theyre too absolute.', 'yeah, theyre not great for getting to know someone. Score +1',]]
let flagList = [['no', 'n'], ['yes', 'y'], ['yes', 'y'], ['yes', 'y'], ['no', 'n']]

function questionLoop(n=undefined) {
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
  for (let i=0; i < questionList.length; i++) {
    let ques = prompt(questionList[i])
    if (ques == answerList[1] || ques == answerList[0]) {
      alert(feedBack[i+1][0]);
    } else if (ques == answerList[2] || ques == answerList[3]) {
      alert(feedBack[i+1][1])
    } else {
      alert(feedBack[0])
    }
    if (flagList[i][0] == ques || flagList[i][1] == ques) {
      incrementScore();
    }
  }
}
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