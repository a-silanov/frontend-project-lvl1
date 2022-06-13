import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const randomNumber = () => Math.floor(Math.random() * 100);
const correct = 'Correct!';
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

const startGame = () => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(regulation);
  let countOfAttempts = 3;
  while (countOfAttempts > 0) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const operator = randomOperator(operators);
    const calcQuestion = `${firstNumber} ${operator} ${secondNumber}`;
    console.log(calcQuestion);
    const correctAnswer = String(calculate(firstNumber, secondNumber, operator));
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

export default startGame;
