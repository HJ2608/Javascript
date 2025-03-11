const score = 400;

//console.log(score);

// js automatically detects that 400 is a number

//But we can manually add datatype number

const balance = new Number(100)
//console.log(balance);

//console.log(typeof(balance));

// is new method an object is being made that is of number so datatype of balance is object not number as it is in wrapper around primitve number

//console.log(balance.toString());
//console.log(typeof(balance));

//here toString() returns balance to primitive string (from Number : 100 to 100) but balance itself remains as object

//to convert it to pure string we have to reassign it to a new variable

//console.log(balance.toFixed(1));
// to Fixed gives figure upto 2 decimal numbers 

const otherNumber = 123.8966
//console.log(otherNumber.toFixed(3));
// to precision round off to nearest number

const hundred = 1000000

//console.log(hundred.toLocaleString('en-IN'));
//commas according to indian number system

//*****************Maths********* */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));


// console.log(Math.min(4,3,5,6));
// console.log(Math.max(4,3,5,6));

console.log(Math.random());

console.log(Math.floor((Math.random()*10))+1);//minimun value 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)))
