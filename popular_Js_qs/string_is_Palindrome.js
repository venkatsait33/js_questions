
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello')) // false