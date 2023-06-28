//0.0.0.0 239.255.255.255

// let ipArray=[];
// let ipString="";

// for(let i=0;i<4;i++){
// ipArray.push(Math.floor(Math.random()*255))
// }

// ipString = ipArray.join(".")
// console.log(ipString)

//00:1b:63:84:45:e6 or 00-1B-63-84-E6

// let macArray=[];
// let macStringColon="";
// let macStringHyphen="";

// for(i=0;i<4;i++){
// let validAddress ="0123456789abcdefABCDEF";
// let twoValidSubAddress1 = validAddress.charAt(Math.floor(Math.random()*22));
// let twoValidSubAddress2 = validAddress.charAt(Math.floor(Math.random()*22));
// let totalValidSubAddress=(twoValidSubAddress1+twoValidSubAddress2).toString().padStart(2,'0');
// macArray.push(totalValidSubAddress)
// }

// macStringColon=macArray.join(":").toLowerCase();
// macStringHyphen=macArray.join("-").toUpperCase();
// console.log(macStringColon +" or "+macStringHyphen)

//#ee33df
// let validString="#"
// function randomHexaNumberGenerator(){
// let validSubString = "0123456789abcdef"
// for(let i=0;i<6;i++){
// validString+=validSubString.charAt(Math.floor(Math.random()*16))
// }
// return validString
// }

// console.log(randomHexaNumberGenerator())

//41XTDbE
// let validString = "";
// function userIdGenerator() {
//   let validSubString =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for (let i = 0; i < 7; i++) {
//     validString += validSubString.charAt(Math.floor(Math.random() * 62));
//   }
//   return validString;
// }
// console.log(userIdGenerator());
