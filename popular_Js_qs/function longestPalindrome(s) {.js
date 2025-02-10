function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0, maxLength = 1; // Track the start index and max length of the palindrome

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(s, i, i);   // Check for odd-length palindromes
        expandAroundCenter(s, i, i + 1); // Check for even-length palindromes
    }

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) { // Update maxLength if a longer palindrome is found
                start = left;
                maxLength = right - left + 1;
            }
            left--;  // Expand leftward
            right++; // Expand rightward
        }
    }

    return s.substring(start, start + maxLength);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"
