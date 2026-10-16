const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extende: true }));
app.use(express.static(`public`));
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/lists", (req, res) => {
  res.render("lists");
});

app.get("/creative", (req, res) => {
  res.render("creative");
});

app.get("/pug-resort", (req, res) => {
  res.render("pug-resort");
});

app.get("/letsrock", (req, res) => {
  const data = {
    title: "letsrock",
    name: "letsrock",
    message: "letsrock",
  };
  res.render("lets", data);
});

app.get("/if", (req, res) => {
  const dataobjekt = {
    isLoggedIn: false,
    name: "Mange",
  };
  res.render("if", dataobjekt);
});

app.get("/elefant", (req, res) => {
  const data = {
    elefanter: [1, 2, 3, 4, 5],
  };
  res.render("elefant", data);
});

app.get("/each", (req, res) => {
  const data = {
    products: [
      { name: "Tröja", price: "10kr" },
      { name: "Byxor", price: "20kr" },
      { name: "Hat", price: "30kr" },
      { name: "Strumpor", price: "100kr" },
    ],
  };
  res.render("each", data);
});
app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
