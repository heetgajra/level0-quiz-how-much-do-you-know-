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

// function multiple(numberOne , numberTwo) {
//   console.log("numberOne : ", numberOne , "numberTwo :", numberTwo)
//   var multiplication = numberOne * numberTwo;
//   return multiplication
//   // console.log(sum)
// }
// var answer = multiple(7 , 10);
// console.log("the answer of the multiplication of 7 & 10 is : " + answer) 

// function add (numberOne , numberTwo) {
//   console.log("numberOne : ", numberOne, "numberTwo : ", numberTwo)
//   var addition = numberOne + numberTwo;
//   return addition
// }
// var result = add (7, 10);
// console.log("the additiom is : " + result ) 

// console.log(add(5,10));
// console.log(multiple(1,4));


// var readlineSync = require("readline-sync");

// var score = 0;

// function game(question , answer){
//   var userAnswer = readlineSync.question(question);
  
//   if (userAnswer === answer) {
//     console.log("you are right ")
//     score = score + 1
//     console.log(score)
//   } else {
//     console.log("you are wrong ")
//     score = score - 1;
//     console.log(score)
  
//   }
// }
// game("where is my home " , "dombivali");
// game("whats my fav food " , "vadapav");
// console.log("your score is " , score)


// for (var i=22; i<32; i = i + 1)
//   console.log(i)


// var myList = ["vadapa" , "samosa ", "manchurian ", "flowers ", "computer"]
// console.log(myList[2])



// var lengthOfArray = myList.length
// console.log(lengthOfArray)

// console.log(myList[myList.length - 1])

// var meraKhata = ["1" , "124", "22", "34", "44"]
// console.log(meraKhata[1])

// var kitnaLamba = meraKhata.length
// console.log(kitnaLamba)

// console.log(meraKhata[meraKhata.length - 1])
// var meraSaman = ["kuch", "nhi", "dhunai", "ticket"]
// console.log(meraSaman[2])

// samanLambai = meraSaman.length
// console.log(samanLambai)

// console.log(meraSaman[meraSaman.length - 1

var superman = {
  stealth: "100",
  power: "10000",
  costume: "purple",
  
}

var batman = {
  stealth: "1000",
  power: "100",
  costume: "red",
  
}
// console.log(superman.stealth)
// console.log(batman.stealth)

// if (batman.strength > superman.strength){
//   console.log("batman wins ")
// }else{
//     console.log ("superman wins")
//   }
// var rakshak = [superman, batman]
// for(var i=0; i<rakshak.length; i++){
//   var selectedHero = rakshak[i];
//   console.log(selectedHero.stealth)
//   console.log(selectedHero.costume)
//   console.log(" -----------")
            
// }

// var superHeros =[superman, batman]
// for(var i=0; i<superHeros.length; i++){
//   var currentFav = superHeros[i]
// console.log(currentFav.costume)
// console.log(currentFav.power)
// console.log("-----------------")
// }
var mightyHeros= [superman, batman]
  for(var i=0; i<mightyHeros.length; i++){
  var newHeros = mightyHeros[i]
console.log(newHeros.costume)
  console.log(newHeros.stealth)
}