// // forEach:
// // It is used with arrays.It iterates to each element in an arrays.
// // It takes element, index and array as Parameters.
// // Index and arrays are optional;It does not work on emapty array.Index

// // map:
// // It is a high order function. It takes ele, index,array as para, arr and index are optional.
// // Here it returns a new array and does not modify original one.

// // filter:
// // It is a HOF It returns the new array which satisfies the conditions.HOF
// // for ex:
// // countries.filter((country)=> country.includes("land"));
// // It gives Ireland, Finland Etc.

// // reduce:
// // It is a HOF. It takes accumulator, current and optional initial value .
// // It returns a single value. Good practice to define initialvalue.
// // If we do not define initialValue then accumulator will get array of first value.
// // and currentvalue will start from arr[1]. If empty array it will throw an error.

// // const numbers = [1,2,3,4,5]
// // const sum = numbers.reduce((acc,cur)=>acc+cur,0)
// // Answer: 1+2+3+4+5=15

// // here if do not define  0 initial value it acc will be arr[0] i.e 1 and cur = arr[1]=2;

// // Callback is a function which can be passes as parameter
// // to ohter function.

// // const countries = ["America", "Auckland", "Australia", "Africa"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // countries.forEach(country=>console.log(country))
// // const upperCaseCountries=countries.map(country=>  country.toUpperCase())
// // console.log(upperCaseCountries)

// // arr=[45,67,23]
// // // console.log(arr.sort());
// // console.log(arr)

// // const lenOfCountries = countries.map(country=>country.length)
// // console.log(lenOfCountries)

// // const squares = numbers.map(num=> num*num)
// // console.log(squares)
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
// // const productPrice = products.map((prodObj)=>prodObj.product+":"+prodObj.price)
// // console.log(productPrice)

// // const countryIncludeLand = countries.filter(country=>country.toLowerCase().includes("land"))
// // console.log(countryIncludeLand)

// // const countryWith6Letter = countries.filter(country=>country.length>=6)
// // console.log(countryWith6Letter)

// // const countryStartsWithE = countries.filter(country=>country.startsWith("D"))
// // console.log(countryStartsWithE)

// // const filterPriceWithValues=products.filter(prodObj=>prodObj.price!=false)
// // console.log(filterPriceWithValues)

// // function getStringLists(arr){
// // arr = arr.filter(list=> typeof list==="string")
// // return arr;
// // }

// // console.log(getStringLists([1,2,"3","Four",false,8.90]))

// // let num =[1,2,3,4]
// // num[100]=444
// // console.log(num.length)

// // class rain{
// //     minrain=60;
// // }

// // const r = new rain();;
// // rain.minrain=80;
// // console.log(rain.minrain)

// // roar grunt

// // let cat ={type:"tiger", size:"large"}
// // let json = JSON.stringify(cat,["type"])
// // console.log(json)

// // console.log("I")
// // setTimeout(()=>{console.log("Love")},0)
// // console.log("Js")

// // let initial=0;
// // numbers.reduce((acc,cur)=>acc+cur,initial)
// // console.log(numbers)

// // let northerCountries = countries.reduce((accumulator, country, index) => {
// //   if (index === countries.length - 1) {
// //     return `${accumulator} and ${country} are northern European countries.`;
// //   } else return `${accumulator},${country}`;
// // });

// // console.log(northerCountries)

// // some:
// // it returns true if any of the element match true with condition

// // every:
// // it returns true if every element in an array satisfies conditions.

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// // const namehavinglengthgreaterthan7 = names.some(name=>name.length>7)
// // console.log(namehavinglengthgreaterthan7)

// // const ifeverycountryhasLand = countries.every(country=>country.toLowerCase().includes("land"))
// // console.log(ifeverycountryhasLand)

// // find:
// // returns the element which statisfies

// // findIndex:
// // returns the index of element which satisfies the condition.

// // const findCountrywith6letter = countries.findI(country=>country.length==6)
// // console.log(findCountrywith6letter);//Sweden

// // const findCountrywith6letterIndex = countries.findIndex(country=>country.length==6)
// // console.log(findCountrywith6letterIndex);//1

// // console.log(countries.findIndex(country=>country=="Norway"))

// // console.log(countries.findIndex(country=>country=="Russia"))

// // const twoArr=products.map(prodObj=>prodObj).filter(productInfo=>productInfo.price!=false)
// // console.log(twoArr)

// // const sumOfPrice = products.reduce((acc, cur) => {
// //   if (cur.price != false) {
// //    return acc+cur.price;
// // }
// // else
// // return acc
// // },0);
// // console.log(sumOfPrice);

// // function letterAndNumberStartsWith() {
// //   let arr = [];
// //   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //   for (let letter of letters) {
// //     let count = 0;

