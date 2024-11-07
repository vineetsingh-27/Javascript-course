let num = [11,22,33,44,55];
let target = 44;

for (let i = 0; i < num.length; i++) {
    if (target == num[i]) {
        console.log(`target found at element ${i+1}`);       
    }    
}