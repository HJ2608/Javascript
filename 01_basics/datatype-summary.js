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

console.log(typeof id)
// null ka typeof object
// function ka return function
