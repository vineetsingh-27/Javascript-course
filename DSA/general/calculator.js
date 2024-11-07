let op = ["+","-","*","/"];
let num1 = 10;
let num2 = 3;
let res;

op.forEach((item)=>{
    switch (item) {
        case "+":
            res = num1 + num2;
            console.log(res);
            break;
            case "-":
            res = num1 - num2;
            console.log(res);
            break;
            case "*":
            res = num1 * num2;
            console.log(res);
            break;
            case "/":
            res = num1 / num2;
            console.log(res);
            break;
        default:
            console.log("enter valid number");
    }  
})