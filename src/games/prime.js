import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
function startRound() {
  const number = getRandomNumber(1, 100);
  const question = `${number}`.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}
const runPrimeGame = () => {
  startGame(questionGame, startRound);
};
export default runPrimeGame;
