function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}`);
};
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype));
console.log(Person.prototype);

const player1 = new Player("steve", "x");
const player2 = new Player("Jane", "o");

player1.sayName();
player2.sayName();
