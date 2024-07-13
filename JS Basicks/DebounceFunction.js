function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

function sayHello() {
    console.log("Hello!");
}

let debouncedHello = debounce(sayHello, 2000);

// Calling the debounced function multiple times
debouncedHello();
debouncedHello();
debouncedHello();
// "Hello!" will be logged to the console only once, 2 seconds after the last call.
