// const countries = [
//   "Albanooia",
//   "Bolivoia",
//   "Canoadoa",
//   "Denmooark",
//   "Ethioopia",
//   "Finlaoond",
//   "Germooany",
//   "Hungooary",
//   "Irelooand",
//   "Japooan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// console.log(countries.length)
// console.log(countries[0]+" "+ countries[countries.length-1] + " "+ countries[(countries.length+1)/2])

// webTechs.map((we)=>console.log(we.toLocaleUpperCase()))
// console.log(webTechs.toString())

// countries.includes("Japn")? console.log("C"): console.log("NC")

// countries.map((value) => {
//     let val=value.split("")
 
//   let count = 0;
//   val.map((letter) => {
//     if (letter == "o") {
//       count++;
      
      
     
//     }
   
//   }
//   );
//   if(count<2)
      
//   console.log(value)
// });

// console.log(webTechs.sort())
// console.log(webTechs.reverse())
// console.log(webTechs.slice(webTechs.length-3,webTechs.length))
// webTechs.unshift(1)
// console.log(webTechs)

// const impor = require("./arr")

// console.log(impor.greet("Dhruvi"))
// console.log(impor.message)

let str = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
str = str.replace(/[^/ /a-zA-Z]/g,"")
str = str.split(" ")
console.log(str.length)

const n =[1,2,3,4,5,6]
n.splice(3,3,7,8,9)
console.log(n.splice(3,3,11,12,12))
console.log(n)

const slice = ['a','b','c','d']
slice.slice(1,3)
console.log(slice.slice(1,3))//b,c
console.log(slice)//a,d

slice.reverse()
console.log(slice)