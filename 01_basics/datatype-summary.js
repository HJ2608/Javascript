// two datatypes PRIMITIVE and NON PRIMITIVE(non reference)

//PRIMITIVE

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference type(Non primitive)

// Arrays, Objects, Functions

// Javascript mei datatype define krne ki zarurat nhi h hence it is dynamically types language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);
 

//Arrays
const heros = ["krish", "shaktiman"]

//Object
let obj = {
    name:"Harshit",
    age:23,
}

const myFunction = function(){
    console.log("hello world");
    
}

//console.log(typeof id)
// null ka typeof object
// function ka return function




// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory
// Stack(Primitive) and Heap(Non-Primitive)

let myYoutubeName = "hj"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);
// dono ke andar alag value as copy banti h 

let user = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = user
userTwo.email = "abc"
console.log(user);
console.log(userTwo);
// dono ke andar same value as heap mei reference milta h and dono same value ko point krte h


