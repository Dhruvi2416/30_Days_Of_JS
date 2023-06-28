const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,24];
console.log(ages.sort()); //sorts array
console.log(ages);

if(ages.length%2==0){
const median1 = ages[(ages.length)/2];
const median2 = ages[((ages.length)/2)-1]
console.log("Two medians are :", median1 , median2)
}
else {
console.log(ages[(ages.length-1)/2])
}
let total =0
ages.map((age)=> total+=age)
console.log(total)