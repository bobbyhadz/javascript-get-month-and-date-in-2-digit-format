// EXAMPLE 1 - Get Month and Date in 2 Digit Format in JavaScript

const date = new Date('March 5, 2025 05:24:00');

const year = date.getFullYear();
console.log(year); // 👉️ 2025

const month = String(date.getMonth() + 1).padStart(2, '0');
console.log(month); // 👉️ 03

const day = String(date.getDate()).padStart(2, '0');
console.log(day); // 👉️ 05

const joined = [day, month, year].join('/');
console.log(joined); // 👉️ 05/03/2025

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function getMonth2Digits(date) {
//   const month = String(date.getMonth() + 1).padStart(2, '0');

//   return month;
// }

// function getDay2Digits(date) {
//   const day = String(date.getDate()).padStart(2, '0');

//   return day;
// }

// const d = new Date('March 5, 2025 05:24:00');

// const month = getMonth2Digits(d);
// console.log(month); // 👉️ 03

// const day = getDay2Digits(d);
// console.log(day); // 👉️ 05

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get Month and Date in 2 Digit Format by comparing to 10

// function getMonth2Digits(date) {
//   // 👇️ Add 1 because getMonth is 0-11
//   const month = date.getMonth() + 1;

//   if (month < 10) {
//     return '0' + month;
//   }

//   return month;
// }

// function getDay2Digits(date) {
//   const day = date.getDate();

//   if (day < 10) {
//     return '0' + day;
//   }

//   return day;
// }

// const date = new Date('April 07, 2025 10:24:06');

// console.log(getMonth2Digits(date)); // 👉️ 04

// console.log(getDay2Digits(date)); // 👉️ 07

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get Month and Date in 2 Digit Format using `slice()`

// function getMonth2Digits(date) {
//   const month = ('0' + (date.getMonth() + 1)).slice(-2);

//   return month;
// }

// function getDay2Digits(date) {
//   const day = ('0' + date.getDate()).slice(-2);

//   return day;
// }

// const d = new Date('March 5, 2025 05:24:00');

// const month = getMonth2Digits(d);
// console.log(month); // 👉️ 03

// const day = getDay2Digits(d);
// console.log(day); // 👉️ 05
