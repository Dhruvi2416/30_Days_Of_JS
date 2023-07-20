// const constants = [2.72, 3.14, 9.81, 37, 100];
// const [e,pi,gravity,bodyTemp,boilingTemp]=constants;
// console.log(e,pi,gravity,bodyTemp,boilingTemp);

// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const [fin,est,swe,den,nor]=countries;
// console.log(fin,est,swe,den,nor);

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
//   }

//   const {width,height,area,perimeter=10}= rectangle;
//   console.log(width,height,area,perimeter);

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// for(const {name,skills} of users){
//     if(skills.length<2)
//     console.log(name)
// }

// const countries = require("./countries_data")

// for(const {name,capital,languages,population} of countries){
//     console.log(name,capital,languages,population);
// }

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

//   for(const student of students){
//     const [name,skills]= student
//     const [htmlScore,CssScore,jsScore,reactScore] = student[2];
//     console.log(name,skills,jsScore,reactScore);
//   }
// const arr = [];
// for (const student of students) {
//   const [name, skills, scores] = student;
//   arr.push({ name: name, skills: skills, scores: scores });
// }

// console.log(arr);

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    let copy;
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopy(obj[i]);
      }
    } else {
      copy = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = deepCopy(obj[key]);
        }
      }
    }
  
    return copy;
  }
  
  const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node', level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  };
  
  const newStudent = deepCopy(student);
  
  // Modify the newStudent object by adding the specified skills
  newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
  newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
  newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
  newStudent.skills.dataScience.push('SQL');
  
//   console.log(newStudent);

const obj1 = {num:1,b:2,c:3}
let obj2 = Object.assign(obj1)
obj2.b=3;
console.log((obj1));
  
