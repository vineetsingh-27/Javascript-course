// const language = {
//     js : "javascript",
//     java : "java",
//     ruby : "ruby on rails",
//     swift : "swift"
// }

//! mostly will use it for object
// for (const item in language) {
//     console.log(language[item]);
// }


const myObj = {
    name: "John",
    age: 30,
    cars: [
        {
            name: "Ford",
            models: ["Fiesta", "Focus", "Mustang"]
        },
        {
            name: "BMW",
            models: ["320", "X3", "X5"]
        },
        {
            name: "Fiat",
            models: ["500", "Panda"]
        }
    ]
}

for (const i in myObj.cars) {
    console.log(myObj.cars[i].name);
    for (const j in myObj.cars) {
        console.log(myObj.cars[i].models);
    }
}