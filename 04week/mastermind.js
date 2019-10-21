"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  //creating variables that split up the passed in arguments
  var solutionArray = solution.split("");
  var guessArray = guess.split("");
  //creating variables that will record how many correct letter-locations and then correct letters were guessed
  let correctLetterLocations = 0;
  let correctLetters = 0;

  //the for loop for determining correct letter locations comparing your guess to the solution
  //console.log("my guess array", guessArray);
  //console.log("my solution array", solutionArray);
  for (let i = 0; i < solutionArray.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocations += 1; //this will increment each letter location comparing the guess to the solution
      solutionArray[i] = null;
    }
  }
  //the for loop iterating again over the solution array for the correct letters
  for (let j = 0; j < solutionArray.length; j++) {
    //using index.of to determine if item in current index in guess array appears in the solution array
    const targetIndex = solutionArray.indexOf(guessArray[j]);
    if (targetIndex > -1) {
      correctLetters++; //this will increment and record the correct letters in the array if greater than -1
      solutionArray[targetIndex] = null;
    }
  }
  return `${correctLetterLocations}-${correctLetters}`;
}

function mastermind(guess) {
  solution = "abcd"; // Comment this out to generate a random solution
  // your code here
  //Entering a guess for the correct solution and returning hints
  if (guess === solution) {
    console.log("You guessed it!");
    return "You guessed it!";
  } else {
    var hint = generateHint(guess);
    var hintGuess = guess + hint; //variable that combines the string of guess and hint
    board.push(hintGuess);
    console.log("Guess Again");
    return hint;
  }
}
function getPrompt() {
  rl.question("guess: ", guess => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}
