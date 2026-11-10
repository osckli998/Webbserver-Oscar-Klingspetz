const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "veiws");

app.get("/", (req, res) => {
  console.log("Formulär!");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/form", (req, res) => {
  res.send("Formuläret är skickat, Länk");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  res.send(`Motaget. Fyll i igen: <a href="/register">Länk</a>`);
});

app.get("/user/kalle/edit", (req, res) => {
  res.render("kaleForm");
});

app.post("/user/kalle/edit", (req, res) => {
  res.send(
    `Motaget. Fyll i igen:  <a href="/user/kalle/edit">Redigera<Länk</a>`,
  );
});

app.get("/boka", (req, res) => {
  res.render("boka");
});

app.post("/boka", (req, res) => {
  res.send(`Motaget. Fyll i igen:  <a href="/boka">Redigera<Länk</a>`);
});

app.get("/enkat", (req, res) => {
  res.render("enkat");
});

app.post("/enkat", (req, res) => {
  res.send(`Motaget. Fyll i igen:  <a href="/boka">Fyl i igen:<Länk</a>`);
});

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
