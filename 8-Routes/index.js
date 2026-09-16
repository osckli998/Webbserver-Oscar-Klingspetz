const express = require("express");

const app = express();
const port = 3000;

app.get("/monsters/add/list", (req, res) => {
  res.send("Goblin, Kobold, Mother-in-Law");
});

app.get("/monsters/add/:count", (req, res) => {
  const amount = req.params.count;
  res.send(amount);
});

app.get("/name/:person", (req, res) => {
  const name = req.params.person;
  res.send(`You be Rizzlord ${name}`);
});

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
