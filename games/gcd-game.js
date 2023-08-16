import readlinesync from 'readline-sync';
import startGame from '../src/index.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}
const questionGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
};
const min = 1;
const max = 100;
const getGCD = (num1, num2) => {
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return t;
};

const startRound = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const correctAnswer = getGCD(randomNumber1, randomNumber2);
  const answer = readlinesync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(.  Correct answer was ${correctAnswer}.`);
  return false;
};
const gcdGame = () => {
  startGame(questionGame, startRound);
};
export default gcdGame;
