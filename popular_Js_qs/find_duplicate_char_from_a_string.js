
// nonRepeatedCharacter or DuplicateCharacter

function printDuplicateChar(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char in charCount) {
        if (charCount[char] > 1) {
            console.log(char);
        }
    }
}

printDuplicateChar("hello world");
printDuplicateChar("programming");