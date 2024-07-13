function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

let sortedArray = [1, 3, 5, 7, 9, 11, 13];
let targetValue = 7;
let index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
    console.log("Target value " + targetValue + " found at index " + index);
} else {
    console.log("Target value " + targetValue + " not found in the array.");
}
