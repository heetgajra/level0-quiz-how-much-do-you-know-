//  var readlineSync = require('readline-sync');
// var score = 0;
// var questionA = "am i vadapav " ;
// var answerQuestionA = "yes";
// var questionB = "whats yout fav color ";
// var answerQuestionB = "red";
// // input

// var userNameAge = readlineSync.question(questionA);
// // processing
// if (userNameAge === answerQuestionA){
//   console.log("you are right");
//   score = score + 1;
//   console.log("score is " + score)
// }else{
//   console.log("you are wrong");
//   score = score - 1
//   console.log("score is " + score)
// }
// // var Score = 1;
// var userFavColor = readlineSync.question(questionB)

// if (userFavColor === answerQuestionB){
//   console.log("you are right again");
//   score = score + 1;
//   console.log("your score is " + score)
// } else {
//   console.log("you are wrong");
//   score = score - 1
//   console.log("your score is = " + score)
// }


// // var readlineSync = require('readline-sync');
// //  var userName = readlineSync.question('May I have your name? ');
// // console.log('Hi ' + userName + '!');
 

// // output

function multiple(numberOne , numberTwo) {
  console.log("numberOne : ", numberOne , "numberTwo :", numberTwo)
  var multiplication = numberOne * numberTwo;
  return multiplication
  // console.log(sum)
}
var answer = multiple(7 , 10);
console.log("the answer of the multiplication of 7 & 10 is : " + answer) 

function add (numberOne , numberTwo) {
  console.log("numberOne : ", numberOne, "numberTwo : ", numberTwo)
  var addition = numberOne + numberTwo;
  return addition
}
var result = add (7, 10);
console.log("the additiom is : " + result )





















