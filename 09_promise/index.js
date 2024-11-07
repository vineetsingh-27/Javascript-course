// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(() => {

// ?      first async task will complete
//         console.log('async task complete');

// ?      then resolve() will execute -> promise is consumed
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("promise consumed");
// })

//? another way 
// new Promise(function (resolve,reject) {
    
//     setTimeout(() => {
//         console.log("async task complete 2");
//     }, 1000);

//     resolve()
// }).then(function () {
//     console.log('promise consumed 2');
// })

//? another way
// const promiseThree = new Promise( function (resolve,reject) {
//     setTimeout(() => {
//         resolve({username : "vineet",email:'vineet@gmail.com'})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//? promiseFour
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = true
//         if (error) {
//             resolve({username : "vineet",email:"vineet@gmail.com"})
//         }else{
//             reject("Error: Something went wrong")
//         }
//     }, 1000);
// })

// promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then(function(username){
// console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log('error resolved or reject'))

//? promiseFive
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let ans = true
//         if(ans){
//             resolve({username: "Vineet",email:"vineet@gmail.com"});
//         }else{
//            reject("Error: Something went wrong")
//         }
//     },1000)
// })

// consumeFive = async (user) =>{
//     try {
//         const data = await promiseFive
//         const person = data.username
//         console.log(person);
//     } catch (error) {
//         console.log("Js error", error);
//     }
// }

// consumeFive()

// fetch

// async function getAllUser(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUser()

const fetchUserPost = () =>{
    fetch('https://jsonplaceholder.org/users')
    .then((response) => response.json())
    .then((data) => console.log(data[0].lastname))
    .catch((error) =>{
        console.log(error);
    })
}

// fetchUserPost()