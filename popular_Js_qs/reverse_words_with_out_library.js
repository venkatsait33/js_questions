function reverseWords(str) {
    let words = str.split(" ")
    let reversed = []
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i])
    }
    return reversed.join("")
}

console.log(reverseWords("I love coding"))