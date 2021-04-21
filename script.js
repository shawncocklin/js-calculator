const rs = require('readline-sync');

let selectedOperation = rs.question('What math operation would you like to perform? Please choose from /, *, +, or -: ', {limit: ['/', '*', '+', '-'], limitMessage: 'Sorry, please input a valid math operation, like /, *, +, or -: '});

console.log(`${selectedOperation} it is then!`);

let firstNumber = rs.questionInt('Please type in the first number: ');

let secondNumber = rs.questionInt('Please type in the second number: ');

let result;
if (selectedOperation === '*') {
  result = firstNumber * secondNumber;
}
if (selectedOperation === '/') {
  result = firstNumber / secondNumber;
}
if (selectedOperation === '+') {
  result = firstNumber + secondNumber;
}
if (selectedOperation === '-') {
  result = firstNumber - secondNumber;
}

console.log(`The result is ${result}`);

