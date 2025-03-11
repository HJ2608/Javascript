// high order array loops

//[{},{},{}]
//["","",""]


// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
    
// }

// const greetings = "Hello World"

// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
    
// }

//Map

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('FR',"France")// map only take unique values

//console.log(map);


for(const [key, value] of map){
    console.log(key, ':-', value);
}

