const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)

// //concat return a new array so create a new array
// console.log(allHeros);


const allNewHeros = [...marvel_heros,...dc_heros]
//console.log(allNewHeros);

//... is the spread operator as it creates indidvidual elements of an array

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)


console.log(real_another_array);


console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit"))//create it into an array

console.log(Array.from({name:"harshit"}));// result is empty array we have to tell kiska array banana keys or values

let score1 = 100
let score2 = 200
let score3 =300

console.log(Array.of(score1,score2,score3));

