import readlinesync from 'readline-sync';

const userName = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlinesync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};
export default userName;