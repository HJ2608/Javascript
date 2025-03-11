const userEmail = ""

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("Don't have use email");
    
}

//falsey value

//false, 0, -0, BigInt 0n, "", null, undefined,Nan

//truthy value
//"0", 'false'," ",[],{}, function(){}

if(userEmail.length===0){
    console.log("array is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");  
}

//nullish coelescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

//condition ? true : false
