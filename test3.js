// console.log(console.log("Hello"))

// console.log(" " + true);
// console.log("Hello" - true);

// console.log("5" + true);
// console.log(5 + true);

// console.log(console.log("Hello"));


// let a;
// console.log(a);
// a = 10;

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(null === undefined);
// console.log(null == undefined);

// console.log(!!"");
// console.log(!!"Hello");

// var x = 1;
// function foo() {
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// foo();

// console.log([] == 0);
// console.log([] == false);
// console.log([1] == [1]);

// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);
// console.log(arr);


// console.log([] == []);


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise created");
    }, 0);

    const num = 9;

    if (num > 10) {
        console.log("Value is greater than 10");
        resolve("Success: Number is greater than 10");
    } else {
        console.log("Value is less than or equal to 10");
        reject("Error: Number is less than or equal to 10");
    }
})
.then((message) => console.log("Promise consumed:", message))
.catch((error) => console.log(error));