// Panlindrome 
// Ex1 :- aba <-> aba 
// Ex2 :- otto <-> otto 

let word1 = "otto";
let word2 = "";

for(let i = word1.length-1; i>=0;i--){
    word2 += word1.charAt(i);
}
if (word1 == word2) {
    console.log("Palindrome");
}else{
    console.log("Not a palindrome");
} 