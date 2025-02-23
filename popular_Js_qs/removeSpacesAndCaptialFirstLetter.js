function removeSpacesAndCapitalize(str) {
    // Split the string into words based on spaces
    let words = str.split(' ');

    // Capitalize the first letter of each word and join them
    let result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return result;
}

// Example usage:
let inputString = "hello world this is a test";
let outputString = removeSpacesAndCapitalize(inputString);
console.log(outputString); // Output: "HelloWorldThisIsATest"