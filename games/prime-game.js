import readlinesync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

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
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const answer = readlinesync.question('Your answer: ');
  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(.  Correct answer was '${correctAnswer}'.`);
  return false;
}
const primeGame = () => {
  startGame(questionGame, startRound);
};
export default primeGame;
