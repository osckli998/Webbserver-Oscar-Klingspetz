const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
app.use(morgan(`dev`));

app.use(express.static(`public`));

// app.get("/monsters/add/list", (req, res) => {
//   const monsters = [`Goblin`, `Kobold`, `Mother-in-Law`];
//   const sortOrder = req.query.sort;
//   let sortedMonsters = [...monsters];

//   if (sortOrder === `asc`) {
//     sortedMonsters.sort();
//   } else if (sortOrder === `desc`) {
//     sortedMonsters.sort().reverse();
//   }

//   res.send(sortedMonsters.join(`,`));
// });

// app.get("/monsters/add/:count", (req, res) => {
//   const amount = req.params.count;
//   res.send(`Ok ${amount}`);
// });

// app.get("/name/:person", (req, res) => {
//   const name = req.params.person;
//   res.send(`You be Rizzlord ${name}`);
// });

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
