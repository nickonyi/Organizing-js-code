function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  return { name, discordName, getReputation, giveReputation };
}
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);
  const increaseLevel = () => level++;
  return { name, level, getReputation, giveReputation, increaseLevel };
}

const player1 = createPlayer("Josh", 2);
player1.giveReputation();
console.log(player1.getReputation());

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

console.log(calculator.mul(20, 6));
