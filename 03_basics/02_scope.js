//var c = 300
let a = 300

// scope is {} when used with if else , for , functions

if (true) {
    let a = 10
    const b = 20
    c = 30
    //console.log(`INNER ${a}`);
    
}



//console.log(a)
//console.log(b);
//console.log(c);



function one(){
    const username = "harshit"

    function two(){
        const websites = "youtube"
        console.log(username);
        
    }

    //console.log(websites);
    two()
    
}
//one()

if(true){
    const username = "harshit"
    if(username ==="harshit"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}

//console.log(username);


//*************************intersting********************** */

console.log(addone(5))
function addone(num){
    return num + 1
}

console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}





