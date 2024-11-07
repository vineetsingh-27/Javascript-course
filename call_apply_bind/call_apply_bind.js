let person1 = {
    name : "Vineet",
    surname: "Singh"
}

let person2 = {
    name : "Aman",
    surname: "Verma"
}

// function borrowing
let getDetails = function(hometown){
    console.log(this.name , " " , this.surname , " from " , hometown);
}

//? call
// getDetails.call(person1,["Mumbai"])
// getDetails.call(person2)


//? apply
// getDetails.apply(person1,["Mumbai"])
// getDetails.apply(person2,["Thane"])


//? bind
// let personDetails = getDetails.bind(person1,"Mumbai")
// personDetails()