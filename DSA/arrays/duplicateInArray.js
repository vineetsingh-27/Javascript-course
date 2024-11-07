let num = [1,2,2,8,2,8,9]

let res = num.filter((item,index,arr)=> arr.indexOf(item)!==index)
console.log(res);

// let str = "vineet singh";
// let obj = {};
// let count = 0;
// for (const key of num) {
//     if (obj[key]) {
//         obj[key] +=1 
//     }else{
//         obj[key] = 1
//     }
// }

// console.log(obj);
