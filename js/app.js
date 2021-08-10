'use strict'

let userName = prompt("Hi! Welcome to my Code 201 week one project. What's your name??")
alert("Hello there " + userName + ", lets get started with some more pop-up questions!")


let likeColor = prompt("Do you think my favorite color is pink? (yes/no)")
if (likeColor.toLowerCase() == "yes" || likeColor.toLowerCase() == "y") {
  alert("Pink is cool, but I really like purple!")
} else if (likeColor.toLowerCase() == "no" || likeColor.toLowerCase() == "n") {
  alert("Good guess! My favorite color is actually purple")
} else {
  alert("I only speak Yes's and No's so...let's just move on.")
}
console.log(likeColor)

let likeHeights = prompt("Do you think I am scared of heights? (yes/no)")
if (likeHeights.toLowerCase() == "yes" || likeHeights.toLowerCase() == "y") {
  alert("Correct! I am terrified of heights.")
} else if (likeHeights.toLowerCase() == "no" || likeHeights.toLowerCase() == "n") {
  alert("I wish. I am terrified of heights")
} else {
  alert("I only speak Yes's and No's so...let's just move on.")
}
console.log(likeHeights)

let likeCLimbing = prompt("Do you think I enjoy rock climbing? (yes/no)")
if (likeCLimbing.toLowerCase() == "yes" || likeCLimbing.toLowerCase() == "y") {
  alert("Truth! Rock climbing is an awesome challenge and fantastic exercise")
} else if (likeCLimbing.toLowerCase() == "no" || likeCLimbing.toLowerCase() == "n") {
  alert("Despite my fear of heights, I do infact love rock climbing!")
} else {
  alert("I only speak Yes's and No's so...let's just move on.")
}
console.log(likeCLimbing)

let likeCode = prompt("Do you think I like JavaScript more than CSS? (yes/no)")
if (likeCode.toLowerCase() == "yes" || likeCode.toLowerCase() == "y") {
  alert("Heck yes I do! I appreciate the logical thought required for JS")
} else if (likeCode.toLowerCase() == "no" || likeCode.toLowerCase() == "n") {
  alert("I have no style, so CSS is not for me.")
} else {
  alert("I only speak Yes's and No's so...let's just move on.")
}
console.log(likeCode)

let likeYesNo = prompt("Do you think I like yes or no questions? (yes/no)")
if (likeYesNo.toLowerCase() == "yes" || likeYesNo.toLowerCase() == "y") {
  alert("nah, they're too absolute.")
} else if (likeYesNo.toLowerCase() == "no" || likeYesNo.toLowerCase() == "n") {
  alert("yeah, they're not great for getting to know someone.")
} else {
  alert("I only speak Yes's and No's so...let's just move on.")
}
console.log(likeYesNo)

alert("Thank you for making it to the end! Have a nice day " + userName + "!")