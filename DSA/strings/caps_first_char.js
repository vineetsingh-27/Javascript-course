let name = "vineet singh";
let new_name = "";
for(let i = 0;i<name.length;i++){
    if(i === 0){
        new_name += name[0].toUpperCase();
    }else{
        new_name+=name.charAt(i);
    }
}

console.log(new_name);
