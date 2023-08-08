import readlinesync from 'readline-sync';

// eslint-disable-next-line consistent-return
function startGame(questionGame, startRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  questionGame();
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export default startGame;
