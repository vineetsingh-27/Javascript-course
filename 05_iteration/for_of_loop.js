//for of loop

const car = ["BMW", "TATA", "AUDI"]

//mostly will use it for arrays
for (const i of car) {
    // console.log(i);
}

const person = {
    'name': 'Vineet',
    'surname': 'Singh',
    age: 24
}

for (const per of person) {
    // console.log(per);
}

for (const per in person) {
    // console.log(person[per]);
}

for (const name in car) {
    console.log(car[name]);
}