// var name = "Nick";
// console.log("Hello " + name);
// alert("Hello " + name )
// if (name.length > 7) {
//     console.log("Wow, you have a REALLY long name!");
// }else {
//     alert("Your name isnt very long")
// }

// Chaining if ...else statements

// var lemonChicken = false;
// var beefWithBlackBean = false;
// var sweetAndSourPork = false;

// if (lemonChicken) {
//     console.log("Great! I'm having lemon chicken");
// } else if (beefWithBlackBean) {
//     console.log("I'm having the beef");
// }else if (sweetAndSourPork) {
//     console.log("OK, I'll have the Pork");
// }else {
//     console.log("Well I guess I'll have the rice then");
// }

// try it out Page 96

// var myName = true;
// var dadsName = false;
// var momsName = false;
// var strangersName = false;

// if (myName = true) {
//     console.log("Hello me!");
// }else if (dadsName = true) {
//     console.log("Hi Dad");
// }else if (momsName = true) {
//     console.log("Hi Mom");
// }else {
//     console.log("Hello Stranger");
// }


// var name ="Rani"

// if (name === "Adrian") {
//      console.log("Hello me!");
//  }else if (name === "Aaron") {
//     console.log("Hi Dad");
// }else if (name === "Rani") {
//     console.log("Hi Mom");
// }else {
//     console.log("Hello Stranger");
// }

// var name = prompt ("What is your Name").toLowerCase();

// if (name === "adrian") {
//      alert("Hello me!");
//  }else if (name === "aaron") {
//     alert("Hi Dad");
// }else if (name === "rani") {
//     alert("Hi Mom");
// }else {
//     alert("Hello Stranger");
// }

// Sheep Counter while loop

// var sheepCounted = 0;

// while (sheepCounted < 10) {
//     alert("i have counted " + sheepCounted + " sheep");
//     sheepCounted++;
// }

// alert ("zzzzzzzz")

// Sheep Counter for loop

// for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     alert("I have counted " + sheepCounted + " sheep!");
// }
// alert ("zzzzzzzzz")

//for loop 3x
// var timesToSayHello = 3;
// for (var i = 0; i < timesToSayHello; i++) {
// alert("Hello!");
// }

//for loop array

// var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (var i = 0; i < animals.length; i++) {
// console.log("This zoo contains a " + animals[i] + ".");
// }

// for loop string

// var name = "Nick";
// for (var i = 0; i < name.length; i++) {
// console.log("My name contains the letter " + name[i] + ".");
// }

//Power of 2 for loop
// for (var x = 2; x < 10000; x = x * 2) {
//     console.log(x);
// }

// for loop countdown

// for (var x = 10;x > 0; x--) {
//     alert(x);
// }

// alert("HAPPY NEW YEAR");

// do power of 3 for loop try it out page 102

// for (var x = 3; x < 10000; x = x * 3) {
//     console.log(x);
// }

// do power of 3 while loop try it out page 102

// var x = 3;

// while (x < 10000) {
//     console.log(x);
//     x = x * 3;
// }




// do challenges page 103-104

// var animals = ["Cat", "Fish", "Lemur", 
// "Komodo Dragon"];

// for ( var i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals [i];
// }

// console.log(animals)

// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var  randomString = ""
// var i = 0

// while(i < 6) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }

// console.log(randomString)


// var input = "javascript is awesome";
// var output = "";

// for (var i = 0; i < input.length; i++ ) {
//     if (input[i] === "a") {
//         output += 4;
//     } else if (input[i] === "e") {
//         output += 3;
//     } else if (input[i] === "i") {
//         output += 1;
//     } else if (input[i] === "o") {
//         output += 0;
//     } else  {
//         output += input[i];
//     } 
// }

// console.log(output);






// for (setup; condition; increment) {
//     console.log("Do something");
//     }

// if (condition1) {
//     console.log("Do this if condition 1 is true");
//     } else if (condition2) {
//     console.log("Do this if condition 2 is true");
//     } else if (condition3) {
//     console.log("Do this if condition 3 is true");
//     } else {
//     console.log("Do this otherwise");
//     }

//Hangman Game

// var likesCats = confirm("Do you like cats?");
// if (likesCats) {
// console.log("You're a cool cat!");
// } else {
// console.log("Yeah, that's fine. You're still cool!");
// }

alert("Javascript is Awesome!");
