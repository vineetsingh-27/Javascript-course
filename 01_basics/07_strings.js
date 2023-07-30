let name = "Vineet"
let surname = "Singh"
// console.log(name + " " +  surname);

// Use this method for string [``]
// console.log(`My name is ${name} and my surname is ${surname}`)

// +++++++++++++++++++++++++++++++++++++++++
// String Methods

console.log(name.length)
console.log(name.slice(0,4))
console.log(name.replace("V", "T"))
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let word = "       My name is Vineet Singh           "
console.log(word.trim())

let newWord = "Captain America one oldest Marvel"
console.log(newWord.split(" "))
