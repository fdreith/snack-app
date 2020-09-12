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
