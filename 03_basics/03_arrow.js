// const user = {
//     username : "vineet",
//     age : 23,
//     greet : function () {
//         console.log(this.username);
//         console.log(this);
//     }
// }

// user.greet()
// user.username = "aman"
// user.greet()

// this doesn't work in function

// function chai() {
//     let username = "vineet"
//     console.log(this.username);
// }

// let chai = function(){
//     let username = "vineet"
//     console.log(this.username);
// }

// let chai = () => {
//     let username = "vineet"
//     console.log(this.username);
// }

// chai()

//+++++++++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++++++++
/**
 * Syntax for arrow function
 * () =>{
 * arrow function
 * }
 */
// let addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

/**
 * if we use '()' then don't have to use return keyword
 */
let addTwoNum = (num1, num2) => (num1 + num2)

console.log(addTwoNum(5,5))