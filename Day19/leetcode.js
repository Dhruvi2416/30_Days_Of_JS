// function subarraySum(arr, n, s)

// {
// //your code here
// let left =0;
// let sum=arr[0];
// let totalSum=s;
// let i=0;
// while(left<=i){

//  if(sum+arr[i+1]<=totalSum){
//     sum+=arr[i+1];
//         i++;
//     }
//     else {
//       sum-=arr[left];
//       left++;

//     }

//        if (sum==totalSum){
//     return [++left,++i];
// }
// }

// return [-1];
// }

// console.log(subarraySum([1,15],2,15));

// // let str = "142 112 54 69 148 45 63 158 38 60 124 142 130 179 117 36 191 43 89 107 41 143 65 49 47 6 91 130 171 151 7 102 194 149 30 24 85 155 157 41 167 177 132 109 145 40 27 124 138 139 119 83 130 142 34 116 40 59 105 131 178 107 74 187 22 146 125 73 71 30 178 174 98 113"
// // let str1 = str.split(" ")

// // let str3 = str1.join(",")
// // console.log(str3);

function tower(arr, k) {
  let arr1 = [];
  for (let num of arr) {
    if (num - k > 0) {
      num -= k;
    } else {
      num += k;
    }
    arr1.push(num);
  }
  arr1.sort((a, b) => a - b);
  return arr1[arr1.length - 1] - arr1[0];
}

console.log(tower([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 5));
