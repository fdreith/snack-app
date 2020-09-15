// const express = require("express");
import express from "express";
const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.get("/", function (req, res) {
  res.send("I love snacks!");
});

// start the server
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

// TYPESCRIPT TYPES:

// STRINGS
const potatoChips: string = "Potato Chips";
const dip: string = "Dip";
const foodILove = `
  I love ${potatoChips} and ${dip}!
`;

// BOOLEANS
let hungry: boolean = true;

// NUMBERS
// include floating point, hexidecimal, and decimal literals
// As of ECMAScript 2015 octal literals and biancy
let num: number = 8 + 0xf00d + 0b1010 + 0o744;

// ARRAYS
let favoriteSnacks: string[] = [
  "popcorn",
  "tacos",
  "gummy worms",
  "cheese puffs",
];
// let snacks: Array<string> = favoriteSnacks;

// TUPLES
let meal: [string, object] = ["chips and salsa", { tacos: 3 }];

// OBJECTS
// Anything that is non-primative. Not a number, string, boolean, symbol, null, or undefined.
const obj: object = new Map();
const hambuger: object = {
  bun: 2,
  patty: 1,
  lettuce: 1,
  tomato: 1,
  onion: 2,
  sauce: "the perfect amount",
};

//ENUMS
// enum Snack {
//   Chips,
//   Popcorn,
//   Gummies,
//   Apple,
// }

// let snack: Snack = Snack.Popcorn;

// ANY
let mySnack: any;
mySnack = "popcorn";
mySnack = 10;
mySnack = true;
mySnack = { tasty: true };

// VOID
let emptyStomachWarning: void = console.log("Change hungry status to true");

// NULL AND UNDEFINED
let missedLunch: null = null;
let exactTimeForSnack: undefined = undefined;

// as-syntax
let someFood: unknown = "hamburger";
let foodLength: number = (someFood as string).length;

// angle-bracket syntax
let someotherFood: unknown = "hamburger";
let otherFoodLength: number = (<string>someFood).length;

// let snacks: string[] = "potato chips";

let snacks: string[] = ["potato chips"];
interface Snack {
  name: string;
  quantity: number;
  tasty: boolean;
  flavor?: string;
}

let chips = { name: "potato chips", quantity: 10, tasty: true };

function eatSnack(snack: Snack) {
  console.log(
    `Chomp chomp, ${snack.name} ${snack.quantity > 1 ? "are" : "is"}
    ${snack.tasty ? "tasty!" : "not so great.."}`
  );
}

eatSnack(chips);
// => Chomp chomp, potato chips are tasty!

// Named function with Typescript
function eat(food: string, quantity: number) {
  for (let i = 0; i < quantity; i++) {
    console.log(`CHOMP! mmm, ${food}`);
  }
}

//Anonymous function with Typescript
let eatMore = function (food: string, quantity: number): void {
  for (let i = 0; i < quantity; i++) {
    console.log(`CHOMP! mmm, ${food}`);
  }
};

eat("potato chips", 5);

const doritos = { name: "doritos" };

let snackBreak = function (food = "hot dog", quantity: number): void {
  console.log(`Tasty, ${food}!`);
};

snackBreak("chips", 15);
