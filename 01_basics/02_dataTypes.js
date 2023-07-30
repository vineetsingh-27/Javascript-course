"use strict"; // treat all JS code as newer version

//  alert(3+3) // we are using nodejs, not browser

/**
 * DataTypes
 * number => 2 to power 53
 * bigint => for very large value [scientific calculation etc]
 * string => ""
 * null => standalone value
 * symbol => unique
 */ 

let name ="Vineet"
let age = 23
let isRaining = false
let salary
let company = null

console.log(typeof name); // string
console.log(typeof age);  // number
console.log(typeof isRaining); //boolean
console.log(typeof salary);  // undefined
console.log(typeof company); // object
