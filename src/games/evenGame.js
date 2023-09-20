import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

function questionGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
function startRound() {
  const number = getRandomNumber(1, 100);
  const isEven = number % 2 === 0;
  const question = `Question: ${number}`;
  const correctAnswer = (isEven) ? 'yes' : 'no';
  return [question, correctAnswer];
}
const runEvenGame = () => {
  startGame(questionGame, startRound);
};
export default runEvenGame;
