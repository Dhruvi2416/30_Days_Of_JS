// const base = prompt("Enter base: ")
// const height = prompt("Enter height: ")
// prompt("Area: "+0.5*base*height)

// const x1 = prompt("x1: ")
// const x2 = prompt("x2: ")
// const y1 = prompt("y1: ")
// const y2 = prompt("y2: ")
// console.log((y2-y1)/(x2-x1))
const date = new Date();
console.log(
  date.getFullYear() +
    "-" +
    String(date.getMonth()).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    " " +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0")
);
