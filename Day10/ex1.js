// //Create an empty set

// const set = new Set();
// console.log(set)//Set(0) {}
// for(i=0;i<=10;i++){
//     set.add(i)
// }
// console.log(set)//Set(11){0,1,2,3,4,...10}
// set.delete(0)
// console.log(set)//Set(10){1,2,3,4,...10}
// set.clear()
// console.log(set)//Set(0) {}

// const arr=["Dhruvi","loves","JavaScript","and","React"]
// const set1 = new Set(arr);
// console.log(set1);

// const countries = ['Finland', 'Sweden', 'Norway']
// const map = new Map();
// for(country of countries){
//     map.set(country,country.length);
// }
// console.log(map)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const A = new Set(a);
const B = new Set(b);
const c =[...a,...b];
const C = new Set(c);
console.log(c)

//Find a intersection b

// const intersection = a.filter((num)=>B.has(num))
// console.log(intersection);

const countries_data = require("./countries_data");
// const langArr=[];

// for(country of countries_data){
//     const languages = country.languages;

//     for(let language of languages){
//         langArr.push(language)
//     }
// }

// const languages=new Set(langArr);

// console.log(languages);

// *** Use the countries data to find the 10 most spoken languages:

//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]

// function mostSpokenLanguages(countries, n) {
//   let languageSpoken = {}; //ahia me khali object rakhyu jethi ama Language:count ave
//   //ahia languages dynamic che ekle [] use karyu che array nai lidhi languageSpoken ma bcoz ama kai avse ee value khbr nthi plus inc kemnu karavanu
//   for (let country of countries) {
//     let languages = country.languages; //aa ek array che
//     for (let language of languages) {
//       if (languageSpoken[language]) {
//         //agar object ma aa language che
//         languageSpoken[language]++; //to eni count vadhoro
//       } else {
//         languageSpoken[language] = 1; //nai to initialize karo 1 thi
//       }
//     }
//   }
//   let sortedLanguages = Object.entries(languageSpoken).sort(
//     (a, b) => b[1] - a[1]
//   ); //sort kri count na based pr desc ma
//   let firstNthLanguagesSpoken = sortedLanguages(0, n); //jekla joita hta ekla j lidha
//   let results = firstNthLanguagesSpoken.map((eachLang) => ({
//     language: eachLang[0],
//     count: eachLang[1],
//   })); //aa format ma joitu htu ekle
//   // let finalResults = results.map(result=>new Set(Object.values(result)))
//   return results;
// }

// console.log(mostSpokenLanguages(countries_data, 20));
