//! Lexical scope
// function init() {
//     let name = "Mozilla"; 

//     function displayName() {
        
//       console.log(name);

//     let surname = "singh"
//       function displaySurname() {
//         console.log(surname);
//     }

    
//     displaySurname();
//     }
    
    
//     displayName();
//   }
//   init();

// if (Math.random() > 0.5) {
//     let x = 1;
//   } else {
//     let x = 2;
//   }
//   console.log(x);
  
  
//! closure

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  