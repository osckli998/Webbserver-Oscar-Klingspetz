// function greet() {
//   console.log("Helo darknes");
// }

// greet();

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(4));
// console.log(isEven(7));

// function addNumbers(a, b) {
//   return a + b;
// }

// let sum = addNumbers(1, 2);

// console.log(sum);

// const square = (num) => num * num;

// let produckt = square(5);

// console.log(produckt);

// const calcHyp = (a, b) => Math.sqrt(a ** 2 + b ** 2);

// let result = calcHyp(3, 5);

// console.log(result);

// const solvePyt = (a, b, c) => {
//   if (c === 0) {
//     return Math.sqrt(a ** 2 + b ** 2);
//   } else if (a === 0) {
//     return Math.sqrt(c ** 2 - b ** 2);
//   } else if (b === 0) {
//     return Math.sqrt(c ** 2 - a ** 2);
//   }
// };

// console.log(solvePyt(0, 5, 7));

// console.log(solvePyt(1, 6, 0));

// function celciusToFahrenheit(celsius) {
//   let F = (celsius * 9) / 5 + 32;
//   return F;
// }

// const farenheit = celciusToFahrenheit(25);
// console.log(farenheit);

// function findMax(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }

// const high = findMax(2, 5, 12);

// console.log(high);

// function getStringLength(text) {
//   return text.length;
// }

// let textLeng = getStringLength("Hejf");
// console.log(textLeng);

// function genRanNums(amount) {
//   const numbers = [];
//   for (let i = 1; i <= amount; i++) {
//     const ranNums = Math.floor(Math.random() * 100) + 1;
//     numbers.push(ranNums);
//   }
//   return numbers;
// }

// let ranArr = genRanNums(10);

// function createOrders(count) {
//   const orders = [];
//   for (let i = 0; i <= count; i++) {
//     const ranNum = Math.floor(Math.random() * 100) + 1;

//     const order = {
//       id: i,
//       value: ranNum,
//     };
//     orders.push(order);
//   }
//   return orders;
// }
// let testOrders = createOrders(4);
// console.log(testOrders);

// function createGrid(rows, cols) {
//   const grid = [];
//   for (let r = 0; r < rows; r++) {
//     const row = [];
//     for (let c = 0; c < cols; c++) {
//       row.push(Math.floor(Math.random() * 9) + 1);
//     }
//     grid.push(row);
//   }
//   return grid;
// }

// const gamebord = createGrid(5, 5);
// console.table(gamebord);

// function createMinesweeperBoard(rows, cols, bombs) {
//   const bord = [];
//   for (let r = 0; r < rows; r++) {
//     const row = [];
//     for (let c = 0; c < cols; c++) {
//       row.push("");
//     }
//     bord.push(row);
//   }

//   let bombsPlaced = 0;
//   while (bombsPlaced < bombs) {
//     const randomRows = Math.floor(Math.random() * rows);
//     const randomCols = Math.floor(Math.random() * cols);

//     if (bord[randomRows][randomCols] === "") {
//       bord[randomRows][randomCols] = "BOMB";
//       bombsPlaced++;
//     }
//   }
//   return bord;
// }

// const mineSweap = createMinesweeperBoard(5, 5, 3);
// console.table(mineSweap);

// const formatLog = (message) => {
//   return `[SERVERLOG]: ${message}`;
// };

// const anrop = formatLog("Databasen har kopplats upp");
// console.log(anrop);

// const isValidEmail = (email) => email.includes("@");
// console.log(isValidEmail("oscar.klingspetz@icloud.com"));
// console.log(isValidEmail("oscar.klingspetzicloud.com"));
