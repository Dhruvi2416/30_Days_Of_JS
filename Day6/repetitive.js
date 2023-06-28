let str = "ilive";
str = str.replace(/ /g, "").toLowerCase();

let repititve_char = [];
let substr = "";
for (let i = 0; i < str.length; i++) {
  if (substr.includes(str.charAt(i))) {
    repititve_char.push(substr);
    substr = "";
  }
  substr += str[i];
}
if (substr) repititve_char.push(substr);

console.log(repititve_char);
