const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
app.use(morgan(`dev`));

app.use(morgan(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));

app.use(express.static(`public`));

app.get("/", (req, res) => {
  res.send("Hej från kapitel 8!");
});
app.post("/hit-me", (req, res) => {
  console.log("BLabla", req.body);

  res.send("Ojk");
});

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
