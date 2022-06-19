import rule from '../index.js';
import getRandomNumber from '../utils.js';

const regulation = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const even = () => {
  const randomNumber = getRandomNumber(0, 1000);
  const evenQuestion = String(randomNumber);
  const evenResult = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return [evenQuestion, evenResult];
};

const startGame = () => {
  rule(regulation, even);
};

export default startGame;
