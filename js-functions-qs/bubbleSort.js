function bubbleSort(arr) {
    // Outer loop to iterate through the entire array
    for (let i = 0; i < arr.length - 1; i++) {
        // Inner loop to compare adjacent elements
        for (let j = 0; j < arr.length - i - 1; j++) {
            // If the current element is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap the two elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    // Return the sorted array
    return arr;
}

const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr));

// {
//     ### ** Bubble Sort Explanation **

//         The`bubbleSort` function is an implementation of the Bubble Sort algorithm, which is used to sort an array of numbers in ascending order.

//             Here’s the function with detailed step - by - step explanations:

//     ```javascript
// function bubbleSort(arr) {
//     // Outer loop to iterate through the entire array
//     for (let i = 0; i < arr.length - 1; i++) {
//         // Inner loop to compare adjacent elements
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             // If the current element is greater than the next element
//             if (arr[j] > arr[j + 1]) {
//                 // Swap the two elements
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     // Return the sorted array
//     return arr;
// }
// ```

// ### ** Step - by - Step Explanation **

//         1. ** Outer Loop(`for (let i = 0; i < arr.length - 1; i++)`) **:
//     - The outer loop controls the number of passes through the array.
//    - Since after each pass the largest element "bubbles" to the end of the array, the outer loop reduces the number of comparisons by one with each pass.
//    - The condition `arr.length - 1` ensures that we stop before we have already sorted the array.

// 2. ** Inner Loop(`for (let j = 0; j < arr.length - i - 1; j++)`) **:
//     - The inner loop compares each pair of adjacent elements.
//    - The condition `arr.length - i - 1` ensures that the inner loop reduces the number of comparisons after each outer loop iteration because the last `i` elements are already sorted.
//    - The loop stops at`arr.length - i - 1`, effectively "ignoring" the last `i` elements which are in their correct positions.

// 3. ** Element Comparison(`if (arr[j] > arr[j + 1])`) **:
//     - The`if` statement checks if the current element(`arr[j]`) is greater than the next element(`arr[j + 1]`).
//    - If this condition is true, it means the elements are out of order, and they need to be swapped.

// 4. ** Swapping Elements(`[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]`) **:
//     - This line uses destructuring assignment to swap the two elements if they are out of order.
//    - After the swap, the larger number will have moved to the right, and the smaller one to the left.

// 5. ** Repeat Until Sorted **:
//     - The process of comparing and swapping continues until the array is sorted.After each complete pass, the largest unsorted element will be in its correct position.

// 6. ** Return the Sorted Array **:
//     - After all passes, the array is sorted in ascending order, and the function returns the sorted array.

// ### ** Example Walkthrough **

//         Let’s look at an example to see how the algorithm works.

// #### Example: Sorting`[5, 3, 8, 4, 2]`

//     1. ** First pass ** (`i = 0`):
//     - Compare`5` and`3`, swap → `[3, 5, 8, 4, 2]`
//         - Compare`5` and`8`, no swap → `[3, 5, 8, 4, 2]`
//             - Compare`8` and`4`, swap → `[3, 5, 4, 8, 2]`
//                 - Compare`8` and`2`, swap → `[3, 5, 4, 2, 8]`
//                     - After the first pass, the largest element `8` is in its correct position.

// 2. ** Second pass ** (`i = 1`):
//     - Compare`3` and`5`, no swap → `[3, 5, 4, 2, 8]`
//         - Compare`5` and`4`, swap → `[3, 4, 5, 2, 8]`
//             - Compare`5` and`2`, swap → `[3, 4, 2, 5, 8]`
//                 - After the second pass, `5` is in its correct position.

// 3. ** Third pass ** (`i = 2`):
//     - Compare`3` and`4`, no swap → `[3, 4, 2, 5, 8]`
//         - Compare`4` and`2`, swap → `[3, 2, 4, 5, 8]`
//             - After the third pass, `4` is in its correct position.

// 4. ** Fourth pass ** (`i = 3`):
//     - Compare`3` and`2`, swap → `[2, 3, 4, 5, 8]`
//         - After the fourth pass, `3` is in its correct position.

// 5. ** Final Sorted Array **:
//     - The array is now sorted: `[2, 3, 4, 5, 8]`.

// ### ** Time Complexity **
// - ** Best Case **: O(n) — When the array is already sorted, the algorithm will only need one pass through the array.
// - ** Average and Worst Case **: O(n²) — For an unsorted array, the algorithm performs a number of comparisons and swaps proportional to the square of the array size.

// ### ** Space Complexity **
// - ** Space Complexity **: O(1) — Bubble Sort is an in -place sorting algorithm, meaning it doesn’t require additional memory for sorting.

// ### ** Summary **
//             - Bubble Sort is a simple sorting algorithm but is inefficient for large datasets.
// - It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
// - While simple, it is not optimal for large datasets due to its O(n²) time complexity.
// }