// Binary Search - First Occurrence
function binarySearchFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching in the left half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Example usage
const sortedArray1 = [2, 4, 4, 4, 6, 8, 10];
const target1 = 4;

const result1 = binarySearchFirstOccurrence(sortedArray1, target1);

if (result1 !== -1) {
    console.log(`First occurrence of target found at index ${result1}`);
} else {
    console.log('Target not found in the array');
}
