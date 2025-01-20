function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;  // Initialize search bounds
    while (left <= right) {                // Continue until the search bounds are valid
        const mid = Math.floor((left + right) / 2);  // Calculate the middle index
        if (arr[mid] === target) return mid;  // If target is found, return the index
        else if (arr[mid] < target) left = mid + 1;  // If target is larger, search in the right half
        else right = mid - 1;  // If target is smaller, search in the left half
    }
    return -1;  // Return -1 if the target is not found
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5));  // Output: 4


// {
//     ### ** Binary Search Explanation **

//         The`binarySearch` function is an efficient algorithm to search for a target value in a ** sorted array **.It works by repeatedly dividing the search interval in half, reducing the search space and finding the target more quickly compared to a linear search.Here's an in-depth explanation of the code:

//             ```javascript
// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;  // Initialize search bounds
//     while (left <= right) {                // Continue until the search bounds are valid
//         const mid = Math.floor((left + right) / 2);  // Calculate the middle index
//         if (arr[mid] === target) return mid;  // If target is found, return the index
//         else if (arr[mid] < target) left = mid + 1;  // If target is larger, search in the right half
//         else right = mid - 1;  // If target is smaller, search in the left half
//     }
//     return -1;  // Return -1 if the target is not found
// }
// ```

// ### ** Step - by - Step Explanation **

//         1. ** Initialize Boundaries **:
//     ```javascript
//    let left = 0, right = arr.length - 1;
//    ```
//         - The`left` variable points to the start of the array, and`right` points to the end of the array.
//    - These variables represent the current range in which we are searching for the target.

// 2. ** While Loop **:
//     ```javascript
//    while (left <= right) {
//    ```
//         - The search continues as long as the `left` pointer is less than or equal to the `right` pointer.This means there's still a valid range in the array to search.

//     3. ** Calculate Middle Index **:
//     ```javascript
//    const mid = Math.floor((left + right) / 2);
//    ```
//         - The`mid` index is calculated as the floor of the average of `left` and`right`.
//    - This is the middle point of the current search range.

// 4. ** Check if Target is Found **:
//     ```javascript
//    if (arr[mid] === target) return mid;
//    ```
//         - If the value at `arr[mid]` is equal to the`target`, the target has been found, and we return the index `mid` where the target is located.

// 5. ** Adjust the Left or Right Bound **:
//     - If the target is greater than the value at`arr[mid]`, we know that the target must be in the ** right half ** of the array.So we adjust the `left` pointer:
//     ```javascript
//      else if (arr[mid] < target) left = mid + 1;
//      ```
//         - If the target is smaller than`arr[mid]`, we know the target must be in the ** left half ** of the array.So we adjust the `right` pointer:
//     ```javascript
//      else right = mid - 1;
//      ```

//     6. ** Target Not Found **:
//     ```javascript
//    return -1;
//    ```
//         - If the while loop ends without finding the target, it means the target is not present in the array.In that case, the function returns `-1`, indicating that the target is not found.

// ### ** Example Walkthrough **

//         Let’s take an example to walk through the algorithm.

// #### Example 1: Searching for `5` in the array`[1, 3, 5, 7, 9, 11]`

//     1. ** Initial Boundaries **: `left = 0`, `right = 5`(the indices of the first and last elements of the array).
// 2. ** First Iteration **:
//     - `mid = Math.floor((0 + 5) / 2) = 2`
//         - `arr[mid] = arr[2] = 5`
//         - Since`arr[mid] === target`, the function returns `mid = 2`.
   
//    The target `5` is found at index`2`.

// #### Example 2: Searching for `6` in the array`[1, 3, 5, 7, 9, 11]`

//     1. ** Initial Boundaries **: `left = 0`, `right = 5`.
// 2. ** First Iteration **:
//     - `mid = Math.floor((0 + 5) / 2) = 2`
//         - `arr[mid] = arr[2] = 5`
//         - Since`arr[mid] < target`, we adjust`left = mid + 1 = 3`(search in the right half).
// 3. ** Second Iteration **:
//     - `mid = Math.floor((3 + 5) / 2) = 4`
//         - `arr[mid] = arr[4] = 9`
//         - Since`arr[mid] > target`, we adjust`right = mid - 1 = 3`(search in the left half).
// 4. ** Third Iteration **:
//     - `mid = Math.floor((3 + 3) / 2) = 3`
//         - `arr[mid] = arr[3] = 7`
//         - Since`arr[mid] > target`, we adjust`right = mid - 1 = 2`.
// 5. Now `left = 3` and`right = 2`, so the while loop terminates.

//    The target `6` is not found, so the function returns `-1`.

// ### ** Time Complexity **
// - ** Best Case **: O(1) — When the target is found at the middle of the array in the first comparison.
// - ** Average and Worst Case **: O(log n) — The algorithm reduces the search space by half in each step, leading to logarithmic time complexity.

// ### ** Space Complexity **
// - ** Space Complexity **: O(1) — The algorithm uses a constant amount of space, as it only stores a few variables(`left`, `right`, `mid`), regardless of the input array size.

// ### ** Summary **
//         - Binary Search is an efficient algorithm for searching in a ** sorted array **.
// - It works by repeatedly dividing the search range in half, making it much faster than linear search(O(n)).
// - However, it requires the array to be sorted to work correctly.
// }