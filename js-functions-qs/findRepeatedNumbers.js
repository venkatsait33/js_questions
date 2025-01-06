// Here’s a simple step - by - step version of the function to find repeated numbers in an array:

// function findRepeatedNumbers(arr) {
//     const counts = {}; // To store how many times each number appears
//     const result = []; // To store the repeated numbers

//     // Step 1: Count occurrences of each number
//     for (const num of arr) {
//         if (counts[num]) {
//             counts[num]++; // Increment count if number is already in counts
//         } else {
//             counts[num] = 1; // Set count to 1 if it's the first time
//         }
//     }

//     // Step 2: Collect numbers with more than 1 occurrence
//     for (const num in counts) {
//         if (counts[num] > 1) {
//             result.push(Number(num)); // Add the number to the result
//         }
//     }

//     return result; // Return the repeated numbers
// }

// // Example usage
// const arr = [1, 2, 3, 4, 5, 2, 3, 4];
// console.log(findRepeatedNumbers(arr)); // Output: [2, 3, 4]

// Create counts object: Use it to store how many times each number appears in the array.
// Count each number: Loop through the array and update counts for each number.
// Check for repeated numbers: Loop through counts and find numbers that appear more than once.
// Store repeated numbers: Add the repeated numbers to the result array.
// Return the result: Return the array of repeated numbers.


