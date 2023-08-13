// named iife 'Immediately Invoked Function Expression'
//IIFE is often used to create a private scope for variables and to avoid polluting the global namespace

(function chai(){
    console.log("Hello");
})();

//normal or unnamed iife
(() =>{
    console.log("World");
})()