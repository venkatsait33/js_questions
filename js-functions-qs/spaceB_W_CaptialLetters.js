// Here's a JavaScript function that inserts spaces before capital letters in a given string:


function addSpacesBeforeCapitals(str) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

// Example usage:
let str = "MyNameIsSame";
let result = addSpacesBeforeCapitals(str);
console.log(result); 

// Regular Expression:

// /([A-Z])/g: Matches any uppercase letter(A - Z) globally in the string.
// The parentheses() create a capture group to retain the matched letter.
// Replace Function:

// ' $1': Adds a space before the matched letter($1 refers to the content of the first capture group).
//     trim():

// Removes any leading space added to the start of the string.

// Output: "My Name Is Same"