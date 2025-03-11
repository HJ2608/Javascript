function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 +number2);
// }

function addTwoNumbers(number1, number2){
    let reuslt = number1+number2
    return reuslt
}

const result = addTwoNumbers(3,5)

//console.log("Result:  ", result);


// unsername === undefined is equal to !username

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("harshit"))


//rest operator same as spread meaning ...
//so ...num1 gives me an array

//200 goes to val1, 400 goes to val2 and 500 reamains in ...num
function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username:"harshit",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 400 , 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))