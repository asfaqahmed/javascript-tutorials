function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

let testString = "A man, a plan, a canal, Panama";
console.log("'" + testString + "' is a palindrome: " + isPalindrome(testString));
