// word same from front and back

const palindromChecker = (string) => {
  const content = string.toLowerCase().split("");
  let leftPointer = 0;
  let rightPointer = content.length - 1;

  while (leftPointer < rightPointer) {
    if (content[leftPointer] !== content[rightPointer]) {
      return "Not a palindrome";
    }
    leftPointer++;
    rightPointer--;
  }
  return "Palindrome";
};

const output = palindromChecker("racecar");
console.log(output);
