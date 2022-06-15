import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const correct = 'Correct!';

const rule = (getRegulation, getResult) => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(getRegulation);
  let countOfAttempts = 3;
  while (countOfAttempts > 0) {
    const [question, correctAnswer] = getResult();
    console.log(`Question: ${question}`);
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

export default rule;
