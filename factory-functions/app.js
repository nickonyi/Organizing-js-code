function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}

const user1 = createUser("dan");
console.log(user1.discordName);

const obj = { a: 1, b: 2 };
const { a, b } = objg;
console.log([a, b]);
