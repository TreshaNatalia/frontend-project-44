function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}
export default getRandomNumber;
