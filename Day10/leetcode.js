// // const arr = [1, 2,3,4,5,6];
// // function computeAvg(arr) {
// //   let sum = 0;
// //   let avg = 0.0;
// //   for (let num of arr) {
// //     sum += num;
// //   }
// //   avg = sum / arr.length;
// //   avg = parseFloat(avg.toFixed(2))
// //   return [sum, avg];
// // }

// // console.log(computeAvg(arr));

// class Solution {
//   leftElement(arr, n) {
//     //code here
//     arr.sort((a,b)=>a-b)

//     let remainEle;
//   if(arr.length%2==0){
//      let index = arr.length/2
//      remainEle =  arr[index-1];
//   }
//   else{
//       let index = arr.length/2
//       index = Math.floor(index)
//       remainEle=arr[index]
//   }
//   return remainEle;
//   }
// }

// const sol = new Solution();
// console.log(sol.leftElement([8, 1, 2, 9, 4, 3, 7, 5]))

// const arr = [[1,2],[1,2]];
// let arr1=[];

// for(let i=0;i<arr.length;i++){
//   for(let num of arr){
//     arr1.push(num[i])
//   }
  
// }

// console.log(arr1);

// class Solution{
//   isBinary(str){
//       //code here
//       let arr = str.split("")
//      let isBinaryTrue= arr.every(num=> num==0 || num==1)
//      if(isBinaryTrue)
//      return 1;
//      else
//      return 0;
//   }
// }

// const sol = new Solution();
// console.log(sol.isBinary("0111100110101100"))


let str = "  g f g"
let arr = str.split(" ")
console.log(arr);

arr = arr.filter(letter=>letter!=" ")
str = arr.join("")
console.log(str);