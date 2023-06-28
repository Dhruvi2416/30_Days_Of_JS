function currying(){
return function(a){
return function(b){
return a*b;
}
}
}

var getFunc = currying()

console.log(getFunc(4)(3))