//array

const array = [1, 2, 3, 4]

//console.log(array[0]);
//copy operation in array in js create a shallow copy not a deep copy

const myHeros = ['shaktiman','maagraj']

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1])

//Array Methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()

//myArr2.unshift(0)//insert element at start not recommended if large array as sara element ka index change hoga
//myArr2.shift()

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(2));

// const newArr = myArr2.join()

// console.log(myArr2);
// console.log(typeof(newArr));



//slice, aplice

console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3)

console.log(myn1)
console.log("B ", myArr2);

const myn2 = myArr2.splice(1,3)
console.log('C ', myArr2);

console.log(myn2)

// splice manipulat original array 
//slice don't 

