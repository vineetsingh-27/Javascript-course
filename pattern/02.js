// for (let i = 1; i <= 4; i++) {
//     let row = ""; // Initialize an empty string for each row
//     for (let j = 1; j <= i; j++) {
//         row += j + " "; // Append numbers to the row
//     }
//     console.log(row.trim()); // Print the row, trimming any trailing space
// }

let result = "";
for(let i = 1;i<=5;i++){
    result += i + " ";
}

console.log(result.trim());
