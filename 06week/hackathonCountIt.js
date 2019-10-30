let sentence =
  "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
let justLetters = sentence.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

var results = {};
for (let i = 0; i < justLetters.length; i++) {
  let currentLetter = justLetters[i];
  let letterCount = results[currentLetter];
  if (letterCount >= 1) {
    results[currentLetter] = letterCount + 1;
  } else {
    results[currentLetter] = 1;
  }
}

console.log(results, justLetters);
