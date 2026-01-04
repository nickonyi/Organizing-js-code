function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "x");
const player2 = new Player("Jane", "o");
console.log(player1.sayName());
console.log(player2.sayName());

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

const book1 = new Book("The 7 dwarfs", "JK rollins", 296, "not read");
console.log(book1.info());

console.log(Object.getPrototypeOf(player1));
console.log(Player.prototype);
