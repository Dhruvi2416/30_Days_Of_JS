// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// let validString = "";
// function userIdGeneratedByUser(noOfChars, numOfIds) {
//   for (let i = 0; i < numOfIds; i++) {
//     let validSubString =
//       "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let i = 0; i < noOfChars; i++) {
//       validString += validSubString.charAt(Math.floor(Math.random() * 62));
//     }
//     console.log(validString);
//     validString = "";
//   }
// }

// userIdGeneratedByUser(14, 12);

// Write a function name rgbColorGenerator and it generates rgb colors.
// let startString="rgb(";
// let endString=")";
// function rgbColorGenerator(){
// for(i=0;i<3;i++)
// {
// startString+=Math.floor(Math.random()*255)
// for(j=i;j<2;j++){
// startString+=","
// break;
// }
// }
// return startString+endString;
// }
// console.log(rgbColorGenerator())

// let validString = "#";
// let arrOfHash=[];
// function randomHexaNumberGenerator(num) {
//   let validSubString = "0123456789abcdef";
//   for (let j = 0; j < num; j++) {
//     for (let i = 0; i < 6; i++) {
//       validString += validSubString.charAt(Math.floor(Math.random() * 16));
//     }

//     arrOfHash.push(validString)
//     validString="#"
//   }
// console.log(arrOfHash)
// }

// randomHexaNumberGenerator(6);

// let startString = "rgb(";
// let endString = ")";
// let arrOfRGB = [];
// function rgbColorGenerator(num) {
//   for (let k = 0; k < num; k++) {
//     for (i = 0; i < 3; i++) {
//       startString += Math.floor(Math.random() * 255);
//       for (j = i; j < 2; j++) {
//         startString += ",";
//         break;
//       }
//     }
//     let totalString = startString+endString
//     arrOfRGB.push(totalString);
//     startString="rgb("
//   }
//   return arrOfRGB
// }
// console.log(rgbColorGenerator(13));

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// hexadecimal is 16 and hence r1 will be r/16 and r2 will be r%16
// same for g and b

// function convertRgbToHexa(r, g, b) {
//     let hashString = "#";
//   if (r < 0 || r > 255) {
//     r = 0;
//   }
//   if (g < 0 || g > 255) {
//     g = 0;
//   }
//   if (b < 0 || b > 255) {
//     b = 0;
//   }
//   let validString = "0123456789ABCDEF";
//   let r1 = Math.floor(r / 16);
//   let r2 = r % 16;
//   r = validString.charAt(r1) + validString.charAt(r2);

//   let g1 = Math.floor(g / 16);
//   let g2 = g % 16;
//   g = validString.charAt(g1) + validString.charAt(g2);

//   let b1 = Math.floor(b / 16);
//   let b2 = b % 16;
//   b = validString.charAt(b1) + validString.charAt(b2);
//   hashString += r + g + b;
//   return hashString;
// }
// let hashString = "/";
// console.log(convertRgbToHexa(255,63,-1));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// function convertHexaToRgb(hexString) {
//   let validString = "0123456789ABCDEF";
//   if (hexString[0] == "#" && hexString.length == 7) {
//     hexString = hexString.slice(1, 7);
//   }
//   if (hexString.length == 6) {
//     let startString = "rgb(";
//     let endString = ")";

//     let totalString = "";
//     let r1 = validString.indexOf(hexString.slice(0, 1));
//     let r2 = validString.indexOf(hexString.slice(1, 2));
//     let r = r1 * 16 + r2;

//     let g1 = validString.indexOf(hexString.slice(2, 3));
//     let g2 = validString.indexOf(hexString.slice(3, 4));
//     let g = g1 * 16 + g2;

//     let b1 = validString.indexOf(hexString.slice(4, 5));
//     let b2 = validString.indexOf(hexString.slice(5, 6));
//     let b = b1 * 16 + b2;

