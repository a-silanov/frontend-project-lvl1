import rule from '../index.js';
import getRandomNumber from '../utils.js';

const regulation = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  } return getGcd(number2, number1 % number2);
};

const getGreatestCommonDivisor = () => {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const divisorQuestion = `${firstNumber} ${secondNumber}`;
  const correctResult = String(getGcd(firstNumber, secondNumber));
  return [divisorQuestion, correctResult];
};

const startGame = () => {
  rule(regulation, getGreatestCommonDivisor);
};

export default startGame;
