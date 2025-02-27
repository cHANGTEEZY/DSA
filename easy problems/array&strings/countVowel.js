// WAP to count vowel in a string

let vowel = "aeiouAEIOU";

let word = "aeiouAEI";

let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
  if (vowel.includes(word[i])) {
    vowelCount++;
  }
}
console.log(vowelCount);
