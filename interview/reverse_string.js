let name = "vineet";
let name2 = "";

function reverse(name){
    for(let i = name.length-1;i>=0;i--){
        name2 += name[i];
    }
    console.log(name2);
}

reverse(name)
