console.log(1);
const stopMe = setTimeout(() =>{
    console.log(2);
},0)

clearTimeout(stopMe)



console.log(3);