import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const questionGame = () => {
  console.log('What is the result of the expression?');
};
const min = 1;
const max = 100;
const operators = ['+', '-', '*'];
const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`There is no such operator like '${operation}'!`);
  }
};
const startRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const randomOperationSign = operators[getRandomNumber(0, operators.length - 1)];
  const question = `Question: ${number1} ${randomOperationSign} ${number2}`;
  const correctAnswer = calculate(number1, number2, randomOperationSign).toString();
  return [question, correctAnswer];
};
const runCalcGame = () => {
  startGame(questionGame, startRound);
};
export default runCalcGame;
