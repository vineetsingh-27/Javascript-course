let str = "aka"
let str2 = "";

function palindrome(str){
    for(let i = str.length-1;i>=0;i--){
        str2 += str[i];
    }
    if (str == str2) {
        console.log("Palindrome");
    }else{
        console.log("Not");
        
    }
}

palindrome(str)
