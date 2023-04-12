// Chapter 6 Conditionals & Loops

//  Chapter Outine
//  > Embedding Javascript in HTML (Simple prerequisite notes are ommited)
//  > Conditionals
//      > if Statements
//      > if...else tatements
//      > Chaining if...else Statements
//  > Loops
//      > while Loops
//      > for Loops

//=========================================================================================
//INTRO

// A conditional says if true do this otherwise do that.
// A loop says as long as something stays true keep doing this.
// They are powerful concepts that are key to any sophisticated program.
// Thy are called CONTROL STRUCTURES because they allow you to control which part of your 
// code is executed when & how often based on certain conditions you define

//=========================================================================================

// Conditionals
// - two forms of conditional statements in JS
// - if statements ( eg. if you've been good, you get a treat.) 
// - if...else statements ( eg. if you've been good, you get a treat; else you get grounded)

//-----------------------------------------------------------------------------------------

// if Statements
// the if statement is the simplest of JS  control structures it is used to run code only if
// a condition is true.

var name = "Nicholas";
console.log("Hello " + name);
if (name.length > 7) {
    console.log("Wow, you have a REALLY long name!");
}
// console: Hello Nicholas
//          Wow, you have a REALLY long name!

//Syntax:       if (condition) {
//          console.log("Do Something");
//      }
// An if statement has two main parts: The condition and the body. The CONDITION should be a 
// Boolean value. The BODY is one or more lines of JS code which are executed if the 
// condition is true. 

var name = "Nick";
console.log("Hello " + name);
if (name.length > 7) {
    console.log("Wow, you have a REALLY long name!");
}
// console: Hello Nick

// The body of an if statement is executed only if the condition is true. When the 
// condition is false, the interpreter simply skips over the if statement and moves on 
// to the next line.

//-----------------------------------------------------------------------------------------

// if...else Statements
// if you want an additional outcome you need to use an if...else statement.

var name = "Nick";
console.log("Hello " + name);
if (name.length > 7) {
    console.log("Wow, you have a REALLY long name!");
} else {
    console.log("Your name isn't very long.");
}
// console: Hello Nick
//          Your name isn't very long.

//Syntax:       if (condition) {
//          console.log("Do something");
//      }   else {
//          console.log("Do something else");
//      }
// if..else statements look like if statements but with two bodies. The keyword ELSE is
// placed between the two bodies. the first body is run if the if condition is true otherwise
// the second body is run.

//-----------------------------------------------------------------------------------------

// Chaining if...else statements
//  used when we nned to check a sequence of conditions & do something when one of them is
// true

var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChicken) {
    console.log("Great I'm having the lemon chicken");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef");
} else if (sweetAndSourPork) {
    console.log("Ok I'll have the pork");
} else {
    console.log("Well I guess I'll have the rice then");
}
// console: I'm having the beef

// //Syntax:           if (condition1) {
//             console.log("Do this if condition 1 is true");
//         } else if (condition2) {
//             console.log("Do this if condition 2 is true");
//         } else if (condition3) {
//             console.log("Do this if condition 3 is true");
//         } else {
//             console.log("Do this otherwise");
//         }

// start with a normal if statement  and sfter closing the body enter the keywords ELSE IF
// followed by another condition and body. Keep doing this until you run out of conditions.
// Then add a final ELSE section that will run if none of the conditions are true.

// You can read this as follows:
// 1. If the first condition is true, execute the first body.
// 2. Otherwise, if the second condition is true, execute the
// second body.
// 3. Otherwise, if the third condition is true, execute the third body.
// 4. Otherwise, execute the else body.

//NOTE:
// you don’t necessarily have to
// include the final else. If you don’t, though, and none of the conditions
// is true, then nothing inside the if...else chain will be executed.

var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Great I'm having the lemon chicken");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef");
} else if (sweetAndSourPork) {
    console.log("Ok I'll have the pork");
}

// console: 
// all conditions were false & final else statement wasnt included so nothing was printed out.

//-----------------------------------------------------------------------------------------

// Try it out #1

// var name = "Joe";
// var myName = "Adrian";

// if (name === myName) {
//     console.log("Hello me!");
// } else {
//     console.log("Hello Stranger!");
// }

// Try it out #2

// var name = prompt("Please enter your name...");
// var dadsName = "Aaron";
// var momsName = "Rani";

// if (name === dadsName) {
//     alert("Hi Dad");
// } else if (name === momsName) {
//     alert("Hi Mom");
// } else {
//     alert("Hi Stranger");
// }

//=========================================================================================

// Loops
// Loops allow you to run piece of code multiple times, depending on whether a condition
// remains true. eg. while theres food on your plate you should keep eating or
// while you have dirt on your shirt you should keep washing.

