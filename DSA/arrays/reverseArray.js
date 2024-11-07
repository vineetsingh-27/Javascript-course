let num = [1,2,3,4,5];
let start = 0;
let end = num.length-1;

while (start<end) {
    let temp = num[start];
    num[start] = num[end];
    num[end] = temp;
    start++;
    end--;
}

console.log(num);


