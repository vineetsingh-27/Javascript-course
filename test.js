// let x = 10;
// console.log(x);
// {
//     let x = 20;
//     console.log(x);
// }
//  x = 30;
//  console.log(x);

// let x = 10
// function myName(x) {
//     x = '203'
//     console.log(x);
// }

// myName(x)

// const arr = [1,2,3,4];
// // const arr2 = arr.join(",");
// // console.log(arr2);


// const arr3 = [5,6,7,8];
// const arr4 = [1,2,3,4];
// const arr5 = arr4.concat(arr3);

// console.log(arr5);

// const arr1 = [1,2,3,4]
// const arr2 = arr1.slice(1,3);

// console.log(arr1);
// console.log(arr2);

// const arr1 = [1,2,3,4,5]
// const arr2 = arr1.splice(0,3);

// console.log(arr1);
// console.log(arr2);

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9];


// const person = {
//     name : "vineet",
//     age : 23,
//     salary : 25000,
//     greet : function(){
//         console.log("greet");
//     },

//     morning : () =>{
//         console.log("Good morning");
//     }
// }

// person.location = "mumbai";

// delete person;
// console.log(person);

// console.log(person.name);
// console.log(person['name']);
// console.log(person.greet());
// console.log(person.morning());

// for(i in person){
//     console.log(person[i]);
// }

// const vehicle = {
//     car1: {
//         name: 'tata',
//         price: 500000,
//         bike: {
//             name: 'yamaha',
//             price: 50000
//         }
//     }
// }

// console.log(vehicle?.car.name);
// console.log(vehicle.car1?.bike.name);

// const car_arr = [
//     car1 = {
//         name: 'Tata',
//         price: '500000',
//         bike: {
//             name: 'Yamaha',
//             price: 50000,
//             salary: [50000, 60000, 70000],
//             age: [
//                 age1 = {
//                     myage: 25,
//                     your_age: 30
//                 }
//             ]
//         }
//     },
//     car2 = {
//         name: 'Mahindra',
//         price: '500000',
//         bike: {
//             name: 'Honda',
//             price: 50000,
//             salary: [50000, 60000, 70000],
//             age: [
//                 age1 = {
//                     myage: 25,
//                     your_age: 30
//                 }
//             ]
//         }
//     }
// ]

// console.log(car_arr[1].bike.name);

// for(i in car_arr){
//     console.log(car_arr[i].name);
// }

// for (let i = 0; i <= car_arr.length - 1; i++) {
//     // console.log(car_arr[i].name);
// }

// const obj1 = {
//     firstname : 'vineet',
//     lastname : 'singh',
//     age : 23,
//     fullname : function(){
//         console.log(`My name is ${this.firstname} ${this.lastname} and my age is ${this.age}`);
//     },
//     salary : () =>{
//         console.log(25000);
//     }
// }

// console.log(obj1.fullname());
// console.log(obj1.salary());

// const {firstname,lastname,age} = obj1

// console.log(`${firstname} and ${lastname}`);

// function Person(firstname,lastname,age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.fullname = function(){
//         console.log(this.firstname,this.lastname,this.age);
//     }
// }

// const p1 = new Person('vineet','singh',23)
// const p2 = new Person('tanmay','singh',24)

// console.log(p1.fullname());
// console.log(p2.fullname());

// function add(a,b){
//     if(typeof a === 'number' && typeof b === 'number'){
//         return a+b;
//     }else{
//         return 'error'
//     }
// }

// console.log(add(10,null));

// function userLoggedIn(username){
//     if(!username){
//         return `aman just logged in`
//     }else{
//         return `${username} just logged in`
//     }
// }

// console.log(userLoggedIn('vineet'));



// function calculateCartTotal(...items) {
//     let sum = 0;
//     for(let i = 0;i<items.length;i++){
//         sum +=items[i]
//     }
//     return sum;
// }

// console.log(calculateCartTotal(100, 200, 300));



// const myArray = [100,200,300,400]

// const x = function returnSecondVal(anyArray){
//     return anyArray[1]
// }

// // console.log(x(myArray));


// const x1 = () =>{
//     return "Arrow fn"
// }

// console.log(x1())


// function one(){
//     const username = "vineet";

//     console.log("one");
//     function two(username){
//         console.log(`User name is ${username}`);
//     }

//     two(username)
// }

// one()


x = 5;
var x;
// console.log(x);

// a = 10;
let a;
// console.log(a);

// b = 20;
// const b;
// console.log(b);

// x1()

// function add(){
//     console.log(this);
// }

// add()


// let arr = () =>{
//     console.log(this);
// }

// arr()

// (function chai(){
//     console.log('iife');
// })();



// let obj2 = {
//     username : 'vineet',
//     arr : () =>{
//         console.log(this);
//     }
// }

// obj2.arr()

const arr = ["aman","vikas","rahul","vipul"]

const nums = [1,2,3,4,5]

// const res = nums
//             .map((val) => (val * 10))
//             .map((val) => (val + 1))
//             .filter((val) => (val > 30))

// console.log(res);
const initialVal = 1
const res = nums.reduce((preval, curval) => (preval + curval), initialVal)
console.log(initialVal);

console.log(res);
