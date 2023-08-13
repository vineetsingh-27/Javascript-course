//Global scope
let a = 10
const b = 20
var c = 30

{
    //block scope
    let a = 100
    const b = 200
    var c = 300

    // console.log("inside: ",a);
    // console.log("inside: ",b);
    // console.log("inside: ",c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "vineet"

//     function two() {
//         const media = "youtube"
//         console.log(username);
//     }
//     two()
// }
// one()


//Here we can use function before declaration
console.log(one(5))

function one(num) {
    return num + 1   
}


//here we cannot use function before declaration
two(5)

const two = function(num) {
    return num + 1
}
