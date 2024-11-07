// Armstrong number  -> 153 ka cube 153 hi aega
let num = 153;
let rem;
let res = 0;
function armstrong(num){
    let original_num = num;
    while(original_num!=0){
        rem = original_num % 10
        res += Math.pow(rem,3)
        original_num = Math.floor(original_num/10)
    }

    if (num == res) {
        console.log("Armstrong");
    }else{
        console.log("Not an armstrong");
    }
}

armstrong(num)
