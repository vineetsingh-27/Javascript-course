// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

let x = function addTwoNum(num1,num2 = 5){
    // let result = num1 + num2
    // console.log(result);

    // converting false to true
    if (!num1) {
        num1 = 6
    }

    return num1 + num2
}


// let ans = addTwoNum(10,20)
// console.log(x());


//Rest operator
function calculateCartTotal(...item){
    return item
}

// console.log(calculateCartTotal(100,200,300));

// Use Object inside function

// const user = {
//     username : "Vineet",
//     age : 23
// }

function handleUser(anyObject){
    console.log(`username is ${anyObject.username} and my age is ${anyObject.age}`);
}

// handleUser(user)

// Directly passing object inside function
// handleUser({
//     username : "vineet",
//     age : 23
// })

const myArray = [100,200,300,400]

function handleArray(getArray){
    return getArray[2]
}

console.log(handleArray(myArray))