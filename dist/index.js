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
    res.send(appendSnacks);
});
// start the server
app.listen(port, function () {
    console.log("server running at http://localhost:" + port);
});
////////////////////
var snacks = [
    "popcorn",
    "hamburgers",
    "gummy bears",
    "potato chips",
    "tacos",
];
// const snackDiv = document.createElement("div");
var appendSnacks = function () {
    // snacks.forEach((snack) => {
    //   snackDiv.insertAdjacentHTML("beforeend", `-- ${snack}`);
    // });
    // snackDiv.innerHTML;
    snacks.forEach(function (snack) { return "" + snack; });
};
// document.addEventListener("DOMContentLoaded", appendSnacks);
