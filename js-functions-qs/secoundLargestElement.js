function secondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1];
}
const arr = [4, 1, 4, 2, 3];
console.log(secondLargest(arr));  

// {
//     Here's an explanation of the `secondLargest` function, which finds the second largest element in an array:

//     ---

// ### ** Function Definition **
//         ```javascript
// function secondLargest(arr) {
//     const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
//     return uniqueSorted[1];
// }
// ```

// ### ** Step - by - Step Explanation **
//         1. ** Remove Duplicates **:
//     - `new Set(arr)`:
//     - The`Set` object automatically removes duplicate values from an array.
//      - For example:
//     ```javascript
//        const arr = [5, 3, 1, 3, 5];
//        console.log(new Set(arr)); // Set { 5, 3, 1 }
//        ```
//         - `[...new Set(arr)]`:
//     - This converts the `Set` back into an array.
//      - Example:
//     ```javascript
//        const unique = [...new Set(arr)];
//        console.log(unique); // [5, 3, 1]
//        ```

//     2. ** Sort in Descending Order **:
//     - `.sort((a, b) => b - a)`:
//     - The`sort` function is used to arrange the numbers in descending order(`b - a` ensures that larger numbers come first).
//      - Example:
//     ```javascript
//        const sorted = [5, 3, 1].sort((a, b) => b - a);
//        console.log(sorted); // [5, 3, 1]
//        ```

//     3. ** Access the Second Largest Element **:
//     - `uniqueSorted[1]`:
//     - After sorting, the largest number is at index`0`, and the second largest is at index`1`.
//      - Example:
//     ```javascript
//        const uniqueSorted = [5, 3, 1];
//        console.log(uniqueSorted[1]); // 3
//        ```

// ### ** Example Usage **
//         ```javascript
// const arr = [4, 1, 4, 2, 3];
// console.log(secondLargest(arr)); // Output: 3
// ```

//         ** Explanation **:
//     1. Remove duplicates: `[4, 1, 2, 3]`.
// 2. Sort in descending order: `[4, 3, 2, 1]`.
// 3. Second largest is at index `1`: `3`.

// ---

// ### ** Edge Cases **
//         1. ** If the array has fewer than 2 unique numbers **:
//     ```javascript
//    const arr = [5, 5];
//    console.log(secondLargest(arr)); // Output: undefined
//    ```
//         - Reason: After removing duplicates, there's only one unique number.

//     2. ** If the array is empty **:
//     ```javascript
//    const arr = [];
//    console.log(secondLargest(arr)); // Output: undefined
//    ```

//     ---

// ### ** Why This Approach Works **
//         - Removing duplicates ensures that we only consider unique values.
// - Sorting ensures that the numbers are in order, making it easy to access the second largest element.

// This function is concise and takes care of handling duplicate values, making it effective for the given problem.
// }