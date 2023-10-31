export default class gameControl {
  constructor(quantityCells) {
    this.allElementClassHole = [...document.querySelectorAll(".hole")];
    this.lastNumber = undefined;
    this.quantityCells = quantityCells;
    this.gameStart();
  }

  randomChange() {
    const randomElement = Math.floor(Math.random() * this.quantityCells);
    if (this.lastNumber == randomElement) {
      this.randomChange();
      return;
    }
    if (this.lastNumber === undefined) {
      this.allElementClassHole[randomElement].classList.add("hole_has-mole");
      this.lastNumber = randomElement;
    } else {
      this.allElementClassHole[this.lastNumber].classList.remove(
        "hole_has-mole"
      );
      this.allElementClassHole[randomElement].classList.add("hole_has-mole");
      this.lastNumber = randomElement;
      console.log(this.lastNumber);
    }
  }

  gameStart() {
    setInterval(() => {
      this.randomChange();
    }, 1000);
  }
}
