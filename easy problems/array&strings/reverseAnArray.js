const string = "aeiou";

//? method 1
const reversedString = string.split("").reverse().join("");
console.log(reversedString);

//? method 2

const splitString = string.split("");
const revString = [];

for (let i = splitString.length - 1; i >= 0; i--) {
  revString.push(splitString[i]);
}

console.log("Reversed String is", revString.join(""));
