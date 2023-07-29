const accountId = 101
let accountEmail = "vineet@gmail.com"
var accountName = "Vineet"
accountState = "Maharashtra"

//if variable does not have value then it is [not defined] 
var pincode;

console.log(accountId)
// cannot reassign constant variable
// accountId = 102
// console.log(accountId)

accountEmail = "admin@gmail.com"
console.log(accountEmail);

accountName = "Aman"
console.log(accountName);

console.table([accountId,accountEmail,accountName,accountState,pincode]);



//-------Let keyword----------

let name = "Aman"

// can reassign
name = "Akash"

//cannot redeclare
// let name = "Prafull"

//Must be declared before use
let salary
console.log(salary);

console.log(name);


let num1 = 10
console.log("num1 " + num1);
{
    let num1 = 20
    console.log("num1 " + num1);
}

console.log("num1 " + num1);


//-----const keyword------

const a = 10

// const cannot redeclare
//const a = 20

//a = 20
//const cannot be reassign
console.log("a " + a);

{
    const a = 20
    console.log("a " + a);
}

console.log("a " +a);