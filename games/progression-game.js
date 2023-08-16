import readlinesync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const questionGame = () => {
  console.log('What number is missing in the progression?');
};
const min = 1;
const max = 9;
const generateProgression = (firstNumber, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + (step * i));
  }
  return progression;
};
function startRound() {
  const firstNumber = getRandomNumber(min, max);
  const step = getRandomNumber(2, 9);
  const progressionLength = getRandomNumber(5, 10);
  const index = getRandomNumber(0, progressionLength - 1);
  const progression = generateProgression(firstNumber, step, progressionLength);
  const correctAnswer = progression[index];
  progression[index] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlinesync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(.  Correct answer was ${correctAnswer}.`);
  return false;
}
const progressionGame = () => {
  startGame(questionGame, startRound);
};
export default progressionGame;
