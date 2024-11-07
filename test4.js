// Promise.resolve(3)
// .then((res)=>{
//     console.log(res)
//     // return res;
// })
// .catch()
// .then()
// .then((res)=>{
//     console.log(res)
// })


// function outer(){
//     var b = 2
//  function inner(){
//      b++;
//      console.log(b);
//     //  var b = 3;
//  }
//  inner();
// }
// outer();


// function chai(tea,milk,makeTea){
//     console.log(tea+ " " + milk);
//     makeTea()
// }

// function makeTea(){
//     console.log("Tea made");
// }

// chai("society", "gokul",makeTea)

// function add(x,y,sum){
//     return sum(x,y)
// }

// function sum(x,y){
//     return x+y
// }

// console.log(add(5,4,sum));


// const check = () =>{
//     let res = setInterval(()=>{
//         console.log("Hello");
//     },5000)

//     clearInterval(res)
// }


// check()

// let str = "vineet dinesh singh"
// let obj = {}

// for (const elem of str) {
    // if (obj[elem]) {
    //     obj[elem] += 1
    // }else{
    //     obj[elem] = 1
    // }
// }

// console.log(obj);

// const person = {}

// person["v"] = 1

// console.log(person);


// let str = "vineet singh";
// let obj = {};
// for (const key of str) {
//    if (obj[key]) {
//     obj[key] +=1
//    }else{
//     obj[key] = 1
//    }
// }

// for (const elem in obj) {
// //    console.log(`${elem} : ${obj[elem]}`);

//    if (obj[elem] == 2) {
//     console.log(`${elem} : ${obj[elem]}`);
//     break
//    }
// }

// console.log(obj);

let arr = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 7];
let duplicates = [];
let seen = new Set();

for (let num of arr) {
    if (seen.has(num)) {
        if (!duplicates.includes(num)) {
            duplicates.push(num);
        }
    } else {
        seen.add(num);
    }
}

console.log("Duplicates:", duplicates); // Output: [3, 2, 7]





