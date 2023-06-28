// for(let i=10;i>0;i--){
// console.log(i)
// }
// let i=20
// while(i>0){
// console.log(i)
// i--;
// }

// do{
// console.log(i)
// i--;
// }while(i>0)

// for (i = 0; i < 7; i++) {
//   let str = "";
//   for (j = 0; j <= i; j++) {
//     str += "#";
//   }
//   console.log(str)
//   str = "";
// }

// for(i=0;i<=10;i++){
// console.log(i+" x "+i+" = "+i*i)

// }

// for(i=0;i<=10;i++){
//   console.log(i+"  "+i**2+"  "+i**3)
// }

// for (i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let isPrime = true;
// for (i = 2; i < 100; i++) {
//   let isPrime = true;
//   for (j = 2; j < i / 2; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log("Prime: ", i);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let sumEven = 0;
// let sumOdd = 0;
// for (i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   } else sumOdd += i;
// }

// console.log("Even sum: ", sumEven);
// console.log("Odd sum: ", sumOdd);
// console.log("[" + sumEven + " " + sumOdd + "]");

// let randomArray = [];
// let str = "#";
// for (i = 0; i <= 5; i++) {
//   randomArray.push(Math.floor(Math.random() * 36));
//   let alpha = "0123456789abcdefghijklmnopqrstuvwxyz";
//   console.log(randomArray[i])
//   str += alpha.charAt(randomArray[i]);
// }
// console.log(str);

// let str1 = "rgb(";
// let str2 = ")";
// for (i = 0; i <= 2; i++) {
//   str1 += Math.floor(Math.random() * 256);
//   for (j = i + 1; j <= 2; j++) {
//     str1 += ",";
//     break;
//   }
// }
// console.log(str1.concat(str2));

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const country2 = [];

// for (country of countries) {
//   country2.push(country.toUpperCase());
// }
// console.log(country2);

// const countryLength = [];
// for (country of country2) {
//   console.log(country);
//   countryLength.push(country.length);
// }
// console.log(countryLength);

// let miniArray=[];
// const bigArray=[];
// for(i=0;i<countries.length;i++){
// miniArray.push(countries[i],country2[i].slice(0,3),countryLength[i])
// bigArray.push(miniArray)
// miniArray=[]
// }
// console.log(bigArray)
// let landArr=[]

// for(i=0;i<countries.length;i++){
// if(countries[i].includes("land")){

// landArr.push(countries[i])
// }
// }
// if(landArr.length>0)
// console.log(landArr)
// else
// console.log("No country found")

// let endsWithIa=[]
// for(country of countries){
// if(country.endsWith("ia"))
// endsWithIa.push(country)
// }

// if(endsWithIa.length>0)
// console.log(endsWithIa)
// else
// console.log("No country found")
// let isBiggestNumber;
// let maxLength = 0;
// for (country of countries) {
//   if (country.length > maxLength) {
//     maxLength = country.length;
//     isBiggestNumber = country;
//   }
// }

// console.log(isBiggestNumber);

// let countryWith5Char = [];

// for (country of countries) {
//   if (country.length == 5) {
//     countryWith5Char.push(country);
//   }
// }
// console.log(countryWith5Char);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// let longTech;
// let maxLen =0
// for(tech of webTechs){
// if(tech.length>maxLen){
// maxLen = tech.length
// longTech = tech
// }
// }
// console.log(longTech)

// let miniArray=[];
// let wholearray=[];
// for(tech of webTechs){
// miniArray.push(tech,tech.length)
// wholearray.push(miniArray)
// miniArray=[]
// }
// console.log(wholearray)

const mernStack = ["MongoDB", "Express", "React", "Node"];

// let fruitArray = ["banana", "orange", "mango", "lemon"];
// let fruitArray2 = [];
// for (let i = fruitArray.length - 1; i >= 0; i--) {
//   fruitArray2.push(fruitArray[i]);
// }
// console.log(fruitArray2);

// const fullStack = [
//   ['HTML', 'CSS', 'JS', ['React','Rdux']],
//   ['Node', 'Express', 'MongoDB']
// ]

// console.log(fullStack.toString())

// const countriesArray =[...countries]
// countriesArray.sort()
// console.log(countriesArray)
// webTechs.sort();
// mernStack.sort();
// console.log(mernStack,webTechs)

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// let landCountry=[]
// for(country of countries){
// if(country.includes("land"))
// landCountry.push(country)
// }
// console.log(landCountry)

// let maxLen=0;
// let highCountry;
// for(country of countries){
// if(country.length>maxLen)
// {
// maxLen=country.length
// highCountry=country
// }
// }
// console.log(highCountry)

// let countryWith4Char=[];
// for(country of countries){
// if(country.length===4){
// countryWith4Char.push(country)
// }
// }
// console.log(countryWith4Char)

// let twoOrMoreWord=[];
// for(country of countries){
// if(country.includes(" "))
// twoOrMoreWord.push(country)
// }
// console.log(twoOrMoreWord)

countries.reverse();
countries2 = [];
for (country of countries) {
  countries2.push(country.toUpperCase());
}
console.log(countries);