//     startString += r + "," + g + "," + b;
//     totalString += startString + endString;
//     return totalString;
//   } else {
//     return "Enter valid hex Color- A valid hex color must have # in start and 6 digit letters";
//   }
// }

// console.log(convertHexaToRgb("FF3FGF"));

// function generateColors(type, repeatation) {
//   if (repeatation > 0) {
//     if (type == "hexa") {
//       let hashArr = [];
//       let hashString = "#";
//       let validString = "0123456789abcdef";
//       for (let i = 0; i < repeatation; i++) {
//         for (let j = 0; j < 6; j++) {
//           hashString += validString.charAt(Math.floor(Math.random() * 16));
//         }
//         hashArr.push(hashString);
//         hashString = "#";
//       }
//       console.log(hashArr);
//     } else if (type == "rgb") {
//       let rgbArr = [];
//       let startString = "rgb(";
//       let endString = ")";
//       for (i = 0; i < repeatation; i++) {
//         for (j = 0; j < 3; j++) {
//           let colorNumber = Math.floor(Math.random() * 255);
//           startString += colorNumber;
//           for (k = j; k < 2; k++) {
//             startString += ",";
//             break;
//           }
//         }
//         rgbArr.push(startString + endString);
//         startString = "rgb(";
//       }
//       console.log(rgbArr);
//     } else console.log("Sorry wrong type");
//   } else console.log("Repetation must be greater than 0");
// }

// generateColors("hexa", 7);
// generateColors("rgb", 3);
// generateColors("hex", 3);
// generateColors("rgb", -1);

// function factorial(num) {
//   mul = 1;
//   for (let i = num; i > 1; i--) {
//     mul *= i;
//   }
//   return mul;
// }

// console.log(factorial(15));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// function isEmpty(num){
// if(num== undefined)
// console.log("Hi")
// }

// isEmpty()

// Write a function called isPrime, which checks if a number is prime number.
// function isPrime(num) {
//   let isPrimeNo = true;
//   for (i = 2; i <= num / 2; i++) {
//     if (num % i == 0) {
//       isPrimeNo = false;

//       break;
//     }
//   }
//   if (isPrimeNo) return "Prime Number";
//   else return "Not a Prime Number";
// }

// console.log(isPrime(70));

// Write a functions which checks if all items are unique in the array.

// function checkUnique(...args) {
//   let isUnique = true;

//   for (let i = 0; i < args.length; i++) {
//     for (let j = i + 1; j < args.length; j++) {
//       if (args[i] === args[j]) {
//         isUnique = false;
//         console.log(args[i]);
//         break;
//       }
//       console.log("J", j);
//     }
//     console.log("II", i);
//     if (!isUnique) break;
//   }
//   if (isUnique) {
//     return "Unique elements";
//   } else return "Not a unique element";
// }
// console.log(checkUnique(1, 2, 2, 4, 5, 6, 7, 5));

// Write a function which checks if all the items of the array are the same data type.
// function checkType(...args) {
//   let isSameType = true;
//   let dataType = typeof args[0];

//   for (let i = 1; i < args.length; i++) {
//     if (typeof args[i] !== dataType) {
//       isSameType = false;
//       break;
//     }
//   }

//   if (isSameType) return "All are of same type";
//   else return "All are not same type";
// }
// console.log(checkType(1, 2, 2, 4, "5", 6, 7, 5));

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// function isValidVariable(variable) {
//   let regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*/;
//   if (regex.test(variable)) return "Valid variable";
//   else return "InValid variable";
// }

// console.log(isValidVariable("$"));

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// function generateSevenRandomUniqueNumbers() {
//   sevenNum = [];

//   while (sevenNum.length < 7) {
//     let randomNumber = Math.floor(Math.random() * 9);

//     if (!sevenNum.includes(randomNumber)) {
//       sevenNum.push(randomNumber);
//     }
//   }
//   return sevenNum;
// }

// console.log(generateSevenRandomUniqueNumbers());

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
