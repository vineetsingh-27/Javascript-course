let num1 = 0;
let num2 = 1;
let temp;

let op = 10;

console.log(num1);
console.log(num2);
for (let i = 2; i < op; i++) {
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    console.log(temp);
}

