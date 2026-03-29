let num = 5;

const countdown = setInterval(() => {
    console.log(num);
    num--;

    if (num < 0) {
        console.log("Time's up!");
        clearInterval(countdown);
    }
}, 1000);