#!/usr/bin/env node
import readlinesync from 'readline-sync';

// eslint-disable-next-line no-multi-assign, no-undef
const getRandomNumber = () => Math.round(Math.random() * 100);
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
// eslint-disable-next-line consistent-return
function startGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}
startGame();
