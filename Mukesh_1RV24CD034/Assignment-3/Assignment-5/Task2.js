const p1 = new Promise(res => setTimeout(() => res("User loaded"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Orders loaded"), 2000));
const p3 = new Promise(res => setTimeout(() => res("Products loaded"), 3000));

Promise.race([p1, p2, p3]).then(result => {
    console.log("Winner:", result);
});