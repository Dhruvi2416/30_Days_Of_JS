function foo() {
  console.log(this.bar);
}

var bar = "global";

var obj1 = {
  bar: "object1",
  foo: foo,
};

var obj2 = {
  bar: "object2",
};

foo(); // "global"
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo();

function func() {//aa function return kare che
    var priv = "secret code";
    return function() { // aa function in andar ni vlaue return kare che
      return priv;
    }
  }
  
  var getPriv = func();
  console.log(func()()); 


  function doSomething(age) {
    this.age = age;
    console.log(this.age);
  }
     
  doSomething(21);