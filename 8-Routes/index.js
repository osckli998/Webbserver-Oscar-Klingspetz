const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));

app.get("/", (req, res) => {
  res.send("Hej från kapitel 8!");
});

app.get("/json/owner", (req, res) => {
  res.json({
    name: "Oscar",
    email: "oscar@edu.linkoping.se",
  });
});

app.get("/json/players", (req, res) => {
  const players = [
    { Name: "Pelle", Nick: "Svanslös" },
    { Name: "Mange", Nick: "Mate" },
    { Name: "Mange", Nick: "Mate" },
  ];
  res.json(players);
});

app.post("/json/players/", (req, res) => {
  console.log("Data motagen", req.body);

  res.status({
    Succses: "True",
    Message: "Spelar data motagen",
    Data: req.body,
  });
});

app.post("/hit-me", (req, res) => {
  console.log("BLabla", req.body);

  res.send("Ojk");
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1><p>Sidan hittades inte</p>");
});

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
