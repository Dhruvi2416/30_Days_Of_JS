function details(id, name) {
  this.id = id;
  this.name = name;
  this.changeName = changeName;

  function changeName(otherName) {
    this.name = otherName;
  }
}

 emp = new details(122, "Dhruvi");
console.log(emp.name);

emp.changeName("123");
console.log(emp.name);
console.log(emp.changeName())

// const bj1 = {a:1,b:23,c:13}

// const obj2=Object.assign({a:16,g:4,h:5,c:2},bj1)
// console.log(obj2.a,obj2.b,obj2.c,obj2.g,obj2.h)//1,23,13,4,5
// function fruits() {  
//     this.name = 'fruit';  
//     this.season = 'Winter';  
//     }  

//     function apple() {  
//     fruits.call(this);  
//     }  

//     apple.prototype = Object.create(fruits.prototype);  
//     const app = new apple();  
//     console.log(apple.prototype);  


// let a ={
//     run:()=>{console.log("bhagoooo")},
// lang:"JS"
// }
// let b = {
// run:()=>{
// console.log("run")
// }
// }

// a.__proto__ = b;
// a.run()

// var Employee = {
//     company: 'xyz'
//   }
//   var emp1 = Object.create(Employee);
//   emp1.company ="abc"
//   console.log(emp1.hasOwnProperty("company"))
//   delete emp1.company
//   console.log(emp1.hasOwnProperty("company"))
//   console.log(emp1.company);