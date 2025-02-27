const numbers = [1, 2, 4, 5, 20000];

//? solution 1
function findLargestNumber(numbers) {
  let largestNumber = numbers[0];

  numbers.forEach((element) => {
    if (element > largestNumber) {
      largestNumber = element;
      console.log("current largest number", element);
    }
  });
  return largestNumber;
}

console.log(findLargestNumber(numbers));

//? solution 2

const largestNum = Math.max(...numbers);
console.log("Largest number is ", largestNum);
