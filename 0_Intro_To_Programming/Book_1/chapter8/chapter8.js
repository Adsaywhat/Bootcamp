//calling the function
// ourFirstFunction();
// sayHelloTo("Adrian");
// console.log(name);
// drawCats(100)
// printMultipleTimes(10, "^::^");
// alert(double(3))
// var answer = double(prompt("give me a number"));
// alert("Your answer is " + answer);

//shortened
//alert("Your answer is " + double(prompt("give me a number")));
//var answer = double(5) + double(6)
// answer = double(double(3));
// alert(answer);
// console.log(double(double(3)));
// var randomWords = ["Planet", "Worm", "Flower", "Computer"];
// alert(pickRandomWord(randomWords));
//random insult with function
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// var randomBodyPart = pickRandomWord(randomBodyParts);
// // Pick a random adjective from the randomAdjectives array:
// var randomAdjective = pickRandomWord(randomAdjectives);
// // Pick a random word from the randomWords array:
// var randomWord = pickRandomWord(randomWords);
// // Join all the random strings into a sentence:
// var randomString = "Your " + randomBodyPart + " is like a " + 
// randomAdjective + " " + randomWord + "!!!";
// alert(randomString);

// var userName = prompt("What is your name?")
// alert(fifthLetter(userName))

// var userScore = prompt ("What is your Score");

// alert ("You get a " + medalForScore(userScore) + " medal");
//============================================================
// add(12, 7);
// console.log(sum)

// multiply(60, 10);
// console.log(xAns);

// var ans2 = add(multiply(36325, 9824), 777);
// console.log(ans2);

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
//=============================================================
//oldway
//functions
// var ourFirstFunction = function () {
//     console.log("Hello World!");
// };


//new way
// function ourFirstFunction () {
//      console.log("Hello World!");
//  };

//  function sayHelloTo(name) {
//     console.log("Hello " + name + "!");
//  }

//   function drawCats (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
//  }

// function printMultipleTimes (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// };

// function double(number) {
//     return number * 2;
// };

// //hangman functions?
// function pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
// };

// //

// function fifthLetter(name) {
//     if (name.length < 5) {
//         return
//     }
//     return "The fifth letter of your name is " + name[4] + ".";
// }

// function medalForScore (score) {
//     if (score < 3) {
//         return "Bronze"
//     }

//     if (score < 7) {
//         return "Silver";
//         }

//         return "gold";
// };

// //Challenges pages 138-139

// //1. doing arithmetic with functions

// function add(num1, num2) {
//     return num1 + num2;

// };

// function multiply(num1, num2) {
//     return  num1 * num2; 
// };


// //2. Are these arrays the same

// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for (var i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false
//         }
//     } 
//     return true
// };

// 3. Hangman Using Functions

// Functions

var pickWord = function () {
    // Return a random word
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "hangman",
        "match",
        "another",
        "loop"
    ];
    return words[Math.floor(Math.random() * words.length)];
};
var setupAnswerArray = function (word) {
    // Return the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
        return answerArray;
    };

    var showPlayerProgress = function (answerArray) {
        // Use alert to show the player their progress
        alert(answerArray.join(" "));
    };
    var getGuess = function () {
        // Use prompt to get a guess
        return prompt("Guess a letter, or click Cancel to stop playing.");
    };
    var updateGameState = function (guess, word, answerArray) {
        // Update answerArray and return a number showing how many
        // times the guess appears in the word so remainingLetters
        // can be updated
        var appearances = 0;
        guess = guess.toLowerCase();
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                
                    answerArray[j] = guess;
                    appearances++;
                }

            }
            return appearances;
    };
    var showAnswerAndCongratulatePlayer = function (answerArray) {
        // Use alert to show the answer and congratulate the player
        showPlayerProgress(answerArray);
            alert("Good job! The answer was " + answerArray.join(""));
    };

    //Main Code==========================================================================================

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);