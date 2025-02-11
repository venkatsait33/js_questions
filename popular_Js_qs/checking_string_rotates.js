
function areRotations(str1, str2) {
    if (str1.length !== str2.length) return false;

    return (str1 + str2).includes(str2);
}

console.log(areRotations("abcd", "dbca")); // true


//     ### ** Checking if Two Strings are Rotations of Each Other **

//         To determine if two strings are rotations of each other, we use a simple trick:

// ### ** Concept Explanation **
//         - If one string is a rotation of the other, it will always appear as a ** substring ** within the original string concatenated with itself.
// - Example:
//     - `"abcd"` rotated can be: `"bcda"`, `"cdab"`, `"dabc"`
//         - `"abcdabcd"` contains all its possible rotations:
//     `"abcdabcd"` → contains`"cdab"`, `"bcda"`, `"dabc"`

//     Thus, checking if `str2` is a ** substring ** of`str1 + str1` is enough to confirm rotation.

// ---

// ### ** Code Explanation **
//         ```javascript
// function areRotations(str1, str2) {
//     // Step 1: Check if both strings have the same length
//     if (str1.length !== str2.length) return false;
    
//     // Step 2: Check if str2 is a substring of str1 concatenated with itself
//     return (str1 + str1).includes(str2);
// }

// // Example usage:
// console.log(areRotations("abcd", "cdab")); // Output: true
// console.log(areRotations("abcd", "acbd")); // Output: false
// ```

//     ---

// ### ** Step - by - Step Execution **
// #### ** Case 1: "abcd" & "cdab" **
//         1. Check length: `"abcd".length === "cdab".length` ✅ (4 == 4)
//     2. Concatenate `str1` with itself: `"abcd" + "abcd" = "abcdabcd"`
//     3. Check if `"cdab"` is a substring of `"abcdabcd"`: ✅ `true`

// #### ** Case 2: "abcd" & "acbd" **
//         1. Check length: `"abcd".length === "acbd".length` ✅ (4 == 4)
//     2. Concatenate `str1` with itself: `"abcdabcd"`
//     3. Check if `"acbd"` is a substring of `"abcdabcd"`: ❌ `false`

//     ---

// ### ** Time Complexity Analysis **
//         - `str1 + str1` takes ** O(N) ** time.
// - `.includes(str2)` takes ** O(N) ** in the worst case.
//     - Overall time complexity: ** O(N) **.

// This method is efficient and does not require additional data structures.

// ✅ ** Best approach for checking string rotations! ** 🚀
