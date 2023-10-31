import game from "./Game";
import gameControl from "./GameControl";

const newGame = new game(16);
const start = new gameControl(newGame.quantityCells);

// class game {
//   constructor(quantityCells) {
//     this.parentConteiner = document.querySelector(".hole-game")
//     this.quantityCells = quantityCells
//     this.rendering()
//   }

//   rendering() {
//     for (let i = 1; i <= this.quantityCells; i++) {
//       const div = document.createElement('div')
//       div.classList.add('hole')
//       div.id = `hole${i}`
//       this.parentConteiner.appendChild(div)
//     }
//   }
// }

// class gameControl {
//   constructor(quantityCells) {
//     this.allElementClassHole = [...document.querySelectorAll('.hole')]
//     this.lastNumber = undefined
//     this.quantityCells = quantityCells
//     this.gameStart()
//   }

//   randomChange() {
//     const randomElement = Math.floor(Math.random() * this.quantityCells)
//     if (this.lastNumber == randomElement) {
//       this.randomChange()
//       return
//     }
//     if (this.lastNumber === undefined) {
//       this.allElementClassHole[randomElement].classList.add('hole_has-mole')
//       this.lastNumber = randomElement

//     }
//     else {
//       this.allElementClassHole[this.lastNumber].classList.remove('hole_has-mole')
//       this.allElementClassHole[randomElement].classList.add('hole_has-mole')
//       this.lastNumber = randomElement
//       console.log(this.lastNumber)
//     }

//   }

//   gameStart() {
//     setInterval(() => {this.randomChange()}, 1000)
//   }
// }

// const aA = new game(16)

// const g = new gameControl(aA.quantityCells)

// const allElementClassHole = [...document.querySelectorAll('.hole')]
// let lastNumber = undefined

// function randomChange() {
//   const randomElement = Math.floor(Math.random() * 9)

//   if (lastNumber == randomElement) {
//     randomChange()
//     return
//   }
//   if (lastNumber === undefined) {
//     allElementClassHole[randomElement].classList.add('hole_has-mole')
//     lastNumber = randomElement

//   }
//   else {
//     allElementClassHole[lastNumber].classList.remove('hole_has-mole')
//     allElementClassHole[randomElement].classList.add('hole_has-mole')
//     lastNumber = randomElement
//     console.log(lastNumber)
//   }
// }
// setInterval(randomChange, 1000)
// console.log(`random: ${randomElement},
//             lastNumber: ${lastNumber},
//             `)
