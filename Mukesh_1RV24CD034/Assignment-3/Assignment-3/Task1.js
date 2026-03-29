function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot Divide With 0!");
    }
    return a / b;
}

try {
    console.log("Result:", divide(20, 5));
    console.log("Result:", divide(40, 0));
} catch (error) {
    console.log("Error:", error.message);
}