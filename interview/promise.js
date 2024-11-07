const promise = new Promise((resolve, reject) => {
    let success = false; // Change this to false to see the other outcome

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected due to an error.");
    }
});

promise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("This is always executed.");
    });