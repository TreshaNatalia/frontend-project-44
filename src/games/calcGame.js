import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const questionGame = () => {
  console.log('What is the result of the expression?');
};
const min = 1;
const max = 100;
const operationSigns = ['+', '-', '*'];
const operations = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`There is no such operator like '${operation}'!`);
  }
};
const startRound = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  const randomOperationSign = operationSigns[getRandomNumber(0, operationSigns.length - 1)];
  const question = `Question: ${randomNumber1} ${randomOperationSign} ${randomNumber2}`;
  const correctAnswer = operations(randomNumber1, randomNumber2, randomOperationSign).toString();
  return [question, correctAnswer];
};
const runCalcGame = () => {
  startGame(questionGame, startRound);
};
export default runCalcGame;
