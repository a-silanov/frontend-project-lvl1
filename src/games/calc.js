import rule from '../index.js';

const operators = ['+', '-', '*'];
const randomOperator = (array) => array[Math.floor(Math.random() * array.length)];
const regulation = 'What is the result of the expression?';
const randomNumber = () => Math.floor(Math.random() * 1000);
const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Hello';
  }
};

const calcGame = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operator = randomOperator(operators);
  const calcQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  console.log(calcQuestion);
  const correctResult = String(calculate(firstNumber, secondNumber, operator));
  return [calcQuestion, correctResult];
};

const startGame = () => {
  rule(regulation, calcGame);
};

export default startGame;
