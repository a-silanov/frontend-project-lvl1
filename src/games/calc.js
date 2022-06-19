import rule from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const randomOperator = (array) => array[Math.floor(Math.random() * array.length)];
const regulation = 'What is the result of the expression?';
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
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = randomOperator(operators);
  const calcQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const correctResult = String(calculate(firstNumber, secondNumber, operator));
  return [calcQuestion, correctResult];
};

const startGame = () => {
  rule(regulation, calcGame);
};

export default startGame;
