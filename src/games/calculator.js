import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};
const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, number2, randomOperator).toString();
  return [question, answer];
};
const runCalcGame = () => {
  startGame(description, generateRound);
};
export default runCalcGame;
