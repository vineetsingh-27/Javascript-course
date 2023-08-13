// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// const heros = ["Flash","Batman","Superman"]
// for (let i = 0; i < heros.length; i++) {
//     const element = heros[i];
//     console.log(element);
// }


//break
for (let i = 0; i <=10; i++) {
    if (i==5) {
        console.log("5 detected");
        break;
    }
    console.log(i);
}

//continue
for (let i = 0; i <=10; i++) {
    if (i==5) {
        console.log("5 detected");
        continue;
    }
    console.log(i);
}