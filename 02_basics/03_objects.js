//singleton constructor se singleton bnta h 
//Object.create()


//object literals(not singleton)

const mySym = Symbol("key1")

const jsUser ={
    name:"Harshit",
    [mySym]:"mykey1",
    "full-name":"harshit Jain",
    age:23,
    location:"Ghazaibad",
    email:"harshitjain@gmial.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//keys are stored as string

//how to access
// JsUser.email
// JsUser["email"]


//console.log(jsUser[mySym]);
// for symbols to take as key syntax is to use [] around key 

jsUser.email = "harshit@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "harshit@microsoft.com"
//console.log(jsUser);
// freeze ke baad nhi hota print

jsUser.greeting = function(){
    console.log("Hello js user");
    
}

console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());