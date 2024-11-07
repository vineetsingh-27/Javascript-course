let num = 1231231222;
let numOcc = 2;
let count = 0;

while (num!=0) {
    let rem = num % 10;
    if (rem == numOcc) {
        count++;
    }
    num = Math.floor(num/10)
}

if (count == 0) {
    console.log("number not found");
}else{
    console.log(count);
    
}
