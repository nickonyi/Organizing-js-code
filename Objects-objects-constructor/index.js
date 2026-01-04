const btn = document.querySelector(".btn");
const txt = document.querySelector(".text");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const player1 = new Player("Aaron", "x");
  const player3 = new Player("WanBisakaGodon", "o");
  const player4 = new Player("Harry", "The Lord Maguire");
  printName(player1);
  printName(playerTwo);
  printName(player3);
  player4.sayName();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet"
`;
  };
}

function printName(player) {
  const text = document.createElement("div");
  text.textContent = player.name;
  body.appendChild(text);
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = () => {
    txt.textContent = `${name},${marker}`;
  };
}

const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `The ${title} by ${author}, ${pages} pages, ${read}`;
  };
}

const book1 = new Books(
  "Osama bin Laden",
  "Walela Omwanga",
  345,
  "just read it!"
);

console.log(book1.info());

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Don't do this!
// Use Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.setPrototypeOf(Player.prototype, Person.prototype);

function Enemy(name) {
  this.name = name;
  this.marker = "^";
}

// Not again!
// Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
Object.setPrototypeOf(Enemy.prototype, Person.prototype);

Enemy.prototype.sayName = function () {
  console.log("HAHAHAHAHAHA");
};

const carl = new Player("carl", "X");
const dath = new Enemy("Darth", "^^&");
carl.sayName();
dath.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
