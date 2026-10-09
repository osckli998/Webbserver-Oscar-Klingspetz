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
  // const data = {
  //   title: "Pug It",
  //   name: "Johan",
  //   message: "Sida med Pug #Coolsås",
  // };
  // res.render("home", data);
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

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
