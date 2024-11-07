// Factor means number can be divided and remainder return 0

let num = 9;
for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}