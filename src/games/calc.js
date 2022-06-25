import rule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomOperator = (array) => array[Math.floor(Math.random() * array.length)];
const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unnavailable operator - ${operator}`);
  }
};

const calcGame = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 50);
  const operator = randomOperator(operators);
  const calcQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const correctResult = String(calculate(firstNumber, secondNumber, operator));
  return [calcQuestion, correctResult];
};

const startGame = () => {
  rule(description, calcGame);
};

export default startGame;
