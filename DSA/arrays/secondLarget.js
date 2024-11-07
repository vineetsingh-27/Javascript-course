let num = [11,3,55,44,23,9,6];

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length-i-1; j++) {
        if (num[j]>num[j+1]) {
            let temp = num[j];
            num[j] = num[j+1];
            num[j+1] = temp;
        }
    }
}

console.log(num);

console.log(num[num.length-2]);
