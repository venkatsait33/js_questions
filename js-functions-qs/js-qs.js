These are all common JavaScript string and algorithm questions for technical interviews. Here are the answers with explanations for a fresher:

---

### 1. **Reverse a String in Place**
```js
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
```
**Explanation:**  
- `split('')` converts the string into an array of characters.
- `reverse()` reverses the array.
- `join('')` joins the reversed array back into a string.

---

### 2. **Print Duplicate Characters from a String**
```js
function findDuplicates(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let key in charCount) {
        if (charCount[key] > 1) {
            console.log(`${key} appears ${charCount[key]} times`);
        }
    }
}
findDuplicates("programming");
```
**Explanation:**  
- We use a hash map (`charCount`) to store the frequency of characters.
- Then we iterate through the map and print characters that appear more than once.

---

### 3. **Check if Two Strings are Anagrams**
```js
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams("listen", "silent")); // Output: true
```
**Explanation:**  
- Convert strings to arrays, sort them, and compare.

---

### 4. **Find All Permutations of a String**
```js
function permute(str, prefix = "") {
    if (str.length === 0) console.log(prefix);
    for (let i = 0; i < str.length; i++) {
        permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
    }
}
permute("abc");
```
**Explanation:**  
- Uses recursion to generate permutations by swapping characters.

---

### 5. **Check if a String Contains Only Digits**
```js
function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // Output: true
console.log(isNumeric("123a"));  // Output: false
```
**Explanation:**  
- Uses a regular expression (`/^\d+$/`) to check if the string contains only digits.

---

### 6. **Find Duplicate Characters in a String**
(Same as Question 2)

---

### 7. **Count Vowels and Consonants in a String**
```js
function countVowelsConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0, consonantCount = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            vowels.includes(char) ? vowelCount++ : consonantCount++;
        }
    }
    return { vowelCount, consonantCount };
}
console.log(countVowelsConsonants("hello"));
```

---

### 8. **Count the Occurrence of a Given Character**
```js
function countOccurrences(str, char) {
    return str.split(char).length - 1;
}
console.log(countOccurrences("hello", "l")); // Output: 2
```

---

### 9. **Print the First Non-Repeated Character**
```js
function firstNonRepeatedChar(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }
    return null;
}
console.log(firstNonRepeatedChar("swiss")); // Output: "w"
```

---

### 10. **Convert a String to an Integer (Like `atoi`)**
```js
function strToInt(str) {
    return parseInt(str, 10);
}
console.log(strToInt("1234")); // Output: 1234
```

---

### 11. **Reverse Words in a Sentence Without Using Library Methods**
```js
function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
    return reversed.join(" ");
}
console.log(reverseWords("Hello World")); // Output: "World Hello"
```

---

### 12. **Check if Two Strings are Rotations of Each Other**
```js
function areRotations(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}
console.log(areRotations("abcde", "cdeab")); // Output: true
```

---

### 13. **Check if a String is a Palindrome**
```js
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); // Output: true
```

---

### 14. **Find the Longest Substring Without Repeating Characters**
```js
function longestUniqueSubstring(str) {
    let seen = new Set(), left = 0, maxLength = 0;
    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left++]);
        }
        seen.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
console.log(longestUniqueSubstring("abcabcbb")); // Output: 3
```

---

### 15. **Find the Longest Palindrome Substring**
```js
function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
    let start = 0, maxLength = 1;
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(s, i, i); // Odd length
        expandAroundCenter(s, i, i + 1); // Even length
    }
    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }
    return s.substring(start, start + maxLength);
}
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
```

---

### 16. **Convert a Byte Array to String**
```js
function byteArrayToString(byteArray) {
    return String.fromCharCode(...byteArray);
}
console.log(byteArrayToString([72, 101, 108, 108, 111])); // Output: "Hello"
```

---

### 17. **Remove a Given Character from a String**
```js
function removeChar(str, char) {
    return str.split(char).join('');
}
console.log(removeChar("hello", "l")); // Output: "heo"
```

---

### 18. **Find the Maximum Occurring Character**
```js
function maxOccurringChar(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return Object.keys(charCount).reduce((a, b) => charCount[a] > charCount[b] ? a : b);
}
console.log(maxOccurringChar("hello world")); // Output: "l"
```

---

### 19. **Check for a Prime Number**
```js
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true
```

---

Would you like these answers in a PDF file?
