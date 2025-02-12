function findMaxNested(arr) {
    return Math.max(...arr.flat(Infinity));
}

console.log(findMaxNested([[1, 2, 3,10,12], [4, 5, 6], [7, 8, 9]])); // 9