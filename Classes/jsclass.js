class Player {
  static description = "Player in our game";
  static randomPlayer() {
    return new Player("Britney", "Spears");
  }
  #score = 0;
  numLives = 10;
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  constructor(first, last) {
    this.first = first;
    this.last = last;
    console.log(`Hello ${last}-${first}`);
    this.#secret();
  }
  taunt() {
    console.log("HHMMMMM");
  }
  looseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log("This is secret");
  }

  get fullName() {
    return `${this.first}- ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  set score(score) {
    this.#score = score;
  }

  get score() {
    return this.#score;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}
let admin = new AdminPlayer("Bill", "Gate", ["delete", "reserve world"]);
console.log(admin);
let player1 = new Player("Doe", "John");
// console.log(player1);
// player1.looseLife();
// console.log(player1);
// console.log(player1.getScore());
console.log(player1.fullName);
// player1.score = 100;
// console.log(player1.score);
player1.fullName = "Adam John";
// console.log(player1.fullName);
console.log(Player.description);
console.log(Player.randomPlayer());

// player1.#secret();
