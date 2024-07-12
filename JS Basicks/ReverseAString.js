function reverseString(str) {
    return str.split("").reverse().join("");
}

let originalString = "hello";
console.log("The reverse of " + originalString + " is " + reverseString(originalString));
