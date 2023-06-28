function sayHello() {
  return "Hello " + this.name;
}

var obj = { age: "Sandy" };

console.log(sayHello.call(obj));

function sayHi(message) {
  return message + " " + this.name;
}

var object = { name: "Gannu" };

console.log(sayHi.apply(object, ["This is my "]));

var obje1 = {
  getPrinted: function print() {
    return this.name + "bye bye";
  },
};

const object1 = { name: "Tata" };
console.log(obje1.getPrinted.bind(object1)());
