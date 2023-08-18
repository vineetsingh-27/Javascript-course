// Singleton Object

//Object literal
const JsUser = {
    name : "Vineet",
    surname : "Singh",
    age : 23,
    car : ["Tata","Mahindra"],
    greet : ()=>{
        console.log("Hello JS User");
    }
}

// console.log(JsUser["name"]);
// console.log(JsUser["age"]);
// console.log(JsUser["car"][1]);
// console.log(JsUser.car[1]);
// JsUser.greet()

// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }

// console.log(JsUser.greeting());

const car = {
    brand : 'tata',
    year : 2019
}
console.log(car);

const newCar = car
newCar.brand = "Mahindra"
console.log(car);
console.log(newCar);