const userEmail = []

// if (userEmail.length==0) {
//     console.log("Got an email");
// }else{
//     console.log("Don't have an email");
// }

// falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined [fallback]

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Ternary operator
//  condition ? true : false

const iceTeaPrice = 100
// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")