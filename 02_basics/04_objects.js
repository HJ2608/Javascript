//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Harry"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "harshit",
        lastname:"jain"
    }
}

//console.log(regularUser.fullname);


const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"a", 4:"b"}

//const obj3 = { obj1 , obj2} //instead of this

//const obj3 = Object.assign({}, obj1,obj2)
// {} is taken as an empty object and all other act as source and merged into it if not given fisrt object would be taken as target

const obj3 = {...obj1, ...obj2}

//console.log(obj3);


const user = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// // return an array of keys 

// console.log(Object.values(tinderUser));
// //same with values

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInsttuctor: "harshit"
}

//course.courseInsttuctor

const {courseInsttuctor} = course

//console.log(courseInsttuctor);
//this is called object destructure as we created a const of one property of object for easier access


//this is also destructuring
// const navbar  = ({company}) => {

// }

// navbar(company = "harshit")


// {
//     name : "harshit"
// ,
// coursename:"youtube",
// cost:"free
// "}


