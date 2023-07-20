// const dog ={}
// console.log(dog)
// dog.name ="Moti";
// dog.legs=4;
// dog.color="brown";
// dog.age=5;
// dog.bark = function (){
//     return "woof woof"
// }
// console.log(dog)

// console.log(dog.bark())
// console.log(Object.values(dog))

// const copyDog = Object.assign(dog);//aa che ne obj ne copy obj bev ne ek sathe change kare
// const copyDog = JSON.parse(JSON.stringify(dog));//aa copy object ne change kare to obj change na thai
// console.log(copyDog)
// copyDog.breed="German Shephard";
// copyDog.color="black";
// copyDog.getDogInfo=function(){
//     return `${this.name} is a dog. It is ${this.color}`;
// }
// copyDog.bark=function barks(){
//     return "woofy"
// }
// console.log(dog.color)
// console.log(copyDog.color)
// console.log(dog.bark())
// console.log(copyDog.bark())

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let maxLen =0;
// let highSkilledUser=""
// for(let user in users){ //of is designed for iterable objects like array
// // console.log(user)/ ama names avse
//   if(users[user].skills.length>maxLen)
//  { maxLen = users[user].skills.length;
//   highSkilledUser=user;
//   }
// }
// // console.log(highSkilledUser)

// const arr =['d','h','r','u','v','i'];
// const obj = {name:"Dhruvi",age:21}
// for(let index in arr){//index
//   console.log(index)
// }

// for(let letter of arr){//key
//   console.log(letter)
// }
// for(let key in obj){//key obj ma undhu
//   console.log(key)
// }

// for(let key of obj){//error
//   console.log(key)
// }

// let numberOfLoggedInUser=0;
// let numberOfGreaterThan50Points=0

// for(user in users){
//   if(users[user].isLoggedIn==true)
//   numberOfLoggedInUser++;
//   if(users[user].points>=50)
//   numberOfGreaterThan50Points++;
// }

// console.log("Number of logged In Users are: ",numberOfLoggedInUser)
// console.log("Number of users having 50 or greate points are: ",numberOfGreaterThan50Points)

// let str = "";
// let mern = ["MongoDB", "Express", "React", "Node"];
// for (user in users) {
//   const includesAll = mern.every((skill) => users[user].skills.includes(skill));
//   //mern.every ekle marn ni agar har ek value users[user].skills ma included hoi to j true ape
//   if (includesAll) {
//     str += user + "\n";
//   }
// }
// console.log(str);

// let obj2 = {...users,Paul:{}}

// console.log(users)

// console.log(Object.keys(users))
// console.log(Object.values(users))

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// function signUp(newUser) {
//   const existingUser = users.find((user) => user.email === newUser.email);

//   if (existingUser) console.log("User already exists");
//   else {
//     users.push(newUser);
//     console.log("User added successfully!");
//     console.log(users);
//   }
// }

// console.log("///////////",users)

// const newUser = {
//   _id: "yr36gh",
//   username: "Dhruvi",
//   email: "dhruvi@dhruvi.com",
//   password: "123456",
//   createAt: Date().toString,
//   isLoggedIn: true,
// };

// signUp(newUser);

// function signIn(email){
// const existingUser = users.find(user=>user.email === email)
// if(existingUser){
//   existingUser.isLoggedIn=true;
//   console.log("User SignedIn successfully");
//   console.log(existingUser)
// }
// else{
//   console.log("User not found")
// }
// }

// signIn("alex@aleix.com")

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
function rateProduct(productId, userId, rate) {
  let existingUser = users.find((user) => user._id === userId); //agar user che ha to j tme agad ratings mate vadho nai to else ma jao
  if (existingUser) {
    let existingProduct = products.find((product) => product._id === productId); //agar ee product exist kare j che to j
    if (existingProduct) {
      if (existingProduct) {
        let ratingOfUserExists = existingProduct.ratings.find(
          //agar ee k user fari rating ape che to rating update karo
          (userRate) => userRate.userId === userId
        );

        if (ratingOfUserExists) {
          ratingOfUserExists.rate = rate;//aa je match thayu eni j rating update karse
        } else {
          existingProduct.ratings.push({ userId: userId, rate: rate }); //rating of user nathi exist kartu to push karo
        }
        console.log(existingProduct);
      }
    } else {
      console.log("Product not found!");
    }
  } else {
    console.log("User Not Found!");
  }
}

rateProduct("eedfcf", "zwf8md", 3.6);

// function averageRating() {
//   let totalAvgRate = 0;
//  let ratingArray=[]
//   for (product of products) {
//     let totalRate = 0;
//     for (rating of product.ratings) {
//       totalRate += rating.rate;
//     }
//     if (totalRate) totalAvgRate = totalRate / product.ratings.length;
//     else totalAvgRate = 0;
//    ratingArray.push({product:product.name, avgRate:totalAvgRate})
//   }
//   return ratingArray;
// }

// console.log(averageRating());

// function likeProduct(userId, productId) {
//   let existingUser = users.some((user) => user._id === userId);
//   if (existingUser) {
//     let existingProduct = products.find((product) => product._id === productId);
//     if (existingProduct) {
//       let existingLike = existingProduct.likes.find((like) => like === userId);

//       if (existingLike) {
//         let indexOfExistingUserLike =
//           existingProduct.likes.indexOf(existingLike);
//         existingProduct.likes.splice(indexOfExistingUserLike, 1);
//         return "dislike", existingProduct;
//       } else {
//         existingProduct.likes.push(userId);
//         return "like", existingProduct;
//       }
//     } else {
//       return "Product not found";
//     }
//   } else {
//     return "User Not Found";
//   }
// }

// console.log(likeProduct("zwf8md", "aegfal"));

// let popArr=["Hi","Hello","Bye"]
// let index = popArr.indexOf("Hello")
// popArr.splice(index,1)
// console.log(popArr)
