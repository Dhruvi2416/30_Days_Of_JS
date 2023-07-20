// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`

//       let formattedSkills = skills ? `He knows ${skills}` : ''

//       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//     static favoriteSkill() {
//       const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//       const index = Math.floor(Math.random() * skills.length)
//       return skills[index]
//     }
//     static showDateTime() {
//       let now = new Date()
//       let year = now.getFullYear()
//       let month = now.getMonth() + 1
//       let date = now.getDate()
//       let hours = now.getHours()
//       let minutes = now.getMinutes()
//       if (hours < 10) {
//         hours = '0' + hours
//       }
//       if (minutes < 10) {
//         minutes = '0' + minutes
//       }

//       let dateMonthYear = date + '.' + month + '.' + year
//       let time = hours + ':' + minutes
//       let fullTime = dateMonthYear + ' ' + time
//       return fullTime
//     }
//   }
//   class Student extends Person {
//     constructor(firstName, lastName, age, country, city) {
//      super(firstName,lastName,age,city,country);
//     }

//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`

//       let formattedSkills = skills ? `He knows ${skills}` : ''
//       let pronoun = this.gender == 'Male' ? 'He' : 'She'

//       let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }

//   const s1 = new Student(
//     'Asabeneh',
//     'Yetayeh',
//     250,
//     'Finland',
//     'Helsinki',

//   )
//   const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', )
//   s1.setScore = 1
//   s1.setSkill = 'HTML'
//   s1.setSkill = 'CSS'
//   s1.setSkill = 'JavaScript'

//   s2.setScore = 1
//   s2.setSkill = 'Planning'
//   s2.setSkill = 'Managing'
//   s2.setSkill = 'Organizing'

// //   console.log(s1)

//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())

//   console.log(s2.saySomething())
//   console.log(s2.getFullName())
//   console.log(s2.getPersonInfo())

// class Animal {
// constructor(name,age,color,legs){
// this.name=name,
// this.age=age,
// this.color=color,
// this.legs=legs

// }

// shout(){
//     console.log(`${this.name} says yes`);
// }
// }

// class Dog extends Animal{
//     constructor(name,age,color,legs){
//         super(name,age,color,legs)
//     }

//     shout(){
//         console.log(`${this.name} says bhaw bhaw`);
//     }
// }

// class Cat extends Animal{
//     constructor(name,age,color,legs){
//         super(name,age,color,legs)
//     }

//     shout(){
//         console.log(`${this.name} says meow meow`);
//     }
// }

// const animal = new Animal("deer",3,"Brown",4)
// console.log(animal.shout());
// const dog = new Dog("dog",4,"Black",4)
// console.log(dog.shout());
// const cat = new Cat("cat",3,"White",4)
// console.log(cat.shout());

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.incomes = incomes),
      (this.expenses = expenses);
  }

  totalIncome() {
    let sum = 0;
    this.incomes.map((income) => {
      const value = Object.values(income);
      sum += value[0];
    });
    return sum;
  }

  totalExpense() {
    let sum = 0;
    this.expenses.map((expense) => {
      const value = Object.values(expense);
      sum += value[0];
    });
    return sum;
  }

  totalBalace() {
    return `${this.totalIncome()}` - `${this.totalExpense()}`;
  }
  accountInfo() {
    return `${this.firstName} ${
      this.lastName
    } has total balance ${this.totalBalace()}`;
  }

  set addIncome(income) {
    this.incomes.push(income);
  }

  set addExpense(expense) {
    this.expenses.push(expense);
  }
  get getIncome() {
    return `${this.totalIncome()}`;
  }
}

const accountHolder = new PersonAccount(
  "Dhruvi",
  "Shah",
  [{ Rent: 1000 }, { Salary: 40000 }, { "Bank Interest": 4500 }],
  [{ Nominal: 200 }, { Transportation: 20000 }, { Petrol: 500 }, { Food: 456 }]
);

accountHolder.addIncome={"Free-lancing":2000}

accountHolder.addExpense={"Free-lancing-course":2344}

console.log(accountHolder.accountInfo());

console.log(accountHolder.getIncome);

// let obje = [{"name":"dhruvi",age:22}]
// console.log(Object.values(obje))

// const gi = obje.map(ob=>Object.values(ob))
// console.log(gi);
