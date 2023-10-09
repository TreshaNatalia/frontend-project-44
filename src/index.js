import readlinesync from 'readline-sync';

function startGame(questionGame, generateRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${questionGame}`);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlinesync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(.  Correct answer was '${correctAnswer}'.`);
      return `Let's try again, ${name}!`;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
}
export default startGame;
