import rule from '../index.js';
import getRandomNumber from '../utils.js';

const regulation = 'What number is missing in the progression?';
const createProgression = (size, step, begin) => {
  let progression = [begin];
  let newElement;
  while (progression.length < size) {
    newElement = progression[progression.length - 1] + step;
    progression = [...progression, newElement];
  }
  return progression;
};
const generateGame = () => {
  const size = 10;
  const step = getRandomNumber(1, 10);
  const firstNumber = getRandomNumber(0, 10);
  const arithmeticProgression = createProgression(size, step, firstNumber);
  const missingElement = getRandomNumber(0, arithmeticProgression.length - 1);
  const correctResult = String(arithmeticProgression[missingElement]);
  arithmeticProgression[missingElement] = '..';
  const progressionQuestion = `${arithmeticProgression.join(' ')}`;
  return [progressionQuestion, correctResult];
};

const startGame = () => {
  rule(regulation, generateGame);
};

export default startGame;
