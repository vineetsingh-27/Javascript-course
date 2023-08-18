// Singleton Object
// const tinderUser = new Object()
// console.log(tinderUser);

//Object literal
const tinderUser = {
name:"Vineet",
surname:"Singh",
age:23
}

// console.log(tinderUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {... obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// Object destructuring
const course = {
    courseName : "Js in hindi",
    courseInstructor : "hitesh",
    price : "999"
}

// const {courseName} = course
// console.log(courseName);


const car = {
    brand : "Tata",
    year : 2019,
    mileage : 18
}

const {brand,year,mileage} = car

console.log(year);