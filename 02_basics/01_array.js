const marvel_heros = ["Thor","Iron man","Spiderman"];
const dc_heros = ["Batman","Aquaman","Superman"];

// spread operator[...array]
const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

//flat operator [multiple nested array to form single level array]

const myArr = [1,2,3,[4,5,6],7,[6,7,[4,5,6]]]
const newArray = myArr.flat(Infinity);
console.log(newArray);