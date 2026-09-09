// function packaArtikel(artikelNamn) {
//   return `Artikeln ${[artikelNamn]} har lagts i lådan`;
// }

// const utt = packaArtikel("T-shirt");

// console.log(utt);

const dbUsers = [
  {
    id: "usr_99",
    profil: { name: "oscar", last: "Berg", age: 34 },
    setings: { theme: "dark" },
    items: ["tält", "Mat", ],
  },
  {
    id: "usr_98",
    profil: { name: "Bscar", last: "Oerg", age: 24 },
    setings: { theme: "dark" },
    items: ["burg", "Fisk", "Ko", "Tomat"],
  },
  {
    id: "usr_90",
    profil: { name: "Vscar", last: "Verg", age: 14 },
    setings: { theme: "dark" },
    items: ["Katt", "grus", "fågle", ],
  },
];

const newPacklist = dbUsers.map((user) => {
  return {
    id: user.id,
    owner: `${user.profil.name} ${user.profil.last} ${user.profil.age}`,
    setings: user.setings.theme,
    items: user.items.length,
  };
});

console.table(newPacklist);
