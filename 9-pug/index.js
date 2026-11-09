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
app.get("/classes", (req, res) => {
  const data = {
    classes: [
      {
        classId: "a",
        students: [
          { name: "George Sanchez", id: 1 },
          { name: "Kevin Thompson", id: 2 },
          { name: "Diana Anderson", id: 3 },
          { name: "Hannah Martin", id: 4 },
          { name: "Oscar Davis", id: 5 },
          { name: "Laura Miller", id: 6 },
          { name: "William Williams", id: 7 },
          { name: "Ulysses Smith", id: 8 },
          { name: "Alice Taylor", id: 9 },
          { name: "Xena Johnson", id: 10 },
          { name: "Isaac Brown", id: 11 },
          { name: "Penelope Garcia", id: 12 },
          { name: "Charlie Lopez", id: 13 },
          { name: "Taylor Moore", id: 14 },
          { name: "Michael Hernandez", id: 15 },
          { name: "Nina Rodriguez", id: 16 },
          { name: "Samuel Wilson", id: 17 },
          { name: "Victoria Jones", id: 18 },
          { name: "Bob Gonzalez", id: 19 },
          { name: "Zara Thomas", id: 20 },
          { name: "Ethan Perez", id: 21 },
          { name: "Jasmine Lee", id: 22 },
          { name: "Quentin Harris", id: 23 },
          { name: "Fiona Martinez", id: 24 },
          { name: "Yusuf Anderson", id: 25 },
          { name: "Rachel Smith", id: 26 },
          { name: "Michael Brown", id: 27 },
          { name: "Laura Williams", id: 28 },
          { name: "Kevin Davis", id: 29 },
          { name: "Hannah Rodriguez", id: 30 },
          { name: "George Johnson", id: 31 },
          { name: "Diana Miller", id: 32 },
        ],
      },
      {
        classId: "b",
        students: [
          { name: "Nina Lee", id: 1 },
          { name: "Isaac Thomas", id: 2 },
          { name: "Oscar Williams", id: 3 },
          { name: "Penelope Smith", id: 4 },
          { name: "Quentin Johnson", id: 5 },
          { name: "Rachel Garcia", id: 6 },
          { name: "Samuel Miller", id: 7 },
          { name: "Taylor Davis", id: 8 },
          { name: "Ulysses Rodriguez", id: 9 },
          { name: "Victoria Martinez", id: 10 },
          { name: "William Hernandez", id: 11 },
          { name: "Xena Lopez", id: 12 },
          { name: "Yusuf Gonzalez", id: 13 },
          { name: "Zara Wilson", id: 14 },
          { name: "Alice Anderson", id: 15 },
          { name: "Bob Taylor", id: 16 },
          { name: "Charlie Moore", id: 17 },
          { name: "Diana Jackson", id: 18 },
          { name: "Ethan Martin", id: 19 },
          { name: "Fiona Perez", id: 20 },
          { name: "George Thompson", id: 21 },
          { name: "Hannah White", id: 22 },
          { name: "Isaac Harris", id: 23 },
          { name: "Jasmine Sanchez", id: 24 },
          { name: "Kevin Smith", id: 25 },
          { name: "Laura Johnson", id: 26 },
          { name: "Michael Williams", id: 27 },
          { name: "Nina Brown", id: 28 },
          { name: "Oscar Jones", id: 29 },
          { name: "Penelope Garcia", id: 30 },
          { name: "Quentin Miller", id: 31 },
          { name: "Rachel Davis", id: 32 },
        ],
      },
      {
        classId: "c",
        students: [
          { name: "Ethan Thomas", id: 1 },
          { name: "Fiona Taylor", id: 2 },
          { name: "George Moore", id: 3 },
          { name: "Hannah Jackson", id: 4 },
          { name: "Isaac Martin", id: 5 },
          { name: "Jasmine Lee", id: 6 },
          { name: "Kevin Perez", id: 7 },
          { name: "Laura Thompson", id: 8 },
          { name: "Michael White", id: 9 },
          { name: "Nina Harris", id: 10 },
          { name: "Oscar Sanchez", id: 11 },
          { name: "Penelope Smith", id: 12 },
          { name: "Quentin Johnson", id: 13 },
          { name: "Rachel Williams", id: 14 },
          { name: "Samuel Brown", id: 15 },
          { name: "Taylor Jones", id: 16 },
          { name: "Ulysses Garcia", id: 17 },
          { name: "Victoria Miller", id: 18 },
          { name: "William Davis", id: 19 },
          { name: "Xena Rodriguez", id: 20 },
          { name: "Yusuf Martinez", id: 21 },
          { name: "Zara Hernandez", id: 22 },
          { name: "Alice Lopez", id: 23 },
          { name: "Bob Gonzalez", id: 24 },
          { name: "Charlie Wilson", id: 25 },
          { name: "Diana Anderson", id: 26 },
          { name: "Ethan Thomas", id: 27 },
          { name: "Fiona Taylor", id: 28 },
          { name: "George Moore", id: 29 },
          { name: "Hannah Jackson", id: 30 },
          { name: "Isaac Martin", id: 31 },
          { name: "Jasmine Lee", id: 32 },
        ],
      },
    ],
  };
  res.render("classes", data);
});

app.get("/leyout");

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
