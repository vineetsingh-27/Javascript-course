let num = [10,22,3,14,5,66];
let max = num[0];
let min = num[0];
for(let i = 1;i<num.length;i++){
    if(num[i] > max){
        max = num[i]
    }

    if (num[i] < min) {
        min = num[i]
    }
}
console.log(`max: ${max}`); 
console.log(`min: ${min}`); 