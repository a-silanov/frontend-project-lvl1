import readlineSync from 'readline-sync';

const regulation = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumber = () => Math.floor(Math.random() * 1000);
const correct = 'Correct!';

const isEvenNumber = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(regulation);
  let countOfAttempts = 3;
  while (countOfAttempts > 0) {
    const number = randomNumber();
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const sayAnswer = readlineSync.question('Your answer: ');
    if (sayAnswer === correctAnswer) {
      console.log(correct);
      countOfAttempts -= 1;
    } else {
      console.log(`'${sayAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default isEvenNumber;
