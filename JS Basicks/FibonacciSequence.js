function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let number = 10;
console.log("Fibonacci sequence up to " + number + ":");
for (let i = 0; i <= number; i++) {
    console.log(fibonacci(i));
}
