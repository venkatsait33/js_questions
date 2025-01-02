

// function mergingTwoStrings(str1, str2) {
//     let res = '';
//         let m;
//     for (let i = 0; i < str1.length && i < str2.length; i++){
//         res = res + str1[i] + str2[i];
//         m = i
//     }
//     while (m < str1.length || m < str2.length) {
//         if (m < str1.length && m !== str1.length) {
//             res = res + str1[m];
//             m++
//         } else {
//             res = res + str2[m];
//             m++
//         }
//     }
//     return res

// }

// console.log(mergingTwoStrings("hello", "world123"))

// function mergingTwoStrings(str1, str2) {
//     let res = '';
//     let i;

// Loop through both strings as long as both have characters at the same index
//     for (i = 0; i < str1.length && i < str2.length; i++) {
//         res += str1[i] + str2[i];
//     }

// Append the remaining characters of the longer string
//     if (i < str1.length) {
//         res += str1.slice(i);
//     } else if (i < str2.length) {
//         res += str2.slice(i);
//     }

//     return res;
// }

// console.log(mergingTwoStrings("hello", "world123")); // Output: "hweolrllod123"
//------------------------------------------------------------


// Here’s a function to check for vowels in a given input string.The function will identify all vowels(a, e, i, o, u both uppercase and lowercase) present in the input string and return them.

// function checkVowels(input) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']; // List of vowels
//     const foundVowels = new Set();
//     // Use a Set to store found vowels, ensuring no duplicate vowels are added.

//     for (let char of input.toLowerCase()) {
//         //Convert the input string to lowercase to handle both uppercase and lowercase vowels.
//         if (vowels.includes(char)) {
//             //Use the includes method on the vowels array to see if the character is a vowel.
//             foundVowels.add(char);
//         }
//     }

//     return Array.from(foundVowels); //Convert the Set to an array using Array.from and return it.
// }

// // Test the function
// console.log(checkVowels("hello")); // Output: [ 'e', 'o' ]
// console.log(checkVowels("JavaScript")); // Output: [ 'a', 'i' ]
// console.log(checkVowels("BCDFG")); // Output: []

//------------------------------------------------------------------

//Here’s a function to count the number of repeated values in the input, which can be a string or a number:

// function countRepeatedValues(input) {
//     const str = input.toString();
//     // Convert input to string for uniform processing
//     const frequency = {};
//     // Object to track character frequency
//     let repeatedCount = 0;

//     // Count the frequency of each character
//     for (let char of str) {
//         frequency[char] = (frequency[char] || 0) + 1;
//     }

//     // Count how many characters are repeated
//     for (let key in frequency) {
//         if (frequency[key] > 1) {
//             repeatedCount++;
//         }
//     }

//     return repeatedCount;
// }

// // Test the function
// console.log(countRepeatedValues("hello")); // Output: 2 (e, l)
// console.log(countRepeatedValues(112233));  // Output: 3 (1, 2, 3)
// console.log(countRepeatedValues("abcd"));  // Output: 0


//------------------------------------


function sum(a, b) {
    if (b !== undefined) {
        // Direct call: sum(1, 2)
        //If both a and b are provided (b !== undefined), the function directly computes the sum and returns it:
        return a + b;
    } else {
        // Curried call: sum(2)(3)
        //If only a is provided and b is undefined, the function returns another function that takes b as its argument. This allows for currying:
        return function (b) {
            return a + b;
        };
    }
}

// Test cases
console.log(sum(1, 2));   // Output: 3
console.log(sum(2)(3));   // Output: 5
console.log(sum(2)); // Output: [Function (anonymous)]
