import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description= 'Find the greatest common divisor of given numbers.';
const getGCD = (number1, number2) => {
  let t = 0;
  let a = number1;
  let b = number2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return t;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();
  return [question, answer];
};
const runGcdGame = () => {
  startGame(description, generateRound);
};
export default runGcdGame;