// //     for (let country of countries) {
// //       if (country.startsWith(letter)) {
// //         count++;
// //       }
// //     }
// //     arr.push({ letter: letter, count: count }); //dynamic value na lidhe
// //   }
// //   let maxCount = 0;
// //   let maxLetter;
// //   for (let eachLetter of arr) {
// //     console.log(eachLetter);
// //     if (eachLetter.count > maxCount) {
// //       maxCount = eachLetter.count;
// //       maxLetter = eachLetter.letter;
// //     } else if (eachLetter.count == maxCount) {
// //       maxLetter += eachLetter.letter;
// //     }
// //   }
// //   return maxLetter;
// // }

// // console.log(letterAndNumberStartsWith());
// // const arr = [{ name: "Dhruvi" }, { name: "Krishna" }, { name: "Gannu" }];
const countries_data = require("./countries_data");

// // countries_data.sort((a,b)=>{
// // //sort countries by name
// //     const countryA = a.name.toUpperCase();
// //     const countryB = b.name.toUpperCase();
// //     if(countryA<countryB)
// //     return 1;
// //     if(countryA>countryB)
// //     return -1;

// //     return 0;
// // });
// // console.log(countries_data)

// // countries_data.sort((a,b)=>{
// //     //sort countries by capital
// //         const countryA = a.capital?.toUpperCase();
// //         const countryB = b.capital?.toUpperCase();
// //         if(countryA<countryB)
// //         return 1;
// //         if(countryA>countryB)
// //         return -1;

// //         return 0;
// //     });
// //     console.log(countries_data.splice(countries_data.length-10))

// // const arr = [1,2,3,4,5,6]
// // console.log(arr.splice(3))

// // countries_data.sort((a,b)=>{
// //     //sort countries by population
// //         const countryA = a.population;
// //         const countryB = b.population;
// //         if(countryA<countryB)
// //         return -1;
// //         if(countryA>countryB)
// //         return 1;

// //         return 0;
// //     });
// //     console.log(countries_data)
function mostSpokenLanguages(data,n){
    let languagesKnown={};
for(country of data){
    let languageArr = country.languages;
    for(language of languageArr){
        if(languagesKnown[language]){
            languagesKnown[language]++;
        }
        else{
            languagesKnown[language]=1
        }
    }
}

let sortedLanguages = Object.entries(languagesKnown).sort((a,b)=>b[1]-a[1])
let result = sortedLanguages.map(([lang,count])=>({lang,count}))

const results = result.splice(0,n)
return results;
}
console.log(mostSpokenLanguages(countries_data,11))

// // *** Use countries_data.js file create a function which create the ten most populated countries

// // function mostPopulatedCountries(countries, n) {
// //   countries.sort((a, b) => {
// //     let populationOfA = a.population;
// //     let populationB = b.population;
// //     if (populationOfA > populationB) return -1;
// //     if (populationOfA < populationB) return 1;
// //     return 0;
// //   });

// //   let results = countries.splice(0,n)

// //   let finalResults= results.map((country)=>({country:country.name,population:country.population}))
// //   return finalResults;
// // }

// // console.log(mostPopulatedCountries(countries_data,10))

// const ages = [
//   31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
//   31, 34, 24, 33, 29, 26,
// ];

// ages.sort((a, b) => a - b);
// statistics = {
//   count: ages.length,
//   sum: () => {
//     let sum = 0;
//     for (let age of ages) {
//       sum += age;
//     }
//     return sum;
//   },
//   min: Math.min(...ages),
//   max: () => Math.max(...ages),
//   range: () => Math.max(...ages) - Math.min(...ages),
//   mean: () => {
//     let sum = 0;
//     for (let age of ages) {
//       sum += age;
//     }
//     return Math.round(sum / ages.length);
//   },
//   median: () => {
//     for (let age in ages) {
//       if (ages.length % 2 == 0) {
//         let index = ages.length / 2;
//         let sum = ages[index - 1] + ages[index];
//         return sum / 2;
//       } else {
//         let index = Math.floor(ages.length / 2);

//         return ages[index];
//       }
//     }
//   },

//   mode: () => {
//     let obj = {};
//     for (let age of ages) {
//       let count = 0;
//       if (obj[age]) {
//         obj[age]++;
//       } else {
//         obj[age] = 1;
//       }
//     }
//     let result = Object.entries(obj).sort((a, b) => b[1] - a[1]);
//     let finalResult = result.map(([mode, count]) => ({
//       mode: mode,
//       count: count,
//     }));

//     return finalResult[0];
//   },
// };

// // console.log("Count:", statistics.count); // 25
// // console.log("Sum: ", statistics.sum()); // 744
// // console.log("Min: ", statistics.min); // 24
// // console.log("Max: ", statistics.max()); // 38
// // console.log("Range: ", statistics.range()); // 14
// // console.log("Mean: ", statistics.mean()); // 30
// // console.log("Median: ", statistics.median()); // 29
// console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}


// let arr1 =[1,2,2,1]
// let arr2 =[1,2,2,1]
// arr1.splice(2,1,15,16,17)

// console.log(arr1);