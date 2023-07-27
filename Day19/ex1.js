// // function outer (){
// //     let count=0;
// //     function inner(){
// //         count++;
// //         return count;
// //     }

// //     return inner;
// // }

// // const fn = outer();
// // console.log(fn())
// // console.log(fn())
// // console.log(fn())

// // Create a closure which has three inner functions
// // 

// let a =0;

// function valueOfA(){
//     function firstFunction(){
//         // let a =1;
//         function secondFunction(){
//             // let a =2;
//             function thirdFunction(){
//                 // let a =3;
//                 return a;
//             }
//            return thirdFunction();
//         }
//         return secondFunction();
//     }
//     return firstFunction();
// }

// console.log(valueOfA())

console.log(3+("3"));