const car = ["Tata", "Mahindra","Audi","BMW"];
for (const element of car) {
    // console.log(element);
}


// let name = "Vineet";
// for (const element of name) {
//     console.log(element);   
// }

for (const key in car) {
    // console.log(car[key]);
}

function printMe(item){
    console.log(item);
}

// car.forEach(printMe)


const codingLanguage = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"   
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

codingLanguage.forEach((item)=>{
    console.log(item.languageFileName);
    
})