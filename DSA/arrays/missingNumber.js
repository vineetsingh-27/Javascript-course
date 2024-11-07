let num = [1, 2, 3, 5];
let numLength = num.length;

let res = num.reduce((preval,curval)=>{
    return preval + curval;
},0)

// console.log(res);
let expectedSum = ((numLength + 1) * (numLength + 2)) / 2;

// Missing number is the difference between expected sum and actual sum
let missingNumber = expectedSum - res;

console.log(`Missing number is: ${missingNumber}`);