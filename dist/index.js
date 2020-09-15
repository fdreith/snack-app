"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000; // default port to listen
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.send("I love snacks!");
});
// start the server
app.listen(port, function () {
    console.log("server running at http://localhost:" + port);
});
// TYPESCRIPT TYPES:
// STRINGS
var potatoChips = "Potato Chips";
var dip = "Dip";
var foodILove = "\n  I love " + potatoChips + " and " + dip + "!\n";
// BOOLEANS
var hungry = true;
// NUMBERS
// include floating point, hexidecimal, and decimal literals
// As of ECMAScript 2015 octal literals and biancy
var num = 8 + 0xf00d + 10 + 484;
// ARRAYS
var favoriteSnacks = [
    "popcorn",
    "tacos",
    "gummy worms",
    "cheese puffs",
];
// let snacks: Array<string> = favoriteSnacks;
// TUPLES
var meal = ["chips and salsa", { tacos: 3 }];
// OBJECTS
// Anything that is non-primative. Not a number, string, boolean, symbol, null, or undefined.
var obj = new Map();
var hambuger = {
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
var mySnack;
mySnack = "popcorn";
mySnack = 10;
mySnack = true;
mySnack = { tasty: true };
// VOID
var emptyStomachWarning = console.log("Change hungry status to true");
// NULL AND UNDEFINED
var missedLunch = null;
var exactTimeForSnack = undefined;
// as-syntax
var someFood = "hamburger";
var foodLength = someFood.length;
// angle-bracket syntax
var someotherFood = "hamburger";
var otherFoodLength = someFood.length;
// let snacks: string[] = "potato chips";
var snacks = ["potato chips"];
var chips = { name: "potato chips", quantity: 10, tasty: true };
function eatSnack(snack) {
    console.log("Chomp chomp, " + snack.name + " " + (snack.quantity > 1 ? "are" : "is") + "\n    " + (snack.tasty ? "tasty!" : "not so great.."));
}
eatSnack(chips);
// => Chomp chomp, potato chips are tasty!
function eat(food, quantity) {
    for (var i = 0; i < quantity; i++) {
        console.log("chomp, " + food);
    }
}
eat(chips, 5);
// => chomp! potato chips
// => chomp! potato chips
// => chomp! potato chips
// => chomp! potato chips
// => chomp! potato chips
