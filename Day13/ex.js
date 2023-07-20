const countries = require("./countries_data")

// console.table(countries.splice(0,2))

// for(country of countries){
    
//     console.group(country)
//     console.groupEnd()
// }

// Check the speed difference among the following loops: while, for, for of, forEach
let num = [0,1,2,3,4]
console.time("Time Starts")
for(let i=0;i<5;i++){
    console.log(i);
}
console.timeEnd("Time Starts")

console.time("Time Starts")
for(n of num){
    console.log(n);
}
console.timeEnd("Time Starts")

console.time("Time Starts")
num.forEach(element => {
    console.log(element);
});
console.timeEnd("Time Starts")

console.time("Time Starts")
i=0;
while(i<5){
    console.log(i);
    i++;
}
console.timeEnd("Time Starts")

console.log(countries)
alert('Open the console and check if the countries has been loaded')