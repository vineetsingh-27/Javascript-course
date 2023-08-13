const language = ["js","cpp","java","python","ruby"]

language.forEach(function (item) {
    // console.log(item);
});

// function printMe(item){
//     console.log(`item printed ${item}`);
// };

// language.forEach(printMe);

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

codingLanguage.forEach( (item) =>{
    console.log(item.languageFileName);
})