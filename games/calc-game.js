import readlinesync from 'readline-sync';
// eslint-disable-next-line import/extensions
import startGame from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const questionGame = () => {
  console.log('What is the result of the expression?');
};
const min = 1;
const max = 100;
const operationSigns = ['+', '-', '*'];
// eslint-disable-next-line consistent-return
const operations = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
};
const startRound = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  const randomOperationSign = operationSigns[getRandomNumber(0, operationSigns.length - 1)];
  console.log(`Question: ${randomNumber1} ${randomOperationSign} ${randomNumber2}`);
  const correctAnswer = operations(randomNumber1, randomNumber2, randomOperationSign);
  const answer = readlinesync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(.  Correct answer was ${correctAnswer}.`);
  return false;
};
const calcGame = () => {
  startGame(questionGame, startRound);
};
export default calcGame;
