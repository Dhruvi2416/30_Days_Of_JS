let str1 = "Mary";
let str2 = "Army";

str1 = str1.toLowerCase().split("").sort().join("");
str2 = str2.toLowerCase().split("").sort().join("");
console.log(str1,str2)
if (str1 == str2) {
  console.log("Yes Anagram!");
} else {
  console.log("No!, not an anagram!");
}
