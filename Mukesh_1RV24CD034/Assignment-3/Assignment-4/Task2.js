let success = true;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});

myPromise
    .then(result => {
        console.log("Step 1 - Got result:", result);
        return result.toUpperCase();
    })
    .then(upper => {
        console.log("Step 2 - Uppercased:", upper);
        return "Done: " + upper;
    })
    .then(final => {
        console.log("Step 3 - Final:", final);
    })
    .catch(err => console.log(err));