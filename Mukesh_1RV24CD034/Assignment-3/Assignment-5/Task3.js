const p1 = new Promise(res => setTimeout(() => res("User loaded"), 1000));
const p2 = new Promise((res, rej) => setTimeout(() => rej("Server error"), 2000));
const p3 = new Promise(res => setTimeout(() => res("Products loaded"), 3000));

Promise.allSettled([p1, p2, p3]).then(results => {
    results.forEach(r => {
        console.log(r.status, "-", r.value || r.reason);
    });
});