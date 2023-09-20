import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

function questionGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
const min = 1;
const max = 100;
function startRound() {
  const randomNumber = getRandomNumber(min, max);
  const isEven = randomNumber % 2 === 0;
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isEven) ? 'yes' : 'no';
  return [question, correctAnswer];
}
const runEvenGame = () => {
  startGame(questionGame, startRound);
};
export default runEvenGame;
