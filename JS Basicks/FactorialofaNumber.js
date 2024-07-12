function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

let number = 5;
console.log("The factorial of " + number + " is " + factorial(number));
