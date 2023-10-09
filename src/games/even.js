import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
function startRound() {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}
const runEvenGame = () => {
  startGame(questionGame, startRound);
};
export default runEvenGame;
