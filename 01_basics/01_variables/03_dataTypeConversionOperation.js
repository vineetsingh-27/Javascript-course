let score = false

// console.log(score);
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

/** someDataType to Number
 * "10" => 10
 * "Hitesh" => NaN [Not A Number]
 * true => 1; false => 0
 */

let someString = null
let valueInBoolean = Boolean(someString)
// console.log(typeof valueInBoolean)
// console.log(valueInBoolean)

/** someDataType to Boolean
 * "Hitesh" => true
 * "" => false
 * undefined => false
 * null => false
 */

let name = null
let valueInString = String(name)
// console.log(valueInString);
// console.log(typeof valueInString);

/** someDataType to string
 * 1 => "1"
 * true => "true", false => "false"
 * undefined => "undefined"
 * null => "null"
 */



// ******************* Operations ************************
let greet = "Hello"
let names = "Vineet"
// console.log(greet + " " + names)

// console.log("1" + 1) // if string is in starting then everything will be considered in string
// console.log(1 + 1 + "1") // if number operation in starting then will to operation and then add string
// console.log(1 + "1" + 1) // if string is found anywhere then will convert it into string accordingly

// prefix and postfix operator

let x = 1
console.log(++x);
console.log(x++);
console.log(x);

