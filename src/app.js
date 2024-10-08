const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
