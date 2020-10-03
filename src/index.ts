// const express = require("express");
import express from "express";
import { timeStamp } from "console";
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

// function eatSnack(snack: Snack) {
//   console.log(
//     `Chomp chomp, ${snack.name} ${snack.quantity > 1 ? "are" : "is"}
//     ${snack.tasty ? "tasty!" : "not so great.."}`
//   );
// }

// eatSnack(chips);
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

// String Literal Types

interface lunch {
  food: "tacos" | "hamburger" | "salad";
}
function eatLunch(lunch: lunch) {
  return `Yum, ${lunch}`;
}

// eatLunch({food: "quesadilla"});
eatLunch({ food: "tacos" });

// Numeric Literal Types

function lunchTime(): 11 | 12 | 13 | 14 {
  return (Math.floor(Math.random() * (14 - 11) + 11) + 1) as 11 | 12 | 13 | 14;
}

// Boolean Literal Types

interface Eaten {
  isHungry: false;
  ate: string;
}

interface HaveNotEaten {
  isHungry: true;
  ate: null;
}

type HaveOrHaveNotEaten = Eaten | HaveNotEaten;

// Literal Narrowing

let hamburger = "Hamburger with tomato jam";
const tacos = "vegan tacos";

function snackTime(time: number | string): string {
  return `let's eat at ${time}`;
}

snackTime(11);
snackTime("11");

type WaitingForSnack = {
  state: "hungry";
};

type AteSnacks = {
  state: "not hungry";
  snackStock: "full" | "low" | "medium";
};

type OutOfSnacks = {
  state: "hungry" | "not hungry";
  snackStock: "out";
  purchase: String[];
};

type GoodSnackState = AteSnacks & OutOfSnacks;

type BadSnackState = WaitingForSnack & OutOfSnacks;

//Enums
//Computed Numeric Enums
// enum Snacks {
//   Popcorn = cupPopcornCalories(),
//   CornNuts = 124,
//   Chips = Popcorn * 2,
//   PotatoeChips = 152,
// }

// Snacks.Popcorn;
// //=> 5

// Snacks.Chips;
// //=> 7

// Numeric Enums
enum Snacks {
  Popcorn = 109,
  CornNuts = 124,
  Chips = 218,
  PotatoeChips = 152,
}

Snacks.Popcorn;
//=> 109

//Computed Numeric Enums
// enum Snacks {
//   Popcorn = cupPopcornCalories(),
//   CornNuts = 124,
//   Chips = Popcorn * 2,
//   PotatoeChips = 152,
// }

function cupPopcornCalories(): number {
  return 106;
}

// String Enums
// enum Snacks {
//   Popcorn = "POPCORN",
//   CornNuts = "CORN NUTS",
//   Chips = "CHIPS",
//   PotatoeChips = "POTATOE CHIPS",
// }

Snacks.Popcorn;
//=> POPCORN

Snacks["Popcorn"];
//=> POPCORN

// Heterogeneous Enums
enum HungerState {
  VeryHungry = 10,
  Hungry = 5,
  KindOfHungry = 2,
  NotHungry = "NO",
}

//Generics

function whatAmI<T>(thing: T, amount: number): string {
  return `${amount.toString()} ${thing}s`;
}

whatAmI(1, 5)
// => "5 1s"
whatAmI("string", 20)
// => "20 strings"





function thingLength<T>(things: T[]): void {
  console.log(things.length)
}

interface SnackTime<T, S> {
  timeOfSnack: T,
  snack: S
}

function ate<T, S>(time: T, snack: S): SnackTime<T, S>{
  let snackTime: SnackTime<T, S> = {
    timeOfSnack: time,
    snack: snack,
  };
  return snackTime
}

