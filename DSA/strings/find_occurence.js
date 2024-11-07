let str = "vineet singh";
let obj = {};
for (const key of str) {
   if (obj[key]) {
    obj[key] +=1
   }else{
    obj[key] = 1
   }
}

for (const elem in obj) {
   console.log(elem);
   
}

console.log(obj);
