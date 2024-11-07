let num = [1,2,3,4,5];

let res = num.reduce((preVal,curVal) =>{
    return preVal+curVal
},0)

let avg = res / num.length;

console.log(avg);

