import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const questionGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const min = 1;
const max = 100;
function startRound() {
  const randomNumber = getRandomNumber(min, max);
  const question = `Question: ${randomNumber}`.toString();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
}
const runPrimeGame = () => {
  startGame(questionGame, startRound);
};
export default runPrimeGame;
