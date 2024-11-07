function processNumber(num,callback){
    const result = num *2;
    callback(result)
}

const logResult = (result) =>{
    console.log("Result ",result);
    
}


processNumber(15,logResult);
