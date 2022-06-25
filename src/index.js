import readlineSync from 'readline-sync';

const countOfAttempts = 3;

const rule = (description, getResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < countOfAttempts; i += 1) {
    const [question, correctAnswer] = getResult();
    console.log(`Question: ${question}`);
    const sayAnswer = readlineSync.question('Your answer: ');
    if (sayAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${sayAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default rule;
