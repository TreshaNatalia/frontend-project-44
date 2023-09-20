import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const questionGame = () => {
  console.log('What number is missing in the progression?');
};
const generateProgression = (firstNumber, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + (step * i));
  }
  return progression;
};
function startRound() {
  const firstNumber = getRandomNumber(1, 9);
  const step = getRandomNumber(2, 9);
  const progressionLength = getRandomNumber(5, 10);
  const index = getRandomNumber(0, progressionLength - 1);
  const progression = generateProgression(firstNumber, step, progressionLength);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
}
const runProgressionGame = () => {
  startGame(questionGame, startRound);
};
export default runProgressionGame;
