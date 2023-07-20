// class Solution {
//     removeCharacters(s) {
//         let modifiedString = s.replace(/[^0-9]/g, "");
//         // console.log(modifiedString);
//         return modifiedString;
//       }

// }

// const sol = new Solution();
// console.log(sol.removeCharacters("A1Q2"));

// function decrease(str){
//     let arr=[];
//    for(let i=str.length;i>0;i--){
//     let str1="";
//     for(let j=0;j<i;j++){
//         str1+=str[j];
//     }
//     arr.push(str1);
//    }
//    return arr;
// }

// console.log(decrease("Geek"));

// let str = "geeksf0orgeeks!!!g1igig56";
// let str1 = str.match(/[!@#$%&*]+/g)
// str1=str1.join("")
// let str2 = str.match(/[a-zA-Z]+/g)
// str2=str2.join("")
// let str3 = str.match(/\d+/g)

// str3=str3.join("")
// console.log(str1);
// console.log(str2);

// console.log(str3);

let string1 = "Geeks";
let dot = ".";

let str = "";
for (let i = string1.length; i > 0; i--) {
  str += dot.repeat(string1.length - i);
  for (let j = string1.length - i; j < string1.length; j++) {
    str += string1[j];
  }
}

console.log(str);
