import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

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
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGCD(randomNumber1, randomNumber2).toString();
  return [question, correctAnswer];
};
const runGcdGame = () => {
  startGame(questionGame, startRound);
};
export default runGcdGame;
