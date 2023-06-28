// function mock(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(xhr.responseText);
//       } else {
//         reject(new Error(xhr.statusText));
//       }
//     };
//     xhr.onerror=()=>{
//     reject(new Error("Network Error"))
//     };
//     xhr.send();
//   });
// }

// mock("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")

// function sumOfThreeElements() {
//   return new Promise((resolve, reject) => {
//     fetch("https://mki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
//       .then(resolve("Yes happy happy"))
//       .catch(reject("More happy"));
//   });

// }

// sumOfThreeElements().then((response) => console.log(response))
// .catch((err) => console.log(err));

// function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1");
// }

// getData()
//   .then((res) => res.json())

//   .then((data) => console.log(data));


// setTimeout(function(){console.log("Hello")},2000)


async function dhruvi (){
let delhiWeather =
new Promise((resolve,reject)=>{setTimeout(()=>resolve("31deg")),5000})


let bangloreWeather =
new Promise((resolve,reject)=>{setTimeout(()=>resolve("21deg")),15000})
console.log("Fethcing Banglore weather");
let bangloreW = await bangloreWeather;
console.log("Fetched Banglore weather Please Wait....")
console.log("Fetching Delhi Weather")
let delhiW = await delhiWeather;
return [bangloreW,delhiW]
}
let a =dhruvi();
console.log(a)