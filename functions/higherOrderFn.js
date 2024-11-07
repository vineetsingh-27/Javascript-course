// const mathOperation = (x,y,operation)=>{
//     return operation(x,y)
// }

// const add = (x,y) =>{
//     return x+y;
// }

// console.log(mathOperation(5,5,add));


// Higher-order function that returns a function
const createAdditionFunction = () => {
    return (x, y) => x + y;
}

// Call the higher-order function to get the addition function
const add1 = createAdditionFunction();

// Use the returned function to add two numbers
console.log(add1(3, 7)); // Output: 10



//!Higher order function
function operation(x, y, add) {
    return add(x, y)
}

const add = (x, y) => {
    return x + y
}

console.log(operation(5, 5, add));
