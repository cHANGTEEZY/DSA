//? Write a function that prints numbers from 1 to N, where N is given as input.
//? For numbers divisible by 3, print "Fizz" instead of the number.
//? For numbers divisible by 5, print "Buzz" instead of the number.
//? For numbers divisible by both 3 and 5, print "FizzBuzz".
//? Otherwise, print the number itself.

const fizzBuzzBazzChecker = (numbers) => {
  numbers.forEach((num) => {
    const output =
      (num % 3 === 0 ? "Fizz" : "") +
      (num % 5 === 0 ? "Buzz" : "") +
      (num % 7 === 0 ? "Bazz" : "");

    console.log(output || num);
  });
  return "Completed";
};

const numbers = [1, 3, 5, 7, 15, 21, 35, 105];
const output = fizzBuzzBazzChecker(numbers);
console.log(output);
