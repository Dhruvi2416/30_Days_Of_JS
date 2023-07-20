// const pattern = /[a].+/g  // . any character, + any character one or more times
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{4}/g  // a number and exactly four digits
// const matches = txt.match(pattern)
// console.log(matches)  // ['2019']

// const txt = '6,  2019.'
// const pattern = /\d{0,4}/g   // 1 to 4
// const matches = txt.match(pattern)
// console.log(matches)  // ['6', '2019']

// let pattern = /^[A-Z][a-z]{3,12}$/;
// let name = 'Asabenehasah';
// let result = pattern.test(name)

// console.log(result) // true

// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// let sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
// let pattern =/\d.+/g;
// let result = sentence.match(pattern);
// console.log(result);
// let nums=0;
// for(let num of result){
//     nums+=parseFloat(num);
// }
// console.log(nums);

// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// points.sort((a,b)=>a-b)
// console.log(points[points.length-1]-points[0]);

// Write a pattern which identify if a string is a valid JavaScript variable

// function is_valid_variable(variable){
//     let pattern = /^[a-zA-Z_][a-zA-Z0-9_-]*$/
//     return pattern.test(variable)
// }

// console.log(is_valid_variable("first-Name"));

function tenMostFrequentWords(par,n) {
    par = par.replace(/[%@&;!#$?,.]/g,"")
 

  let para = par.split(" ");

  let countWords = {};
  for (let word of para) {
    if (countWords[word]) {
      countWords[word]++;
    } else {
      countWords[word] = 1;
    }
  }
  let sortWord = Object.entries(countWords).sort((a,b)=>b[1]-a[1])
  let result = sortWord.splice(0,n)
  let results = result.map(([word,count])=>({word:word,count:count}))
  return results;
}

console.log(
  tenMostFrequentWords(
    `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`,8
  )
);
