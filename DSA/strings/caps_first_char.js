let name = "vineet singh";
let new_name = "";
for(let i = 0;i<name.length;i++){
    if(i == 0){
        new_name += name[0].toUpperCase();
    }else if (name[i] == " ") {
        new_name += " ";
        new_name += name[i+1].toUpperCase();
        i++;
    }else{
        new_name+=name.charAt(i);
    }
}

console.log(new_name);
