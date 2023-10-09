import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const questionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const operator = (number1, number2, operation) => {
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
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = operator(number1, number2, randomOperator).toString();
  return [question, correctAnswer];
};
const runCalcGame = () => {
  startGame(questionGame, startRound);
};
export default runCalcGame;
