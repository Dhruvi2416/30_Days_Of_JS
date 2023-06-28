const arr =[[1,[2],[3,4,5]],[3,4],[5,6]]
const arr1 = [].concat(...arr)
const arr2 = [].concat(...arr1)
console.log(arr2)
// const arr2=arr.flat()
// console.log(arr2)
// // console.log(arr2)
const arr3 = arr2.flatMap(x=>x*2)
// console.log(arr3)
let mul =2;
for(x=0;x<arr1.length;x++){
    mul*=x
console.log(mul)
mul=2
}

