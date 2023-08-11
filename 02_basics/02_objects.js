// Singleton Object
//

//Object literal
const JsUser = {
    name : "Vineet",
    surname : "Singh",
    age : 23,
    car : ["Tata","Mahindra"]
}

console.log(JsUser["name"]);
console.log(JsUser["age"]);
console.log(JsUser["car"][1]);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting());