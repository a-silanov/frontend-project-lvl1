import rule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  const randomNumber = getRandomNumber(2, 100);
  const primeQustion = String(randomNumber);
  const correctResult = isPrime(randomNumber) ? 'yes' : 'no';
  return [primeQustion, correctResult];
};

const startGame = () => {
  rule(description, primeNumber);
};

export default startGame;
