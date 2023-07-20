// var createCounter = function(n) {

//     let count =0;
//     return function() {
//         let call = n+count;
//         count++;
//         console.log(call);
//     };
// };

// const counter = createCounter(-2);
// counter();
// counter();
// counter();

// function Solution(arr,n){
//         //code here
//         arr.sort(function(a,b)
//         {return a-b;}
//         );
//         arr = arr.filter((num,index)=>arr.indexOf(num)===index)
//         if(arr.length>1)
//         return (arr[arr.length-2])
//         else
//         return -1

// }

// console.log(Solution([]))

// function prntArr(arr){
// arr = arr.join(" ")
// console.log(arr)
// }

// prntArr([1,2,3,4])

// class Solution {
//     print(arr,n){
//       //code here
//       let alterArr=[]
// for(let index in arr){
// if(index%2==0)
// alterArr.push(arr[index])}
// return alterArr
//     }
//   }

//   const solution = new Solution();
//   console.log(solution.print([1,2,3,4,5],5))

// class Solution{
//     valueEqualToIndex(arr,n){
//         //code here
//         let arr1 = []
//         for(let i=1;i<=arr.length;i++){
//             if(i==arr[i-1])
//            { arr1.push(i);
//             }
//         }

//         let str = arr1.join(" ")
//      if(str)
//         return str;
//         else
//         return "Not Found"
//     }

// }

// const solution = new Solution();

// console.log(solution.valueEqualToIndex([1,335,43,45,34,56,34,56,34,56,34,12]))

// class Solution {
//     PalinArray(arr,n){
//         let revArr=[];
//         //code here
//         for(let num of arr)
//         {
//         num = num.toString();
//         let numArr = parseInt((num.split("").reverse().join("")))
//        revArr.push(numArr)
//         }
//         let isPlaindrom =true;
//         for(let i in arr)
//         {
//             if(arr[i]==revArr[i])
//             isPlaindrom=true;
//             else{
//                 isPlaindrom=false;
//                 break;
//             }
//         }
//         if (isPlaindrom)
//         return 1;
//         else return 0;
//     }
// }

// const solution = new Solution();
// console.log(solution.PalinArray([122,121,131]))

// let string ="123"
// console.log(string.split("").reverse().join(""))

// class Solution{
//     countOfElements(arr, x){
//         //code here
//         let count =0;
//         for(let num of arr){
//             if(num<=x)
//             {
//                 count++;
//             }
//         }

//         return count;
//     }
// }

// let solution = new Solution();
// console.log(solution.countOfElements([1,2,2,2,5,7,9],2))
// class Solution {
//     findIndex(arr,n, key) {
//       let firstIndex;
//       let lastIndex;
//       if (arr.includes(key)) {
//         for (let num of arr) {
//             if(num==key)
//           {firstIndex = arr.indexOf(num);
//           lastIndex = arr.lastIndexOf(num);}
//         }
//       } else {
//         firstIndex = -1;
//         lastIndex = -1;
//       }
//       //code here
//       return [firstIndex,lastIndex];
//     }
//   }

// let sol = new Solution();
// console.log(sol.findIndex([22, 19, 17, 22, 30 ,29 ,16 ,11 ,26 ,18 ,28 ,17, 19, 20 ,28, 22, 13, 18, 13 ,11, 20 ,26, 23, 23 ,25 ,28, 19], 27,23));

// function printEachArr(arr,n){
//     let sum =0;
//     let avg=0.00;
//     let avgArr=[];

// for(let num=0;num<n;num++){
// sum+=arr[num];
// avg = sum/(parseInt(num)+1);
// avgArr.push(avg);
// }
// return avgArr;
// }

// console.log(printEachArr([10,20,30,40,50],5))

// const arr = [];
// if (arr.length!=0) {
//   console.log("Hi");
// } else console.log("Bye");

// function multiply(arr) {
//   let negArr = [];
//   let posArr = [];
//   let prodArr = [];
//   arr = arr.sort((a, b) => a - b);

//   for (num of arr) {
//     if (num < 0) negArr.push(num);
//     else if (num == 0) {
//       if (!prodArr.includes(num)) prodArr.push(num);
//     } else posArr.push(num);
//   }
//   // console.log(negArr, posArr, prodArr);

//   let mul = 1;
//   let maxNo = 0;
//   for (num of negArr) {
//     mul *= num;
//     if (mul > maxNo) {
//       maxNo = mul;
//     }
//   }
//   if (maxNo > 1) {
//     posArr.push(maxNo);
//   }

//   // console.log("PosArr", posArr);
//   if(posArr.length>0)
//   {mul = 1;
//   for (num of posArr) {
//     mul *= num;
//   }
//    prodArr.push(mul);}

//   maxNo = 0;
//   console.log(prodArr);
//   for (num of prodArr) {
//     if (num > maxNo) {
//       maxNo = num;
//     }
//   }
//   return maxNo;
// }

// console.log(multiply([2,3,4,0,-1,-2,-5]));

// class Solution {
//   constructor() {
//     this.ca = 0;
//     this.cb = 0;
//   }
//   scores(a, b) {
//     //store the scores at this.ca and this.cb
//     //code here
//     if(a[0]>b[0])
//     {this.ca++;}
//     else if (a[0]<b[0])
//     {this.cb++;}
//      if(a[1]>b[1])
//     {this.ca++;}
//     else if (a[1]<b[1])
//     {this.cb++;}

//      if(a[2]>b[2])
//     {this.ca++;}
//     else if (a[2]<b[2])
//     {this.cb++;}

//     return [this.ca,this.cb]
//   }
// }

// let sol = new Solution();
// console.log(sol.scores([4,2,7],[5,6,3]))

// class Solution {
//   leftElement(arr) {
//     //code here

//     arr = arr.sort(function (a, b) {
//       return a - b;
//     });
//    if(arr.length%2==0){
//     return arr[(arr.length/2)-1]
//    }
//    else
//    return arr[Math.floor(arr.length/2)]

//     }
// }
// const sol = new Solution();
// console.log(sol.leftElement([8,1,2,9,4,3,7,5]));


var your_drink;

var reverse = function(s){
  return s.split("").reverse().join("");

}

var barista={
  str1:"ion",
  str2:reverse("rcne"),
  str3:"ypt",
  request: function(preference){
    return preference+"Secret word:"+this.str2+this.str3+this.str1;
  }
}

console.log(barista.request(your_drink))