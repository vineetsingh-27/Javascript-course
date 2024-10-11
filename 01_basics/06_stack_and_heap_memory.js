// Stack (Primitive), Heap(Non-primitive)

/**
 * here primitive datatype gives us copy of that value
 * hence changing the value of old variable with new variable won't affect
 **/

let myName = "Vineet"
let myNewName = myName

myNewName = "Aman"

console.log(myName, 'old');
console.log(myNewName, 'new');

/**
 * here non-primitive datatype gives us reference of that value
 * hence changing the value of old variable with new variable will takes place
 */

const hero = ["Captain", "IronMan","SpiderMan"]
const newAgeHero = hero
newAgeHero[0] = "Hanuman"

console.log(newAgeHero);
console.log(hero);