//While Loops
// - simpilest type of loop
// - repeatedly executes its body until a particular condition stops being true
// - a while loop says keep doing this while this condition is true, Stop when this condition
//   becomes false.

// //Syntax:           while (condition) {
//                 console.log("Do Something");
//                 i++;
//             }

// Like an if statement, the body of a while loop is executed if the
// condition is true. Unlike an if statement, after the body is executed,
// the condition is checked again, and if it’s still true, the body runs
// again. This cycle goes on until the condition is false.

var sheepCounted = 0; // create and set variable to 0
while (sheepCounted < 10) { // check condition sheepCounted < 10 if true:
    console.log("I have counted " + sheepCounted + " sheep!");  // run body
    sheepCounted++; // increment variable and repeat cycle until sheepCounted !< 10 then:
}
console.log("Zzzzzzzzzzz");

//-----------------------------------------------------------------------------------------

// Preventing infinite Loops
// Keep this in mind when you’re using loops: if the condition you set never becomes false,
// your loop will loop forever (or at least until you quit your browser).

// eg. if you left out the line: sheepCounted++ then theres nothing to stop loop the program
// will go on forever.

//-----------------------------------------------------------------------------------------

// For Loops

// for loops make it easier to write loops that create a variable, loop until a condition 
// is true , and update the variable at the end of each turn around the loop.
// When setting up a for loop:
// 1. you create a variable,
// 2. specify the condition,
// 3. & say how the variable should change after each cycle.
// all before you reach the body of the loop.

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz")

//Syntax:           for (setup; condition; increment) {
//                console.log("Do something");
//            }

// 1. The setup is run before the loop starts. It is generally used to create a variable
//    to track the number of times the loop has run. 
// 2. The condition  is checked before each run of the loop body. If the condition is true,
//    the body is executed if its false the loop stops.
// 3. The increment is run after every execution of the loop body. It is generally used to
//    update the looping variable.

// for loops are often used to do something a set number of times. For example, this program
// will say hello! 3 times.

var timesTosayHello = 3;
    for (var i = 0; i < timesTosayHello; i++) {
        console.log("Hello!");
    }


// If we were the JS interpreter running this code, we would first create a variable
// called timesToSayHello and set it to 3.
// When we reach the for loop, we run the setup, which creates a variable i & sets it to 0
// Next we check the condition. Because i = 0 & timesToSayHello is 3, the condition is true,
// so we enter the loop body which simply outputs the string "Hello".
// We then run the increment which increases i to 1.
// Now we check the condition again. Its still true, so we run the body & increment again.
// This happens repeatedly until i = 3. At this point, the condition is false so we 
// exit the loop.

//-----------------------------------------------------------------------------------------
// Using for loops with arrays & strings

var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".");
}

// console:
// This zoo contains a Lion.
// This zoo contains a Flamingo.
// This zoo contains a Polar Bear.
// This zoo contains a Boa Constrictor.


// This loop  i starts at 0 and goes up to one less than animals.length which is 3. 
// 0,1,2,3 are the indexes of animals in the array.
// so every time around the loop i is a different index and animals[i] is another animal
// from the animals array.
//When i is 0, animals[i] is "Lion". When i is 1, animals[i] is "Flamingo", and so on.

// Use a for loop to print out the characters in a name:

var name = "Nick";

for (i =0; i < name.length; i++) {
    console.log("My name contains the letter " + name[i] + ".");
}
// console:
// My name contains the letter N.
// My name contains the letter i.
// My name contains the letter c.
// My name contains the letter k.

//-----------------------------------------------------------------------------------------
// Other ways to use for loops.

for (var x = 2; x < 10000; x = x * 2) {
    console.log(x)
}

var x = 3;

while (x < 10000) {
    console.log(x);
    x = x * 2;
}

// Summary:
// Conditionals are used to run code only when a certain condition
// is true. Loops are used to run code multiple times and to keep
// running that code as long as a certain condition is true. You can
// use conditionals to make sure that the right code is run at the
// right time, and you can use loops to keep your program running
// as long as necessary.

//=========================================================================================

// Programming Challenges

//#1Awesome Animals

// var animals = ["Cat", "Fish", "Lemur", 
// "Komodo Dragon"];

// for ( var i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals [i];
// }

// console.log(animals)

//#2Random String Generator

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


//#3 h4ck3r sp34k

var input = prompt("Enter a short Phrase");
var output = "";


for (var i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += "4";
  } else if (input[i] === "e") {
    output += "3";
  } else if (input[i] === "i") {
    output += "1";
  } else if (input[i] === "o") {
    output += "0";
  } else {
    output += input[i];
  }
}

alert(output);
