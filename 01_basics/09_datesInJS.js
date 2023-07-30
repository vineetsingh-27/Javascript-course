let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getMonth());
let newDate1 = new Date('2023-08-27')
console.log(newDate1.toLocaleString('default',{
    month : "long",
    weekday : "long"
}));