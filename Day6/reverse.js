let str = "Hello I am Dhruvi";
// olleH I ma ivurhD
function reverseString (str,sep){
   
let str1 = str.split(sep).reverse().join(sep)//ivurhD ma I olleH
return str1;
}

let str2 = reverseString(str,"")
console.log(reverseString(str2," "))

let arr =[1,2,3,4]
let arr2 = arr;
arr.length=0;
console.log(arr2)
console.log(Array.isArray(arr))