// both "" and '' are correct syntax

// concatinate with +

const name = "harshit"
const repiCount = 50


//console.log(name + repiCount + "hi");
// outdated syntax

//latest syntax ``

//console.log(`Hello my name ${name} is ${repiCount}`);

const gameName = new String("harshit");



console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newStringOne = "  harshit  "
console.log(newStringOne.trim());


const url =  "https://harshit.com/hitesh%20chaudhary"

console.log(url.replace('%20' , '-'))

console.log(url.includes('.com'));
