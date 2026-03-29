let count = 0;

const interval = setInterval(() => {
    console.log("Tick...");
    count++;

    if (count === 5) {
        clearInterval(interval);
        console.log("Stopped!");
    }
}, 1000);