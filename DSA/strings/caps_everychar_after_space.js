let name = "vineet dinesh singh"
let name2 = "";
for(let i = 0;i<name.length;i++){
    if(i == 0){
        name2 += name[0].toUpperCase();
    }else if(name[i] == " "){
        name2 += " " + name[i+1].toUpperCase()
        i++;
    }else{
        name2 +=name[i]
    }
}

console.log(name2);
