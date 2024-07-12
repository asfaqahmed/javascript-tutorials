function mapArray(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = mapArray(numbers, function(x) {
    return x * x;
});

console.log("Squared numbers: " + squaredNumbers.join(", "));
