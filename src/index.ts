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
