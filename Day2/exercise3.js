string =
  "Love is the best thing in this world. Some found their love and some are still looking for their love .";
// let str = string.split(" ");
// console.log(str);
// let count=0
// str.map((word) => {
//   if (word == "love") {
//     count++;
//   }
// });
// console.log(count)
//count word love
console.log(string.match(/Love/gi).length)

//count word because

rhyme ='You cannot end a sentence with because because because is a conjunction'

console.log(rhyme.match(/because/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


const earn ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let money = earn.split(" ")
let add=[]
money.map((value)=>{
    
    if(typeof value=="number"){
        add.push(value)
     
    }
})
console.log(money)
console.log(add)


