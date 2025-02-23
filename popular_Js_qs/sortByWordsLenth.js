function sortByLongestWords(words) {
    // Sort the array by word length in ascending order
    return words.sort((a, b) => b.length - a.length);
}

// Example usage:
let wordsArray = ["apple", "banana", "kiwi", "strawberry", "blueberry"];
let sortedWords = sortByLongestWords(wordsArray);
console.log(sortedWords); // Output: ["kiwi", "apple", "banana", "blueberry", "strawberry"]