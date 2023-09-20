import readlinesync from 'readline-sync';

function startGame(questionGame, startRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  questionGame();
  const namberOfRound = 3;
  for (let i = 0; i < namberOfRound; i += 1) {
    const [question, correctAnswer] = startRound();
    console.log(question);
    const answer = readlinesync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(.  Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
}
export default startGame;
