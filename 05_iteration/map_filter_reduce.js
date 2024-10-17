const language = ["js", "java", "python", "swift"];

// const value = language.forEach( (item) =>{
//     console.log(item);
//     return item;
// })

// console.log(value);

//! ++++++ filter ++++++++++++
// if we specify scope '{}' then we have to use return keyword
// it checks for true or false then
// const values = language.filter((lng) => {
//     return lng
// })

// const values = language.filter( (lng) => (lng) )

// console.log(values);

// Using forEach loop to return
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = []
// myNums.forEach( (num) =>{
//     if (num > 5) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const book = books.filter( (bk) =>{
//     return bk.genre==="Non-Fiction" && bk.publish > 1980
//   })

//   console.log(book);

//!  +++++++++++++++ map +++++++++++++++
// operation is perform on map

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const myNewNums = myNums.map( (num) =>{
//     return num + 10
// })

// console.log(myNewNums);

// const myNewNums = myNums.
// map( (num) => num * 10).
// map( (num) => num + 1).
// filter( (num) => num > 41)

// console.log(myNewNums);

//! ++++++++++++ reduce ++++++++++++

// const num = [1,2,3,4]
// const result = num.reduce( (acc, currval) =>{
//     return acc + currval
// },0)

// console.log(result);

const shoppingCart = [
    {
        itemName: "js",
        price: 999,
    },
    {
        itemName: "py",
        price: 2999,
    },
    {
        itemName: "data science",
        price: 5999,
    },
];

const totalValue = shoppingCart.reduce((acc, item) => (acc + item.price), 0);

// console.log(totalValue);
