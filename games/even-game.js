import readlinesync from 'readline-sync';
// eslint-disable-next-line import/extensions
import startGame from '../src/index.js';

const getRandomNumber = () => Math.round(Math.random() * 100);
const questionGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
function startRound() {
  const randomNumber = getRandomNumber();
  const isEven = randomNumber % 2 === 0;
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = (isEven) ? 'yes' : 'no';
  const answer = readlinesync.question('Your answer: ');
  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(.  Correct answer was '${correctAnswer}'.`);
  return false;
}
const evenGame = () => {
  startGame(questionGame, startRound);
};
export default evenGame;
// eslint-disable-next-line consistent-return
