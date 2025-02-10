function frequencyCount(arr) {
    const freq = {};  // Initialize an empty object to store the frequencies of elements
    for (const item of arr) {  // Loop through each element in the input array
        freq[item] = (freq[item] || 0) + 1;  // Increment the count for the element in the 'freq' object
    }
    return freq;  // Return the object containing the frequency counts
}

const arr = [1, 2, 3, 2, 1, 3, 4, 5, 4, 4, 4, 4, 4];
//['a', 'b', 'a', 'c', 'b', 'a']
console.log(frequencyCount(arr));  // Output: { '1': 2, '2': 2, '3': 2, '4': 6, '5': 1 }
//{ a: 3, b: 2, c: 1 }


// {
//     The `frequencyCount` function is used to count the occurrences(frequency) of each element in an array and return an object where the keys are the unique elements, and the values are the number of times each element appears in the array.

// ### ** Code Explanation **

//         ```javascript
// function frequencyCount(arr) {
//     const freq = {};  // Initialize an empty object to store the frequencies of elements
//     for (const item of arr) {  // Loop through each element in the input array
//         freq[item] = (freq[item] || 0) + 1;  // Increment the count for the element in the 'freq' object
//     }
//     return freq;  // Return the object containing the frequency counts
// }
// ```

// ### ** Step - by - Step Explanation **

//         1. ** Initialization of the Frequency Object **:
//     ```javascript
//    const freq = {};
//    ```
//         - We create an empty object `freq` which will hold the frequency of each element from the array as key - value pairs.The keys will be the unique elements of the array, and the values will be the count of how many times each element appears.

// 2. ** Iterating Over the Array **:
//     ```javascript
//    for (const item of arr) {
//    ```
//         - We use a `for...of` loop to iterate over each element(`item`) in the array`arr`.

// 3. ** Counting the Frequency of Each Element **:
//     ```javascript
//    freq[item] = (freq[item] || 0) + 1;
//    ```
//         - For each`item` in the array, we check if the item already exists as a key in the`freq` object:
//     - If`freq[item]` exists, it means that the element has already been encountered in the array, so we increment its count by 1.
//         - If`freq[item]` does not exist, it means this is the first time we have encountered this element, so we initialize its count as `0` and then increment it by 1.
//             - The expression `(freq[item] || 0)` is a shorthand for checking if `freq[item]` is`undefined`(meaning the item is not yet in the object).If it is`undefined`, we use`0` as the default value.

// 4. ** Returning the Frequency Object **:
//     ```javascript
//    return freq;
//    ```
//         - After the loop finishes, we return the`freq` object, which now contains the frequency counts of all unique elements in the array.

// ### ** Example Walkthrough **

//         Let's walk through an example to understand the behavior:

// #### Example 1: Counting Frequencies of`[1, 2, 2, 3, 3, 3, 4]`

//     1. Initialize`freq = {}`.
// 2. ** Iterate through the array **:
//     - For`item = 1`: `freq[1] = (freq[1] || 0) + 1` → `freq[1] = 1`.
//    - For`item = 2`: `freq[2] = (freq[2] || 0) + 1` → `freq[2] = 1`.
//    - For`item = 2`: `freq[2] = (freq[2] || 0) + 1` → `freq[2] = 2`.
//    - For`item = 3`: `freq[3] = (freq[3] || 0) + 1` → `freq[3] = 1`.
//    - For`item = 3`: `freq[3] = (freq[3] || 0) + 1` → `freq[3] = 2`.
//    - For`item = 3`: `freq[3] = (freq[3] || 0) + 1` → `freq[3] = 3`.
//    - For`item = 4`: `freq[4] = (freq[4] || 0) + 1` → `freq[4] = 1`.

// 3. The final `freq` object is:
//     ```javascript
//    { 1: 1, 2: 2, 3: 3, 4: 1 }
//    ```

// #### Example 2: Counting Frequencies of`['a', 'b', 'a', 'c', 'b', 'a']`

//     1. Initialize`freq = {}`.
// 2. ** Iterate through the array **:
//     - For`item = 'a'`: `freq['a'] = (freq['a'] || 0) + 1` → `freq['a'] = 1`.
//    - For`item = 'b'`: `freq['b'] = (freq['b'] || 0) + 1` → `freq['b'] = 1`.
//    - For`item = 'a'`: `freq['a'] = (freq['a'] || 0) + 1` → `freq['a'] = 2`.
//    - For`item = 'c'`: `freq['c'] = (freq['c'] || 0) + 1` → `freq['c'] = 1`.
//    - For`item = 'b'`: `freq['b'] = (freq['b'] || 0) + 1` → `freq['b'] = 2`.
//    - For`item = 'a'`: `freq['a'] = (freq['a'] || 0) + 1` → `freq['a'] = 3`.

// 3. The final `freq` object is:
//     ```javascript
//    { 'a': 3, 'b': 2, 'c': 1 }
//    ```

// ### ** Time Complexity **
//         - The function iterates through each element of the array exactly once.For each element, the object lookup and update operations(`freq[item]`) take constant time, O(1). 
// - Therefore, the time complexity of the function is ** O(n) **, where`n` is the number of elements in the input array.

// ### ** Space Complexity **
//         - The space complexity is ** O(k) **, where`k` is the number of unique elements in the array, because the `freq` object will store a key - value pair for each unique element in the array.

// ### ** Summary **
//         - The`frequencyCount` function counts the occurrences of each element in an array and returns an object with the frequency counts.
// - It uses a `for...of` loop to iterate over the array and a simple conditional to update the frequency in the object.
// - The time complexity is O(n), making it efficient for counting elements in an array.
// }